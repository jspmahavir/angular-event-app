import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Event } from '.././Event';
import { NgForm }  from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { clearModulesForTest } from '@angular/core/src/linker/ng_module_factory_loader';
import { environment } from './../../environments/environment';

@Component({
    selector: 'app-event',
    templateUrl: './ticket.component.html',
    styleUrls: ['./event.component.css']
  })

  export class TicketComponent implements OnInit {
    ticketnumber:any=[];
    ticketStatus:any=[];
    apiUrl:string = environment.apiurl;

    constructor(
      private router: Router,
      private _http: Http,
      ) {
        
       }

       private headers = new Headers({'Content-type': 'application/json'});

       ngOnInit() {
         
       }

       onSubmit(){
        return this._http.get(this.apiUrl+'/redeem/'+this.ticketnumber)
        .subscribe(result => {
          this.ticketStatus = result.json().response;
        });
      }

      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
    }