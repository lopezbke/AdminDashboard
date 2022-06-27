import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {

  users: any;
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get<any>("https://localhost:7092/UserManagement").subscribe(response =>{
      this.users = response;
      console.log(response);
    })
    // TODO: This is bad replace
    const footer = document.getElementById('footer')!;
    footer.classList.remove('is-hidden');
  }

}
