import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { 
    console.log('in constructor of navbar');

  }
    
  ngOnInit(): void {
    console.log('ng oninit navbar');
    
  }

}
