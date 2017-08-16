import { Component, OnInit } from '@angular/core';
import { UserStory } from '../userstory/userstory.model';

@Component({
  selector: 'app-sprint-planning',
  templateUrl: './sprint-planning.component.html',
  styleUrls: ['./sprint-planning.component.css']
})
export class SprintPlanningComponent implements OnInit {
  userstories : UserStory[];
  constructor() { }

  ngOnInit() {
  }

}
