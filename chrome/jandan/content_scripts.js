 function init(inverse){
	
		//$('.commentlist li').sortElements(function(a,b){ return $(a).text()>$(b).text() ? -1 : 1; })
	   var dd=$('.commentlist li');
		//if(window.console)   console.debug(dd);

	   dd.sortElements(function(a,b){ 
//	   $($('.commentlist li')[0]).find("span[id^='cos_support-']").html()
	   a = $(a).find("span[id^='cos_support-']").text();
	   b = $(b).find("span[id^='cos_support-']").text();
      
								return (
									isNaN(a) || isNaN(b) ?
										a > b : +a > +b
									) ?
										inverse ? -1 : 1 :
										inverse ? 1 : -1;

	   
	   });

 } 

$(function(){});
    var inverse = false;
	if($('h3.title')) {
         button="<a id=\"btn\" type=\"button\"   href='http://dashanxue.com' title='煎蛋oo排序器' style=\"float:right\" name=\"\">[煎蛋OO排序器]</a> "
        //$('h3.title').append(button) 
		$('h3 span.righttext').append(button)
        $('#btn').live('click',function(e){
			e.preventDefault();
			inverse = !inverse;
			init(inverse);

				});
	}
  



