import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {Subject} from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent { 
    
    construct(){
        const subject = new Subject<number>();
        subject.subscribe({
            next: (v) => console.log(`Observer 1 :${v}`)
          })
          subject.subscribe({
            next: (v) => console.log(`Observer 2 :${v}`)
          })
          subject.next(1);
          subject.next(2);
    }
  title = 'Formation TP2 [AppComponent]';
}
