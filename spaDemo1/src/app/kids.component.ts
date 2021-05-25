import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kids',
  templateUrl: './kids.component.html',
  styles: [
  ]
})
export class KidsComponent implements OnInit {
  kids:string;
  constructor() { 
    this.kids = "Kids Wears Soon....!";
  }

  ngOnInit(): void {
  }

}
