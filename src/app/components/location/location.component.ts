import { Component, inject, OnInit } from '@angular/core';
import { LocationService } from '../../core/services/location.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslationService } from '../../core/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  iframeSrc: SafeResourceUrl = '';

  private readonly _translationService = inject(TranslationService);

  constructor(private locationService: LocationService, private sanitizer: DomSanitizer) {}

  selectLang(lang: string) {
    this._translationService.changeLang(lang);
  }

  updateIframe(latitude: number, longitude: number) {
    const url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086514162714!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581bbdf08e3b7%3A0x8f0b2f08e8be0b6f!2sYour%20Location!5e0!3m2!1sen!2sus!4v1622625119612!5m2!1sen!2sus`;
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    this.getUserLocation();
    this._translationService.changeDirection();
  }

  getUserLocation() {
    this.locationService.getCurrentLocation().subscribe({
      next: (position) => {
        console.log('Latitude:', position.latitude);
        console.log('Longitude:', position.longitude);
        this.updateIframe(position.latitude, position.longitude);
      },
      error: (error) => {
        console.error('Error fetching location:', error);
  
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert(
              'Location access denied. Please enable location services in your browser settings.'
            );
            break;
          case error.POSITION_UNAVAILABLE:
            alert('Location information is unavailable. Please try again later.');
            break;
          case error.TIMEOUT:
            alert('The request to get your location timed out. Please try again.');
            break;
          default:
            alert('An unknown error occurred while fetching your location.');
        }
      },
      complete: () => {
        console.log('Location fetching complete.');
      },
    });
  }
  
}
