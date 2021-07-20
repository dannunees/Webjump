import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  productList = []; 
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.listProducts(3).subscribe(
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

