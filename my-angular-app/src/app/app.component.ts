import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponentComponent } from './pages/home-page-component/home-page-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePageComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
