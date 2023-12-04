import * as Styles from "./Pieces.styles";
import * as Types from "./Pieces.types";
import Piece from "../Piece/Piece";
import Functions from "../../../utils/Functions";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import {
  clearCandidates,
  updateBoard,
} from "../../../features/chess/chessSlice";

const Pieces = ({ webSocket }: Types.IProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { chess } = useSelector((state: RootState) => state.chess);
  const { candidateMoves } = chess;

  useEffect(() => {
    dispatch(updateBoard(Functions.placeOnTheBoard(chess.piecesPosition)));
    console.log("eeffec pieces");
  }, [chess.piecesPosition, dispatch]);

  const ref = useRef<HTMLDivElement>(null);

  const calculateCoords = (e: React.MouseEvent) => {
    const { width, left, top } = ref.current!.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((e.clientX - left) / size);
    const x = 7 - Math.floor((e.clientY - top) / size);
    return { x, y };
  };

  const onDrop = (e: Types.DragEvent) => {
    const newPosition = Functions.copyPosition(chess.chessBoard);
    const { x, y } = calculateCoords(e); //New
    const [piece, rank, file] = e.dataTransfer.getData("text").split(","); //Old

    if (candidateMoves?.find((pos) => pos[0] === x && pos[1] === y)) {
      newPosition[Number(rank)][Number(file)] = "";
      newPosition[x][y] = piece;
      webSocket.send(
        JSON.stringify({
          data_type: "move",
          color: chess.selectedPiece?.color,
          piece: chess.selectedPiece?.id,
          new_position: `${y + 1}${x + 1}`,
        })
      );
    }

    dispatch(clearCandidates());
  };

  const onDragOver = (e: Types.DragEvent) => {
    e.preventDefault();
  };

  return (
    <Styles.Pieces ref={ref} onDrop={onDrop} onDragOver={onDragOver}>
      {chess.chessBoard.map((r, rank) =>
        r.map((f, file) =>
          chess.chessBoard[rank][file] ? (
            <Piece
              key={rank + "-" + file}
              rank={rank}
              file={file}
              piece={chess.chessBoard[rank][file]}
            />
          ) : null
        )
      )}
    </Styles.Pieces>
  );
};

export default Pieces;
