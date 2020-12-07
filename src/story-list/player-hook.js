import { useState } from 'react';

export const usePlayer = () => {
  const [activePlayer, setActivePlayer] = useState();

  const play = index => setActivePlayer(index);

  const stop = () => setActivePlayer(undefined);

  return { play, stop, activePlayer };
};
