import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

// power of the react is wihtin the Hello component I can add something called
// props(property)& these property can be called anything think them like 
// HTML attribute
// inorder to return a single element always wrap it inside the div element,
// otherwise it will not work

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
