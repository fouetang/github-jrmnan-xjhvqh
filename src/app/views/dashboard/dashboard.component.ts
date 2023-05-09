import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './types/menu';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  showSideBar: boolean = false;


  menus: Menu[] = [
    {
      name: 'Administration',
      iconClass: 'bx bx-lock-alt',
      active: false,
      submenu: [
        { name: 'Sélection d\'un protefeuille', url: 'administration/portfolio' },
        { name: 'Corporate Action', url: 'administration/corporate-action' },
      ]
    },
    {
      name: 'Marchés',
      iconClass: 'bx bx-chart',
      active: false,
      submenu: [
        { name: 'Valeurs', url: 'market/value' },
        { name: 'Indices Boursiers', url: 'market/indice' },     
      ]
    },

  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  toggle(index: number) {
    this.menus[index].active = !this.menus[index].active;
  }

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }

  selectMenu(parentMenu: { name: string; }) : void {

    this.menus.forEach(menu => {
      if (menu.name !== parentMenu.name) {
        menu.active = false;
      } else {
        menu.active = !menu.active;
      }
    })
   
  }
}