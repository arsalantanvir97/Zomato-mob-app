import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getCategoriesReducer,getSearchReducer } from './reducers/zomatoReducer'

const reducer = combineReducers({
    getCategories: getCategoriesReducer,
    getSearch:getSearchReducer,
})

const initialState = {}
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store