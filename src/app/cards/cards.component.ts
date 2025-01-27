import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombrepersonajeComponent } from '../nombrepersonaje/nombrepersonaje.component';
import { NgSwitch } from '@angular/common';


@Component({
  selector: 'app-cards',
  imports: [CommonModule, NombrepersonajeComponent, NgSwitch],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  personajeseleccionado = 'Neo';


  selectPersonaje(option: string) {
    this.personajeseleccionado= option;    
  }



}
