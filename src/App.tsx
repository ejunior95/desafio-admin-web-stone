import { AnalystProvider } from './context/AnalystContext'
import { Routes } from './routes';

function App() {

  return(
    <AnalystProvider>
        <Routes />
    </AnalystProvider>       
    );
}

export default App;
