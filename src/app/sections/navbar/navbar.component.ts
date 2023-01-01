import { Component, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  menuStyle: string = 'initial-opacity';
  showMenu = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
    this.showMenu ? this.menuStyle = 'full-opacity' : this.menuStyle = 'initial-opacity';
  }
}
