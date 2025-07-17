'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Card from '../component/Card';


export default function Home() {
  const [selectedCard, setSelectedCard] = useState(null);
  const router = useRouter();

  const lo = (event)=>{
    event.preventDefault();
    router.push('/login');
  }

  const a_lo = (event)=>{
    event.preventDefault();
    router.push('/ad_login');
  }

  return (
    <div className="container">

      <div className="navbar">
        <div className='left-nav'>
          <h3>Blokify</h3>
        </div>
        <div className='right-nav'>
            <h4 onClick={a_lo}>Admin login</h4>
            <h4 onClick={lo}>User login</h4>
        </div>
        
      </div>

      <div className="header">
        <Card onCardClick={setSelectedCard} />
      </div>

      <div className="footer">
        {selectedCard ? (
          <div className="detail">
            <div className="description">
              <h2>{selectedCard.title}</h2>
              <p>{selectedCard.description}</p>
            </div>
            <img
              src={selectedCard.image}
              alt="No Image"
              className="detail-img"
            />
          </div>
        ) : (
          <h2>Click a card to see description</h2>
        )}
      </div>
    </div>
  );
}
