function pantalla5_cambio(num){
    $(".pantalla5_color").css('background','#2c538e');
    $(".pantalla5_opcion"+num).css('background','#CFFFFF');
    var info = "";
    if (num == 1) {
        info = `
                <div class="row">
                  <div class="col-md-6">
                    <img src="assets/img/Figura5.png" class="img-fluid pantalla5_img">
                  </div>
                  <div class="col-md-6">
                    <p class="p_black"><span class="font-weight-bold">Longitud:</span> es la distancia lineal entre dos puntos.</p>
                    <p class="p_black"><span class="font-weight-bold">Masa:</span> Cantidad de materia de un cuerpo. </p>
                    <p class="p_black"><span class="font-weight-bold">Tiempo:</span> Duración de los acontecimientos. </p>
                    <p class="p_black"><span class="font-weight-bold">Temperatura:</span> Expresa el grado de calor de los cuerpos o del ambiente.</p>
                    <p class="p_black"><span class="font-weight-bold">Intensidad de corriente eléctrica:</span> es la cantidad de carga eléctrica que pasa por un circuito eléctrico.</p>
                    <p class="p_black"><span class="font-weight-bold">Intensidad luminosa:</span> es la cantidad de flujo luminoso o potencia luminosa sobre un punto.</p>
                    <p class="p_black"><span class="font-weight-bold">Cantidad de sustancia:</span> unidad que indica la cantidad de partículas químicas.</p>
                  </div>
                </div>
                `;
    }else if (num == 2) {
        info = `
                <div class="row">
                  <div class="col-md-6">
                    <img src="assets/img/Figura6.png" class="img-fluid pantalla5_img">
                  </div>
                  <div class="col-md-6 d-flex align-items-center">
                    <p class="p_black"><span class="font-weight-bold">Unidades Derivadas:</span> Estas unidades, surgen a partir de las unidades básicas.</p>
                  </div>
                </div>
                `;
    }else if (num == 3) {
        info = `
                <div class="row">
                  <div class="col-md-6">
                    <img src="assets/img/Figura7.png" class="img-fluid pantalla5_img">
                  </div>
                  <div class="col-md-6">
                    <p class="p_black">Para realizar la conversión se usa el método de factor de conversión que busca simplificar la unidad original para que quede la unidad nueva, se usa entre diferentes unidades del mismo tipo, así:</p>
                    <p class="p_black">Convertir 10 Tg a ng</p>
                    <p class="p_black">10 T<sub>g</sub>∗  10<sup>12</sup>/(1 T<sub>g</sub> )∗(1 n<sub>g</sub>)/10<sup>(−9)</sup> =(10∗10<sup>12</sup>  n<sub>g</sub>)/10<sup>(−9)</sup> =10∗10<sup>12</sup>∗10<sup>9</sup> n<sub>g</sub>=10<sup>22</sup> n<sub>g</sub>=1∗10<sup>22</sup> n<sub>g</sub></p>
                    <br>
                    <p class="p_black">Convertir 5 kg a g</p>
                    <p class="p_black">5 kg∗(10<sup>3</sup> g)/(1 k<sub>g</sub> )=5∗ 10<sup>3</sup> g</p>
                  </div>
                </div>
                `;
    }else if (num == 4) {
      info = `<div class="row">
                <div class="col-md-6">
                  <img src="assets/img/Figura5.png" class="img-fluid pantalla5_img">
                </div>
                <div class="col-md-6">
                  <p class="p_black"><span class="font-weight-bold">Longitud:</span> es la distancia lineal entre dos puntos.</p>
                  <p class="p_black"><span class="font-weight-bold">Masa:</span> Cantidad de materia de un cuerpo. </p>
                  <p class="p_black"><span class="font-weight-bold">Tiempo:</span> Duración de los acontecimientos. </p>
                  <p class="p_black"><span class="font-weight-bold">Temperatura:</span> Expresa el grado de calor de los cuerpos o del ambiente.</p>
                  <p class="p_black"><span class="font-weight-bold">Intensidad de corriente eléctrica:</span> es la cantidad de carga eléctrica que pasa por un circuito eléctrico.</p>
                  <p class="p_black"><span class="font-weight-bold">Intensidad luminosa:</span> es la cantidad de flujo luminoso o potencia luminosa sobre un punto.</p>
                  <p class="p_black"><span class="font-weight-bold">Cantidad de sustancia:</span> unidad que indica la cantidad de partículas químicas.</p>
                </div>
              </div>`;
    }
    $("#pantalla5").html(info);
}

function panatalla6_info(num){
  $(".pantalla6_color").css('background','#0A7DC9');
  $(".pantalla6_opcion"+num).css('background','#FFD900');
  var info = "";
  if (num == 1) {
    info = `
            <div style="background: #FFFEC0;" class="p-2 my-3">
              <p class="p_black"><span class="font-weight-bold">Conductores:</span> son los que permiten que a través de ellos transiten libremente las cargas eléctricas (electrones). No ofrece resistencia al paso de electrones. En este grupo se encuentran los metales (plata, aluminio, cobre, oro, potasio, magnesio). El cobre y el aluminio son usualmente usados por ser relativamente económicos y cumplir bien su función de conducir electricidad, mientras que el oro y la plata son los mejores conductores, pero no son muy usados debido al alto costo.</p>
            </div>
            `;
  }else if (num == 2) {
    info = `
            <div style="background: #FFFEC0;" class="p-2 my-3">
              <p class="p_black"><span class="font-weight-bold">Aislantes:</span> también llamados dieléctricos y son los materiales que presentan dificultad al paso de flujo eléctrico u ofrecen alta resistencia eléctrica. Ejemplo: cerámica, madera, cuarzo, arcilla, plástico, teflón, papel, vidrio. </p>
              <p class="p_black">Los aislantes se utilizan para revestir un conductor para que este pueda resistir el paso de corriente y proteger a las personas de hacer contacto directo con una parte conductora.</p>
            </div>
            `;
  }
  $("#pantalla6").html(info);
}

function pantalla7_cambio(num){
    $(".pantalla7_color").css('background','#2c538e');
    $(".pantalla7_opcion"+num).css('background','#CFFFFF');
    var info = "";
    if (num == 1) {
        info = `
                <div class="row">
                  <div class="col-md-12">
                    <p class="p_black"><span class="font-weight-bold">Longitud:</span> Según la relación anterior, la resistencia es directamente proporcional a su longitud, lo que quiere decir que, a mayor longitud, mayor resistencia.</p>
                  </div>
                </div>
                `;
    }else if (num == 2) {
        info = `
                <div class="row">
                  <div class="col-md-12">
                    <p class="p_black"><span class="font-weight-bold">Área:</span> Caso contrario sucede aquí, ya que la resistencia es inversamente proporcional al área, lo que quiere decir que, a mayor área, menos resistencia.</p>
                  </div>
                </div>
                `;
    }else if (num == 3) {
        info = `
                <div class="row">
                  <div class="col-md-12">
                    <p class="p_black"><span class="font-weight-bold">Coeficiente de resistividad:</span> es un valor constante que depende de las características de los materiales. Este coeficiente es un valor que indica el comportamiento que tiene el material al paso de corriente eléctrica, por ejemplo, un valor alto de resistividad indica que el material es un aislante mientras que un valor bajo indica que es un conductor. Este valor se debe de tener en cuenta a la hora de montar un circuito electrónico, ya que en la electrónica se manejan corrientes muy bajas y cualquier resistencia puede impedir que fluya la corriente necesaria para que funcione el circuito de forma eficiente.</p>
                  </div>
                </div>
                `;
    }else if (num == 4) {
        info = `
                <div class="row">
                  <div class="col-md-12">
                    <img src="assets/img/Figura8.png" class="img-fluid">
                  </div>
                </div>
                `;
    }else if (num == 5) {
        info = `
                <div class="row">
                  <div class="col-md-12 d-flex align-items-center">
                    <p class="p_black"><span class="font-weight-bold">Longitud:</span> Según la relación anterior, la resistencia es directamente proporcional a su longitud, lo que quiere decir que, a mayor longitud, mayor resistencia.</p>
                  </div>
                </div>
                `;
    }
    $("#pantalla7").html(info);
}

