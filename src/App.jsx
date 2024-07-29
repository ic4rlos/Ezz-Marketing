
import Homepage from './components/Homepage';
import GlobalContextsProvider from './components/plasmic/ez_marketing_platform/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Homepage /></GlobalContextsProvider>);
}

export default App;
  