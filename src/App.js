import React, { useState } from 'react';

import './App.css';
import List from './components/Lists';
import NavBar from './components/NavBar';
import Button from './components/Button';
import data from './service/index';

function App() {
	const [todos, setTodos] = useState(data);
	const [input, setInput] = useState(['', '', '', '']);
	const [titleInput, setTitleInput] = useState([
		{
			title: '',
			isDisplay: false,
		},
		{
			title: '',
			isDisplay: false,
		},
		{
			title: '',
			isDisplay: false,
		},
		{
			title: '',
			isDisplay: false,
		},
	]);

	const handleChangeTitle = (e, i) => {
		if (e.keyCode === 13) {
			const newData = todos;
			newData[i].title = e.target.value;
			const newTitle = [...titleInput];
			titleInput[i].isDisplay = false;
			setTodos(newData);
			setTitleInput(newTitle);
		}
	};

	const handleTitleUpdate = (ele, i) => {
		const currStatus = titleInput[i].isDisplay;

		const newTitle = [...titleInput];
		newTitle[i].title = ele.target.value;

		// const newTitle = titleInput.map((value, index) =>
		// 	i === index
		// 		? {
		// 				title: ele.target.value,
		// 				isDisplay: false,
		// 		  }
		// 		: {
		// 				...value,
		// 		  },
		// );

		setTitleInput(newTitle);
	};

	const handleDisplayInput = i => {
		const newTitle = titleInput.map((value, index) =>
			i === index
				? {
						...value,
						isDisplay: true,
				  }
				: {
						...value,
				  },
		);
		setTitleInput(newTitle);
	};

	const handleUpdate = (ele, i) => {
		const newInput = [...input];
		newInput[i] = ele.target.value;
		setInput(newInput);
	};

	const handleSubmit = (e, i) => {
		if (e.keyCode === 13) {
			const currTodo = [...todos];
			currTodo[i].todos.push({
				event: input[i],
				isActive: false,
			});
			const newInput = [...input];
			newInput[i] = '';
			setInput(newInput);
			setTodos(currTodo);
		}
	};

	const handleMoveLeft = (currTodoIndex, currListIndex) => {
		const newTodos = [...todos];

		const itemToMove = newTodos[currListIndex].todos.splice(
			currTodoIndex,
			1,
		)[0];
		newTodos[currListIndex - 1].todos.push(itemToMove);
		setTodos(newTodos);
	};

	const handleMoveRight = (currTodoIndex, currListIndex) => {
		const newTodos = [...todos];
		const itemToMove = newTodos[currListIndex].todos.splice(
			currTodoIndex,
			1,
		)[0];

		newTodos[currListIndex + 1].todos.push(itemToMove);
		setTodos(newTodos);
	};

	const handleMoveListLeft = index => {
		const newTodos = [...todos];
		const moveItem = newTodos.splice(index, 1)[0];
		newTodos.splice(index - 1, 0, moveItem);
		console.log(newTodos);
		setTodos(newTodos);
	};

	const handleMoveListRight = index => {
		const newTodos = [...todos];
		const moveItem = newTodos.splice(index, 1)[0];
		newTodos.splice(index + 1, 0, moveItem);
		console.log(newTodos);
		setTodos(newTodos);
	};

	const handleClearAll = () => {
		const nextData = todos.map(value => ({ ...value, todos: [] }));
		setInput(['', '', '', '']);
		setTodos(nextData);
	};

	const handleAddList = () => {
		const newData = [...todos];
		newData.push({
			title: '妙啊~~~',
			todos: [],
		});
		const newInput = [...input];
		newInput.push('');
		const newTitle = [...titleInput];
		newTitle.push({
			title: '',
			isDisplay: false,
		});
		setTodos(newData);
		setInput(newInput);
		setTitleInput(newTitle);
	};

	const handleDeletList = i => {
		const newData = [...todos];
		newData.splice(i, 1);
		setTodos(newData);
	};

	const handleDelet = (curr, index) => {
		const currTodo = [...todos];
		currTodo[curr].todos.splice(index, 1);
		setTodos(currTodo);
	};

	const handleComplete = (curr, index) => {
		const currTodo = todos;

		const currStatus = currTodo[curr].todos[index].isActive;
		currTodo[curr].todos = currTodo[curr].todos.map((value, i) =>
			index === i
				? {
						...value,
						isActive: !currStatus,
				  }
				: {
						...value,
				  },
		);

		setTodos([...currTodo]);
	};

	return (
		<div className='App'>
			<NavBar />
			<Button handleClearAll={handleClearAll} handleAddList={handleAddList} />
			<List
				todos={todos}
				input={input}
				titleInput={titleInput}
				handleUpdate={handleUpdate}
				handleSubmit={handleSubmit}
				handleDelet={handleDelet}
				handleComplete={handleComplete}
				handleMoveLeft={handleMoveLeft}
				handleMoveRight={handleMoveRight}
				handleDeletList={handleDeletList}
				handleMoveListRight={handleMoveListRight}
				handleMoveListLeft={handleMoveListLeft}
				handleChangeTitle={handleChangeTitle}
				handleTitleUpdate={handleTitleUpdate}
				handleDisplayInput={handleDisplayInput}
			/>
		</div>
	);
}

export default App;
