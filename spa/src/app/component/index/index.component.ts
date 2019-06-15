import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: []
})
export class IndexComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  private clickMe(){
this.router.navigate(["/page_three",333,"p_four",40000]);
  }

}
