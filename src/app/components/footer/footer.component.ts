import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSliderModule } from '@angular/material/slider';
import { MusicPlayerService } from '../../services/music-player.service';
import { Observable } from 'rxjs';
import { Song } from '../../services/music-player.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule, MatSliderModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  currentSong$: Observable<Song>;
  isPlaying$: Observable<boolean>;
  volume$: Observable<number>;
  private previousVolume = 0.2;
  private isMuted = false;

  constructor(private musicPlayerService: MusicPlayerService) {
    this.currentSong$ = this.musicPlayerService.currentSong$;
    this.isPlaying$ = this.musicPlayerService.isPlaying$;
    this.volume$ = this.musicPlayerService.volume$;
  }

  ngOnInit() {}

  togglePlay() {
    this.musicPlayerService.togglePlay();
  }

  playNext() {
    this.musicPlayerService.playNext();
  }

  playPrevious() {
    this.musicPlayerService.playPrevious();
  }

  onVolumeChange(event: any) {
    let volume: number;
    if (typeof event === 'number') {
      volume = event;
    } else if (event && typeof event.value === 'number') {
      volume = event.value;
    } else {
      return;
    }

    volume = Math.max(0, Math.min(1, volume));
    
    if (volume > 0) {
      this.isMuted = false;
      this.previousVolume = volume;
    }
    
    this.musicPlayerService.setVolume(volume);
  }

  toggleMute() {
    if (this.isMuted) {
      this.musicPlayerService.setVolume(this.previousVolume);
      this.isMuted = false;
    } else {
      this.volume$.subscribe(currentVolume => {
        if (currentVolume > 0) {
          this.previousVolume = currentVolume;
          this.musicPlayerService.setVolume(0);
          this.isMuted = true;
        }
      }).unsubscribe();
    }
  }
}
