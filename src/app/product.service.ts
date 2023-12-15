import { Injectable } from '@angular/core';
import { MarketplaceItemType } from './types/marketplace.type';
import { of, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

private _products: MarketplaceItemType [] = [
        {
            id         : 1,
            title      : "ADIDAR MAX",
            category   : "ADULT",
            image      : "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg",
            description: "lorem",
            price      : 65.00,
            isSelected : false
        },
        {
            id         : 2,
            title      : "ADIDAR 2",
            category   : "ADULT",
            image      : "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg",
            description: "lorem",
            price      : 70.00,
            isSelected : false
        },
        {
            id         : 3,
            title      : "ADIDAR 3",
            category   : "ADULT",
            image      : "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg",
            description: "lorem",
            price      : 80.00,
            isSelected : false
        },
];
constructor() { }

  getProducts = (): Observable<Array<MarketplaceItemType>> => {
    return of(this._products);
  }
  markProductAsSelected = (item: MarketplaceItemType) => {
    item.isSelected = true;
  }
  markProductAsUnselected = (item: MarketplaceItemType) => {
    item.isSelected = false;
  }
}
