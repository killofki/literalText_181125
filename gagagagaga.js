var { 이보게젊은이, 대략, 대충 } = initConst() 

console .log( 이보게젊은이 ` 
	
	시작 ${ 대충 `{ 가 }{ 가 }{ 가 }{ 가 }{ 가 }?` } 
	
	가 ${ 대략 `[{ 그 아이 가 },{ 은는이 가 },{ 가씨네 가 },{ 성씨 가 },{ 인가요 가 }]` } 
	그 아이 가 { [가〯 ] } 
	은는이 가 { 가 } 
	가씨네 가 { 가 } 
	성씨 가 { 가〮 } 
	인가요 가 { 가 } 
	
	` ) 
// idea from https://twitter.com/Ranol__/status/1065972494060871680 
// viral with https://twitter.com/killofki/status/1066035649134845952 

function initConst() { 
///// 
	let { assign, create } = Object 
	
	return { 이보게젊은이, 대략, 대충 } 

// .. functions .. 
var 받아왔어요 
function 이보게젊은이( 널널한공간, 받아적어, ... 거시기 ) { 
	let 남은값 = [] 
	assign( 
		  받아왔어요 = 받아왔어요 || {} 
		, ... 널널한공간 .map( t => 범위로뽑기( t, 남은값 ) ) 
		) 
	let [ 시작값 ] = 남은값 
	시작값 && assign( 
		  받아왔어요 
		, { [ 시작값 ] : 받아적어 } 
		) // remain original function 
	assign( 
		  받아왔어요 
		, ... 거시기 .map( ( v, i ) => new class { 
			[ 남은값[ i + 1 ] ] = ForV( v ) // extract one time 
			} ) 
		) 
	return `${ ForV( 
		  시작값 ? 받아왔어요[ 시작값 ] : 받아적어 
		, ... 거시기 
		) }` 
	} // -- 이보게젊은이() 

function 대략( ... ar ) { 
	return { toString } 
	
	function toString() { // lazy loader with fix value .. 
		return `${ assign( this, 글자로뽑기( `${ 대충( ... ar ) }` ) ) }` 
		} // -- toString() < 대략() 
	} // -- 대략() 

function 대충( raw, ... ar ) { 
	return { toString } 
	
	function toString() { // lazy loader with fix value .. 
		var rawa = [], ara = [] 
		for ( let [ p, v ] of raw .entries() ) { 
			let [ ra, ... aa ] = ttoraw( 
				  v 
				, /(?<꾸밈>[\s\S]*?)(?<치환곽>\{\s*(?<치환자>[\s\S]+?)\s*\}|$)/g 
				, ( traw, tar ) => 
					( all, rawv, arv, arvv, origin, position, { 꾸밈, 치환곽, 치환자 } ) => ( 
						  traw .push( 꾸밈 ) 
						, tar .push( 
							  치환곽 ? 받아왔어요 ?.[ 치환자 ] || `{${ 치환자 }}` 
							: '' 
							) 
						) 
				) 
			let arp = ar[ p ] 
			
			rawa .push( ... ra ) 
			ara .push( ... aa, '' ) // continue with next 
			arp && ( 
				  rawa .push( '' ) 
				, ara .push( arp ) 
				) 
			} 
		ara .pop() // cut about pack 
		rawa = assign( create( rawa ), new class { 
			raw = rawa 
			} ) 
		
		return getsetToString( this, String .raw( rawa, ... ara ) ) 
		} // -- toString() < 대충() 
	} // -- 대충() 

function getsetToString( o, t ) { 
	let F = o .toString = q => t 
	return F( t ) 
	} // -- getsetToString() 

function 있는대로만( { raw }, ... ar ) { 
	let printIndex = -1 
	return new class { 
		toString = q => String .raw( { raw }, ( 
			  printIndex += 1 
			, ar .map( a => a ?.[ printIndex ] || '' ) 
			) ) 
		sourceFrom = [ raw, ... ar ] 
		} 
	} // -- 있는대로만() 

function ttoraw( t, regv, regF ) { 
	let raw = [] 
	let ar = [] 
	let rpop, apop 
	
	t .replace( regv, regF( raw, ar ) ) 
	while ( 
			[ rpop = raw .pop(), apop = ar .pop() ] 
				.every( v => ! v ) 
			&& raw .length 
			) { 
		} 
	
	  apop ? ( raw .push( rpop, '' ), ar .push ( apop ) ) 
	: rpop && ( raw .push( rpop ), ar .push ( apop ) ) 
	
	raw .raw = raw 
	  raw .length ? ( ar .length = raw .length - 1 ) 
	: raw .push( '' ) 
	
	return [ raw, ... ar ] 
	} // -- ttoraw() 

function 글자로뽑기( t ) { 
	return 있는대로만( ... ttoraw( t 
		, /(?<꾸밈>[^[]*)(?<돌돌이곽>\[(?<돌돌이>[^\]]*?)\])?/g 
		, ( raw, ar ) => ( 
				  all, rawv, arv, arvv, origin, position 
				, { 꾸밈, 돌돌이곽, 돌돌이 } 
				) => { 
			raw .push( 꾸밈 ) 
			ar .push( 돌돌이곽 && 돌돌이 .split( ',' ) ) 
			} 
		) ) 
	} // -- 글자로뽑기() 

function 범위로뽑기( t, 남은값 ) { 
	let [ raw, ... ar ] = ttoraw( t 
		, /\s*(?<제목>[^{]*?)\s*(?<내용칸>\{\s*(?<내용>[^}]*?)\s*\}|$)/g 
		, ( raw, ar ) => ( 
				  all, rawv, arv, arvv, origin, position 
				, { 제목, 내용칸, 내용 } 
				) => { 
			raw .push( 제목 ) 
			ar .push( 내용칸 && 내용 ) 
			} 
		) 
	남은값 .push( raw[ ar .length ] ) 
	return ar .length ? assign( ... ar .map( ( t, p ) => new class { 
			[ raw[ p ] ] = 글자로뽑기( t ) 
			} ) ) 
		: {} 
	} // -- 범위로뽑기() 

function ForV( o, ... ar ) { return o instanceof Function ? new class { 
	toString = q => `${ o( 받아왔어요, ... ar ) }` 
	} : o } // -- ForV() 

///// 
} // -- initConst() 
