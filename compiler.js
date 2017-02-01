//I.. DECLARE... OPEN SOURCE!
builtins = ["console.log", "alert", "break", "do", "in", "typeof", "case", "else", "instanceof", "var",
"catch", "export", "new", "void", "class", "extends", "return", "while",
"const", "finally", "super", "with", "continue", "for", "switch", "yield",
"debugger", "function", "this", "default", "if", "throw", "delete", "import", "try",
"{", "(", ")", "[", "]", ".", "...", ";", ",", "<", ">", "<=", ">=", "==", "!=", "===",
"!==", "+", "‐", "*", "%", "++", "‐‐", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&",
"||", "?", ":", "=", "+=", "‐=", "*=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", "=>", "**", "**=",
"/", "/=",
"}"];

PGNs = ["", "1.d4 e6 2.a4 Qg5 3.a5 Qxc1 4.Ra2 c5 5.h3 Qxc2 6.Qc1 Qf5 7.d5 b5 8.Nf3 e5",
"1. e4 e5 2. d4 d5 { C21 King's Pawn Game: Beyer Gambit } 3. exd5 exd4 4. Nd2 g5 5. Ne4 f5 6. Nc3 h5 7. Na4 b5 8. Rb1 Qe7+ 9. Qe2 Qxe2+ 10. Bxe2 d3 11. Kd2 dxe2 12. Kd3 e1=Q 13. Kd4 Qxg1 14. Kc3 Qxc1 15. Kd3 Qxb1 16. Rxb1 b4 17. Rg1 b3 18. Kd2 Bb4+ 19. Kd1 Ba6 20. Kc1 f4 21. Kd1 Bc5 22. Ke1 Bb4+ { White resigns } 0-1",
"1. a4 { A00 Ware Opening } b5 2. a5 c5 3. e4 b4 4. Bb5 g5 5. Qh5 g4 6. Qxh7 f6 7. Qh3 Kf7 8. d3 Ke8 9. Kd2 Bh6+ { Draw } 1/2-1/2",
"1. a4 { A00 Ware Opening } d5 2. b4 c5 3. e4 Bd7 4. bxc5 f6 5. a5 g5 6. e5 h5 7. Bd3 Bg7 8. Bf5 Qb6 9. Kf1 Qa6+ { Draw } 1/2-1/2",
"1. a4 { A00 Ware Opening } d5 2. d4 Kd7 3. b4 Kc6 4. a5 Kb5 5. c3 Kc4 6. b5 e5 7. dxe5 Qh4 8. Bg5 Qg4 9. f3 Qh4+ { Draw } 1/2-1/2",
"1. a4 { A00 Ware Opening } b5 2. a5 b4 3. Ra4 h6 4. f4 e6 5. e4 c6 6. Bc4 f6 7. d4 Qe7 8. Qd2 Qf7 9. Qd1 Qh5 10. Qd2 Qh4+ 11. Qf2 Qg5 12. Bxe6 Kd8 13. Kd1 Ke8 14. Bxd7+ Kd8 15. Bxc6 Nxc6 16. Ke2 Qxa5 17. f5 Ke8 18. Bxh6 Kd8 19. Bxg7 Nh6 20. Bxh6 Ke8 21. Bd2 Qb5+ 22. Ke1 Rh3 23. gxh3 Qb6 24. Qf1 Qb5 25. Qf2 Qb6 26. Ke2 Qb5+ { Draw } 1/2-1/2",
"1. e4 f5 { B00 Duras Gambit } 2. e5 a5 3. g4 a4 4. g5 Ra7 5. Na3 e6 6. Nb1 Ba3 7. Qh5+ Kf8 8. Ke2 b6 9. Bg2 Ba6+ { Draw } 1/2-1/2",
"1. e4 f5 { B00 Duras Gambit } 2. e5 g5 3. e6 h5 4. b3 a5 5. b4 axb4 6. c3 bxc3 7. a4 c6 8. a5 Qxa5 9. Be2 cxd2+ { White resigns } 0-1",
"1. d4 e5 2. dxe5 d6 3. exd6 f6 4. Bh6 g5 5. Bxf8 Nh6 6. Bxh6 Bg4 7. f3 Bxf3 8. Qd2 Bxe2 9. Qd1 Ba6 10. Bxa6 b6 11. Bf1 Qe7+",
"1. Nc3 d5 2. Nxd5 f6 3. Nxf6+ exf6 4. d4 Qxd4 5. Qxd4 f5 6. Qxg7 Be6 7. Qxc7 Bc8 8. Qe5+ Be6 9. c4 f4 10. Qxe6+ Kd8 11. Qxg8 Nc6 12. Qd5+ Kc8 13. Qd4 Bb4+",
"1. b4 e5 2. c4 f5 3. d4 h5 4. g4 e4 5. d5 f4 6. c5 h4 7. b5 c6 8. Qd3 Qa5+",
"1. Nf3 d5 2. Ng5 c6 3. e3 d4 4. Bc4 d3 5. Nxf7 Bg4 6. Ne5 e6 7. f3 Bf5 8. f4 Be4 9. Nxd3 Bd5 10. f5 Be4 11. Qe2 Nf6 12. Bd5 Ng4 13. Ne5 Nxe5 14. f6 Qxf6 15. Qb5 Ng6 16. Rf1 Ne5 17. b4 b6 18. c4 Qh4+",
"1. a4 d5 2. b4 e5 3. a5 d4 4. b5 f6 5. Bb2 f5 6. Bxd4 e4 7. d3 f4 8. Qc1 g5 9. Ra2 Bb4+ 10. c3 Qd6 11. Ra1 Qc5 12. Ra2 Qxc3+ 13. Qd2 Qxd2+ 14. Nxd2 h6 15. Kd1 Rh7 16. Ke1 Rd7 17. Ra1 Rd5 18. Ra2 Rc5 19. Ra3 Rc3 20. Kd1 Rxa3 21. Ke1 Rc3 22. Kd1 Rc6 23. Nb1 Bc5 24. Ke1 Bb4+",
"1. Nc3 { A00 Van Geet Opening } Nc6 2. Nb5 Nd4 3. f3 Nxf3+ 4. Kf2 Nxh2 5. e4 Nf6 6. Ke1 Nhg4 7. Qe2 e5 8. Qd1 Nd5 9. Qe2 Nge3 10. Qd1 Nc4 11. Qe2 Qg5 12. Kf2 Qf5+ { Draw } 1/2-1/2",
"1. a4 { A00 Ware Opening } f5 2. d4 e5 3. d5 Bb4+ 4. Qd2 { Draw } 1/2-1/2"];

