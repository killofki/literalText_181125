"use module"
// idea from https://twitter.com/Ranol__/status/1065972494060871680 
// viral with https://twitter.com/killofki/status/1066035649134845952 

// var { 이보게젊은이, 대충, 대략 } = require( './heyguy.jsm' );
var { 이보게젊은이, 대충, 대략 } = heyguyBase(); 

console .log( 이보게젊은이 ` 

시작 ${ 대충 ` 
{ 갑자기 } { 이케아 } { 감자 } { 갑자기 } 
{ 킹 } { 이케아 } { 킹 } { 킹 } { 이케아 } 
{ 킹 } { 이케아 } { 감자 } { 킹 } 
{ 감자 }와 { 맛 } { 소스 } 
{ 잼 }과 { 뭐지 } { 맛 } { 맛 } { 액체 } { 액체 } { 소스 } 
{ 그거 } { 이상해 } 
{ 뭐지 } { 잼 }과 { 맛 } { 맛 } { 액체 } { 액체 } { 소스 } 
{ 그거 } { 이상해 } { 더 } 
{ 뭐지 } { 액체 } { 잼 } { 액체 }와 { 맛 } { 맛 } { 소스 } 
{ 이상해 } 
` } 

갑자기 { [갑자기,먹고싶음] } 
감자 { [미트볼에 끼워파는 감자으깬거,메시드 포테이토,부드러운 감자] } 

이케아 { [이케아,이케아다,이케아도 있어요,이케아] } 
킹 { [집가면,무조곤이다,멋진 내 고향,마자요,킹갓존엄임] } 

소스 { 소스 } 

맛 ${ o => o .맛아 && `${ o .맛아 }` || ( o .맛아 = 대략 `[{ 맛아아 }]` ) } 
맛아아 { 맛있는,엄청 } 

액체 ${ o => o .액체아 && `${ o .액체아 }` || ( o .액체아 = 대략 `[{ 액체아아 }]` ) } 
액체아아 { 하얀,액체 } 

뭐지 { 무엇인지 모르겠는 } 

잼 { 딸기잼 } 

그거 { [그렇게 말하면,여전히] } 
이상해 { [이상하잖어요,이상해요,이상한 걸 고치려다 의미가 달라졌는데요] } 
더 { 좀 더 바꿔보세요 } 

	` ); 
// idea from https://twitter.com/Ranol__/status/1065972494060871680 
// viral with https://twitter.com/killofki/status/1066035649134845952 

// liquid potato from https://twitter.com/chalk_alt/status/1075804409177636865 
// liquid potato until https://twitter.com/chalk_alt/status/1075806950984536064 


var module = module || {}; 
Object .assign( module .exports = module .exports || {}, heyguyBase() ); 

