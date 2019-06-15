import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styles: []
})
export class ChildtwoComponent implements OnInit {
var_six
  constructor() {   this.var_six = "I am from child three !!!"; }

  ngOnInit() {
  }

}
