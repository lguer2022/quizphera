import { Howl } from 'howler';

class SoundManager {
  private sounds: { [key: string]: Howl } = {};
  private bgMusic: Howl | null = null;

  constructor() {
    this.sounds = {
      correct: new Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3'] }),
      wrong: new Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3'] }),
      join: new Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/443/443-preview.mp3'] }),
      click: new Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'] }),
    };

    this.bgMusic = new Howl({
      src: ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'],
      loop: true,
      volume: 0.3
    });
  }

  play(sound: string) {
    if (this.sounds[sound]) {
      this.sounds[sound].play();
    }
  }

  playBg() {
    if (this.bgMusic && !this.bgMusic.playing()) {
      this.bgMusic.play();
    }
  }

  stopBg() {
    if (this.bgMusic) {
      this.bgMusic.stop();
    }
  }

  setVolume(vol: number) {
    if (this.bgMusic) {
      this.bgMusic.volume(vol);
    }
  }
}

export const sounds = new SoundManager();
