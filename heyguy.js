console .log( 이보게젊은이 `${ 

( { 이보게, 무엇인지, 네, 사전, 이거, 무슨, 그거 }, 그것이 ) => ` 
“${ 이보게 }, ${ 그것이 }이 ${ 무엇인지 } ${ 무엇인지 }?” 
“${ 네 }?” 
“${ 그것이 }${ 무엇인지 }.” 
${ 이보게 }, ${ 사전 }. 
“그러니까... ${ 이거 }을 ${ 네 }?” 
“${ 무슨 }. ${ 그거 }은 ${ 무슨 }..” 
` }

이보게 { [이보게 ]젊은이 } 
무엇인지 { [무엇인지,알려줄 수 있겠나,말일세] } 
네 { [네,말씀하시는거죠] } 
사전 { 사전을 뒤진다 } 
이거 { desktop version futures trading application } 
무슨 { [무슨 말을 하는겐가,모르겠네만] } 
그거 { 꼬부랑말 } 

그것이 ${ ({ 음, 그것 }) => 대략 `[${ 음 }]${ 그것 } ${ 그것 } ${ 그것 } ${ 그것 }` 
// 음 : 띄어쓰기 포함 
} 

음 { [요즘 ] } 
그것 { [유행하는,셈틀,선물거래,응용프로그램] } 

	` ); 
// idea from https://twitter.com/Ranol__/status/1065972494060871680 

var 받아왔어요; 
function 이보게젊은이( 널널한공간, 받아적어, ... 거시기 ) { 
	let 남은값 = []; 
	Object .assign( 받아왔어요 = 받아왔어요 || {}, ... 널널한공간 .map( t => 범위로뽑기( t, 남은값 ) ) ); 
	console .log( 남은값 ); 
	거시기 = 거시기 .map( v => v instanceof Function ? v( 받아왔어요 ) : v ); 
	return 받아적어( 받아왔어요, ... 거시기 ); 
	} 
function 대략( ... ar ) { 
	return 글자로뽑기( String .raw( ... ar ) ) 
	} 
function 있는대로만( { raw }, ... ar ) { 
	let printIndex = -1; return { toString : q => 
	String .raw( { raw }, ( 
		  printIndex += 1 
		, ar .map( a => a && a[ printIndex ] || '' ) 
		) ) 
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
		, /([^[]*)(\[([^\]]*?)\])?/g 
		, ( raw, ar ) => ( all, rawv, arv, arvv ) => ( 
			  raw .push( rawv ) 
			, ar .push( arv && arvv .split( ',' ) ) 
			) 
		) ); 
	} 
function 범위로뽑기( t, 남은값 ) { 
	let remainv; 
	let [ raw, ... ar ] = ttoraw( t 
		, /\s*([^{]*?)\s*(\{\s*([^}]*?)\s*\}|$)/g 
		, ( raw, ar ) => ( all, rawv, arv, arvv ) => ( 
			  raw .push( rawv ) 
			, ar .push( arv && arvv ) 
			) 
		); 
	남은값 .push( raw[ ar .length ] ); 
	return ar .length ? Object .assign( ... ar .map( ( t, p ) => 
			({ [ raw[ p ] ] : 글자로뽑기( t ) }) ) 
			) 
		: {}; 
	} 
