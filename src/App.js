import { useReducer } from 'react';
import './index.css';
import Items from './Items';
import { findById } from './utils';
import { actionTypes } from './store';

const uuid = () => {
   return Math.random().toString(16).slice(4);
};

const reducer = (state, action) => {
   const parent = findById(state, action.parentId);

   switch (action.type) {
      case actionTypes.ADD_FILE:
         parent.subItems.push({ type: 'file', name: action.name, id: uuid() });
         break;

      case actionTypes.ADD_FOLDER:
         parent.subItems.push({
            type: 'folder',
            name: action.name,
            id: uuid(),
            subItems: [],
         });
         break;

      case actionTypes.DELETE:
         parent.subItems = parent.subItems.filter(
            item => item.id !== action.id
         );
         break;

      default:
         break;
   }
   return [...state];
};

// [ { type: 'folder' | 'file', name: string, id: number, subItems: Item[] } ]
const initialState = [
   {
      id: 'sdfsdf',
      type: 'folder',
      name: 'root',
      subItems: [{ id: 'sdfsdffdsf', type: 'file', name: 'testfile' }],
   },
];

function App() {
   const [state, dispatch] = useReducer(reducer, initialState);

   return (
      <div className='container'>
         <Items items={state} dispatch={dispatch} />
      </div>
   );
}

export default App;
