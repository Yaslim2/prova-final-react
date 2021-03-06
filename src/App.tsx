import Routes from "./routes/routes";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return <>
    <Routes />
    <ToastContainer theme="colored" position='top-center' limit={3} />
  </>;
}

export default App;
