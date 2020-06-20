
//floatThead function allows us to stick the table head in top on scrolling down
$(document).ready(function(){
    $(".sticky-header").floatThead({top:50});

});

/* BEGIN auto-scroll page */

var speed = 35000;
var interval = null;  
 function start(){
    // //must put the  condition, if the interval not work
    if (interval) {
        clearInterval(interval);
     }
    //calling the scroll function
    scroll();

    //Hide And Diseable the scrolBar
    $('body').css('overflow',"hidden");
    $('html').css('overflow',"hidden");

    interval = setInterval(scroll, speed * 2);
}

// pause the autoScroll
function pause(){

    clearInterval(interval);
    interval = null;

    //enable scrollBar
    $('html').css('overflow-y',"visible");
    $('body').css('overflow-y',"visible");
} 

//scroll function
function scroll() {

    $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, speed, function() {
        $(this).animate({ scrollTop: 0 }, speed);
    });
}
/* END auto-scroll page */

/* BEGIN sum  of input values */
$(document).on("change", ".g1-1", function() {
    var sum = 0;
    $(".g1-1").each(function(){
        sum += +$(this).val();
    });

    $("#tpg1").val(sum);
});
$(document).on("change", '.g1-2', function(){
    var sum = 0;
    $(".g1-2").each(function(){
        sum += +$(this).val();
    })

    $("#tmg1").val(sum.toFixed(2));
});
// g2
$(document).on("change", ".g2-1", function() {
    var sum = 0;
    $(".g2-1").each(function(){
        sum += +$(this).val();
    });

    $("#tpg2").val(sum);
});
$(document).on("change", '.g2-2', function(){
    var sum = 0;
    $(".g2-2").each(function(){
        sum += +$(this).val();
    })

    $("#tmg2").val(sum.toFixed(2));
});
// g3
$(document).on("change", ".g3-1", function() {
    var sum = 0;
    $(".g3-1").each(function(){
        sum += +$(this).val();
    });

    $("#tpg3").val(sum);
});
$(document).on("change", '.g3-2', function(){
    var sum = 0;
    $(".g3-2").each(function(){
        sum += +$(this).val();
    })

    $("#tmg3").val(sum.toFixed(2));
});
 // g4
$(document).on("change", ".g4-1", function() {
    var sum = 0;
    $(".g4-1").each(function(){
        sum += +$(this).val();
    });

    $("#tpg4").val(sum);
});
$(document).on("change", '.g4-2', function(){
    var sum = 0;
    $(".g4-2").each(function(){
        sum += +$(this).val();
    })

    $("#tmg4").val(sum.toFixed(2));
});
 // g5
 $(document).on("change", ".g5-1", function() {
    var sum = 0;
    $(".g5-1").each(function(){
        sum += +$(this).val();
    });

    $("#tpg5").val(sum);
});
$(document).on("change", '.g5-2', function(){
    var sum = 0;
    $(".g5-2").each(function(){
        sum += +$(this).val();
    })

    $("#tmg5").val(sum.toFixed(2));
});
 // g6
 $(document).on("change", ".g6-1", function() {
    var sum = 0;
    $(".g6-1").each(function(){
        sum += +$(this).val();
    });

    $("#tpg6").val(sum);
});
$(document).on("change", '.g6-2', function(){
    var sum = 0;
    $(".g6-2").each(function(){
        sum += +$(this).val();
    })

    $("#tmg6").val(sum.toFixed(2));
});
// g7
$(document).on("change", ".g7-1", function() {
    var sum = 0;
    $(".g7-1").each(function(){
        sum += +$(this).val();
    });

    $("#tpg7").val(sum);
});
$(document).on("change", '.g7-2', function(){
    var sum = 0;
    $(".g7-2").each(function(){
        sum += +$(this).val();
    })

    $("#tmg7").val(sum.toFixed(2));
});
// g8
$(document).on("change", ".g8-1", function() {
    var sum = 0;
    $(".g8-1").each(function(){
        sum += +$(this).val();
    });

    $("#tpg8").val(sum);
});
$(document).on("change", '.g8-2', function(){
    var sum = 0;
    $(".g8-2").each(function(){
        sum += +$(this).val();
    })

    $("#tmg8").val(sum.toFixed(2));
});
// g9
$(document).on("change", ".g9-1", function() {
    var sum = 0;
    $(".g9-1").each(function(){
        sum += +$(this).val();
    });

    $("#tpg9").val(sum);
});
$(document).on("change", '.g9-2', function(){
    var sum = 0;
    $(".g9-2").each(function(){
        sum += +$(this).val();
    })

    $("#tmg9").val(sum.toFixed(2));
});
// g10
$(document).on("change", ".g10-1", function() {
    var sum = 0;
    $(".g10-1").each(function(){
        sum += +$(this).val();
    });

    $("#tpg10").val(sum);
});
$(document).on("change", '.g10-2', function(){
    var sum = 0;
    $(".g10-2").each(function(){
        sum += +$(this).val();
    })

    $("#tmg10").val(sum.toFixed(2));
});
// g11
$(document).on("change", ".g11-1", function() {
    var sum = 0;
    $(".g11-1").each(function(){
        sum += +$(this).val();
    });

    $("#tpg11").val(sum);
});
$(document).on("change", '.g11-2', function(){
    var sum = 0;
    $(".g11-2").each(function(){
        sum += +$(this).val();
    })

    $("#tmg11").val(sum.toFixed(2));
});
// g12
$(document).on("change", ".g12-1", function() {
    var sum = 0;
    $(".g12-1").each(function(){
        sum += +$(this).val();
    });

    $("#tpg12").val(sum);
});
$(document).on("change", '.g12-2', function(){
    var sum = 0;
    $(".g12-2").each(function(){
        sum += +$(this).val();
    })

    $("#tmg12").val(sum.toFixed(2));
});

