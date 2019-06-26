import { shallow} from 'enzyme'
import  CounterButton from  './CounterButton'
import React from 'react';


it ('expects to render card component',() => {

    expect(shallow(<CounterButton />)).toMatchSnapshot()

})


it('shallow renders intial state', () => {
    const wrapper = shallow(<CounterButton />);
    expect(wrapper.instance().state.count).toBe(1);
  });


  it('onClick: should increment state.count by 1', () => {
    const wrapper = shallow(<CounterButton/>);
    const instance = wrapper.instance();
    expect(instance.state.count).toBe(1);
    instance.increaseCount()
    wrapper.find("button").simulate('click')
    expect(instance.state.count).toBe(3);
  });