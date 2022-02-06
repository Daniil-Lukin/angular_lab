import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IVideo } from '../../interfaces/IVideo';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.sass']
})
export class VideoPageComponent implements OnInit {

  public information!: IVideo;
  public relatedVideosInfo!: any;
  public videoUrl!: string;
  public commentaryInfo!: string;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.data.subscribe((data) =>{ this.information = data['videoInfo'][0]});
    this.videoUrl = `https://www.youtube.com/embed/${this.information.id}?autoplay=1`;
    this._route.data.subscribe(data => this.relatedVideosInfo = data['relatedVideos']);
    this._route.data.subscribe(data => this.commentaryInfo = data['comments']);
  }

}
