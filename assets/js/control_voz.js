var audioActivo = true;
var audioActual = new Audio();
var mute = false;


/**
 * por sí en algún momento se necesita saber el slide actual del smart wizard
 */
function onLoadAudio() {
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlAudioSlides(stepIndex);
}

function pause_audio() {
    audioActual.pause();
}

$("#mute").click(function() {

    mute = !mute;

    if (audioActual)
        audioActual.volume = 0;

    $("#mute").hide();
    $("#unmute").show();

});

$("#unmute").click(function() {

    mute = !mute;

    if (audioActual)
        audioActual.volume = 1;       

    $("#unmute").hide();
    $("#mute").show();

});

function controlAudioSlides(numeroSlide) {

    if (mute)
    audioActual.volume = 0;   

    $("#unmute").hide();
    $("#mute").show();



    if(audioActual)
        audioActual.pause();

    switch (numeroSlide) {
        case 1:
            audioActual = new Audio('assets/voz/U001P05001.mp3');
            break;
        case 2:
            $(`#wrapper>div>.tabs>button`).removeClass("active");
            $(`#wrapper>div>.wrapper_tabcontent>div`).removeClass("active");
            $(`#Contenido`).removeClass("active");
            $(`#Metodologia`).removeClass("active");
            $("#tabObjetivos").addClass("active");
            $(`#Objetivos`).addClass("active");         
            
            audioActual = new Audio('assets/voz/U001P05002.mp3');
            break;  

            case 3: 
            $(`#wrapper_2>div>.tabs>button`).removeClass("active");
            $(`#wrapper_2>div>.wrapper_tabcontent>div`).removeClass("active");
            $(`#unidad_necesitas`).removeClass("active");
            $(`#unidad_aprenderas`).removeClass("active");
            $('#tabUnidad_aprenderas').addClass("active");
            $(`#unidad_aprenderas`).addClass("active");  
            audioActual = new Audio('assets/voz/U001P05006.mp3');
            break;     

        case 4:
            $('#carouselExampleIndicators').carousel(0);   
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U001P05008.mp3');
            break;            
        case 5:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U001P05012.mp3');
            break;            
        case 6:          
            $(".pantalla5_color").css('background','#2c538e');
            $(".pantalla5_opcion1").css('background','#CFFFFF');
            pantalla5_cambio(4);
            audioActual = new Audio('assets/voz/U001P05017.mp3');
            break;    
        case 7:
            $("#pantalla6").html('');
            $(".pantalla6_color").css('background','#0A7DC9');
            audioActual = new Audio('assets/voz/U001P05020.mp3');
            break;                                              
        case 8:
            pantalla7_cambio(5);
            $(".pantalla7_color").css('background','#2c538e');
            $(".pantalla7_opcion1").css('background','#CFFFFF');
            audioActual = new Audio('assets/voz/U001P05023.mp3');
            break;                                              
        case 9:        
            audioActual = new Audio('assets/voz/U003P04089.mp3');
            break;            
        case 10:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades2`).addClass("active_actividad");
            $("#carouselExampleIndicators2").carousel(0);
            audioActual = new Audio('assets/voz/U001P05029.mp3');
            break;            
        case 11:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades2`).addClass("active_actividad");
            $("#pantalla10").html('');
            audioActual = new Audio('assets/voz/U001P05033.mp3');
            break;            
        case 12:
            $("#carouselpantalla11").carousel(0);    
            audioActual = new Audio('assets/voz/U001P05045.mp3');
            break;            
        case 13:
            $("#carouselpantalla12").carousel(0);
            audioActual = new Audio('assets/voz/U001P05051.mp3');
            break;
        case 14:
            pantalla13(8);
            $(".pantalla13_btn").css('background','#e67e22');      
            audioActual = new Audio('assets/voz/U001P05055.mp3');
            break;            
        case 15:
            
            audioActual = new Audio('assets/voz/U001P05075.mp3');
            break;            
        case 16:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades3`).addClass("active_actividad");
            $("#carouselExampleIndicators3").carousel(0);
            audioActual = new Audio('assets/voz/U001P05076.mp3');
            break;               
        case 17:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades3`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U001P05080.mp3');
            break;            
        case 18:
            $('#carouselpantalla18').carousel(0);
            audioActual = new Audio('assets/voz/U001P05099.mp3');
            break;            
        case 19:
            $(".pantalla18_info").css('background','#FFFFFF');
            audioActual = new Audio('assets/voz/U001P05102.mp3');
            break;            
        case 20:         
            audioActual = new Audio('assets/voz/U001P05109.mp3');
            break;
        case 21:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            $('#carouselExampleIndicators4').carousel(0);
            audioActual = new Audio('assets/voz/U001P05110.mp3');
            break;            
        case 22:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            $(".pantalla21_color").css('background','#3e6fb9');
            audioActual = new Audio('assets/voz/U001P05114.mp3');
            break;                         
        case 23:
            audioActual = new Audio('assets/voz/U001P05134.mp3');
            break;                         
        case 24:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades5`).addClass("active_actividad");
            $('#carouselExampleIndicators5').carousel(0);
            audioActual = new Audio('assets/voz/U001P05135.mp3');
            break;                         
        case 25:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades5`).addClass("active_actividad");
            $(".pantalla24_color").removeClass('button-3d');
            $(".pantalla24_color").removeClass('button-3d-azul');
            $(".pantalla24_color").addClass('button-3d');
            pantalla24(8);
            audioActual = new Audio('assets/voz/U001P05139.mp3');
            break;                         
        case 26:         
            audioActual = new Audio('assets/voz/U001P05156.mp3');
            break;      
        case 27:
            audioActual = new Audio('assets/voz/U001P05157.mp3');
            break;   
        case 28:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            $("#carouselActividadAprendizaje4").carousel(0);
            audioActual = new Audio('assets/voz/U14D130.mp3');
            break; 
        case 29:
            audioActual = new Audio('assets/voz/U14D134.mp3');
            break;
        case 30:
            audioActual = new Audio('assets/voz/U14D138.mp3');
            break; 
        case 31:
            audioActual = new Audio('assets/voz/U14D143.mp3');
            break;  
        case 32:
            audioActual = new Audio('assets/voz/U14D147.mp3');
            break;    
        case 33:

            $("select").data('picker').destroy();
            $("select option").prop('selected', false);
            iniciarSelect();
            audioActual = new Audio('assets/voz/U14D149.mp3');
            break;    
        case 34:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades5`).addClass("active_actividad");
            $("#carouselActividadAprendizaje5").carousel(0);
            audioActual = new Audio('assets/voz/U14D150.mp3');
            break; 
        case 35:
            audioActual = new Audio('assets/voz/U14D154.mp3');
            break;   
        case 36:
            audioActual = new Audio('assets/voz/U14D158.mp3');
            break;   
        case 37:
            audioActual = new Audio('assets/voz/U14D159.mp3');
            break;  
        case 38:
            audioActual = new Audio('assets/voz/U14D160.mp3');
            break;   
        case 39:
            audioActual = new Audio('assets/voz/U14D166.mp3');
            break;    
        case 39:
            audioActual = new Audio('assets/voz/U14D172.mp3');
            break;  
        case 41:
            audioActual = new Audio('assets/voz/U14D176.mp3');
            break; 
        case 42:
            audioActual = new Audio('assets/voz/U14D178.mp3');
            break;  
        case 43:
            intentosJuego=0;
            audioActual = new Audio('assets/voz/U14D183.mp3');
            break;                       
        default:
            audioActual = undefined;
            break;
    }
    
    if(!audioActivo) {
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        return false;
    } else {
        $("#resumeAudio").hide();
        $("#pauseAudio").show();        
    }

    if(audioActual){
        audioActual.play();
    }

}

$("#audioActivo").click(function() { 
    audioActivoFuncion();
});

function audioActivoFuncion() {
    audioActivo = !audioActivo;
    
    if(!audioActivo) {
        $("#iconoAudioActivo").hide();
        $("#iconoAudioInactivo").show();
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        if (audioActual)
        audioActual.pause();          
    } else {
        $("#iconoAudioInactivo").hide();        
        $("#iconoAudioActivo").show();
        $("#pauseAudio").show();
        $("#resumeAudio").hide();
        if (audioActual)
        audioActual.play();  
    }
}

$("#pauseAudio").click(function() {

    if (!audioActivo)
        return false;

    if (audioActual)
        audioActual.pause(); 

    $("#pauseAudio").hide();
    $("#resumeAudio").show();
});

$("#resumeAudio").click(function() {

    if (!audioActivo)
        return false;

    if (audioActual)
        audioActual.play();       

    $("#resumeAudio").hide();
    $("#pauseAudio").show();
});

function reproducirAudio(audioLocation) {
    if (audioActual)
        audioActual.pause();    

    audioActual = new Audio(audioLocation);        

    if (!audioActivo) {
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        return false;
    } else {
        $("#resumeAudio").hide();
        $("#pauseAudio").show();
    }

    if (audioActual)
        audioActual.play();    
}


$('.modal').on('hidden.bs.modal', function (e) {
    if (audioActual)
        audioActual.pause();    
});
/**
 * Configuraciones personalizadas para tabs de audio
 */
function flatIndexAudio(opcion){
    var audioLocation;
    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U001P05096.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05097.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U001P05098.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function pantalla24Audio(opcion){
    var audioLocation;
    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U001P05140.mp3';
            carouselpantalla241();
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05143.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U001P05144.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U001P05145.mp3';
            break;
            carouselpantalla242();
        case 5:
            audioLocation = 'assets/voz/U001P05147.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U001P05148.mp3';
            carouselpantalla243();
            break;
        case 7:
            audioLocation = 'assets/voz/U001P05155.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function carouselpantalla241(){
    $('#carouselpantalla24_1').on('slid.bs.carousel', function () {

        var numeroSlide = $('#carouselpantalla24_1>div>div.active').index();
        var audioLocation;

        switch (numeroSlide) {
            case 0:
                audioLocation = 'assets/voz/U001P05140.mp3';
                break;
            case 1:
                audioLocation = 'assets/voz/U001P05141.mp3';
                break;        
            case 2:
                audioLocation = 'assets/voz/U001P05142.mp3';
                break;
            default:
                break;
        }

        reproducirAudio(audioLocation);
    })
}
function carouselpantalla242(){
    $('#carouselpantalla24_2').on('slid.bs.carousel', function () {

        var numeroSlide = $('#carouselpantalla24_2>div>div.active').index();
        var audioLocation;

        switch (numeroSlide) {
            case 0:
                audioLocation = 'assets/voz/U001P05145.mp3';
                break;
            case 1:
                audioLocation = 'assets/voz/U001P05146.mp3';
                break;
            default:
                break;
        }

        reproducirAudio(audioLocation);
    })
}
function carouselpantalla243(){
    $('#carouselpantalla24_3').on('slid.bs.carousel', function () {

        var numeroSlide = $('#carouselpantalla24_3>div>div.active').index();
        var audioLocation;

        switch (numeroSlide) {
            case 0:
                audioLocation = 'assets/voz/U001P05148.mp3';
                break;
            case 1:
                audioLocation = 'assets/voz/U001P05149.mp3';
                break;
            case 2:
                audioLocation = 'assets/voz/U001P05150.mp3';
                break;
            case 3:
                audioLocation = 'assets/voz/U001P05151.mp3';
                break;
            case 4:
                audioLocation = 'assets/voz/U001P05152.mp3';
                break;
            case 5:
                audioLocation = 'assets/voz/U001P05153.mp3';
                break;
            case 6:
                audioLocation = 'assets/voz/U001P05154.mp3';
                break;
            default:
                break;
        }

        reproducirAudio(audioLocation);
    })
}

function pantalla21ModalAudio(opcion){
    var audioLocation;
    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U001P05115.mp3';
            break;
        case 2:
            $('#carouselpantalla21_modal2').carousel(0);
            audioLocation = 'assets/voz/U001P05117.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U001P05120.mp3';
            break;
        case 4:
            $('#carouselpantalla21_modal4').carousel(0);
            audioLocation = 'assets/voz/U001P05122.mp3';
            break;
        case 5:
            $('#carouselpantalla21_modal5').carousel(0);
            audioLocation = 'assets/voz/U001P05125.mp3';
            break;
        case 6:
            $('#carouselpantalla21_modal6').carousel(0);
            audioLocation = 'assets/voz/U001P05131.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function pantalla18_infoAudio(opcion){
    var audioLocation;
    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U001P05103.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05105.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U001P05107.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function pantalla16_modal(opcion){
    var audioLocation;
    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U001P05081.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05083.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U001P05085.mp3';
            break;
        case 4:
            $("#carouselpantalla16_modal4").carousel(0);
            audioLocation = 'assets/voz/U001P05087.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function pantalla13_cambio_5Audio(opcion){
    var audioLocation;
    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U001P05073.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05074.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function pantalla13_cambio_4Audio(opcion){
    var audioLocation;
    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U001P05069.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05070.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U001P05071.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U001P05072.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function pantalla13_cambio_3Audio(opcion){
    var audioLocation;
    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U001P05065.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05066.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U001P05067.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U001P05068.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function pantalla13_cambio_2Audio(opcion){
    var audioLocation;
    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U001P05061.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05062.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U001P05063.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function  pantalla13_cambio_1Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U001P05056.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05057.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U001P05058.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U001P05059.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function pantalla13Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U001P05056.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05060.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U001P05061.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U001P05064.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U001P05065.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U001P05069.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U001P05073.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function pantalla10Modal(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U001P05039.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05041.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U001P05043.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function pantalla10_infoAudio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U001P05034.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05035.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U001P05036.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U001P05037.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U001P05038.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function pantalla7_cambioAudio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U001P05024.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05025.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U001P05026.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U001P05027.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function panatalla6_infoAudio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U001P05021.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05022.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function CONVERSIÓNDEUNIDADES(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U001P05017.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05018.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U001P05019.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modalMAGNITUDES(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U001P05013.mp3';
            break;
        case 2:
            $('#carouselpantalla4_modal2').carousel(0);
            audioLocation = 'assets/voz/U001P05015.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioConceptos(numeroTab) {

    var audioLocation;

    switch (parseInt(numeroTab)) {
        case 1:
            audioLocation = 'assets/voz/U14D011.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D012.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D013.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D014.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D015.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D016.mp3';
            break;
        case 7:
            $('#carouselConceptos').carousel(0);
            audioLocation = 'assets/voz/U14D017.mp3';
            break;
        case 8:
            $('#carouselConceptos_2').carousel(0);
            audioLocation = 'assets/voz/U14D024.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioTarjetas(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 54:
            audioLocation = 'assets/voz/U14D054.mp3';
            break;
        case 56:
            audioLocation = 'assets/voz/U14D056.mp3';
            break;
        case 58:
            audioLocation = 'assets/voz/U14D058.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla13(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D061.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D063.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D065.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla16(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 2:
            audioLocation = 'assets/voz/U14D073.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D074.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D075.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla18(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D080.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D082.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla19(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D084.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D092.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla24(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D110.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D112.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D114.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D116.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D118.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla25(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D119.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D121.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D124.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D128.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla30(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D144.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D145.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D146.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla34(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D155.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D157.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla37(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D161.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D163.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D165.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla38(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D172.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D173.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D174.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D175.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPasos(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 2:
            audioLocation = 'assets/voz/U14D015.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D016.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D017.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D018.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D019.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U14D020.mp3';
            break;
        case 8:
            audioLocation = 'assets/voz/U14D021.mp3';
            break;
        case 9:
            audioLocation = 'assets/voz/U14D022.mp3';
            break;
        case 10:
            audioLocation = 'assets/voz/U14D023.mp3';
            break;
        case 11:
            audioLocation = 'assets/voz/U14D024.mp3';
            break;
        case 12:
            audioLocation = 'assets/voz/U14D025.mp3';
            break;
        case 13:
            audioLocation = 'assets/voz/U14D026.mp3';
            break;
        case 14:
            audioLocation = 'assets/voz/U14D027.mp3';
            break;
        case 15:
            audioLocation = 'assets/voz/U14D028.mp3';
            break;
        case 16:
            audioLocation = 'assets/voz/U14D029.mp3';
            break;
        case 17:
            audioLocation = 'assets/voz/U14D030.mp3';
            break;
        case 18:
            audioLocation = 'assets/voz/U14D031.mp3';
            break;
        case 19:
            audioLocation = 'assets/voz/U14D032.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

/**
 * Esta función se llama desde contenido.html, ya que de acuerdo al botón seleccionado
 * se abre un modal. Estos audios corresponden a esos casos específicos:
 */
function audioTipoEquipos(tipoEquipo){
    var audioLocation;

    switch (tipoEquipo) {
        case 'electrodos':
            audioLocation = 'assets/voz/U14D042.mp3';
            break;
        case 'barrajes':
            audioLocation = 'assets/voz/U14D044.mp3';
            break;
        case 'conductores':                
            audioLocation = 'assets/voz/U14D046.mp3';
            break;
        case 'puentes':
            audioLocation = 'assets/voz/U14D048.mp3';
            break;
        case 'conectores':
            audioLocation = 'assets/voz/U14D050.mp3';
            break;
        case 'dispositivo':
            audioLocation = 'assets/voz/U14D052.mp3';
            break;
        default:
            break;
    }
    
    reproducirAudio(audioLocation);
}

function audioComentariosFrecuencia(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D055.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D056.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D057.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D058.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D059.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D060.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U14D061.mp3';
            break;    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioCollapsePuntos(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 0:
            audioLocation = 'assets/voz/U14D070.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D072.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D073.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D074.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D075.mp3';
            break;
        default:
            break;
    }         
    
    reproducirAudio(audioLocation);
}

function audioImagenesCA(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D078.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D079.mp3';
            break;
        case 3:
            $("#carouselFrecuencia_2").carousel(0)
            audioLocation = 'assets/voz/U14D080.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D083.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D084.mp3';
            break;            
        case 6:
            audioLocation = 'assets/voz/U14D085.mp3';
            break;            
        default:
            break;
    }

    reproducirAudio(audioLocation);    
}

function audioTransformadoresTab(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D086.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D087.mp3';
            break;
        case 3:            
            audioLocation = 'assets/voz/U14D088.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioTiposLinea(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D090.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D091.mp3';
            break;
        case 3:            
            audioLocation = 'assets/voz/U14D092.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioTiposCorriente(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D094.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D095.mp3';
            break;
        case 3:            
            $("#carouselTipoCorriente").carousel(0);
            audioLocation = 'assets/voz/U14D096.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioTiposConexiones(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D099.mp3';
            break;
        case 2:
            $("#carouselConexionDelta").carousel(0);
            audioLocation = 'assets/voz/U14D100.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioImanes(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D110.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D111.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D112.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D113.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D114.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D115.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U14D116.mp3';
            break;
        case 8:
            audioLocation = 'assets/voz/U14D117.mp3';
            break;
        case 9:
            audioLocation = 'assets/voz/U14D118.mp3';
            break;
        case 10:
            audioLocation = 'assets/voz/U14D119.mp3';
            break;
        case 11:
            audioLocation = 'assets/voz/U14D120.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioElectroImanesDiapositiva(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 0:
            audioLocation = 'assets/voz/U14D132.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D133.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D134.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioElectroImanesTabs(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D135.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D136.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D137.mp3';
            break;
        case 4:
            $("#carouselFoucault").carousel(0);
            audioLocation = 'assets/voz/U14D138.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioTabs(opcion) {
    var audioLocation;

    switch (opcion) {
        case 'Objetivos':
            audioLocation = 'assets/voz/U001P05002.mp3';
            break;
        case 'Contenido':
            audioLocation = 'assets/voz/U001P05003.mp3';
            break;
        case 'Metodologia':
            audioLocation = 'assets/voz/U001P05004.mp3';
            break;
        case 'unidad_aprenderas':
            console.log("lo que aprenderás")
            audioLocation = 'assets/voz/U001P05006.mp3';
            break;
        case 'unidad_necesitas':
            audioLocation = 'assets/voz/U001P05007.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}


$('#carouselpantalla4_modal2').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselpantalla4_modal2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U001P05015.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U001P05016.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U001P05008.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U001P05009.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05010.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators2').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U001P05029.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U001P05030.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05031.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators3').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators3>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U001P05076.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U001P05077.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05078.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselExampleIndicators4').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators4>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U001P05110.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U001P05111.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05112.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators5').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators5>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U001P05135.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U001P05136.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05137.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselpantalla11').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselpantalla11>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U001P05045.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U001P05046.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U001P05047.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U001P05048.mp3';
            break;  
        case 4:
            audioLocation = 'assets/voz/U001P05049.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U001P05050.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U001P05051.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselpantalla12').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselpantalla12>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U001P05051.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U001P05052.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U001P05053.mp3';
            break; 
        case 3:
            audioLocation = 'assets/voz/U001P05054.mp3';
            break; 
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselpantalla16_modal4').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselpantalla16_modal4>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U001P05087.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U001P05088.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U001P05089.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U001P05090.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U001P05091.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U001P05092.mp3';
            break; 
        case 6:
            audioLocation = 'assets/voz/U001P05093.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U001P05095.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})


$('#carouselpantalla18').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselpantalla18>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U001P05099.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U001P05100.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U001P05101.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselpantalla21_modal2').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselpantalla21_modal2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U001P05117.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U001P05118.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U001P05119.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselpantalla21_modal4').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselpantalla21_modal4>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U001P05122.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U001P05123.mp3';
            break;     
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselpantalla21_modal5').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselpantalla21_modal5>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U001P05125.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U001P05126.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U001P05127.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U001P05128.mp3';
            break; 
        case 4:
            audioLocation = 'assets/voz/U001P05129.mp3';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselpantalla21_modal6').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselpantalla21_modal6>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U001P05131.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U001P05132.mp3';
            break;    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
////////////////////////////////////////////////////

$('#carouselConceptos').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselConceptos>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D017.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D018.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D019.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D020.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D021.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D022.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselConceptos_2').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselConceptos_2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D024.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D025.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D028.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselModalAcumuladores').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalAcumuladores>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D031.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D032.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselModalDinamos').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalDinamos>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D034.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D035.mp3';
            break;        
        case 2:
            audioLocation = 'assets/voz/U14D036.mp3';
            break;        
        case 3:
            audioLocation = 'assets/voz/U14D037.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselModalCeldas').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalCeldas>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D039.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D040.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselModalPaneles').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalPaneles>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D042.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D043.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D044.mp3';
            break;

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselFrecuencia').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFrecuencia>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D063.mp3';
            reproducirAudio(audioLocation);
            break;
        case 1:
            audioLocation = 'assets/voz/U14D064.mp3';
            reproducirAudio(audioLocation);
            break;
        case 5:
            audioLocation = 'assets/voz/U14D065.mp3';
            reproducirAudio(audioLocation);
            break;
        case 9:
            audioLocation = 'assets/voz/U14D066.mp3';
            reproducirAudio(audioLocation);
            break;

        default:
            break;
    }
})

$('#carouselGeneracionCorriente').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselGeneracionCorriente>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D067.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselTipoCorriente').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselTipoCorriente>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D096.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D097.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselConexionDelta').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselConexionDelta>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D100.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D101.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselMagnetismo').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselMagnetismo>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D121.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D122.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D123.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D124.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselElectromagnetismo').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselElectromagnetismo>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D127.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D129.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D130.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselFrecuencia_2').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFrecuencia_2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D080.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D081.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D082.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselFoucault').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFoucault>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D138.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D139.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})