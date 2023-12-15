import { Component, OnDestroy, OnInit } from '@angular/core';
import { MarketplaceItemType } from '../../types/marketplace.type';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ProductService } from '../../product.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-marketplace-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketplace-item-list.component.html',
  styleUrl: './marketplace-item-list.component.scss'
})
export class MarketplaceItemListComponent implements OnInit, OnDestroy {


    productsSub !: Subscription;
    marketplaceItems : MarketplaceItemType[] = [];

    constructor(
        public productsService : ProductService,
        public cartService : CartService
    ){}

    ngOnInit(): void {
        this.productsSub = this.productsService.getProducts().subscribe( products => {
            this.marketplaceItems = products;
        })
    }

    addToCart = (item: MarketplaceItemType) => {
        this.productsService.markProductAsSelected(item);
        this.cartService.addItem(item)
    }

    removeFromCart = (item: MarketplaceItemType) => {
        this.productsService.markProductAsUnselected(item);
        this.cartService.removeItem(item)
    }

    ngOnDestroy(): void {
        this.productsSub.unsubscribe()
    }
    // public marketplaceItems : MarketplaceItemType [] = [
    //     {
    //         id         : 1,
    //         title      : "ADIDAR MAX",
    //         category   : "ADULT",
    //         image      : "https://www.marketing91.com/wp-content/uploads/2018/08/Product-Portfolio-1.jpg",
    //         description: "lorem",
    //         price      : 65.00,
    //         isSelected : false
    //     },
    //     {
    //         id         : 2,
    //         title      : "ADIDAR 2",
    //         category   : "ADULT",
    //         image      : "https://www.marketing91.com/wp-content/uploads/2018/08/Product-Portfolio-1.jpg",
    //         description: "lorem",
    //         price      : 70.00,
    //         isSelected : false
    //     },
    //     {
    //         id         : 3,
    //         title      : "ADIDAR 3",
    //         category   : "ADULT",
    //         image      : "https://www.marketing91.com/wp-content/uploads/2018/08/Product-Portfolio-1.jpg",
    //         description: "lorem",
    //         price      : 80.00,
    //         isSelected : false
    //     },
    // ]
}
