import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import { Headers, RequestOptions } from '@angular/http';
//import { Observable }     from 'rxjs/Rx'; 
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class HttpService{

    url = "https://carotest1-4f7cf.firebaseio.com/title";

    constructor(private http: Http){}

    getData(){
        return this.http.get("https://carotest1-4f7cf.firebaseio.com/title.json");
    }
}