import React from 'react';
import Item from './Item';
import './index.scss';
import classnames from 'classnames';
import delet from '../../Constants/icon-.png';
import left from '../../Constants/Shape (1).png';
import right from '../../Constants/Shape (2).png';

const List = ({
	todos,
	input,
	titleInput,
	handleUpdate,
	handleSubmit,
	handleDelet,
	handleComplete,
	handleMoveLeft,
	handleMoveRight,
	handleDeletList,
	handleMoveListRight,
	handleMoveListLeft,
	handleChangeTitle,
	handleTitleUpdate,
	handleDisplayInput,
}) => {
	return (
		<div className='lists-wraper'>
			{todos.map((v, i) => (
				<div className='list'>
					<img
						className='deletlist'
						onClick={() => handleDeletList(i)}
						src={delet}
						alt=''
					/>
					<h1 onClick={() => handleDisplayInput(i)}>{v.title}</h1>
					<input
						value={titleInput[i].title}
						onChange={e => handleTitleUpdate(e, i)}
						onKeyDown={e => handleChangeTitle(e, i)}
						className={classnames('list-title-input', {
							activeinput: titleInput[i].isDisplay,
						})}
						type='text'
					/>
					{v && (
						<Item
							v={v}
							i={i}
							todos={todos}
							handleDelet={handleDelet}
							handleComplete={handleComplete}
							handleMoveLeft={handleMoveLeft}
							handleMoveRight={handleMoveRight}
						/>
					)}
					<div className='list-input'>
						<input
							placeholder='Type Something'
							value={input[i]}
							onChange={e => handleUpdate(e, i)}
							type='text'
							onKeyDown={e => handleSubmit(e, i)}
						/>
					</div>

					<div className='list-move-container'>
						<img
							// className={classnames('left', { edage: i === 0 })}
							onClick={() => handleMoveListLeft(i)}
							src={left}
							alt=''
						/>
						<img
							// className={classnames('right', { edage: i === todos.length - 1 })}
							onClick={() => handleMoveListRight(i)}
							src={right}
							alt=''
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default List;
