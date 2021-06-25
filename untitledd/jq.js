$(function(){
    var klgd = $('<img />').attr('src','jq/klngr.png');
    var msk = $('<img />').attr('src','jq/msk.png');
    var spb = $('<img />').attr('src','jq/spb.png');
    $('div#imap> a').click(function(event){
        var elId = $(this).attr('id');
        switch(elId){
             case 'klgd': 
                $('#container:not(:has(img))').append(klgd);
             break;
             case 'spb':
                $('#container:not(:has(img))').append(spb);
             break; 
             case 'msk': 
                $('#container:not(:has(img))').append(msk);
             break; 
             default: elImgURI = false;
        }   
        // ширинаконтейнера
        var contwidth = $('#container').width();
        var contheight = $('#container').height();
        var w_mrg = contwidth/2+ "px";
        var h_mrg = contheight/2+ "px";
        $('#container').show();
        $('#container').css({'margin-left':'-'+w_mrg});
        event.preventDefault();
        });
        $('div#container').click(function(event){
        $('#container img').remove();
        $('#container').hide();
        event.preventDefault();
    });
  });
