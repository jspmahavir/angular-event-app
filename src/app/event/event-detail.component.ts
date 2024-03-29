import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Event } from '.././Event';
import { NgForm }   from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { clearModulesForTest } from '@angular/core/src/linker/ng_module_factory_loader';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { environment } from './../../environments/environment';

@Component({
    selector: 'app-event',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event.component.css']
  })

  export class EventDetailComponent implements OnInit {
    eventId:any=[];
    eventDetails:any=[];
    tickets:any=[];
    eventTicketCount:any=[];
    ticketcount:any='';
    apiUrl:string = environment.apiurl;
    constructor(
        private router: Router,
        private _http: Http,
        private activatedRoute: ActivatedRoute
        ) {
          
         }
    private headers = new Headers({'Accept': 'application/json'});

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.eventId = params['id'];
           });
        this.getEventDetails();
        this.getEventTicketCount();
      }

      getEventDetails() {
        return this._http.get(this.apiUrl+'/events/'+ this.eventId,{headers: this.headers})
          .subscribe(result => {
            this.eventDetails = result.json();
            this.tickets = this.eventDetails.tickets;
          });
      }

      getEventTicketCount() {
        return this._http.get(this.apiUrl+'/events/'+ this.eventId+"/count",{headers: this.headers})
          .subscribe(result => {
            this.eventTicketCount = result.json()
          });
      }

      addMoreTickets() {
        this._http.get(this.apiUrl+'/events/'+ this.eventId +"/add/"+this.ticketcount,{headers: this.headers})
          .subscribe(result => {
            //this.eventTicketCount = result.json()
            this.router.navigate(['events'])
          });
      }

      downloadTickets() {
        var head = ['EventId', 'TicketId', 'TicketNumber', 'IsRedeem', 'CreatedDate', 'UpdatedDate'];
        new Angular2Csv(this.tickets, 'tickets_'+this.eventId, { headers: (head) });
      }
  }