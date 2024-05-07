import { Component } from '@angular/core';
import { FeaturesComponent } from '../../components/home/features/features.component';
import { BrowseNowComponent } from '../../components/home/browse-now/browse-now.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeaturesComponent,BrowseNowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
