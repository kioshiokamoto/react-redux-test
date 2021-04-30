import * as actionTypes from '../constants/testConstants';
import { Dispatch } from 'react';


interface Constants {
    OPEN_MODAL: string;
} 

interface StatusModal{
    type: Constants['OPEN_MODAL'],
    payload:object
}
export const addModal = (id:string)=> (dispatch:any) =>{
    dispatch({
        type: actionTypes.ADD_MODAL,
        payload:{
            id,
            open:false
        }
    })
}

export const openModal = (id:string)=> (dispatch: Dispatch<StatusModal>) =>{
    dispatch({
        type: actionTypes.OPEN_MODAL,
        payload:{
            id
        }
    })
}
export const closeModal = (id:string)=> (dispatch: Dispatch<StatusModal>) =>{
    dispatch({
        type: actionTypes.CLOSE_MODAL,
        payload:{
            id
        }
    })
}