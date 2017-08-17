import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserStory } from '../userstory.model';

@Component({
  selector: 'app-userstory-list',
  templateUrl: './userstory-list.component.html',
  styleUrls: ['./userstory-list.component.css']
})
export class UserstoryListComponent implements OnInit {
  @Output() userStorySelected = new EventEmitter<UserStory>();
  userstories: UserStory[] = [
    new UserStory('User Connexion', 'A user is able to connect to the app', 100),
    new UserStory('Add article', 'A user is able to add an article', 90)
  ];

  constructor() { }

  ngOnInit() {
  }

  clickItem(userstory: UserStory) {
    this.userStorySelected.emit(userstory);
  }

  onUserStoryAdded(userStory: UserStory) {
    this.userstories.push(userStory);
  }

}
