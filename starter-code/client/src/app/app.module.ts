import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { JournalService } from './service/journal.service';
import { Routes, RouterModule } from "@angular/router";
import { AboutPageComponent } from './about-page/about-page.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '',  component: EntryListComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'entry/:id', component: EntryDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    AboutPageComponent,
    EntryDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
