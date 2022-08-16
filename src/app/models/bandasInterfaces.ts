export interface NavigatorInterface {
  content: string;
  link: string;
}

export interface HeroInterface {
  subtitle: string;
  image: ImageInterface;

}

export interface GalleryInterface {
    title: string,
    discos: DiscosInterface [];


  }
  export interface DiscosInterface {
    artist: string,
    album: string,
    location: string,
    year: number,
    gender: string,
    image: ImageInterface,

  }



  

export interface ImageInterface {
  src: string;
  alt: string;
}

export interface ImageInterface {
  src: string;
  alt: string;
}

export interface FooterInterface {
  copyright: string;
}
