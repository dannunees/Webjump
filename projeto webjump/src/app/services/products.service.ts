import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  listProducts(categoryId:number) {
    let apiUrl = 'http://localhost:8888/api/V1/categories/'+categoryId;
    return this.http.get(apiUrl);
  }
}