MATH = ["1. e4 d5 2. exd5",
"1. Nc3 d5 2. Nb5 e5 3. Nf3 h5 4. Ng5 f5 5. g3 f4 6. d3 Bf5 7. Bg2 Bxd3 8. Rf1 Bxc2 9. Bd2 Bh7 10. Bc1 c6 11. Rb1 Qa5+ 12. Qd2",
"1. e4 e5 2. Bc4 b6 3. Qh5 g5 4. Qxf7#",
"1. d4 b5 2. Qd3 g5 3. f3 g4 4. Bh6 Nf6 5. Bxf8 Kxf8 6. d5 d6 7. b3 a5 8. Qg6 Nc6 9. g3 gxf3 10. Bh3 fxe2 11. b4 Ne4 12. Nc3",
"1. c3 Nf6 2. Qa4 c6 3. f3 e6 4. Kf2 Ke7 5. Kg3 Kd6 6. Qa5 c5 7. Kh4 Kd5 8. Kg5 Ne4+ 9. Kh5 Qg5#",
"1. a3 e6 2. h3 Bxa3 3. e3 Bxb2 4. Ra5 f5 5. Bxb2 Qh4 6. g4 f4 7. g5 Nc6 8. Be2 Nb4 9. Bg4 Nd3+ 10. Kf1",
"1. d4 d5 2. e3 e6 3. Nc3 Nf6 4. g3 b6 5. Bg2 Bd7 6. Kd2 Ne4+ 7. Bxe4 dxe4 8. Nxe4 g5 9. Nf3 Bb5 10. Kc3 Qxd4+ 11. Kb3 Qc4#",
"1.Nf3 Nf6 2.c4 g6 3.Nc3 Bg7 4.d4 O-O 5.Bf4 d5 6.Qb3 dxc4 7.Qxc4 c6 8.e4 Nbd7 9.Rd1 Nb6 10.Qc5 Bg4 11.Bg5 Na4 12.Qa3 Nxc3 13.bxc3 Nxe4 14.Bxe7 Qb6 15.Bc4 Nxc3 16.Bc5 Rfe8+ 17.Kf1 Be6 18.Bxb6 Bxc4+ 19.Kg1 Ne2+ 20.Kf1 Nxd4+ 21.Kg1 Ne2+ 22.Kf1 Nc3+ 23.Kg1 axb6 24.Qb4 Ra4 25.Qxb6 Nxd1 26.h3 Rxa2 27.Kh2 Nxf2 28.Re1 Rxe1 29.Qd8+ Bf8 30.Nxe1 Bd5 31.Nf3 Ne4 32.Qb8 b5 33.h4 h5 34.Ne5 Kg7 35.Kg1 Bc5+ 36.Kf1 Ng3+ 37.Ke1 Bb4+ 38.Kd1 Bb3+ 39.Kc1 Ne2+ 40.Kb1 Nc3+ 41.Kc1 0-1", //bobby fischer's game of the century (without last move (checkmate)) so it's not a checkmate
"1. c3 e6 2. Qa4 Qh4 3. g3 Qxg3 4. Qa5 Bb4 5. d3 Bxc3+ 6. Kd1 Qxf2 7. Qc5 e5 8. Qd5 Qe1+ 9. Kc2 a6 10. Bg5 a5 11. Qc5 Nh6 12. Qe7#",
"1. d3 g6 2. Bg5 e6 3. e3 Bb4+ 4. Qd2 Bc5 5. Bf6 Kf8 6. d4 e5 7. Ke2 e4"
]

