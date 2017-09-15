templates.notif_on = function(data){
    var content = `
    	<div id="loader"><br>
    	<br>
        <center>
            <!-- Colored FAB button with ripple -->
            <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
              <i class="material-icons">notifications</i>
            </button>
        </center>
        </div>
        
    `;
    return content;
};

templates.notif_off = function(data){
    var content = `
        <div id="loader"><br>
        <br>
        <center>
            <!-- Colored FAB button with ripple -->
            <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
              <i class="material-icons">notifications_off</i>
            </button>
        </center>
        </div>
        
    `;
    return content;
};

templates.notif_disabled = function(data){
    var content = `
        <div id="loader"><br>
        <br>
        <center>
            <!-- Colored FAB button with ripple -->
            <button class="mdl-button mdl-js-button mdl-button--fab" disabled>
              <i class="material-icons">notifications_off</i>
            </button>
        </center>
        </div>
        
    `;
    return content;
};