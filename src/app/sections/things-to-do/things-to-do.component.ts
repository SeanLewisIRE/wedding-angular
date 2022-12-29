import { Component, OnInit } from '@angular/core';
import { Amenity } from 'src/app/Interfaces/amenity';

@Component({
  selector: 'app-things-to-do',
  templateUrl: './things-to-do.component.html',
  styleUrls: ['./things-to-do.component.css']
})


export class ThingsToDoComponent implements OnInit {

  amenities: Amenity[] = [
    {
      type: "Architecture",
      title: "Slane Castle",
      linkTitle: "Slane Castle Website",
      link: "https://www.slanecastle.ie/",
    },
    {
      type: "Architecture",
      title: "Slane Castle",
      linkTitle: "Slane Castle Website",
      link: "https://www.slanecastle.ie/",
    },
    {
      type: "Architecture",
      title: "Slane Castle",
      linkTitle: "Slane Castle Website",
      link: "https://www.slanecastle.ie/",
    },
    {
      type: "Architecture",
      title: "Slane Castle",
      linkTitle: "Slane Castle Website",
      link: "https://www.slanecastle.ie/",
    },
    {
      type: "Architecture",
      title: "Slane Castle",
      linkTitle: "Slane Castle Website",
      link: "https://www.slanecastle.ie/",
    },
    {
      type: "Architecture",
      title: "Slane Castle",
      linkTitle: "Slane Castle Website",
      link: "https://www.slanecastle.ie/",
    },
    {
      type: "Architecture",
      title: "Slane Castle",
      linkTitle: "Slane Castle Website",
      link: "https://www.slanecastle.ie/",
    },
    {
      type: "Architecture",
      title: "Slane Castle",
      linkTitle: "Slane Castle Website",
      link: "https://www.slanecastle.ie/",
    },
    {
      type: "Architecture",
      title: "Slane Castle",
      linkTitle: "Slane Castle Website",
      link: "https://www.slanecastle.ie/",
    }
  ]

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  
  
}
