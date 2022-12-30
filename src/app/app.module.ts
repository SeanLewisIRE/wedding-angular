import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { TextHeroComponent } from './sections/text-hero/text-hero.component';
import { CarouselComponent } from './sections/carousel/carousel.component';
import { WhereWhenComponent } from './sections/where-when/where-when.component';
import { TravelLodgingComponent } from './sections/travel-lodging/travel-lodging.component';
import { GiftsComponent } from './sections/gifts/gifts.component';
import { ThingsToDoComponent } from './sections/things-to-do/things-to-do.component';
import { RsvpComponent } from './sections/rsvp/rsvp.component';
import { FooterComponent } from './sections/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    TextHeroComponent,
    CarouselComponent,
    WhereWhenComponent,
    TravelLodgingComponent,
    GiftsComponent,
    ThingsToDoComponent,
    RsvpComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
