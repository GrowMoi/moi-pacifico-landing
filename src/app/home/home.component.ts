import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'moi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onClickSubmit(data) {
    if (data.email.length) {
      this.http.post<any>(`${environment.apiBase}/send_emails`, {email: data.email}).subscribe((res) => {
        console.log(res);
      }, error => {
        console.log('error: ', error);
      });
    }
  }
}
