import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search/services/search.service';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.sass']
})
export class SearchContainerComponent implements OnInit {

  queryArray: string[] = [];

  constructor(private service: SearchService) { }

  ngOnInit(): void {
    this.service.query$.subscribe((query) => this.queryArray.push(query));
  }

}
