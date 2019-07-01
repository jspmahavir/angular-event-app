import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Event } from '.././Event';
import { NgForm }   from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { clearModulesForTest } from '@angular/core/src/linker/ng_module_factory_loader';
import { environment } from './../../environments/environment';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
  })
  
  export class EventComponent implements OnInit {
    eventData:any=[];
    apiUrl:string = environment.apiurl;
    constructor(
      private router: Router,
      private _http: Http,
      ) {
        this.getEvents();
       }

    private headers = new Headers({'Content-type': 'application/json'});

    ngOnInit() {
      this.getEvents();
    }

    ngAfterContentInit() {
      this.getEvents();
    }

    getEvents(){
      return this._http.get(this.apiUrl+'/events',{headers: this.headers})
        .subscribe(result => {
          this.eventData = result.json()
        });
    }

    onSubmit(form: NgForm): Promise <Event>{
      return this._http.post(this.apiUrl+'/events', JSON.stringify(form.value), {headers: this.headers})
      .toPromise()
              .then(res => {
                form.reset();
                this.getEvents();
              }) 
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
}