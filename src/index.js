import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Main Component/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));  // render main component in which all other components are nested in. 
// if changes need to be made, they can be made to individual components... 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
