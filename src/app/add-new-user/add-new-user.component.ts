import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  faSearch = faSearch;
  constructor() { }

  ngOnInit(): void {
    document.getElementById("addNewUserBtn")?.classList.add("is-active");
  }

  ngOnDestroy():void {
    document.getElementById("addNewUserBtn")?.classList.remove("is-active");
  }

}
