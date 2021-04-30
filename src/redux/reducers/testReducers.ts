import { idText } from 'typescript';
import * as actionTypes from '../constants/testConstants';

//{id:'',open:true}
export const testReducer = (state = { items: [] }, action: any) => {
	
	switch (action.type) {
		case actionTypes.ADD_MODAL:
			const payload = action.payload;
			return{
				...state,
				items: [...state.items, payload],
			}
		case actionTypes.OPEN_MODAL:
			return {
				...state,
				items: state.items.map((item: any) =>
					item.id === action.payload.id ? { id: item.id, open: true } : item
				),
			};
		case actionTypes.CLOSE_MODAL:
			return {
				...state,
				items: state.items.map((item: any) =>
					item.id === action.payload.id ? { id: item.id, open: false } : item
				),
			};

		default:
			return state;
	}
};

