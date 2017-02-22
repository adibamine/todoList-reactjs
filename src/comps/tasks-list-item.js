import _ from 'lodash';
import React from 'react';

export default class TasksListItem extends React.Component {
	constructor() {
		super();
		this.state = {
			isEditing: false
		};
	}

	renderTaskSection() {
		const { task, isCompleted } = this.props;
		const taskStyle = {
			color: isCompleted ? 'green' : 'red'
			}
		if(this.state.isEditing) {

			return(
				<td>
					<form>
						<input type="text" ref="editedTask" defaultValue={task}/>
					</form>
				</td>
			);

		}
			return(
			<td style={taskStyle}
				onClick={this.props.toggleTask.bind(this,task)}>
					{task}
			</td>
		);
	}

	renderTaskAction() {
		if(this.state.isEditing)
		{
			return (
				<td>
					<button onClick={this.onSaveClick.bind(this)}>Save</button>
					<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
				</td>
			);
		}
		return (
			<td>
				<button onClick={this.onEditClick.bind(this)}>Edit</button>
				<button onClick={this.props.deleteTask.bind(this,this.props.task)}>Delete</button>
			</td>
		);
	}

	render() {
		return(
			<tr>
				{this.renderTaskSection()}
				{this.renderTaskAction()}
			</tr>
		);
	}

	onEditClick() {
		this.setState({isEditing : true});
	}

	onCancelClick() {
		this.setState({isEditing : false});
	}

	onSaveClick(event) {
		event.preventDefault();
		const old = this.props.task;
		const newer = this.refs.editedTask.value;
		this.props.updateTask(old,newer);
		this.setState({isEditing : false});
	}

}