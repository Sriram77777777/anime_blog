'use client';

import { useParams } from 'next/navigation';

const animeData = {
  'naruto-shippuden': {
    title: 'Naruto Shippuden',
    image: 'https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    description: 'Naruto follows his path to become the strongest ninja and protect his friends.',
  },
  'one-piece': {
    title: 'One Piece',
    image: 'https://areajugones.sport.es/wp-content/uploads/2019/09/OnePiecePoster.jpg',
    description: 'Luffy sails to become the Pirate King and find the legendary One Piece treasure.',
  },
  'attack-on-titan': {
    title: 'Attack on Titan',
    image: 'https://www.toonamisquad.com/wp-content/uploads/2019/02/Attack-On-Titan-S1.jpg',
    description: 'Eren fights to uncover the secrets behind the Titans who destroyed his home.',
  },
  'death-note': {
    title: 'Death Note',
    image: 'https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg',
    description: 'A high school student gains the power to kill by writing names in a mysterious notebook.',
  },
  'demon-slayer': {
    title: 'Demon Slayer',
    image: 'https://wallpapers.com/images/featured/demon-slayer-anime-vy37autfo82jvft7.jpg',
    description: 'Tanjiro sets out to save his sister and destroy the demon threat.',
  },
  'my-hero-academia': {
    title: 'My Hero Academia',
    image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974721559/my-hero-academia-team-up-missions-vol-1-9781974721559_hr.jpg',
    description: 'Izuku Midoriya dreams of becoming a superhero in a world where powers are common.',
  },
  'jujutsu-kaisen': {
    title: 'Jujutsu Kaisen',
    image: 'https://tse1.mm.bing.net/th/id/OIP.JTGPeEsGhfvgUOgSmF9aOAHaEK?pid=Api&P=0&h=180',
    description: 'Yuji Itadori joins a secret organization to fight cursed spirits and demons.',
  },
  'tokyo-ghoul': {
    title: 'Tokyo Ghoul',
    image: 'https://www.pixelstalk.net/wp-content/uploads/images6/Tokyo-Ghoul-Desktop-Background.jpg',
    description: 'Ken Kaneki struggles with his new identity as a half-human, half-ghoul.',
  },
  'bleach': {
    title: 'Bleach',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png',
    description: 'Ichigo gains the powers of a Soul Reaper to protect the living and the dead.',
  },
  'dragon-ball-z': {
    title: 'Dragon Ball Z',
    image: 'https://tse1.mm.bing.net/th/id/OIP.tfQt7tXMKi60enn-3IuG8AHaHa?pid=Api&P=0&h=180',
    description: 'Goku defends Earth from powerful villains with his Super Saiyan strength.',
  },
  'fairy-tail': {
    title: 'Fairy Tail',
    image: 'https://static.zerochan.net/FAIRY.TAIL.full.1128000.jpg',
    description: 'Natsu and his friends from Fairy Tail guild take on magical adventures.',
  },
  'sword-art-online': {
    title: 'Sword Art Online',
    image: 'https://static.animecorner.me/2024/11/1730959137-0fa928ee563e1a6ca831457f136db3ff.jpg',
    description: 'Players trapped in a virtual MMORPG must fight to survive.',
  },
  'black-clover': {
    title: 'Black Clover',
    image: 'https://images6.fanpop.com/image/photos/43700000/Black-Clover-black-clover-43715593-2048-1536.jpg',
    description: 'Asta, born without magic, vows to become the Wizard King.',
  },
  'fullmetal-alchemist': {
    title: 'Fullmetal Alchemist',
    image: 'https://images6.fanpop.com/image/photos/36600000/Full-Metal-Alchemist-image-full-metal-alchemist-36621437-3399-4958.jpg',
    description: 'Two brothers use alchemy in their quest to recover what they lost.',
  },
  'haikyuu': {
    title: 'Haikyuu!!',
    image: 'https://tse2.mm.bing.net/th/id/OIP.ctR9sMJmL0aq3iQoWYXBRQHaLH?pid=Api&P=0&h=180',
    description: 'Hinata aims to be the best volleyball player despite his small height.',
  },
};

export default function AnimePage() {
  const { slug } = useParams();
  const anime = animeData[slug];

  if (!anime) {
    return <h2>Anime not found</h2>;
  }

  return (
    <div className="container">
      <h1>{anime.title}</h1>
      <div className="detail">
        <div className="description">
          <p>{anime.description}</p>
        </div>
        <img src={anime.image} alt={anime.title} className="detail-img" />
      </div>
    </div>
  );
}
