import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  itemName: string;
  addCart: number;
  products: Array<string> = [];
  products2: Array<string> = [];
  ngOnInit() {}
  RemoveProduct(item) {
    this.products.splice(this.products.indexOf(item), 1);
  }
  RemoveProduct2(item) {
    this.products2.splice(this.products2.indexOf(item), 1);
  }
  addList(itm, crt) {
    if (crt == 1) {
      this.products.push(itm);
    } else {
      this.products2.push(itm);
    }
  }
}
