import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../model/services/master.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artist_list: any[] = [];

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.load_artists();
  }

  load_artists() {
    this.service.get_all_artists().subscribe((response: any) => {
      this.artist_list = response.results;
    });
  }
}
