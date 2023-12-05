// src/ShowPlayer.js

import React from 'react';

const ShowPlayer = ({ player }) => {
  return (
    <div style={{backgroundColor: 'burlywood'}}>
      <h2 style={{marginInlineStart:10}}>{`${player.firstName} ${player.lastName}`}</h2>
      <p style={{marginInlineStart:10}}>
        <strong>Rank:</strong> {player.id}
      </p>
      <p style={{marginInlineStart:10}}>
        <strong>Age:</strong> {player.age}
      </p>
      <p style={{marginInlineStart:10}}>
        <strong>Club:</strong> {player.club}
      </p>
      <p style={{marginInlineStart:10}}>
        <strong>Nationality:</strong> {player.nationality}
      </p>
      <p style={{marginInlineStart:10}}>
        <strong>Trophies:</strong> {player.trophies}
      </p>
      <p style={{marginInlineStart:10}}>
        <strong>Bio:</strong> {player.bio}
      </p>
      <div style={{textAlign:'center'}}>
        <img src={player.img} alt={`${player.firstName} ${player.lastName}`} style={{width:400}}/>
      </div>
    </div>
  );
};

export default ShowPlayer;
