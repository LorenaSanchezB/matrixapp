import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CardsComponent } from './cards/cards.component';
import { BotonentrenaComponent } from './botonentrena/botonentrena.component';
import { NombrepersonajeComponent } from './nombrepersonaje/nombrepersonaje.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DropdownComponent, CardsComponent,BotonentrenaComponent,NombrepersonajeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'matrixapp';
}
