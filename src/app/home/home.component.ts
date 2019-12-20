import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    this.http.post<any>('/api/send_emails', {email: data.email}).subscribe((res) => {
      console.log(res);
    });
  }
}
