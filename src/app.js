import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routers/AppRouters';
import { store } from './store/configStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const render = () => ReactDOM.render(<AppRouter/>, document.getElementById('app'));
store.subscribe(render);
