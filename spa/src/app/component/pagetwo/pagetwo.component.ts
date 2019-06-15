import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styles: []
})
export class PagetwoComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
  }
var_two= this.router.snapshot.params["p_id"]+"...."+
this.router.snapshot.params["p_name"]+".."+
this.router.snapshot.params["p_cost"];
}
