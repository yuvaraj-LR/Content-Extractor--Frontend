import './App.css';
import ContentProvider from './context/content.context.js';
import { ContentRouter } from './pages/Router.js';

function App() {
  return (
    <ContentProvider>
      <div className="App">
        <div className="container">
          <ContentRouter />
        </div>
      </div>
    </ContentProvider>
  );
}

export default App;
