import './App.css';
import WebstractAnimations from './components/Animation.jsx';
import ContentProvider from './context/content.context.js';
import ErrorBoundary from './custom/ErrorBoundary.js';
import { ContentRouter } from './pages/Router.js';
import { StaticImage } from './static/image.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <ErrorBoundary>
          <ContentProvider>

            <WebstractAnimations />

            <img src={StaticImage.BackgroundImage} className='bg' />

            <ContentRouter />
          </ContentProvider>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
