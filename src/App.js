import './App.css';
import { Header, Footer } from "../src/components/index"
import AllRoutes from '../src/routes/AllRoutes'


function App() {
  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
