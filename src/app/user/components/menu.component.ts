import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'menu',
    templateUrl: '../resources/menu.component.html',
    styleUrls: ['../resources/styles/menu.component.scss']
})
export class MenuComponent implements OnInit {

    public option : number = 1;

    constructor() { }
  
    ngOnInit() {
  
    }

    handleClickMenu(id: number){
        this.option = id;
    }
  

}