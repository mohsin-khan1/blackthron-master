import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TicketType } from './enum/ticketType';
import { Ticket } from './models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {


  free_subject: BehaviorSubject<Ticket> = new BehaviorSubject<Ticket>({ type: TicketType.Free, price: 0, count: 0 });
  base_subject: BehaviorSubject<Ticket> = new BehaviorSubject<Ticket>({ type: TicketType.Base, price: 95.99, count: 0 });
  vip_subject: BehaviorSubject<Ticket> = new BehaviorSubject<Ticket>({ type: TicketType.Vip, price: 3500.00, count: 0 });
  book_subject: BehaviorSubject<Ticket> = new BehaviorSubject<Ticket>({type: TicketType.Book, price:17.99, count:0})

  constructor() {
  }

  get observableOfFree(): Observable<Ticket> {
    return this.free_subject.asObservable();
  }

  get observableOfBase(): Observable<Ticket> {
    return this.base_subject.asObservable();
  }

  get observableOfVip(): Observable<Ticket> {
    return this.vip_subject.asObservable();
  }
  get observableOfBook(): Observable<Ticket>{
    return this.book_subject.asObservable();
  }

  selectedFreeTicket = new BehaviorSubject(false);
  selectedBaseTicket = new BehaviorSubject(false);
  selectedVipTicket = new BehaviorSubject(false);

}
