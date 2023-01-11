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
      type: "Discover",
      title: "Agen",
      linkTitle: "Rue Beauville",
      link: "https://www.ladepeche.fr/2019/07/20/rue-beauville-sous-les-paves-le-coeur-du-agen-medieval,8322483.php",
    },
    {
      type: "Walk",
      title: "Agen",
      linkTitle: "Le Canal de Garonne",
      link: "https://www.europeanwaterways.com/blog/canal-de-garonne-guide/",
    },
    {
      type: "Taste",
      title: "Agen",
      linkTitle: "Agen Market - Wed & Sat",
      link: "https://goo.gl/maps/anEZHGZ8FCHh6qwd6",
    },
    {
      type: "Discover",
      title: "Agen",
      linkTitle: "Musée des Beaux-Arts",
      link: "https://www.musee-agen.fr/",
    },
    {
      type: "Taste",
      title: "Around Agen",
      linkTitle: "Pruneaux d'Agen",
      link: "https://www.musee-du-pruneau.com/",
    },
    {
      type: "Taste",
      title: "Around Agen",
      linkTitle: "Local Wine Tours",
      link: "https://www.guide-du-lot-et-garonne.com/en/do-it-your-way/food-lovers/article-5-wine-tours-in-lot-et-garonne-for-wine-lovers-70.html",
    },
    {
      type: "Walk/Discover",
      title: "Around Agen",
      linkTitle: "Scausses de Quercy Regional Natural Park",
      link: "https://www.francethisway.com/tourism/causses-du-quercy.php",
    },
    {
      type: "Discover",
      title: "Plus Beaux Villages",
      linkTitle: "Pujols-le-Haue",
      link: "https://www.les-plus-beaux-villages-de-france.org/fr/nos-villages/pujols-le-haut/",
    },
    {
      type: "Discover",
      title: "Plus Beaux Villages",
      linkTitle: "Tournon-d'Agenais",
      link: "https://www.les-plus-beaux-villages-de-france.org/fr/nos-villages/tournon-dagenais/",
    },
    {
      type: "Discover",
      title: "Plus Beaux Villages",
      linkTitle: "Auvillar",
      link: "https://www.les-plus-beaux-villages-de-france.org/fr/nos-villages/auvillar/",
    },
    {
      type: "Discover",
      title: "Plus Beaux Villages",
      linkTitle: "Lauzerte",
      link: "https://www.les-plus-beaux-villages-de-france.org/fr/nos-villages/lauzerte/",
    },
    {
      type: "Discover",
      title: "Plus Beaux Villages",
      linkTitle: "Saint-Cirq-Lapopie",
      link: "https://www.les-plus-beaux-villages-de-france.org/fr/nos-villages/saint-cirq-lapopie/",
    },
    {
      type: "Discover",
      title: "Plus Beaux Villages",
      linkTitle: "Rocamadour",
      link: "https://www.les-plus-beaux-villages-de-france.org/fr/nos-villages/rocamadour/",
    }
  ]

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  
  
}
