"use module"
// idea from https://twitter.com/Ranol__/status/1065972494060871680 
// viral with https://twitter.com/killofki/status/1066035649134845952 

var { 이보게젊은이, 대충, 대략 } = require( './heyguy.jsm' );

console .log( 이보게젊은이 ` 

시작 ${ 대충 ` 


갑자기 이케아 미트볼에 끼워파는 감자으깬거 먹고싶음
오전 2:25 - 2018년 12월 21일

    5 마음에 들어요
    김기웅 Kim, Kie-Woong
    루에/아롱군
    물챙이
    m_nt_rpt
    티루

답글 2개 리트윗 0개 5 마음
김기웅 Kim, Kie-Woong 트윗 문구
 

 

        Chalk
        ‏ @chalk_alt
        16시간16시간 전

집가면 이케아다 무조곤이다 멋진 내 고향 고양시에는 이케아도 있어요
답글 0개 리트윗 1개 1 마음

    새로운 대화
    즈눅
    ‏ @x_nuk
    16시간16시간 전

@chalk_alt 님에게 보내는 답글

마자요 이케아 매시드 포테이토 킹갓존엄임
답글 1개 리트윗 0개 0 마음
Chalk
‏ @chalk_alt
16시간16시간 전

부드러운 감자와 맛있는 소스
답글 1개 리트윗 0개 0 마음
즈눅
‏ @x_nuk
16시간16시간 전

딸기잼과 무엇인지 모르겠는 엄청 맛있는 하얀 액체 소스
답글 1개 리트윗 0개 0 마음
Chalk
‏ @chalk_alt
16시간16시간 전

그렇게 말하면 이상하잖어요
답글 1개 리트윗 0개 0 마음
즈눅
‏ @x_nuk
16시간16시간 전

무엇인지 모르겠는 딸기잼과 엄청 맛있는 하얀 액체 소스
답글 1개 리트윗 0개 0 마음
Chalk
‏ @chalk_alt
16시간16시간 전

여전히 이상해요 좀 더 바꿔보세요
답글 1개 리트윗 0개 0 마음
즈눅
‏ @x_nuk
16시간16시간 전

무엇인지 모르겠는 하얀 딸기잼 액체와 엄청 맛있는 소스
답글 1개 리트윗 0개 0 마음
Chalk
‏ @chalk_alt
16시간16시간 전

이상한 걸 고치려다 의미가 달라졌는데요
` } 

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
