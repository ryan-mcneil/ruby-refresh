import consumer from "./consumer"

const App = { global_chat: undefined }

$(document).on('turbolinks:load', function () {
  let comments = $('#comments'); 

  if (comments.length > 0) {
    let blogId = comments.data('blog-id');

    App.global_chat = consumer.subscriptions.create({
      channel: "BlogsChannel",
      blog_id: blogId
    }, {
      connected() {
        // Called when the subscription is ready for use on the server
        console.log("Connected!");
      },

      disconnected() {
        // Called when the subscription has been terminated by the server
      },

      received(data) {
        console.log("Receiving:");
        console.log(data['comment']);
        comments.append(data['comment'])
      },

      send_comment(comment, blog_id) {
        this.perform('send_comment', {
          comment: comment,
          blog_id: blog_id
        });
      }
    });
  }

  $('#new_comment').submit(e => {
    let $this = $(this);
    let textArea = $this.find('#comment_content');
    if ($.trim(textArea.val()).length > 1) {
      App.global_chat.send_comment(textArea.val(), comments.data('blog-id'));
      textArea.val('');
    };
    e.preventDefault();
    return false;
  })
});
