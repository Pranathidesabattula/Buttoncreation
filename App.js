import React from 'react';
import App1 from "./App1";

function App() {
    let message="conters that update togethr";
  return (
        <div>
            <App1 message={message} />
        </div>
  );
}

export default App;
