import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: "PC", price: 8000, quantity: 10 },
    { id: 2, name: "Téléphone", price: 3000, quantity: 20 },
    { id: 3, name: "Clavier", price: 200, quantity: 50 }
  ];

  getProducts(): Product[] {
    return this.products;
  }
  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
}
}
