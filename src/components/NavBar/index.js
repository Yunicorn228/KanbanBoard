import React from 'react';
import './index.scss';
import icon from '../../Constants/Oval.png';
import logo from '../../Constants/Oval (1).png';

const NavBar = () => {
	return (
		<div className='nav-container'>
			<img src={logo} alt='' />
			<div className='nav-content-wraper'>
				<img src={icon} alt='' />
				<div className='nav-user-name'>Sheldon Yu</div>
			</div>
		</div>
	);
};

export default NavBar;
