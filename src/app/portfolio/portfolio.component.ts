import { Component, ElementRef, ViewChild } from '@angular/core';
import { StarComponent } from '../star/star.component';
import { StarShapeComponent } from '../star-shape/star-shape.component';

interface Images {
  imageSrc: string;
  alt: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  images: Images[] = [
    { imageSrc: '/poert1.png', alt: 'pic1' },
    { imageSrc: '/port2.png', alt: 'pic2' },
    { imageSrc: '/port3.png', alt: 'pic3' },
    { imageSrc: '/poert1.png', alt: 'pic4' },
    { imageSrc: '/port2.png', alt: 'pic5' },
    { imageSrc: '/port3.png', alt: 'pic6' },
  ];

  @ViewChild('modal') modal!: ElementRef;
  currentimgSrc: string = '';
  currentAlt: string = '';

  openModal(currentImage: Images): void {
    this.modal.nativeElement.classList.remove('d-none');
    this.modal.nativeElement.classList.add('d-flex');
    this.currentimgSrc = currentImage.imageSrc;
    this.currentAlt = currentImage.alt;
    // console.log(currentImage);
  }
  isModalOpen!: boolean;
  modalTest!: boolean;
  closeModal(event: any): void {
    // console.log(event.target);
    // this.modal.nativeElement.classList.remove('d-flex');
    // this.modal.nativeElement.classList.add('d-none');
    // console.log(event.target.classList == 'w-100');
    // this.modalTest = event.target.classList == 'w-100';
    // this.isModalOpen = event.target.classList.contains('d-flex');
    if (event.target.classList != 'w-100') {
      this.modal.nativeElement.classList.add('d-none');
    }
  }
}
