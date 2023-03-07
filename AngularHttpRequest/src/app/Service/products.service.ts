import { Injectable } from "@angular/core";
import {map} from 'rxjs/operators'
import {Product} from '../model/products'
import { HttpClient,HttpHeaders } from "@angular/common/http"

@Injectable({providedIn: "root"})
export class ProductService {
    constructor(private http: HttpClient) {

    }

    createProduct(products: {pName: string, desc: string, price: string}) {
        console.log(products)
        const headers = new HttpHeaders({'myHeader':'firstProject'})
        this.http.post<{name:string}>('https://angularfirstproject-9b8bc-default-rtdb.firebaseio.com/products.json',products,{headers: headers})
        .subscribe((res)=>
            console.log(res)
        )
    }

    fetchProduct() {
        return this.http.get<{[key:string]:Product}>('https://angularfirstproject-9b8bc-default-rtdb.firebaseio.com/products.json')
        .pipe(map((res)=>{
            const products = [];
            console.log(res);
            for (const key in res) {
                if(res.hasOwnProperty(key)) {
                    products.push({...res[key],id:key})
                }
            };
            return products;
        }))

    }

    deleteProduct(id:string) {
        this.http.delete('https://angularfirstproject-9b8bc-default-rtdb.firebaseio.com/products/'+id+'.json')
        .subscribe();
    }

    deleteAllProducts() {
        this.http.delete('https://angularfirstproject-9b8bc-default-rtdb.firebaseio.com/products.json')
        .subscribe();
    }

    updateProduct(id:string,value: Product) {
        this.http.put('https://angularfirstproject-9b8bc-default-rtdb.firebaseio.com/products/'+id+'.json',value)
        .subscribe();
    }
}