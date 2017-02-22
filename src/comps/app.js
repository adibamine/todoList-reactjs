import React from 'react';
import Tasks from './tasks'
import TaskForm from './tasks-Form'

const todos = [
{
  task: 'make React App',
  isCompleted: false
},
{
  task: 'eat dinner',
  isCompleted: true
}
];

export default class App extends React.Component {
	constructor() {
		super();
		this.state = { todos }
	}

	render() {
		return (
			<div>
				<TaskForm 
					createTodo = {this.createTodo.bind(this)}
					todos = {this.state.todos}
				/>
				<Tasks
					todos = {this.state.todos}
					toggleTask = {this.toggleTask.bind(this)}
					deleteTask = {this.deleteTask.bind(this)}
					updateTask = {this.updateTask.bind(this)}
				/>
			</div>
		);
	}

	toggleTask(task) {
	    const foundTask = _.find(this.state.todos, todo => todo.task === task);
	    foundTask.isCompleted = !foundTask.isCompleted;
	    this.setState({ todos: this.state.todos })
	}

	deleteTask(taskToDelete) {
		_.remove(this.state.todos, todo => todo.task === taskToDelete);
	    this.setState({ todos: this.state.todos })
	}

	updateTask(oldTask, newTask) {
		const foundTask = _.find(this.state.todos, todo => todo.task === oldTask);
		foundTask.task = newTask;
		this.setState({ todos: this.state.todos })
	}

	createTodo(task) {
	    this.state.todos.push({
	      task,
	      isCompleted: false
	    });
	    this.setState({ todos: this.state.todos })
	}
}
