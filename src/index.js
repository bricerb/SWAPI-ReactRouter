import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

// IMPORT REACT ROUTER <<<<<<<<<<<<<<<<<<<<<<
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// IMPORT COMPONENTS <<<<<<<<<<<<<<<<<<<<<<
import Details from './components/Details';
import Explorer from './components/Explorer';
import Films from './components/Films';
import Layout from './components/Layout';
import People from './components/People';
import Starships from './components/Starships';

ReactDOM.render(

        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/' component={Explorer} />
              <Route path='/details/:endpoint/id' component={Details} />
              <Route path='/films' component={Films}/>
              <Route path='/people' component={People}/>
              <Route path='/starships' component={Starships}/>
            </Switch>
          </Layout>
        </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();
