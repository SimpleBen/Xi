$(function(){
    var win_w = $(window).width();
    var nav_num = parseInt($(".hidden").text());
    var toggleSelect = function(w){
        if(w<=240){$(".sub").removeClass("select");}
        for(var i = 1;i<= nav_num;i++){
            if(($(" .b"+i).offset().top - 50)<w){
                $(".sub").removeClass("select");
                $(".p"+i).addClass("select");
            }
        }
    }

    $('.sub').click(function(){
    	$(this).addClass('select');
        $(this).parent().siblings().children().removeClass('select');
    });

    $('.font_padding').click(function(){
    	$(this).addClass('b_select');
        $(this).siblings('.font_padding').removeClass('b_select');
        setTimeout(()=> $(".sub").removeClass("select"),10);
    });

    $(window).on('scroll',function(e){
        var whs = $(window).scrollTop();
        if(win_w>415){
            if(whs >= $('.video').height() + 280){
                $(".project-aside").addClass('project-aside-float');
            }else{
                $(".project-aside").removeClass('project-aside-float');
            }
            if($('.top-nav').css('opacity')>0 || whs < 200){
                $('.top-nav').css('opacity',(100-whs)/100);
                $('.top-nav').show();
            }else{$('.top-nav').hide();}
        }
        toggleSelect(whs);
    });
    $('.project-nav-toggle').on('click',function(e){
        $('.project-nav-toggle').toggleClass('project-nav-toggle-n');
        $('.project-aside').toggleClass('project-aside-show');
    });
    $('#project-main').css('padding-top', $('.video').height());
    $('.project-aside').css('top', $('.video').height() + 340);
});