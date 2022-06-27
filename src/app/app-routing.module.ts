import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { LoginComponent } from './login/login.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';

const routes: Routes = [
  {
    path: '', component: UserManagementComponent,
    children: [
      { path: '', component: ViewAllUsersComponent },
      { path: 'ViewAllUsers', component: ViewAllUsersComponent }
    ],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'UserManagement', component: UserManagementComponent,
    children: [
      { path: '', component: ViewAllUsersComponent },
      { path: 'ViewAllUsers', component: ViewAllUsersComponent },
      { path: "ManageUser", component: ManageUserComponent },
      { path: "AddNewUser", component: AddNewUserComponent }
    ],
  },
  { path: '**', component: ErrorComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