function pantalla10_info(num){
  var info = "";
  if (num == 1) {
    info =  `
            <div class="p-3" style="background: #2c538e">
              <div class="row">
                <div class="col-md-12">
                  <p class="p_black"><span class="font-weight-bold">Dependientes:</span> la tensión o corriente de salida dependen de un agente externo o elemento del circuito como un voltaje o corriente de una resistencia.</p>
                </div>
                <div class="col-md-6">
                  <div class="d-flex justify-content-center">
                    <img src="assets/img/figura9.png" class="img-fluid">
                  </div>
                  <p class="p_black">Símbolo de una fuente de voltaje dependiente.</p>
                </div>
                <div class="col-md-6">
                  <div class="d-flex justify-content-center">
                    <img src="assets/img/figura10.png" class="img-fluid">
                  </div>
                  <p class="p_black">Símbolo de una fuente de corriente dependiente</p>
                </div>
              </div>
            </div>
            `;
  }else if (num == 2) {
    info =  `
              <div class="p-3" style="background: #2c538e">
                <div class="row">
                  <div class="col-md-12">
                    <p class="p_black"><span class="font-weight-bold">Independientes:</span> entregan un valor de voltaje y corriente que no depende de ningún elemento del circuito, tienen un valor constante. El valor de tensión y corriente entregado es independiente de la carga que se conecte.</p>
                    <p class="p_black">La corriente eléctrica es la cantidad de flujo de carga que circula en un material conductor.</p>
                  </div>
                  <div class="col-md-6">
                    <div class="d-flex align-items-center" style="height: 100%;">
                      <div>
                        <img src="assets/img/figura11.png" class="img-fluid">
                        <p class="p_black">Símbolos de fuentes independientes</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="d-flex justify-content-center">
                      <img src="assets/img/figura12.png" class="img-fluid">
                    </div>
                    <p class="p_black">Símbolos de una fuente de corriente independiente</p>
                  </div>
                </div>
              </div>
            </div>
            `;
  }else if (num == 3) {
    info =  `
            <div class="p-3" style="background: #2c538e">
              <div class="row">
                <div class="col-md-12">
                  <p class="p_black"><span class="font-weight-bold">Corriente continua o directa:</span> se le llama así porque fluye en un solo sentido como la pila porque fluye en un polo a otro en un mismo sentido. Generalmente se representa con las siglas DC, que en inglés significa Direct Current y en español, se representa con las siglas CC, que significa Corriente Continua.</p>
                  <p class="p_black">Generalmente, los aparatos electrónicos tales como computadores, televisores, celulares, entre otros, utilizan este tipo de corriente. Su frecuencia es cero, porque permanece constante.</p>
                </div>
                <div class="col-md-6">
                  <img src="assets/img/figura13.png" class="img-fluid">
                </div>
                <div class="col-md-6">
                  <p class="p_black p-2">El circuito que convierte la corriente alterna en continua se llama rectificador, suelen llevar un circuito que disminuye el rizado de la onda como un filtro de condensador. La regulación, o estabilización de la tensión a un valor establecido, se consigue con un componente denominado regulador de tensión.</p>
                </div>
              </div>
            </div>
            `;
  }else if (num == 4) {
    info =  `
            <div class="p-3" style="background: #2c538e">
              <div class="row">
                <div class="col-md-12">
                  <p class="p_black"><span class="font-weight-bold">Corriente alterna:</span> se le llama así porque está constantemente cambiando su polaridad (entre positivo y negativo), se encuentra por ejemplo en los tomacorrientes de los hogares. Existen varias formas de onda siendo la más usada la senoidal, pero también se usan la cuadrada, la triangular, entre otras. Se le designa por las siglas AC en inglés Alternating Current, o en español CA. Esta corriente tiene una forma de onda que se repite entre 50 o 60  ciclos/s , este fenómeno se conoce como frecuencia.</p>
                </div>
                <div class="col-md-6">
                  <img src="assets/img/figura14.png" class="img-fluid">
                </div>
                <div class="col-md-6">
                  <p class="p_black p-2">La energía alterna es un tipo de corriente eléctrica, en la que la dirección del flujo de electrones va y viene a intervalos regulares o en ciclos. La corriente que fluye por las líneas eléctricas y la electricidad disponible normalmente en las casas procedente de los enchufes de la pared es corriente alterna.</p>
                </div>
              </div>
            </div>
            `;
  }else if (num == 5) {
    info =  `
            <div class="p-3" style="background: #2c538e">
              <div class="row">
                <div class="col-md-12">
                  <p class="p_black font-weight-bold">¿Qué es monofásica, bifásica, trifásica?</p>
                  <p class="p_black">Cuando se refiere a estos términos se está describiendo el número de fases que puede tener una conexión. Una fase se refiere al conductor activo ósea el que transporta normalmente la corriente eléctrica desde la red hasta un enchufe o toma corriente.</p>
                  <div class="row">
                    <div class="col-md-4 d-flex justify-content-center">
                      <button class="button-3d p_black" data-toggle="modal" data-target="#pantalla10_modal1" style="background: #FFCF00;" onclick="pantalla10Modal(1)">Fase monofásica</button>
                    </div>
                    <div class="col-md-4 d-flex justify-content-center">
                      <button class="button-3d p_black" data-toggle="modal" data-target="#pantalla10_modal2" style="background: #FFCF00;" onclick="pantalla10Modal(2)">Fase bifásica</button>
                    </div>
                    <div class="col-md-4 d-flex justify-content-center">
                      <button class="button-3d p_black" data-toggle="modal" data-target="#pantalla10_modal3" style="background: #FFCF00;" onclick="pantalla10Modal(3)">Fase trifásica </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `;
  }
  $("#pantalla10").html(info);
}

