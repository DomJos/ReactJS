import * as React from 'react'
import * as ReactDOM from 'react-dom'


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>

);

ReactDOM.render(
  element,
  document.getElementById('root')
);


function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

/*
ReactDOM.render(
  <div className="App">
    <header className="App-header">
      <img src="/logo.svg" className="App-logo" alt="logo" />
      <h3> Hi</h3>
      <p>
        Edit <code>src/App.js</code> to get started!
      </p>
      <button onClick={activateLasers}>
  Activate Lasers
</button>
    </header>
  </div>,
  document.getElementById('root')
);
*/