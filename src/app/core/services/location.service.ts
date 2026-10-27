import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  // Method to get the current location of the user
  getCurrentLocation(): Observable<{ latitude: number; longitude: number }> {
    return new Observable((observer) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log('Fetched position:', position);
            observer.next({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            observer.complete();
          },
          (error) => {
            console.error('Geolocation error:', error);
            observer.error(error);
          },
          { enableHighAccuracy: true } // Enables higher accuracy for GPS location
        );
      } else {
        observer.error('Geolocation is not supported by this browser.');
      }
    });
  }
}
