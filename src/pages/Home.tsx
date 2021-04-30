import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/Modal';
import { addModal, closeModal, openModal } from '../redux/actions/testActions';

export default function Home() {
	const dispatch = useDispatch();
	const handleAdd = () => {
		dispatch(addModal('1'));
	};
	const handleOpen = () => {
		dispatch(openModal('1'));
	};
	const handleClose = () => {
		dispatch(closeModal('1'));
	};
	return (
		<div className="p-3">
			<div className="flex flex-col items-center space-y-2">
				<button className="px-3 text-white bg-gray-600" onClick={handleAdd}>
					New Modal
				</button>
				<button className="px-3 text-white bg-gray-600" onClick={handleOpen}>
					Open Modal
				</button>
				<button className="px-3 text-white bg-gray-600" onClick={handleClose}>
					Close Modal
				</button>
			</div>
			
            <Modal id="Primer modal"/>
            <Modal id="Segundo modal"/>
            <Modal id="Tercer modal"/>
		</div>
	);
}
