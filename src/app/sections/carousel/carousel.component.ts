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
        '../../../assets/venue_side.jpeg',
        '../../../assets/middle.jpg',
        '../../../assets/chateau_field.jpeg',
      ];
    } else if (this.locationValue == 'second') {
      this.imageLocation = [
        '../../../assets/stairs.jpeg',
        '../../../assets/engagement-cropped.jpg',
        '../../../assets/pool.jpeg',
      ];
    }
  }

}
