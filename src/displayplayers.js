// src/DisplayPlayer.js

import React from 'react';
import arrPlayers from './players';

const DisplayPlayer = ({ playerId }) => {
  const player = arrPlayers.find((p) => p.id === playerId);

  if (!player) {
    return <div>Player not found</div>;
  }

  return (
    <div>
      <h2>{`${player.firstName} ${player.lastName}`}</h2>
      <p>
        <strong>Rank:</strong> {player.id}
      </p>
      <p>
        <strong>Age:</strong> {player.age}
      </p>
      <p>
        <strong>Club:</strong> {player.club}
      </p>
      <p>
        <strong>Nationality:</strong> {player.nationality}
      </p>
      <p>
        <strong>Trophies:</strong> {player.trophies}
      </p>
      <p>
        <strong>Bio:</strong> {player.bio}
      </p>
      <img src={player.img} alt={`${player.firstName} ${player.lastName}`} />
    </div>
  );
};

export default DisplayPlayer;
