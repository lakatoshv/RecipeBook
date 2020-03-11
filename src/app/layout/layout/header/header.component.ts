import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  constructor() { }

  /**
   * @inheritdoc
   */
  ngOnInit(): void {
  }

  /**
   *  Work with hamburger on mobile
   */
  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

}
