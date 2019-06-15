import shortid from 'shortid';
import { ScoreType, ScoreUpdateType } from './types';
import { SCORE_KEY } from './constants';

export function getScores(): ScoreType[] {
  const values = localStorage.getItem(SCORE_KEY);
  return values ? JSON.parse(values) : [];
}

export function insertScore(score: number, name: string): ScoreType {
  const values = getScores();
  const newValue: ScoreType = { score, name, id: shortid.generate() };

  const insertIndex = values.findIndex((el) => score > el.score);

  if (insertIndex === -1) {
    values.push(newValue);
  } else {
    values.splice(insertIndex, 0, newValue);
  }

  localStorage.setItem(SCORE_KEY, JSON.stringify(values));

  return newValue;
}

export function updateScore(id: string, updatedParams: ScoreUpdateType ): ScoreType | void {
  const values = getScores();

  const editIndex = values.findIndex((val) => val.id === id);

  if (editIndex === -1) return;

  const updatedValue : ScoreType = { ...values[editIndex], ...updatedParams };
  values[editIndex] = updatedValue;

  localStorage.setItem(SCORE_KEY, JSON.stringify(values));

  return updatedValue;
}
