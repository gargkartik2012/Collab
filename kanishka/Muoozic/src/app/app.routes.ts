import { Routes } from '@angular/router';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { TracksComponent } from './components/tracks/tracks.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"/artists",
        pathMatch:"full",
    },
    {
        path:"music-player",
        component:MusicPlayerComponent
    },
    {
        path:"artists",
        component:ArtistsComponent
    },
    {
        path:"tracks",
        component:TracksComponent
    }
];
