import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../../../app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [MatIconModule, AppRoutingModule]
  
})
export class HeaderComponent {

}
