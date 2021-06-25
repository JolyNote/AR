$(function(){
    // предварительная загрузка изображений
    varklgd = $('<img />').attr('src','images/klngr.png');
    varmsk = $('<img />').attr('src','images/msk.png');
    varspb = $('<img />').attr('src','images/spb.png');
    $('div#imap> a').click(function(event){
        varelId = $(this).attr('id');
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
        varcontwidth = $('#container').width();
        varcontheight = $('#container').height();
        varw_mrg = contwidth/2+ "px";
        varh_mrg = contheight/2+ "px";
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
