import { Component, Input, inject } from '@angular/core';
import { MarketplaceItemType } from '../types/marketplace.type';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,SidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
    // @Input() title: string | undefined
    private offcanvasService = inject(NgbOffcanvas);
    cartItems: { item: MarketplaceItemType, quantity: number }[] = [];
    cartItemsSub!: Subscription;

	open(event:any) {
        const offcanvasRef = this.offcanvasService.open(SidebarComponent,{ position: 'end' });
        event.preventDefault();
        event.stopPropagation();
        offcanvasRef.componentInstance.cartItems = this.cartItems;
	}
    constructor(
      public cartService: CartService,
    ) {}
  
    ngOnInit(): void {
      this.cartItemsSub = this.cartService.getCartItems().subscribe(cartItems => {
        this.cartItems = cartItems;
      });
    }
  
    ngOnDestroy(): void {
      this.cartItemsSub.unsubscribe();
    }
  
}