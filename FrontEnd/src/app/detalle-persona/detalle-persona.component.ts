import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonasService } from '../servicios/personas.service';



@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrl: './detalle-persona.component.css'
})
export class DetallePersonaComponent implements OnInit {
  public persona: any ;
  constructor(private route: ActivatedRoute,
              private personasService: PersonasService) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')||'';
    this.obtenerPersona(id);

  }

  async obtenerPersona(id:string){
    const data = await this.personasService.obtenerPersona(id)
    this.persona = {...data};
  }

}

