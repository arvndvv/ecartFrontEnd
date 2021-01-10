import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input()
  item: any;
  @Output() removedItem: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  removeItem(event) {
    event.preventDefault();
    console.log(this.item);
    this.removedItem.emit(this.item.productId._id);
  }
}
