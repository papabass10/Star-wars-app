import React from 'react';

const Search = () => {
	return ( 
		<div>
		<input className='ba br3 pa2' type='search' placeholder='Search the Star Wars Universe!'/>
		<button className='ml2 ba br4' type='submit'> Search! </button>
		</div>				
	);
}

export default Search;