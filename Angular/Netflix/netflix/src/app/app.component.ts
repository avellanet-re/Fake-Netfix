import { Component } from '@angular/core';
import { Media } from './interfaces/media';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'netflix-app'

  public anime: Media = {
    section: 'ANIME',
    films: [
      {
        title: 'AJIN',
        src: '../assets/images/Anime/ajin.jpg',
      },
      {
        title: 'CHIHIRO',
        src: '../assets/images/Anime/chihiro.webp',
      },
      {
        title: 'MONONOKE',
        src: '../assets/images/Anime/mononoke.webp',
      },
      {
        title: 'PERFECT BLUE',
        src: '../assets/images/Anime/perfectblue.webp',
      },
      {
        title: 'NINOKUNI',
        src: '../assets/images/Anime/ninokuni.jpg',
      },
      {
        title: 'EL CASTILLO AMBULANTE',
        src: '../assets/images/Anime/castilloambulante.webp',
      },
      {
        title: 'ARISE',
        src: '../assets/images/Anime/gitsarise.webp',
      },

    ]
  }

  public accion: Media = {
    section: 'ACTION',
    films: [
      {
        title: 'ejercito de los muertos',
        src: '../assets/images/Accion/ejercitomuertos.jpg',
      },
      {
        title: 'El Protector',
        src: '../assets/images/Accion/elprotector.webp',
      },
      {
        title: 'Equalizer 2',
        src: '../assets/images/Accion/equalizer2.webp',
      },
      {
        title: 'HEAT',
        src: '../assets/images/Accion/heat.webp',
      },
      {
        title: 'JOHN WHICK 2',
        src: '../assets/images/Accion/johnwick2.webp',
      },
      {
        title: 'WORLD WAR Z',
        src: '../assets/images/Accion/worldwarz.webp',
      },
      {
        title: 'MISSION IMPOSSIBLE 2 ',
        src: '../assets/images/Accion/misionimposiblenacion.webp',
      },

    ]
  }
  public top: Media = {
    section: 'TOP MOVIES',
    films: [
      {
        title: 'LA CASA DE PAPEL',
        src: '../assets/images/Top10/1-papel.webp',
      },
      {
        title: 'LA REINA DEL FLOW',
        src: '../assets/images/Top10/2-reina.webp',
      },
      {
        title: 'TITANES',
        src: '../assets/images/Top10/3-titanes.webp',
      },
      {
        title: 'LOST IN SPACE',
        src: '../assets/images/Top10/4-lostinspace.webp',
      },
      {
        title: 'DONDE CABEN DOS',
        src: '../assets/images/Top10/5-dondecaben.webp',
      },
      {
        title: 'AQUI NO HAY QUIEN VIVA',
        src: '../assets/images/Top10/6-aquinohay.webp',
      },
      {
        title: 'BLACKLIST',
        src: '../assets/images/Top10/7-blacklist.webp',
      },
      {
        title: 'RICOS Y MIMADOS',
        src: '../assets/images/Top10/8-ricos.webp',

      },
      {
        title: 'EL PODER DEL PERRO',
        src: '../assets/images/Top10/9-poder.webp',
      },
      {
        title: 'THE GOOD DOCTOR',
        src: '../assets/images/Top10/10-gooddoctor.webp',
      },

    ]
  }


  public drama: Media = {
    section: 'DRAMA',
    films: [
      {
        title: '1917',
        src: '../assets/images/Drama/1917.webp',
      },
      {
        title: 'ARRIVAL',
        src: '../assets/images/Drama/arrival.webp',
      },
      {
        title: 'EL CLUB DE LA LUCHA',
        src: '../assets/images/Drama/clublucha.webp',
      },
      {
        title: 'CORAZONES DE ACERO',
        src: '../assets/images/Drama/corazones.webp',
      },
      {
        title: 'CULPABLE',
        src: '../assets/images/Drama/culpable.jpg',
      },
      {
        title: 'LA MILLA VERDE',
        src: '../assets/images/Drama/millaverde.webp',
      },
      {
        title: 'LA LISTA DE SCHINDLER',
        src: '../assets/images/Drama/schindler.webp',
      },
    ]
  }

  public comedy: Media = {
    section: 'COMEDY',
    films: [
      {
        title: 'CASI 300',
        src: '../assets/images/Comedia/casi300.webp',
      },
      {
        title: 'lOS CAZA FANTASMAS',
        src: '../assets/images/Comedia/cazafantasmas.webp',
      },
      {
        title: 'EL DICTADOR',
        src: '../assets/images/Comedia/dictador.webp',
      },
      {
        title: 'SCARY MOVIE 3',
        src: '../assets/images/Comedia/scarymovie3.webp',
      },
      {
        title: 'TED 2',
        src: '../assets/images/Comedia/ted2.webp',
      },
      {
        title: 'RICK AND MORTY',
        src: '../assets/images/Comedia/rickandmorty.webp',
      },
      {
        title: 'ERASE UNA VEZ EN HOLLYWOOD',
        src: '../assets/images/Comedia/erasehollywood.webp',
      },
      {
        title: 'LA TERMINAL',
        src: '../assets/images/Comedia/laterminal.webp',
      },
      {
        title: 'FAMILY GUY',
        src: '../assets/images/Comedia/family guy.webp',
      },
    ]
  }

  public scifi: Media = {
    section: 'SCI-FI',
    films: [
      {
        title: "6dia",
        src: "../assets/images/Sci-fi/6dia.webp",
      },
      {
        title: "12monos",
        src: "../assets/images/Sci-fi/12monos.webp",
      },
      {
        title: "afterearth",
        src: "../assets/images/Sci-fi/afterearth.webp",
      },
      {
        title: "colverparadox",
        src: "../assets/images/Sci-fi/colverparadox.jpg",
      },
      {
        title: "core",
        src: "../assets/images/Sci-fi/core.webp",
      },
      {
        title: "deepimpact",
        src: "../assets/images/Sci-fi/deepimpact.webp",
      },
      {
        title: "doom",
        src: "../assets/images/Sci-fi/doom.webp",
      },
      {
        title: "gits",
        src: "../assets/images/Sci-fi/gits.webp",
      },
      {
        title: "jumper",
        src: "../assets/images/Sci-fi/jumper.webp",
      },
      {
        title: "passengers",
        src: "../assets/images/Sci-fi/passengers.webp",
      },
      {
        title: "startrek",
        src: "../assets/images/Sci-fi/startrek.webp",
      },
      {
        title: "transformers",
        src: "../assets/images/Sci-fi/transformers.webp",
      },
      {
        title: "watchmen",
        src: "../assets/images/Sci-fi/watchmen.webp",
      },
    ]
  }

  public terror: Media = {
    section: 'TERROR',
    films: [
      {
        title: "apostol.jpg",
        src: "../assets/images/Terror/apostol.jpg"
      },
      {
        title: "calleterror.jpg",
        src: "../assets/images/Terror/calleterror.jpg"
      },
      {
        title: "infiernoagua.webp",
        src: "../assets/images/Terror/infiernoagua.webp"
      },
      {
        title: "insidious2.webp",
        src: "../assets/images/Terror/insidious2.webp"
      },
      {
        title: "life.webp",
        src: "../assets/images/Terror/life.webp"
      },
      {
        title: "malasana.webp",
        src: "../assets/images/Terror/malasana.webp"
      },
      {
        title: "multiple.webp",
        src: "../assets/images/Terror/multiple.webp"
      },
      {
        title: "reflejos.webp",
        src: "../assets/images/Terror/reflejos.webp"
      },
    ]
  }
}
