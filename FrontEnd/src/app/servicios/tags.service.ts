import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TagsService {
  public apiUrl = 'http://127.0.0.1:8000/api/level?level=1';

  constructor() { }

  getTagsLevel = async () => {
    try {
      const response = await fetch(this.apiUrl)
      const data = await response.json();
      return data
    } catch (error) {
      console.error(error);
    }
  }

  validateTags = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/validate')
      const data = await response.json();
      return data
    } catch (error) {
      console.error(error);
    }
  }

  
  
}