function pantalla13(num){
  $(".pantalla13_btn").css('background','#e67e22');
  $(".pantalla13_btn"+num).css('background','#FFFFFF');
  var info = "";
  if (num == 1) {
    info = `
            <div class="d-flex align-items-center" style="height: 100%;">
              <div>
                <div id="pantalla13_1">
                  <div>
                    <div class="row">
                      <div class="col-md-7">
                        <p class="p_black my-3"><span class="font-weight-bold">Materiales Eléctricos:</span> Existen materiales que permiten el flujo de energía eléctrica, mientras que hay otros materiales que no permiten el flujo de energía. Los materiales que permiten el flujo de energía eléctrica se conocen como CONDUCTORES, y los que no permiten el flujo de energía eléctrica se conocen como AISLANTES.</p>
                        <li><span class="font-weight-bold">Conductores eléctricos:</span> Son los materiales que permiten el flujo de energía eléctrica entre un punto y otro. Los conductores más utilizados son los de cobre o aluminio y estos pueden ser cable o alambre. </li>
                      </div>
                      <div class="col-md-5">
                        <img class="img70" src="assets/img/Figura21.png">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <div class="d-flex justify-content-around my-3" style="width: 100px;">
                    <div class="pantalla13_1_opcion1 pantalla13_color_1" onclick="pantalla13_cambio_1(1), pantalla13_cambio_1Audio(1)" style="width:15px;height:15px;background:#2c538e;border-radius:50%; cursor: pointer;">
                    </div>
                    <div class="pantalla13_1_opcion2 pantalla13_color_1" onclick="pantalla13_cambio_1(2), pantalla13_cambio_1Audio(2)" style="width:15px;height:15px;background:#FFCF00;border-radius:50%; cursor: pointer;">
                    </div>
                    <div class="pantalla13_1_opcion3 pantalla13_color_1" onclick="pantalla13_cambio_1(3), pantalla13_cambio_1Audio(3)" style="width:15px;height:15px;background:#FFCF00;border-radius:50%; cursor: pointer;">
                    </div>
                    <div class="pantalla13_1_opcion4 pantalla13_color_1" onclick="pantalla13_cambio_1(4), pantalla13_cambio_1Audio(4)" style="width:15px;height:15px;background:#FFCF00;border-radius:50%; cursor: pointer;">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `;
  }else if (num == 2) {
    info = `
            <div class="row">
              <div class="col-md-6">
                <p class="p_black"><span class="font-weight-bold">Materiales más usados:</span> Los principales materiales a tener en cuenta para realizar la instalación de un sistema eléctrico básico son los siguientes:</p>
                <ul>
                  <li><span class="font-weight-bold">Cable:</span> Su función es el transporte del flujo de la energía eléctrica hasta cada aparato eléctrico.</li>
                  <li><span class="font-weight-bold">Breakers:</span> Su función es proteger a los cables, aparatos y equipos contra fallas de sobre corriente.</li>
                  <li><span class="font-weight-bold">Canalizaciones:</span> Utilizadas para soporte, protección y figuración de los cables.</li>
                  <li><span class="font-weight-bold">Interruptor manual:</span> Aparato utilizado para abrir o cerrar el flujo de la energía eléctrica de manera manual.</li>
                  <li><span class="font-weight-bold">Tomacorriente:</span> Aparato utilizado para el suministro del flujo de energía eléctrica a un equipo, mediante la conexión de clavija y cable.</li>
                  <li><span class="font-weight-bold">Plafón o Luminaria:</span> Su función es recibir la energía eléctrica y emitir luz</li>
                </ul>
              </div>
              <div class="col-md-6 d-flex align-items-center">
                <img class="img70" src="assets/img/Figura24.png">
              </div>
            </div>
            `;
  }else if (num == 3) {
    info = `
            <div class="d-flex align-items-center" style="height: 100%;">
              <div>
                <div id="pantalla13_2">
                  <div class="row">
                    <div class="col-md-12">
                      <p class="p_black"><span class="font-weight-bold">Herramientas:</span> Las herramientas son las encargadas de ayudar en la instalación de un sistema eléctrico. Gracias a ellas se facilita la realización de ciertas tareas mecánicas y nos brindan seguridad. </p>
                      <p class="p_black">Dentro de las herramientas más utilizadas para la elaboración de trabajos eléctricos, se encuentran las siguientes:</p>
                      <ul>
                        <li>Pinza alicate: Herramienta que permite sujetar, doblar o cortar los conductores.</li>
                        <li>Destornilladores: Herramienta que se utiliza para aflojar o apretar tornillos. Existen diferentes tipos de destornilladores, entre los cuales están de tipo estrella, pala, redondos con ranura, entre otros.</li>
                        <li>Linterna: Es una herramienta de gran utilidad debido a que hay momentos donde no se cuenta con iluminación provisional.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <div class="d-flex justify-content-around my-3" style="width: 100px;">
                    <div class="pantalla13_2_opcion1 pantalla13_color_2" onclick="pantalla13_cambio_2(1), pantalla13_cambio_2Audio(1)" style="width:15px;height:15px;background:#2c538e;border-radius:50%; cursor: pointer;">
                    </div>
                    <div class="pantalla13_2_opcion2 pantalla13_color_2" onclick="pantalla13_cambio_2(2), pantalla13_cambio_2Audio(2)" style="width:15px;height:15px;background:#FFCF00;border-radius:50%; cursor: pointer;">
                    </div>
                    <div class="pantalla13_2_opcion3 pantalla13_color_2" onclick="pantalla13_cambio_2(3), pantalla13_cambio_2Audio(3)" style="width:15px;height:15px;background:#FFCF00;border-radius:50%; cursor: pointer;">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `;
  }else if (num == 4) {
    info = `<div class="d-flex align-items-center" style="height: 100%;">
              <div>
                <div class="row">
                  <div class="col-md-12">
                    <p class="p_black"><span class="font-weight-bold">Equipos para pruebas y ensayos:</span> Las pruebas y ensayos eléctricos permiten evaluar el estado de la instalación eléctrica antes de ponerla en funcionamiento. También se pueden realizar pruebas de rutina que permiten llevar a cabo mantenimientos preventivos de los equipos para cuidar los activos de las empresas. Antes de energizar una instalación eléctrica se deben realizar pruebas y ensayos de diferentes variables para garantizar el óptimo funcionamiento. Y si se cuenta con una instalación de mucho tiempo, es importante realizar también pruebas y ensayos para garantizar el correcto funcionamiento de la instalación.</p>
                  </div>
                </div>
              </div>
            </div>
            `;
  }else if (num == 5) {
    info = `
            <div class="d-flex align-items-center" style="height: 100%;">
              <div>
                <div id="pantalla13_3">
                  <div>
                    <div class="row">
                      <div class="col-md-6">
                        <p class="p_black font-weight-bold">Pruebas y ensayos más comunes en instalaciones eléctricas:</p>
                        <p class="p_black"><span class="font-weight-bold">Análisis termográfico:</span> El análisis termográfico sirve para medir de una manera continua temperaturas de una superficie en tiempo real. Es de gran utilidad para saber si en algún punto de la instalación eléctrica hay un incremento inusual de la temperatura que pueda representar una falla. Este análisis que se hace por medio de una cámara termográfica capas de analizar y visualizar la temperatura que esta en el objeto que se observa, su funcionamiento se basa en la captación de los niveles de luz infrarrojos que es generada por los y estos son imperceptibles al ojo humano.</p>
                      </div>
                      <div class="col-md-6">
                        <img class="img70" src="assets/img/Figura26.png">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <div class="d-flex justify-content-around my-3" style="width: 100px;">
                    <div class="pantalla13_3_opcion1 pantalla13_color_3" onclick="pantalla13_cambio_3(1), pantalla13_cambio_3Audio(1)" style="width:15px;height:15px;background:#2c538e;border-radius:50%; cursor: pointer;">
                    </div>
                    <div class="pantalla13_3_opcion2 pantalla13_color_3" onclick="pantalla13_cambio_3(2), pantalla13_cambio_3Audio(2)" style="width:15px;height:15px;background:#FFCF00;border-radius:50%; cursor: pointer;">
                    </div>
                    <div class="pantalla13_3_opcion3 pantalla13_color_3" onclick="pantalla13_cambio_3(3), pantalla13_cambio_3Audio(3)" style="width:15px;height:15px;background:#FFCF00;border-radius:50%; cursor: pointer;">
                    </div>
                    <div class="pantalla13_3_opcion4 pantalla13_color_3" onclick="pantalla13_cambio_3(4), pantalla13_cambio_3Audio(4)" style="width:15px;height:15px;background:#FFCF00;border-radius:50%; cursor: pointer;">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `;
  }else if (num == 6) {
    info = `
            <div class="d-flex align-items-center" style="height: 100%;">
              <div>
                <div id="pantalla13_4">
                  <div>
                    <div class="row">
                      <div class="col-md-6">
                        <p class="p_black font-weight-bold">Medición de la resistividad del suelo y resistencia de puestas a tierra:</p>
                        <p class="p_black">El ensayo de resistividad del suelo tiene aplicaciones en geofísica, que es el conocer el grueso y profundidad de la roca, mientras que en aplicaciones eléctricas se realiza para conocer suelos conductivos con muy poca resistencia con el fin de realizar el sistema de puesta a tierra en él.</p>
                        <p class="p_black">Para realizar un estudio correcto de un sistema de puesta a tierra, se recomienda realizar el ensayo de resistividad, aunque no es un requisito obligatorio, pero realizar dicho ensayo nos garantiza un valor de resistencia de puesta a tierra seguro.</p>
                        <p class="p_black">El equipo utilizado para realizar los ensayos de resistividad se llama telurómetro.</p>
                      </div>
                      <div class="col-md-6">
                        <img class="img70" src="assets/img/Figura30.png">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <div class="d-flex justify-content-around my-3" style="width: 100px;">
                    <div class="pantalla13_4_opcion1 pantalla13_color_4" onclick="pantalla13_cambio_4(1), pantalla13_cambio_4Audio(1)" style="width:15px;height:15px;background:#2c538e;border-radius:50%; cursor: pointer;">
                    </div>
                    <div class="pantalla13_4_opcion2 pantalla13_color_4" onclick="pantalla13_cambio_4(2), pantalla13_cambio_4Audio(2)" style="width:15px;height:15px;background:#FFCF00;border-radius:50%; cursor: pointer;">
                    </div>
                    <div class="pantalla13_4_opcion3 pantalla13_color_4" onclick="pantalla13_cambio_4(3), pantalla13_cambio_4Audio(3)" style="width:15px;height:15px;background:#FFCF00;border-radius:50%; cursor: pointer;">
                    </div>
                    <div class="pantalla13_4_opcion4 pantalla13_color_4" onclick="pantalla13_cambio_4(4), pantalla13_cambio_4Audio(4)" style="width:15px;height:15px;background:#FFCF00;border-radius:50%; cursor: pointer;">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `;
  }else if (num == 7) {
    info = `
            <div class="d-flex align-items-center" style="height: 100%;">
              <div>
                <div id="pantalla13_5">
                  <div>
                    <div class="row">
                      <div class="col-md-12">
                        <p class="p_black"><span class="font-weight-bold">Medición de la resistencia de aislamiento:</span> La medición de la resistencia de aislamiento es una prueba que se realiza a conductores, tableros, entre otros, para conocer el estado del aislamiento del producto en análisis. Esto quiere decir que se va a realizar una medida para saber si el producto está en óptimas condiciones y no se están presentando fugas o contactos indebidos en el flujo de energía eléctrica y esto pueda ocasionar riesgo eléctrico. Adicionalmente, es muy importante realizar esta prueba debido a que ayuda a detectar si el producto ya se está acercando al final de su vida útil. </p>
                        <p class="p_black">El desgaste de la resistencia de aislamiento de un producto se debe a lo siguiente: Por sobrevoltajes o sobrecorrientes, exposición del producto a daños físicos debido a golpes, pisones, etc., por exposiciones en ambientes a los cuales el producto no está diseñado y por finalización de la vida útil del producto.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <div class="d-flex justify-content-around my-3" style="width: 50px;">
                    <div class="pantalla13_5_opcion1 pantalla13_color_5" onclick="pantalla13_cambio_5(1), pantalla13_cambio_5Audio(1)" style="width:15px;height:15px;background:#2c538e;border-radius:50%; cursor: pointer;">
                    </div>
                    <div class="pantalla13_5_opcion2 pantalla13_color_5" onclick="pantalla13_cambio_5(2), pantalla13_cambio_5Audio(2)" style="width:15px;height:15px;background:#FFCF00;border-radius:50%; cursor: pointer;">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `;
  }else if (num == 8) {
    info = `<div class="row">
              <div class="col-md-12">
                <p class="p_black font-weight-bold h1">RECONOCIMIENTO DE MATERIALES, HERRAMIENTAS Y EQUIPOS PARA LAS PRUEBAS Y ENSAYOS</p>
              </div>
              <div class="col-md-8 d-flex align-items-center">
                <p class="p_black">Haz clic en cada botón para ampliar la información:</p>
              </div>
              <div class="col-md-4">
                <img class="img70" src="assets/img/electrico.png">
              </div>
            </div>`;
  }
  $("#pantalla13").html(info);
}

