import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Event } from '.././Event';
import { NgForm }  from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { clearModulesForTest } from '@angular/core/src/linker/ng_module_factory_loader';

@Component({
    selector: 'app-event',
    templateUrl: './ticket.component.html',
    styleUrls: ['./event.component.css']
  })

  export class TicketComponent implements OnInit {
    ticketnumber:any=[];
    ticketStatus:any=[];
    constructor(
      private router: Router,
      private _http: Http,
      ) {
        
       }

       private headers = new Headers({'Content-type': 'application/json'});

       ngOnInit() {
         
       }

       onSubmit(){
        return this._http.get('http://127.0.0.1:8000/api/redeem/'+this.ticketnumber)
        .subscribe(result => {
          this.ticketStatus = result.json().response;
        });
      }

      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
    }