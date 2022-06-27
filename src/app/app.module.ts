import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationMenuTopComponent } from './navigation-menu-top/navigation-menu-top.component';
import { NavigationMenuBottomComponent } from './navigation-menu-bottom/navigation-menu-bottom.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { HttpClientModule } from '@angular/common/http';
import { UserManagementComponent } from './user-management/user-management.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationMenuTopComponent,
    NavigationMenuBottomComponent,
    ViewAllUsersComponent,
    ErrorComponentComponent,
    UserManagementComponent,
    ManageUserComponent,
    AddNewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
