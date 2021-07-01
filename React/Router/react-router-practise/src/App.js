import { Route, Switch, Redirect } from 'react-router-dom'

import Layout  from './components/layout/layout'
import NotFound from './pages/NotFound'

// import AllQueues from './pages/AllQuotes'
// import NewQuotes from './pages/NewQuote'
// import QuoteDetails from './pages/QuoteDetail'

import React,{Suspense} from 'react';

const AllQueues = React.lazy(()=>import('./pages/AllQuotes'));
const NewQuotes = React.lazy(()=>import('./pages/NewQuote'));
const QuoteDetails = React.lazy(()=>import('./pages/QuoteDetail'))



function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading....</p>} >
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'></Redirect>
        </Route>
        <Route path="/quotes" exact>
          <AllQueues></AllQueues>
        </Route>
        <Route path="/quotes/:quoteId" >
          <QuoteDetails></QuoteDetails>
        </Route>
        <Route path="/new-quote">
          <NewQuotes></NewQuotes>
        </Route>
        <Route path="*">
               <NotFound />
        </Route>
      </Switch>
      </Suspense>
    </Layout>

  );
}

export default App;
