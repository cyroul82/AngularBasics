import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserstoryComponent } from './userstory/userstory.component';
import { UserstoryDetailComponent } from './userstory/userstory-detail/userstory-detail.component';
import { UserstoryListComponent } from './userstory/userstory-list/userstory-list.component';
import { SprintPlanningComponent } from './sprint-planning/sprint-planning.component';
import { UserstoryEditComponent } from './userstory/userstory-edit/userstory-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserstoryComponent,
    UserstoryDetailComponent,
    UserstoryListComponent,
    SprintPlanningComponent,
    UserstoryEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
