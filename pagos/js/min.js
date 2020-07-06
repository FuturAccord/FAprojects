
//floatThead function allows us to stick the table head in top on scrolling down
$(document).ready(function(){
    $(".sticky-header").floatThead({top:50});

});

/* BEGIN auto-scroll page */

var speed = 50000; 
var interval = null;  

function start(){
    // //must put the  condition, if the interval not work
    // if(!started){

    if (interval) {
        clearInterval(interval);
    }
    //calling the scroll function
    scroll();
    
    //Hide And Diseable the scrolBar
    $('body').css('overflow',"hidden");
    $('html').css('overflow',"hidden");
    $('#play').css("display","none");
    $('#pause').css("display", "inline");
    // $('#pause').css("color","gray");
    interval = setInterval(scroll, speed * 2);
    started = true;
         
} 
  
// pause the autoScroll

function pause(){
    $('html, body').stop();
    clearInterval(interval);
    $('#pause').css("display","none");
    $('#play').css("display", "inline");

    
} 

//scroll function
function scroll() {
    //  $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, speed, function() {
    //     $(this).animate({ scrollTop: 0 }, speed);
    // });
    $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, speed,function(){$(this).animate({ scrollTop: 0 }, speed);});
}
/* END auto-scroll page */

/* BEGIN sum  of input values */

/* BEGIN total of each gestor */
for (let i = 1; i <= 12; i++) {
    
    $(document).on("change", ".g"+i+"-1" , function() {
        var sum = 0;
        $(".g"+i+"-1").each(function(){
            sum += +$(this).val(); 
        });
        
        $("#tpg"+i).val(sum);
    });
    
    $(document).on("change", ".g"+i+"-2", function(){
        var sum = 0;
        $(".g"+i+"-2").each(function(){
            sum += +$(this).val(); 
        })
        
        $("#tmg"+i).val(sum.toFixed(2));
        // rank();
    });
}

// function rank(){
//     var gestors = [];

//         for (let k = 1; k <= 12; k++) {

//             gestors[k-1] = { g : 'g'+k , total : $('#tmg'+k).val()};
//         } 

//         gestors.sort((a,b) => a.total - b.total);
//         var ar  = gestors.reverse();
         
//         for (const a of ar) {
            
//             document.getElementById('rank'+i).textContent = a.g;
//         }
            
        
// }
/* END total of each gestor */

/* BEGIN total of each day */
var totalSemana = 0;
for (let i = 1; i <= 5; i++) { 
 
    $(document).on("change", ".d"+i+"-1", function() {
        var sum = 0;
        
        $(".d"+i+"-1").each(function(){
            sum += +$(this).val();
        });
        
        $("#tpd"+i).val(sum);
    });
    $(document).on("change", ".d"+i+"-2", function(){
        var sum = 0;
        $(".d"+i+"-2").each(function(){
            sum += +$(this).val();
        })
        
        $("#tmd"+i).val(sum.toFixed(2));
    });
}
/* END total of each day */


// Total de la semana
$(document).on("change", ".sumSemana-1", function() {
    var sum = 0;
    $(".sumSemana-1").each(function(){
        sum += +$(this).val();
        if($(this).val() >= 1){
            // $(this).css({'backgroundColor':'red', 'border-radius':'50%'});
            $(this).parents(".table-borderless").addClass("pagosCumplitado");

        }else
        {
            $(this).parents(".table-borderless").removeClass("pagosCumplitado");
        }
    });

    $("#tpsemana").val(sum);
});

$(document).on("change", ".sumSemana-2", function() {
    var sum = 0;
    $(".sumSemana-2").each(function(){
        sum += +$(this).val();
    });

    $("#tmsemana").val(sum.toFixed(2));
}); 

/* END sum  of input values */



/* BEGIN current day selected*/ 
var intervalDay;

//every day change color of head Day
intervalDay = setInterval(function(){
    selectCurrentDay();   
},1000 * 60 * 60 * 4 );
// console.log(dayName);

function selectCurrentDay(){
    var days = ['Domingo','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes','Sabado'];
    var d = new Date();
    var dayName = days[d.getDay()]; 
    $("th:contains('" + dayName  + "')").css('backgroundColor','red');
    for(let i=0; i < 7; i++){
        if(d.getDay() == i) continue;
        $("th:contains('" + days[i] + "')").css('backgroundColor',''); 
    } 
}
/* END current day selected*/


/* BEGIN rank of gestors */



/* END rank of gestors */

  

 