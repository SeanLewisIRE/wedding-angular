import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() locationValue: string = '';
  imageLocation: string[] = [];
  

  constructor() { 
  }
  
  ngOnInit(): void {
    if (this.locationValue == 'first') {
      this.imageLocation = [
        'https://picsum.photos/480/570',
        '../../../assets/venue_side.jpeg',
        'https://picsum.photos/480/570',
      ];
    } else if (this.locationValue == 'second') {
      this.imageLocation = [
        '../../../assets/stairs.jpeg',
        'https://picsum.photos/480/560',
        '../../../assets/pool.jpeg',
      ];
    }
  }

}
