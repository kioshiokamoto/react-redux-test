import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addModal } from '../redux/actions/testActions';

export default function Modal({ id }: { id: string }) {
	const dispatch = useDispatch();
	const open = useSelector((state: any) => state.testReducer);

	useEffect(() => {
		console.log(open.items);
	}, [open]);
    
	useEffect(() => {
		dispatch(addModal(id));
	}, []);

	return <div>{open.items.map((el: any, idx: number) => el.id === id && <p key={idx}>{el.id}</p>)}</div>;
}
