   $(document).ready(function(){
        //메뉴네비
        $(".h_nav>ul>li").mouseover(function(){
           $(this).find(".submenu").stop().slideDown(); 
        });
        $(".h_nav>ul>li").mouseout(function(){
           $(this).find(".submenu").stop().slideUp(); 
        });
        
        //페이드효과(이미지슬라이드)
        $(".slide>ul>li").hide();
        $(".slide>ul>li").eq(0).show();
        
        setInterval(function(){
           $(".slide>ul>li:first-child").fadeOut().next("li").fadeIn().end(1000).appendTo(".slide>ul"); 
        },2500);
    
        //탭메뉴
        $(".cont1>ul>li>ul").hide();
        $(".cont1>ul>li>ul").eq(0).show();
        
        $(".cont1>ul>li").click(function(){
           $(this).find(">ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide(); 
        });
        
        //팝업창
        $(".popup2").click(function(){
           $("#popup").css("display","block"); 
        });
        $(".close").click(function(){
           $("#popup").css("display","none"); 
        });
     });