import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.css']
})
export class Button1Component implements OnInit {
@Input() public itemdata;
public items: string[] = [];
  constructor() { }

  ngOnInit() {
  }
  add() {
    this.items.push(this.itemdata);
    console.log(this.itemdata);
  }

}