var totalSemana = 0;
// d1
 $(document).on("change", ".d1-1", function() {
    var sum = 0;

    $(".d1-1").each(function(){
        sum += +$(this).val();
    });

    $("#tpd1").val(sum);
});
$(document).on("change", '.d1-2', function(){
    var sum = 0;
    $(".d1-2").each(function(){
        sum += +$(this).val();
    })

    $("#tmd1").val(sum.toFixed(2));
});
// d2
$(document).on("change", ".d2-1", function() {
    var sum = 0;
    $(".d2-1").each(function(){
        sum += +$(this).val();
    });

    $("#tpd2").val(sum);
});
$(document).on("change", '.d2-2', function(){
    var sum = 0;
    $(".d2-2").each(function(){
        sum += +$(this).val();
    })

    $("#tmd2").val(sum.toFixed(2));
});
// d3
$(document).on("change", ".d3-1", function() {
    var sum = 0;
    $(".d3-1").each(function(){
        sum += +$(this).val();
    });

    $("#tpd3").val(sum);
});
$(document).on("change", '.d3-2', function(){
    var sum = 0;
    $(".d3-2").each(function(){
        sum += +$(this).val();
    })

    $("#tmd3").val(sum.toFixed(2));
});
// d4
$(document).on("change", ".d4-1", function() {
    var sum = 0;
    $(".d4-1").each(function(){
        sum += +$(this).val();
    });

    $("#tpd4").val(sum);
});
$(document).on("change", '.d4-2', function(){
    var sum = 0;
    $(".d4-2").each(function(){
        sum += +$(this).val();
    })

    $("#tmd4").val(sum.toFixed(2));
});
// d5
$(document).on("change", ".d5-1", function() {
    var sum = 0;
    $(".d5-1").each(function(){
        sum += +$(this).val();
    });

    $("#tpd5").val(sum);
});
$(document).on("change", '.d5-2', function(){
    var sum = 0;
    $(".d5-2").each(function(){
        sum += +$(this).val();
    })

    $("#tmd5").val(sum.toFixed(2));
});

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
$(document).ready(function(){
    var days = ['Domingo','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes','Sabado'];
    var d = new Date();
    var dayName = days[d.getDay()];

    // console.log(dayName);

    $("th:contains('" + dayName + "')").css('backgroundColor','red');
});

/* END current day selected*/