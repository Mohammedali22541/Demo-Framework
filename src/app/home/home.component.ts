import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';
import { StarShapeComponent } from '../star-shape/star-shape.component';

@Component({
  selector: 'app-home',
  imports: [StarShapeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
