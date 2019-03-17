import { applyMiddleware, createStore} from 'redux';

const reducer = function(initialState=0, action){
    if(action.type === "INC"){
        return initialState + 1;
    }
    else if(action.type === "DEC"){
        return initialState - 1;
    }
    else if(action.type === "E"){
        throw new Error("AAAA!")
    }

    
}

const logger = (store) => (next) => (action) => {
    console.log("action fired", action);
    next(action);
};

const error = (store) => (next) => (action) => {
    try{
        next(action);
    }
    catch(e) {
        console.log("AHHH", e);
    }
};

const middleware = applyMiddleware(logger);

const store = createStore(reducers, 0, middleware);

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "DEC", payload: 1})
store.dispatch({type: "DEC", payload: 1})
store.dispatch({type: "DEC", payload: 1})
store.dispatch({type: "E"})