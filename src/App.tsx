import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useTSelector } from '@hooks';
import { Quiz, Start } from '@pages';
import { persistor, quizSelector, store } from '@store';
import './App.style.css';

function App() {
  const status = useTSelector(quizSelector.selectStatus);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {{
          'not-started': <Start />,
          'in-progress': <Quiz />,
          finished: <div />,
        }[status]}
      </PersistGate>
    </Provider>
  );
}

export default App;
