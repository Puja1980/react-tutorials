import store from './Store/store';
import Card from './components/Card'
import { Provider } from "react-redux";


function App() {

  return (
    <Provider store={store} >
      <Card/>
    </Provider>
  )
}

export default App
