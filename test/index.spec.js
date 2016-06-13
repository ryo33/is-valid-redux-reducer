import { expect } from 'chai'
import isValidReduxReducer from '../src/index.js'
import { combineReducers } from 'redux'

describe('isValidReduxReducer', () => {
  const reducerA = {}
  it('should return false when the reducer is not a function', () => {
    expect(isValidReduxReducer(reducerA)).to.be.false
  })
  it('should throw a error when the reducer is not a function', () => {
    expect(() => isValidReduxReducer(reducerA, true)).to.throw(Error, 'Reducer must be a function.')
  })

  const reducerB = (state, action) => state
  it('should return false when the reducer does not return the initial state', () => {
    expect(isValidReduxReducer(reducerB)).to.be.false
  })
  it('should throw a error when the reducer does not return the initial state', () => {
    expect(() => isValidReduxReducer(reducerB, true)).to.throw(Error, 'Reducer must return the initial state if the state is undefined.')
  })

  const reducerC = (state, action) => ({})
  it('should return false when the reducer does not return the current state', () => {
    expect(isValidReduxReducer(reducerC)).to.be.false
  })
  it('should throw a error when the reducer does not return the current state', () => {
    expect(() => isValidReduxReducer(reducerC, true)).to.throw(Error, 'Reducer must return the current state for any unknown actions.')
  })

  const reducerD = (state = {}, action) => state
  it('should return true when the reducer is valid', () => {
    expect(isValidReduxReducer(reducerD)).to.be.true
  })
  it('should not throw a error when the reducer is valid', () => {
    expect(() => isValidReduxReducer(reducerD, true)).not.to.throw(Error)
  })

  it('should return true for a reducer combined by combineReducers', () => {
    expect(isValidReduxReducer(combineReducers({
      a: reducerD
    }))).to.be.true
  })
})
