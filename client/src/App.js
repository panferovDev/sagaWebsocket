import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AppNavBar from './Components/AppNavBar/AppNavBar';
import MainPage from './Components/MainPage/MainPage';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import { checkUser } from './Redux/Slices/userSlice';
import CodePage from './Components/Code/CodePage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <Container>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/code/:id" element={<CodePage />} />
      </Routes>
    </Container>
  );
}

export default App;
