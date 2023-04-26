import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'antd/dist/reset.css'
import './App.css';
import Home from './pages/Home'

// import { feedImages } from './api';
// feedImages();


const queryClient = new QueryClient()

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
    
  );
}

export default App;
