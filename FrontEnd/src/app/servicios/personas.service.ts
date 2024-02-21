import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class PersonasService {

  private apiUrl = 'http://127.0.0.1:8000/api/personas';

  constructor() { }

  obtenerPersonas = async () => {
    try {
      const response = await fetch(this.apiUrl)
      const data = await response.json();
      return data
    } catch (error) {
      console.error(error);
    }
  }

  obtenerPersona = async (id: string) => {
    try {
      const response = await fetch(this.apiUrl + `/${id}`)
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error);
    }
  }

}
