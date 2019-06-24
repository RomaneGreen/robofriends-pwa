import React from 'react';
import { shallow} from 'enzyme'

const SearchBox = ({ searchfield, searchChange }) => {
  //console.log('SearchBox');
  return (
    <div className='pa2'>
      <input
        aria-label="Search"
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;