import sortable from '../html.sortable.js';

$( () => {
  sortable('.sortable', {
    forcePlaceholderSize: true,
    placeholderClass: 'row'
  });
})