var numSlide = 27;
var htmljuego = $("#juegofv").html();
var intentosJuego = 0;
var arraytruefalse = [false,false,false];
var arrayPalabra = [false,false,false];
var segundosInicial = 0;
var segundosTiempo = "00:00:00";
var controlaTiempo=setInterval('updateClock()', 1000 );
var fin_tiempo;
var terminar_tiempo;
var hours;
var segundosInicial;
var sec_num;
$(document).ready(function () {
    iniciarJuegofv();
    updateClock();
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('.hello_world').pwstabs({
       effect: 'slideleft',
       defaultTab: 1
    });

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
        $('#porcentaje_curso').popover({
            container: 'body',
            html: true,
            content:'<div id="percent_curso" class="blue"></div>',
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        });
    })

    $('#porcentaje_curso').on('shown.bs.popover', function () {
        var numItems = $('.done').length / 2;
        var porcent = parseFloat((numItems/numSlide) * 100).toFixed( 2 );
        $("#percent_curso").percircle({percent: porcent ,animate: "true"});
    })

    $('#icon_actividades').off('click').on('click', function(){
        if($(".divcontenido").is(':visible')){
            $(".divcontenido").animate({ width: 'hide' }); 
            $(".menu-actividades").show(1000); 
            setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
        }else{
            $(".menu-actividades").hide();
            setTimeout(function() { toggleOptions('.selector'); }, 10);
            $(".divcontenido").animate({ width: 'show' });
        }
    });
    $('.link_actividad').off('click').on('click', function(){
        $(".menu-actividades").hide();
        setTimeout(function() { toggleOptions('.selector'); }, 10);
        $(".divcontenido").animate({ width: 'show' });

        var number_at= $(this).attr("for");

        switch (number_at) {
            case "c1":
                $('#smartwizard').smartWizard("goToStep", 4);
                $('#smartwizard2').smartWizard("goToStep", 4);
            break;
            case "c2":
                $('#smartwizard').smartWizard("goToStep", 10);
                $('#smartwizard2').smartWizard("goToStep", 10);
            break;
            case "c3":
                $('#smartwizard').smartWizard("goToStep", 16);
                $('#smartwizard2').smartWizard("goToStep", 16);
            break;
            case "c4":
                $('#smartwizard').smartWizard("goToStep", 21);
                $('#smartwizard2').smartWizard("goToStep", 21);
            break;
            case "c5":
                $('#smartwizard').smartWizard("goToStep", 24);
                $('#smartwizard2').smartWizard("goToStep", 24);
            break;
          default:
            //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
            break;
        }
        $(".controls-slide").show();
        $(".divcontenido").css("height","1000px");
    });
    $('#icon_salir').off('click').on('click', function(e){
        window.open('', '_self', '');
        window.close();
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    var words = [    'Resistividad',
                     'Conductor',
                     'Molecular',
                     'Liquido',
                     'Solido',
                     'Átomo',
                     'Protón',
                     'Electrón'
                     ];             

    var gamePuzzle = wordfindgame.create(words, '#puzzle', '#words');

    //var puzzle = wordfind.newPuzzle(words, { height: 15, width: 15, fillBlanks: false });
    //wordfind.print(puzzle);


    $("#tryAgainPuzzle").click(function(){
    gamePuzzle = wordfindgame.create(words, '#puzzle', '#words','#tiempoSL');        
    controlaTiempo=setInterval('updateClock()', 1000 );
    hours=0;
    segundosInicial=0;
    sec_num=segundosInicial;
    //var puzzle = wordfind.newPuzzle(words, { height: 15, width: 15, fillBlanks: false });
    //wordfind.print(puzzle);
    });

    $("#solvePuzzle").click(function () { wordfindgame.solve(gamePuzzle, words); clearInterval(controlaTiempo); });


    /*var gamePuzzle = wordfindgame.create(words, '#puzzle', '#words');

    $("#tryAgainPuzzle").click(function(){
        gamePuzzle = wordfindgame.create(words, '#puzzle', '#words');        
    });
    $("#solvePuzzle").click(function () { wordfindgame.solve(gamePuzzle, words) });*/


    $('.tecnicas').off('click').on('click', function(){
        var numt= $(this).text();
        $('.pasos-normas').hide();
        $('.tecnicas'+numt).show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    });
    $('.sistema_medicion').off('click').on('click', function(){
        var numt= $(this).text();
        $('.div_sistema_medicion').hide();
        $('.div_sistema_medicion'+numt).show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    });

    /*$(".actividadtruefalse label").checkbox({
      checked: "assets/img/cb2-1.png",
      check: "assets/img/cb2-0.png",
      onChange: function(i) {
            switch (i[0].name) {
              case "r1":
                if (i[0].value==="0") {
                    Swal.fire(
                        '¡Buen trabajo!',
                        'Has acertado',
                        'success'
                    )
                } else {
                    Swal.fire(
                        '¡Lo siento!',
                        'Puedes intentarlo de nuevo',
                        'error'
                    )  
                }
                break;
              case "r2":
                if (i[0].value==="1") {
                    Swal.fire(
                        '¡Buen trabajo!',
                        'Has acertado',
                        'success'
                    )
                } else {
                    Swal.fire(
                        '¡Lo siento!',
                        'Puedes intentarlo de nuevo',
                        'error'
                    )  
                }
                break;
              case "r3":
                if (i[0].value==="1") {
                    Swal.fire(
                        '¡Buen trabajo!',
                        'Has acertado',
                        'success'
                    )
                } else {
                    Swal.fire(
                        '¡Lo siento!',
                        'Puedes intentarlo de nuevo',
                        'error'
                    )  
                }
                break;
              case "r4":
                if (i[0].value==="1") {
                    Swal.fire(
                        '¡Buen trabajo!',
                        'Has acertado',
                        'success'
                    )
                } else {
                    Swal.fire(
                        '¡Lo siento!',
                        'Puedes intentarlo de nuevo',
                        'error'
                    )  
                }
                break;
              default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
            }
      },
      onLoad: function(i) {
        // do something
      }
    });*/

    $('#zoom_01').elevateZoom({zoomWindowPosition: 10});
    $("select").imagepicker({
        show_label: true,
        clicked: function(e){
            console.log($(this).val());
        }
    })

    tecnica_tierra();
    tipos_terreno();

    $('#smartwizard').smartWizard({
        loader:"show",
        theme:'arrows',
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        },
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        }
    });
    $('#smartwizard2').smartWizard({
        theme:'arrows',
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        },
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        }
    });
    $('#nextSlide').on('click', function () {
        var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"))+1;
         
        switch (stepIndex) {
            case 4:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 10:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 16:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 21:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 24:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            default:
                $('#smartwizard2').smartWizard("next");
                $('#smartwizard').smartWizard("next");
                break;
        }
                         
    });
    $('#prevSlide').on('click', function () {
        $('#smartwizard2').smartWizard("prev");
        $('#smartwizard').smartWizard("prev"); 
    });

    $("#smartwizard").on("stepContent", function(e, anchorObject, stepIndex, stepDirection) {
        console.log("Here is the content for step " + stepIndex);
        controlAudioSlides(stepIndex);
        switch(stepIndex) {
            default:
            // code block
        }
    });

    /*$('#nextSlide').on('click', function () {
        $('#smartwizard2').smartWizard("next");
        $('#smartwizard').smartWizard("next");                 
    });
    $('#prevSlide').on('click', function () {
        $('#smartwizard2').smartWizard("prev");
        $('#smartwizard').smartWizard("prev"); 
    });

    $("#smartwizard").on("stepContent", function(e, anchorObject, stepIndex, stepDirection) {
        console.log("Here is the content for step " + stepIndex);
        switch(stepIndex) {
            case 2:
                $('#dialog1' ).hide();
                $('#dialog2' ).hide();
                $('#dialog3' ).hide();
                $("#dialog1").fadeIn()
                    .css({top:1000,position:'initial'})
                    .animate({top:275}, 800, function() {
                        //callback
                });
                setTimeout(function(){ 
                    $( '#dialog1' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 800);
                setTimeout(function(){ 
                    $( '#dialog2' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 2000);
                setTimeout(function(){ 
                    $( '#dialog3' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 4000);
                
            break;
            case 3:
                $('#dialog4' ).hide();
                $('#dialog5' ).hide();
                $('#dialog6' ).hide();
                setTimeout(function(){ 
                    $( '#dialog4' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 800);
                setTimeout(function(){ 
                    $( '#dialog5' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 2000);
                setTimeout(function(){ 
                    $( '#dialog6' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 4000);
            break;
            case 11:
                $('#divrowbombillo').hide();
                setTimeout(function(){ 
                    $( '#divrowbombillo' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 ); 
                }, 1000);
                  
            break;
            case 13:
                $('#dialogac21' ).hide();
                $('#dialogac22' ).hide();
                $('#dialogac23' ).hide();
                setTimeout(function(){ 
                    $( '#dialogac21' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 800);
                setTimeout(function(){ 
                    $( '#dialogac22' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 2000);
                setTimeout(function(){ 
                    $( '#dialogac23' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 4000);
                  
            break;
            case 14:
                $('#dialogac24' ).hide();
                $('#dialogac25' ).hide();
                $('#dialogac26' ).hide();
                setTimeout(function(){ 
                    $( '#dialogac24' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 800);
                setTimeout(function(){ 
                    $( '#dialogac25' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 2000);
                setTimeout(function(){ 
                    $( '#dialogac26' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 4000);
                  
            break;
            case 21:
                $('#dialogac31' ).hide();
                $('#dialogac32' ).hide();
                $('#dialogac33' ).hide();
                setTimeout(function(){ 
                    $( '#dialogac31' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 800);
                setTimeout(function(){ 
                    $( '#dialogac32' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 2000);
                setTimeout(function(){ 
                    $( '#dialogac33' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 4000);
                  
            break;
            case 22:
                $('#dialogac34' ).hide();
                $('#dialogac35' ).hide();
                $('#dialogac36' ).hide();
                setTimeout(function(){ 
                    $( '#dialogac34' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 800);
                setTimeout(function(){ 
                    $( '#dialogac35' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 2000);
                setTimeout(function(){ 
                    $( '#dialogac36' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 4000);
                  
            break;
            default:
            // code block
        }
    });*/

    $('#quiz').quiz({
      //resultsScreen: '#results-screen',
      //counter: false,
      //homeButton: '#custom-home',
      nextButtonText: 'Siguiente',
      counterFormat: 'Pregunta %current de %total',
      resultsFormat: 'Acertaste %score de %total !',
      restartButtonText: 'Reintentar',
      questions: [
        {
          'q': '¿A qué hace referencia el término exactitud en los equipos de medición?',
          'options': [
            'a. A la dispersión o repetibilidad del conjunto de valores obtenidos de mediciones repetidas bajo las mismas circunstancias (parámetros constantes).',
            'b. Un rango amplio de medición.',
            'c. A la diferencia matemática entre el valor medido y el valor considerado verdadero.'
          ],
          'correctIndex': 2,
          'correctResponse': 'Buen trabajo, continua.',
          'incorrectResponse': 'No es la respuesta'
        },
        {
          'q': 'De los siguientes enunciados, ¿cuáles hacen parte de las recomendación para evitar algún error en el valor de la medida tomada?',
          'options': [
            'a. Revisar muy bien la conexión y la escala de los equipos',
            'b. Tratar de mantener temperaturas y humedades constantes.',
            'c. Tomar la medida varias veces.',
            'd. Todas las anteriores.'
          ],
          'correctIndex': 3,
          'correctResponse': 'Respuesta Correcta.',
          'incorrectResponse': 'Sigue Intentanto'
        },
        {
          'q': '¿En qué consisten los errores aleatorios?',
          'options': [
            'a. Son la suma de las pequeñas desviaciones de la medida, pueden ser por encima (positivas) o por debajo (negativas) del valor real.',
            'b. Son las perturbaciones que se presentan con la misma magnitud y sentido a todas las mediciones que se realicen en iguales condiciones.',
            'c. Ninguna de las anteriores.'
          ],
          'correctIndex': 0,
          'correctResponse': 'Excelente!.',
          'incorrectResponse': 'Profundiza mas en las actidades de aprendizaje'
        },
      ]
    });

    $('#quiz2').quiz({
      resultsScreen: '#quiz-results-screen2',
      //counter: false,
      //homeButton: '#custom-home', #quiz-results-screen 
      startScreen:'#quiz-start-screen2',
      startButton:'#quiz-start-btn2',
      nextButtonText: 'Siguiente',
      counterFormat: 'Pregunta %current de %total',
      resultsFormat: 'Acertaste %score de %total !',
      restartButtonText: 'Reintentar',
      questions: [
        {
          'q': 'Realizar la relación de los elementos requeridos para la construcción del sistema de puesta a tierra es uno de los pasos importantes para un excelente diseño.',
          'options': [
            'a. Verdadero',
            'b. Falso.'
          ],
          'correctIndex': 0,
          'correctResponse': 'Buen trabajo, continua.',
          'incorrectResponse': 'No es la respuesta'
        },
        {
          'q': '¿De qué tipo es la siguiente conexión a masa?',
          'options': [
            'a. Tipo Estrella (en paralelo o centralizada)',
            'b. Tipo Margarita (en serie)',
            'c. Tipo híbrida (Serie-Paralelo)'
          ],
          'correctIndex': 0,
          'correctResponse': 'Respuesta Correcta.',
          'incorrectResponse': 'Sigue Intentanto'
        },
      ]
    });

    var wheel = $("#wheel").flipster({
        style: 'wheel',
        spacing: 0,
        start: 0,
        onItemSwitch: function(currentItem, previousItem) {
          console.log('hover a circle'+previousItem);
          $('.wheeldiv p').html($(currentItem).attr("data-flip-title"));
        }
    });



    var flat = $("#flat").flipster({
        style: 'flat',
        spacing: -0.25,
        buttons: true,
        start: 0,
        buttonNext: 'Siguiente',
        onItemSwitch: function(){
            var flatIndex = $("#flat>ul>.flipster__item--current").attr("data-flip-title");
            // $("#flat>ul>.flipster__item--current").addClass("remover");
            flatIndexAudio(flatIndex);
            
        }

    });
    

    function tecnica_tierra() {
        var canvas = new fabric.Canvas('tecnica_tierra');
        var imgElement = 'assets/img/uno.png';
        var imgElement2 = 'assets/img/dos.png'; 
        var imgElement3 = 'assets/img/tres.png';
        var imgElement4 = 'assets/img/cuatro.png';
        fabric.Image.fromURL(imgElement, function(oImg) {
            oImg.left=40;
            oImg.top=10;
            oImg.scaleToHeight(40);
            oImg.scaleToWidth(40);
            oImg.selectable = false;
            canvas.add(oImg);

            oImg.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_circuito1").modal("show");            
            });
            oImg.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
        fabric.Image.fromURL(imgElement2, function(oImg2) {
            oImg2.left=260;
            oImg2.top=50;
            oImg2.scaleToHeight(40);
            oImg2.scaleToWidth(40);
            oImg2.selectable = false;
            canvas.add(oImg2);

            oImg2.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_circuito2").modal("show");            
            });
            oImg2.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
        fabric.Image.fromURL(imgElement3, function(oImg3) {
            oImg3.left=240;
            oImg3.top=230;
            oImg3.scaleToHeight(40);
            oImg3.scaleToWidth(40);
            oImg3.selectable = false;
            canvas.add(oImg3);

            oImg3.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_circuito3").modal("show");            
            });
            oImg3.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
        fabric.Image.fromURL(imgElement4, function(oImg4) {
            oImg4.left=10;
            oImg4.top=230;
            oImg4.scaleToHeight(40);
            oImg4.scaleToWidth(40);
            oImg4.selectable = false;
            canvas.add(oImg4);

            oImg4.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_circuito4").modal("show");            
            });
            oImg4.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
    }
    function tipos_terreno() {
        var canvas = new fabric.Canvas('canvas_terrenos');
        var imgElement = 'assets/img/btn_limpio.png';
        var imgElement2 = 'assets/img/btn_limpio.png'; 
        fabric.Image.fromURL(imgElement, function(oImg) {
            oImg.left=150;
            oImg.top=45;
            oImg.scaleToHeight(40);
            oImg.scaleToWidth(100);
            oImg.selectable = false;
            canvas.add(oImg);

            oImg.on('mouseup', function() {
                console.log('selected a circle');  
                $('.div-terrenos').hide();
                $('.div-terrenos_1').show().css( {'opacity': 0, 'bottom': '-100px' } ).animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
            });      
            oImg.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
        fabric.Image.fromURL(imgElement2, function(oImg2) {
            oImg2.left=150;
            oImg2.top=180;
            oImg2.scaleToHeight(40);
            oImg2.scaleToWidth(100);
            oImg2.selectable = false;
            canvas.add(oImg2);

            oImg2.on('mouseup', function() {
                $('.div-terrenos').hide();
                $('.div-terrenos_2').show().css( {'opacity': 0, 'bottom': '-100px' } ).animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );                   
            });
            oImg2.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
    }
    // tabs

    var tabLinks = document.querySelectorAll(".tablinks1");
    var tabContent = document.querySelectorAll(".tabcontent1");

    var tabLinks2 = document.querySelectorAll(".tablinks2");
    var tabContent2 = document.querySelectorAll(".tabcontent2");


    tabLinks.forEach(function(el) {
       el.addEventListener("click", openTabs);
    });
    tabLinks2.forEach(function(el) {
       el.addEventListener("click", openTabs2);
    });

    $(".tablinks2").click(function(){

        var idTabs = $(this).parent().parent().parent().attr("id");        
    
        $(`#${idTabs}>div>.tabs>button`).removeClass("active");
        $(`#${idTabs}>div>.wrapper_tabcontent>div`).removeClass("active");
        
        $(this).addClass("active");
        $(`#${$(this).attr("data-country")}`).addClass("active");
    
        audioTabs($(this).attr("data-country"));
    });
    $(".tablinks2_hover").on("mouseover",function(){
        var idTabs = $(this).parent().parent().parent().attr("id");        
    
        $(`#${idTabs}>div>.tabs>button`).removeClass("active");
        $(`#${idTabs}>div>.wrapper_tabcontent>div`).removeClass("active");
        
        $(this).addClass("active");
        $(`#${$(this).attr("data-country")}`).addClass("active");
    
        audioTabs($(this).attr("data-country"));
    });
    


    function openTabs(el) {
       var btnTarget = el.currentTarget;
       var country = btnTarget.dataset.country;

       tabContent.forEach(function(el) {
          el.classList.remove("active");
       });

       tabLinks.forEach(function(el) {
          el.classList.remove("active");
       });

       document.querySelector("#" + country).classList.add("active");
       btnTarget.classList.add("active");
    }

    function openTabs2(el) {
       var btnTarget = el.currentTarget;
       var country = btnTarget.dataset.country;

       tabContent2.forEach(function(el) {
          el.classList.remove("active");
       });

       tabLinks2.forEach(function(el) {
          el.classList.remove("active");
       });

       document.querySelector("#" + country).classList.add("active");
       btnTarget.classList.add("active");
    }

    $('.carousel').carousel({
      interval: false,
      ride: false
    })
});

function iniciarJuegofv() {
    
    $(".actividadtruefalse label").checkbox({
          checked: "assets/img/cb2-1.png",
          check: "assets/img/cb2-0.png",
          onChange: function(i) {
                switch (i[0].name) {
                  case "r1":
                    if (i[0].value==="1") {
                        arraytruefalse[0]=true;
                    } else {
                        arraytruefalse[0]=false;
                    }
                    break;
                  case "r2":
                    if (i[0].value==="0") {
                        arraytruefalse[1]=true;
                    } else {
                        arraytruefalse[1]=false;
                    }
                    break;
                  case "r3":
                    if (i[0].value==="1") {
                        arraytruefalse[2]=true;
                    } else {
                        arraytruefalse[2]=false;
                    }
                    break;
                  default:
                    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                    break;
                }
          },
          onLoad: function(i) {
            // do something
          }
        });
}

$('#validarjuego3').off('click').on('click', function(){
    if (intentosJuego > 1) {
        Swal.fire(
            '¡Has superado el número de intentos!',
            'Revisa los temas de la actividad de aprendizaje y vuelve a intentarlo',
            'warning'
        ) 
        $(".actividadtruefalse").hide();
    } else {
        console.log(arraytruefalse);
        if (arraytruefalse.indexOf(false) != -1) {
            Swal.fire(
                '¡Respuesta Invalida!',
                'Selecciona unicamente lo correcto',
                'error'
            )  
            intentosJuego++;
        }else{
            Swal.fire(
                '¡Has acertado!',
                'Continua con la Siguiente actividad',
                'success'
            )    
        }
    }  
});

// temporizador
function updateClock()
    {
    sec_num=segundosInicial;
       
        var hours   = Math.floor(sec_num / 3600);
        if (hours>99) {
            // 99 horas es el maximo
            hours=0;
            segundosInicial=0;
            sec_num=segundosInicial;
            }
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        var time    = hours+':'+minutes+':'+seconds;


     $("#tiempoSL").text(time);
    segundosTiempo=time;
    segundosInicial++;

    fin_tiempo = $("#puzzle").find(".puzzleSquare").attr('class');
    terminar_tiempo = "puzzleSquare complete";
    if (fin_tiempo == terminar_tiempo){
        clearInterval(controlaTiempo);
    }
    };