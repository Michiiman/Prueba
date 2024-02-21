import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../servicios/personas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-persona',
  templateUrl: './lista-persona.component.html',
  styleUrl: './lista-persona.component.css'
})
export class ListaPersonaComponent implements OnInit {
  public personas: any[] = [];

  constructor(private personasService: PersonasService, 
              private router: Router) { }

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  async obtenerPersonas(){
    const data = await this.personasService.obtenerPersonas()
    this.personas = [...data];
  }

  verDetalle(id: number): void {
    this.router.navigate(['/detalle-persona', id]);
  }
}
