import { Component, OnInit } from '@angular/core';
import { UserStory } from './userstory.model';

@Component({
  selector: 'app-userstory',
  templateUrl: './userstory.component.html',
  styleUrls: ['./userstory.component.css']
})
export class UserstoryComponent implements OnInit {
  userstory: UserStory
  constructor() { }

  ngOnInit() {
  }

  onUserStorySelected(userstory :UserStory) {
    this.userstory = userstory;
  }

  

}
