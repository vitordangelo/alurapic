import { Component, OnInit } from '@angular/core';

import { Photo } from '../photo';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[];

  constructor(private photoService: PhotosService) {}

  ngOnInit() {
    this.photoService
      .listFromUser('flavio')
      .subscribe((photos: Photo[]) => {
        this.photos = photos;
      }, error => console.log(error));
  }

}
