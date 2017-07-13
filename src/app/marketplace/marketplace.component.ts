import { Component } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {

  constructor(private router: Router){}

  albums: Album[] = [
    new Album('Miami Pop Festival', 'Jimi Hendrix', 'Album by Jimi Hendrix', 1),
    new Album('Machine Gun: Live at The Fillmore East 12...', 'Jimi Hendrix', 'Album by Jimi Hendrix', 2),
    new Album('Mothership', 'Led Zeppelin', 'By Led Zeppelin', 3),
    new Album('Physical Graffiti', 'Led Zeppelin', 'By Led Zeppelin', 4),
    new Album('Coda','Led Zeppelin', 'By Led Zeppelin', 5)
  ];

  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['albums', clickedAlbum.id]);
  };


}