PGNstring = PGNs.join(";");

var boardToBinary = function(string){
	subString = "";
	finalFinalString = "";
	for (i = 0; i < string.length; i++){
		if (('A' <= string[i] && string[i] <= 'Z') || ('a' <= string[i] && string[i] <= 'z')){
			subString += string[i];
		}
	}
	//console.log(subString)
	for (i = 0, j = subString.length - 1; i < subString.length || j >= 0; i++, j--){
		if (subString[i] != subString[i].toLowerCase() || subString[j] != subString[j].toUpperCase()){
			finalString =  subString.slice(i, j + 1);
			break;
		}
	}
	//console.log(finalString)

	for (i = 0; i < finalString.length; i++){
		if (finalString[i] >= 'a' && finalString[i] <= 'z'){
			finalFinalString += '0';
		}
		else if (finalString[i] >= 'A' && finalString[i] <= 'Z'){
			finalFinalString += '1';
		}

	}
	return finalFinalString;
}

FENToTokenPart = function(FEN){
	//console.log("asdf");
	board_ = FEN.split(" ")[0];
	turn = FEN.split(" ")[1];
	castles = FEN.split(" ")[2];
	_____passant____ = FEN.split(" ")[3];
	halfMoveCounter = FEN.split(" ")[4];
	moveCount = FEN.split(" ")[5];
	checks = FEN.split(" ")[6];
	castled = FEN.split(" ")[7];
	a = boardToBinary(board_);
	//var a = '01001011';
	if(a == ''){
		number = 0;
	} else {
		number = parseInt(a, 2);//%numOfTokens;
	}
	//console.log(checks);
	if(checks.indexOf('q') > -1){
		//BLACK CHECK
		return {type:"identifier", value: number}
		//return a IDENTIFIER subtoken (value = 1 ascii character)
	} else if(checks.indexOf('Q') > -1){
		//WHITE CHECK
		return {type:"string", value:number}
		//return a STRING LITERAL subtoken (value = 1 ascii character)
	} else if(checks.indexOf('K') > -1 || checks.indexOf('k') > -1){
		//CHECKMATE or DRAW
		return {type:"checkmate", value:number}
		//return CHECKMATE token
	} else {
		return {type:"reserved", value:number}
	}
}

toASCII = function(number){
	//console.log(number+2);
	//console.log(String.fromCharCode(number));
	//console.log("hi");
	return String.fromCharCode(number);
}

tokenizer = function(FENs){
	tokens = []
	inNumber = false;
	inString = false;
	inIdentifier = false;
	token = '';
	for(z = 0; z < FENs.length; z++){
		subtoken = FENToTokenPart(FENs[z]);
		//console.log(subtoken.type);
		//PUSH TOKENS AND DO STUFF IF WE'RE DONE WITH READING IN THAT MULTI-BOARD TOKENS
		if(subtoken.type == "checkmate"){
			inNumber = !inNumber;
			tokens.push(token);
			token = '';
			continue;
		}
		if(inIdentifier && subtoken.type != "identifier"){
			inIdentifier = false;
			tokens.push(token);
			token = '';
		}
		if(inString && subtoken.type != "string"){
			inString = false;
			token+= '"';
			tokens.push(token);
			token = '';
		}
		//do stuff with the new thing!
		if(inNumber == true){
			token += (subtoken.value%10).toString();
			continue;
		}
		if(subtoken.type == "identifier"){
				token+=toASCII(subtoken.value);
			inIdentifier = true;
		}
		if(subtoken.type == "string"){
			if(!inString){
				token = '"';
			}
			token += toASCII(subtoken.value);
			inString = true;
		}
		if(subtoken.type == "reserved"){
			//console.log(tokens);
			//console.log(subtoken.value);
			//console.log(builtins[subtoken.value]);
			tokens.push(builtins[subtoken.value%builtins.length]);
		}
	}
	//CASTLING FOR DECIMAL POINT
	//console.log(tokens);
	return tokens;
}

compiler = function(tokens){
	return tokens.join(" ");
}

runJS = function(js){
	return eval(js);
}
//PGN2FEN(PGNs)
runJS(compiler(tokenizer(PGNs.map(PGN2FEN))));