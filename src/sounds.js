
//Import images
import rainImg from './icons/rain.png';
import birdImg from './icons/dove.png';
import fireImg from './icons/fireplace-2.png';
import waveImg from './icons/wave.png';
import windImg from './icons/wind.png';
//Import sounds
import rainSound from './ambient-sounds/Rain.mp3';
import birdSound from './ambient-sounds/Birds.mp3';
import fireSound from './ambient-sounds/Fireplace.mp3';
import waveSound from './ambient-sounds/Waves.mp3';
import windSound from './ambient-sounds/Wind.mp3';

export const sounds = [
  {
    name: 'Rain',
    audio: rainSound,
    icon: rainImg,
  },
    {
    name: 'Birds',
    audio: birdSound,
    icon: birdImg,
  },
      {
    name: 'Fire',
    audio: fireSound,
    icon: fireImg,
  },
        {
    name: 'Waves',
    audio: waveSound,
    icon: waveImg,
  },
          {
    name: 'Wind',
    audio: windSound,
    icon: windImg,
  },

]


// {
//   "short_name": "React App",
//   "name": "Create React App Sample",
//   "icons": [
//     {
//       "src": "favicon.ico",
//       "sizes": "64x64 32x32 24x24 16x16",
//       "type": "image/x-icon"
//     }
//   ],
//   "start_url": ".",
//   "display": "standalone",
//   "theme_color": "#000000",
//   "background_color": "#ffffff"
// }
