import { Component, OnInit, Input } from '@angular/core';
import { UserStory } from '../../userstory.model';

@Component({
  selector: 'app-userstory-item',
  templateUrl: './userstory-item.component.html',
  styleUrls: ['./userstory-item.component.css']
})
export class UserstoryItemComponent implements OnInit {
  @Input() userstory: UserStory;
  constructor() { }

  ngOnInit() {
  }

}
