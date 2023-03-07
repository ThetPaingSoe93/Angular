import { Component,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './model/products';
import { ProductService } from './Service/products.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    title = 'AngularHttpRequest';
    allProducts: Product[] = [];
    isFetching: boolean = false;
    editMode:boolean = false
    currentProductId: string

    @ViewChild('productForm') form: NgForm;
    constructor(private productService :ProductService){ 

    }

    ngOnInit() {
        this.fetchProducts();
    }

    onProductsFetch () {
        this.fetchProducts();
    }

    private fetchProducts() {
        this.isFetching = true;
        this.productService.fetchProduct().subscribe((products)=> {
            this.allProducts = products;
            this.isFetching = false;
        });

    }

    onProductCreate(products: {pName: string, desc: string, price: string}) {
       if(!this.editMode) {
        this.productService.createProduct(products);
       }
       else {
        this.productService.updateProduct(this.currentProductId,products)
       }
    }

    onDeleteProduct(id:string) {
        this.productService.deleteProduct(id);
    }

    onDeleteAllProduct() {
        this.productService.deleteAllProducts();
    }

    onEditClick(id:string) {
        let currentProduct = this.allProducts.find((p)=>{
            return p.id === id
        })
        console.log(currentProduct);

        this.form.setValue({
            pName: currentProduct.pName,
            desc: currentProduct.desc,
            price: currentProduct.price
        })

        this.editMode = true;
        this.currentProductId = id;
    }
}
