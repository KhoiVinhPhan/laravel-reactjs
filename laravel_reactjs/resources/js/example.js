var redux = require('redux');
var persistStore = require('redux-persist');
var persistReducer = require('redux-persist');
var storage = require('redux-persist/lib/storage');
var autoMergeLevel2 = require('redux-persist/lib/stateReconciler/autoMergeLevel2');


const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // Xem thêm tại mục "Quá trình merge".
};


// var defaultState = {
//  mang: ["A", "B", "C"],
//  isAdding: false
// }

// var reducer = (state = defaultState, action) => {
//  switch (action.type) {
//      case "TOGGLE":
//          return {...state, isAdding: !state.isAdding}
//      case "ADD_ITEM":
//          return {...state, mang: [...state.mang, action.item]}
//      case "REMOVE_ITEM":
//          return {...state, mang: state.mang.filter( (e,i)=> i != action.index )}
//      default:
//      return state;
//  }
// }

var mangReducer = ( state = ['A', 'B', 'C'], action ) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.item]
        case "REMOVE_ITEM":
            return state.filter( (e,i) => i != action.index )
        default:
        return state;
    }
}

var isAddingReducer = (state = false, action) => {
    switch (action.type) {
        case "TOGGLE":
            return !state
        default:
        return state;
    }
}

var jwt_token = ( state = "", action ) => {
    switch (action.type) {
        case "TOKEN":
            return state = action.token
        default:
        return state;
    }
}

var email = ( state = "", action ) => {
    switch (action.type) {
        case "EMAIL":
            return state = action.email
        default:
        return state;
    }
}


var reducer = redux.combineReducers({
    mang: mangReducer,
    isAdding: isAddingReducer,
    jwt_token: jwt_token,
    email: email
});


const pReducer = persistReducer.persistReducer(persistConfig, reducer);

var store = redux.createStore(pReducer);
console.log(store.getState());

// var persistor = persistStore.persistStore(store);

//when change store
store.subscribe( () => console.log( "Change: ", store.getState() ) );


//toogle: isAdding
// store.dispatch({type: "TOGGLE"});

//add item
// store.dispatch({
//  type: "ADD_ITEM",
//  item: "D"
// });

//remove item
// store.dispatch({
//  type: "REMOVE_ITEM",
//  index: 1
// });



module.exports = store;
