import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription, interval} from 'rxjs';
@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent implements OnInit, OnDestroy {
    second: Number = 0;
    counterSubscription!: Subscription;
    ngOnInit(): void {
        const counter = interval(1000);
        this.counterSubscription = counter.subscribe({
            next:(value) =>{ this.second = value},
            error:(error) =>{ console.log("Oups ! Erreur survenu:", error)},
            complete:() =>{ console.log("Intervale terminée")},

        })
    }
    ngOnDestroy(): void {
        this.counterSubscription.unsubscribe();
    }

}
