import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import { planetReducer } from './reducers'

export default createStore(planetReducer, applyMiddleware(thunk)); 