import { Component, OnInit } from '@angular/core';
import {JournalService} from '../service/journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  theEntries: Array<any>;
  Entry: Object;

  constructor(private theService: JournalService) { }

  ngOnInit() {
    this.theService.getEntries().subscribe((diary)=>this.theEntries = diary)
  }

}
//url then object which works like req.body
//3000 post object with the new keys 
//form in comp addNew Food instead of unshift call a funcrtioj that calls a new food 
//