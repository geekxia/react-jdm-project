import React from 'react';

import { Provider } from 'react-redux'
import store from '@/store'

// import Test from '@/components/Test'
import Song from '@/components/Song'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Song></Song>
      </div>
    </Provider>
  );
}

export default App;
