import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage2'; // Import your HomePage component

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* Define your other routes here */}
      </Switch>
    </div>
  );
};

export default App;
