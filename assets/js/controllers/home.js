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
      /*if (!('showNotification' in ServiceWorkerRegistration.prototype)) {  
        console.warn('Notifications aren\'t supported.'); 
        var final_content = templates.notif_disabled(); 
         utils.render(
            'page-content',
            final_content
        );
        return;  
      }*/

      // Check if push messaging is supported  
      if (!('PushManager' in window)) {  
        console.warn('Push messaging isn\'t supported.');
        var final_content = templates.notif_disabled(); 
         utils.render(
            'page-content',
            final_content
        ); 
        return;  
      }

      // Check the current Notification permission.  
      // If its denied, it's a permanent block until the  
      // user changes the permission  
      if (Notification.permission === 'denied') {  
        console.warn('The user has blocked notifications.');  
        return;  
      }

      var final_content = templates.notif_off(); 
         utils.render(
            'page-content',
            final_content
        );




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

controllers.home_subscribe_user = function() {
   alert("home_subscribe_user")
   var applicationServerKey = urlB64ToUint8Array('BI6pCNNG-TV_EfOnR6y8w55YxASDV483cdpiWLuZfRTDW18MY0o4UVAo2TMYsDMQn9yffC7FWPBDFQOk2FZxtt8');
    swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
    })
        .then(function (subscription) {
        console.log('User is subscribed:', subscription);
        console.log('webpush: ');
        console.dir(webPush);
        //this.isSubscribed = true;
        localStorage.setItem("subscription", JSON.stringify(subscription));
        //webPush.updateSubscriptionOnServer(subscription, userId);
        //resolve(subscription);
        //updateBtn();
    })
        .catch(function (err) {
        console.log('Failed to subscribe the user: ', err);
        //updateBtn();
        //reject(err);
    });
    
}

controllers.home_unsubscribe_user = function() {
   alert("home_unsubscribe_user")
    
}

 function urlB64ToUint8Array(base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');
        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);
        for (var i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    };