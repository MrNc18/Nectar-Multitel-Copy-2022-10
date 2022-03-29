export const Increment = (value) =>{ return (dispatch) =>{
    dispatch({
        type:"INCREMENT",
        payload:value
    })
}
}

export const Decrement = () =>{return (dispatch) =>{
    dispatch({
        type:"DECREMENT"
    })
}
}