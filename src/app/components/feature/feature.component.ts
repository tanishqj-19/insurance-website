import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature.component.html',
})
export class FeatureComponent {
  allFeatures = [
    {
      url: '../../assets/money-back.png', 
      heading: 'Money Back Guarantee',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae turpis id '
    },
    {
      url: '../../assets/claim.png',
      heading: 'All Claims At Anytime',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae turpis id '
    },
    {
      url: '../../assets/insurance-policy.png',
      heading: 'Digital Insurance Policy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae turpis id '
    },
    {
      url: '../../assets/mobile-payment.png',
      heading: 'Direct Payment App',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae turpis id '
    }
  ]
}
