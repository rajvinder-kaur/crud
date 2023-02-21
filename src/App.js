// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import List from './component/List';
// import Note from './component/Note';
import { store } from './redux/store/store';


function App() {
  return (

   <Provider store = {store}>
      <div className="App">
     <List/>
    </div>
   </Provider>
  );
}

export default App;
