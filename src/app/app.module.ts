import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { FadeInOnScrollDirective } from './fade-in-on-scroll.directive';

@NgModule({ declarations: [
        AppComponent,
        HeadComponent,
        AboutmeComponent,
        SkillsetComponent,
        MyworkComponent,
        ContactComponent,
        FooterComponent,
        ImprintComponent,
        PortfolioComponent,
        PrivacyComponent,
        FadeInOnScrollDirective,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule, AppRoutingModule, FormsModule], providers: [provideHttpClient(withXhr(), withInterceptorsFromDi())] })
export class AppModule {}
