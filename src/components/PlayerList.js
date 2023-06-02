import React from 'react';
import Player from './Player';
import players from '../Players';

function PlayerList() {
  return (
    <div>
      {players.map((player) => (
        <Player key={player.id} {...player} />
      ))}
    </div>
  );
}

export default PlayerList;
