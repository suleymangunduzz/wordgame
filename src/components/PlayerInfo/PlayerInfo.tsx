import React, { FC } from 'react';

import './PlayerInfo.scss';

import { FINISHED, MACHINE } from '../../utils/constants';

type Props = {
  gameStatus: string;
  nextPlayer: string;
};

const PlayerInfo: FC<Props> = ({ gameStatus, nextPlayer }) => {
  if (gameStatus !== FINISHED) {
    return <div className="PlayerInfo">{`Oynama sırası: ${nextPlayer || MACHINE}`}</div>;
  }

  return <></>;
};

export default PlayerInfo;
