import { Injectable } from '@angular/core';
declare var toastr: any
@Injectable()
export class ToasterServiceService {

  constructor() { }

  Success(title: string, message?: string){
    toastr.success(title,message);
  }
}
