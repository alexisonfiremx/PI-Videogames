import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Home from './components/Home/Home.jsx'
import VideogameCreate from './components/VideogameCreate/VideogameCreate'
import Detail from './components/Detail/Detail.jsx';
import Error404 from './components/404/404';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #0D141E;
    font-family: 'Space Grotesk', sans-serif;
    color: #FFFFFF
  }
`

function App() {
  return (
    <div className="App">
    <GlobalStyle />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/videogame' component={VideogameCreate} />
          <Route exact path='/videogame/:id' component={Detail} />
          <Route component={Error404} />
        </Switch>
    </div>
  );
}

export default App;
