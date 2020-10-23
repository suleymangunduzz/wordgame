import React, { FC } from 'react';

import './ResultPanel.scss';

import { FINISHED } from '../../utils/constants';

type Props = {
  gameStatus: string;
  selectedNames: Array<string>;
};

const ResultPanel: FC<Props> = ({ gameStatus, selectedNames }) => {
  if (gameStatus === FINISHED) {
    return <div className="ResultPanel">Oyun Bitti</div>;
  }

  return <div>{selectedNames.length ? selectedNames[selectedNames.length - 1] : '......'}</div>;
};

export default ResultPanel;
