import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentary-section',
  templateUrl: './commentary-section.component.html',
  styleUrls: ['./commentary-section.component.sass']
})
export class CommentarySectionComponent implements OnInit {

  @Input() commentary: any;

  constructor() { }

  ngOnInit(): void {
  }

}
