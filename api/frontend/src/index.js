import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  "./index.css";
import { TaskContextProvider } from './taskContext/TaskContext';


ReactDOM.render(
    <React.StrictMode>
        <TaskContextProvider>
            <App/>
        </TaskContextProvider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);