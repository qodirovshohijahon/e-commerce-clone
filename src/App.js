import React, { Component } from 'react';
import './App.css';
import TasksPage from './components/TasksPage';
import "../src/components/task_style.css";
import { connect } from 'react-redux';
import { createTask, editTask, fetchTasks } from './actions';
import FlashMessage from './components/FlashMessage';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTasks());
  }
  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask({ title, description }));
  }
  onStatusChange = (id, status) => {
    this.props.dispatch(editTask(id, (status)));
  }
 
  render() {
    console.log('props from AppL: ', this.props);
    
    return (
      <div class="container">
        {
        this.props.error &&
           <FlashMessage 
              message={this.props.error} 
            />
         }
      </div>
      <div className="main­-content">
        <TasksPage 
          tasks={this.props.tasks}
          onCreateTask={this.onCreateTask}
          onStatusChange={this.onStatusChange}  
          isLoading={this.props.isLoading}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { tasks, isLoading, error } = state.tasks;
  return { tasks, isLoading ,  error};//      tasks: state.tasks 
}

export default connect(mapStateToProps)(App);


/*
import { createStore } from 'redux';
function counterReducer(state = 0, action) {    ** The store requires at least one reducer function(counterReducer)  **
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
return state;
}
const store = createStore(counterReducer);     ** Creates a store with the reducer **
  console.log(store.getState());    ** Reads the current state of the store **
  store.subscribe(() => {           ** Does smth after the store has updated **
    console.log('current state: ', store.getState());
  });

  store.dispatch({ type: 'INCREMENT' }); ** Sends a new action to the reducers to update the store **
  */