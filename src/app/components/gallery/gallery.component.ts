import {
  GalleryInterface,
  DiscosInterface,
} from './../../models/bandasInterfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public galleryInfo: GalleryInterface;

  constructor() {
    this.galleryInfo = {
      title: 'Albums Gallery',
      discos: [
        {
          artist: 'Gustavo Cerati',
          album: "Siempre es hoy",
          location: 'Argentina',
          year: 2002,
          gender: 'Alternative Rock',
          image: {
            src: "../../../assets/albums/siempre.es.hoy.jfif",
            alt: 'Siempre es Hoy cover',
          },
        }, 

        {
          artist: 'Love Of Lesbian',
          album: "Poeta Halley",
          location: 'Spain',
          year: 2016,
          gender: 'Indie, Rock',
          image: {
            src: "../../../assets/albums/poeta.halley.jpg",
            alt: 'Poeta Halley cover',
          },

        }, 

        {
          artist: 'The Killers',
          album: "Battle Born",
          location: 'United States',
          year: 2001,
          gender: 'Alternative Rock',
          image: {
            src: "../../../assets/albums/battle.born.png",
            alt: 'Battle Born cover',
          },

        }, 
        {
          artist: 'Vetusta Morla',
          album: "Un día en el mundo",
          location: 'Spain',
          year: 2008,
          gender: 'Indie Pop',
          image: {
            src: "../../../assets/albums/un.dia.en.el.mundo.jpg",
            alt: 'Un dia en el mundo cover',
          },

        }, 

        {
          artist: 'Los Paranoias',
          album: "Cuando tu estas",
          location: 'Venezuela',
          year: 2002,
          gender: 'Alternative Rock',
          image: {
            src: "../../../assets/albums/cuando.tu.estas.jfif",
            alt: 'Cuando tu estas cover',
          },

        }, 

        {
          artist: 'Soda Stereo',
          album: "Nada Personal",
          location: 'Argentina',
          year: 1985,
          gender: 'Alternative Rock',
          image: {
            src: "../../../assets/albums/nada.personal.jfif",
            alt: 'Nada personal cover',
          },

        }, 
        {
          artist: 'Zoe',
          album: "Memo Rex",
          location: 'Mexico',
          year: 2006,
          gender: 'Alternative Rock',
          image: {
            src: "../../../assets/albums/memorex.jpg",
            alt: 'memo rex cover',
          },

        }, 

        {
          artist: 'Stereophonics',
          album: "Pull the pin",
          location: 'United Kingdom',
          year: 2007,
          gender: 'Alternative Rock',
          image: {
            src: "../../../assets/albums/pullthepin.jpg",
            alt: 'memo rex cover',
          },

        }, 

      ],
    };
  }

  ngOnInit(): void {}
}
