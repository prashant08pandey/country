import { Injectable } from '@angular/core';

declare var toastr:any;
@Injectable()
export class ToasterService {

  constructor() {
  		this.setting();
   }

  Success(title:string, msg?:string){
  	toastr.success(title,msg);
  } 

  Warning(title:string, msg?:string){
  	toastr.warning(title,msg);
  }

  setting(){
  	toastr.options = {
  		  "closeButton": false,
		  "debug": false,
		  "newestOnTop": false,
		  "progressBar": false,
		  "positionClass": "toast-top-full-width",
		  "preventDuplicates": false,
		  "onclick": null,
		  "showDuration": "100",
		  "hideDuration": "500",
		  "timeOut": "2000",
		  "extendedTimeOut": "1000",
		  "showEasing": "swing",
		  "hideEasing": "linear",
		  "showMethod": "fadeIn",
		  "hideMethod": "fadeOut"
}
  }
}
