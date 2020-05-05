import * as api from '../api';
import axios from "axios";


let _id = 1;
export function uniqueId() {

    return _id++;
}
function createTaskSucceed(task) {
    return {
        type: 'CREATE_TASK_SUCCEED',
        payload: {
            task,
        },
    };
}

export function createTask({ title, description, status = 'Unstarted'}) {
    return dispatch => {
        api.createTask({ title, description, status }).then(resp => {
            dispatch(createTaskSucceed(resp.data));
        });
    };
}
// export function createTask({ title, description }) {
//     return {
//         type: 'CREATE_TASK',
//         payload: {

//             id: uniqueId(),
//             title,
//             description,
//             status: 'Unstarted',
//         },
//     };
// }


function editTaskSucceeded(task) {
    return {
        type: 'EDIT_TASK_SUCCEEDE',
        payload: {
            task,
        },
    };
}

export function editTask(id, params = {}) {
    return (dispatch, getState) => {
        const task = getTaskById(getState().tasks.tasks, id);
        const updatedTask = Object.assign({}, task, params);

        api.editTask(id, updatedTask).then(resp => {
            dispatch(editTaskSucceeded(resp.data));
        });
    };
}
function fetchTasksSucceeded(tasks) {
    return {
        type: 'FETCH_TASKS_SUCCEEDED',
        payload: {
            tasks: []   
        }
    }
}

function fetchTasksFailed(error) {
    return {
        type: 'FETCH_TASKS_FAILED',
        payload: {
            error,
        },
    };
}


export function fetchTasks() {
    return dispatch => {
        dispatch(fetchTasksStarted());

        api
            .fetchTasks()
            .then(resp => {
            // setTimeout(() => {
            //     dispatch(fetchTasksSucceeded(resp.data));
            // }, 2000);
             throw new Error('Oh Hey! Unable to fetch Tasks!'));
            })
            .catch(err => {
                dispatch(fetchTasksFailed(error.message));
            });
        };
};


function fetchTasksStarted() {
    return (
        type: 'FETCH_TASKS_STARTED',
    );
}

