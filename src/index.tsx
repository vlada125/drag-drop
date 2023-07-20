// Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import './index.css';

// Components
import App from './App';

// Helpers
import reportWebVitals from './reportWebVitals';

// Contexts
import { TaskProvider } from './contexts/TaskContext';
import { AppProvider } from './contexts/AppContext';
import { ChatProvider } from './contexts/ChatContext';
import { ProjectProvider } from './contexts/ProjectContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppProvider>
    <TaskProvider>
      <ChatProvider>
        <ProjectProvider>
          <App />
        </ProjectProvider>
      </ChatProvider>
    </TaskProvider>
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
