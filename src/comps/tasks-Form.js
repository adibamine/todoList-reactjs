import _ from 'lodash'
import React from 'react';

export default class TaskForm extends React.Component {
	constructor(){
		super();

		this.state = {
			error: null
		};
	}

	renderError() {
		if(!this.state.error) return null;
		return <div style={{ color: 'red' }}>{this.state.error}</div>;
	}

	render() {
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placeholder="What do i need to do?" ref="createInput" />
				<button>ADD</button>
				{this.renderError()}
			</form>
		);
	}

	handleCreate(event) {
		event.preventDefault();
		const createInput = this.refs.createInput;
		const task = createInput.value;
		const validation = this.validate(task);
		if(validation) {
			console.log("in validation");
			this.setState({ error : validation });
			return;
		}

		console.log("out of validation");
		this.setState({ error: null });
		this.props.createTodo(task);
		this.refs.createInput.value = '';
	}

	validate(typedTask) {
		if (!typedTask)
			return "Please enter a valid task";
		const foundTask = _.find(this.props.todos, todo => todo.task === typedTask);
		if (foundTask)
			return "This task already exists";
		return null;
	}
}