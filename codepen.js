var board,
  game = new Chess(),
  statusEl = $('#status'),
  fenEl = $('#fen'),
  pgnEl = $('#pgn');

// do not pick up pieces if the game is over
// only pick up pieces for the side to move
var onDragStart = function(source, piece, position, orientation) {
  if (game.game_over() === true ||
      (game.turn() === 'w' && piece.search(/^b/) !== -1) ||
      (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
    return false;
  }
};

var board = new ChessBoard('board', cfg);


var onDrop = function(source, target) {
  // see if the move is legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q'
  });

  // illegal move
  if (move === null) return 'snapback';

  updateStatus();
};

// update the board position after the piece snap 
// for castling, en passant, pawn promotion
var onSnapEnd = function() {
  board.position(game.fen());
};


var updateStatus = function() {
  var status = '';
    var endFen = '';
  var moveColor = 'White';
  if (game.turn() === 'b') {
    moveColor = 'Black';
  }

  // checkmate?
  if (game.in_checkmate() === true) {
    status = 'Game over, ' + moveColor + ' is in checkmate.'
    if(moveColor === "White"){
        endFen += " K ";
    }
    else{
        endFen += " k ";
    }
  }

  // draw?
  else if (game.in_draw() === true) {
    status = 'Game over, drawn position';
  }

  // game still on
  else {
    status = moveColor + ' to move';
    // check?
    if (game.in_check() === true) {
      status += ', ' + moveColor + ' is in check';
        if(moveColor === "White"){
            endFen += " Q ";
        }
        else{
            endFen += " q ";
        }
    }
    else{
        endFen += " - ";
    }
  }
    pgnparts = game.pgn().split(/. /);
  if(pgnparts[pgnparts.length - 1] === 'O-O'){
      endFen += "1";
  }
  else{
      endFen += "0";
  }
  statusEl.html(status);
  fenEl.html(game.fen() + endFen);
  pgnEl.html(game.pgn());
};

var PGN2FEN = function(PGN){
    var convert = new Chess();
    var endFen = '';
    convert.load_pgn(PGN);
    if(convert.in_checkmate() === true){
        if(convert.turn() === 'w'){
            endFen += " K ";
        }
        else{
            endFen += " k ";
        }
    }
    else if(convert.in_check() === true){
        if(convert.turn() === 'w'){
            endFen += ' Q ';
        }
        else{
            endFen += ' q ';
        }
    }
    else{
        endFen += ' - ';
    }
    pgnparts = game.pgn().split(/. /);
    if(pgnparts[pgnparts.length - 1] === 'O-O'){
        endFen += "1";
    }
    else{
        endFen += "0";
    }
    return convert.fen() + endFen;
};

var cfg = {
  snapbackSpeed: 550,
  appearSpeed: 1500,
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
   pieceTheme: 'http://www.willangles.com/projects/chessboard/img/chesspieces/wikipedia/{piece}.png',
  onSnapEnd: onSnapEnd
};


board = new ChessBoard('board', cfg);
$(window).resize(board.resize);

updateStatus();

$('#startBtn').on('click', board.start);
$('#clearBtn').on('click', board.clear);
$('#colorBtn').on('click', board.flip);