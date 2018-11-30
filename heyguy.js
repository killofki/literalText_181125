var { 이보게젊은이, 대략, 대충 } = initConst(); 

console .log( 이보게젊은이 ` 

시작 ${ 대충 ` 
“{ 이보게 }, { 그것이 }이 { 무엇인지 } { 무엇인지 }?” 
“{ 네 }?” 
“{ 그것이 }{ 무엇인지 }.” 
{ 이보게 }, { 사전 }. 
“그러니까... { 이것을 } { 네 }?” 
“{ 무슨 }. { 그거 }은 { 무슨 }..” 
` } 

이보게 { [이보게 ]젊은이 } 
그것이 ${ 대략 `[{ 음 }]{ 그것 } { 그것 } { 그것 } { 그것 }` } 
음 { [요즘 ] } 
그것 { [유행하는,셈틀,선물거래,응용프로그램] } 
무엇인지 { [무엇인지,알려줄 수 있겠나,말일세] } 

네 { [네,말씀하시는거죠] } 
사전 { 사전을 뒤진다 } 
이것을 ${ 대충 `{ 이거 } { 이거 } { 이거 }을` } 
이거 ${ q => 대충 `{ this }` } 
this { [desktop version,futures trading,application] } 

무슨 { [무슨 말을 하는겐가,모르겠네만] } 
그거 { 꼬부랑말 } 

	` ); 
// idea from https://twitter.com/Ranol__/status/1065972494060871680 
// viral with https://twitter.com/killofki/status/1066035649134845952 

function initConst() { 
///// 
	return { 이보게젊은이, 대략, 대충 }; 

// functions.. 
var 받아왔어요; 
function 이보게젊은이( 널널한공간, 받아적어, ... 거시기 ) { 
	let 남은값 = []; 
	Object .assign( 받아왔어요 = 받아왔어요 || {}, ... 널널한공간 .map( t => 범위로뽑기( t, 남은값 ) ) ); 
	let [ 시작값 ] = 남은값; 
	시작값 && Object .assign( 받아왔어요, { [ 시작값 ] : 받아적어 } ); // remain original function 
	Object .assign( 받아왔어요, ... 거시기 .map( ( v, i ) => 
		({ [ 남은값[ i + 1 ] ] : ForV( v ) }) // extract one time 
		) ); 
	return `${ ForV( 시작값 ? 받아왔어요[ 시작값 ] : 받아적어, ... 거시기 ) }`; 
	} 
function 대략( ... ar ) { return { toString }; function toString() { // lazy loader with fix value .. 
	return `${ Object .assign( this, 글자로뽑기( `${ 대충( ... ar ) }` ) ) }`; 
	} } 
function 대충( raw, ... ar ) { return { toString }; function toString() { // lazy loader with fix value .. 
	var rawa = [], ara = []; 
	raw .forEach( ( v, p ) => { 
		let 
			  [ ra, ... aa ] = ttoraw( v 
				, /([\s\S]*?)(\{\s*([\s\S]+?)\s*\}|$)/g 
				, ( traw, tar ) => ( all, rawv, arv, arvv ) => ( 
					  traw .push( rawv ) 
					, tar .push( arv ? 받아왔어요 && 받아왔어요[ arvv ] || `{${ arvv }}` : '' ) 
					) 
				) 
			, arp = ar[ p ] 
			; 
		rawa .push( ... ra ); 
		ara .push( ... aa, '' ); // continue with next 
		arp && ( 
			  rawa .push( '' ) 
			, ara .push( arp ) 
			); 
		} ) 
		; 
	ara .pop(); // cut about pack 
	rawa .raw = rawa; 
	
	return ( t => this .toString = q => t )( String .raw( rawa, ... ara ) )(); 
	} } 
function 있는대로만( { raw }, ... ar ) { let printIndex = -1; return { 
	  toString : q => 
		String .raw( { raw }, ( 
			  printIndex += 1 
			, ar .map( a => a && a[ printIndex ] || '' ) 
			) ) 
	, sourceFrom : [ raw, ... ar ] 
	}; } 
function ttoraw( t, regv, regF ) { 
	let raw = [], ar = []; 
	t .replace( regv, regF( raw, ar ) ); 
	let rpop, apop; 
	while ( [ rpop = raw .pop(), apop = ar .pop() ] .every( v => ! v ) && raw .length ) { 
		} 
	  apop ? ( raw .push( rpop, '' ), ar .push ( apop ) ) 
	: rpop && ( raw .push( rpop ), ar .push ( apop ) ) 
		; 
	raw .raw = raw; 
	raw .length ? ( ar .length = raw .length - 1 ) : raw .push( '' ); 
	return [ raw, ... ar ]; 
	} 
function 글자로뽑기( t ) { 
	return 있는대로만( ... ttoraw( t 
		, /(?<꾸밈>[^[]*)(?<돌돌이곽>\[(?<돌돌이>[^\]]*?)\])?/g 
		, ( raw, ar ) => ( all, rawv, arv, arvv, origin, position, { 꾸밈, 돌돌이곽, 돌돌이 } ) => ( 
			  raw .push( 꾸밈 ) 
			, ar .push( 돌돌이곽 && 돌돌이 .split( ',' ) ) 
			) 
		) ); 
	} 
function 범위로뽑기( t, 남은값 ) { 
	let [ raw, ... ar ] = ttoraw( t 
		, /\s*(?<제목>[^{]*?)\s*(?<내용칸>\{\s*(?<내용>[^}]*?)\s*\}|$)/g 
		, ( raw, ar ) => ( all, rawv, arv, arvv, origin, position, { 제목, 내용칸, 내용 } ) => ( 
			  raw .push( 제목 ) 
			, ar .push( 내용칸 && 내용 ) 
			) 
		); 
	남은값 .push( raw[ ar .length ] ); 
	return ar .length ? Object .assign( ... ar .map( ( t, p ) => 
			({ [ raw[ p ] ] : 글자로뽑기( t ) }) ) 
			) 
		: {}; 
	} 
function ForV( o, ... ar ) { 
	return o instanceof Function ? { toString : q => `${ o( 받아왔어요, ... ar ) }` } : o; 
	} 

///// 
} // -- initConst() 
