import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Dog from './Dog'

export default function App() {
    return (
        <Switch>
        <Route exact path="/" component={Home} />
    <Route path="/:id" component={Dog} />
    </Switch>
)
}



// import React from 'react';
// import './App.css';
// import Header from './Header.js';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Header></Header>
//
//       </header>
//     </div>
//   );
// }
//
// export default App;
//
//

// <a
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
//     >
//     Search
//     </a>
