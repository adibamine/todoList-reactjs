import _ from 'lodash';
import React from 'react';
import Header from './header'
import TasksListItem from './tasks-list-item'

export default class Tasks extends React.Component {
	renderTasks() {
		return _.map(this.props.todos, (todo, index) => <TasksListItem key={index} {...todo} {...this.props} />);
	}
	render() {
		console.log(this.props.todos);
		return (
			<table>
				<Header />
				<tbody>
					{ this.renderTasks() }
				</tbody>
			</table>
		);
	}
}