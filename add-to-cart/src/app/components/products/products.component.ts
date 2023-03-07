import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  public productList: any;
  searchKey: string = "";
  constructor(private api: ApiService,private cardService: CartService) {}
  
  ngOnInit():void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;

      this.productList.forEach((a:any)=>{
        if(a.category === "")
        Object.assign(a,{quantity:1,total:a.price});
      });
    });

    this.cardService.search.subscribe(val=>{
      this.searchKey = val;
    })
  }

  addtoCart(item:any) {
    this.cardService.addtoCart(item);
  }
}