function pantalla13_cambio_1(num){
  $(".pantalla13_color_1").css('background','#FFCF00');
  $(".pantalla13_1_opcion"+num).css('background','#2c538e');
  var info ="";
  if (num == 1) {
    info = `
            <div>
              <div class="row">
                <div class="col-md-7">
                  <p class="p_black my-3"><span class="font-weight-bold">Materiales Eléctricos:</span> Existen materiales que permiten el flujo de energía eléctrica, mientras que hay otros materiales que no permiten el flujo de energía. Los materiales que permiten el flujo de energía eléctrica se conocen como CONDUCTORES, y los que no permiten el flujo de energía eléctrica se conocen como AISLANTES.</p>
                  <li><span class="font-weight-bold">Conductores eléctricos:</span> Son los materiales que permiten el flujo de energía eléctrica entre un punto y otro. Los conductores más utilizados son los de cobre o aluminio y estos pueden ser cable o alambre. </li>
                </div>
                <div class="col-md-5">
                  <img class="img70" src="assets/img/Figura21.png">
                </div>
              </div>
            </div>
            `;
  }else if (num == 2) {
    info = `
              <div>
                <div class="row">
                  <div class="col-md-12">
                    <li><span class="font-weight-bold">Aislantes:</span> Son aquellos materiales que no permiten el fujo de energía eléctrica entre dos puntos. Existen materiales aislantes tales como el PVC, el caucho, entre otros.</li>
                    <p class="p_black my-3">Los conductores que transportan energía eléctrica vienen envueltos en material aislante para evitar tensiones de contacto que pongan en riesgo la seguridad de las personas, animales o bienes.</p>
                    <img class="img70" src="assets/img/Figura22.png">
                  </div>
                </div>
              </div>
            `;
  }else if (num == 3) {
    info = `
            <div class="row">
              <div class="col-md-6">
                <li><span class="font-weight-bold">Canalizaciones:</span> Estos materiales son utilizados para que los conductores estén protegidos contra daños por impacto, humedad, entre otros y de esta manera mantener el tiempo de vida útil del conductor.  Una finalidad indirecta de las canalizaciones es dar un toque estético a la instalación.</li>
                <p class="p_black my-3">Se debe tener en cuenta las condiciones de la instalación tanto en los conductores como en las canalizaciones, para así escoger la canalización adecuada para las condiciones. Las canalizaciones se pueden instalar embebidas o sobrepuestas sobre alguna superficie ya sean paredes, techos, suelos, entre otros.</p>
              </div>
              <div class="col-md-6">
                <img class="img70" src="assets/img/Figura23.png">
              </div>
            </div>
            `;
  }else if (num == 4) {
    info = `
            <div class="row">
              <div class="col-md-12">
                <p class="p_black my-3">Existen canalizaciones metálicas (Acero, aluminio, hierro, entre otros) y existen canalizaciones plásticas (PVC, polietileno). Usualmente se utilizan las de tipo metálica de manera sobrepuesta y a la vista, bien sea en interiores o exteriores; mientras que las de tipo plástico se utilizan embebidas o donde no estén expuestas a daños. </p>
              </div>
            </div>
            `;
  }
  $("#pantalla13_1").html(info);
}

function pantalla13_cambio_2(num){
  $(".pantalla13_color_2").css('background','#FFCF00');
  $(".pantalla13_2_opcion"+num).css('background','#2c538e');
  var info ="";
  if (num == 1) {
    info = `
            <div class="row">
              <div class="col-md-12">
                <p class="p_black"><span class="font-weight-bold">Herramientas:</span> Las herramientas son las encargadas de ayudar en la instalación de un sistema eléctrico. Gracias a ellas se facilita la realización de ciertas tareas mecánicas y nos brindan seguridad. </p>
                <p class="p_black">Dentro de las herramientas más utilizadas para la elaboración de trabajos eléctricos, se encuentran las siguientes:</p>
                <ul>
                  <li>Pinza alicate: Herramienta que permite sujetar, doblar o cortar los conductores.</li>
                  <li>Destornilladores: Herramienta que se utiliza para aflojar o apretar tornillos. Existen diferentes tipos de destornilladores, entre los cuales están de tipo estrella, pala, redondos con ranura, entre otros.</li>
                  <li>Linterna: Es una herramienta de gran utilidad debido a que hay momentos donde no se cuenta con iluminación provisional.</li>
                </ul>
              </div>
            </div>
            `;
  }else if (num == 2) {
    info = `
              <div>
                <div class="row">
                  <div class="col-md-12">
                    <ul>
                      <li>Pelacables: Esta herramienta es utilizada para remover el aislamiento que traen los conductores eléctricos.</li>
                      <li>Guía pasa cables: Es una herramienta utilizada para tener una guía en las canalizaciones para facilitar el tendido de los conductores. </li>
                      <li>Tijera Cortafrío: Herramienta utilizada para el corte de conductores.</li>
                      <li>Equipos de corte: Estas herramientas son utilizadas para realizar corte de materiales duros.</li>
                      <li>Equipos para perforaciones: Estas herramientas son usadas para realizar perforaciones a través de paredes, muros, techos o a través de ciertos materiales eléctricos.</li>
                      <li>Flexómetro: Es una herramienta utilizada para realizar mediciones de longitudes.</li>
                      <li>Llaves de torsión: Son herramientas utilizadas para apretar o desapretar tornillería.</li>
                    </ul>
                  </div>
                </div>
              </div>
            `;
  }else if (num == 3) {
    info = `
            <div class="row">
              <div class="col-md-12">
                <img class="img50 aumentar" src="assets/img/Figura25.png">
              </div>
              <div class="col-md-12">
                <p class="p_black my-3">Se debe trabajar con herramientas de buena calidad y certificadas para trabajos eléctricos, debido a que se debe garantizar el aislamiento del trabajador con cualquier flujo de energía eléctrica y así garantizar seguridad.</p>
              </div>
            </div>
            `;
  }
  $("#pantalla13_2").html(info);
}

