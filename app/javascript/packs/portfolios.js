// alert('.js');
import sortable from '../html.sortable.js';
// console.log('sortable: ', typeof sortable)

// sortable('.sortable');


// let ready = undefined;
// ready = () => {
//   console.log('hi~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
//   $('.sortable').sortable();

//   return;
// }
// $(document).ready(ready);

$( () => {
  // $('.sortable').sortable();
  sortable('.sortable');
  })