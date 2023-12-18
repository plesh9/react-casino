import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { router } from 'app/router';
import { store } from 'app/store';

import 'assets/styles/globals.scss';

const App = () => {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};

export default App;
