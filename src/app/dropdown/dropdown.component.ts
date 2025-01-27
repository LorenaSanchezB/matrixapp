import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  imports: [NgFor],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
opcion1: string= "Tai Chi";
opcion2: string= "Jujitsu";
opcion3: string= "Taekwondo";

items = [
  {
    nivel: 'Básico',
  },

  {
    nivel: 'Intemedio',
  },

  {
    nivel: 'Avanzado',
  },
]

}
