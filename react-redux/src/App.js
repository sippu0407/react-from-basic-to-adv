import appStore from "./utils/appStore";
import {Provider} from 'react-redux';
import Header from './components/Header';
function App() {
  return (
    <Provider store={appStore}>
          <Header/>
    </Provider>
   
  );
}

export default App;
