import { shallow} from 'enzyme'
import  CardList from  './CardList'
import React from 'react';


it ('expects to render cardList component',() => {

    const mockRobots = [{

        id : 1 ,
        name : 'John Snow',
        username : 'JohnJohn',
        email: 'john@gmail.com'
    } ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()

})