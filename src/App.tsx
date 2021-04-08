import { AnalystProvider } from './context/AnalystContext'
import { ToastProvider } from './context/ToastContext';
import { Routes } from './routes';

function App() {

  return(
    <ToastProvider>
      <AnalystProvider>
        <Routes />
      </AnalystProvider>       
    </ToastProvider>
    );
}

export default App;
