import styles from './Items.module.css';
import { actionTypes } from './store';

const Items = ({ items, dispatch, id }) => {
   const add = (actionType, id) => {
      const name = prompt('Enter the name: ');
      dispatch({ type: actionType, name, parentId: id });
   };

   const deleteNode = (parentId, id) => {
      dispatch({ type: actionTypes.DELETE, parentId, id });
   };

   return (
      <ul>
         {items.map(item => {
            return (
               <li key={item.id} onClick={() => {}}>
                  {item.subItems ? (
                     <details>
                        <summary className={styles.row}>
                           <span style={{display: 'flex'}}>
                              <div className='marker'>&gt;</div>
                              {item.name}
                           </span>
                           <div className={styles.actions}>
                              <button
                                 onClick={() =>
                                    add(actionTypes.ADD_FILE, item.id)
                                 }
                              >
                                 file
                              </button>
                              <button
                                 onClick={() =>
                                    add(actionTypes.ADD_FOLDER, item.id)
                                 }
                              >
                                 folder
                              </button>
                              <button onClick={() => deleteNode(id, item.id)}>
                                 delete
                              </button>
                           </div>
                        </summary>
                        <Items
                           items={item.subItems}
                           dispatch={dispatch}
                           id={item.id}
                        />
                     </details>
                  ) : (
                     <div className={styles.row}>
                        <span>{item.name}</span>
                        <div className={styles.actions}>
                           <button onClick={() => deleteNode(id, item.id)}>
                              delete
                           </button>
                        </div>
                     </div>
                  )}
               </li>
            );
         })}
      </ul>
   );
};

export default Items;
