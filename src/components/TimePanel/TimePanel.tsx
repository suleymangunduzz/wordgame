import React, { FC } from 'react';

import './TimePanel.scss';
import { STARTED } from '../../utils/constants';

type Props = {
  timeLeft: number;
  gameStatus: string;
};

const TimePanel: FC<Props> = ({ timeLeft, gameStatus }) => (
  <div className="TimePanel"> {gameStatus === STARTED ? `Kalan Süre: ${timeLeft}` : `--`} </div>
);

export default TimePanel;
