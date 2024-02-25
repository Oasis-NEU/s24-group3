import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
function ExampleComponent() {
  return (
    <div className="my-app">
      This text uses Roboto font.
    </div>
  );
}

export default ExampleComponent;
