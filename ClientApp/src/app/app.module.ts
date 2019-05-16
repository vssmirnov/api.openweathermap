import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ForecastComponent } from "./forecast/forecast.component";
import { CurrentWeatherComponent } from './currentWeather/currentWeather.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
import { CurrentWeatherService } from './currentWeather/currentWeather.service';
import { ForecastService } from './forecast/forecast.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ForecastComponent,
    SearchComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,    
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'forecast', component: ForecastComponent },
      { path: 'current-weather', component: CurrentWeatherComponent },      
    ])
  ],
  providers: [SearchService, CurrentWeatherService, ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
