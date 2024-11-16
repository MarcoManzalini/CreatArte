import { Component, OnInit } from '@angular/core';
import { exportedTecnica, getTecniche } from '../../../data/tecniche.data';
import { CommonModule } from '@angular/common';
import { ShowTecnicaComponent } from "./show-tecnica/show-tecnica.component";

@Component({
  selector: 'app-lista-tecniche',
  standalone: true,
  imports: [CommonModule, ShowTecnicaComponent],
  templateUrl: './lista-tecniche.component.html',
  styleUrl: './lista-tecniche.component.scss'
})
export class ListaTecnicheComponent implements OnInit {
  tecniche: exportedTecnica[] = [];

  ngOnInit(): void {
    this.tecniche = getTecniche();
  }
}