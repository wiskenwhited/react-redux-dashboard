import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';
import 'typeface-roboto'
import './index.css'
injectTapEventPlugin();

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>,
    document.getElementById('root')
);
registerServiceWorker();
