import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  faSearch = faSearch;
  constructor() { }

  ngOnInit(): void {
    document.getElementById("manageUserBtn")?.classList.add("is-active");
  }

  ngOnDestroy():void {
    document.getElementById("manageUserBtn")?.classList.remove("is-active");
  }

}
