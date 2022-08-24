
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AddServiceProvider, Login, Navbar, ServiceProvidersList } from './components';
import UpdateServiceProvider from './components/UpdateServiceProvider';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route index element={<ServiceProvidersList/>}/>
        <Route path="/" element={<ServiceProvidersList/>}/>
        <Route path="/serviceproviders" element={<ServiceProvidersList/>}/>
        <Route path='/addserviceprovider' element={<AddServiceProvider/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/updateserviceprovider/:id' element={<UpdateServiceProvider/>}/>
      </Routes>
    </div>
  );
}

export default App;
