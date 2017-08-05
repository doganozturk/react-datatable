/**
 * Unflatten a flat array of objects
 * 
 * @export
 * @param {array} data 
 * @param {object} [{ idKey, parentKey, childrenKey }={}] 
 * @returns {array}
 */
export function listToTree(data, { idKey, parentKey, childrenKey } = {}) {
  const ID_KEY = idKey || 'ID';
  const PARENT_KEY = parentKey || 'parentID';
  const CHILDREN_KEY = childrenKey || 'children';

  const tree = [];
  const childrenOf = {};

  let item;
  let id;
  let parentId;

  for (let i = 0, length = data.length; i < length; i++) {
    item = data[i];
    id = item[ID_KEY];
    parentId = item[PARENT_KEY] || 0;

    childrenOf[id] = childrenOf[id] || [];

    item[CHILDREN_KEY] = childrenOf[id];

    if (parentId !== 0) {
      childrenOf[parentId] = childrenOf[parentId] || [];

      childrenOf[parentId].push(item);
    } else {
      tree.push(item);
    }
  }

  return tree;
}
