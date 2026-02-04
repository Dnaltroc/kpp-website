// Transformation video data with Vimeo thumbnails

export interface Transformation {
  id: number;
  title: string;
  subtitle: string;
  thumbnail: string;
  videoUrl: string;
  videoType: 'youtube' | 'vimeo' | 'direct';
}

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 1,
    title: 'Velocity Gain',
    subtitle: 'Program Athlete',
    thumbnail: 'https://vumbnail.com/1161329154.jpg',
    videoUrl: 'https://player.vimeo.com/video/1161329154',
    videoType: 'vimeo',
  },
  {
    id: 2,
    title: 'Mechanical Change',
    subtitle: 'In-Season Progress',
    thumbnail: 'https://vumbnail.com/1161329914.jpg',
    videoUrl: 'https://player.vimeo.com/video/1161329914',
    videoType: 'vimeo',
  },
  {
    id: 3,
    title: 'Return from Injury',
    subtitle: 'Rehab Program',
    thumbnail: 'https://vumbnail.com/1161330402.jpg',
    videoUrl: 'https://player.vimeo.com/video/1161330402',
    videoType: 'vimeo',
  },
  {
    id: 4,
    title: 'Performance Jump',
    subtitle: 'College Arm',
    thumbnail: 'https://vumbnail.com/1161331214.jpg',
    videoUrl: 'https://player.vimeo.com/video/1161331214',
    videoType: 'vimeo',
  },
];
