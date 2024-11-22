// Createa a Actions in redux 

// create a actions  *-*-*-*-*-*-*-*
export const addtion = "INSERT"

export const show = "DISPLAY"

export const improve = "UPDATE"

export const remove = "DELETE"

// make a Action creator fun  *-*-*-*-*

export const addFun = (data) => {
    return{
        type:addtion,
        payload:data
    }
}

export const dispFun = () => {
    return{
        type:show
    }
}

export const updateFun = (id,data) => {
    return{
        type:improve,
        payload:{id,data}
    }
}

export const delFun = (id) => {
    return{
        type:remove,
        payload:id
    }
}

