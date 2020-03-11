import React from 'react';
import './index.scss';
import delet from '../../../Constants/icon-.png';
import complete from '../../../Constants/Shape.png';
import left from '../../../Constants/Shape (1).png';
import right from '../../../Constants/Shape (2).png';
import check from '../../../Constants/Shape (3).png';
import classnames from 'classnames';

const Item = ({
	v,
	i,
	todos,
	handleDelet,
	handleComplete,
	handleMoveLeft,
	handleMoveRight,
}) => {
	return (
		<div className='item-wraper'>
			{v.todos.map((todo, index) => (
				<div className={classnames('item-content', { active: todo.isActive })}>
					<div className='item-content-text'>
						<div className='item-event-name'>{todo.event}</div>

						<div className='item-content-text-icons'>
							<div
								onClick={() => handleComplete(i, index)}
								className='firstchild'>
								{todo.isActive ? (
									<img src={check} alt='' />
								) : (
									<img src={complete} alt='' />
								)}
							</div>

							<div>
								<img onClick={() => handleDelet(i, index)} src={delet} alt='' />
							</div>
						</div>
					</div>

					<div className='item-move-container'>
						<img
							className={classnames('left', { edage: i === 0 })}
							onClick={() => handleMoveLeft(index, i)}
							src={left}
							alt=''
						/>
						<img
							className={classnames('right', { edage: i === todos.length - 1 })}
							onClick={() => handleMoveRight(index, i)}
							src={right}
							alt=''
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default Item;
