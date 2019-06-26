import { shallow} from 'enzyme'
import  ErrorBoundary from  './ErrorBoundry'
import React from 'react';


it ('expects to render card component',() => {

    expect(shallow(<ErrorBoundary />)).toMatchSnapshot()

})

