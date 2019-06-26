import { shallow} from 'enzyme'
import configureStore from 'redux-mock-store'
import  App from  './App'
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { requestRobots, searchRobots } from '../reducers'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';


const middlewares = []
const mockStore = configureStore(middlewares)
const addTodo = () => ({ type: 'ADD_TODO' })


it ('expects to render App component using actual store',() => {

    const logger = createLogger()

    const rootReducers = combineReducers({requestRobots, searchRobots})

    const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

    expect(shallow(<Provider store={store}><App /></Provider>)).toMatchSnapshot()

})

it ('expects to render App component',() => {

    const initialState = {}
    const store = mockStore(initialState)
    expect(shallow(<Provider store={store}><App /></Provider>)).toMatchSnapshot()

})


it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {}
    const store = mockStore(initialState)
  
    // Dispatch the action
    store.dispatch(addTodo())
  
    // Test if your store dispatched the expected actions
    const actions = store.getActions()
    const expectedPayload = { type: 'ADD_TODO' }
    expect(actions).toEqual([expectedPayload])
  })