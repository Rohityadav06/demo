import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styles: []
})
export class PageoneComponent implements OnInit {

  constructor(private activedroutes:ActivatedRoute) { }

  ngOnInit() {
  }
 var_one= this.activedroutes.snapshot.params["p_id"]+"..."+
this.activedroutes.snapshot.params["p_name"]+"..."+
this.activedroutes.snapshot.params["p_cost"];
}
