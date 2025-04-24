import React from 'react';
import { Header } from './components/Header/Header';

import './styles/global.css'
import { Tasks } from './components/Tasks/Tasks';
import { Refs } from './components/Concepts/Refs';
import { Memoization } from './components/Concepts/Memoization';
import { TasksProvider } from './context/TasksContext';

function App() {
  return (
    <TasksProvider>
      <Header />

      <Tasks />

      {/* <Refs /> */}

      {/* <Memoization financialData={{ incomes: [50, 30, 20], outcomes: [5, 8, 4] }}/> */}
    </TasksProvider>
  );
}

export default App;
