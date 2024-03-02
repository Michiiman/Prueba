import { Component, OnInit } from '@angular/core';
import { TagsService } from '../servicios/tags.service';
import { Router } from '@angular/router';
import { Console } from 'console';


@Component({
  selector: 'app-lista-tags',
  templateUrl: './lista-tags.component.html',
  styleUrl: './lista-tags.component.css'
})
export class ListaTagsComponent implements OnInit {

  public tagsResponse: any[] = [];
  public tagsResult: any[] = [];
  public tagsReady: any[] = [];

  constructor(private tagsService: TagsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTags();
  }

  async getTags() {
    const data = await this.tagsService.getTagsLevel()
    this.tagsResponse = [...data];
  }

  tagSelected(event: any): void {
    const selectedValue = event.target.value;
    const selectedText = event.target.options[event.target.selectedIndex].text;

    this.tagsResult.push(selectedValue);
    let tagContainer = document.querySelector('#tagsContainer');
    if (tagContainer) {
      let listItem = document.createElement('li');
      listItem.textContent = selectedText;
      tagContainer.appendChild(listItem);
    }
    let nextLevel = this.tagsResult.length + 1;
    this.tagsService.apiUrl = 'http://127.0.0.1:8000/api/level?level=' + nextLevel + '&lastTag=' + selectedValue
    this.getTags();
  }

  async validate() {
    const data = await this.tagsService.validateTags();
    this.tagsResponse = [...data];
    let existentTag = this.tagsReady.find(tag => JSON.stringify(tag) === JSON.stringify(this.tagsResult));
    console.log(this.tagsReady)
    if (this.tagsReady.length == 0 ) {
        this.tagsReady.push(this.tagsResult);
    }else if(existentTag==undefined){
      this.tagsReady.push(this.tagsResult);
    }else{
      alert('Ya existe esta combinación.');
      return;
    }
    
    console.log(this.tagsReady);
    

    let info = data.find((tag:any) => tag.ids_tags === this.tagsResult.join());

    let validator = false;

    if (info) {
        validator = true;
        let tagContainer = document.querySelector('#validatedTags');
        if (tagContainer) {
            let listItem = document.createElement('li');
            listItem.textContent = `${this.tagsResult.join()} - Sí existe la combinación`;
            tagContainer.appendChild(listItem);
        }
    } else {
        alert('La combinación de etiquetas no existe o está incompleta');
        this.tagsReady.pop();
    }

    return validator;
}


  clean() {
    const data = document.querySelector('#tagsContainer');
    if (data) {
        data.innerHTML = "";
        this.tagsResult=[];
        let levelReset=1
        this.tagsService.apiUrl = 'http://127.0.0.1:8000/api/level?level='+ levelReset
        this.getTags();

    }

}





}


