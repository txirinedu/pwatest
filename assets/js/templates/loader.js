templates.loader = function(data){
    var content = `
    	<div id="loader"><br>
    	<br>
        <center>
            <!-- MDL Spinner Component -->
			<div class="mdl-spinner mdl-js-spinner is-active"></div>
        </center>
        </div>
        <!-- Colored FAB button with ripple -->
        <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
          <i class="material-icons">notifications</i>
        </button>
    `;
    return content;
};