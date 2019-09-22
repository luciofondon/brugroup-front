
import { NgModule } from '@angular/core';

import { UserService } from './services/user.service';
import { UserRoutingModule } from './user-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PanelModule} from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAddComponent } from './components/user-add.component';
import { UserEditComponent } from './components/user-edit.component';
import { UserComponent } from './components/user.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        UserRoutingModule,
        TableModule,
        ButtonModule,
        PanelModule,
        InputTextModule,
        SharedModule
    ],
    declarations: [
        UserAddComponent,
        UserEditComponent,
        UserComponent
    ],
    providers: [
        UserService
    ],
    exports: [

    ]
})
export class UserModule {

}
