import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';
import { StarShapeComponent } from '../star-shape/star-shape.component';

@Component({
  selector: 'app-about',
  imports: [StarShapeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
