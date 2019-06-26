import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';


   


   import * as reducers from './reducers'
import { bindActionCreators } from 'redux';


describe('searchRobots', () => {

    const initialStateSearch = {
        searchField: ''
      }

    it('should return inital state', () => {

        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''})
    })


    it('should handle CHANGE SEARCHFIELD', () => {

        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc'})

    })
})



describe('robotsReducer()', () => {
  
const initialStateRobots = {

    robots: [],
    isPending: false
}


it('should handle request ROBOTS_PENDING_ACTION ', () => {

    expect(reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
        
    })).toEqual({
        robots : [],
        isPending: true 
    })
})

it('should handle request ROBOTS_SUCCESS', () => {

    expect(reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: ['ddd']
        
    })).toEqual({
        robots: ['ddd'],
        isPending: false 
    })
})


it('should handle request ROBOTS_FAILED', () => {

    expect(reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: ['robot request has failed...'],
        robots: []
        
    })).toEqual({
        error: ['robot request has failed...'],
        isPending: false ,
        robots: []
    })
})
})
