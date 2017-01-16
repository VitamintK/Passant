# Passant Manifesto (please 'star' this repository.
if we get over 100 stars, I'll put the right parenthesis back.
A programming language made up of chess games

Passant is a programming language (which some may describe as esoteric rather than functional [although it is functional in the technical sense of the word, it is indeed true that some may view the language as not functional in the sense of the word "things that are functional can function well and are thus functioning and functional"]).

The alphabet of the language is composed of the set of all possible complete or incomplete chess games (a chess game is any sequence of legal chess moves, after the chessboard has been set up to the chess starting position).  We offer the working compiler in this github repo as an example of the language.

The abstract notion of a chess game is, while intriguing, not convenient for computers, so in our implementation, we concretize a "chess game" as a string which represents a chess game in [PGN](https://en.wikipedia.org/wiki/Portable_Game_Notation).

However, we don't presume to constrain all implementations of the language to this specific definition of "chess game", and so you may indeed play programs in this language by yourself or with a friend on a physical chessboard.
