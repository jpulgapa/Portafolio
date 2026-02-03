import { StrictMode } from 'react';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

serviceWorkerRegistration.register({
  onUpdate: async (registration) => {
    if (registration && registration.waiting) {
      await registration.unregister();
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      window.location.reload();
    }
  },
});
