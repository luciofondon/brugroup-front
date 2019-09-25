import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Usuarios REST', icon: 'pi pi-fw pi-sitemap', "routerLink": "/users"}
      ];
  }
}
