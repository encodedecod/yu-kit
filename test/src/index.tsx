import { createRoot } from 'react-dom/client';
import App from './App';

import '@yu-kit/styles/reset.scss';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<App />);
}
