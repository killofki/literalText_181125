console .log( 이보게젊은이 `

**** ${ 

( 이보게, 그것이, 무엇인지, 네, 사전, 이거, 무슨, 그거 ) => ` 
“${ 이보게 }, ${ 그것이 } 이 ${ 무엇인지 } ${ 무엇인지 }?” 
“${ 네 }?” 
“${ 그것이 }${ 무엇인지 }.” 
${ 이보게 }, ${ 사전 }. 
“그러니까... ${ 이거 }을 ${ 네 }?” 
“${ 무슨 }. ${ 그거 }은 ${ 무슨 }..” 
` 

}

*이보게* ${ 있는대로만 `${ [ '이보게 ' ] }젊은이` } 
*그것이* ${ 있는대로만 `${ [ '요즘 ' ] }유행하는 셈틀 선물거래 응용프로그램` } 
*무엇인지* ${ 있는대로만 `${ [ '무엇인지', '알려줄 수 있겠나', '말일세' ] }` } 
*네* ${ 있는대로만 `${ [ '네', '말씀하시는거죠' ] }` } 
*사전* ${ '사전을 뒤진다' } 
*이거* ${ 'desktop version futures trading application' } 
*무슨* ${ 있는대로만 `${ [ '무슨 말을 하는겐가', '모르겠네만' ] }` } 
*그거* ${ '꼬부랑말' } 

	` ); 

function 이보게젊은이( 널널한공간, 받아적어, ... 거시기 ) { return 받아적어( ... 거시기 ); } 
function 있는대로만( { raw }, ... ar ) { let printIndex = -1; return { toString : q => 
	String .raw( { raw }, ( 
		  printIndex += 1
		, ar .map( a => a[ printIndex ] || '' ) 
		) ) 
	}; } 
function 글자로뽑기( t ) { 
	let raw = [], ar = []; 
	t .replace( /([^[]*)(\[([^\]]*?)\])?/g, ( all, rawv, arv, arvv ) => ( 
		  raw .push( rawv ) 
		, ar .push( arv && arvv ) 
		) ); 
	raw .length -= 1; // erase finish match 
	raw .raw = raw; 
	ar .length = raw .length - 1; // final match, finish match 
	return 있는대로만( raw, ... ar ); 
	} 

// idea from https://twitter.com/Ranol__/status/1065972494060871680 