import React from 'react';
import "./task_style.css";

const TASK_STATUSES = 
[
    'Unstarted',
    'In Progress',
    'Completed'
]

const Task = props => {
    return (
        <div className="tasks">
            <div className="task-header">
                <div>
                    {props.task.title}
                </div>
                <select 
                    value={props.task.status}
                    onChange={onStatusChange}
                >
                    {TASK_STATUSES.map(status => (
                        <option 
                            key={status} 
                            value={status}
                        >
                            {status}
                        </option>
                    ))}
                </select>
            </div>
            <hr />
            <div className="task-body">
                {props.task.description}
            </div>
        </div>
    );
    function onStatusChange(e) {
        props.onStatusChange(props.task.id, e.target.value)
    }
}

export default Task
