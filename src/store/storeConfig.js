
import { createStore, combineReducers, applyMiddleware } from 'redux';
import charactersReducer from './reducer/character/index';
import promise from 'redux-promise'

const reducers = combineReducers({
    dados: charactersReducer
})

const storeConfig = () => {
    return applyMiddleware(promise)(createStore)(reducers)
}

export default storeConfig