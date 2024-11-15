export type Color = number;
export type CellState = Color | undefined;
export type Grid<T> = Record<number, Record<number, T>>;

export type Puzzle = {
  width: number;
  height: number;
  clues: Grid<CellState>;
};

export const loadPuzzle = (p: [number, number, number[]]): Puzzle => {
  const [w, h, cells] = p;
  const puzzle: Puzzle = {
    width: w,
    height: h,
    clues: [],
  };

  for (let i = 0; i < cells.length; i++) {
    const [x, y] = [i % w, Math.floor(i / w)];
    puzzle.clues[x] = puzzle.clues[x] || [];
    puzzle.clues[x][y] = cells[i] == 0 ? undefined : cells[i];
  }

  return puzzle;
};
