import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstoryItemComponent } from './userstory-item.component';

describe('UserstoryItemComponent', () => {
  let component: UserstoryItemComponent;
  let fixture: ComponentFixture<UserstoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserstoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
