import { Component, OnInit } from '@angular/core';
import { TagsService } from '../servicios/tags.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-tags',
  templateUrl: './lista-tags.component.html',
  styleUrl: './lista-tags.component.css'
})
export class ListaTagsComponent implements OnInit {

  public tagsResponse: any[] = [];
  public tagsResult: any[] = [];

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
    let validator = false;
    let info = data.forEach((element: any) => {
      if (element.ids_tags == this.tagsResult.join()) {
        validator = true;
        alert("El tag si existe");
      }
    });

    let tagContainer = document.querySelector('#validatedTags');
    if (tagContainer) {
      let listItem = document.createElement('li');
      listItem.textContent = this.tagsResult.join()+' '+'Si existe la combinacion';
      tagContainer.appendChild(listItem);
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


