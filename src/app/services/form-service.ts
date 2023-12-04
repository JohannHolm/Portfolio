import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private formspreeEndpoint = 'https://formspree.io/f/mnqkkeeg';

  constructor(private http: HttpClient) {}

  sendForm(data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.formspreeEndpoint, data, { headers: headers });
  }
}
