
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from './actions/index';


const App = () => {
  const myStore = useSelector((store) => store.CountReducer);
  const dispatch = useDispatch()
  return (
   <>
    <div className="App">
      <header className="App-header">
     <h1>Increment/Decrement Counter</h1>
     <h4>Using React and Redux</h4>
     <div>
       <button onClick={() => console.log(dispatch(incNumber()))}>+</button>
     
     {myStore}
     
       <button onClick={() => dispatch(decNumber())}>-</button>
     </div>
      </header>
    </div>
   </>
  );
}

export default App;
