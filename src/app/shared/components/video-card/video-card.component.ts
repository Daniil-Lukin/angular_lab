  import { Component, Input, OnInit } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
  import { SearchService } from '../../../search/services/search.service';

  @Component({
    selector: 'app-video-card',
    templateUrl: './video-card.component.html',
    styleUrls: ['./video-card.component.sass']
  })
  export class VideoCardComponent implements OnInit {


    @Input() video: any ;
    public videoId: string = '';
    @Input() isList!: boolean;

    constructor(private _service: SearchService) { }

    ngOnInit(): void {
      this.videoId = this.video.id.videoId;
      this._service.isList$.subscribe(view => this.isList = view);
    }


  }
