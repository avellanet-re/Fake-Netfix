import { Component, ViewChild,ElementRef,Input } from '@angular/core';
import { Media } from 'src/app/interfaces/media';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent {

  console=console;
  @Input()
  public films!: Media;
  
  //Evento para desplazar los elementos dentro de la ul
  @ViewChild('list')
  list!: ElementRef;
  speed = 0.01;
  position = 0;
  totalWidth = 0;

  ngAfterViewInit() {
    this.totalWidth = this.list.nativeElement.scrollWidth;
  }

  onMouseMove(event: MouseEvent) {
    const containerWidth = this.list.nativeElement.offsetWidth;
    const containerCenter = containerWidth / 2;
    const distance = (event.clientX - containerCenter) * this.speed;
    this.position -= distance;

    if (this.position > 0) {
      this.position = 0;
    } else if (this.position < -(this.totalWidth - containerWidth)) {
      this.position = -(this.totalWidth - containerWidth);
    }

    this.list.nativeElement.style.transform = `translateX(${this.position}px)`;
  }
}



