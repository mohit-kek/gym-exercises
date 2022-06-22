import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';

function App() {
  return (
    <Box width="400px" sx={{ width: { x1: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
