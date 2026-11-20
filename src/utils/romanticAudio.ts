// Moroccan Palace Twilight Oud & Instrumental Player
// Plays authentic Andalusian Oud recording (/audio/andalous.mp3) with seamless Web Audio API synthesis fallback.

class MoroccanAudioPlayer {
  private audioElement: HTMLAudioElement | null = null;
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private intervalId: number | null = null;
  private masterGain: GainNode | null = null;
  private isUsingMp3: boolean = false;
  private playPromise: Promise<void> | null = null;
  private listeners: Set<(playing: boolean) => void> = new Set();

  // Andalusian / Moroccan modal arpeggio notes (D minor / Hijaz / Bayati harmony) for fallback
  private chords = [
    [146.83, 220.00, 293.66, 349.23, 440.00, 587.33], // D min (D3, A3, D4, F4, A4, D5)
    [116.54, 174.61, 233.08, 293.66, 349.23, 466.16], // Bb maj (Bb2, F3, Bb3, D4, F4, Bb4)
    [130.81, 196.00, 261.63, 329.63, 392.00, 523.25], // C maj (C3, G3, C4, E4, G4, C5)
    [146.83, 220.00, 277.18, 369.99, 440.00, 554.37], // A / D-Hijaz (D3, A3, C#4, F#4, A4, C#5)
  ];

  private currentChordIndex = 0;
  private noteIndex = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        this.audioElement = new Audio('/audio/andalous.mp3');
        this.audioElement.loop = true;
        this.audioElement.volume = 0.65;
        this.audioElement.preload = 'auto';

        this.audioElement.addEventListener('ended', () => {
          if (this.audioElement && this.isPlaying) {
            this.audioElement.currentTime = 0;
            this.audioElement.play().catch(() => {});
          }
        });
      } catch {
        this.audioElement = null;
      }
    }
  }

  private initSynth() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
  }

  public play() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.notifyListeners();

    // Try playing authentic MP3 first
    if (this.audioElement) {
      this.playPromise = this.audioElement.play();
      this.playPromise
        .then(() => {
          this.isUsingMp3 = true;
          this.playPromise = null;
        })
        .catch(() => {
          this.isUsingMp3 = false;
          this.playPromise = null;
          if (this.isPlaying) {
            this.startSynth();
          }
        });
    } else {
      this.isUsingMp3 = false;
      this.startSynth();
    }
  }

  private startSynth() {
    this.initSynth();
    if (!this.ctx || !this.masterGain) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    if (!this.intervalId) {
      this.intervalId = window.setInterval(() => {
        this.playNextOudNote();
      }, 480);
    }
  }

  private playNextOudNote() {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;

    const chord = this.chords[this.currentChordIndex];
    const freq = chord[this.noteIndex % chord.length];

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Wooden plucked string timbre (triangle with slight warmth)
    osc.type = this.noteIndex % 3 === 0 ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    // Warm resonant body filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1100, this.ctx.currentTime);
    filter.Q.setValueAtTime(2.5, this.ctx.currentTime);

    // Sharp attack, acoustic resonant decay
    const now = this.ctx.currentTime;
    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.linearRampToValueAtTime(0.18, now + 0.02);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 1.9);

    this.noteIndex++;
    if (this.noteIndex >= chord.length) {
      this.noteIndex = 0;
      this.currentChordIndex = (this.currentChordIndex + 1) % this.chords.length;
    }
  }

  public stop() {
    this.isPlaying = false;
    this.notifyListeners();

    if (this.audioElement) {
      if (this.playPromise) {
        this.playPromise
          .then(() => {
            this.audioElement?.pause();
          })
          .catch(() => {});
      } else {
        this.audioElement.pause();
      }
    }

    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public subscribe(listener: (playing: boolean) => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach((fn) => {
      try {
        fn(this.isPlaying);
      } catch {
        // ignore errors in listeners
      }
    });
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getIsUsingMp3(): boolean {
    return this.isUsingMp3;
  }
}

export const moroccanAudio = new MoroccanAudioPlayer();
export const romanticAudio = moroccanAudio;