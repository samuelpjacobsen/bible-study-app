import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #f5f5f5;
    --text-color: #333333;
    --primary-color: #4a6fa5;
    --secondary-color: #e9ecef;
    --accent-color: #6c757d;
    --success-color: #4d8066;
    --border-color: #dee2e6;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
    --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-family);
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #2c4c7c;
    }
  }

  button {
    cursor: pointer;
    font-family: var(--font-family);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 1rem;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .card {
    background: white;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    padding: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-md);
    }
  }

  .btn {
    display: inline-block;
    background: var(--primary-color);
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: var(--radius-sm);
    font-size: 1rem;
    transition: background 0.3s ease;
    
    &:hover {
      background: #2c4c7c;
    }

    &:disabled {
      background: var(--accent-color);
      cursor: not-allowed;
    }
  }
`;

export default GlobalStyle;