import { Component } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent {
  tracks: any[] = []; // You may want to load tracks here later
}
