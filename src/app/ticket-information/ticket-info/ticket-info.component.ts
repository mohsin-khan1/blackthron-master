import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from 'src/app/ticket.service';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.css']
})
export class TicketInfoComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  selectedFreeTicket;
  selectedBaseTicket;
  selectedVipTicket;
  selectedAlumniBase= false;
  selectedAlumniVip= false;
  text:string = '';

  form = {
    first_name: '',
    last_name: '',
    email: '',
  }

  validity = {
    first_name: true,
    last_name: true,
    email: true,
  }
  @Input() name: string;
  constructor( private service:TicketService) { }
  ngOnInit(): void {
    
    this.service.selectedFreeTicket.subscribe(res=>{
      this.selectedFreeTicket = res;
    });
    this.service.selectedBaseTicket.subscribe(res=>{
      this.selectedBaseTicket = res;
    });
    this.service.selectedVipTicket.subscribe(res=>{
      this.selectedVipTicket = res;
    });
  }
  isValid() {
    // Clear Validation
    this.validity.first_name = true;
    this.validity.last_name = true;
    this.validity.email = true;
    // Required Checks 
    this.validity.first_name = this.form.first_name === '' ? false : true;
    this.validity.last_name = this.form.last_name === '' ? false : true;
    this.validity.email = this.form.email === '' ? false : true;

    // Email Check
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.validity.email = re.test(String(this.form.email).toLowerCase()) === false ? false : true;
  }

}
