import './Sidebar.scss';
import { useSelector } from 'react-redux';

const Sidebar = () => {
	const { auth } = useSelector((state) => ({ ...state }));
	const { currentUser } = auth;

	return (
		<div>
			<ul className='sidebar'>
				<li className='list-item'>
					<h5>{currentUser.username}</h5>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
