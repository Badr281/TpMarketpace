import { Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';

export const routes: Routes = [
    { path: "", component: MarketplaceComponent },
    { path: "observable", component: ObservableComponent },

];

