import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MusicPlayerService } from '../../services/music-player.service';
import { Observable, Subscription } from 'rxjs';
import { Song } from '../../services/music-player.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSliderModule,
    FormsModule
  ],
  template: `
    <div class="footer-container">
      <button mat-fab class="player-toggle" (click)="togglePlayer()" [class.playing]="isPlaying">
        <mat-icon>{{ isPlayerVisible ? 'close' : 'music_note' }}</mat-icon>
      </button>
      
      <div class="music-player" [class.visible]="isPlayerVisible">
        <div class="song-info">
          <div class="song-title">{{ (currentSong$ | async)?.title || 'No song playing' }}</div>
          <div class="song-artist">{{ (currentSong$ | async)?.artist || 'Select a song' }}</div>
        </div>
        
        <div class="player-controls">
          <button mat-icon-button (click)="playPrevious()">
            <mat-icon>skip_previous</mat-icon>
          </button>
          <button mat-fab (click)="togglePlay()">
            <mat-icon>{{ (isPlaying$ | async) ? 'pause' : 'play_arrow' }}</mat-icon>
          </button>
          <button mat-icon-button (click)="playNext()">
            <mat-icon>skip_next</mat-icon>
          </button>
        </div>
        
        <div class="volume-control">
          <button mat-icon-button (click)="toggleMute()">
            <mat-icon>{{ isMuted ? 'volume_off' : 'volume_up' }}</mat-icon>
          </button>
          <mat-slider class="volume-slider" [min]="0" [max]="100">
            <input matSliderThumb [(ngModel)]="volume" (ngModelChange)="onVolumeChange($event)">
          </mat-slider>
        </div>
      </div>
    </div>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  currentSong$: Observable<Song>;
  isPlaying$: Observable<boolean>;
  volume$: Observable<number>;
  private previousVolume = 0.2;
  isMuted = false;
  isPlayerVisible = false;
  isPlaying = false;
  volume = 100;
  private subscription: Subscription = new Subscription();

  constructor(
    private musicPlayerService: MusicPlayerService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.currentSong$ = this.musicPlayerService.currentSong$;
    this.isPlaying$ = this.musicPlayerService.isPlaying$;
    this.volume$ = this.musicPlayerService.volume$;

    this.matIconRegistry.addSvgIcon(
      'music_note',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/music_note.svg')
    );
  }

  ngOnInit() {
    this.subscription.add(
      this.musicPlayerService.currentSong$.subscribe()
    );

    this.subscription.add(
      this.musicPlayerService.isPlaying$.subscribe(isPlaying => {
        this.isPlaying = isPlaying;
      })
    );

    this.subscription.add(
      this.musicPlayerService.volume$.subscribe(volume => {
        this.volume = volume * 100; 
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  togglePlayer() {
    this.isPlayerVisible = !this.isPlayerVisible;
  }

  togglePlay() {
    this.musicPlayerService.togglePlay();
  }

  playNext() {
    this.musicPlayerService.playNext();
  }

  playPrevious() {
    this.musicPlayerService.playPrevious();
  }

  onVolumeChange(volume: number) {

    const decimalVolume = volume / 100;
    
    if (decimalVolume > 0) {
      this.isMuted = false;
      this.previousVolume = decimalVolume;
    }
    
    this.musicPlayerService.setVolume(decimalVolume);
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
