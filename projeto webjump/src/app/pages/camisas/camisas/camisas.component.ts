import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-camisas',
  templateUrl: './camisas.component.html',
  styleUrls: ['./camisas.component.scss']
})
// export class CamisasComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export class CamisasComponent implements OnInit {
  productList = []; 
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.listProducts(1).subscribe(
      res => {
        console.log("resposta ", res);
        let result = JSON.parse(JSON.stringify(res))
        this.productList= result['items']
      },
      error => {
        console.log("deu ruim", error);
      }
    )
  }

}
