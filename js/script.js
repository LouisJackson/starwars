
$(".button").click(function(){
      $(".back").fadeOut("slow");
})

$('#contain').mouseenter(function(){
   $('.legend_line').css({
      'marginLeft' : '-5px',
      'marginTop' : '-85px',
      'width': '300px'   
   });
   $('.legend_circle button, .legend_circle p').css({
      'display' : 'block' 
   })
   $('.legend_content').css({
      'width': '200px',
      'height': '135px',
      'border': '2px dashed #46c7e8',
      'padding': '10px 5px',
      'transition': 'all 1s ease 0.8s',
      '-webkit-transition': 'all 1s ease 0.8s',
   })
});

$('#contain').mouseleave(function(){
   $('.legend_line').css({
      'marginLeft' : '15px',
      'marginTop' : '0px',
      'width': '0px'   
   });
   $('.legend_circle button, .legend_circle p').css({
      'display' : 'none'
   })
   $('.legend_content').css({
      'width': '0px',
      'height': '0px',
      'border': 'none',
      'padding': '0px 0px',
   })
});

$('.legend_circle').mouseenter(function(){
   $('.legend_line').css({
      'marginLeft' : '-5px',
      'marginTop' : '-85px',
      'width': '300px'   
   });
   $('.legend_circle button, .legend_circle p').css({
      'display' : 'block' 
   })
   $('.legend_content').css({
      'width': '200px',
      'height': '135px',
      'border': '2px dashed #46c7e8',
      'padding': '10px 5px',
      'transition': 'all 1s ease 0.8s',
      '-webkit-transition': 'all 1s ease 0.8s',
   })
});

$('.legend_circle').mouseleave(function(){
   $('.legend_line').css({
      'marginLeft' : '15px',
      'marginTop' : '0px',
      'width': '0px'   
   });
   $('.legend_circle button, .legend_circle p').css({
      'display' : 'none'
   })
   $('.legend_content').css({
      'width': '0px',
      'height': '0px',
      'border': 'none',
      'padding': '0px 0px',
      'transition': 'all 1s ease 0.8s',
      '-webkit-transition': 'all 1s ease 0.8s',
   })
});


document.getElementById('block').style.visibility="hidden";
document.getElementById('theDetails').style.visibility="hidden";
function cacher(block)
{
    if(document.getElementById(block).style.visibility=="hidden")
    {
        document.getElementById(block).style.visibility="visible";
        document.getElementById('bouton_'+block).innerHTML='Cacher block';
    }
    else
    {
        document.getElementById(block).style.visibility="hidden";
    }
    return true;
}

function filterChoice(filter) {
   $('.choice').removeClass('chosen');
   $("[name='"+ filter +"']").addClass('chosen');
   $("#right ul").hide();
   $("#right ul[class='filter_"+ filter +"']").show();
}

function filterChoiceCat(filter,cat) {
   $('ul.' + filter +' li').removeClass('chosenCat');
   $('ul.' + filter +' li:nth-child('+cat+')').addClass('chosenCat');
}

function filterChoiceFilm(film) {
   $('.chosenFilm').addClass('notChosenFilm');
   $('.chosenFilm').removeClass('chosenFilm');
   $('.filledCircle[name='+film+']').removeClass('notChosenFilm');
   $('.filledCircle[name='+film+']').addClass('chosenFilm');
}
