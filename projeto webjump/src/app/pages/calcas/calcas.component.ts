import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-calcas',
  templateUrl: './calcas.component.html',
  styleUrls: ['./calcas.component.scss']
})
// export class CalcasComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export class CalcasComponent implements OnInit {
  productList = []; 
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.listProducts(2).subscribe(
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
