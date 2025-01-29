import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMusic } from '../../model/interfaces/interface';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {
  songs: IMusic[] = [
    { id: 1, title: 'Song One', artist: 'Artist One', duration: '3:45', audioUrl: 'assets/song1.mp3' },
    { id: 2, title: 'Song Two', artist: 'Artist Two', duration: '4:20', audioUrl: 'assets/song2.mp3' }
  ];

  currentSong: IMusic | null = null;
  isPlaying: boolean = false;
  progress: number = 0;
  currentTime: string = '0:00';

  ngOnInit() {}

  playSong(song: IMusic) {
    this.currentSong = song;
    this.isPlaying = true;
  }

  togglePlay() {
    if (!this.currentSong) return;
    this.isPlaying = !this.isPlaying;
  }

  previousSong() {
    if (!this.currentSong) return;
    const index = this.songs.findIndex(s => s.id === this.currentSong?.id);
    if (index > 0) this.playSong(this.songs[index - 1]);
  }

  nextSong() {
    if (!this.currentSong) return;
    const index = this.songs.findIndex(s => s.id === this.currentSong?.id);
    if (index < this.songs.length - 1) this.playSong(this.songs[index + 1]);
  }
}
