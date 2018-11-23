console .log( 이보게젊은이 `${ 

({ 이보게, 그것이, 무엇인지, 네, 사전, 이거, 무슨, 그거 }) => ` 
“${ 이보게 }, ${ 그것이 }이 ${ 무엇인지 } ${ 무엇인지 }?” 
“${ 네 }?” 
“${ 그것이 }${ 무엇인지 }.” 
${ 이보게 }, ${ 사전 }. 
“그러니까... ${ 이거 }을 ${ 네 }?” 
“${ 무슨 }. ${ 그거 }은 ${ 무슨 }..” 
` }

이보게 { [이보게 ]젊은이 } 
그것이 { [요즘 ]유행하는 셈틀 선물거래 응용프로그램 } 
무엇인지 { [무엇인지,알려줄 수 있겠나,말일세] } 
네 { [네,말씀하시는거죠] } 
사전 { 사전을 뒤진다 } 
이거 { desktop version futures trading application } 
무슨 { [무슨 말을 하는겐가,모르겠네만] } 
그거 { 꼬부랑말 } 

	` ); 
// idea from https://twitter.com/Ranol__/status/1065972494060871680 

function 이보게젊은이( 널널한공간, 받아적어, ... 거시기 ) { 
	return 받아적어( Object .assign( ... 널널한공간 .map( t => 범위로뽑기( t ) ) ), ... 거시기 ); 
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
function 범위로뽑기( t ) { 
	let [ raw, ... ar ] = ttoraw( t 
		, /\s*([^{]*?)\s*(\{\s*([^}]*?)\s*\})/g 
		, ( raw, ar ) => ( all, rawv, arv, arvv ) => ( 
			  raw .push( rawv ) 
			, ar .push( arv && arvv ) 
			) 
		); 
	return ar .length ? Object .assign( ... ar .map( ( t, p ) => 
			({ [ raw[ p ] ] : 글자로뽑기( t ) }) ) 
			) 
		: {}; 
	} 
