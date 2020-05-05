import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import tasks from './reducers';
import tasksReducer from './reducers'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';  

const rootReducer = (state = {}, action) => {
  return {
    tasks: tasksReducer(state.tasks, action),
    projects: projectsReducer(state.projects, action),
  };
};

const store = createStore(
  rootReducer,
//  tasks,
 // devToolsEnhancer(),
  composeWithDevTools(applyMiddleware(thunk))
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
