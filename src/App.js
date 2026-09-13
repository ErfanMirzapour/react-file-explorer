import { useReducer } from 'react';
import './index.css';
import Items from './Items';
import { initialState, reducer } from './store';

function App() {
   const [state, dispatch] = useReducer(reducer, initialState);

   return (
      <div className='container'>
         <Items items={state} dispatch={dispatch} />
      </div>
   );
}

export default App;
