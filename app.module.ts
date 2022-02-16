import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { RyanComponent } from './components/ryan/ryan.component';
import { DominicComponent } from './components/dominic/dominic.component';
import { ArbyComponent } from './components/arby/arby.component';
import { KhadgaComponent } from './components/khadga/khadga.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewPersonComponent } from './components/new-person/new-person.component';
import { PersonComponent } from './components/person/person.component';
import { PersonPageComponent } from './components/person-page/person-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    RyanComponent,
    DominicComponent,
    ArbyComponent,
    KhadgaComponent,
    NewPersonComponent,
    PersonComponent,
    PersonPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
