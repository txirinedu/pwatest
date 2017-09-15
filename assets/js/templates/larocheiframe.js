templates.larocheiframe = function(data){
    var content = `
        <style type="text/css">
         

            #content
            {
                position:absolute; left: 0; right: 0; bottom: 0; top: 0px; 
            }
        </style>
        <div id="content">
		  <iframe id="homneIframe" style="visibility: hidden;" onload="controllers.home_frame_load();" src="http://www.laroche-posay.es/puntos-de-venta/internacional/localizador-de-puntos-de-venta-sl.aspx" width="100%" height="100%" frameborder="0"></iframe>
		</div>
    `;
    return content;
};