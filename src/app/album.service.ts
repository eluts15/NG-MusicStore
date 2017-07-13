import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './sample-data';

@Injectable()
export class AlbumService {
  albums:FirebaseListObservable<any[]>;

  constructor(private database: AngularFirebaseDatabase) { 
    this.albums = database.list('albums');
  }
  
  getAlbums() {
    return this.albums;
  }

  getAlbumById(albumId: number) {
    for (var i=0; i<=ALBUMS.length-1; i++) {
      if (ALBUMS[i].id === albumId) {
        return ALBUMS[i];
      }
    }
  }

}
