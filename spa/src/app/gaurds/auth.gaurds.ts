import { Injectable } from "@angular/core";

import { CanDeactivate, CanActivateChild, CanActivate } from '@angular/router';
import { PagethreeComponent } from '../component/pagethree/pagethree.component';

@Injectable()

export class authgaurds implements CanActivate,CanDeactivate<PagethreeComponent>,CanActivateChild
{
    canActivate():boolean{
      return confirm("do you want to enter into in this compo")  
    }
   canDeactivate():boolean{
       return confirm("do you want to exit from this component");
   } 
   canActivateChild():boolean{
    return confirm("Do you want to enter into child two ??");
   }
}