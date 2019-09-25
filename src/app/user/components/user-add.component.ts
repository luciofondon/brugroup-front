import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'user-add',
    templateUrl: '../resources/user-add.component.html',
    styleUrls: ['../resources/styles/user-add.component.scss']
})
export class UserAddComponent implements OnInit {

   
    constructor(private router: Router, private api: UserService, private formBuilder: FormBuilder) { }
  
    userForm: FormGroup;
    name:string='';
    description:string='';
    isLoadingResults = false;
  
    ngOnInit() {
      this.userForm = this.formBuilder.group({
        'fullName' : [null, Validators.compose([Validators.required, Validators.maxLength(200), Validators.pattern("^[A-Za-z\\s]*$")])],
        'username' : [null, Validators.compose([Validators.required, Validators.maxLength(20), Validators.pattern("^[A-Za-z0-9]*$")])],
        'password' : [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern("^[a-zA-Z]*(?=.*[A-Z])(?=.*[0-9])[A-Z0-9]*[a-zA-Z]*$")])]
      });
    }

    onFormSubmit(form:NgForm) {
      this.api.addUser(form)
        .subscribe(res => {
            let id = res['id'];
            this.router.navigate(['/users']);
          }, (err) => {
            console.log(err);
          });
    }

    handleCLick(){
      
      console.log("entra")
    }
}