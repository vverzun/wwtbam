import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useTSelector } from '@hooks';
import { Quiz, Result, Start } from '@pages';
import { persistor, store } from '@store';
import './App.style.css';

function App() {
  const status = useTSelector((state) => state.quiz.status);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {{
          'not-started': <Start />,
          'in-progress': <Quiz />,
          finished: <Result />,
        }[status]}
      </PersistGate>
    </Provider>
  );
}

export default App;
