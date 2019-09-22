import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../../shared/models/user.model';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'user-edit',
    templateUrl: '../resources/user-edit.component.html',
    styleUrls: ['../resources/styles/user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
    constructor(private route: ActivatedRoute, private api: UserService, private router: Router, private formBuilder: FormBuilder) { }

    user: User = { id: 0, fullName: '', username: '', password: ''};
    userForm: FormGroup;
    id:number=0;
  
    ngOnInit() {
      this.getUser(this.route.snapshot.params['id']);
      this.userForm = this.formBuilder.group({
        'fullName' : [null, Validators.required],
        'username' : [null, Validators.required],
        'password' : [null, Validators.required]
      });
    }
  
    getUser(id) {
      this.api.getUser(id).subscribe(data => {
        this.id = data.id;
        this.userForm.setValue({
          fullName: data.fullName,
          username: data.username,
          password: ''
        });
      });
    }

    onFormSubmit(form:NgForm) {
      this.api.updateUser(this.id, form)
        .subscribe(res => {
            let id = res['id'];
            this.router.navigate(['/users']);
          }, (err) => {
            console.log(err);
          }
        );
    }

    cancel(){
      this.router.navigate(['/users']);
    }

}