function pantalla13_cambio_3(num){
  $(".pantalla13_color_3").css('background','#FFCF00');
  $(".pantalla13_3_opcion"+num).css('background','#2c538e');
  var info ="";
  if (num == 1) {
    info = `
            <div>
              <div class="row">
                <div class="col-md-6">
                  <p class="p_black font-weight-bold">Pruebas y ensayos más comunes en instalaciones eléctricas:</p>
                  <p class="p_black"><span class="font-weight-bold">Análisis termográfico:</span> El análisis termográfico sirve para medir de una manera continua temperaturas de una superficie en tiempo real. Es de gran utilidad para saber si en algún punto de la instalación eléctrica hay un incremento inusual de la temperatura que pueda representar una falla. Este análisis que se hace por medio de una cámara termográfica capas de analizar y visualizar la temperatura que esta en el objeto que se observa, su funcionamiento se basa en la captación de los niveles de luz infrarrojos que es generada por los y estos son imperceptibles al ojo humano.</p>
                </div>
                <div class="col-md-6">
                  <img class="img70" src="assets/img/Figura26.png">
                </div>
              </div>
            </div>
            `;
  }else if (num == 2) {
    info = `
              <div>
                <div class="row">
                  <div class="col-md-6">
                    <p class="p_black"><span class="font-weight-bold">Medición de voltaje y corriente eléctrica:</span> Existen equipos electrónicos que nos facilitan la medición de las diferentes variables que se necesitan conocer en un sistema eléctrico. En este caso se hace referencia a la medición del voltaje y la corriente eléctrica de un sistema eléctrico.</p>
                    <p class="p_black"><span class="font-weight-bold">La resistencia:</span> Se representa en ohmios (Ω), y se refiere a la capacidad de un conductor de permitir o no el flujo de energía eléctrica. </p>
                    <p class="p_black"><span class="font-weight-bold">La tensión:</span> Se refiere a la diferencia de potencial presente entre dos puntos. Se representa en Voltios (V).</p>
                    <p class="p_black"><span class="font-weight-bold">La intensidad:</span> también conocida como corriente y es la cantidad de flujo de energía eléctrica que circula. Se expresa en Amperios (A).</p>
                  </div>
                  <div class="col-md-6">
                    <img class="img70" src="assets/img/Figura27.png">
                  </div>
                </div>
              </div>
            `;
  }else if (num == 3) {
    info = `
            <div>
              <div class="row">
                <div class="col-md-6">
                  <p class="p_black">A continuación, se observa un multímetro. Este equipo es de gran ayuda, debido a que en el podemos medir las tres variables principales en un sistema eléctrico básico. Su funcionamiento se basa se basa en la utilización de un galvanómetro que se emplea para todas las mediciones. Para poder medir cada una de las magnitudes eléctricas, el galvanómetro se debe completar con un determinado circuito eléctrico que depende de cuáles son las características del galvanómetro: la resistencia interna (Ri) y la inversa de la sensibilidad. Esta última es la intensidad que, aplicada directamente a los bornes del galvanómetro, hace que la aguja llegue al fondo de escala.</p>
                </div>
                <div class="col-md-6">
                  <img class="img50" src="assets/img/Figura28.png">
                </div>
              </div>
            </div>
            `;
  }else if (num == 4) {
    info = `
            <div>
              <div class="row">
                <div class="col-md-6">
                  <p class="p_black"><span class="font-weight-bold">Detectores de tensión:</span> Equipo o herramienta que permite detectar la ausencia o el flujo de energía eléctrica. Este instrumento de comprobación está compuesto con un filtro sensible que filtra las perturbaciones de alta frecuencia, con lo que permiten indicar la existencia de tensión de forma particularmente segura. Cuando se detecta tensión, el instrumento emite una señal de aviso inequívoca de tipo visual </p>
                </div>
                <div class="col-md-6">
                  <img class="img70" src="assets/img/Figura29.png">
                </div>
              </div>
            </div>
            `;
  }
  $("#pantalla13_3").html(info);
}

function pantalla13_cambio_4(num){
  $(".pantalla13_color_4").css('background','#FFCF00');
  $(".pantalla13_4_opcion"+num).css('background','#2c538e');
  var info ="";
  if (num == 1) {
    info = `
            <div>
              <div class="row">
                <div class="col-md-6">
                  <p class="p_black font-weight-bold">Medición de la resistividad del suelo y resistencia de puestas a tierra:</p>
                  <p class="p_black">El ensayo de resistividad del suelo tiene aplicaciones en geofísica, que es el conocer el grueso y profundidad de la roca, mientras que en aplicaciones eléctricas se realiza para conocer suelos conductivos con muy poca resistencia con el fin de realizar el sistema de puesta a tierra en él.</p>
                  <p class="p_black">Para realizar un estudio correcto de un sistema de puesta a tierra, se recomienda realizar el ensayo de resistividad, aunque no es un requisito obligatorio, pero realizar dicho ensayo nos garantiza un valor de resistencia de puesta a tierra seguro.</p>
                  <p class="p_black">El equipo utilizado para realizar los ensayos de resistividad se llama telurómetro.</p>
                </div>
                <div class="col-md-6">
                  <img class="img70" src="assets/img/Figura30.png">
                </div>
              </div>
            </div>
            `;
  }else if (num == 2) {
    info = ` 
            <div>
              <div class="row">
                <div class="col-md-6">
                  <p class="p_black">Para realizar este ensayo, se deben enterrar 4 varillas o electrodos en el suelo a medir. Las varillas se deben colocar en línea recta a igual distancia y con la misma profundidad de enterramiento.</p>
                  <p class="p_black">El ensayo consiste en la inyección de corriente directa a través del suelo entre las varillas C1 y C2, mientras que en las varillas P1 y P2 se realiza medición del potencial que surge. </p>
                  <p class="p_black">Para conocer la resistencia aparente, se utiliza la relación V/I. La resistividad aparente del terreno es una función de esta resistencia y de la geometría del electrodo.</p>
                </div>
                <div class="col-md-6">
                  <img class="img70" src="assets/img/Figura31.png">
                </div>
              </div>
            </div>
            `;
  }else if (num == 3) {
    info = `
            <div>
              <div class="row">
                <div class="col-md-12">
                  <p class="p_black">A continuación, se puede observar claramente la distribución de las varillas o electrodos y los puntos en los cuales se deben tener en cuenta las variables de corriente y voltaje. De acuerdo con esto, para conocer la resistividad aparente del suelo se utiliza la siguiente relación:</p>
                </div>
                <div class="col-md-12">
                  <img class="img50" src="assets/img/Figura32.png">
                </div>
              </div>
            </div>
            `;
  }else if (num == 4) {
    info = `
            <div>
              <div class="row">
                <div class="col-md-12">
                  <img class="img50" src="assets/img/Figura.png">
                </div>
                <div class="col-md-12">
                  <p class="p_black">Si la profundidad de enterramiento ‘b’ es más pequeña que la distancia de separación de varillas ‘a’, se puede utilizar la siguiente relación:</p>
                </div>
                <div class="col-md-12">
                  <img class="img20" src="assets/img/formula.png">
                </div>
                <div class="col-md-12">
                  <p class="p_black">Para la medida de puesta a tierra se utiliza el método del 62%, el cual consiste en colocar un electrodo de corriente a una distancia de 6,5 veces la diagonal de la malla de puesta a tierra y un electrodo de voltaje a una distancia que varía 52%, 62% y 72% de la distancia del electrodo de corriente. Los cables de potencial y de corriente van al equipo de medida (Telurómetro), el cual se ubica al lado de la varilla o electrodo que esta accesible para realizar la medida. Al electrodo se le conecta un cable, el cual va al equipo de medida.</p>
                </div>
              </div>
            </div>
            `;
  }
  $("#pantalla13_4").html(info);
}

