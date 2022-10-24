import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';
import MyComponent from './MyComponent';


class App extends Component {
  constructor(props) {
    super(props);
    this.onClickBtn = this.onClickBtn.bind(this);

  }
  
  onClickBtn() {
    console.log('Button has been clicked!');
  }

  render() {
    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.onClickBtn} />
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
