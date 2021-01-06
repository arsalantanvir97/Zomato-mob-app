import axios from 'axios'

import { devToolsEnhancer } from 'redux-devtools-extension'
import {
    GET_ZOMATO_FAIL,
    GET_ZOMATO_REQUEST,
    GET_ZOMATO_SUCCESS,
    GET_SEARCH_FAIL,
    GET_SEARCH_REQUEST,
    GET_SEARCH_SUCCESS,
} from '../constants/zomatoConstant'




export const zomatoCategories = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ZOMATO_REQUEST,
        })

        const config = {
            headers: {
                'Accept': 'application/json',
              user_key: '47506ea3d3611c6b0ca126314d87852a',
            },
        
          }

        const { data } = await axios.get('https://developers.zomato.com/api/v2.1/categories',config)
        console.log(data)
        dispatch({
            type: GET_ZOMATO_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_ZOMATO_FAIL,
            payload: error,
        })
    }
}
export const zomatoSearch = (name) => async (dispatch) => {
    try {
        dispatch({
            type: GET_SEARCH_REQUEST,
        })

        const config = {
            headers: {
                'Accept': 'application/json',
              user_key: '47506ea3d3611c6b0ca126314d87852a',
            },
        
          }

        const { data } = await axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&q=${name}&count=20`,config)
        console.log('hiii',data)
        dispatch({
            type: GET_SEARCH_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_SEARCH_FAIL,
            payload: error,
        })
    }
}