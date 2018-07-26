import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { JournalService } from '../service/journal.service'

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {
  // whichEntry:any;

  theActualEntry: any;

  constructor(private detailsRoute: ActivatedRoute, 
  private theService: JournalService) { }

  ngOnInit() {
    this.detailsRoute.params
    .subscribe((params) => {
      this.theService.getAnEntry(params['id'])
      .subscribe((theEntryFromService)=>{
        this.theActualEntry = theEntryFromService
      })
      // whichEntry = params['id']
    })
  }

  
}
