import React from 'react';
import './index.scss';

const Button = ({ handleAddList, handleClearAll }) => {
	return (
		<div className='clear-button'>
			<div onClick={handleAddList} className='clear-button-content'>
				Add List
			</div>
			<div onClick={handleClearAll} className='clear-button-content'>
				Clear All of them
			</div>
		</div>
	);
};

export default Button;
