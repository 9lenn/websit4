import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
//changes to imports 
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';



const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             Hello There
          </Typography>
      
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            I'm Glenn Phouthavong an aspring engineer trying to innovate the world. 
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
        <Grid icon={<LinkedInIcon style={{fill: "#2867B2", height:"125", width:"125"}}/>} btnTitle="LinkedIn" href="https://www.linkedin.com/in/glenn-phouthavong-3b7a691a1/" />
        <Grid icon={<GitHubIcon style={{fill: "#171515", height:"125", width:"125"}}/>} btnTitle="GitHub" href="http://www.github.com/9lenn" />
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <button size="medium" color="#171515" href="https://www.linkedin.com/in/glenn-phouthavong-3b7a691a1/" target="_blank" to = "/url">
          LinkedIn
          </button>
          <button size="medium" color="#171515" href="http://www.github.com/9lenn" target="_blank" to = "/url">
          GitHub
          </button>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
