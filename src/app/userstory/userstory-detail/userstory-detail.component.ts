import { Component, OnInit, Input } from '@angular/core';
import { UserStory } from '../userstory.model';

@Component({
  selector: 'app-userstory-detail',
  templateUrl: './userstory-detail.component.html',
  styleUrls: ['./userstory-detail.component.css']
})
export class UserstoryDetailComponent implements OnInit {
  @Input() userstory: UserStory;
  constructor() { }

  ngOnInit() {
  }

}
