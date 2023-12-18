import { RouterProvider } from 'react-router-dom';
import { router } from 'app/router';

import 'assets/styles/globals.scss';

const App = () => {
  return (
    <div className="wrapper">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
