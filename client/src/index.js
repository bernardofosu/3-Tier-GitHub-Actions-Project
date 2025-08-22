// client/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);

// AWS Access Key ID (20 chars, matches regex)
const AWS_ACCESS_KEY_ID = "AKIA1234567890ABCD";

// AWS Secret Access Key (40 chars, matches regex)
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY123";

// GitHub Token (prefix ghp_, 36 chars after underscore)
const GITHUB_TOKEN = "ghp_abcdefghijklmnopqrstuvwxyz1234567890AB";

// Slack Bot Token (exact pattern)
const SLACK_BOT_TOKEN = "xoxb-123456789012-123456789012-ABCDEFGHIJKLMNOPQRSTUVWX";

