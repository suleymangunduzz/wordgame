import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import './Home.scss';

import Button from '../../components/Button';
import ResultPanel from '../../components/ResultPanel';
import PlayerInfo from '../../components/PlayerInfo';
import TimePanel from '../../components/TimePanel';
import Selections from '../../components/Selections';

import names from '../../utils/names.json';

import useInterval from '../../utils/useInterval';
import listenUser from '../../utils/ListenUser';
import listenMachine from '../../utils/ListenMachine';
import generateRandomNumber from '../../utils/RandomNumberGenerator';

import { NOT_STARTED, STARTED, FINISHED, USER, MACHINE } from '../../utils/constants';

const Home: FunctionComponent = () => {
  const emptyState: string[] = [];
  const [gameStatus, setGameStatus] = useState<string>(NOT_STARTED);
  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const [nextPlayer, setNextPlayer] = useState<string>('');
  const [winner, setWinner] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(8);
  const [usersFinalAnswer, setUsersFinalAnswer] = useState<string>('');
  const synthRef = useRef(window.speechSynthesis);

  let globalTimer: any;
  let globalInterval: any;

  useEffect(() => {
    if (gameStatus === STARTED) {
      const clearNames = async () => {
        await setSelectedNames(emptyState);
      };

      clearNames();
    }
  }, [gameStatus]);

  useEffect(() => {
    if (timeLeft === 0 && nextPlayer === USER && usersFinalAnswer === '') {
      setNextPlayer(MACHINE);
      setGameStatus(FINISHED);
      setWinner(MACHINE);
    }
  }, [timeLeft, nextPlayer, usersFinalAnswer]);

  useInterval(() => setTimeLeft(timeLeft - 1), timeLeft, gameStatus);

  let recognition: any;

  if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'tr-TR';
  }

  useEffect(() => {
    if (gameStatus !== FINISHED) {
      switch (nextPlayer) {
        case MACHINE:
          listenMachine(
            generateRandomNumber(10) > 0,
            generateRandomNumber(7),
            selectedNames,
            names,
            synthRef,
            setWinner,
            setTimeLeft,
            setGameStatus,
            setNextPlayer,
            setUsersFinalAnswer,
            setSelectedNames,
            false,
          );
          break;
        case USER:
          listenUser(
            recognition,
            selectedNames,
            names,
            setWinner,
            setTimeLeft,
            setGameStatus,
            setNextPlayer,
            setUsersFinalAnswer,
            setSelectedNames,
          );
          break;
        default:
          break;
      }
    }

    return () => {
      recognition.stop();
      clearTimeout(globalTimer);
      clearInterval(globalInterval);
    };
  }, [nextPlayer]);

  const startGameHandler = () => {
    if (gameStatus !== STARTED) {
      setGameStatus(STARTED);
      listenMachine(
        generateRandomNumber(10) > 0,
        generateRandomNumber(7),
        selectedNames,
        names,
        synthRef,
        setWinner,
        setTimeLeft,
        setGameStatus,
        setNextPlayer,
        setUsersFinalAnswer,
        setSelectedNames,
        true,
      );
      setTimeLeft(8);
    }
  };

  const renderGameStatus = () => {
    return gameStatus === FINISHED && <div className="Home__winner">{`Kazanan: ${winner}`}</div>;
  };

  const getStartButtonText = () => {
    return gameStatus !== STARTED ? 'Oyuna Başla' : 'Oyun Devam Ediyor';
  };

  return (
    <div className="Home">
      <h1>Kelime Oyunu</h1>

      <div className="Home__play-area">
        <ResultPanel gameStatus={gameStatus} selectedNames={selectedNames} />
        <PlayerInfo gameStatus={gameStatus} nextPlayer={nextPlayer} />
        <TimePanel timeLeft={timeLeft} gameStatus={gameStatus} />
      </div>

      <Button onClick={startGameHandler} disabled={gameStatus === STARTED}>
        {getStartButtonText()}
      </Button>

      {renderGameStatus()}

      <Selections gameStatus={gameStatus} selectedNames={selectedNames} />
    </div>
  );
};

export default Home;
