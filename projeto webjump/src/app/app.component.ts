import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webjump';
  constructor(private productsService: ProductsService) {

  }

  ngOnInit(){

      $(document).ready(function(){
        $(".open-mobile").click(function(){
          $("span").toggleClass("ativa");
          $("nav").toggleClass("menu-open");
      });
    });
  }
  
}
