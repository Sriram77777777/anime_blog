'use client';

import { useState } from 'react';
import Card from '../component/Card';

export default function Home() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="container">
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
