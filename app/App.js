import { Provider } from 'react-redux';
import { store,persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import AuthNav from './navigation/authNav';


export default function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthNav/>
  </PersistGate>
</Provider>
  );
}


