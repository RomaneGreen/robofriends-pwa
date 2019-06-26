import { shallow} from 'enzyme'
import  SearchBox from  './SearchBox'
import React from 'react';


it ('expects to render card component',() => {

    expect(shallow(<SearchBox />)).toMatchSnapshot()

})