
import { NgModule } from '@angular/core';

import { UserService } from './services/user.service';
import { UserRoutingModule } from './user-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        UserRoutingModule,
        TableModule,
        ButtonModule,
        PanelModule,
        InputTextModule,
        RatingModule,
        
    ],
    declarations: [
      
    ],
    providers: [
        UserService
    ],
    exports: [

    ]
})
export class UserModule {

}
