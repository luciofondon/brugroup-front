import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user.component';
import { UserAddComponent } from './components/user-add.component';
import { UserEditComponent } from './components/user-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    data: { title: 'List of Users' }
  },
  {
    path: 'add',
    component: UserAddComponent,
    data: { title: 'Add User' }
  },
  {
    path: 'edit/:id',
    component: UserEditComponent,
    data: { title: 'Edit User' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {

}
