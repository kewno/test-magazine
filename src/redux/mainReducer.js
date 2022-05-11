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
        

        let filtrData = (arr) => {
            let data = {};
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
                categorys[`${id}`] = el
            })
            //debugger
            categorys.forEach(el => {
                let subcategorys = []
                data[el.id].forEach(el => {
                    subcategorys[el.id] = el
                })
                el.subcategorys = subcategorys
                //debugger
            })
            //debugger
            console.log(categorys)
            console.log(data)
            return categorys;
        }

        let filtrProducts = (arr) => {
            
        }
        // let filtrCategorys = (el) => {
        //     if (el.parent_id === -1 || el.parent_id === 14 || el.parent_id === 100) return true
        // }
        // let filtrProducts = (el) => { // || el.parent_id == 14
        //     if (el.parent_id === 2 || el.parent_id === 3 || el.parent_id === 4 || el.parent_id === 15) return true
        // }

        //let categorys = response.filter(filtrCategorys)
        let products = response.filter(filtrProducts)
        //debugger
        let categorys = filtrData(response);
        //debugger
        //dispatch(setActiveCategory(categorys[0].id))
        //debugger
        //dispatch(setActiveSubcategory(categorys[0].subcategorys[0].id))//Object.keys(categorys)[0]
        dispatch(setCategorys(categorys))
        //debugger
        //dispatch(setProducts(products))
    }
}

let initMain = {
    categorys : [],
    products: [],
    subcategories : [],
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
        stateClone.data = [...stateClone.data]
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