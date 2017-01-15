FENs = ["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1 - 1", 
"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1 - 1"
];
builtins = ["console.log", "alert", "break", "do", "in", "typeof", "case", "else", "instanceof", "var",
"catch", "export", "new", "void", "class", "extends", "return", "while",
"const", "finally", "super", "with", "continue", "for", "switch", "yield",
"debugger", "function", "this", "default", "if", "throw", "delete", "import", "try",
"{", "(", ")", "[", "]", ".", "...", ";", ",", "<", ">", "<=", ">=", "==", "!=", "===",
"!==", "+", "‐", "*", "%", "++", "‐‐", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&",
"||", "?", ":", "=", "+=", "‐=", "*=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", "=>", "**", "**=",
"/", "/=",
"}"];

//checkmate: 1. e4 e5 2. Bc4 c6 3. Qf3 a5 4. Qxf7#

//alert: 1. e4 d5 2. exd5
PGNs = ["", "1.d4 e6 2.a4 Qg5 3.a5 Qxc1 4.Ra2 c5 5.h3 Qxc2 6.Qc1 Qf5 7.d5 b5 8.Nf3 e5",
"1. e4 e5 2. d4 d5 { C21 King's Pawn Game: Beyer Gambit } 3. exd5 exd4 4. Nd2 g5 5. Ne4 f5 6. Nc3 h5 7. Na4 b5 8. Rb1 Qe7+ 9. Qe2 Qxe2+ 10. Bxe2 d3 11. Kd2 dxe2 12. Kd3 e1=Q 13. Kd4 Qxg1 14. Kc3 Qxc1 15. Kd3 Qxb1 16. Rxb1 b4 17. Rg1 b3 18. Kd2 Bb4+ 19. Kd1 Ba6 20. Kc1 f4 21. Kd1 Bc5 22. Ke1 Bb4+ { White resigns } 0-1",
"1. a4 { A00 Ware Opening } b5 2. a5 c5 3. e4 b4 4. Bb5 g5 5. Qh5 g4 6. Qxh7 f6 7. Qh3 Kf7 8. d3 Ke8 9. Kd2 Bh6+ { Draw } 1/2-1/2",
"1. a4 { A00 Ware Opening } d5 2. b4 c5 3. e4 Bd7 4. bxc5 f6 5. a5 g5 6. e5 h5 7. Bd3 Bg7 8. Bf5 Qb6 9. Kf1 Qa6+ { Draw } 1/2-1/2",
"1. a4 { A00 Ware Opening } d5 2. d4 Kd7 3. b4 Kc6 4. a5 Kb5 5. c3 Kc4 6. b5 e5 7. dxe5 Qh4 8. Bg5 Qg4 9. f3 Qh4+ { Draw } 1/2-1/2",
"1. a4 { A00 Ware Opening } b5 2. a5 b4 3. Ra4 h6 4. f4 e6 5. e4 c6 6. Bc4 f6 7. d4 Qe7 8. Qd2 Qf7 9. Qd1 Qh5 10. Qd2 Qh4+ 11. Qf2 Qg5 12. Bxe6 Kd8 13. Kd1 Ke8 14. Bxd7+ Kd8 15. Bxc6 Nxc6 16. Ke2 Qxa5 17. f5 Ke8 18. Bxh6 Kd8 19. Bxg7 Nh6 20. Bxh6 Ke8 21. Bd2 Qb5+ 22. Ke1 Rh3 23. gxh3 Qb6 24. Qf1 Qb5 25. Qf2 Qb6 26. Ke2 Qb5+ { Draw } 1/2-1/2",
"1. a4 { A00 Ware Opening } f5 2. d4 e5 3. d5 Bb4+ 4. Qd2 { Draw } 1/2-1/2"];

PGNstring = PGNs.join(";");

boardToBinary = function(string){
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