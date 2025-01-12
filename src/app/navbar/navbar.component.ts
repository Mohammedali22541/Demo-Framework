import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HostListener } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @ViewChild('navbar') navbar!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = this.navbar.nativeElement;
    console.log(element.clientHeight);

    if (window.scrollY > element.clientHeight) {
      element.classList.add('py-3');
      element.classList.remove('py-4');
      // element.classList.add('bg-danger');
    } else {
      element.classList.remove('py-3');
      element.classList.add('py-4');
      // element.classList.remove('bg-danger');
    }
  }
}
