import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Alert } from './components/Alert'
import { Navbar } from './components/Navbar'
import { AlertState } from './context/alert/AlertState'
import { FirebaseState } from './context/firebase/FirebaseState'

function App() {
  return (
    <AlertState>
      <FirebaseState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path={'/'} exact component={Home} />
              <Route path={'/about'} component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </FirebaseState>
    </AlertState>
  );
}

export default App;
