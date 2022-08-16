import { FooterInterface } from './../../models/bandasInterfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footerInfo: FooterInterface;

  constructor() {
    this.footerInfo= {
      copyright: "Todos los derechos reservados - 2022"
    }
   }

  ngOnInit(): void {
  }

}
