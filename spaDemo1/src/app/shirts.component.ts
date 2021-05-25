import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shirts',
  templateUrl: './shirts.component.html',
  styles: [
  ]
})
export class ShirtsComponent implements OnInit {
  shirts:string;
  constructor() { 
    this.shirts = "Shirts Soon....!"
  }

  ngOnInit(): void {
  }

}
