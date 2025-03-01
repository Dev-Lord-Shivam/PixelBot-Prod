
import { Box, Container } from '@chakra-ui/react';
import Layout from './Pages/Layout';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ContentPage from './Pages/ContentPage';
import { AuthModalProvider, ContactModelProvider } from './context/AuthContext';
import { Toaster } from './components/ui/toaster';
import ScrollToTop from './components/CustomComponents/ScrollToTop';
import HistoryPage from './Pages/HistoryPage';
import PrivateRoute from './context/PrivateRoute';

function App() {
  return (
    <>
      <AuthModalProvider>
        <ContactModelProvider>
        <Box w={'full'} position={'relative'}>
          <Container maxW={'full'} p={0}>
            <Layout>
            <ScrollToTop />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/content/:id" element={<PrivateRoute element={<ContentPage />} />} />
                <Route path='/history/:id' element={<PrivateRoute element={<HistoryPage />} />}/>
              </Routes>
            </Layout>
          </Container>
        </Box>
        <Toaster />
        </ContactModelProvider>
      </AuthModalProvider>
    </>
  );
}

export default App;
