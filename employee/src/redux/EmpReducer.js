// import React from 'react'
import { remove , improve , addtion } from "./EmpAction";


const iniatalState = {
    data : []
}


const EmpReducer = (state = iniatalState, action) => {
    switch (action.type) {
        case addtion : return{
            ...state,
            data:[...state.data, action.payload]
        }
        case improve : return{
            ...state,
            data:state.data.map((i,index) => {
                if(index == action.payload.id){
                    i.name == action.payload.data.name
                    i.age == action.payload.data.age
                    i.salary == action.payload.data.salary
                    i.hour == action.payload.data.hour
                }
                return i
            })
        }
        case remove : return{
            ...state,
            data:state.data.filter((i,index) => {
                return index != action.payload
            })
        }
        
           
    
        default: return state
           
    }
}

export default EmpReducer
