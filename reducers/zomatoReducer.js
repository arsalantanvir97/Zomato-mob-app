import {
    GET_SEARCH_FAIL,
    GET_SEARCH_REQUEST,
    GET_SEARCH_SUCCESS,
    GET_ZOMATO_FAIL,
    GET_ZOMATO_REQUEST,
    GET_ZOMATO_SUCCESS,
} from '../constants/zomatoConstant'
export const getCategoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case GET_ZOMATO_REQUEST:
            return { loading: true, categories: [] }
        case GET_ZOMATO_SUCCESS:
            return { loading: false, categories: action.payload }
        case GET_ZOMATO_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
export const getSearchReducer = (state = { searching: [] }, action) => {
    switch (action.type) {
        case GET_SEARCH_REQUEST:
            return { loading: true, searching: [] }
        case GET_SEARCH_SUCCESS:
            return { loading: false, searching: action.payload }
        case GET_SEARCH_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}