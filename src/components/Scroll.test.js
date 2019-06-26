import { shallow} from 'enzyme'
import  Scroll from  './Scroll'
import React from 'react';


it ('expects to render card component',() => {

    expect(shallow(<Scroll />)).toMatchSnapshot()

})