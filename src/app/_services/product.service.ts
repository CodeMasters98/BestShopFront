import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseProductService = 'ProductService'

  constructor(private http: HttpClient) { }

  GetProducts() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.get<any>(`${environment.apiUrl}${this.baseProductService}/api/v1/Product`, httpOptions);
  }

  GetProduct(id:number) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.get<any>(`${environment.apiUrl}}${this.baseProductService}/api/v1/Product/${id}`, httpOptions);
  }

  DeleteProduct(id:number) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<any>(`${environment.apiUrl}}${this.baseProductService}/api/v1/Product?id=${id}`, httpOptions);
  }

  AddProduct(product:any){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(`${environment.apiUrl}}${this.baseProductService}/api/v1/Product`,product, httpOptions);
  }

}