function heyguyBase() { 
///// 
	initConst(); 
	return { 이보게젊은이, 대략, 대충, heyguyBase }; 

// functions.. 
var 받아왔어요; 
var 대충call, 글자call, 범위call; 
function 이보게젊은이( 널널한공간, 받아적어, ... 거시기 ) { // get first argument by template literal 
	let 남은값 = []; 
	널널한공간 .reduce( ( o, t ) => pipeo( o, o => 범위로뽑기( t, 남은값 ) ) 
		, 받아왔어요 = 받아왔어요 || {} ); 
	let [ 시작값 ] = 남은값; 
	시작값 && pipeo( 받아왔어요, o => ({ [ 시작값 ] : 받아적어 }) ); // remain original function 
	거시기 .reduce( ( o, v, i ) => pipeo( o, o => ({ [ 남은값[ i + 1 ] ] : ForV( v ) }) ) // extract one time 
		, 받아왔어요 ); 
	return `${ ForV( 시작값 ? 받아왔어요[ 시작값 ] : 받아적어, ... 거시기 ) }`; 
	} 
function 대략( ... ar ) { return { toString }; function toString() { // lazy loader with fix value .. 
	return pipeo( this, o => 글자로뽑기( 대충( ... ar ) ) ) .toString(); 
	} } 
function 대충( raw, ... ar ) { return { toString }; function toString() { // lazy loader with fix value .. 
	var rawa = [], ara = []; 
	raw .forEach( ( v, p ) => { 
		let 
			  [ ra, ... aa ] = ttoraw( v, ... 대충call ) 
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
	pipeo( rawa, o => ({ raw : o }) ); 
	
	return assigner( 
		  pipeo( this, o => ({ sourceFrom : [ rawa, ara ] }) ) 
		, ( t, p, v ) => ({ [ p ] : q => v }) 
		) .toString = String .raw( rawa, ... ara ); 
	} } 
function 글자로뽑기( t ) { return 있는대로만( ... ttoraw( t, ... 글자call ) ); } 
function 범위로뽑기( t, 남은값 ) { 
	let [ raw, ... ar ] = ttoraw( t, ... 범위call ); 
	남은값 .push( raw[ ar .length ] ); 
	return ar .length ? Object .assign( ... ar .map( ( t, p ) => 
			({ [ raw[ p ] ] : 글자로뽑기( t ) }) ) 
			) 
		: {}; 
	} 
function 있는대로만( { raw }, ... ar ) { let printIndex = -1; return { 
	  toString : q => 
		String .raw( { raw }, ( 
			  printIndex += 1 
			, ar .map( a => a && a[ printIndex ] || '' ) 
			) ) 
	, sourceFrom : [ raw, ar ] 
	}; } 
function initConst() { 
	( { rawCatcher, 대충call, 글자call, 범위call } = '' .match( /()/ ) .hasOwnProperty( 'groups' ) ? ({ // reg groups test 
		  rawCatcher : rawCatcherU 
		, 대충call : [ 
			  /(?<꾸밈>[\s\S]*?)(?<치환곽>\{\s*(?<치환자>[\s\S]+?)\s*\}|$)/g 
			, ( raw, ar ) => ( { 꾸밈, 치환곽, 치환자 }, po, all ) => ( 
				  raw .push( 꾸밈 ) 
				, ar .push( 치환곽 ? 받아왔어요 && 받아왔어요[ 치환자 ] || `{${ 치환자 }}` : '' ) 
				) 
			] 
		, 글자call : [ 
			  /(?<꾸밈>[^[]*)(?<돌돌이곽>\[(?<돌돌이>[^\]]*?)\])?/g 
			, ( raw, ar ) => ( { 꾸밈, 돌돌이곽, 돌돌이 }, po, all ) => ( 
				  raw .push( 꾸밈 ) 
				, ar .push( 돌돌이곽 && 돌돌이 .split( ',' ) ) 
				) 
			] 
		, 범위call : [ 
			  /\s*(?<제목>[^{]*?)\s*(?<내용칸>\{\s*(?<내용>[^}]*?)\s*\}|$)/g 
			, ( raw, ar ) => ( { 제목, 내용칸, 내용 }, po, all ) => ( 
				  raw .push( 제목 ) 
				, ar .push( 내용칸 && 내용 ) 
				) 
			] 
		}) 
	: ({ 
		  rawCatcher 
		, 대충call : [ 
			  /([\s\S]*?)(\{\s*([\s\S]+?)\s*\}|$)/g 
			, ( raw, ar ) => ( all, rawv, arv, arvv ) => ( 
				  raw .push( rawv ) 
				, ar .push( arv ? 받아왔어요 && 받아왔어요[ arvv ] || `{${ arvv }}` : '' ) 
				) 
			] 
		, 글자call : [ 
			  /([^[]*)(\[([^\]]*?)\])?/g 
			, ( raw, ar ) => ( all, rawv, arv, arvv ) => ( 
				  raw .push( rawv ) 
				, ar .push( arv && arvv .split( ',' ) ) 
				) 
			] 
		, 범위call : [ 
			  /\s*([^{]*?)\s*(\{\s*([^}]*?)\s*\}|$)/g 
			, ( raw, ar ) => ( all, rawv, arv, arvv ) => ( 
				  raw .push( rawv ) 
				, ar .push( arv && arvv ) 
				) 
			] 
		}) 
		); 
	} 
function rawCatcher( t, regv, regF ) { 
	let raw = [], ar = []; 
	`${ t }` .replace( regv, regF( raw, ar ) ); 
	return [ raw, ar ]; 
	} 
function rawCatcherU( t, regv, regF ) { // when able .match( RegExp ) .groups 
	let raw = [], ar = []; 
	`${ t }` .replace( regv, ( all, ... rar ) => pipe( 
		  [ rar .pop(), rar .pop() ] 
		, ([ groups, po ]) => regF( raw, ar )( groups, po, all ) 
		) ); 
	return [ raw, ar ]; 
	}
function ttoraw( t, regv, regF ) { 
	let [ raw, ar ] = rawCatcher( t, regv, regF ); 
	let rpop, apop; 
	while ( [ rpop = raw .pop(), apop = ar .pop() ] .every( v => ! v ) && raw .length ) 
		; 
	  apop ? ( raw .push( rpop, '' ), ar .push ( apop ) ) 
	: rpop && ( raw .push( rpop ), ar .push ( apop ) ) 
		; 
	pipeo( raw, o => ({ raw }) ); 
	raw .length ? ( ar .length = raw .length - 1 ) : raw .push( '' ); 
	return [ raw, ... ar ]; 
	} 
function ForV( o, ... ar ) { 
	return o instanceof Function ? { 
		  toString : q => `${ o( 받아왔어요, ... ar ) }` 
		, sourceFrom : [ o, ar ] 
		} : o; 
	} 
function pipe( ... ar ) { return ar .reduce( ( o, F ) => F( o ) ); } 
function pipeo( ... ar ) { return ar .reduce( ( o, F ) => Object .assign( o, F( o ) ) ); } 
function assigner( o, ... ar ) { 
	var 
		  defaultF = ( t, p, v ) => ({ [ p ] : v }) 
		, redefines = ( doo, dar ) => ( [ o, ar ] = [ doo, dar .length ? dar : [ defaultF ] ] ) 
		; 
	
	assigner = new Proxy( ( ao, ... aar ) => ( redefines( ao, aar ), assigner ), { // lazy with proxy 
		set : ( t, p, v ) => ar .forEach( F => pipeo( t, t => F( t, p, v ) ) ) 
		} ); 
	return assigner( o, ... ar ); 
	} 

///// 
} // -- initConst() 
