import { Component, OnInit, Injectable } from '@angular/core';
import { WeatherService } from './dax-data.service';  //service eventuell in Module: provider

  @Component({
    selector: 'main-menu',
    template: `
      <h2>Warn Luiz Weather Forecast for Hannover</h2>
      <p>Highest Temperature of the Day: {{ getHighestTemperature() }}</p>
      <img [src]="weatherImage" alt="Weather Image" />
      <pre>{{ weatherData | json }}</pre>
    `,
    styles: []
  })
  export class MainMenuComponent implements OnInit {
    weatherData: any;
    weatherImage: string;
  
    constructor(private weatherService: WeatherService) {
      this.weatherImage = "";
    }
  
    ngOnInit(): void {
      
      const latitude = 52.3745; // Latitude von Hannover
      const longitude = 9.7386; // Längengrad von Hannover
  
      this.weatherService.getWeatherForecast(latitude, longitude).subscribe(data => {
        console.log(data); // Hier kannst du mit den erhaltenen Daten arbeiten
        this.weatherData = data;
        this.setPicture();
      });
    }
  
    getHighestTemperature(): string {
      if (this.weatherData && this.weatherData.hourly && this.weatherData.hourly.temperature_2m) {
        const temperatures = this.weatherData.hourly.temperature_2m;
        const highestTemperature = Math.max(...temperatures);
        
        if (highestTemperature > 11) {
          this.weatherImage = 'assets/IMG_0287.jpg';
          return highestTemperature + "°C Es ist Luiz zu HEISS";
        } else {
          this.weatherImage = 'assets/IMG_8637.JPG';
          return highestTemperature + "°C : zwischen -100 und 10, alles gut";
        }
      }
      return "No temperature data available";
    }
  
    setPicture() {
      const temperatures = this.weatherData.hourly.temperature_2m;
      const highestTemperature = Math.max(...temperatures);
      
      if (highestTemperature > 11) {
        this.weatherImage = 'assets/IMG_0287.jpg';
      } else {
        this.weatherImage = 'assets/IMG_8637.JPG';
      }
    }
  }
  
  
