import { Component, OnInit } from '@angular/core';

import { faRing, faChampagneGlasses, faUtensils, faCompactDisc, faMoon, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-where-when',
  templateUrl: './where-when.component.html',
  styleUrls: ['./where-when.component.css']
})
export class WhereWhenComponent implements OnInit {
  faRing = faRing;
  faChampagneGlasses = faChampagneGlasses;
  faUtensils = faUtensils;
  faCompactDisc = faCompactDisc;
  faMoon = faMoon;
  faheart = faHeart;

  constructor() { }

  ngOnInit(): void {
  }

}
