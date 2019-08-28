import { Component, OnInit } from '@angular/core';
import {ContactPerson} from '../contact-person';
import {ConfigService} from './config.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  url = 'http://localhost:5002/submit';
  tempContact = null;
  contact: ContactPerson = new ContactPerson('', '', '');
  roles: string[] = ['Recruiter', 'Developer', 'Team Leader', 'Other'];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('name: ' + this.contact.name);
    console.log('email: ' + this.contact.email);
    console.log('role: ' + this.contact.role);
    this.tempContact = {
      name: this.contact.name,
      email: this.contact.email,
      role: this.contact.role
    };

    this.httpClient.post(this.url, JSON.stringify(this.tempContact), {
      headers: {'Content-Type': 'application/json; charset=utf-8'}
    })
      .subscribe(data => {
        console.log(data);
      }, error2 => {
        console.log(error2);
      });



  }

}
