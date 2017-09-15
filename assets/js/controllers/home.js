controllers.home_page = function(data, params){
   /* var all_posts = JSON.parse(data);

    var posts_to_show = 3;
    var template_context = [];
    for (var i = 0; i < posts_to_show; i++){
        var post = all_posts[i];
        var item = {
            'link': utils.get_link(post),
            'title': post.post.replace(/-/g, ' '),
            'snippet': post.snippet,
            'published_on': post.added_on,
        };
        template_context.push(item);
    }

    //get recent posts
    var recent_posts = templates.recent_posts(template_context);

    //get hello text
    var hello_text = templates.hello_text();

    var final_content = hello_text + recent_posts;*/
   // var loader = templates.loader();
   // var final_content = loader + templates.larocheiframe();
   /*var final_content = templates.larocheiframe();
    utils.append(
        'page-content',
        final_content
    );*/


        // Are Notifications supported in the service worker?  
      if (!('showNotification' in ServiceWorkerRegistration.prototype)) {  
        console.warn('Notifications aren\'t supported.');  
        return;  
      }

      // Check the current Notification permission.  
      // If its denied, it's a permanent block until the  
      // user changes the permission  
      if (Notification.permission === 'denied') {  
        console.warn('The user has blocked notifications.');  
        return;  
      }

      // Check if push messaging is supported  
      if (!('PushManager' in window)) {  
        console.warn('Push messaging isn\'t supported.');  
        return;  
      }





};

controllers.home_page_error = function(data, params){
    utils.render(
        'page-content',
        data
    );
};

controllers.show_loader = function(element) {
    utils.render(
        element,
        templates.loader()
    );
}

controllers.home_frame_load = function() {
   //alert("iframe loaded")
    var loader = document.getElementById("loader");  
    loader.style.visibility="hidden";
    var iframe = document.getElementById("homneIframe");  
    iframe.style.visibility="visible";
}