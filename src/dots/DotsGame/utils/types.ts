export interface ScoreType {
  id: string;
  name: string;
  score: number;
}

export interface ScoreUpdateType {
  name?: string;
  score?: number;
}
