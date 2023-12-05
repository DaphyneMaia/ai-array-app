// src/ListPlayers.js

import React, { useState } from 'react';
import arrPlayers from './players';
import ShowPlayer from './ShowPlayer';

const ListPlayers = () => {
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [players, setPlayers] = useState(arrPlayers);

  const handleShowDetails = (playerId) => {
    setSelectedPlayerId(playerId);
  };

  const handleDeleteClick = (playerId) => {
    const updatedPlayers = players.filter((player) => player.id !== playerId);
    setPlayers(updatedPlayers);

    // If the deleted player is currently being displayed, go back to the list view
    if (selectedPlayerId === playerId) {
      setSelectedPlayerId(null);
    }
  };

  const handleBackToList = () => {
    setSelectedPlayerId(null);
  };

  return (
    <div>
      {selectedPlayerId ? (
        <div>
          <button style={{backgroundColor: 'burlywood', width:100}} onClick={handleBackToList}>Back to List</button>
          <ShowPlayer player={players.find((p) => p.id === selectedPlayerId)} />
        </div>
      ) : (
        <section className="w-1140px"> 
            <h2>Top Soccer Players</h2> 
            <table className="data-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Trophies</th>
                <th>Club</th>
                <th>Nationality</th>
                <th>Details</th>
                <th>Delete</th> {/* New column for delete buttons */}
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id}>
                  <td>{player.id}</td>
                  <td>{`${player.firstName} ${player.lastName} (${player.age})`}</td>
                  <td>{player.trophies}</td>
                  <td>{player.club}</td>
                  <td>{player.nationality}</td>
                  <td>
                    <button onClick={() => handleShowDetails(player.id)}>More...</button>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteClick(player.id)} style={{backgroundColor: 'red'}}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
};

export default ListPlayers;