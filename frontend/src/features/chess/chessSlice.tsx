import { createSlice } from "@reduxjs/toolkit";
import * as SharedStyles from "../../shared/types";

const initialState: SharedStyles.IChessState = {
  chess: {
    gameRoomId: "",
    isGameStarted: false,
    chessBoard: [],
    current_player: "",
    piecesPosition: {
      black_pieces: [],
      white_pieces: [],
    },
    candidateMoves: [],
    selectedPiece: null,
    black_checked: false,
    black_checkmated: false,
    white_checked: false,
    white_checkmated: false,
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const chessSlice = createSlice({
  name: "chess",
  initialState,
  reducers: {
    //when we want to restore the default state
    reset: (state) => {
      state = initialState;
    },
    updatePositions: (state, action) => {
      state.chess.piecesPosition.white_pieces = action.payload.white_pieces;
      state.chess.piecesPosition.black_pieces = action.payload.black_pieces;
      state.chess.black_checkmated = action.payload.black_checkmated;
      state.chess.black_checked = action.payload.black_checked;
      state.chess.white_checked = action.payload.white_checked;
      state.chess.white_checkmated = action.payload.white_checkmated;
      state.chess.current_player = action.payload.current_player;
    },
    setGameRoomId: (state, action) => {
      state.chess.gameRoomId = action.payload;
    },
    prepareChessGame: (state, action) => {
      state.chess.gameRoomId = action.payload.gameRoomId;
      state.chess.isGameStarted = action.payload.isGameStarted;
    },
    createChessGame: (state, action) => {
      state.chess.gameRoomId = action.payload.gameRoomId;
      state.chess.isGameStarted = action.payload.isGameStarted;
      state.chess.current_player = "white";
    },
    changeTurn: (state, action) => {
      state.chess.current_player = action.payload;
    },
    initGame: (state, action) => {
      state.chess.current_player = "white";
      state.chess.chessBoard = action.payload;
      state.chess.candidateMoves = [];
    },
    updateBoard: (state, action) => {
      state.chess.chessBoard = action.payload;
      state.chess.candidateMoves = [];
    },
    generateCandidateMoves: (state, action) => {
      state.chess.candidateMoves = action.payload;
    },
    clearCandidates: (state) => {
      state.chess.candidateMoves = [];
      state.chess.selectedPiece = null;
    },
    setSelectedPiece: (state, action) => {
      state.chess.selectedPiece = action.payload;
    },
  },
  //State - pendning, fullfiled, rejected
  extraReducers() {},
});

export const {
  reset,
  updatePositions,
  setGameRoomId,
  prepareChessGame,
  changeTurn,
  initGame,
  generateCandidateMoves,
  clearCandidates,
  updateBoard,
  setSelectedPiece,
  createChessGame,
} = chessSlice.actions;
export default chessSlice.reducer;
