'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Card from '@/component/Card';

export default function Login_route() {
  const [selectedCard, setSelectedCard] = useState(null);
  const router = useRouter();

  const handleLogout = (event) => {
    event.preventDefault();
    router.push('/');
  };

  return (
    <div className="container">
      <div className="navbar-user">
        <h1>User Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
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
