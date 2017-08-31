import { Injectable } from '@angular/core';

declare let toastr: any;

@Injectable()
export class ToastrService {

    constructor() { }

    alert(mess: string, title: string){
        toastr.success(mess, title, {'timeOut': 2000})
    }

}