function pantalla13_cambio_5(num){
  $(".pantalla13_color_5").css('background','#FFCF00');
  $(".pantalla13_5_opcion"+num).css('background','#2c538e');
  var info ="";
  if (num == 1) {
    info = `
            <div>
              <div class="row">
                <div class="col-md-12">
                  <p class="p_black"><span class="font-weight-bold">Medición de la resistencia de aislamiento:</span> La medición de la resistencia de aislamiento es una prueba que se realiza a conductores, tableros, entre otros, para conocer el estado del aislamiento del producto en análisis. Esto quiere decir que se va a realizar una medida para saber si el producto está en óptimas condiciones y no se están presentando fugas o contactos indebidos en el flujo de energía eléctrica y esto pueda ocasionar riesgo eléctrico. Adicionalmente, es muy importante realizar esta prueba debido a que ayuda a detectar si el producto ya se está acercando al final de su vida útil. </p>
                  <p class="p_black">El desgaste de la resistencia de aislamiento de un producto se debe a lo siguiente: Por sobrevoltajes o sobrecorrientes, exposición del producto a daños físicos debido a golpes, pisones, etc., por exposiciones en ambientes a los cuales el producto no está diseñado y por finalización de la vida útil del producto.</p>
                </div>
              </div>
            </div>
            `;
  }else if (num == 2) {
    info = ` 
            <div>
              <div class="row">
                <div class="col-md-6">
                  <p class="p_black">Para saber el estado en que se encuentra la resistencia de aislamiento de un producto, basta con realizar la inyección de voltaje entre 500V y 1000V; mientras que existen otras aplicaciones más sofisticadas para grandes equipos en los que se realiza esta prueba con inyecciones de voltaje superiores a los 1000V.</p>
                  <p class="p_black">A continuación, se puede observar el equipo más común para realizar las pruebas de resistencia de aislamiento. Este equipo es conocido como ‘Meghometro’ y su aplicación principal es la de permitir inyectar diferentes rangos de voltajes para llevar a cabo la prueba de resistencia de aislamiento, usualmente de conductores y tablero eléctricos. Este equipo también brinda la función de realizar medidas de voltaje y continuidad.</p>
                </div>
                <div class="col-md-6">
                  <img class="img50" src="assets/img/Figura33.png">
                </div>
              </div>
            </div>
            `;
  }
  $("#pantalla13_5").html(info);
}

function pantalla18_info(num){
  $(".pantalla18_info").css('background','#FFFFFF');
  $(".pantalla18_info"+num).css('background','#FFEE95');
}

var intentosEscritos=0;
function respuesta() {
        var calificacion = 0;
        var r1 = $(".actividadtruefalse #res1").attr("name");
        var r2 = $(".actividadtruefalse #res2").attr("name");
        var r3 = $(".actividadtruefalse #res3").attr("name");
            switch (r1) {
              case "r1":
                var res_1 = $("input[name*='r1']").val();
                if (res_1 ==="Generación trifásica") {
                    calificacion++;
                }
                $("#res1").html('');
                break;
              default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
            }
            switch (r2) {
              case "r2":
                var res_2 = $("input[name*='r2']").val();
                if (res_2 ==="Partes de un motor eléctrico rotativo") {
                    calificacion++;
                }
                $("#res2").html('');
                break;
              default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
            }
            switch (r3) {
              case "r3":
                var res_3 = $("input[name*='r3']").val();
                if (res_3 ==="Planos") {
                    calificacion++;
                }
                $("#res3").html('');
                break;
              default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
            }
      
      if (calificacion === 3) {
          Swal.fire({
              title: '¡Buen trabajo!',
              text: 'Has respondido correctamente todas las preguntas',
              icon: 'success',
              showDenyButton: true,            
              confirmButtonText: 'Jugar de nuevo',
              denyButtonText: 'Terminar'
          })
      } else{
          intentosEscritos++;

          if(intentosEscritos >= 2){
              Swal.fire(
                  '¡Has superado el número de intentos!',
                  'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
                  'warning'
              )
              intentosEscritos = 0;
              $(".pantalla26_input").html('');
          } else {
              Swal.fire(
                  '¡Lo sentimos!',
                  'Puedes intentarlo de nuevo',
                  'error'
              )
          }
      }
    }

