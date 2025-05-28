import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Song {
  title: string;
  artist: string;
  path: string;
}

@Injectable({
  providedIn: 'root'
})
export class MusicPlayerService {
  private playlist: Song[] = [
    {
      title: 'Welcome to VA-11 HALL-A',
      artist: 'Garoad',
      path: 'assets/music/Welcome_to_VA_11_HALL_A.mp3'
    },
    {
      title: 'Every Day is Night',
      artist: 'Garoad',
      path: 'assets/music/Every_Day_is_Night.mp3'
    },
    {
      title: 'Good for Health, Bad for Education',
      artist: 'Garoad',
      path: 'assets/music/Good_for_Health_Bad_for_Education.mp3'
    },
    {
      title: 'Who Was I',
      artist: 'Garoad',
      path: 'assets/music/Who_Was_I.mp3'
    }
  ];

  private currentSongIndex = 0;
  private isPlaying = false;
  private audio: HTMLAudioElement;
  private volumeSubject = new BehaviorSubject<number>(0.2);
  private currentSongSubject = new BehaviorSubject<Song>(this.playlist[0]);
  private isPlayingSubject = new BehaviorSubject<boolean>(false);

  currentSong$ = this.currentSongSubject.asObservable();
  isPlaying$ = this.isPlayingSubject.asObservable();
  volume$ = this.volumeSubject.asObservable();

  constructor() {
    console.log('Initializing MusicPlayerService with playlist:', this.playlist);
    this.audio = new Audio();
    this.audio.src = this.playlist[0].path;
    this.audio.volume = 0.2;
    console.log('Setting initial audio source:', this.audio.src);
    this.audio.addEventListener('ended', () => this.playNext());
    this.audio.addEventListener('error', (e) => console.error('Audio error:', e));

    this.audio.play().then(() => {
      this.isPlaying = true;
      this.isPlayingSubject.next(true);
    }).catch(error => {
      console.log('Autoplay prevented:', error);
      this.isPlaying = false;
      this.isPlayingSubject.next(false);
    });
  }

  setVolume(volume: number) {
    if (typeof volume !== 'number' || !isFinite(volume)) {
      console.error('Invalid volume value:', volume);
      return;
    }

    volume = Math.max(0, Math.min(1, volume));

    if (this.audio.volume !== volume) {
      this.audio.volume = volume;
      this.volumeSubject.next(volume);
    }
  }

  togglePlay() {
    console.log('Toggle play called, current state:', this.isPlaying);
    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
      this.isPlayingSubject.next(false);
    } else {
      this.audio.play().then(() => {
        this.isPlaying = true;
        this.isPlayingSubject.next(true);
      }).catch(error => {
        console.error('Error playing audio:', error);
        this.isPlaying = false;
        this.isPlayingSubject.next(false);
      });
    }
  }

  playNext() {
    console.log('Playing next song');
    this.currentSongIndex = (this.currentSongIndex + 1) % this.playlist.length;
    this.loadAndPlayCurrentSong();
  }

  playPrevious() {
    console.log('Playing previous song');
    this.currentSongIndex = (this.currentSongIndex - 1 + this.playlist.length) % this.playlist.length;
    this.loadAndPlayCurrentSong();
  }

  private loadAndPlayCurrentSong() {
    const song = this.playlist[this.currentSongIndex];
    console.log('Loading song:', song);
    this.audio.src = song.path;
    this.currentSongSubject.next(song);
    if (this.isPlaying) {
      this.audio.play().catch(error => {
        console.error('Error playing audio:', error);
        this.isPlaying = false;
        this.isPlayingSubject.next(false);
      });
    }
  }
} 