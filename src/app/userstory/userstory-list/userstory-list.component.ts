import { Component, OnInit } from '@angular/core';
import { UserStory } from '../userstory.model';

@Component({
  selector: 'app-userstory-list',
  templateUrl: './userstory-list.component.html',
  styleUrls: ['./userstory-list.component.css']
})
export class UserstoryListComponent implements OnInit {

  userstories: UserStory[] = [
    new UserStory('User Connexion', 'A user is able to connect to the app', 100),
    new UserStory('User Connexion', 'A user is able to connect to the app', 100)
  ];

  constructor() { }

  ngOnInit() {
  }

}
