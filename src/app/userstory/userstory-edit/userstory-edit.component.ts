import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { UserStory } from '../userstory.model';

@Component({
  selector: 'app-userstory-edit',
  templateUrl: './userstory-edit.component.html',
  styleUrls: ['./userstory-edit.component.css']
})
export class UserstoryEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef: ElementRef;
  @ViewChild('businessValueInput') businessValueInputRef: ElementRef;
  @Output() userStoryAdded = new EventEmitter<UserStory>();
  constructor() { }

  ngOnInit() {
  }

  onAddUserStory() {
    const name = this.nameInputRef.nativeElement.value;
    const description = this.descriptionInputRef.nativeElement.value;
    const businessValue = this.businessValueInputRef.nativeElement.value;
    const userStory = new UserStory(name, description , businessValue);
    this.userStoryAdded.emit(userStory);
    }


}
