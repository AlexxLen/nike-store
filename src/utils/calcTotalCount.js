export const calcTotalCount = (items) => {
  return items.reduce((sum, obj) => sum + obj.count, 0);
};
