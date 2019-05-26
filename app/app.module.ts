import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonComponent } from './people/person/person.component';
import { PeopleService } from './people/people.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PersonComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ PeopleService ]
})
export class AppModule {}
