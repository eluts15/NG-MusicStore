import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './sample-data';

@Injectable()
export class AlbumService {

  constructor() { }
  
  getAlbums() {
    return ALBUMS;
  }

}
