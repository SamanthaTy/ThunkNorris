import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

import store from './store'

import Widget from './components/Widget/Widget';

const root = createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Widget />
  </Provider>
);
