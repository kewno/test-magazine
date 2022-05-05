import {mainAPI} from "../api/api";

const SET_CATEGORYS = 'SET_CATEGORYS';
const SET_DATA = 'SET_DATA';

export const setCategorys = (categorys) => {
    return {type: SET_CATEGORYS, categorys};
}
export const setData = (data) => {
    return {type: SET_DATA, data};
}

export const setDataThunkCreator = () => {
    return async (dispatch) => {
        let response = await mainAPI.getCategoty()
        
        let filtrCategorys = (el) => {
            if (el.parent_id == -1 || el.parent_id == 14) return true
        }

        let categorys = response.filter(filtrCategorys) //el => el == null
        
        dispatch(setCategorys(categorys));
    }
}
let initMain = {
    data : [],
    categorys : []
}
let mainReducer = (state = initMain, action) => {
    let stateClone = {...state};
    if (action.type === SET_CATEGORYS) {
        stateClone.categorys = [...stateClone.categorys]
        stateClone.categorys = action.categorys
    }
    if (action.type === SET_DATA) {
        stateClone.data = [...stateClone.data]
        stateClone.data = action.data
    }
    return stateClone;
}

export default mainReducer;