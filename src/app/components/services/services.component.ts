import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  services = [
    {
      image: '../../assets/service1.jpg', 
      subtitle: 'INSURANCE VEHICLE',
      title: 'Business Insurance'
    },
    {
      image: '../../assets/service2.jpg',
      subtitle: 'INSURANCE VEHICLE',
      title: 'Vehicle Insurance'
    },
    {
      image: '../../assets/service3.jpg',
   subtitle: 'INSURANCE CAR',
      title: 'Car Insurance'
    }
  ];
}
