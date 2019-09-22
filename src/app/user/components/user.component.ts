import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../../shared/models/user.model';
@Component({
    selector: 'user',
    templateUrl: '../resources/user.component.html',
    styleUrls: ['../resources/styles/user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private api: UserService) { }
  
  displayedColumns: string[] = ['name', 'description', 'address'];
  data: User[] = [];
  selectedUser: User;

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.api.getUsers()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
      }, err => {
        console.log(err);
      });
  }

  deleteUser(id) {
    this.api.deleteUser(id)
      .subscribe(res => {
        this.getUsers();
        }, (err) => {
          console.log(err);
        }
      );
  }

  onRowSelect(event) {
    let id = event.data.id;
    this.router.navigate(['users/edit', id]);
  }
  
}