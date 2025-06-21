import './App.css';
import ContentProvider from './context/content.context.js';
import ErrorBoundary from './custom/ErrorBoundary.js';
import { ContentRouter } from './pages/Router.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <ErrorBoundary>
          <ContentProvider>
            <ContentRouter />
          </ContentProvider>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
