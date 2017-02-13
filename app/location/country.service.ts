import {Country} from './country';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core'

@Injectable()
export class CountryService{

    data: any;

    constructor(private http: Http){
        this.http.get('./data/countries.json')
            .subscribe(res => this.data = res.json);
    }

    getCountries(): Country[]{
        return <Country[]>this.data;
    }


    getCountries2(): Country[]{
        return [
            new Country(1, "Argentina"),
            new Country(2, "Brasil"),
            new Country(3, "Chile"),
            new Country(4, "EEUU")    
        ];
    }
}