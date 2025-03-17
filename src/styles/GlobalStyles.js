import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --background-light: #f5f5f5;
    --background-dark: #1a1a1a;
    --text-light: #333333;
    --text-dark: #f5f5f5;
    --primary: #4a6da7;
    --secondary: #8ba3c7;
    --accent: #c29545;
    --gray-100: #f8f9fa;
    --gray-200: #e9ecef;
    --gray-300: #dee2e6;
    --gray-400: #ced4da;
    --gray-500: #adb5bd;
    --gray-600: #6c757d;
    --gray-700: #495057;
    --gray-800: #343a40;
    --gray-900: #212529;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'Segoe UI', 'Arial', sans-serif;
    background-color: var(--background-light);
    color: var(--text-light);
    transition: background-color 0.3s, color 0.3s;
  }

  body.dark-mode {
    background-color: var(--background-dark);
    color: var(--text-dark);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--gray-200);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gray-500);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--gray-600);
  }
`;

export default GlobalStyles;
