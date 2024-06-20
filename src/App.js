import logo from './logo.svg';
import './App.css';
import PrimaryButton from './components/button/PrimaryButton';
import { bone, copper, copperLight, dun, faluRed, licorice, sealBrown } from './constants/color';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const theme = createTheme({
  palette: {
    sealBrown: sealBrown,
    licorice: licorice,
    dun: dun,
    copper: copper,
    copperLight: copperLight,
    bone: bone,
    faluRed: faluRed,
  },
});

function App() {

  const appContainer = {
    padding: "20px"
  }
  return (
    <ThemeProvider theme={theme} style={appContainer}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='login' element={<Login />} />
          <Route exact path='register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
