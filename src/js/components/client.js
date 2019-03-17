import {combineReducers, createStore} from 'redux';

const reducer = function(state, action){
    if(action.type === "INC"){
        return state + action.payload;
    }
    if(action.type === "DEC"){
        return state - action.payload;
    }
    return state;
}

const userReducer = (state={}, action) => {

    switch(action.type){
        case "CHANGE_NAME": {
            state = {...state, name: action.payload};
            break;
        }
        case "CHANGE_AGE": {
            state = {...state, age: age.payload};
            break;
        }
    }

    return state;
}

const tweetsReducer = (state={}, actions) => {

}

const reducer = combineReducers({
    user: userReducer,
    tweets: tweetsReducer,
})

const store = createStore(reducers, {
    user: {
        name: "will",
        age: 35,
    },
    tweets: []
});


store.subscribe(() => {
    console.log("store changed", store.getState());
})

store.dispatch({type: "CHANGE_NAME", payload: "Will"})
store.dispatch({type: "CHANGE_AGE", payload: 35})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "DEC", payload: 1})