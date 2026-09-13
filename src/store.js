import { findById } from './utils';

export const actionTypes = {
   ADD_FILE: 'ADD_FILE',
   ADD_FOLDER: 'ADD_FOLDER',
   DELETE: 'DELETE',
};

const uuid = () => Math.random().toString(16).slice(4);

export const initialState = [
   {
      id: 'sdfsdf',
      type: 'folder',
      name: 'root',
      subItems: [{ id: 'sdfsdffdsf', type: 'file', name: 'testfile' }],
   },
];

export const reducer = (state, action) => {
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
