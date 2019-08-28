import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactPerson} from '../contact-person';
import {Observable} from 'rxjs/index';
import {catchError} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) {

  }
  url = 'http://localhost:5002/submit';

  addContact(contact: ContactPerson): Observable<ContactPerson> {
    return this.http.post<ContactPerson>(this.url, contact)
      .pipe();
  }
}
