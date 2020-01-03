import React from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar'
import { makeStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Typography from '@material-ui/core/Typography';

const darkTheme = createMuiTheme({
  palette: {
      // Switching the dark mode on is a single property value change.
      type: 'dark',
      primary: red,
  },
});

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <SideBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
