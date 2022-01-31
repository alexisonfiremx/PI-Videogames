import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Home from './components/Home/Home.jsx'
import VideogameCreate from './components/VideogameCreate/VideogameCreate'
import Detail from './components/Detail';
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
          <Route path='/home' component={Home} />
          <Route exact path='/videogame' component={VideogameCreate} />
          <Route path='/videogame/:id' component={Detail} />
        </Switch>
    </div>
  );
}

export default App;
