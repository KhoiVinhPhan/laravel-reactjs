var redux = require('redux');

// var defaultState = {
// 	mang: ["A", "B", "C"],
// 	isAdding: false
// }

// var reducer = (state = defaultState, action) => {
// 	switch (action.type) {
// 		case "TOGGLE":
// 			return {...state, isAdding: !state.isAdding}
// 		case "ADD_ITEM":
// 			return {...state, mang: [...state.mang, action.item]}
// 		case "REMOVE_ITEM":
// 			return {...state, mang: state.mang.filter( (e,i)=> i != action.index )}
// 		default:
// 		return state;
// 	}
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


var reducer = redux.combineReducers({
	mang: mangReducer,
	isAdding: isAddingReducer
});


var store = redux.createStore(reducer);
console.log(store.getState());

//when change store
store.subscribe( () => console.log( "Change: ", store.getState() ) );


//toogle: isAdding
store.dispatch({type: "TOGGLE"});

//add item
store.dispatch({
	type: "ADD_ITEM",
	item: "D"
});

//remove item
store.dispatch({
	type: "REMOVE_ITEM",
	index: 1
});


module.exports = store;
