import { Component, Input, input } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nombrepersonaje',
  imports: [NgIf, CommonModule],
  templateUrl: './nombrepersonaje.component.html',
  styleUrl: './nombrepersonaje.component.css'
})
export class NombrepersonajeComponent {
   @Input() name= ''; 
  
}

