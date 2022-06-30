import GlobalStyle from "./globalStyles"
import {ThemeProvider} from "styled-components"
import {lightTheme} from "./components/Theme"
import {darkTheme} from "./components/Theme"
import { Route, Switch, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

//components
import Main from './components/Main';
import AboutPage from "./components/AboutPage"
import MySkillsPage from "./components/MySkillsPage"
import Projects from "./components/Projects"
import SoundBar from "./components/SoundBar"
import ContactPage from "./components/ContactPage"

function App() {

  const location = useLocation()
  return <>
  <GlobalStyle/>

    <ThemeProvider theme={lightTheme}>
    <SoundBar />
    
    <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/skills" component={MySkillsPage} />
      <Route exact path="/projects" component={Projects} />
    </Switch>
    </AnimatePresence>

    </ThemeProvider>
    
    </>
    
}

export default App

