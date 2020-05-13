//normal function
const initialState={
    name:"abc",
    wishes:['eat','code']
}

const reducer = (state=initialState, action) => {
    if(action.type==='CHANGE_NAME'){
        return {
            ...state,
            name:action.payload
        }
    }
    console.log(action)
    return state;
}

export default reducer;
