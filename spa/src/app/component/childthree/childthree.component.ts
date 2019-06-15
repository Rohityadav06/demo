import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childthree',
  templateUrl: './childthree.component.html',
  styles: []
})
export class ChildthreeComponent implements OnInit {
var_five
  constructor() {   this.var_five = "I am from child two !!!"; }

  ngOnInit() {
  }

}
