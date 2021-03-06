import React from 'react';
import PhotoComponent from './PhotoComponent';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <PhotoComponent/>
      <style global jsx >{`
  body {
    font-family: Helvetica;
  }
  .box {
    border: none;
    display: block;
    border-bottom: 2px solid #fff;
    margin-bottom: 10px;
  }
  .box:hover {
    border-bottom: 2px solid #ccc;
    outline: 0;
  }
  a {
    color: #888;
    text-decoration: none;
  }
`}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
