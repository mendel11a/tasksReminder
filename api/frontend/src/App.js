import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import CreateTaskScreen from './Components/CreateTaskScreen';
import AllTasksScreen from './Components/AllTasksScreen';

function App() {

  return (
    <BrowserRouter>
      <div className="grid-container">
        <main className="main">
          <>
            <Route path="/list-timers" component={AllTasksScreen} />
            <Route path="/timer"  component={CreateTaskScreen} />
            <Route path="/" exact={true} component={CreateTaskScreen} />
          </>
        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;
