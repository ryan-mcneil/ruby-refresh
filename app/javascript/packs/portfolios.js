import sortable from '../html.sortable.js';

const setPostions = () => {
  $('.card').each( function(i) {
    $(this).attr('data-pos', i+1)
  })
};

$( () => {
  setPostions();
  if (sortable('.sortable')[0]) {
    sortable('.sortable', {
      forcePlaceholderSize: true,
      placeholderClass: 'row'
    });
    sortable('.sortable')[0]
      .addEventListener('sortupdate', (e, i) => {
        console.log(e);
        let updatedOrder = [];
        setPostions();
        $('.card').each( function(i) {
          updatedOrder.push({
            id: $(this).data("id"),
            position: i + 1
          })
        })
        console.log('updatedOrder: ', updatedOrder)
        $.ajax({
          method: 'PUT',
          beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
          url: '/portfolios/sort',
          data: {
            order: updatedOrder
          }
  
        })
      })
  }
})
