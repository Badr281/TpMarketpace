import { Component, inject, Input } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { MarketplaceItemType } from '../../types/marketplace.type';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart.service';
import { Subscription } from 'rxjs';
import { ProductService } from '../../product.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    faTrash = faTrash;
    cartItemsSub!: Subscription;
    constructor( public cartService : CartService, public productsService : ProductService){}
	activeOffcanvas = inject(NgbActiveOffcanvas);
    @Input() cartItems: { item: MarketplaceItemType, quantity: number }[] = []

    ngOnInit(): void {
        this.cartItemsSub = this.cartService.getCartItems().subscribe(cartItems => {
          this.cartItems = cartItems;
        });
      }
    addProductQte = (item: MarketplaceItemType) => {
        this.cartService.addOrRemoveQuantityItem(item,"addQte")
    }

    removeProductQte = (item: MarketplaceItemType) => {
        this.cartService.addOrRemoveQuantityItem(item,"removeQte")
    }
    removeProductFromCart = (item: MarketplaceItemType) => {
        this.productsService.markProductAsUnselected(item);
        this.cartService.removeItem(item)
    }

}
