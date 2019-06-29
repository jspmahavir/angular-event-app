import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Event } from '.././Event';
import { NgForm }   from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { clearModulesForTest } from '@angular/core/src/linker/ng_module_factory_loader';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
  })
  
  export class EventComponent implements OnInit {
    eventData:any=[];
    constructor(
      private router: Router,
      private _http: Http,
      ) {
        
       }

    private headers = new Headers({'Content-type': 'application/json'});

    ngOnInit() {
      this.getEvents();
    }

    ngAfterContentInit() {
      this.getEvents();
    }

    getEvents(){
      return this._http.get('http://127.0.0.1:8000/api/events',{headers: this.headers})
        .subscribe(result => {
          this.eventData = result.json()
        });
    }

    onSubmit(form: NgForm): Promise <Event>{
      return this._http.post('http://127.0.0.1:8000/api/events', JSON.stringify(form.value), {headers: this.headers})
      .toPromise()
              .then(res => res.json().data)
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
}