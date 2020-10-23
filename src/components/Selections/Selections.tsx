import React, { FC } from 'react';

import './Selections.scss';
import { FINISHED } from '../../utils/constants';

type Props = {
  selectedNames: string[];
  gameStatus: string;
};

const Selections: FC<Props> = ({ selectedNames, gameStatus }) => {
  if (gameStatus !== FINISHED) {
    return <></>;
  }

  if (!selectedNames.length) {
    return <div className="Selections">Hiç seçim yapılamadı...</div>;
  }

  return (
    <div className="Selections">
      {selectedNames.map((name, index) => (
        <div key={name} className="Selections__value-container">
          <div className="Selections__value">{name}</div>
          {index === selectedNames.length - 1 ? '' : ' -> '}
        </div>
      ))}
    </div>
  );
};

export default Selections;
