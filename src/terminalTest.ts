import {terminal, ScreenBuffer} from 'terminal-kit';
import { sleep } from './utility/sleep';
const term = terminal ;



export async function terminalTest() {
	term.clear() ;

	var delta = true ,
		scroll = -1 ,
		scrollingYmin = 0 ,
		scrollingYmax = 3 ;
	
	var buffer = ScreenBuffer.create( { dst: term , width: 4 , height: 4 } ) ; //.clear() ;

	buffer.put( { x: 0 , y: 0 } , 'abcd' ) ;
	buffer.put( { x: 0 , y: 1 } , 'efgh' ) ;
	buffer.put( { x: 0 , y: 2 } , 'ijkl' ) ;
	buffer.put( { x: 0 , y: 3 } , 'mnop' ) ;
	buffer.draw( { delta } ) ;
	
	await sleep( 500 ) ;
	buffer.vScroll( scroll , undefined , scrollingYmin , scrollingYmax , true ) ;
	buffer.put( { x: 0 , y: scrollingYmax,  } , 'qrst' ) ;
	buffer.draw( { delta } ) ;
	await sleep( 500 ) ;
	buffer.vScroll( scroll , undefined , scrollingYmin , scrollingYmax , true ) ;
	buffer.put( { x: 0 , y: scrollingYmax } , 'uvwx' ) ;
	buffer.draw( { delta } ) ;
	await sleep( 500 ) ;
	buffer.draw( { delta } ) ;

	term.moveTo( 1 , 8 , '\n' ) ;
}