'use client';

import { useRouter } from 'next/navigation';

const Card = () => {
  const router = useRouter();

  const cardData = [
    {
      title: 'Naruto Shippuden',
      slug: 'naruto-shippuden',
      image: 'https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      description: 'Naruto follows his path to become the strongest ninja and protect his friends.',
    },
    {
      title: 'One Piece',
      slug: 'one-piece',
      image: 'https://areajugones.sport.es/wp-content/uploads/2019/09/OnePiecePoster.jpg',
      description: 'Luffy sails to become the Pirate King and find the legendary One Piece treasure.',
    },
    {
      title: 'Attack on Titan',
      slug: 'attack-on-titan',
      image: 'https://www.toonamisquad.com/wp-content/uploads/2019/02/Attack-On-Titan-S1.jpg',
      description: 'Eren fights to uncover the secrets behind the Titans who destroyed his home.',
    },
    {
      title: 'Death Note',
      slug: 'death-note',
      image: 'https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg',
      description: 'A high school student gains the power to kill by writing names in a mysterious notebook.',
    },
    {
      title: 'Demon Slayer',
      slug: 'demon-slayer',
      image: 'https://wallpapers.com/images/featured/demon-slayer-anime-vy37autfo82jvft7.jpg',
      description: 'Tanjiro sets out to save his sister and destroy the demon threat.',
    },
    {
      title: 'My Hero Academia',
      slug: 'my-hero-academia',
      image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974721559/my-hero-academia-team-up-missions-vol-1-9781974721559_hr.jpg',
      description: 'Izuku Midoriya dreams of becoming a superhero in a world where powers are common.',
    },
    {
      title: 'Jujutsu Kaisen',
      slug: 'jujutsu-kaisen',
      image: 'https://tse1.mm.bing.net/th/id/OIP.JTGPeEsGhfvgUOgSmF9aOAHaEK?pid=Api&P=0&h=180',
      description: 'Yuji Itadori joins a secret organization to fight cursed spirits and demons.',
    },
    {
      title: 'Tokyo Ghoul',
      slug: 'tokyo-ghoul',
      image: 'https://www.pixelstalk.net/wp-content/uploads/images6/Tokyo-Ghoul-Desktop-Background.jpg',
      description: 'Ken Kaneki struggles with his new identity as a half-human, half-ghoul.',
    },
    {
      title: 'Bleach',
      slug: 'bleach',
      image: 'https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png',
      description: 'Ichigo gains the powers of a Soul Reaper to protect the living and the dead.',
    },
    {
      title: 'Dragon Ball Z',
      slug: 'dragon-ball-z',
      image: 'https://tse1.mm.bing.net/th/id/OIP.tfQt7tXMKi60enn-3IuG8AHaHa?pid=Api&P=0&h=180',
      description: 'Goku defends Earth from powerful villains with his Super Saiyan strength.',
    },
    {
      title: 'Fairy Tail',
      slug: 'fairy-tail',
      image: 'https://static.zerochan.net/FAIRY.TAIL.full.1128000.jpg',
      description: 'Natsu and his friends from Fairy Tail guild take on magical adventures.',
    },
    {
      title: 'Sword Art Online',
      slug: 'sword-art-online',
      image: 'https://static.animecorner.me/2024/11/1730959137-0fa928ee563e1a6ca831457f136db3ff.jpg',
      description: 'Players trapped in a virtual MMORPG must fight to survive.',
    },
    {
      title: 'Black Clover',
      slug: 'black-clover',
      image: 'https://images6.fanpop.com/image/photos/43700000/Black-Clover-black-clover-43715593-2048-1536.jpg',
      description: 'Asta, born without magic, vows to become the Wizard King.',
    },
    {
      title: 'Fullmetal Alchemist',
      slug: 'fullmetal-alchemist',
      image: 'https://images6.fanpop.com/image/photos/36600000/Full-Metal-Alchemist-image-full-metal-alchemist-36621437-3399-4958.jpg',
      description: 'Two brothers use alchemy in their quest to recover what they lost.',
    },
    {
      title: 'Haikyuu!!',
      slug: 'haikyuu',
      image: 'https://tse2.mm.bing.net/th/id/OIP.ctR9sMJmL0aq3iQoWYXBRQHaLH?pid=Api&P=0&h=180',
      description: 'Hinata aims to be the best volleyball player despite his small height.',
    },
  ];

  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <div
          className="card"
          key={index}
          onClick={() => router.push(`/anime/${card.slug}`)}
          
        >
          <img src={card.image} alt={card.title} />
          <h2>{card.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Card;
