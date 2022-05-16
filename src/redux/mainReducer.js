import {mainAPI} from "../api/api";

const SET_DATA = 'SET_DATA';
const SET_CATEGORYS = 'SET_CATEGORYS';
const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';
const SET_ACTIVE_SUBCATEGORY = 'SET_ACTIVE_SUBCATEGORY';

export const setData = (data) => {
    return {type: SET_DATA, data};
}
export const setCategorys = (categorys) => {
    return {type: SET_CATEGORYS, categorys};
}
export const setProducts = (products) => {
    return {type: SET_PRODUCTS, products};
}
export const setActiveCategory = (category) => {
    return {type: SET_ACTIVE_CATEGORY, category};
}
export const setActiveSubcategory = (subcategory) => {
    return {type: SET_ACTIVE_SUBCATEGORY, subcategory};
}

export const setDataThunkCreator = () => {
    return async (dispatch) => {
        let response = await mainAPI.getCategoty()
        
        let data = {};
        let filtrData = (arr) => {
            arr.forEach(el => {
                let key = el.parent_id
                //debugger
                if (key in data) {
                    data[key].push(el)
                } else {
                    data[key] = []
                    //debugger
                    data[key].push(el)
                }
            })
            let categorys = [];
            data[-1].forEach(el => {
                let id = el.id
                categorys.push(el)
            })
            //debugger
            categorys.forEach(el => {
                let subcategorys = []
                data[el.id].forEach(el => {
                    subcategorys.push(el)
                })
                el.subcategorys = subcategorys
            })
            //console.log(categorys)
            //console.log(data)
            return categorys;
        }

        //let categorys = response.filter(filtrCategorys)
        let products; //= filtrProducts(data)
        //debugger
        let categorys = filtrData(response);
        //debugger
        //dispatch(setActiveCategory(categorys[0].id))
        //debugger
        //dispatch(setActiveSubcategory(categorys[0].subcategorys[0].id))//Object.keys(categorys)[0]
        dispatch(setCategorys(categorys))
        dispatch(setData(data))
        //debugger
        //dispatch(setProducts(products))
    }
}

let initMain = {
    data : [],
    categorys : [
        {id: 14, parent_id: -1, name: 'Электроприборы', subcategorys: [{id: 15, parent_id: 14, name: 'Светильники'}, {id: 16, parent_id: 14, name: 'Вентиляторы'}]},
        {id: 100, parent_id: -1, name: 'Мебель', subcategorys: [{id: 3, parent_id: 100, name: 'Диваны'}, {id: 4, parent_id: 100, name: 'Столы'}, {id: 2, parent_id: 100, name: 'Стулья'}]}],
    products: [],
    //subcategories : [],
    //activeCategory : 0,
    //activeSubcategory : 0
}

let mainReducer = (state = initMain, action) => {
    let stateClone = {...state};
    if (action.type === SET_CATEGORYS) {
        stateClone.categorys = [...stateClone.categorys]
        stateClone.categorys = action.categorys
    } else if (action.type === SET_PRODUCTS) {
        stateClone.products = [...stateClone.products]
        stateClone.products = action.products
    } else if (action.type === SET_DATA) {
        stateClone.data = {...stateClone.data}
        stateClone.data = action.data
    } else if (action.type === SET_ACTIVE_CATEGORY) {
        stateClone.activeCategory = Number(action.category)
    } else if (action.type === SET_ACTIVE_SUBCATEGORY) {
        stateClone.activeSubcategory = action.subcategory
    }
    return stateClone;
}

export default mainReducer;




// let filtrData = (arr) => {
//     let data = {};
//     arr.forEach(el => {
//         let key = el.parent_id
//         //debugger
//         if (key in data) {
//             data[key].push(el)
//         } else {
//             data[key] = []
//             //debugger
//             data[key].push(el)
//         }
//     })
//     let a = data
//     let categorys = [];
//     data[-1].forEach(el => {
//         let id = el.id
//         categorys[`${id}`] = el
//     })
//     //debugger
//     categorys.forEach(el => {
//         //debugger
//         el.subcategorys = data[el.id]
//         //debugger
//     })
//     let b = categorys
//     //debugger
//     return categorys;
// }


// let filtrData = (arr) => {
//     let data = {};
//     arr.forEach(el => {
//         let key = el.parent_id
//         //debugger
//         if (key in data) {
//             data[key].push(el)
//         } else {
//             data[key] = []
//             //debugger
//             data[key].push(el)
//         }
//     })
//     //let a = data
//     let categorys = [...data[-1]];
//     // categorys.forEach(el => {
//     //     let id = el.id
//     //     categorys[`${id}`] = el
//     // })
//     //debugger
//     categorys.forEach(el => {
//         //debugger
//         el.subcategorys = data[el.id]
//         //debugger
//     })
//     //let b = categorys
//     //debugger
//     console.log(categorys)
//     return categorys;
// }