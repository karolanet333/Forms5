import {Component} from '@angular/core'; //, OnInit
//import {Response} from '@angular/http'

//import {HttpService} from './http.service'


@Component({
    moduleId: module.id,
    selector: 'http-app',
    template: `
        <p>servicio</p>
    `//,
    //providers: [HttpService]
})
export class HttpAppComponent //implements OnInit
{
    //constructor(){//private httpService: HttpService){

    //}

    /*ngOnInit(){
        this.httpService.getData()
            .subscribe(
                (data: Response) => console.log(data)
            );
    }*/
}