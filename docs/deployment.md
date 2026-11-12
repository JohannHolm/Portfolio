# Deployment

## Ablauf

`.github/workflows/deploy.yml` führt bei Pushes auf `main` und bei manuellem Start
einen CI/CD-Lauf auf `ubuntu-latest` aus. Mit Node.js 18.20.8 werden die
Abhängigkeiten per `npm ci` installiert und das Angular-Projekt für Production
gebaut. Vor dem Upload prüft der Workflow, dass
`dist/portfolio/index.html` und `.htaccess` vorhanden und nicht leer sind. Erst
danach synchronisiert `SamKirkland/FTP-Deploy-Action@v4.4.0` die Dateien über
explizites FTPS/TLS.

Das Production-Build optimiert weiterhin Skripte und Styles, lädt aber keine
externen Google-Fonts-CSS-Dateien während des Builds herunter. Die vorhandenen
Font-Links in `src/index.html` bleiben unverändert und werden vom Browser geladen.

Der Build-Ausgabeordner ist `dist/portfolio/` (ohne `browser`-Unterordner). Das
Serverziel ist `./`; der FTP-Benutzer muss daher auf das Portfolio-Verzeichnis
beschränkt sein. Deployments werden durch eine Workflow-Concurrency-Gruppe
serialisiert. „Dangerous clean slate“ ist deaktiviert.

`src/.htaccess` wird als Build-Asset mit ausgeliefert. Die Rewrite-Regeln leiten
nicht vorhandene Pfade an Angular weiter und lassen bestehende Dateien und
Verzeichnisse direkt erreichbar. Im Repository war zuvor keine `.htaccess`
vorhanden. Wenn auf dem Webspace bereits eigene Regeln existieren, müssen diese
vor dem ersten Deployment in `src/.htaccess` übernommen werden, damit die
Deployment-Synchronisierung die Datei nicht durch diese Konfiguration ersetzt.

## GitHub Secrets

Lege unter **Settings > Secrets and variables > Actions** diese drei Secrets an:

- `FTP_SERVER`: ALL-INKL-FTP-Servername
- `FTP_USERNAME`: dedizierter FTP-Benutzer, eingeschränkt auf das Portfolio-Verzeichnis
- `FTP_PASSWORD`: Passwort dieses Benutzers

Die Zugangsdaten gehören ausschließlich in GitHub Secrets. Der Workflow benötigt
keine Schreibberechtigungen auf das GitHub-Repository und protokolliert nur
minimale FTP-Aktionsausgaben.

## Auslösen und Fehleranalyse

- **Automatisch:** Push auf `main`.
- **Manuell:** Repository **Actions > Build and deploy portfolio > Run workflow**,
  Branch `main` auswählen und starten. Alternativ kann `workflow_dispatch` über
  die GitHub-API ausgelöst werden.
- **Fehlerdiagnose:** Den fehlgeschlagenen Lauf unter **Actions** öffnen und die
  Logs von Installation, Build, Ausgabepfad-Prüfung oder FTPS-Upload
  prüfen. Fehlende/ungültige Secrets, FTPS-Verbindung und FTP-Verzeichnisrechte
  sind insbesondere beim Upload zu kontrollieren. Secrets werden nicht in die
  Dokumentation oder in Workflow-Ausgaben geschrieben.

Die vorhandenen Karma-Tests sind nicht Bestandteil des Deploy-Workflows: Beim
lokalen Testlauf schlagen sie derzeit durch nicht gefundene Sass-Imports in
Komponenten-Styles sowie einen TypeScript-Fehler im Test der
`FadeInOnScrollDirective` fehl. Dadurch kann der Build und ein ansonsten gültiges
Deployment nicht von diesen bestehenden Testproblemen blockiert werden.

Die FTP-Deploy-Action synchronisiert die im Build enthaltenen Dateien und kann
frühere, von ihr verwaltete Dateien entfernen, die nicht mehr zur Ausgabe
gehören. Sie leert das Zielverzeichnis nicht pauschal, aber der FTP-Benutzer
sollte trotzdem ausschließlich Zugriff auf das vorgesehene Portfolio-Verzeichnis
haben. Keine fremden Website-Dateien in diesem Verzeichnis ablegen.
