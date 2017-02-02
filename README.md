# Passant Manifesto (please 'star' this repository. if we get over 100 stars, I'll put the right parenthesis back.
A programming language made up of chess games

Passant is a programming language (which some may describe as esoteric <!--rather than functional [although it is functional in the technical sense of the word, it is indeed true that some may view the language as not functional in the sense of the word "things that are functional can function well and are thus functioning and functional"]-->).

The alphabet of the language is composed of the set of all possible complete or incomplete chess games (rigorously: a chess game is any sequence of legal chess moves, after the chessboard has been set up to the chess starting position).  We offer the working compiler in this github repo as an example of the language.

The abstract notion of a chess game is, while intriguing, not convenient for computers, so in our implementation, we concretize a "chess game" as a string which represents a chess game in [PGN](https://en.wikipedia.org/wiki/Portable_Game_Notation).

However, we don't presume to constrain all implementations of the language to this specific definition of "chess game", and so you may indeed play programs in this language by yourself or with a friend on a physical chessboard.

This compiler can be viewed at [/compiler.js](/compiler.js) and heavily uses the open-source chess.js library to do the hard work of parsing the algebraic notation of games in PGN and translating those to board states (which are intermediarily represented in FEN).

# What is Passant?: An Explanation in English

<!---## GAMEs: the Fundamental Building Blocks of Passant

The alphabet of Passant is the GAME, which stands for "GAMEs're Agnostic of Meaning or Encodings".  Like the name implies, GAMEs are agnostic of meaning or encodings.  Which is to say that a GAME can be interpreted in various ways depending on context within the program.
-->

t0-do

## KASTLE: Kevin-Aziz-Suasin-Transposition-Lumping-Encoding

(documentation in progress)  
We define a new method of encoding a chessboard state to a sequence of bits.

 <img border="5" width="200"
  src="/readme-assets/game-of-the-century-queen-sacrifice.png"
  alt="test">	
  <figcaption>The KASTL Encoding of this board-state is <code>000111010</code></figcaption>

Informally, to get the KASTLE of a chessboard state, you view the chessboard, top-down, from White's perspective.  Then, you scan the chessboard row-by-row top-to-bottom, left-to-right. (Like reading lines of text.)  Construct a bitstring by adding a 1 every time you encounter a white piece, and adding a 0 every time you encounter a black piece.  So, for example, the starting position would be `'00000000000000001111111111111111'`.  Then, you match as many 0s from the beginning and 1s from the end as you can, and delete them.  In essence, any leading 0 annihilates with any trailing 1.  So, the starting position then becomes `''` (the empty string).

Python code:   
```python
def KASTLE(bits):
	#
	while(s[0] == '0' and s[-1] == '1'):
		s = s[1:-1]```

<!---# What is Passant?: An Explanation in Gibberish

to-do -->

# Language Philosophy: Guiding Principles

The vision for Passant was to provide a programming language that espoused the elegance of the game of chess.  In designing Passant, we want to chase the beauty found in the emergent behavior and metagame of so few simple rules.  We also wanted to take advantage of the huge state-spaces found in chess (such as the huge amount of legal board-states, or the huger amount of legal games).  In version 0.01, we feel like we have accomplished these goals "adequately" on a scale of "eh" to "good".

# Coding in Passant: A Style Guide.

to-do