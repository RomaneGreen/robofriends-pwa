import { shallow} from 'enzyme'
import  Header from  './Header'
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6
import CounterButton from './CounterButton';



it ('header snapshot',() => {


        
    expect(shallow(<Header  />)).toMatchSnapshot()

})



it ('header snapshot results',() => {
     
    const renderer = new ShallowRenderer();
    renderer.render(<Header />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual(

       
     <div> <h1 className='f1'>RoboFriends</h1> <CounterButton />  </div> 
  
    );
})
