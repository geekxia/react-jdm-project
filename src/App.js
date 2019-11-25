import React from 'react';

import { Provider } from 'react-redux'
import store from '@/store'

// import Test from '@/components/Test'
// import Song from '@/components/Song'
import '@/assets/css/app.scss'

import 'antd-mobile/dist/antd-mobile.css'
import { Button } from 'antd-mobile'

import { HashRouter, Route, Switch } from 'react-router-dom'
import routes from '@/routes'

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="app">
          <Switch>
          {
            routes.map((ele, idx)=>{
              return(
                <Route key={ele.id} exact path={ele.path} component={ele.component}></Route>
              )
            })
          }
          </Switch>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
