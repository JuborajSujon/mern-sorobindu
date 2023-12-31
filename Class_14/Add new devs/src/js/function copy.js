/**
 * Data send to localStorage
 * @param {*} key
 * @param {*} arr
 */

function dataSend(key, arr) {
  let data = JSON.stringify(arr);
  localStorage.setItem(key, data);

  return true;
}

/**
 * Data get from localStorage
 * @param {*} key
 * @returns
 */
function dataGet(key) {
  let data = localStorage.getItem(key);

  return data ? JSON.parse(data) : false;
}
