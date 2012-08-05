$(function() {
    
    function init() {
        
        for(var i = 0; i < $('.input-remove').length; i ++)
        {
            
            $('.input-remove').eq(i).attr('data-inputremove-original',$('.input-remove').eq(i).val());

        }
        
    }
    
    $('.input-remove').focus(function() {
        
        if($(this).val() == $(this).attr('data-inputremove-original'))
        {
            
            $(this).val('');
            
        }
       
    });
    
    $('.input-remove').blur(function() {
       
        if(!$(this).val())
        {

            $(this).val($(this).attr('data-inputremove-original'));

        }
        
    });
    
    init();
    
});