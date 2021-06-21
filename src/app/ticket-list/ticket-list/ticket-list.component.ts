import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TicketService } from 'src/app/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})

export class TicketListComponent implements OnInit {
  free_ticket: any = 0;
  base_ticket: number = 0;
  vip_ticket: number = 0;
  book_ticket: number = 0;
  //selectedValue: number = 1;
  selectedFreeTicket;
  selectedBaseTicket;
  selectedVipTicket;
  constructor(private ticketService: TicketService
  ) {
    this.free_ticket = this.ticketService.free_subject.value.count;
    this.base_ticket = this.ticketService.base_subject.value.count;
    this.vip_ticket = this.ticketService.vip_subject.value.count;
  }

  ngOnInit(): void {
    // this.ticketService.subject.next(this.selectedDay); 

  }
  selectChangeHandlerFree(event: any, ticketFree) {
   
    // this.selectedDay

    // this.ticketService.subject.next(this.selectedDay);
    let ticket = this.ticketService.free_subject.value;
    ticket.count = this.free_ticket; 
    this.ticketService.free_subject.next(ticket);
    if(ticketFree == 1 || ticketFree == 2 || ticketFree==3){
      this.ticketService.selectedFreeTicket.next(
        this.selectedFreeTicket = true
      )
    }else if(ticketFree == 0){
      this.ticketService.selectedFreeTicket.next(
        this.selectedFreeTicket = false
      )
    }
    
  }

  selectChangeHandlerBase(event: any, ticketBase) {
   
    // this.selectedDay

    // this.ticketService.subject.next(this.selectedDay);
    let ticket = this.ticketService.base_subject.value;
    ticket.count = this.base_ticket; 
    this.ticketService.base_subject.next(ticket);
    if(ticketBase == 1 || ticketBase==2 || ticketBase==3){
      this.ticketService.selectedBaseTicket.next(
        this.selectedBaseTicket = true
      )
    }else if(ticketBase == 0){
      this.ticketService.selectedBaseTicket.next(
        this.selectedBaseTicket = false
      )
    }
  }

  selectChangeHandlerVip(event: any, ticketVip) {
   
    // this.selectedDay

    // this.ticketService.subject.next(this.selectedDay);
    let ticket = this.ticketService.vip_subject.value;
    ticket.count = this.vip_ticket; 
    this.ticketService.vip_subject.next(ticket);
    if(ticketVip == 1|| ticketVip==2 || ticketVip==3){
      this.ticketService.selectedVipTicket.next(
        this.selectedVipTicket = true
      )
    }else if(ticketVip == 0){
      this.ticketService.selectedVipTicket.next(
        this.selectedVipTicket = false
      )
    }
  }

  selectChangeHandlerBook(event:any){
    let book = this.ticketService.book_subject.value;
    book.count = this.book_ticket;
    this.ticketService.book_subject.next(book);
  }
  
}