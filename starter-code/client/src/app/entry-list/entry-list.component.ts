import { Component, OnInit } from '@angular/core';
import {JournalService} from '../service/journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  theEntries: Array<any>;
  newEntry: any = {};
  //^ Has to match the what we have in our ngModel
  //Also gets updated in real time 

  constructor(private theService: JournalService) { } 
            //^ Only the things in this document can affect the http
                        //^Able to call/use the info in our JService

  ngOnInit() {
    //^When the page loads
    this.showEntries()
  }

  showEntries(){
    this.theService.getEntries().subscribe((eachEntry)=>{
      this.theEntries = eachEntry.reverse();
                                //^Now shows at the top kinda od like append
    })
  }

  diaryEntry(newEntry){
    this.theService.postEntries(newEntry)
    //^ 
      .subscribe((diary)=>{
        //^Watches our http for changes
        this.showEntries()
      })
    
  }

}
//url then object which works like req.body
//3000 post object with the new keys 
//form in comp addNew Food instead of unshift call a funcrtioj that calls a new food 
//