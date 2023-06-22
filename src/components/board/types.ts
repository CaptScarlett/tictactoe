export interface BoardProps {
  board: string[];
  player: string;
  turn: (index: number) => void;
}
