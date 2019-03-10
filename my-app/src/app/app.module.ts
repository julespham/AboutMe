import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDividerModule, MatTabsModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './about-me/home/home.component';
import { WorkComponent } from './about-me/work/work.component';
import { ProjectsComponent } from './about-me/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeComponent,
    WorkComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonToggleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
