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
  public url: string = "";
  constructor(private tagsService: TagsService,
    private router: Router) { }

  ngOnInit(): void {
    this.GetTags();
  }

  async GetTags() {
    const data = await this.tagsService.GetTagsLevel()
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
    this.GetTags();
  }

  validateTags() {

  }


}


