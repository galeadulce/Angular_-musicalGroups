import { HeroInterface } from './../../../../../angular_typescript/src/app/models/homeInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public heroInfo: HeroInterface;

  constructor() { 
    this.heroInfo = {
      subtitle: "Favorite music groups",
      image : {
        src: "../../../assets/images/banner.jpg",
        alt: "Banner concierto"
      }
    }
  }

  ngOnInit(): void {
  }

}
