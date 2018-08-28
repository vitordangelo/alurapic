import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlataformDetectorService {

  constructor(@Inject(PLATFORM_ID) private platformId: string) { }

  isPlatformBroswer() {
    return isPlatformBrowser(this.platformId);
  }
}
