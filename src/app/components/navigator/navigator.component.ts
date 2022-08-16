import { Component, OnInit } from '@angular/core';
import { NavigatorInterface } from 'src/app/models/bandasInterfaces';



@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  public navigatorInfo : NavigatorInterface [];
 
  constructor() {
    this.navigatorInfo = [{
      content: "Home",
      link:  "#home"
    }, {
      content: "Gallery",
      link:  "#gallery"
    }, {
      content: "About",
      link:  "#about"
    }]
    
  }

  ngOnInit(): void {
  }

}
