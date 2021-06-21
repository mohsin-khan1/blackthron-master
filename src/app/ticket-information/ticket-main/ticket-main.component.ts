import { ViewChild, ViewChildren } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TicketListComponent } from 'src/app/ticket-list/ticket-list/ticket-list.component';
import { TicketInfoComponent } from '../ticket-info/ticket-info.component';

@Component({
  selector: 'app-ticket-main',
  templateUrl: './ticket-main.component.html',
  styleUrls: ['./ticket-main.component.css']
})
export class TicketMainComponent implements OnInit {

  constructor() { }

  //isDisabled: boolean = true;

  ngOnInit(): void {

  }
  @ViewChild(TicketInfoComponent, { static: false }) hello: TicketInfoComponent;
  @ViewChildren(TicketInfoComponent) myValue: TicketInfoComponent;
  @ViewChildren(TicketListComponent) ticketValue: TicketInfoComponent;
  ngAfterViewInit() {
     console.log("Hello ", this.hello.name);
     console.log("Hello ", this.myValue);
    //  if(this.myValue.text !='')
    //  {
    //    this.isDisabled = false;
    //  }
      
  }
}
