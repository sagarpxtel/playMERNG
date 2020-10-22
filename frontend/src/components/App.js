import React from 'react';
import styled from 'styled-components';

const Button = ({ className, children }) => 
  <button className={className}>{children}</button>

const ButtonBlue = styled(Button)`color: blue`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonBlue>Blue Button</ButtonBlue>
      </header>
    </div>
  );
}

export default App;
