import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/ticket.service';
import { TicketListComponent } from '../ticket-list/ticket-list.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ticket-summary',
  templateUrl: './ticket-summary.component.html',
  styleUrls: ['./ticket-summary.component.css']
})
export class TicketSummaryComponent implements OnInit {

  freeObservable: Observable<Ticket>;
  baseObservable: Observable<Ticket>;
  vipObservable: Observable<Ticket>;
  bookObservable: Observable<Ticket>;
  public location = '' ;

  tax: number = 289;
  constructor(private ticketService: TicketService,
    private  _router : Router
    ) {
    this.freeObservable = this.ticketService.observableOfFree;
    this.baseObservable = this.ticketService.observableOfBase;
    this.vipObservable = this.ticketService.observableOfVip;
    this.bookObservable = this.ticketService.observableOfBook;
    this.location = _router.url;
  }

  ngOnInit(): void {
    
  }

  getTotalCost(amount, price) {
    return amount * price;
    
  }

  getTotal(free_ticket_obj, base_ticket_obj, vip_ticket_obj, book_ticket_obj) {
    const total = this.getSubTotal(free_ticket_obj, base_ticket_obj, vip_ticket_obj, book_ticket_obj) + this.tax;
    return total;
  }

  getSubTotal(free_ticket_obj, base_ticket_obj, vip_ticket_obj, book_ticket_obj) {
    let free_total = free_ticket_obj.count * free_ticket_obj.price;
    let base_total = base_ticket_obj.count * base_ticket_obj.price;
    let vip_total = vip_ticket_obj.count * vip_ticket_obj.price;
    let book_total = book_ticket_obj.count * book_ticket_obj.price;

    return Math.round((free_total + base_total + vip_total +book_total)*100)/100;
  }
}
