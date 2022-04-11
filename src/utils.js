export const findById = (items, id) => {
   for (const item of items) {
      if (item.id === id) return item;
      if(item.subItems) {
        const target = findById(item.subItems, id) 
        if(target) return target;
      }
   }
};
