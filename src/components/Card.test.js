import { shallow} from 'enzyme'
import  Card from  './Card'
import React from 'react';


it ('expects to render card component',() => {

    expect(shallow(<Card />)).toMatchSnapshot()

})