function pantalla21_color(num){
  $(".pantalla21_color").css('background','#3e6fb9');
  $(".pantalla21_color"+num).css('background','#FFCF00');
}
function pantalla24(num){
  $(".pantalla24_color").removeClass('button-3d');
  $(".pantalla24_color").removeClass('button-3d-azul');
  $(".pantalla24_color").addClass('button-3d');
  $(".pantalla24_color"+num).removeClass('button-3d');
  $(".pantalla24_color"+num).addClass('button-3d-azul');
  var info = "";
  if (num == 1) {
    info = `
            <div class="col-md-12">
                <div id="carouselpantalla24_1" class="carousel slide">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div>
                          <p class="p_black font-weight-bold text-center">TÉCNICAS PARA LA CONEXIÓN DE EQUIPOS Y ESPECIFICACIONES TÉCNICAS</p>
                          <p class="p_black">A la hora de realizar la conexión de equipos eléctricos, se debe tener muy en cuenta el manual de instalación otorgado por el fabricante, para conocer las características eléctricas del equipo y así realizar una correcta instalación. Otros factores a tener en cuenta son los siguientes:</p>
                          <p class="p_black">Planear y gestionar las herramientas, el material y todos los equipos extras que se necesiten para llevar a cabo la tarea de conexión de equipos eléctricos, según sus principales características y funcionalidad.</p>
                          <p class="p_black">Entender los diferentes manuales y esquemas de montaje antes de llevar a cabo la conexión del equipo eléctrico.</p>
                          <p class="p_black">Conocer y utilizar las técnicas de cableado y conexión de equipos eléctricos según las normas técnicas establecidas.</p>
                        </div>
                        <p class="text-center"><a class="pull-right" href="#carouselpantalla24_1" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                    </div>
                    <div class="carousel-item">
                        <div>
                          <p class="p_black">Las especificaciones técnicas describen la necesidad y las características técnicas de la instalación eléctrica. Dichas especificaciones tienen la finalidad de definir todas las características de la construcción, tales como equipos, materiales, pruebas, ensayos, y energización. Las especificaciones técnicas son de suma importancia y siempre se deben tener en cuenta en cualquier equipo, se deben conocer las características, funciones operativas, comunicación y conexiones.</p>
                          <p class="p_black">Son muy importantes para definir la calidad de los trabajos. Además, son un complemento de los planos que en ocasiones no son suficientes para definir la calidad de una obra o un equipo, así que las especificaciones técnicas son un documento con una descripción complementaria. Hay diferentes normas que se deben tener en cuenta en la ejecución de obras, tales como: RETILAP: Reglamento Técnico de Iluminación y Alumbrado, RETIE: Reglamento Técnico de Instalaciones Eléctricas, NTC 4552: Protección contra Descargas atmosféricas.</p>
                        </div>
                        <p class="text-center"><a class="" href="#carouselpantalla24_1" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a><a class="" href="#carouselpantalla24_1" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                    </div>
                    <div class="carousel-item">
                        <div>
                          <p class="p_black">Las especificaciones técnicas tienen datos que como se nombró anteriormente sirven para complementar los planos y sus detalles, esta serie de datos son:</p>
                          <ul>
                            <li><span class="font-weight-bold">Descripción de la actividad:</span> se debe describir en que consiste la actividad y todo lo relacionada con ella.</li>
                            <li><span class="font-weight-bold">Materiales para utilizar:</span> nombrar los materiales que se van a utilizar con sus cualidades y calidad.</li>
                            <li><span class="font-weight-bold">Equipo:</span> equipos que se necesitan para la ejecución del trabajo.</li>
                            <li><span class="font-weight-bold">Transportes:</span> transporte a necesitar dependiendo el tipo de maquina o equipo.</li>
                            <li><span class="font-weight-bold">Mano de obra:</span> calidad del personal requerido para la ejecución de una actividad.</li>
                            <li><span class="font-weight-bold">Forma de medida y de pago:</span> se debe detallar el valor del contrato, describir cómo se va a medir y a pagar cada actividad en un trabajo (una obra).</li>
                          </ul>
                        </div>
                        <p class="text-center"><a class="" href="#carouselpantalla24_1" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a></p>
                    </div>
                  </div>
                </div>
            </div>
            `;
  }else if (num == 2) {
    info = `
            <div>
              <p class="p_black font-weight-bold text-center">MANEJO DE LOS MANUALES DE PROCEDIMIENTO Y DEL FABRICANTE</p>
              <p class="p_black">El manual de procedimiento de equipos eléctricos es un documento escrito que enumera paso a paso las instrucciones sobre cómo realizar la instalación, el montaje y conexión de un equipo eléctrico.</p>
              <p class="p_black">Dentro del manual de procedimiento, se puede encontrar la siguiente información que se debe tener en cuenta a la hora de realizar la instalación de un equipo eléctrico:</p>
              <ul>
                <li>Ubicar el lugar y la infraestructura del lugar donde se va a realizar la instalación.</li>
                <li>Verificar los planos eléctricos.</li>
                <li>Desconectar el flujo de corriente para realizar cualquier tipo de manipulación.</li>
                <li>Verificar protecciones, cableado y estado de los conectores.</li>
              </ul>
            </div>
            `;
  }else if (num == 3) {
    info = `
            <div>
              <p class="p_black font-weight-bold text-center">MANEJO DE LAS ESPECIFICACIONES TÉCNICAS DE LOS RECURSOS FÍSICOS PARA EL CABLEADO Y LA CONEXIÓN</p>
              <p class="p_black">Cuando se habla de recursos físicos para el cableado y la conexión, se habla de los materiales que se emplean en el momento de realizar el cableado eléctrico de las salidas eléctricas para los equipos y componentes.</p>
              <p class="p_black">Lo más importante es el cable eléctrico que se va a utilizar y las técnicas de cableado a tener en cuenta al momento de realizar la instalación del mismo. El cable debe ser apto tanto para las condiciones eléctricas de la instalación, como para las condiciones mecánicas y ambientales del lugar de instalación.</p>
              <p class="p_black">Las técnicas de cableado consisten en la correcta utilización e instalación de los materiales empleados para proteger y transportar el cable eléctrico. Dichos materiales puede ser tubos metálicos o tubos plásticos de PVC, canaletas metálicas y plásticas, bandejas portacables, cajas metálicas, cajas plásticas de PVC, conectores, entre otros. Todos estos materiales se deben instalar correctamente con sus accesorios.</p>
              <p class="p_black">Tener en cuenta que los materiales tipo plásticos PVC, solo se deben instalar cuando van embebidos en concreto, por muros o paredes y no se deben instalar a la vista o expuestos a daños físicos. Mientras que los materiales tipo metálicos, pueden ser instalados expuestos a la vista.</p>
              <p class="p_black">Los materiales se deben adaptar a las condiciones mecánicas y ambientales del lugar donde van a ser instalados.</p>
            </div>
            `;
  }else if (num == 4) {
    info = `
            <div class="col-md-12">
                <div id="carouselpantalla24_2" class="carousel slide">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div>
                          <p class="p_black font-weight-bold text-center">IDENTIFICACIÓN DE LOS SISTEMAS ACTIVOS Y REACTIVOS</p>
                          <p class="p_black">En la parte práctica se encuentran diferentes tipos de energía eléctrica, y una de ellas es la energía reactiva, pero la que más se conoce es la energía activa. Está la energía aparente, que es el conjunto de la energía activa y la energía reactiva.</p>
                          <p class="p_black">Las características de la energía reactiva son:</p>
                          <ul>
                            <li>No se realiza un consumo o un trabajo con ella.</li>
                            <li>Viene dada en kilo voltio-amperio reactivo hora (kVArh)</li>
                            <li>Es consumida por componentes inductivos de equipos eléctricos de corriente alterna tales como ascensores, electrodomésticos, motores, maquinaria industrial, entre otros.</li>
                            <li>La energía reactiva siempre está presente debido a que no se consume, por ende, se transporta una y otra vez a través de las redes eléctricas y esto puede ocasionar desbalances o desequilibrios en los sistemas eléctricos.</li>
                          </ul>
                        </div>
                        <p class="text-center"><a class="pull-right" href="#carouselpantalla24_2" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                    </div>
                    <div class="carousel-item">
                        <div>
                          <ul>
                            <li>La energía activa es aquella que requieren los equipos eléctricos para transformar la energía en calor, trabajo mecánico, o a la aplicación a la que está destinada el uso del equipo. Este tipo de energía viene dada por Kilovatios hora (kWh).</li>
                            <li>La energía aparente es la combinación de la energía activa y la energía reactiva, debido a que es la cantidad de energía total que necesita un equipo eléctrico para su funcionamiento tanto interno del equipo como externo para el usuario. Esta dada por kilovoltioAmperios (KVA). </li>
                            <li>La energía reactiva no se genera, pero si se transportar por las redes eléctricas y al suceder esto se hace necesario tener redes eléctricas con la capacidad adecuada, así como equipos de más capacidad y esto se cobra en la factura del cliente final.</li>
                            <li>El exceso de energía reactiva puede causar fallas a los sistemas eléctricos tales como sobrecalentamiento, perdida de la calidad de la energía, etc., y para la disminución de este tipo de energía se utilizan los elementos tales como condensadores.</li>
                            <li>Factor de Potencia: Este relaciona la cantidad de energía activa y la cantidad de energía reactiva de una instalación. Entre menor sea el factor de potencia, mayor es la cantidad de energía reactiva, y entre más alto sea el factor de potencia, menor cantidad de energía reactiva.</li>
                          </ul>
                        </div>
                        <p class="text-center"><a class="" href="#carouselpantalla24_2" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a></p>
                    </div>
                  </div>
                </div>
            </div>
            `;
  }else if (num == 5) {
    info = `
            <div>
              <p class="p_black font-weight-bold text-center">IDENTIFICACIÓN DE LAS TÉCNICAS PARA EL MONTAJE E INSTALACIÓN DE EQUIPOS Y COMPONENTES</p>
              <p class="p_black">Lo que se debe tener en cuenta en las técnicas para el montaje e instalación de equipos y componentes eléctricos es lo siguiente:</p>
              <ul>
                <li>Revisar el manual del usuario del equipo o componentes eléctrico otorgado por el fabricante.</li>
                <li>Identificar la infraestructura y el entorno donde se va a realizar la instalación de los equipos y componentes. </li>
                <li>Verificar el tipo de construcción, si es estructura metálica, concreto, mampostería, entre otros, con el fin de determinar los mecanismos de soporte de equipos y componentes, como además de los mecanismos de canalizaciones para el cableado eléctrico.</li>
                <li>Determinar el ambiente al que estarán expuestos los equipos, componentes y demás elementos que conforman la instalación. Ambientes corrosivos, húmedos, mojados, exteriores, interiores, entre otros.</li>
                <li>Determinar el tipo de materiales y herramientas adecuadas para realizar la correcta instalación y montaje de los equipos eléctricos.</li>
              </ul>
            </div>
            `;
  }else if (num == 6) {
    info = `
            <div class="col-md-12">
                <div id="carouselpantalla24_3" class="carousel slide">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div>
                          <p class="p_black font-weight-bold text-center">IDENTIFICAR EL TIPO DE CARGA: RESISTIVA (R), INDUCTIVA (L), CAPACITIVA (C), RL, RC, RLC:</p>
                          <p class="p_black">Circuitos resistivos en corriente alterna:</p>
                          <p class="p_black">Un circuito resistivo es aquel que en condiciones ideales tiene un consumo puro de energía netamente activa.</p>
                          <div style="display: flex; justify-content: center">
                          <img src="assets/img/Figura59.png" class="img30">
                          </div>
                          
                          <p class="p_black">Impedancia (Z): La impedancia representa la resistencia eléctrica total de un elemento eléctrico, teniendo en mente que se cuenta con una parte real que es la resistencia resistiva y otra imaginaria que es la resistencia inductiva o capacitiva. En los circuitos resistivos no hay parte imaginaria debido a que no hay resistencia inductiva o capacitiva.</p>
                          <p class="p_black text-center">Z = R + 0 j; Z= R (0°)</p>
                        </div>
                        <p class="text-center"><a class="pull-right" href="#carouselpantalla24_3" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                    </div>
                    <div class="carousel-item">
                        <div>
                          <p class="p_black">Circuitos capacitivos en corriente alterna:</p>
                          <p class="p_black">Estos elementos consumen energía reactiva y tienen una resistencia denominada reactancia capacitiva.</p>
                          <p class="p_black">La reactancia capacitiva se define con la siguiente fórmula:</p>
                          <div class="row">
                            <div class="col-md-6 offset-md-3">
                              <img src="assets/img/formula1.jpg" class="img20">
                            </div>
                            <div class="col-md-6">
                              <p class="p_black text-center">ω=Velocidad angular=2πf</p>
                              <p class="p_black text-center">C = Capacidad condensador</p>
                              <p class="p_black text-center">Xc = Reactancia Capacitiva</p>
                            </div>
                            <div class="col-md-6">
                              <img src="assets/img/Figura60.jpg" class="img50">
                            </div>
                          </div>
                        </div>
                        <p class="text-center"><a class="" href="#carouselpantalla24_3" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a><a class="" href="#carouselpantalla24_3" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                    </div>
                    <div class="carousel-item">
                        <div>
                          <div class="row p-3">
                            <p class="p_black">Existe una diferencia de fase entre la tensión y la corriente, lo que quiere decir que la corriente adelanta a la tensión 90 grados.</p>
                            <div class="col-md-12">
                              <img src="assets/img/Figura61.jpg" class="img20">
                            </div>
                            <p class="p_black">Impedancia (Z): En circuitos capacitivos no hay parte real, por ende, la impedancia en un circuito capacitivo puro, solo tiene parte imaginaria (Xc).</p>
                          </div>
                          <p class="p_black text-center">Z = 0 - J Xc = -J Xc; Z = Xc (-90°)</p>
                        </div>
                        <p class="text-center"><a class="" href="#carouselpantalla24_3" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a><a class="" href="#carouselpantalla24_3" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                    </div>
                    <div class="carousel-item">
                        <div>
                          <div class="row">
                            <div class="col-md-6">
                              <p class="p_black">Circuitos RC en corriente alterna:</p>
                              <img src="assets/img/Figura62.jpg" class="img50">
                              <p class="p_black">Angulo de desfase:</p>
                              <div class="row">
                                <div class="col-md-6 d-flex justify-content-center align-items-center">
                                  <img src="assets/img/formula2.jpg" class="img-fluid">
                                </div>
                                <div class="col-md-6 d-flex justify-content-center align-items-center">
                                  <img src="assets/img/Figura63.jpg" class="img-fluid">
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <p class="p_black">En los circuitos RC hay una diferencia de fase entre la tensión y la corriente, la cual depende de los valores de Resistencia R y de Resistencia Capacitiva Xc. Estos valores son mayores a 0 y menores a 90 grados.</p>
                              <p class="p_black">Impedancia (Z): La impedancia está conformada por una parte real (R) y por una parte imaginaria (Xc).</p>
                              <p class="p_black text-center">Z = R - J Xc;</p>
                            </div>
                          </div>
                        </div>
                        <p class="text-center"><a class="" href="#carouselpantalla24_3" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a><a class="" href="#carouselpantalla24_3" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                    </div>
                    <div class="carousel-item">
                        <div>
                          <div class="row">
                            <div class="col-md-12">
                              <p class="p_black">Circuitos inductivos en corriente alterna:</p>
                              <p class="p_black">Estos elementos utilizan energía reactiva y están conformados por una reactancia inductiva la cual se comporta como una resistencia al paso de la corriente. Viene dada por la expresión:</p>
                            </div>
                            <div class="col-md-4">
                              <p class="p_black">ω = Velocidad angular = 2 π f</p>
                              <p class="p_black">L = Inductancia</p>
                              <p class="p_black">Xl = Reactancia inductiva</p>
                              <p class="p_black">Circuitos inductivos puros:</p>
                            </div>
                            <div class="col-md-4">
                              <div class="row">
                                <div class="col-md-12 d-flex justify-content-center align-items-center">
                                  <img src="assets/img/formula3.jpg" class="img-fluid">
                                </div>
                                <div class="col-md-12 d-flex justify-content-center align-items-center">
                                  <img src="assets/img/Figura64.jpg" class="img-fluid">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p class="text-center"><a class="" href="#carouselpantalla24_3" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a><a class="" href="#carouselpantalla24_3" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                    </div>
                    <div class="carousel-item">
                        <div>
                          <div class="row p-3">
                            <p class="p_black">En un circuito inductivo, se tiene que el voltaje adelanta 90 grados a la corriente</p>
                            <div class="col-md-12">
                              <img src="assets/img/Figura65.jpg" class="img20">
                            </div>
                            <p class="p_black">Impedancia: En circuitos inductivos se cuenta únicamente con parte imaginaria, por ende, la impedancia viene dada por:</p>
                          </div>
                          <p class="p_black text-center">Z = XL (90°)</p>
                        </div>
                        <p class="text-center"><a class="" href="#carouselpantalla24_3" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a><a class="" href="#carouselpantalla24_3" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                    </div>
                    <div class="carousel-item">
                        <div>
                          <div class="row p-3">
                            <p class="p_black">Circuitos RL en corriente alterna:</p>
                            <p class="p_black">En los circuitos RC hay una diferencia de fase entre la tensión y la corriente, la cual depende de los valores de Resistencia R y de Resistencia Capacitiva Xc. Estos valores son mayores a 0 y menores a 90 grados.</p>
                            <p class="p_black">En los circuitos RL hay una diferencia de fase entre la tensión y la corriente, la cual depende de los valores de resistencia R y de resistencia inductiva Xl y tiene valores mayores a 0 y menores a 90 grados.</p>
                            <div class="col-md-2">
                              <p class="p_black">Angulo de desfase:</p>
                            </div>
                            <div class="col-md-2">
                              <img src="assets/img/formula4.jpg" class="img-fluid">
                            </div>
                            <div class="col-md-12">
                              <p class="p_black">Impedancia (Z): La impedancia está dada por una parte real (R) y una parte imaginaria (Xl). Se expresa de la siguiente forma:</p>
                            </div>
                          </div>
                          <p class="p_black text-center">Z = R + j Xl</p>
                        </div>
                        <p class="text-center"><a class="" href="#carouselpantalla24_3" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a></p>
                    </div>
                  </div>
                </div>
            </div>
            `;
  }else if (num == 7) {
    info = `
            <div>
              <p class="p_black font-weight-bold text-center">IDENTIFICACIÓN DE PROCEDIMIENTOS TÉCNICOS PARA LA CONEXIÓN DE EQUIPOS Y ELEMENTOS ELÉCTRICOS</p>
              <p class="p_black">Los procedimientos técnicos para la conexión de equipos y elementos eléctricos se enfocan básicamente en el manual del usuario del equipo, otorgado por el fabricante. Allí se podrá ver todas las características eléctricas del equipo, tales como Voltaje de operación del equipo, potencia de consumo del equipo, tipo de conexiones (conector, empalme), diagramas de conexión, tipo de conductores para la conexión y código de colores.</p>
              <p class="p_black">Otros factores a tener en cuenta para la conexión de los equipos y elementos eléctricos, es el ambiente al que estarán expuestos (exterior, interior, húmedo, mojado, corrosivo, entre otros). Esto es importante para escoger correctamente el tipo de conectores o elementos adicionales que se necesiten para llevar a cabo las conexiones, ya que estos materiales se deben adaptar tanto a las condiciones eléctricas, como a las condiciones mecánicas y ambientales.</p>
            </div>
            `;
  }else if (num == 8) {
    info = `<div>
              <p>MONTAR LOS ELEMENTOS PARA EL SISTEMA POLIFÁSICO, DE ACUERDO AL DISEÑO REALIZADO Y UTILIZANDO MANUALES Y NORMAS DE SEGURIDAD, IDENTIFICAR E INTERPRETAR EL SISTEMA POLIFÁSICO CON BASE EN LOS PARÁMETROS CARACTERÍSTICOS Y LA CONEXIÓN, REALIZAR EL MONTAJE, INSTALACIÓN Y CONEXIÓN DE EQUIPOS Y COMPONENTES ELÉCTRICOS, CALCULAR LOS PARÁMETROS ELÉCTRICOS, USANDO PRINCIPIOS Y LEYES DE ELECTRICIDAD Y DEFINIR LAS CARACTERÍSTICAS DE FUNCIONAMIENTO DE EQUIPOS Y COMPONENTES ELÉCTRICOS PARA SU MONTAJE, INSTALACIÓN Y CONEXIÓN.</p>
              <p class="font-weight-bold text-center">Da clic en cada botón para ampliar la información</p>
            </div>`
  }
  $("#pantalla24").html(info);
}