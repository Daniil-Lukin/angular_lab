import { query } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.sass']
})
export class VideoCardComponent implements OnInit {


  @Input() video: any ;
  private _videoId: string = '';
  public routePath: string = '';


  constructor(private _router: Router) { }

  ngOnInit(): void {
    this._videoId = this.video.id.videoId;
    this.routePath = `/watch/${this._videoId}`;
  }


}
