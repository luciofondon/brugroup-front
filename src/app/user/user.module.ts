
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
import { HeaderCustomComponent } from './components/header-custom.component';
import { FooterCustomComponent } from './components/footer-custom.component';
import { MenuComponent } from './components/menu.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        UserRoutingModule,
        TableModule,
        ButtonModule,
        PanelModule,
        InputTextModule,
        SharedModule,
        MessagesModule,
        MessageModule
    ],
    declarations: [
        UserAddComponent,
        UserEditComponent,
        UserComponent,
        HeaderCustomComponent,
        FooterCustomComponent,
        MenuComponent
    ],
    providers: [
        UserService
    ],
    exports: [
        HeaderCustomComponent,
        FooterCustomComponent,
        MenuComponent

    ]
})
export class UserModule {
  
}
