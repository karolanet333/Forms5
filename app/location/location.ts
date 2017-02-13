import {Component, Input} from '@angular/core' //, forwardRef
import {Http} from '@angular/http'
//import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'
import {Country} from './country'
import {CountryService} from './country.service'
import {Province} from './province'
import {ProvinceService} from './province.service'
import {ProvinceDivition1} from './province-divition1'
import {provinceDivition1Service} from './province-divition1.service'
import {ProvinceDivition2} from './province-divition2'
import {ProvinceDivition2Service} from './province-divition2.service'

@Component({
    moduleId: module.id,
    selector: 'location',
    templateUrl: './location.component.html',
    providers:[
        CountryService, 
        ProvinceService,
        provinceDivition1Service,
        ProvinceDivition2Service,
        Http,
        /*{
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(()=> LocationComponent ),
            multi: true
        }*/
    ]
})
export class LocationComponent { //implements ControlValueAccessor{

    @Input() location: {
        countryId: number,
        provinceId: number,
        provinceDivitions1Id: number,
        provinceDivitions2Id: number
    };

    countries: Country[];
    provinces: Province[];
    provinceDivitions1: ProvinceDivition1[];
    provinceDivitions2: ProvinceDivition2[];

    constructor(
        private countryService: CountryService,
        private provinceService: ProvinceService,
        private provinceDivition1Service: provinceDivition1Service,
        private provinceDivition2Service: ProvinceDivition2Service
    ){
        this.countries = countryService.getCountries();

        this.location = {
            countryId: 1,
            provinceId: 1,
            provinceDivitions1Id: 1,
            provinceDivitions2Id: 1
        }
    }

    countryChange(id: any){
        this.location.countryId = id;
        this.provinces = this.provinceService.getProvinces(+id);
    }

    provinceChange(id: any){
        this.location.provinceId = id;
        this.provinceDivitions1 = this.provinceDivition1Service.getProvinceDivitions1(+id);
    }

    provinceDivition1Change(id: any){
        this.location.provinceId = id;
        this.provinceDivitions1 = this.provinceDivition1Service.getProvinceDivitions1(+id);
    }

    /*propagateChange = (_:any) => {};

    writeValue(value: any){
        alert("writeValue");
        if(value != undefined){
            this.location.countryId = value.countryId;
            
        }
    }

    registerOnChange(fn: any){
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any){

    }*/
}