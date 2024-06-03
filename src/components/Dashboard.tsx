// src/components/Dashboard.tsx

import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Posts from './Posts';
import Comments from './Comments';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/dashboard/posts">Posts</Link></li>
          <li><Link to="/dashboard/comments">Comments</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/dashboard/posts" component={Posts} />
        <Route path="/dashboard/comments" component={Comments} />
      </Switch>
    </div>
  );
};

export default Dashboard;
