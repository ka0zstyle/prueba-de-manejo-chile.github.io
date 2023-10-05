document.addEventListener("DOMContentLoaded", function () {

const questions = [

 {number: 1,
        question: "Su vehículo se desvía hacia un lado cuando usted frena. Usted debería:",
        options: ["A) Cambiar los neumáticos de un lado hacia el otro y viceversa.",
            "B) Bombear el pedal al frenar.",
            "C) Usar su freno de mano.",
            "D) Consultar con su mecánico lo antes posible."    ],
               image: false,
        correctAnswers: ["D) Consultar con su mecánico lo antes posible."]},
    
    
    {number: 2,
        question: "Su vehículo se desvía hacia un lado cuando usted frena. ¿Cuál es la falla más probable?",
        options: ["A) Un bajo nivel del líquido de frenos.",
            "B) Su freno de mano está todavía puesto.",
            "C) Frenos mal ajustados.",
            "D) Neumáticos con presión de aire inadecuada."],
               image: false,
        correctAnswers: ["C) Frenos mal ajustados."]},
    
    
    {number: 3,
        question: "Mientras conduce usted siente un fuerte olor a gasolina. ¿Qué debería hacer usted?",
        options: ["A) No preocuparse, ya que sólo son los gases de escape.",
            "B) Continuar a una velocidad reducida.",
            "C) Continuar porque sabe que se detendrá algunos kilómetros más allá.",
            "D) Detenerse e investigar el problema."],
               image: false,
        correctAnswers: ["D) Detenerse e investigar el problema."]},
    
    
    {number: 4,
        question: "¿Cómo puede prevenir usted el riesgo de incendio de su vehículo?",
        options: ["A) Manteniendo los niveles de agua sobre el máximo.",
            "B) Evitando conducir con el estanque lleno de combustible.",
            "C) Usando gasolina sin plomo.",
            "D) Revisando su vehículo ante cualquier olor a gasolina extraño."],
               image: false,
        correctAnswers: ["D) Revisando su vehículo ante cualquier olor a gasolina extraño."]},
    
    
    {number: 5,
        question: "¿Por qué es importante usar zapatos apropiados cuando conduce?",
        options: ["A) Para tener un adecuado control de los pedales.",
            "B) Para evitar el desgaste acelerado de las gomas de los pedales.",
            "C) Para poder efectuar los cambios de marcha más rápidamente.",
            "D) Para poder caminar sin problemas en el caso que necesite solicitar ayuda."],
               image: false,
        correctAnswers: ["A) Para tener un adecuado control de los pedales."]},
    
    
    {number: 6,
        question: "En un automóvil, ¿cuál de los siguientes elementos reduce el riesgo de lesiones de cuello en una colisión?",
        options: ["A) Un asiento dotado de air-bag (bolsa de airE).",
            "B) Los frenos ABS.",
            "C) Una columna de dirección colapsable.",
            "D) Un asiento con apoya-cabeza ajustado en forma apropiada."],
                image: false,
        correctAnswers: ["D) Un asiento con apoya-cabeza ajustado en forma apropiada."]},
    
    
    {number: 7,
        question: "¿Qué significa esta luz de advertencia en el panel de instrumentos?",
        options: ["A) Luces neblineras.",
            "B) Intermitentes de advertencia de peligro.",
            "C) Luces altas.",
            "D) Freno de mano puesto."],
        image: true
        ,
        correctAnswers: ["B) Intermitentes de advertencia de peligro."]},
    
    
    {number: 8,
        question: "Es esencial que la presión de los neumáticos sea chequeada regularmente. ¿Cuándo se debe hacer esto?",
        options: ["A) Después de un viaje largo.",
            "B) Después de conducir a alta velocidad.",
            "C) Cuando los neumáticos están fríos.",
            "D) Cuando los neumáticos están calientes."],
                image: false,
        correctAnswers: ["C) Cuando los neumáticos están fríos."]},
    
    
    {number: 9,
        question: "La presión de los neumáticos debe revisarse:",
        options: ["A) Cuando los neumáticos están fríos.",
            "B) Cuando los neumáticos están calientes.",
            "C) En cualquier momento, porque da igual que los neumáticos estén fríos o calientes."],
        image: false
        ,
        
        correctAnswers: ["A) Cuando los neumáticos están fríos."]},
    
    
    {number: 10,
        question: "¿Cuál de estos líquidos, en el caso de estar en un nivel bajo, podría causar un accidente?",
        options: ["A) El líquido de freno.",
            "B) El anticongelante.",
            "C) El agua de la batería.",
            "D) El líquido refrigerante."],
        image: false
        ,
        
        correctAnswers: ["A) El líquido de freno."]},
    
    
    {number: 11,
        question: "Frente a una situación normal, ¿cuál es la forma más segura de frenar?",
        options: ["A) Frenando fuerte, poniendo la palanca de cambio en neutro y tirando el freno de mano justo antes de detenerse.",
            "B) Frenando suavemente, presionando el pedal de embrague y tirando el freno de mano justo antes de detenerse.",
            "C) Poniendo la palanca de cambio en neutro, frenando fuerte y luego soltando el freno justo antes de detenerse.",
            "D) Frenando suavemente, luego un poco más fuerte cuando comienza a detenerse y después aflojando de a poco el freno antes de detenerse."],
        image: false
        ,
        
        correctAnswers: ["D) Frenando suavemente, luego un poco más fuerte cuando comienza a detenerse y después aflojando de a poco el freno antes de detenerse."]},
    
    
    {number: 12,
        question: "¿Cuándo usaría usted las luces intermitentes de advertencia de peligro?",
        options: ["A) Cuando esté en pana obstruyendo el tránsito.",
            "B) Cuando se estacione en doble fila respecto a otro vehículo estacionado junto a la cuneta.",
            "C) Cuando estacione junto a una cuneta en la que hay línea amarilla pintada.",
            "D) Cuando sus señalizadores de viraje no estén funcionando."],
        image: false
        ,
        
        correctAnswers: ["A) Cuando esté en pana obstruyendo el tránsito."]},
    
    
    {number: 13,
        question: "Las luces de advertencia de peligro deberían ser usadas:",
        options: ["A) Cuando estaciona en doble fila respecto a otro vehículo estacionado junto a la cuneta.",
            "B) Para advertir a quienes vienen detrás de un peligro que hay más adelante.",
            "C) Para advertir a quienes vienen detrás suyo que usted pretende virar.",
            "D) Para advertir a los demás que usted tiene prisa."],
        image: false
        ,
        
        correctAnswers: ["B) Para advertir a quienes vienen detrás de un peligro que hay más adelante."]},
    
    
    {number: 14,
        question: "¿Cuándo usaría usted las luces de advertencia de peligro de su vehículo?",
        options: ["A) Cuando esté en pana moviéndose lentamente.",
            "B) Cuando esté siendo remolcado.",
            "C) Cuando esté retrocediendo en una calle de poco tránsito.",
            "D) Cuando esté en pana y obstaculizando el tránsito."],
        image: false
        ,
        
        correctAnswers: ["D) Cuando esté en pana y obstaculizando el tránsito."]},
    
    
    {number: 15,
        question: "Usted está probando la suspensión de su vehículo cuando nota que éste rebota u oscila al cargarlo en un extremo lateral frontal. ¿Qué significa esto?",
        options: ["A) Neumáticos gastados.",
            "B) Neumáticos poco inflados.",
            "C) Volante de dirección no centrado.",
            "D) Amortiguadores gastados."],
        image: false
        ,
        
        correctAnswers: ["D) Amortiguadores gastados."]},
    
    
    {number: 16,
        question: "¿Por qué los neumáticos deben mantenerse a la presión indicada por el fabricante?",
        options: ["A) Para que el vehículo se mantenga a la altura correcta sobre la vía.",
            "B) Para no desgastar el motor.",
            "C) Para ayudar a evitar que el automóvil se roncee.",
            "D) Para evitar que el automóvil se incline hacia un lado."],
        image: false
        ,
        
        correctAnswers: ["C) Para ayudar a evitar que el automóvil se roncee."]},
    
    
    {number: 17,
        question: "¿A qué se debe un alto consumo de combustible?",
        options: ["A) Fallas en el sistema de dirección.",
            "B) Aceleraciones en curvas.",
            "C) Frecuentes frenadas y aceleraciones.",
            "D) Conducción en marchas altas."],
        image: false
        ,
        
        correctAnswers: ["C) Frecuentes frenadas y aceleraciones."]},
    
    
    {number: 18,
        question: "La profundidad de los surcos de los neumáticos de un automóvil no debería ser inferior a ...",
        options: ["A) 5.0 mm",
            "B) 4.0 mm",
            "C) 1.6 mm",
            "D) 1.0 mm"],
        image: false
        ,
        
        correctAnswers: ["C) 1.6 mm"]},
    
    
    {number: 19,
        question: "Uno de sus neumáticos traseros se revienta mientras usted conduce. ¿Cuáles 2 cosas debe hacer usted?",
        options: ["A) Poner marcha atrás para detener el vehículo.",
            "B) Hacer una señal de detención con el brazo y disminuir la velocidad.",
            "C) Detenerse lentamente al costado de la vía.",
            "D) Detener el vehículo frenando lo más fuerte que pueda.",
            "E) Girar el volante hacia el mismo lado hacia el cual se desvía la cola del vehículo."],
        image: false
        ,
        
        correctAnswers: ["C) Detenerse lentamente al costado de la vía.", 
    "E) Girar el volante hacia el mismo lado hacia el cual se desvía la cola del vehículo."]},
    
    
    {number: 20,
        question: "¿Cuáles 2 cosas debe usted hacer si se le revienta un neumático delantero?",
        options: ["A) Cambiarse de pista y frenar a fondo.",
            "B) Frenar suavemente o dejar que el vehículo siga hasta detenerse.",
            "C) Frenar rápida y firmemente.",
            "D) Sostener firmemente el volante manteniendo la trayectoria.",
            "E) Sostener el volante con una mano advirtiendo con la otra a los demás que usted se detendrá."],
        image: false
        ,
        
        correctAnswers: ["B) Frenar suavemente o dejar que el vehículo siga hasta detenerse.", 
    "D) Sostener firmemente el volante manteniendo la trayectoria."]},
    
    
     {number: 21,
        question: "¿Qué es lo que usted nunca debería hacer en una bomba de bencina?",
        options: ["A) Circular por ella",
            "B) Fumar",
            "C) Comer",
            "D) Lavar los parabrisas"],
        image: false
        ,
        
        correctAnswers: ["B) Fumar"]},
    
    
    {number: 22,
        question: "Desenganchar el motor del vehículo...",
        options: ["A) permite un mejor control al conductor.",
            "B) hace más fácil las maniobras.",
            "C) aumenta el consumo de combustible.",
            "D) reduce el control del conductor."],
        image: false
        ,
        
        correctAnswers: ["D) reduce el control del conductor."]},
    
    
    {number: 23,
        question: "¿Por qué no es bueno desenganchar el motor del vehículo al ir circulando?",
        options: ["A) Porque ello hace que el vehículo resbale.",
            "B) Porque el motor se detendrá.",
            "C) Porque no hay frenado del motor.",
            "D) Porque el motor funcionará más rápido."],
        image: false
        ,
        
        correctAnswers: ["C) Porque no hay frenado del motor."]},
    
    
    {number: 24,
        question: "¿Cuáles son las 2 principales razones por las cuales no debe desengancharse el motor al ir cuesta abajo? MARQUE DOS RESPUESTAS:",
        options: ["A) Porque tendrá menor control del frenado y dirección.",
            "B) Porque el vehículo agarrará velocidad.",
            "C) Porque el consumo de combustible será mayor.",
            "D) Porque se gastan y deterioran más los neumáticos.",
            "E) Porque se daña el motor."],
        image: false
        ,
        
        correctAnswers: ["A) Porque tendrá menor control del frenado y dirección.", 
    "B) Porque el vehículo agarrará velocidad."]},
    
    
    {number: 25,
        question: "¿Por qué usted no debería conducir presionando el pedal de embrague durante más tiempo que el necesario?",
        options: ["A) Porque reduce su control sobre el vehículo.",
            "B) Porque aumenta el desgaste de la caja de cambios.",
            "C) Porque aumenta el consumo de combustible.",
            "D) Porque reduce el agarre de los neumáticos."],
        image: false
        ,
        
        correctAnswers: ["A) Porque reduce su control sobre el vehículo."]},
    
    
    {number: 26,
        question: "¿Para qué sirven los seguros de niños de los vehículos?",
        options: ["A) Aseguran las hebillas de los cinturones de seguridad.",
            "B) Impiden que las puertas puedan abrirse desde el interior.",
            "C) Bloquean las ventanas traseras manteniéndolas cerradas.",
            "D) Impiden que los asientos se reclinen."],
        image: false
        ,
        
        correctAnswers: ["B) Impiden que las puertas puedan abrirse desde el interior."]},
    
    
    {number: 27,
        question: "Una baja presión de aire en los neumáticos delanteros...",
        options: ["A) hace que el vehículo tienda a torcer hacia un lado.",
            "B) mejora el rendimiento del combustible.",
            "C) hace sentir la dirección más liviana.",
            "D) hace sentir la dirección más pesada."],
        image: false
        ,
        
        correctAnswers: ["D) hace sentir la dirección más pesada."]},
    
    
    {number: 28,
        question: "En un pavimento mojado, ¿influye el estado de los neumáticos en la distancia de frenado de su vehículo?",
        options: ["A) No, la distancia de frenado depende sólo de la velocidad.",
            "B) No, porque una vez que se acciona el freno la distancia de frenado es siempre la misma para cada vehículo.",
            "C) Sí, a mayor desgaste de los neumáticos menor es dicha distancia.",
            "D) Sí, porque el mayor o menor desgaste de los neumáticos, entre otros factores, determinará que dicha distancia sea mayor o menor."],
        image: false
        ,
        
        correctAnswers: ["D) Sí, porque el mayor o menor desgaste de los neumáticos, entre otros factores, determinará que dicha distancia sea mayor o menor."]},
    
    
    {number: 29,
        question: "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? MARQUE LAS RESPUESTAS CORRECTAS:",
        options: ["A) Cuando el motor no está siendo lubricado se enciende una luz en el panel de instrumentos del vehículo.",
            "B) Una batería mal cargada hace que el vehículo tenga dificultades para arrancar.",
            "C) Casi siempre, el motor se enfría con un líquido refrigerante que circula por canales en el bloque del motor.",
            "D) Una temperatura del motor demasiado alta puede deberse a que se haya roto la correa de la bomba de agua."],
        image: false
        ,
        
        correctAnswers: ["A) Cuando el motor no está siendo lubricado se enciende una luz en el panel de instrumentos del vehículo.", 
    "B) Una batería mal cargada hace que el vehículo tenga dificultades para arrancar.", 
    "C) Casi siempre, el motor se enfría con un líquido refrigerante que circula por canales en el bloque del motor.", 
    "D) Una temperatura del motor demasiado alta puede deberse a que se haya roto la correa de la bomba de agua."]},
    
    

        {number: 30,
        question: "¿Cuáles 2 de las siguientes afirmaciones son verdaderas? MARQUE DOS RESPUESTAS:",
        options: ["A) Los gases de escape no son peligrosos para la salud de las personas.",
            "B) Un sistema de escape de gases oxidado puede hacer que penetre monóxido de carbono al interior del vehículo.",
            "C) Los gases de escape contienen monóxido de carbono, que carece de olor y es incoloro.",
            "D) Los vapores de la gasolina son inocuos."],
        image: false
        ,
        
        correctAnswers: ["B) Un sistema de escape de gases oxidado puede hacer que penetre monóxido de carbono al interior del vehículo.", 
    "C) Los gases de escape contienen monóxido de carbono, que carece de olor y es incoloro."]},
    
    
    {number: 31,
        question: "¿Cuáles 2 de las siguientes afirmaciones son verdaderas? MARQUE DOS RESPUESTAS:",
        options: ["A) A mayor velocidad, mayor es el consumo del líquido de frenos.",
            "B) Los frenos antibloqueo tienen la ventaja de impedir que las ruedas queden bloqueadas al frenar fuertemente.",
            "C) El consumo del líquido de frenos depende de la cantidad e intensidad de las frenadas.",
            "D) El líquido de frenos no se consume y si disminuye es porque hay algún defecto.",
            "E) Lo mejor es que el pedal de freno se sienta elástico."],
        image: false
        ,
        
        correctAnswers: ["B) Los frenos antibloqueo tienen la ventaja de impedir que las ruedas queden bloqueadas al frenar fuertemente.", 
    "D) El líquido de frenos no se consume y si disminuye es porque hay algún defecto."]},
    
    
    {number: 32,
        question: "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
        options: ["A) Una profundidad de 1 mm de los surcos de las bandas de rodamiento de los neumáticos siempre es suficiente para asegurar una buena fricción con el pavimento.",
            "B) Un desgaste notorio de la zona central de las bandas de rodamiento de los neumáticos indica que éstos se han usado con muy poco aire.",
            "C) Un desgaste irregular de los neumáticos puede deberse a problemas de alineamiento o de amortiguación.",
            "D) Independientemente de la ubicación de las ruedas de tracción, para una mejor estabilidad del vehículo los mejores neumáticos deben ir adelante."],
        image: false
        ,
        
        correctAnswers: ["C) Un desgaste irregular de los neumáticos puede deberse a problemas de alineamiento o de amortiguación."]},
    
    
    {number: 33,
        question: "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
        options: ["A) El cinturón de seguridad disminuye las posibilidades de sufrir lesiones en un accidente.",
            "B) Los air-bags (o bolsas de airE) reemplazan ventajosamente al cinturón de seguridad.",
            "C) Para quienes viajan en el asiento trasero de un automóvil el cinturón de seguridad no les presta utilidad.",
            "D) Usar cinturón de seguridad es más necesario cuando se conduce en carreteras."],
        image: false
        ,
        
        correctAnswers: ["A) El cinturón de seguridad disminuye las posibilidades de sufrir lesiones en un accidente."]},
    
    
    {number: 34,
        question: "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? MARQUE LAS RESPUESTAS CORRECTAS:",
        options: ["A) No es seguro que un adulto lleve a un niño pequeño incluyéndolo en su cinturón de seguridad.",
            "B) El cinturón de seguridad disminuye las posibilidades de resultar lesionado en un accidente.",
            "C) Para quienes viajan en el asiento trasero el cinturón de seguridad no brinda mayor seguridad.",
            "D) Un cinturón de seguridad bien tensado brinda mayor seguridad que uno menos tensado."],
        image: false
        ,
        
        correctAnswers: ["A) No es seguro que un adulto lleve a un niño pequeño incluyéndolo en su cinturón de seguridad.", 
    "B) El cinturón de seguridad disminuye las posibilidades de resultar lesionado en un accidente.", 
    "D) Un cinturón de seguridad bien tensado brinda mayor seguridad que uno menos tensado."]},
    
    
    {number: 35,
        question: "¿Qué elementos de su vehículo debe usted mantener limpios? MARQUE LAS RESPUESTAS CORRECTAS:",
        options: ["A) Las luces.",
            "B) Los espejos.",
            "C) Los neumáticos.",
            "D) Los vidrios."],
        image: false
        ,
        
        correctAnswers: ["A) Las luces.", 
    "B) Los espejos.", 
    "D) Los vidrios."]},
    
    
    {number: 36,
        question: "Suponga que en una ocasión,\n- su distancia de reacción es de 10 metros\n- su distancia de frenado es de 8 metros\n- su distancia de detención (distancia de reacción más distancia de frenado) es de 18 metros\n¿Cuál sería su distancia de detención si sigue conduciendo en calzada de idénticas características y condiciones, pero aumenta al doble su velocidad?",
        options: ["A) 46 metros",
            "B) 52 metros",
            "C) 64 metros",
            "D) 78 metros"],
        image: false
        ,
        
        correctAnswers: ["B) 52 metros"]},
    
    
    {number: 37,
        question: "¿Cuál de las siguientes afirmaciones es falsa cuando usted aumenta su velocidad de 30 km/h a 60 km/h?",
        options: ["A) Se duplica la energía cinética.",
            "B) Se cuadruplica la energía cinética.",
            "C) Se duplica la distancia de reacción.",
            "D) Se cuadruplica la distancia de frenado."],
        image: false
        ,
        
        correctAnswers: ["A) Se duplica la energía cinética."]},
    
    
    {number: 38,
        question: "El auto azul circula a 70 km/h y el rojo a 90 km/h. ¿Dónde es más probable que sus conductores estimen el punto en que se producirá el encuentro de ambos vehículos?  MARQUE DOS",
        options: ["A) El conductor del auto rojo estima que dicho punto será el 3.",
            "B) El conductor del auto rojo estima que dicho punto será el 2.",
            "C) El conductor del auto azul estima que dicho punto será el 1.",
            "D) El conductor del auto azul estima que dicho punto será el 3."],
        image: true
        ,
        
        correctAnswers: ["A) El conductor del auto rojo estima que dicho punto será el 3.", 
    "D) El conductor del auto azul estima que dicho punto será el 3."]},
    
    
    {number: 39,
        question: "¿Qué distancia de detención tiene un tren que circula a alrededor de 100 km/h?",
        options: ["A) Aproximadamente 100 metros.",
            "B) Aproximadamente 200 metros.",
            "C) Entre 800 y 1000 metros.",
            "D) Más de 2000 metros."],
        image: false
        ,
        
        correctAnswers: ["C) Entre 800 y 1000 metros."]},
    
    
    {number: 40,
        question: "¿Qué es lo más importante para evitar chocar al vehículo que va adelante?",
        options: ["A) Asegurarse de que sus frenos sean eficientes.",
            "B) Conducir a una velocidad constante.",
            "C) Mantener una adecuada distancia de separación entre vehículos.",
            "D) Tener neumáticos en muy buen estado."],
        image: false
        ,
        
        correctAnswers: ["C) Mantener una adecuada distancia de separación entre vehículos."]},
    
    
    {number: 41,
        question: "Usted va circulando a 50 km/h a lo largo de un camino plano y de asfalto. Las condiciones climáticas son buenas. Sus neumáticos y frenos también están buenos. En estas circunstancias, detenerse le tomará aproximadamente ...",
        options: ["A) unos 50 metros",
            "B) unos 15 metros",
            "C) unos 10 metros",
            "D) unos 30 metros"],
        image: false
        ,
        
        correctAnswers: ["C) unos 10 metros"]},
    
    
    {number: 42,
        question: "La distancia de detención total es igual a la suma de la distancia de reacción y la de frenado. Aproximadamente, ¿cuál es la mínima distancia de detención total en un asfalto seco, si usted viaja a 90 km/h?",
        options: ["A) Unos 50 metros",
            "B) Unos 70 metros",
            "C) Unos 30 metros",
            "D) Unos 120 metros"],
        image: false
        ,
        
        correctAnswers: ["B) Unos 70 metros"]},
    
    
    {number: 43,
        question: "Usted conduce un vehículo con frenos y neumáticos en buenas condiciones. La superficie de calzada está seca. ¿Cuál es la distancia aproximada de detención total (distancia de reacción más distancia de frenado) si usted va a 70 km/h?",
        options: ["A) Unos 15 metros",
            "B) Unos 80 metros",
            "C) Unos 45 metros",
            "D) Unos 25 metros"],
        image: false
        ,
        
        correctAnswers: ["C) Unos 45 metros"]},
    
    
    {number: 44,
        question: "Usted desea estacionar en bajada en una calle con pendiente pronunciada. ¿Qué debería hacer? MARQUE LAS RESPUESTAS CORRECTAS:",
        options: ["A) Estacionar detrás de otro auto.",
            "B) Estacionar con dos ruedas sobre la acera.",
            "C) Dejar el volante girado hacia la acera.",
            "D) Dejar puesto el freno de mano."],
        image: false
        ,
        
        correctAnswers: ["C) Dejar el volante girado hacia la acera.", 
    "D) Dejar puesto el freno de mano."]},
    
    
    {number: 45,
        question: "Usted está descendiendo una pendiente muy larga. ¿Qué debería hacer para ayudar a controlar la velocidad de su vehículo?",
        options: ["A) Tomar el manubrio firmemente.",
            "B) Seleccionar una marcha baja.",
            "C) Seleccionar neutro.",
            "D) Presionar el pedal de embrague."],
        image: false
        ,
        
        correctAnswers: ["B) Seleccionar una marcha baja."]},
    
    
    {number: 46,
        question: "Usted está virando hacia la derecha en un camino resbaladizo y las ruedas traseras de su vehículo resbalan hacia la izquierda. ¿Qué debería hacer usted?",
        options: ["A) Frenar firmemente y no girar el manubrio.",
            "B) Guiar cuidadosamente hacia la izquierda.",
            "C) Usar el embrague y frenar firmemente.",
            "D) Girar hacia la derecha."],
        image: false
        ,
        
        correctAnswers: ["B) Guiar cuidadosamente hacia la izquierda."]},
    
    
    {number: 47,
        question: "Usted está próximo a descender por una pendiente muy pronunciada. ¿Qué debería hacer para controlar la velocidad de su vehículo?",
        options: ["A) Seleccionar un cambio bajo y usar los frenos cuidadosamente.",
            "B) Seleccionar un cambio alto y usar los frenos cuidadosamente.",
            "C) Seleccionar un cambio alto y usar los frenos firmemente.",
            "D) Seleccionar un cambio bajo y evitar usar los frenos."],
        image: false
        ,
        
        correctAnswers: ["A) Seleccionar un cambio bajo y usar los frenos cuidadosamente."]},
    
    
    {number: 48,
        question: "La distancia de frenado es la que recorre un vehículo desde que se presiona el freno hasta que el vehículo se detiene. En condiciones normales, ¿cuál sería aproximadamente su distancia de frenado si usted circula a 90 km/h?",
        options: ["A) Unos 45 metros",
            "B) Unos 70 metros",
            "C) Unos 20 metros",
            "D) Unos 15 metros"],
        image: false
        ,
        
        correctAnswers: ["A) Unos 45 metros"]},
    
    
    {number: 49,
        question: "¿Qué debería hacer usted para corregir un coletazo de las ruedas traseras?",
        options: ["A) No girar el volante del vehículo para nada.",
            "B) Girar el volante hacia el lado opuesto al coletazo.",
            "C) Girar el volante hacia el lado que se desplaza la cola del vehículo.",
            "D) Aplicar su freno de mano."],
        image: false
        ,
        
        correctAnswers: ["C) Girar el volante hacia el lado que se desplaza la cola del vehículo."]},
    
    
    {number: 50,
        question: "La distancia de frenado es la distancia que recorre un vehículo desde que se presiona el freno hasta que el vehículo se detiene. De las siguientes variables, ¿cuáles influyen en la distancia de frenado? MARQUE LAS RESPUESTAS CORRECTAS:",
        options: ["A) La velocidad.",
            "B) El alumbrado público.",
            "C) El estado de los frenos y neumáticos.",
            "D) Las condiciones climáticas.",
            "E) La hora del día."],
        image: false
        ,
        
        correctAnswers: ["A) La velocidad.", 
    "C) El estado de los frenos y neumáticos.", 
    "D) Las condiciones climáticas."]
    },

    {
        number: 51,
        question: " Usted va a 70 km/hr. Aproximadamente, ¿qué distancia recorrerá su vehículo desde el momento en que usted se percata de un peligro que hay más adelante hasta que comienza a frenar?",
        options: [
            "A) Unos 5 metros.",
            "B) Unos 8 metros.",
            "C) Unos 20 metros.",
            "D) Unos 30 metros."],
        image: false
        ,
        
        correctAnswers: ["C) Unos 20 metros."]
    },
    {
        number: 52,
        question: "¿Cuál es el tiempo de reacción promedio de un conductor ante un imprevisto?",
        options: [
            "A) 1 segundo",
            "B) 0.1 minuto",
            "C) 0.1 segundo",
            "D) 2 segundos"],
        image: false
        ,
        
        correctAnswers: ["A) 1 segundo"]
    },
    {
        number: 53,
        question: "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? MARQUE LAS RESPUESTAS CORRECTAS:",
        options: [
            "A) Quien sobrestima sus habilidades para conducir conduce con frecuencia demasiado rápido.",
            "B) Quien sobrestima sus habilidades para conducir crea situaciones de riesgo a menudo.",
            "C) Con frecuencia, los muchachos jóvenes sobrestiman sus habilidades, conducen a velocidades excesivas y se ven más involucrados en accidentes que otros.",
            "D) Muchos conductores muestran deficiencias en su madurez personal."],
        image: false
        ,
        
        correctAnswers: ["A) Quien sobrestima sus habilidades para conducir conduce con frecuencia demasiado rápido.", 
    "B) Quien sobrestima sus habilidades para conducir crea situaciones de riesgo a menudo.", 
    "C) Con frecuencia, los muchachos jóvenes sobrestiman sus habilidades, conducen a velocidades excesivas y se ven más involucrados en accidentes que otros.",
    "D) Muchos conductores muestran deficiencias en su madurez personal."]
    },
    {
        number: 54,
        question: "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s) en cuanto al desarrollo de la moral de un individuo? MARQUE LAS RESPUESTAS CORRECTAS:",
        options: [
            "A) Durante la infancia, antes de llegar a la edad escolar, las personas son egocéntricas y piensan sobre todo en ellas mismas.",
            "B) Los conocimientos y la experiencia hacen que las personas se vuelvan más comprensivas.",
            "C) Como la moral de las personas es algo innato, no se puede cambiar.",
            "D) El comportamiento que tiene una persona como conductor muestra cuánto ha avanzado en el desarrollo de su moral."],
        image: false
        ,
        
        correctAnswers: ["A) Durante la infancia, antes de llegar a la edad escolar, las personas son egocéntricas y piensan sobre todo en ellas mismas.", 
    "B) Los conocimientos y la experiencia hacen que las personas se vuelvan más comprensivas.", 
    "D) El comportamiento que tiene una persona como conductor muestra cuánto ha avanzado en el desarrollo de su moral."]
    },
    {
        number: 55,
        question: "¿Cuáles 2 de las siguientes cualidades de un individuo denotan que ha alcanzado un alto grado de madurez personal? MARQUE LAS RESPUESTAS CORRECTAS:",
        options: [
            "A) No sobrestima sus habilidades; tiene un buen conocimiento de sí mismo.",
            "B) Mantiene su vehículo en muy buen estado.",
            "C) Tiene buen conocimiento de las normas que regulan el tránsito.",
            "D) Cuenta con que otros pueden cometer errores y los acepta."],
        image: false
        ,
        
        correctAnswers: ["A) No sobrestima sus habilidades; tiene un buen conocimiento de sí mismo.", 
    "D) Cuenta con que otros pueden cometer errores y los acepta."]
    },
    {
        number: 56,
        question: "¿Cuál de las siguientes afirmaciones es correcta en cuanto a la capacidad de reacción de los conductores jóvenes inexpertos, comparados con conductores experimentados cuya edad fluctúa entre 35 y 50 años?",
        options: [
            "A) Ante situaciones complejas, los conductores jóvenes reaccionan más rápido.",
            "B) Los conductores jóvenes reaccionan siempre con mayor rapidez.",
            "C) No hay diferencia entre la capacidad de reacción de los conductores jóvenes inexpertos y la de los mayores.",
            "D) En situaciones reales, que requieren reacciones complejas, los conductores experimentados reaccionan en un tiempo más corto que los jóvenes inexpertos."],
        image: false
        ,
        
        correctAnswers: ["D) En situaciones reales, que requieren reacciones complejas, los conductores experimentados reaccionan en un tiempo más corto que los jóvenes inexpertos."]
    },
    {
        number: 57,
        question: "¿Cuál o cuáles característica(s) distingue(n) a un conductor seguro? MARQUE LAS RESPUESTAS CORRECTAS:",
        options: [
            "A) Conduce con prudencia y hace todo lo posible por evitar accidentes.",
            "B) Es considerado y amable con los demás conductores y con los peatones.",
            "C) Es respetuoso, no obstaculiza ni perturba al resto.",
            "D) Conduce con buen criterio."],
        image: false
        ,
        
        correctAnswers: ["A) Conduce con prudencia y hace todo lo posible por evitar accidentes.", 
    "B) Es considerado y amable con los demás conductores y con los peatones.", 
    "C) Es respetuoso, no obstaculiza ni perturba al resto.", 
    "D) Conduce con buen criterio."]
    },
    {
        number: 58,
        question: "¿Cuáles 2 de los siguientes rasgos son característicos de personas que ceden con facilidad a la presión del grupo?, Marque dosMARQUE DOS RESPUESTAS: ",
        options: [
            "A) Por lo general, son muy inseguras de sí mismas.",
            "B) Sienten temor a ser motivo de bromas y risas de los demás.",
            "C) Tienen mayor autonomía y voluntad para defender sus opiniones.",
            "D) Son capaces de soportar bromas o que lo tilden de 'cobardes' o 'mala persona'."],
        image: false
        ,
        
        correctAnswers: ["A) Por lo general, son muy inseguras de sí mismas.", 
    "B) Sienten temor a ser motivo de bromas y risas de los demás."]
    },
    {
        number: 59,
        question: "De los siguientes factores que se presentan en los accidentes de tránsito, ¿cuáles son los 2 más frecuentes en los accidentes que ocurren en carreteras viéndose involucrado un solo vehículo? MARQUE DOS RESPUESTAS:",
        options: [
            "A) Que el conductor no posea licencia para conducir.",
            "B) Que el conductor esté muy cansado o bajo los efectos del alcohol.",
            "C) Que el conductor esté bajo los efectos de medicamentos.",
            "D) Que el conductor sobrestime sus capacidades y conduzca a exceso de velocidad."],
        image: false
        ,
        
        correctAnswers: ["B) Que el conductor esté muy cansado o bajo los efectos del alcohol.", 
    "D) Que el conductor sobrestime sus capacidades y conduzca a exceso de velocidad."]
    },
    {
        number: 60,
        question: "De los siguientes factores, ¿cuál es el que con mayor frecuencia se presenta en los accidentes de tránsito?",
        options: [
            "A) Los errores de los conductores.",
            "B) Las condiciones climáticas.",
            "C) Las condiciones de calles y caminos.",
            "D) Las fallas mecánicas."],
        image: false
        ,
        
        correctAnswers: ["A) Los errores de los conductores."]
    },
    {
        number: 61,
        question: "En cuanto al estrés al conducir, ¿cuál de las siguientes afirmaciones es falsa?",
        options: [
            "A) Un grado demasiado alto de estrés disminuye su campo de atención.",
            "B) Un estrés moderado puede contribuir a mejorar su rendimiento.",
            "C) Un conductor muy estresado puede tener reacciones de pánico.",
            "D) El estrés no influye en absoluto en los actos de un conductor."],
        image: false
        ,
        
        correctAnswers: ["D) El estrés no influye en absoluto en los actos de un conductor."]
    },
    {
        number: 62,
        question: "¿Qué puede esperarse de un conductor impulsivo? MARQUE LAS RESPUESTAS CORRECTAS:",
        options: [
            "A) Que reaccione adecuadamente ante cualquier imprevisto.",
            "B) Que actúe sin pensar en las consecuencias.",
            "C) Que conduzca con excesiva precaución.",
            "D) Que efectúe maniobras sorpresivas que sorprendan a los demás."],
        image: false
        ,
        
        correctAnswers: ["B) Que actúe sin pensar en las consecuencias.", 
    "D) Que efectúe maniobras sorpresivas que sorprendan a los demás."]
    },
    {
        number: 63,
        question: "¿Cuál es el mejor consejo para una conducción segura?",
        options: [
            "A) Mantener el vehículo en muy buenas condiciones.",
            "B) Respetar los límites de velocidad.",
            "C) Evitar conducir durante la noche.",
            "D) Contar siempre con tiempo de sobra al conducir."],
        image: false
        ,
        
        correctAnswers: ["D) Contar siempre con tiempo de sobra al conducir."]
    },
    {
        number: 64,
        question: "¿De cuáles 2 maneras puede usted contribuir con mayor eficacia a la seguridad de tránsito? MARQUE LAS RESPUESTAS CORRECTAS:",
        options: [
            "A) Contando siempre con tiempo de sobra para conducir.",
            "B) Manteniendo su vehículo en condiciones óptimas.",
            "C) Evitando conducir durante la noche.",
            "D) Conduciendo a la defensiva."],
        image: false
        ,
        
        correctAnswers: ["A) Contando siempre con tiempo de sobra para conducir.", 
    "D) Conduciendo a la defensiva."]
    },
    {
        number: 65,
        question: "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
        options: [
            "A) La capacidad de reacción de una persona se ve afectada con pequeñas concentraciones de alcohol en su organismo.",
            "B) Una buena taza de café acelera el proceso mediante el cual el organismo se libera del alcohol.",
            "C) Con pequeñas concentraciones de alcohol en el organismo de un individuo, disminuyen ciertas inhibiciones y tiende a sobrestimar sus capacidades.",
            "D) La capacidad de interpretación y decisión de un conductor experimentado no se ven afectadas con sólo 2 tragos de licor fuerte."],
        image: false
        ,
        
        correctAnswers: ["A) La capacidad de reacción de una persona se ve afectada con pequeñas concentraciones de alcohol en su organismo.", 
    "C) Con pequeñas concentraciones de alcohol en el organismo de un individuo, disminuyen ciertas inhibiciones y tiende a sobrestimar sus capacidades."]
    },
    {
        number: 66,
        question: "En cuanto a la concentración de alcohol en la sangre de una persona que ingiere la misma cantidad en ocasiones diferentes, ¿cuál de las siguientes afirmaciones es falsa?",
        options: [
            "A) Aunque la persona beba la misma cantidad de alcohol cada ocasión, la concentración de éste en su sangre puede ser diferente.",
            "B) La concentración de alcohol depende de cuánto se come en cada ocasión.",
            "C) Entre otros factores, la concentración de alcohol también depende del tiempo que dura la ingestión cada vez.",
            "D) Si la cantidad de alcohol ingerida en cada ocasión es exactamente la misma, la concentración de alcohol en la sangre también será la misma."],
        image: false
        ,
        
        correctAnswers: ["D) Si la cantidad de alcohol ingerida en cada ocasión es exactamente la misma, la concentración de alcohol en la sangre también será la misma."]
    },
    {
        number: 67,
        question: "¿Qué efecto(s) sobre la visión tiene el conducir a unos 100 km/h? MARQUE LAS RESPUESTAS CORRECTAS:",
        options: [
            "A) A la mayoría de los conductores se les cansa la vista después de conducir más o menos media hora.",
            "B) El campo visual se reduce, ya que a esa velocidad se tiende a fijar la mirada recta a lo lejos.",
            "C) Resulta más difícil percibir movimientos a los lados de la carretera.",
            "D) La visión se adapta automáticamente a la alta velocidad y, por lo tanto, el resto del tránsito se percibe igual que al ir a una velocidad baja."],
        image: false
        ,
        
        correctAnswers: ["B) El campo visual se reduce, ya que a esa velocidad se tiende a fijar la mirada recta a lo lejos.", 
    "C) Resulta más difícil percibir movimientos a los lados de la carretera."]
    },
    {
        number: 68,
        question: "¿Cuáles son los primeros síntomas de cansancio ?",
        options: [
            "A) Se comienza a sentir calor y agresividad.",
            "B) Se comienza a sentir falta de interés y aparecen los bostezos.",
            "C) Se comienza a sentir dificultad para mantener la dirección.",
            "D) Se comienza a sentir que los párpados se cierran."],
        image: false
        ,
        
        correctAnswers: ["B) Se comienza a sentir falta de interés y aparecen los bostezos."]
    },
    {
        number: 69,
        question: "El modo como percibimos una situación depende, entre otros factores, de nuestras experiencias anteriores, intereses, expectativas y necesidades. En este contexto, ¿cuál de las siguientes afirmaciones es falsa?",
        options: [
            "A) Un conductor que siente apremio por falta de tiempo puede subestimar los riesgos de la alta velocidad.",
            "B) Los conductores ven principalmente aquéllo que les interesa en un momento y lo que esperan ver.",
            "C) Varios conductores que ven lo mismo perciben las situaciones de tránsito también del mismo modo.",
            "D) También a los conductores experimentados a veces les pasan inadvertidas informaciones importantes."],
        image: false
        ,
        
        correctAnswers: ["C) Varios conductores que ven lo mismo perciben las situaciones de tránsito también del mismo modo."]
    },
    {
        number: 70,
        question: "De las siguientes afirmaciones, ¿cuál o cuáles es(son) verdadera(s)? MARQUE LAS RESPUESTAS CORRECTAS:",
        options: [
            "A) El factor humano es el principal causante de que surjan situaciones de riesgo en el tránsito.",
            "B) La falta de atención a las condiciones del tránsito es una de las principales causa de accidentes.",
            "C) Un conductor que va con mucha prisa tiende a subestimar los riesgos.",
            "D) Discutir con alguien o estar pendiente de la música de la radio, aumenta las posibilidades de pasar por alto circunstancias importantes en el tránsito."],
        image: false
        ,
        
        correctAnswers: ["A) El factor humano es el principal causante de que surjan situaciones de riesgo en el tránsito.", 
    "B) La falta de atención a las condiciones del tránsito es una de las principales causa de accidentes.", 
    "C) Un conductor que va con mucha prisa tiende a subestimar los riesgos.", 
    "D) Discutir con alguien o estar pendiente de la música de la radio, aumenta las posibilidades de pasar por alto circunstancias importantes en el tránsito."]
    },

    {
    number: 71,
    question: "En relación con la técnica de observación de los conductores inexpertos, ¿cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    options: [
        "A) Los conductores inexpertos concentran su mirada en puntos fijos.",
        "B) Los conductores inexpertos aprovechan al máximo su visión periférica.",
        "C) Los conductores inexpertos observan el entorno que los rodea en forma más sistemática que los conductores experimentados.",
        "D) No hay mayores diferencias en cuanto a cómo observan el entorno los conductores inexpertos y los con gran experiencia."],
                image: false,
        correctAnswers: ["A) Los conductores inexpertos concentran su mirada en puntos fijos."]
},

{
    number: 72,
    question: "De las siguientes afirmaciones, ¿cuál o cuáles es(son) verdadera(s)? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
        "A) El tener una buena visión es imprescindible para poder captar las diversas situaciones que se presentan al conducir.",
        "B) Existe un alto riesgo de que los conductores cuyo campo visual no es lo suficientemente amplio, no alcancen a reaccionar a tiempo ante peligros provenientes de los lados.",
        "C) Si usted conduce durante un largo tiempo en condiciones difíciles, puede tener problemas para apreciar correctamente lo que ve y, por lo tanto, tomar decisiones equivocadas.",
        "D) Las personas jóvenes son más sensibles a la luz deslumbrante que los mayores."],
                image: false,
        correctAnswers: ["A) El tener una buena visión es imprescindible para poder captar las diversas situaciones que se presentan al conducir.", "B) Existe un alto riesgo de que los conductores cuyo campo visual no es lo suficientemente amplio, no alcancen a reaccionar a tiempo ante peligros provenientes de los lados.", "C) Si usted conduce durante un largo tiempo en condiciones difíciles, puede tener problemas para apreciar correctamente lo que ve y, por lo tanto, tomar decisiones equivocadas."]
},
{
    number: 73,
    question: "¿Cuándo es alto el riesgo de interpretar erróneamente la realidad al conducir? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
        "A) Cuando va por un camino montañoso y con muchas sinuosidades, y la visibilidad es muy mala.",
        "B) Cuando usted está muy cansado, especialmente si conduce de noche.",
        "C) Cuando va por carretera y existe una densa niebla.",
        "D) Cuando con buenas condiciones de visibilidad usted conduce por una carretera con buenas demarcaciones viales."],
                image: false,
        correctAnswers: ["A) Cuando va por un camino montañoso y con muchas sinuosidades, y la visibilidad es muy mala.",
         "B) Cuando usted está muy cansado, especialmente si conduce de noche.",
         "C) Cuando va por carretera y existe una densa niebla."]
},
{
    number: 74,
    question: "¿Qué debería hacer usted si está tomando un remedio para la tos y no está seguro si éste puede afectar su conducción?",
    options: [
        "A) No conducir tan pronto haya ingerido el remedio, sino que esperar un rato.",
        "B) Conducir siempre que se sienta bien.",
        "C) Preguntar a su doctor.",
        "D) Solicitar consejo a un amigo o pariente."],
                image: false,
        correctAnswers: ["C) Preguntar a su doctor."]
},
{
    number: 75,
    question: "Usted está tomando unos remedios que probablemente afectarán su conducción. ¿Qué debería hacer?",
    options: [
        "A) Limitar su conducción sólo a viajes esenciales.",
        "B) Conducir solamente acompañado por alguien que posea una licencia de conducir.",
        "C) Conducir sólo distancias cortas.",
        "D) Solicitar consejo médico antes de conducir."],
                image: false,
        correctAnswers: ["D) Solicitar consejo médico antes de conducir."]
},
{
    number: 76,
    question: "Su doctor le ha recetado un tratamiento. ¿Por qué usted debe consultarle si puede conducir o no?",
    options: [
        "A) Porque algunas medicinas pueden hacer que sus reacciones sean más lentas.",
        "B) Porque las drogas influyen en su conducción al hacer más rápidas sus reacciones.",
        "C) Porque en caso de accidente no estaría cubierto por el Seguro Obligatorio.",
        "D) Porque las medicinas que está tomando pueden afectar su visión."],
                image: false,
        correctAnswers: ["A) Porque algunas medicinas pueden hacer que sus reacciones sean más lentas."]
},
{
    number: 77,
    question: "Si usted ha ingerido alcohol, ¿cuál o cuáles son los efectos más probables? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
        "A) Su capacidad de coordinación se reducirá.",
        "B) Su autoconfianza se incrementará.",
        "C) Presentará ceguera al color.",
        "D) Sus reacciones serán más rápidas.",
        "E) Su juicio empeorará.",
        "F) Su capacidad de concentración aumentará."],
                image: false,
        correctAnswers: ["A) Su capacidad de coordinación se reducirá.",
         "B) Su autoconfianza se incrementará.",
         "E) Su juicio empeorará."]
},
{
    number: 78,
    question: "¿Cómo afecta el consumo de alcohol a su conducción?",
    options: [
        "A) Acelera sus reacciones.",
        "B) Aumenta su lucidez.",
        "C) Mejora su coordinación.",
        "D) Reduce su concentración."],
                image: false,
        correctAnswers: ["D) Reduce su concentración."]
},
{
    number: 79,
    question: "Si usted va conduciendo y comienza a sentir cansancio, es mejor que se detenga lo antes posible. ¿Qué debería hacer usted mientras no pueda detenerse?",
    options: [
        "A) Aumentar su velocidad para encontrar pronto un lugar donde detenerse.",
        "B) Golpear suave y repetidamente el manubrio.",
        "C) Asegurarse de que entre aire fresco a su vehículo.",
        "D) Modificar permanentemente la velocidad para mejorar la concentración."],
                image: false,
        correctAnswers: ["C) Asegurarse de que entre aire fresco a su vehículo."]
},
{
    number: 80,
    question: "¿Qué consejo daría usted a un conductor que ha ingerido bebidas alcohólicas en una fiesta?",
    options: [
        "A) Que se vuelva a casa en taxi.",
        "B) Que tome una taza de café cargado y luego conduzca a casa.",
        "C) Que se vuelva a casa conduciendo lenta y muy cuidadosamente.",
        "D) Que espere un rato antes de irse conduciendo a casa."],
                image: false,
        correctAnswers: ["A) Que se vuelva a casa en taxi."]
},
{
    number: 81,
    question: "Un conductor hace algo que a usted le molesta. ¿Qué debería hacer usted?",
    options: [
        "A) Hacerle saber cómo se siente.",
        "B) Encender y apagar sus luces delanteras repetidamente.",
        "C) Tratar de no reaccionar.",
        "D) Tocar la bocina."],
                image: false,
        correctAnswers: ["C) Tratar de no reaccionar."]
},
{
    number: 82,
    question: "Usted está a punto de volver a casa conduciendo, pero no puede encontrar los anteojos que necesita usar para conducir. ¿Qué debería hacer usted?",
    options: [
        "A) Conducir a casa lentamente por calles tranquilas.",
        "B) Encontrar una forma de llegar a casa sin manejar.",
        "C) Pedir prestados los anteojos a un amigo para volver conduciendo a casa.",
        "D) Manejar hasta su casa de noche para que las luces lo ayuden."],
                image: false,
        correctAnswers: ["B) Encontrar una forma de llegar a casa sin manejar."]
},
{
    number: 83,
    question: "Usted está a punto de conducir, pero se siente enfermo. Usted debería ...",
    options: [
        "A) Tomar una medicina antes de conducir.",
        "B) Acortar el viaje si puede.",
        "C) No manejar.",
        "D) Prometerse a sí mismo que se va a acostar tan pronto haya llegado a casa."],
                image: false,
        correctAnswers: ["C) No manejar."]
},
{
    number: 84,
    question: "En relación con el cansancio y la conducción, de las siguientes afirmaciones, ¿cuál es falsa?",
    options: [
        "A) El cansancio es una causa importante de los accidentes que se registran en carreteras.",
        "B) Un conductor cansado ve empeorada su capacidad de reacción.",
        "C) Si un conductor está cansado, lo mejor es que su acompañante le vaya hablando permanentemente.",
        "D) El desorientarse y plantearse preguntas tales como, ¿pasé ya la ciudad X o aún no?, es un síntoma de cansancio."],
                image: false,
        correctAnswers: ["C) Si un conductor está cansado, lo mejor es que su acompañante le vaya hablando permanentemente."]
},
{
    number: 85,
    question: "Usted comienza a sentir cansancio en un viaje. ¿Qué debería hacer?",
    options: [
        "A) Detenerse y comer una gran comida.",
        "B) Detenerse inmediatamente y respirar profundo.",
        "C) Terminar el viaje y después dormir.",
        "D) Detenerse y dormir una pequeña siesta o detenerse y tomar un poco de café."],
                image: false,
        correctAnswers: ["D) Detenerse y dormir una pequeña siesta o detenerse y tomar un poco de café."]
},
{
    number: 86,
    question: "¿Qué precauciones debe tomar un conductor cuando asiste a un evento social?",
    options: [
        "A) Beber bastante café después de ingerir bebidas alcohólicas.",
        "B) Evitar circular por calles de mucho tráfico después de beber alcohol.",
        "C) Evitar beber alcohol con el estómago vacío.",
        "D) Evitar consumir alcohol."],
                image: false,
        correctAnswers: ["D) Evitar consumir alcohol."]
},
{
    number: 87,
    question: "De los siguientes efectos, ¿cuál no es consecuencia del consumo de alcohol antes de conducir?",
    options: [
        "A) Falsa sensación de confianza.",
        "B) Mayor conciencia del peligro.",
        "C) Menor control del vehículo.",
        "D) Escaso juicio de la velocidad."],
                image: false,
        correctAnswers: ["B) Mayor conciencia del peligro."]
},
{
    number: 88,
    question: "De las siguientes capacidades de un individuo, ¿cuál de ellas no se ve afectada por el consumo de alcohol?",
    options: [
        "A) La percepción de colores.",
        "B) El juicio acerca de la velocidad.",
        "C) Los tiempos de reacción.",
        "D) La coordinación."],
                image: false,
        correctAnswers: ["A) La percepción de colores."]
},
{
    number: 89,
    question: "El tiempo que transcurre desde que usted percibe un peligro hasta que actúa se denomina tiempo de reacción. En una emergencia, ¿qué factor influye en su tiempo de reacción?",
    options: [
        "A) Su estado de salud.",
        "B) El estado de la calzada.",
        "C) La velocidad de su vehículo.",
        "D) Las condiciones climáticas."],
                image: false,
        correctAnswers: ["A) Su estado de salud."]
},
{
    number: 90,
    question: "¿Cuándo es más probable que usted pierda concentración cuando conduce? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
        "A) Cuando hace funcionar los limpiaparabrisas.",
        "B) Cuando mira a través del espejo retrovisor.",
        "C) Cuando va escuchando música a alto volumen.",
        "D) Cuando utiliza un teléfono celular.",
        "E) Cuando mira un mapa del camino."],
                image: false,
        correctAnswers: ["C) Cuando va escuchando música a alto volumen.",
        "D) Cuando utiliza un teléfono celular.",
        "E) Cuando mira un mapa del camino."]
},

  {
    number: 91,
    question: "¿Qué debería hacer el conductor del auto señalado con la flecha?",
    options: [
      "A) Detenerse y esperar a que el peatón cruce.",
      "B) Señalizar con la mano al peatón para que retroceda.",
      "C) Continuar conduciendo lentamente.",
      "D) Detenerse, pero sólo si vienen más autos detrás suyo."],
                image: true,
        correctAnswers: ["C) Continuar conduciendo lentamente."]
  },
  {
    number: 92,
    question: "¿Cuáles son las 2 principales razones por las que no sería adecuado que usted adelantara al peatón en este momento? MARQUE DOS RESPUESTAS:",
    options: [
      "A) Podría ensuciar al peatón.",
      "B) La calzada es angosta y el peatón podría desviarse inesperadamente hacia la derecha.",
      "C) El vehículo de la izquierda podría avanzar.",
      "D) Podría aparecer sorpresivamente algún vehículo en sentido contrario."],
                image: true,
        correctAnswers: ["C) El vehículo de la izquierda podría avanzar.", "D) Podría aparecer sorpresivamente algún vehículo en sentido contrario."]
  },
  {
    number: 93,
    question: "En relación con los cruces ferroviarios a nivel, ¿cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
      "A) Extrañamente, está permitido estacionar a 10 m de un cruce ferroviario a nivel.",
      "B) Si ya ha ingresado a un cruce ferroviario y siente que se aproxima un tren a lo lejos, lo mejor es continuar.",
      "C) Si va con la radio de su vehículo encendida, es conveniente apagarla cuando se aproxima a un cruce ferroviario.",
      "D) Nada impide que pueda efectuar un adelantamiento en un cruce ferroviario, si no siente tren alguno en las proximidades."],
                image: false,
        correctAnswers: ["B) Si ya ha ingresado a un cruce ferroviario y siente que se aproxima un tren a lo lejos, lo mejor es continuar.", "C) Si va con la radio de su vehículo encendida, es conveniente apagarla cuando se aproxima a un cruce ferroviario."]
  },
  {
    number: 94,
    question: "En esta ocasión usted va conduciendo a 70 km/h. ¿Qué hace usted? MARQUE DOS RESPUESTAS:",
    options: [
      "A) Frena en seco.",
      "B) Se desplaza hacia la izquierda.",
      "C) Continúa derecho.",
      "D) Frena suavemente."],
                image: true,
        correctAnswers: ["C) Continúa derecho.", "D) Frena suavemente."]
  },
  {
    number: 95,
    question: "Al aproximarse a una curva hacia la izquierda usted debería mantenerse bien a la derecha. ¿Por qué?",
    options: [
      "A) Para superar el efecto de pendiente de la calzada.",
      "B) Para tener una mejor visual sobre el camino.",
      "C) Para permitirle el adelantamiento a quienes vienen rápido detrás suyo.",
      "D) Para estar en una ubicación más segura en caso que el vehículo se roncee."],
                image: false,
        correctAnswers: ["B) Para tener una mejor visual sobre el camino."]
  },
  {
    number: 96,
    question: "Usted conduce por una vía rápida en muy buenas condiciones. Por seguridad, ¿qué distancia debería mantener usted respecto del vehículo que va delante suyo?",
    options: [
      "A) Un espacio equivalente al que usted recorre en 3 segundos.",
      "B) Un espacio igual al largo de un auto.",
      "C) 3 metros.",
      "D) Un espacio igual al largo de 3 autos."],
                image: false,
        correctAnswers: ["A) Un espacio equivalente al que usted recorre en 3 segundos."]
  },
  {
    number: 97,
    question: "Usted se aproxima a una curva hacia la izquierda. ¿Qué debería hacer?",
    options: [
      "A) Mantenerse bien a la derecha ya que así tardará menos en pasar la curva.",
      "B) Mantenerse bien a la derecha para tener una mejor visual sobre la curva.",
      "C) Mantenerse bien a la izquierda para evitar cualquier obstáculo que pueda haber en la cuneta.",
      "D) Mantenerse bien a la izquierda para hacer la curva menos pronunciada."],
                image: false,
        correctAnswers: ["B) Mantenerse bien a la derecha para tener una mejor visual sobre la curva."]
  },
  {
    number: 98,
    question: "Usted conduce a 90 km/h. En condiciones normales, ¿cuál es la distancia mínima de seguridad que usted debería mantener respecto del vehículo que va adelante?",
    options: [
      "A) Unos 75 metros",
      "B) Unos 15 metros",
      "C) Unos 20 metros",
      "D) Unos 100 metros"],
                image: false,
        correctAnswers: ["A) Unos 75 metros"]
  },
  {
    number: 99,
    question: "Mire el dibujo. ¿Cuál es el peligro al que usted debe estar más atento(A)?",
    options: [
      "A) El niño puede cruzar corriendo.",
      "B) El vendedor de helados puede poner su vehículo en movimiento.",
      "C) El auto estacionado puede ponerse en movimiento.",
      "D) El vendedor de helados puede bajarse de su vehículo."],
                image: true,
        correctAnswers: ["A) El niño puede cruzar corriendo."]
  },
  {
    number: 100,
    question: "Usted pretende doblar hacia la izquierda en un cruce, pero hay vehículos estacionados que le obstruyen la visual. ¿Qué debería hacer usted?",
    options: [
      "A) Avanzar rápidamente, pero estando preparado para detenerse.",
      "B) Tocar la bocina y avanzar lentamente.",
      "C) Detenerse, luego avanzar lentamente hasta que tenga una visual plena.",
      "D) Tocar la bocina y avanzar rápidamente."],
                image: false,
        correctAnswers: ["C) Detenerse, luego avanzar lentamente hasta que tenga una visual plena."]
  },
  {
    number: 101,
    question: "Usted va conduciendo al lado de una fila de autos estacionados. De pronto ve una pelota rebotando en la calzada un poco más adelante. ¿Qué debería hacer usted?",
    options: [
      "A) Continuar a la misma velocidad, tocando la bocina.",
      "B) Continuar a la misma velocidad, pero encendiendo y apagando sus luces delanteras.",
      "C) Detenerse y señalar con la mano para que los niños crucen a recoger la pelota.",
      "D) Disminuir la velocidad y estar preparado para detenerse si aparece un niño."],
                image: true,
        correctAnswers: ["D) Disminuir la velocidad y estar preparado para detenerse si aparece un niño."]
  },
  {
    number: 102,
    question: "Al adelantar a animales que van por el camino, usted no debería...",
    options: [
      "A) Acelerar el motor o tocar la bocina.",
      "B) Cambiar a una marcha más baja.",
      "C) Usar los señalizadores de viraje.",
      "D) Tener las luces encendidas."],
                image: false,
        correctAnswers: ["A) Acelerar el motor o tocar la bocina."]
  },
  {
    number: 103,
    question: "Al adelantar en un camino a una manada de ovejas, ¿qué hace usted? MARQUE TRES RESPUESTAS:",
    options: [
      "A) Deja un espacio lateral suficiente.",
      "B) Adelanta rápidamente y sin vacilaciones.",
      "C) Conduce lentamente.",
      "D) Toca la bocina levemente.",
      "E) Está preparado para detenerse."],
                image: false,
        correctAnswers: ["A) Deja un espacio lateral suficiente.", "C) Conduce lentamente.", "E) Está preparado para detenerse."]
  },
  {
    number: 104,
    question: "Usted va conduciendo por una calle de dos pistas y de doble sentido de tránsito en la cual hay vehículos estacionados al costado derecho. ¿Por cuáles 3 razones usted debe disminuir su velocidad? MARQUE TRES RESPUESTAS:",
    options: [
      "A) Pueden salir vehículos de su estacionamiento.",
      "B) Alguien puede abrir una puerta de un auto estacionado.",
      "C) Puede activar las alarmas de los automóviles.",
      "D) Para poder ser visto con mayor claridad por el tránsito que viene en contra.",
      "E) Entre los autos estacionados puede aparecer un niño corriendo."],
                image: false,
        correctAnswers: ["A) Pueden salir vehículos de su estacionamiento.", "B) Alguien puede abrir una puerta de un auto estacionado.", "E) Entre los autos estacionados puede aparecer un niño corriendo."]
  },
  {
    number: 105,
    question: "Usted está esperando en un cruce en T. El vehículo azul que se acerca desde la izquierda señaliza a la derecha. ¿Qué debería hacer usted?",
    options: [
      "A) Avanzar acelerando a fondo.",
      "B) Ponerse en marcha antes de que el vehículo azul llegue al cruce.",
      "C) Esperar hasta que el vehículo azul haya comenzado a virar.",
      "D) Avanzar lentamente."],
                image: true,
        correctAnswers: ["C) Esperar hasta que el vehículo azul haya comenzado a virar."]
  },
  {
    number: 106,
    question: "Usted se ha quedado detenido justo al medio de un cruce ferroviario con sistema automático de señales y barreras y no puede echar a andar el motor nuevamente. La campanilla del cruce comienza a sonar. ¿Qué debería hacer usted?",
    options: [
      "A) Correr por la vía para intentar avisar al maquinista.",
      "B) Salir del vehículo y alejarse de él.",
      "C) Seguir intentando reiniciar la marcha del vehículo.",
      "D) Intentar despejar el cruce empujando su vehículo."],
                image: false,
        correctAnswers: ["B) Salir del vehículo y alejarse de él."]
  },
  {
    number: 107,
    question: "¿A qué debe estar especialmente atento el conductor del vehículo indicado con la flecha? MARQUE TRES RESPUESTAS:",
    options: [
      "A) Irregularidades de la superficie de calzada.",
      "B) Peatones que puedan aparecer sorpresivamente entre autos estacionados para cruzar.",
      "C) Autos que abandonen sus lugares de estacionamiento.",
      "D) Lugares disponibles para estacionar.",
      "E) Puertas de automóviles estacionados que se abran.",
      "F) Automóviles que vengan detrás de él."],
                image: true,
        correctAnswers: ["B) Peatones que puedan aparecer sorpresivamente entre autos estacionados para cruzar.", "C) Autos que abandonen sus lugares de estacionamiento.", "E) Puertas de automóviles estacionados que se abran."]
  },
  {
    number: 108,
    question: "¿Qué debería hacer el conductor del auto indicado con la flecha?",
    options: [
      "A) Hacer señas con la mano a los peatones que están esperando poder cruzar.",
      "B) Pasar rápidamente por detrás del peatón que va cruzando la calzada.",
      "C) Esperar a que pase el peatón que va por la calzada.",
      "D) Decirle al peatón que no debería haber cruzado."],
                image: true,
        correctAnswers: ["C) Esperar a que pase el peatón que va por la calzada."]
  },
  {
    number: 109,
    question: "¿Qué debería hacer el conductor del auto señalado con la flecha?",
    options: [
      "A) Retrocer para salir del cruce.",
      "B) Esperar en el mismo lugar hasta tener luz verde.",
      "C) Esperar hasta tener luz roja.",
      "D) Continuar con precaución."],
                image: true,
        correctAnswers: ["D) Continuar con precaución."]
  },
  {
    number: 110,
    question: "¿Cuál es el principal peligro cuando usted sobrepasa al bus que está detenido en la parada?",
    options: [
      "A) Que usted debe ceder el paso al bus si éste se pone en marcha.",
      "B) Que el auto que va adelante puede detenerse para ceder el paso a un peatón.",
      "C) Que alguien puede venir corriendo al bus desde el otro lado de la calle.",
      "D) Que algún pasajero que se baje del bus puede aparecer repentinamente delante del mismo para cruzar."],
                image: true,
        correctAnswers: ["D) Que algún pasajero que se baje del bus puede aparecer repentinamente delante del mismo para cruzar."]
  },
  {
    number: 111,
    question: "¿Qué significa la señal que está efectuando el camión?",
    options: [
      "A) El camión va a disminuir la velocidad y va a detenerse.",
      "B) El conductor del camión le está indicando a usted que lo puede adelantar.",
      "C) El camión va a virar a la derecha.",
      "D) El conductor del camión ha olvidado apagar sus luces indicadoras de viraje."],
                image: true,
        correctAnswers: ["C) El camión va a virar a la derecha."]
  },
  {
    number: 112,
    question: "¿Qué debe hacer usted cuando va en una fila de autos? MARQUE TRES:",
    options: [
      "A) Debe concentrarse sólo en el vehículo que va inmediatamente delante suyo.",
      "B) Debe mantener un espacio suficiente respecto del vehículo que va delante suyo, de modo de posibilitar que otro vehículo lo adelante a usted e ingrese a dicho espacio.",
      "C) Debe mirar a buena distancia hacia adelante, eventualmente a través de los cristales de los otros vehículos, a fin de poder moderar la velocidad a tiempo si alguien frena.",
      "D) Debe mantenerse atento a los vehículos que van tanto delante como detrás suyo.",
      "E) Debe concentrarse sólo en el vehículo que va detrás suyo."],
                image: false,
        correctAnswers: ["B) Debe mantener un espacio suficiente respecto del vehículo que va delante suyo, de modo de posibilitar que otro vehículo lo adelante a usted e ingrese a dicho espacio.", "C) Debe mirar a buena distancia hacia adelante, eventualmente a través de los cristales de los otros vehículos, a fin de poder moderar la velocidad a tiempo si alguien frena.", "D) Debe mantenerse atento a los vehículos que van tanto delante como detrás suyo."]
  },
  {
    number: 113,
    question: "¿Hacia dónde es más importante que usted mire en este momento?",
    options: [
      "A).",
      "B).",
      "C).",
      "D)."],
                image: true,
        correctAnswers: ["C)."]
  },
  {
    number: 114,
    question: "En esta situación, ¿a cuáles 3 riesgos debe estar usted principalmente atento? MARQUE TRES RESPUESTAS:",
    options: [
      "A) Al ciclista que viene en sentido contrario.",
      "B) Al tránsito en la intersección que hay más adelante.",
      "C) A las puertas de autos que pueden ser abiertas.",
      "D) A niños que pueden salir a la calzada por entre los autos.",
      "E) A los vehículos que pueden venir detrás suyo.",
      "F) A irregularidades de la superficie de calzada."],
                image: true,
        correctAnswers: ["A) Al ciclista que viene en sentido contrario.", "C) A las puertas de autos que pueden ser abiertas.", "D) A niños que pueden salir a la calzada por entre los autos."]
  },
  {
    number: 115,
    question: "Usted va conduciendo a 70 km/h que es la velocidad máxima permitida en esta vía. ¿Qué hace en esta situación? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
      "A) Está preparado para actuar ya que alguien puede salir corriendo a la calzada.",
      "B) Está preparado para actuar ya que el bus puede ponerse en marcha.",
      "C) Frena y cede el paso al bus que está detenido en la parada.",
      "D) Continúa conduciendo a la misma velocidad sin tener precaución."],
                image: true,
        correctAnswers: ["A) Está preparado para actuar ya que alguien puede salir corriendo a la calzada.", "B) Está preparado para actuar ya que el bus puede ponerse en marcha."]
  },

    {
    number: 116,
    question: "¿Qué hace usted ante esta situación?",
    options: [
      "A) Hace señales a los peatones para que se alejen de la calzada.",
      "B) Reduce su velocidad y continúa conduciendo.",
      "C) Hace señales de luces al vehículo que viene en contra para que espere a que usted haya pasado.",
      "D) Espera y deja pasar primero al vehículo que viene en contra, y luego usted continúa y pasa a los peatones."],
                image: true,
        correctAnswers: ["D) Espera y deja pasar primero al vehículo que viene en contra, y luego usted continúa y pasa a los peatones."]
  },
  {
    number: 117,
    question: "Mientras va conduciendo su vehículo usted siente que lo están llamando a su teléfono celular, ¿qué hace usted para responder la llamada?",
    options: [
      "A) Reduce su velocidad.",
      "B) Espera hasta encontrar un lugar seguro donde detenerse.",
      "C) Conduce con una mano en el volante.",
      "D) Es especialmente cauteloso en las intersecciones."],
                image: false,
        correctAnswers: ["B) Espera hasta encontrar un lugar seguro donde detenerse."]
  },
  {
    number: 118,
    question: "Usted debería utilizar su teléfono celular en su automóvil solo en la siguiente situación:",
    options: [
      "A) Si su vehículo tiene cambio automático.",
      "B) Si necesita efectuar una llamada de emergencia.",
      "C) Cuando se encuentra detenido en un lugar seguro.",
      "D) Al circular por un camino secundario."],
                image: false,
        correctAnswers: ["C) Cuando se encuentra detenido en un lugar seguro."]
  },
  {
    number: 119,
    question: "En un camino muy transitado usted desea adelantar a un camión con remolque que va lentamente delante suyo, ¿qué debería hacer usted?",
    options: [
      "A) Mantenerse bien atrás del camión hasta que pueda ver que tiene espacio suficiente como para adelantarlo.",
      "B) Esperar atrás del camión hasta que su conductor le indique que puede adelantarlo.",
      "C) Encender y apagar sus luces para que quienes vienen en contra le faciliten el adelantamiento.",
      "D) Seguir muy de cerca al camión desplazándose permanentemente hacia el centro de la calzada para poder ver hacia adelante."],
                image: false,
        correctAnswers: ["A) Mantenerse bien atrás del camión hasta que pueda ver que tiene espacio suficiente como para adelantarlo."]
  },
  {
    number: 120,
    question: "La mayor parte de los accidentes de tránsito se produce en:",
    options: [
      "A) Carreteras",
      "B) Salidas de colegios",
      "C) Caminos rurales",
      "D) Intersecciones"],
                image: false,
        correctAnswers: ["D) Intersecciones"]
  },
  {
    number: 121,
    question: "Entre los accidentes de tránsito se distinguen distintos tipos de éstos. En Chile, ¿cuál es el tipo de accidente que origina la mayor cantidad de muertos?",
    options: [
      "A) Los choques contra obstáculos fijos.",
      "B) Las colisiones entre 2 o más vehículos.",
      "C) Los atropellos.",
      "D) Los volcamientos."],
                image: false,
        correctAnswers: ["C) Los atropellos."]
  },
  {
    number: 122,
    question: "Al estar estacionado, ¿qué debería hacer usted justo antes de poner su vehículo en movimiento?",
    options: [
      "A) Ajustar sus espejos.",
      "B) Seleccionar primera marcha.",
      "C) Mirar a su alrededor y chequear sus puntos ciegos.",
      "D) Señalizar."],
                image: false,
        correctAnswers: ["C) Mirar a su alrededor y chequear sus puntos ciegos."]
  },
  {
    number: 123,
    question: "Las fotografías muestran una secuencia cronológica de imágenes. ¿Cuáles son las 2 principales causas por las que surge esta situación de peligro?",
    options: [
      "A) Por adelantar en un lugar prohibido.",
      "B) Por mala visibilidad.",
      "C) Porque el vehículo adelantado no anda lo suficientemente a la derecha.",
      "D) Porque el conductor del auto que llega a la carretera por la izquierda ingresa a ésta cuando no debió haberlo hecho."],
                image: true,
        correctAnswers: ["A) Por adelantar en un lugar prohibido.", "D) Porque el conductor del auto que llega a la carretera por la izquierda ingresa a ésta cuando no debió haberlo hecho."]
  },
  {
    number: 124,
    question: "Usted llega a una intersección regulada por semáforo que se encuentra en rojo y, al mismo tiempo, un Carabinero le indica que avance, ¿qué debe hacer usted?",
    options: [
      "A) Detenerse, porque la luz roja se lo está indicando.",
      "B) Avanzar, porque las instrucciones de un Carabinero prevalecen sobre las señales del tránsito.",
      "C) Avanzar, solo si detrás suyo no vienen otros vehículos.",
      "D) Avanzar, solo si está seguro que la luz roja está próxima a cambiar."],
                image: false,
        correctAnswers: ["B) Avanzar, porque las instrucciones de un Carabinero prevalecen sobre las señales del tránsito."]
  },
  {
    number: 125,
    question: "¿En qué situación puede usted hacer uso de la bocina de su vehículo?",
    options: [
      "A) Cuando cede a otro el derecho a vía.",
      "B) Cuando saluda a otros usuarios de la vía.",
      "C) Cuando trata de prevenir a otros acerca de un peligro.",
      "D) Cuando desea manifestar su disgusto."],
                image: false,
        correctAnswers: ["C) Cuando trata de prevenir a otros acerca de un peligro."]
  },
  {
    number: 126,
    question: "¿Cuándo puede usted hacer sonar la bocina de su auto?",
    options: [
      "A) Para llamar la atención de un amigo.",
      "B) Para que le cedan el paso.",
      "C) Para apurar a un conductor que va más lento.",
      "D) Para prevenir la ocurrencia de un accidente."],
                image: false,
        correctAnswers: ["D) Para prevenir la ocurrencia de un accidente."]
  },
  {
    number: 127,
    question: "Usted se va acercando a un cruce semaforizado. ¿Cuándo no debe usted ingresar al cruce aunque el semáforo esté en verde?",
    options: [
      "A) Cuando hay peatones esperando para cruzar.",
      "B) Cuando pasado el cruce su pista no esté lo suficientemente despejada.",
      "C) Cuando usted cree que la luz está próxima a cambiar.",
      "D) Cuando usted va a virar a la derecha."],
                image: false,
        correctAnswers: ["B) Cuando pasado el cruce su pista no esté lo suficientemente despejada."]
  },
  {
    number: 128,
    question: "Fuera de la ciudad, usted va por una carretera de doble calzada con dos pistas por sentido. La velocidad máxima permitida es de 100 km/hr. Si usted va a 90 km/hr y no van vehículos delante suyo, ¿por cuál pista circula usted?",
    options: [
      "A) Por la pista de la izquierda.",
      "B) Por la pista de la derecha.",
      "C) Por cualquiera de las dos pistas."],
                image: false,
        correctAnswers: ["B) Por la pista de la derecha."]
  },
  {
    number: 129,
    question: "En una carretera de doble calzada con dos pistas por sentido, ¿en cuáles 2 de las siguientes situaciones usted usaría la pista izquierda? MARQUE DOS RESPUESTAS:",
    options: [
      "A) Cuando va a virar a la izquierda.",
      "B) Al pasar a otro vehículo que va más lento.",
      "C) Al circular normalmente.",
      "D) Al conducir a una velocidad muy baja."],
                image: false,
        correctAnswers: ["A) Cuando va a virar a la izquierda.", "B) Al pasar a otro vehículo que va más lento."]
  },
  {
    number: 130,
    question: "¿En qué situación retrocede usted con su vehículo en un cruce?",
    options: [
      "A) Si no hay nadie detrás suyo.",
      "B) En ningún momento.",
      "C) Sólo si ha quedado detenido sobre el paso de peatones.",
      "D) Sólo si recibe indicación expresa de un Carabinero."],
                image: false,
        correctAnswers: ["D) Sólo si recibe indicación expresa de un Carabinero."]
  },
  {
    number: 131,
    question: "Usted se aproxima a un cruce de calles no señalizado. Por la otra calle también se aproxima un vehículo que pretende pasar el cruce. ¿Quién tiene la prioridad para pasar?",
    options: [
      "A) El vehículo más grande.",
      "B) El vehículo que vaya a mayor velocidad.",
      "C) El otro vehículo, siempre que él se venga acercando al cruce por el lado derecho suyo.",
      "D) El otro vehículo, siempre que él se venga acercando al cruce por el lado izquierdo suyo."],
                image: false,
        correctAnswers: ["C) El otro vehículo, siempre que él se venga acercando al cruce por el lado derecho suyo."]
  },
  {
    number: 132,
    question: "Cuando dos vehículos van a cruzarse en una intersección en la que no hay señalización alguna, ¿quién debe ceder el paso?",
    options: [
      "A) El vehículo más pequeño.",
      "B) El vehículo que va por la calle de pistas más angostas.",
      "C) El que se acerca al cruce por la derecha del otro.",
      "D) El que se acerca al cruce por la izquierda del otro."],
                image: false,
        correctAnswers: ["D) El que se acerca al cruce por la izquierda del otro."]
  },
  {
    number: 133,
    question: "¿Es seguro permitir que los niños viajen en un vehículo de 3 o 5 puertas en el espacio que queda detrás de los asientos traseros?",
    options: [
      "A) No, en ninguna circunstancia.",
      "B) Sí, siempre que usted pueda ver sin problemas hacia atrás.",
      "C) Sí, si son menores de 10 años.",
      "D) No, a menos que los demás asientos estén ocupados."],
                image: false,
        correctAnswers: ["A) No, en ninguna circunstancia."]
  },
  {
    number: 134,
    question: "¿Cuáles son las 2 formas más seguras para transportar una guagua en su automóvil? MARQUE DOS RESPUESTAS:",
    options: [
      "A) En brazos de un adulto que va con cinturón de seguridad.",
      "B) En brazos de un adulto de modo que el cinturón les sujete a ambos.",
      "C) En una silla de seguridad mirando hacia adelante.",
      "D) En el asiento delantero, en una silla de seguridad mirando hacia atrás, pero solo si el vehículo no posee doble airbag.",
      "E) En el asiento trasero, en silla de seguridad mirando hacia atrás."],
                image: false,
        correctAnswers: ["D) En el asiento delantero, en una silla de seguridad mirando hacia atrás, pero solo si el vehículo no posee doble airbag.", "E) En el asiento trasero, en silla de seguridad mirando hacia atrás."]
  },
  {
    number: 135,
    question: "¿Cuál es la forma más segura para llevar a un niño de 3 ó 4 años en su vehículo?",
    options: [
      "A) En la falda de un adulto compartiendo un mismo cinturón de seguridad.",
      "B) En la falda de un adulto que va con su cinturón de seguridad.",
      "C) En cualquier asiento, siempre que lleve puesto el cinturón de seguridad para adultos.",
      "D) En el asiento trasero, en una silla de seguridad."],
                image: false,
        correctAnswers: ["D) En el asiento trasero, en una silla de seguridad."]
  },
  {
    number: 136,
    question: "La forma más segura de viajar en un automóvil para un niño menor de 2 años es:",
    options: [
      "A) En brazos de un adulto.",
      "B) Solo en el asiento delantero y con cinturón de seguridad.",
      "C) Solo en el asiento trasero y con cinturón de seguridad.",
      "D) En un asiento de seguridad mirando hacia atrás."],
                image: false,
        correctAnswers: ["D) En un asiento de seguridad mirando hacia atrás."]
  },

  {
    number: 137,
    question: "En un vehículo de 3 o 5 puertas, ¿en qué condiciones sería seguro transportar niños pequeños en el espacio que queda detrás de los asientos traseros?",
    options: [
      "A) Al efectuar un viaje corto dentro de la ciudad.",
      "B) Al circular por calles o caminos de poco tránsito.",
      "C) Nunca.",
      "D) Siempre es seguro."],
                image: false,
        correctAnswers: ["C) Nunca."]
  },

  {
    number: 138,
    question: "Usted está en una calle de un solo sentido de tránsito y desea virar a la izquierda. ¿Cuál o cuáles de las siguientes afirmaciones es(son) correcta(s)? MARQUE LAS RESPUESTAS CORRECTAS",
    options: [
      "A) Usted está bien situado para virar a la izquierda.",
      "B) Si después de virar usted volverá a virar nuevamente a la izquierda en el siguiente cruce, lo mejor es que se mantenga en la pista izquierda de la calle hacia la cual está virando.",
      "C) Usted nunca puede saber si la calle hacia la cual vira tiene un solo sentido de tránsito o dos. Por eso, siempre debe tomar la pista derecha de la calle hacia la cual vira.",
      "D) No es necesario que usted señalice que va a virar."],
                image: true,
        correctAnswers: ["A) Usted está bien situado para virar a la izquierda.", "B) Si después de virar usted volverá a virar nuevamente a la izquierda en el siguiente cruce, lo mejor es que se mantenga en la pista izquierda de la calle hacia la cual está virando."]
  },

  {
    number: 139,
    question: "¿En cuál o cuáles de las siguientes situaciones puede usted virar a la izquierda sin que siempre deba detenerse antes? MARQUE LAS CORRECTAS:",
    options: [
      "A).",
      "B).",
      "C).",
      "D)."],
                image: true,
        correctAnswers: ["A).", "B).", "D)."]
  },

  {
    number: 140,
    question: "¿Frente a cuál o cuáles de las siguientes señales e indicaciones del semáforo debe usted detenerse siempre? MARQUE LAS CORRECTAS:",
    options: [
      "A).",
      "B).",
      "C).",
      "D)."],
                image: true,
        correctAnswers: ["B).", "D)."]
  },

  {
    number: 141,
    question: "Usted va por una calle de doble sentido de tránsito. Para virar a la izquierda, ¿dónde debería ubicarse?",
    options: [
      "A) Lo más a la derecha posible.",
      "B) Justo a la izquierda de la línea de centro de calzada.",
      "C) Justo a la derecha de la línea de centro de calzada."],
                image: false,
        correctAnswers: ["C) Justo a la derecha de la línea de centro de calzada."]
  },

  {
    number: 142,
    question: "Usted va detrás de un camión articulado que va a doblar a la derecha hacia una vía angosta. ¿Qué debe hacer usted?",
    options: [
      "A) Desplazarse rápidamente hacia la pista adyacente y sobrepasarlo.",
      "B) Tocar la bocina para advertir su presencia.",
      "C) Sobrepasarlo por la derecha mientras él se desplace hacia la izquierda.",
      "D) Mantenerse detrás de él hasta que finalice su maniobra."],
                image: true,
        correctAnswers: ["D) Mantenerse detrás de él hasta que finalice su maniobra."]
  },

  {
    number: 143,
    question: "¿Cómo señaliza usted con el brazo cuando va a virar hacia la derecha?",
    options: [
    "A).",
    "B).",
    "C)."],
                image: true,
        correctAnswers: ["B)."]
  },

  {
    number: 144,
    question: "¿Cuál señalización con el brazo del conductor de un vehículo que va adelante le indica que va a virar a la izquierda?",
    options: [
      "A).",
      "B).",
      "C)."],
                image: true,
        correctAnswers: ["C)."]
  },

  {
    number: 145,
    question: "Usted ha alcanzado a un auto al que desea adelantar. ¿Cuáles son las 3 cosas más difíciles de juzgar? MARQUE TRES RESPUESTAS:",
    options: [
      "A) La velocidad del auto al que desea adelantar.",
      "B) Si es suficientemente ancho el espacio a la izquierda del vehículo que va adelante.",
      "C) La distancia al vehículo que viene en sentido contrario.",
      "D) La longitud de la distancia de adelantamiento.",
      "E) El punto de encuentro con el vehículo que viene en contra."],
                image: false,
        correctAnswers: ["C) La distancia al vehículo que viene en sentido contrario.", "D) La longitud de la distancia de adelantamiento.", "E) El punto de encuentro con el vehículo que viene en contra."]
  },

  {
    number: 146,
    question: "Usted va conduciendo su vehículo a 90 km/h que es la velocidad máxima permitida en esa vía. ¿Qué hace usted si a pesar de todo un vehículo desea adelantarlo? MARQUE DOS RESPUESTAS:",
    options: [
      "A) Conduce lo más a la derecha posible.",
      "B) Se desplaza hacia la berma y circula por ella.",
      "C) Enciende sus luces de advertencia de peligro.",
      "D) No acelera."],
                image: true,
        correctAnswers: ["A) Conduce lo más a la derecha posible.", "D) No acelera."]
  },

  {
    number: 147,
    question: "Usted va por una carretera a 100 km/h. ¿Qué hace usted si a pesar de todo un vehículo que viene atrás desea adelantarlo? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
      "A) Acelera para impedir el adelantamiento.",
      "B) Se mantiene lo más a la derecha posible.",
      "C) Mantiene o disminuye su velocidad.",
      "D) Enciende su intermitente izquierdo en señal de advertencia de que viene un vehículo en contra.",
      "E) Se acerca lo más posible hacia la línea de centro de calzada, para impedir el adelantamiento."],
                image: false,
        correctAnswers: ["B) Se mantiene lo más a la derecha posible.", "C) Mantiene o disminuye su velocidad."]
  },

  {
    number: 148,
    question: "Usted desea adelantar. ¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? MARQUE LAS RESPUESTAS CORRECTAS",
    options: [
      "A) El camión tiene la obligación de correrse hacia la berma para dejarle a usted más espacio.",
      "B) El auto que viene en sentido contrario tiene la obligación de correrse a la berma para aumentar la seguridad.",
      "C) El camión está obligado a reducir la velocidad.",
      "D) Usted tiene la obligación de esperar a que la pista del sentido contrario esté libre de vehículos para luego adelantar."],
                image: true,
        correctAnswers: ["D) Usted tiene la obligación de esperar a que la pista del sentido contrario esté libre de vehículos para luego adelantar."]
  },

  {
    number: 149,
    question: "Usted ha comenzado a adelantar. El auto de la derecha va a aproximadamente 80 km/h. Por su espejo retrovisor usted ve otro auto que tiene intención de adelantar. ¿Qué hace usted?",
    options: [
      "A) Frena ligeramente y vuelve a la pista derecha.",
      "B) Acelera y adelanta, porque el auto que usted adelanta tiene la obligación de reducir la velocidad.",
      "C) Acelera y adelanta tan rápido como pueda, para no obstaculizar al que viene detrás suyo.",
      "D) Acelera y adelanta, ya que el ancho de la calzada es suficiente para 3 vehículos si el que viene en contra se corre bien a su derecha."],
                image: true,
        correctAnswers: ["A) Frena ligeramente y vuelve a la pista derecha."]
  },

  {
    number: 150,
    question: "Antes de adelantar a un vehículo de gran tamaño usted debería mantenerse suficientemente atrás de él. ¿Por qué?",
    options: [
      "A) Para tener una mejor visual hacia adelante sobre la vía.",
      "B) Para tener espacio suficiente que le permita acelerar y adelantar en las curvas.",
      "C) Para tener espacio suficiente en caso que el vehículo se detenga y retroceda.",
      "D) Para poder ver mejor las señales que le pueda hacer su conductor."],
                image: false,
        correctAnswers: ["A) Para tener una mejor visual hacia adelante sobre la vía."]
  },

  {
    number: 151,
    question: "¿Por qué adelantar a un camión es más arriesgado que adelantar a un auto?",
    options: [
      "A) Porque los camiones pueden detenerse sorpresivamente.",
      "B) Porque los camiones son más largos que los autos.",
      "C) Porque los frenos de los camiones no son tan buenos.",
      "D) Porque los camiones suben las pendientes más lentamente."],
                image: false,
        correctAnswers: ["B) Porque los camiones son más largos que los autos."]
  },

  {
    number: 152,
    question: "Usted está a punto de adelantar a un vehículo pesado. ¿Qué debería hacer?",
    options: [
      "A) Tocar la bocina para advertirle al conductor que usted está ahí.",
      "B) Mantenerse bien atrás del vehículo para tener una mayor visual.",
      "C) Conducir cerca del vehículo con el propósito de adelantarlo rápidamente.",
      "D) Encender y apagar sus luces y esperar hasta que el conductor le avise que es seguro adelantar."],
                image: false,
        correctAnswers: ["B) Mantenerse bien atrás del vehículo para tener una mayor visual."]
  },

  {
    number: 153,
    question: "Usted va conduciendo de día por una zona rural. La calzada tiene pavimento en buen estado y tránsito bidireccional. A menos que alguna señal le indique otra cosa, usted no debe exceder los ...",
    options: [
      "A) 50 km/hr",
      "B) 90 km/hr",
      "C) 120 km/hr",
      "D) 100 km/hr"],
                image: false,
        correctAnswers: ["C) 120 km/hr"]
  },

  {
    number: 154,
    question: "Usted va conduciendo en la ciudad por una calle con 2 pistas en sentido único de tránsito. A menos que alguna señal le indique otra cosa, usted no debe exceder los ...",
    options: [
      "A) 30 km/hr",
      "B) 60 km/hr",
      "C) 50 km/hr",
      "D) 80 km/hr"],
                image: false,
        correctAnswers: ["B) 60 km/hr"]
  },

  {
    number: 155,
    question: "Como norma general, antes de tomar una curva cerrada, usted debe ...",
    options: [
      "A) acelerar para salir cuanto antes de ella.",
      "B) acelerar para luego reducir la velocidad mientras vaya saliendo de ella.",
      "C) disminuir la velocidad, pero sólo si la calzada está mojada.",
      "D) disminuir la velocidad, para luego acelerar gradualmente mientras la va recorriendo."],
                image: false,
        correctAnswers: ["D) disminuir la velocidad, para luego acelerar gradualmente mientras la va recorriendo."]
  },

  {
    number: 156,
    question: "¿En cuál o cuáles situaciones el vehículo está mal estacionado? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
      "A).",
      "B).",
      "C).",
      "D)."],
                image: true,
        correctAnswers: ["A).", "B)."]
  },

  {
    number: 157,
    question: "¿En cuál o cuáles de las siguientes situaciones el conductor se ha detenido correctamente para recoger un pasajero? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
      "A).",
      "B).",
      "C).",
      "D)."],
                image: true,
        correctAnswers: ["B).", "D)."]
  },

  {
    number: 158,
    question: "Por una emergencia usted requiere estacionar de noche en una carretera sin alumbrado y con buenas bermas. ¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
      "A) Usted debe estacionar al costado izquierdo enfrentando la circulación.",
      "B) Mientras el vehículo esté estacionado usted debe mantener encendidas sus luces de estacionamiento.",
      "C) Usted debe estacionar al costado derecho y de modo que todo el vehículo quede sobre la berma.",
      "D) No está permitido estacionar en la berma."],
                image: false,
        correctAnswers: ["B) Mientras el vehículo esté estacionado usted debe mantener encendidas sus luces de estacionamiento.", "C) Usted debe estacionar al costado derecho y de modo que todo el vehículo quede sobre la berma."]
  },

  {
    number: 159,
    question: "¿En cuál o cuáles de estos lugares podría el estacionamiento de su vehículo causar daño u obstrucción a otros usuarios de la vía? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
      "A) Frente a una entrada de autos de una propiedad.",
      "B) En o al llegar a una parada de locomoción colectiva.",
      "C) En un paso de peatones.",
      "D) En un espacio delimitado para estacionar."],
                image: false,
        correctAnswers: ["A) Frente a una entrada de autos de una propiedad.", "B) En o al llegar a una parada de locomoción colectiva.", "C) En un paso de peatones."]
  },

  {
    number: 160,
    question: "¿En qué circunstancia usted se detendría justo sobre un cruce cebra existente a mitad de cuadra?",
    options: [
      "A) En ningún momento.",
      "B) Cuando no hay peatones esperando para cruzar.",
      "C) Durante la noche.",
      "D) Cuando ello sea necesario para evitar un accidente."],
                image: false,
        correctAnswers: ["A) En ningún momento."]
  },

  {
    number: 161,
    question: "Como regla general, ¿en cuál o cuáles de los siguientes lugares usted no debe estacionar? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
      "A) En una parada de buses.",
      "B) Al costado derecho de una vía urbana.",
      "C) Al lado de un bandejón central.",
      "D) Frente a una entrada de autos de una casa particular.",
      "E) En una vía inclinada levemente.",
      "F) En una curva del camino."],
                image: false,
        correctAnswers: ["A) En una parada de buses.", "C) Al lado de un bandejón central.", "D) Frente a una entrada de autos de una casa particular.", "F) En una curva del camino."]
  },

  {
    number: 162,
    question: "¿Cuál o cuáles de las siguientes afirmaciones es(son) correcta(s) tratándose de una vía urbana sin señales de tránsito que prohiban o autoricen el estacionamiento o la detención? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
      "A) Usted puede detenerse en doble fila sólo por el tiempo necesario para que bajen pasajeros de su auto.",
      "B) Usted puede detenerse al costado de un bandejón central para permitir la subida de pasajeros a su vehículo.",
      "C) Al estacionar, usted debe hacerlo al costado derecho y preocupándose de dejar una distancia de a lo menos 10 m entre su vehículo y la esquina.",
      "D) Usted puede estacionar al costado derecho y a 5 m de la esquina si el cruce se encuentra semaforizado."],
                image: false,
        correctAnswers: ["C) Al estacionar, usted debe hacerlo al costado derecho y preocupándose de dejar una distancia de a lo menos 10 m entre su vehículo y la esquina."]
  },

  {
    number: 163,
    question: "Usted va a dejar su vehículo estacionado. ¿En qué caso puede dejarlo con el motor funcionando?",
    options: [
      "A) En ningún caso.",
      "B) Si va a estar estacionado menos de 5 minutos.",
      "C) Si la batería está descargada.",
      "D) Si en el vehículo va a permanecer una persona."],
                image: false,
        correctAnswers: ["A) En ningún caso."]
  },

  {
    number: 164,
    question: "En una vía urbana de sentido único de tránsito, sin señalización que permita o prohíba el estacionamiento, ¿a qué lado puede estacionar?",
    options: [
      "A) A ambos lados.",
      "B) En ninguno, porque no hay señales que lo permitan.",
      "C) Sólo al lado derecho según el sentido del tránsito.",
      "D) Sólo al lado izquierdo según el sentido del tránsito."],
                image: false,
        correctAnswers: ["C) Sólo al lado derecho según el sentido del tránsito."]
  },

  {
    number: 165,
    question: "¿En cuáles 3 de las siguientes ocasiones debe usted detener siempre su vehículo? MARQUE TRES RESPUESTAS:",
    options: [
      "A) Al verse involucrado en un accidente.",
      "B) Al enfrentar una señal CEDA EL PASO.",
      "C) Al enfrentar una luz roja de un semáforo.",
      "D) Ante un cruce cebra en el que no hay peatones cruzando ni esperando para cruzar.",
      "E) Cuando un Carabinero se lo solicita."],
                image: false,
        correctAnswers: ["A) Al verse involucrado en un accidente.", "C) Al enfrentar una luz roja de un semáforo.", "E) Cuando un Carabinero se lo solicita."]
  },

  {
    number: 166,
    question: "¿A cuántos metros de una esquina es lo más cerca que usted puede estacionar?",
    options: [
      "A) 5 metros",
      "B) 10 metros",
      "C) 12 metros",
      "D) 15 metros"],
                image: true,
        correctAnswers: ["B) 10 metros"]
  },

  {
    number: 167,
    question: "Como regla general, ¿en cuál o cuáles de los siguientes lugares nunca debe estacionar? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
      "A) En un paso de peatones.",
      "B) En un puente.",
      "C) A menos de 10 metros de una esquina.",
      "D) Al costado derecho de una vía urbana.",
      "E) En o al llegar a una parada de locomoción colectiva."],
                image: false,
        correctAnswers: ["A) En un paso de peatones.", "B) En un puente.", "C) A menos de 10 metros de una esquina.", "E) En o al llegar a una parada de locomoción colectiva."]
  },

  {
    number: 168,
    question: "De noche, en una zona rural, por emergencia usted estaciona su vehículo al costado de la vía. ¿En qué circunstancia debe usted encender sus luces de estacionamiento?",
    options: [
      "A) Cuando la berma no es suficientemente ancha y parte del vehículo queda sobre la calzada.",
      "B) Cuando el centro de la calzada está demarcado con línea blanca continua.",
      "C) Cuando el camino es de tierra.",
      "D) Siempre."],
                image: false,
        correctAnswers: ["A) Cuando la berma no es suficientemente ancha y parte del vehículo queda sobre la calzada."]
  },

  {
    number: 169,
    question: "¿Qué hace usted ante esta situación?",
    options: [
      "A) Continúa a la misma velocidad.",
      "B) Toca la bocina.",
      "C) Pasa el paso de peatones lo más rápido posible.",
      "D) Se detiene."],
                image: true,
        correctAnswers: ["D) Se detiene."]
  },

  {
    number: 170,
    question: "Usted conduce a 90 km/h cuando la vía es obstruida sorpresivamente por un camión que está virando a la izquierda. ¿Qué es lo primero que hace usted?",
    options: [
      "A) Hace señales de luces y toca la bocina.",
      "B) Frena firmemente.",
      "C) Se desplaza a la pista de la izquierda.",
      "D) Disminuye levemente la velocidad."],
                image: true,
        correctAnswers: ["B) Frena firmemente."]
  },

  {
    number: 171,
    question: "¿Adquiere usted un derecho sobre otros usuarios de la vía cuando utiliza sus luces indicadoras de viraje?",
    options: [
      "A) Sí, el usar las luces indicadoras de viraje le da a usted preferencia sobre los conductores que van en igual dirección a la suya.",
      "B) Sí, y además de darle a usted preferencia le exime de cualquier responsabilidad.",
      "C) No, porque usted sólo está advirtiendo su intención de realizar una maniobra que hará cuando sea seguro hacerla.",
      "D) Sí, pero sólo en el caso que usted esté tratando de abandonar un estacionamiento al borde de la calzada."],
                image: false,
        correctAnswers: ["C) No, porque usted sólo está advirtiendo su intención de realizar una maniobra que hará cuando sea seguro hacerla."]
  },

  {
    number: 172,
    question: "Usted se aproxima a un cruce cebra. En la vereda hay peatones esperando cruzar. ¿Qué hace usted?",
    options: [
      "A) Disminuye la velocidad y se prepara para detenerse.",
      "B) Da la pasada a los peatones sólo si éstos son ancianos o niños.",
      "C) Usa sus luces para indicarles que pueden pasar.",
      "D) Toca la bocina para indicarles que pueden cruzar."],
                image: false,
        correctAnswers: ["A) Disminuye la velocidad y se prepara para detenerse."]
  },

  {
    number: 173,
    question: "Usted conduce un vehículo de marcha lenta por un camino angosto y sinuoso. En estas circunstancias, usted debería...",
    options: [
      "A) Circular cerca del centro de la calzada para evitar que otros lo adelanten peligrosamente.",
      "B) Correrse hacia la derecha cuando pueda hacerlo en forma segura, para permitir que otros lo adelanten.",
      "C) Hacer indicaciones con la mano a los otros conductores cuando usted crea que podrán adelantarlo rápidamente.",
      "D) Señalizar con su intermitente derecho cuando adelantar no sea peligroso para los otros."],
                image: false,
        correctAnswers: ["B) Correrse hacia la derecha cuando pueda hacerlo en forma segura, para permitir que otros lo adelanten."]
  },

  {
    number: 174,
    question: "Usted está circulando por una vía rápida en buenas condiciones. ¿Cómo puede estar seguro de que lo hace a una distancia adecuada del vehículo que va adelante?",
    options: [
      "A) La distancia entre usted y el vehículo que va adelante debería ser dos veces el largo de su vehículo.",
      "B) La distancia entre usted y el vehículo que va adelante debería ser igual a su distancia de frenado.",
      "C) La distancia entre usted y el vehículo que va adelante debería ser a lo menos igual a la que usted recorre en tres segundos.",
      "D) La distancia entre usted y el vehículo que va adelante debería ser a lo menos igual a la que usted recorre en un segundo."],
                image: false,
        correctAnswers: ["C) La distancia entre usted y el vehículo que va adelante debería ser a lo menos igual a la que usted recorre en tres segundos."]
  },

  {
    number: 175,
    question: "El conductor detrás suyo le sigue muy de cerca. ¿Qué hace usted?",
    options: [
      "A) Señaliza a la derecha y le indica con lo mano para que lo adelante.",
      "B) Disminuye la velocidad y le permite que lo adelante.",
      "C) No hace nada y se mantiene dentro del límite de velocidad.",
      "D) Se acerca hacia el centro de la calzada."],
                image: false,
        correctAnswers: ["C) No hace nada y se mantiene dentro del límite de velocidad."]
  },

  {
    number: 176,
    question: "Un bus está detenido en una parada delante suyo. El intermitente izquierdo del bus está parpadeando. ¿Qué hace usted?",
    options: [
      "A) Hace parpadear sus luces delanteras y disminuye la velocidad.",
      "B) Toca la bocina y continúa.",
      "C) Disminuye la velocidad y luego toca la bocina.",
      "D) Disminuye la velocidad y cede el paso al bus, siempre que ello sea seguro."],
                image: true,
        correctAnswers: ["D) Disminuye la velocidad y cede el paso al bus, siempre que ello sea seguro."]
  },

  {
    number: 177,
    question: "Usted va conduciendo en una carretera a la velocidad máxima permitida. El conductor que viene detrás suyo está tratando de adelantarlo. ¿Qué hace usted?",
    options: [
      "A) Se acerca más al vehículo de adelante para que el conductor que viene atrás no tenga espacio suficiente para el adelantamiento.",
      "B) Le hace señas al conductor de atrás para que lo adelante, cuando sea seguro hacerlo.",
      "C) Acelera para alejarse del conductor de atrás.",
      "D) Mantiene o disminuye la velocidad y permite el adelantamiento."],
                image: false,
        correctAnswers: ["D) Mantiene o disminuye la velocidad y permite el adelantamiento."]
  },

  {
    number: 178,
    question: "Usted se está aproximando a un cruce cuando sorpresivamente un vehículo ingresa a la vía por la que usted va y se ubica delante suyo. ¿Qué hace usted?",
    options: [
      "A) Lo esquiva y toca la bocina.",
      "B) Disminuye la velocidad y está atento para detenerse.",
      "C) Enciende y apaga sus luces delanteras y continúa muy cerca detrás de él.",
      "D) Acelera pasándolo inmediatamente."],
                image: false,
        correctAnswers: ["B) Disminuye la velocidad y está atento para detenerse."]
  },

   {
    "number": 179,
    "question": "Usted va conduciendo a la velocidad máxima permitida. Un vehículo se acerca muy rápido por atrás encendiendo y apagando sus luces. ¿Qué hace usted?",
    "options": [
      "A) Acelera para mantener un espacio adecuado detrás suyo.",
      "B) Presiona su freno para mostrarle sus luces de freno.",
      "C) Le permite el adelantamiento.",
      "D) Aumenta su velocidad y le impide que lo adelante."],
                image: false,
        "correctAnswers": ["C) Le permite el adelantamiento."]
  },
  {
    "number": 180,
    "question": "Un espacio entre usted y el vehículo que marcha delante igual a lo que usted recorre en tres segundos es suficiente cuando...",
    "options": [
      "A) las condiciones climáticas son buenas.",
      "B) está lloviendo fuertemente.",
      "C) recién ha cesado de llover.",
      "D) hay neblina."],
                image: false,
        "correctAnswers": ["A) las condiciones climáticas son buenas."]
  },
  {
    "number": 181,
    "question": "Usted está conduciendo al límite de la velocidad máxima permitida y un conductor intenta adelantarlo. ¿Trataría usted de evitar que lo adelante?",
    "options": [
      "A) No, a menos que sea seguro hacerlo.",
      "B) Sí, porque el otro conductor está actuando en forma peligrosa.",
      "C) Sí, porque el otro conductor está infringiendo la ley.",
      "D) No, en ningún momento."],
                image: false,
        "correctAnswers": ["D) No, en ningún momento."]
  },
  {
    "number": 182,
    "question": "De los siguientes factores, ¿cuál es el que con mayor frecuencia se presenta en las colisiones por la parte trasera?",
    "options": [
      "A) El conducir demasiado cerca del vehículo que va adelante.",
      "B) El cambio repentino de las luces de los semáforos.",
      "C) La existencia de peatones que cruzan en áreas muy concurridas.",
      "D) El detenerse en todos los cruces."],
                image: false,
        "correctAnswers": ["A) El conducir demasiado cerca del vehículo que va adelante."]
  },
  {
    "number": 183,
    "question": "Usted está esperando poder incorporarse a una vía principal desde una calle lateral. ¿Por qué razón debería usted poner especial atención a las motocicletas?",
    "options": [
      "A) Porque generalmente las motocicletas circulan más rápido que los autos.",
      "B) Porque las patrullas de Carabineros suelen andar en motocicletas.",
      "C) Porque las motocicletas son pequeñas y difíciles de ver.",
      "D) Porque las motocicletas tienen el derecho preferente de paso."],
                image: false,
        "correctAnswers": ["C) Porque las motocicletas son pequeñas y difíciles de ver."]
  },
  {
    "number": 184,
    "question": "¿Cuál de los siguientes grupos de conductores tiene mayores probabilidades de verse involucrado en un accidente de tránsito?",
    "options": [
      "A) Los que tienen menos de 25 años.",
      "B) Los que tienen entre 36 y 45 años.",
      "C) Los que tienen entre 46 y 55 años.",
      "D) Los que tienen más de 55 años."],
                image: false,
        "correctAnswers": ["A) Los que tienen menos de 25 años."]
  },
  {
    "number": 185,
    "question": "En una zona rural, usted va conduciendo por un camino muy angosto. ¿Dónde le resultaría más difícil ver personas a caballo que avanzan delante suyo?",
    "options": [
      "A) Al ir usted bajando un cerro.",
      "B) Al ir ellas subiendo un cerro.",
      "C) Al ir usted en una curva a la izquierda.",
      "D) Al ir usted en una curva a la derecha."],
                image: false,
        "correctAnswers": ["D) Al ir usted en una curva a la derecha."]
  },
  {
    "number": 186,
    "question": "Usted va detrás de un camión articulado que se aproxima a un cruce. Su conductor señaliza hacia la derecha pero el vehículo se desplaza hacia la izquierda. ¿Qué debe hacer usted?",
    "options": [
      "A) Advertirle al conductor acerca de su señal equivocada.",
      "B) Esperar detrás del camión.",
      "C) Denunciar a Carabineros al conductor.",
      "D) Pasar al camión por la derecha."],
                image: true,
        "correctAnswers": ["B) Esperar detrás del camión."]
  },
  {
    "number": 187,
    "question": "En una carretera de doble calzada con 2 pistas por sentido de tránsito, usted desea pasar al vehículo que va delante suyo. Por su espejo retrovisor ve que el auto que viene atrás se está cambiando de pista para sobrepasarlo a usted. ¿Qué debería hacer usted?",
    "options": [
      "A) Señalizar y luego cambiar de pista para sobrepasar.",
      "B) Señalizar para indicarle al conductor que viene atrás que usted también desea sobrepasar.",
      "C) Presionar levemente el pedal de frenos para mostrar sus luces de freno.",
      "D) No señalizar hasta que el auto lo haya pasado."],
                image: false,
        "correctAnswers": ["D) No señalizar hasta que el auto lo haya pasado."]
  },

  {
    "number": 188,
    "question": "Un vehículo emerge sorpresivamente desde una vía lateral situándose delante suyo y obligándolo a frenar fuertemente. ¿Qué hace usted?",
    "options": [
        "A) Enciende y apaga sus luces para manifestarle su enojo.",
        "B) Ignora el error y permanece calmado.",
        "C) Toca la bocina para demostrar su enojo.",
        "D) Lo adelanta dejándolo atrás lo antes posible."],
                image: false,
        "correctAnswers": ["B) Ignora el error y permanece calmado."]
},
{
    "number": 189,
    "question": "Usted se detiene ante un cruce cebra. En la vereda hay peatones esperando, pero ellos no comienzan a cruzar. ¿Qué hace usted?",
    "options": [
        "A) Les toca la bocina para apurarlos.",
        "B) Tiene paciencia y espera.",
        "C) Prosigue su marcha.",
        "D) Les hace señas con la mano apurándolos para que crucen."],
                image: false,
        "correctAnswers": ["B) Tiene paciencia y espera."]
},
{
    "number": 190,
    "question": "Cuando el viento sopla muy fuertemente usted necesita tener especial cuidado...",
    "options": [
        "A) al usar los frenos.",
        "B) al comenzar a subir una pendiente.",
        "C) al virar hacia un camino angosto.",
        "D) al pasar cerca de ciclistas."],
                image: false,
        "correctAnswers": ["D) al pasar cerca de ciclistas."]
},
{
    "number": 191,
    "question": "En un cruce hay peatones atravesando la calle hacia la cual usted está virando. ¿Qué debe hacer usted?",
    "options": [
        "A) Hacerles señas con la mano para que continúen.",
        "B) Tocar la bocina para hacerles notar que usted está ahí.",
        "C) Esperar que crucen.",
        "D) Encender sus luces de advertencia de peligro."],
                image: true,
        "correctAnswers": ["C) Esperar que crucen."]
},
{
    "number": 192,
    "question": "En un cruce hay peatones atravesando la calle hacia la cual usted está virando. ¿Qué hace usted?",
    "options": [
        "A) Espera permitiéndoles que crucen.",
        "B) Continúa ya que usted tiene el derecho preferente de paso.",
        "C) Les hace señas para que retrocedan.",
        "D) Les toca la bocina para advertirles su presencia."],
                image: true,
        "correctAnswers": ["A) Espera permitiéndoles que crucen."]
},
{
    "number": 193,
    "question": "¿Dónde debe tener usted especial cuidado con los motociclistas?",
    "options": [
        "A) En una estación de servicio.",
        "B) En los cruces de calles.",
        "C) En las proximidades de un área de servicio.",
        "D) Al ingresar a un recinto o área de estacionamientos."],
                image: false,
        "correctAnswers": ["B) En los cruces de calles."]
},
{
    "number": 194,
    "question": "Cuando conduce en la ciudad ¿por qué razón debería usted tener cuidado al cruzarse con un bus que se encuentra detenido en una parada?",
    "options": [
        "A) Porque el bus puede estar en pana.",
        "B) Porque el bus puede ponerse en movimiento repentinamente.",
        "C) Porque pueden aparecer peatones detrás del bus.",
        "D) Porque el bus puede permanecer detenido."],
                image: false,
        "correctAnswers": ["C) Porque pueden aparecer peatones detrás del bus."]
},
{
    "number": 195,
    "question": "Usted se encuentra muy próximo a un cruce en el que pretende virar a la derecha. Delante suyo va un ciclista. ¿Qué hace usted?",
    "options": [
        "A) Adelanta al ciclista antes del cruce.",
        "B) Rodea al ciclista en el cruce.",
        "C) Se mantiene detrás del ciclista hasta que éste haya pasado la intersección.",
        "D) Se sitúa al lado del ciclista, sigue en línea recta y desiste de virar."],
                image: false,
        "correctAnswers": ["C) Se mantiene detrás del ciclista hasta que éste haya pasado la intersección."]
},
{
    "number": 196,
    "question": "Usted va conduciendo por un camino de doble tránsito cuando se encuentra con personas que van a caballo delante suyo. ¿Qué es lo primero que usted debería hacer?",
    "options": [
        "A) Desplazarse hacia el centro de la calzada.",
        "B) Acelerar alrededor de ellos.",
        "C) Señalizar hacia la izquierda.",
        "D) Prepararse para reducir la velocidad."],
                image: false,
        "correctAnswers": ["D) Prepararse para reducir la velocidad."]
},
{
    "number": 197,
    "question": "¿Cómo debería usted adelantar a personas que van a caballo?",
    "options": [
        "A) Conduciendo lentamente y dejando bastante espacio lateral.",
        "B) Pasando cerca de ellas y adelantándolas lo antes posible.",
        "C) La velocidad no es importante, pero sí el dejar suficiente espacio lateral.",
        "D) Tocando la bocina sólo una vez como señal de advertencia."],
                image: false,
        "correctAnswers": ["A) Conduciendo lentamente y dejando bastante espacio lateral."]
},
{
    "number": 198,
    "question": "Usted va circulando a 65 km/h aproximadamente cuando, lamentablemente, atropella a un peatón. A esa velocidad...",
    "options": [
        "A) es seguro que el peatón morirá.",
        "B) es muy probable que el peatón muera.",
        "C) es seguro que el peatón sobrevivirá.",
        "D) es muy probable que el peatón sobreviva."],
                image: false,
        "correctAnswers": ["B) es muy probable que el peatón muera."]
},
{
    "number": 199,
    "question": "Usted desea adelantar a un motociclista que va delante suyo, ¿qué hace usted?",
    "options": [
        "A) Trata de pasarlo en una curva.",
        "B) Pasa cerca de él y lo más rápido posible.",
        "C) Le da tanto espacio lateral como le daría a un automóvil.",
        "D) Toca la bocina para advertir su presencia."],
                image: false,
        "correctAnswers": ["C) Le da tanto espacio lateral como le daría a un automóvil."]
},
{
    "number": 200,
    "question": "Usted va siguiendo a un automóvil que es conducido por una persona de edad. Usted debería ...",
    "options": [
        "A) dar por seguro que el conductor manejará muy mal.",
        "B) estar consciente de que las reacciones del conductor pueden no ser tan rápidas como las suyas.",
        "C) encender y apagar sus luces y adelantarlo.",
        "D) mantenerse cerca tras él y conducir cuidadosamente."],
                image: false,
        "correctAnswers": ["B) estar consciente de que las reacciones del conductor pueden no ser tan rápidas como las suyas."]
},

{
    number: 201,
    question: "Al estacionar su vehículo en un lugar en el que no hay señales que lo permitan ni que lo prohiban, usted no debe ...",
    options: [
        "A) dejar el freno de mano puesto.",
        "B) detener el motor.",
        "C) obstaculizar el tránsito a otros usuarios de la vía.",
        "D) estacionar al costado derecho de la calzada."],
                image: false,
        correctAnswers: ["C) obstaculizar el tránsito a otros usuarios de la vía."]
},
{
    number: 202,
    question: "Usted nunca debería intentar adelantar a un ciclista ...",
    options: [
        "A) justo antes de doblar a la derecha.",
        "B) justo antes de doblar a la izquierda.",
        "C) recién pasada una intersección.",
        "D) en un camino de tierra."],
                image: false,
        correctAnswers: ["A) justo antes de doblar a la derecha."]
},
{
    number: 203,
    question: "Cuando adelanta a un ciclista usted debe dejar el máximo espacio lateral posible. ¿Por qué?",
    options: [
        "A) Porque el ciclista podría cambiar de pista.",
        "B) Porque el ciclista podría bajarse de la bicicleta.",
        "C) Porque el ciclista podría tener que virar a la izquierda.",
        "D) Porque el ciclista podría desviarse bruscamente."],
                image: false,
        correctAnswers: ["D) Porque el ciclista podría desviarse bruscamente."]
},
{
    number: 204,
    question: "Cuando el viento está soplando muy fuerte, ¿por qué debe usted dejar un espacio lateral extra al adelantar a un motociclista?",
    options: [
        "A) Porque el motociclista podría doblar repentinamente para escapar del viento.",
        "B) Porque el motociclista podría detenerse repentinamente.",
        "C) Porque el motociclista podría tambalear o ver desviada su trayectoria a consecuencia del viento.",
        "D) Porque el motociclista podría ir más rápido de lo normal."],
                image: false,
        correctAnswers: ["C) Porque el motociclista podría tambalear o ver desviada su trayectoria a consecuencia del viento."]
},
{
    number: 205,
    question: "¿De qué le advierte esta señal?",
    options: [
        "A) De la posible presencia de escolares.",
        "B) De la proximidad de un cruce de peatones.",
        "C) De la posible presencia de niños jugando.",
        "D) De la proximidad de un parque o plaza."],
                image: true,
        correctAnswers: ["A) De la posible presencia de escolares."]
},
{
    number: 206,
    question: "Cuando es de noche, al adelantar usted debería ... MARQUE DOS RESPUESTAS",
    options: [
        "A) tener mucho cuidado porque nuestra capacidad visual se ve reducida.",
        "B) mantener en todo momento sus luces altas.",
        "C) tocar 2 veces la bocina antes de desplazarse hacia la pista izquierda.",
        "D) estar muy atento a las curvas que pueda tener el camino.",
        "E) cambiar de luces altas a bajas repetidas veces antes de iniciar el adelantamiento."],
                image: false,
        correctAnswers: ["A) tener mucho cuidado porque nuestra capacidad visual se ve reducida.", "D) estar muy atento a las curvas que pueda tener el camino."]
},
{
    number: 207,
    question: "Por una carretera, usted circula detrás de otro vehículo. Si la calzada está mojada, ¿qué espacio de tiempo mínimo mantiene usted respecto del vehículo que va adelante?",
    options: [
        "A) A lo menos, el equivalente a lo que recorre en 4 segundos.",
        "B) El equivalente a lo que recorre en 1 segundo.",
        "C) El equivalente a lo que recorre en 2 segundos.",
        "D) Como máximo, el equivalente a lo que recorre en 3 segundos."],
                image: false,
        correctAnswers: ["A) A lo menos, el equivalente a lo que recorre en 4 segundos."]
},
{
    number: 208,
    question: "Usted está conduciendo de noche y es encandilado por las luces delanteras de un vehículo que se aproxima. En estas circunstancias, ¿qué hace usted?",
    options: [
        "A) Reduce la velocidad o se detiene.",
        "B) Cierra sus ojos.",
        "C) Hace parpadear sus luces.",
        "D) Baja la visera que tiene su vehículo para protegerlo del sol."],
                image: false,
        correctAnswers: ["A) Reduce la velocidad o se detiene."]
},
{
    number: 209,
    question: "¿Cuál o cuáles de las siguientes afirmaciones son correctas en cuanto a la conducción durante la noche? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
        "A) En carretera, con luces bajas es posible ver las marcas en el pavimento a 200 m y más.",
        "B) Nuestra limitada capacidad para ver de noche aumenta los riesgos de accidentes.",
        "C) Nuestra capacidad de apreciar distancias en la noche se ve disminuida.",
        "D) El color de las ropas de un peatón influye en que éste pueda ser más o menos visible para los conductores."],
                image: false,
        correctAnswers: ["B) Nuestra limitada capacidad para ver de noche aumenta los riesgos de accidentes.", "C) Nuestra capacidad de apreciar distancias en la noche se ve disminuida.", "D) El color de las ropas de un peatón influye en que éste pueda ser más o menos visible para los conductores."]
},
{
    number: 210,
    question: "¿Cuál o cuáles de las siguientes afirmaciones es(son) correcta(s) en cuanto a la conducción nocturna en un camino rural? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
        "A) Al cruzarse con otro vehículo siempre hay que poner luces bajas para no encandilar a su conductor.",
        "B) Al acercarse por atrás a otro vehículo hay que poner luces bajas.",
        "C) Al cruzarse con un ciclista no es necesario poner luces bajas.",
        "D) Si el camino es ancho no es necesario poner luces bajas al cruzarse con otro vehículo."],
                image: false,
        correctAnswers: ["A) Al cruzarse con otro vehículo siempre hay que poner luces bajas para no encandilar a su conductor.", "B) Al acercarse por atrás a otro vehículo hay que poner luces bajas."]
},
{
    number: 211,
    question: "¿Cuál o cuáles de las siguientes afirmaciones es(son) correcta(s) en cuanto a la conducción bajo la lluvia? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
        "A) Cuando los neumáticos son nuevos no hay riesgo de que éstos patinen a consecuencia del agua en la calzada.",
        "B) Independientemente del estado de los neumáticos, el riesgo de que éstos patinen es mayor mientras mayor es la velocidad.",
        "C) El riesgo de que los neumáticos patinen es menor cuando recién ha comenzado a llover.",
        "D) Cuando los frenos están buenos el riesgo de patinaje no existe."],
                image: false,
        correctAnswers: ["B) Independientemente del estado de los neumáticos, el riesgo de que éstos patinen es mayor mientras mayor es la velocidad."]
},
{
    number: 212,
    question: "¿Cuáles son las 2 causas más comunes de los resbalones ante la existencia de agua en la calzada? MARQUE DOS RESPUESTAS:",
    options: [
        "A) Frenos en mal estado.",
        "B) Neumáticos desgastados.",
        "C) Exceso de velocidad en relación a las condiciones de la calzada.",
        "D) Fallas en el sistema de dirección."],
                image: false,
        correctAnswers: ["B) Neumáticos desgastados.", "C) Exceso de velocidad en relación a las condiciones de la calzada."]
},
{
    number: 213,
    question: "Viajando de noche usted es encandilado por las luces de un vehículo que viene en sentido contrario, ¿qué debería hacer usted?",
    options: [
        "A) Bajar su visor de protección solar.",
        "B) Poner luces delanteras altas.",
        "C) Poner su mano sobre sus ojos.",
        "D) Bajar la velocidad y eventualmente detenerse."],
                image: false,
        correctAnswers: ["D) Bajar la velocidad y eventualmente detenerse."]
},      
{
    number: 214,
    question: "Conduciendo de noche usted se ve encandilado por las luces de un vehículo que viene en sentido contrario, ¿qué debería hacer usted?",
    options: [
        "A) Frenar fuerte.",
        "B) Acelerar para alejarse rápido del vehículo que lo encandila.",
        "C) Hacer parpadear sus luces.",
        "D) Bajar la velocidad o detenerse."],
                image: false,
        correctAnswers: ["D) Bajar la velocidad o detenerse."]
},
{
    number: 215,
    question: "Al frenar en una calzada mojada su vehículo comienza a patinar. ¿Qué es lo primero que usted debería hacer?",
    options: [
        "A) Soltar el freno completamente.",
        "B) Tirar rápidamente del freno de mano.",
        "C) Apretar con más fuerza el pedal de freno.",
        "D) Poner el pie en el pedal de embrague."],
                image: false,
        correctAnswers: ["A) Soltar el freno completamente."]
},
{
    number: 216,
    question: "¿Cómo puede usted evitar que los neumáticos patinen cuando la calzada está con hielo?",
    options: [
        "A) Manteniéndose siempre en primera.",
        "B) Poniendo el freno de mano si las ruedas comienzan a patinar.",
        "C) Conduciendo lentamente en la marcha más alta posible.",
        "D) Conduciendo en neutro."],
                image: false,
        correctAnswers: ["C) Conduciendo lentamente en la marcha más alta posible."]
},
{
    number: 217,
    question: "Cuando la calzada está con hielo la distancia de frenado puede ser ...",
    options: [
        "A) 2 veces la distancia normal.",
        "B) 5 veces la distancia normal.",
        "C) 7 veces la distancia normal.",
        "D) 10 veces la distancia normal."],
                image: false,
        correctAnswers: ["D) 10 veces la distancia normal."]
},
{
    number: 218,
    question: "Al conducir con neblina a la luz del día, ¿qué luces enciende usted?",
    options: [
        "A) Las luces delanteras bajas.",
        "B) Las luces de estacionamiento.",
        "C) Las luces delanteras altas.",
        "D) Las luces de advertencia de peligro."],
                image: false,
        correctAnswers: ["A) Las luces delanteras bajas."]
},
{
    number: 219,
    question: "Al conducir sobre una calzada con hielo usted siente la dirección de su vehículo más liviana. ¿Por qué sucede esto?",
    options: [
        "A) Porque los neumáticos tienen menos adherencia a la calzada.",
        "B) Porque los neumáticos tienen más adherencia a la calzada.",
        "C) Porque los neumáticos están demasiado blandos.",
        "D) Porque los neumáticos están demasiado duros."],
                image: false,
        correctAnswers: ["A) Porque los neumáticos tienen menos adherencia a la calzada."]
},
{
    number: 220,
    question: "¿Cuándo es su distancia de detención total mucho más larga?",
    options: [
        "A) Cuando hay neblina.",
        "B) Cuando es de noche.",
        "C) Cuando está lloviendo.",
        "D) Cuando hay vientos fuertes."],
                image: false,
        correctAnswers: ["C) Cuando está lloviendo."]
},
{
    number: 221,
    question: "Usted acaba de conducir a través de una calle inundada. ¿Qué es lo primero que debería hacer?",
    options: [
        "A) Chequear sus frenos.",
        "B) Detenerse y revisar sus neumáticos.",
        "C) Detenerse y secar sus frenos.",
        "D) Activar su limpiaparabrisas."],
                image: false,
        correctAnswers: ["A) Chequear sus frenos."]
},
{
    number: 222,
    question: "¿Cómo puede usted evitar que su vehículo patine cuando la calzada está cubierta con una capa de hielo?",
    options: [
        "A) Usando el freno de mano si las ruedas comienzan a resbalar.",
        "B) Conduciendo a una velocidad baja en el cambio más alto posible.",
        "C) Frenando suave y repetidamente.",
        "D) Conduciendo en un cambio bajo todo el tiempo."],
                image: false,
        correctAnswers: ["B) Conduciendo a una velocidad baja en el cambio más alto posible."]
},
{
    number: 223,
    question: "Usted está conduciendo bajo mucha lluvia y repentinamente siente la dirección muy liviana. ¿Qué hace usted para tener nuevamente el control de su vehículo?",
    options: [
        "A) Cambia a una marcha más baja.",
        "B) Frena levemente para reducir la velocidad.",
        "C) Guía el vehículo por la parte más seca de la calzada.",
        "D) Suelta el acelerador."],
                image: false,
        correctAnswers: ["D) Suelta el acelerador."]
},
{
    number: 224,
    question: "Cuando hay nieve lo mejor es conducir manteniéndose en la marcha más alta posible. ¿Por qué es esto?",
    options: [
        "A) Para reducir rápidamente la velocidad al frenar.",
        "B) Para que el patinaje de las ruedas no haga que el motor funcione demasiado rápido.",
        "C) Para ayudar a evitar que las ruedas patinen.",
        "D) Para dejar disponible una marcha baja en el caso de que las ruedas patinen."],
                image: false,
        correctAnswers: ["C) Para ayudar a evitar que las ruedas patinen."]
},
{
    number: 225,
    question: "¿Cuál es la principal razón por la cual su distancia de detención total es mayor después de una lluvia torrencial?",
    options: [
        "A) Porque puede que usted no vea las pozas grandes.",
        "B) Porque los frenos estarán fríos al estar mojados.",
        "C) Porque sus neumáticos tendrán menos adherencia sobre la calzada.",
        "D) Porque el agua sobre el parabrisas nublará su visión hacia el frente."],
                image: false,
        correctAnswers: ["C) Porque sus neumáticos tendrán menos adherencia sobre la calzada."]
},
{
    number: 226,
    question: "En una ocasión de mucha neblina usted va detrás de otros vehículos y lleva encendidas sus luces bajas. ¿De qué otra forma puede reducir las probabilidades de verse involucrado en un accidente?",
    options: [
        "A) Usando sus luces altas en vez de bajas.",
        "B) Circulando a baja velocidad y aumentando la distancia al vehículo que va adelante.",
        "C) Manteniéndose cerca del vehículo que va delante suyo.",
        "D) Encendiendo sus luces de advertencia de peligro."],
                image: false,
        correctAnswers: ["B) Circulando a baja velocidad y aumentando la distancia al vehículo que va adelante."]
},
{
    number: 227,
    question: "En un pavimento mojado usted va circulando detrás de un vehículo manteniéndose a una distancia segura de él. De pronto es adelantado por otro vehículo que se ubica en el espacio que usted había dejado. ¿Qué debería hacer usted?",
    options: [
        "A) Encender y apagar sus luces en señal de advertencia.",
        "B) Tratar de adelantar tan pronto pueda hacerlo en forma segura.",
        "C) Disminuir su velocidad hasta recuperar una distancia segura respecto del que va adelante.",
        "D) Mantener su velocidad y esperar a que el vehículo se aleje."],
                image: false,
        correctAnswers: ["C) Disminuir su velocidad hasta recuperar una distancia segura respecto del que va adelante."]
},
{
    number: 228,
    question: "¿Cómo puede usted controlar mejor su vehículo al conducir con nieve?",
    options: [
        "A) Conduciendo en un cambio bajo y sujetando el volante muy firmemente.",
        "B) Conduciendo en primera.",
        "C) Manteniendo el motor acelerado y presionando el pedal de embrague.",
        "D) Conduciendo lentamente en el cambio más alto posible."],
                image: false,
        correctAnswers: ["D) Conduciendo lentamente en el cambio más alto posible."]
},
{
    number: 229,
    question: "Al ir de noche por una carretera usted debe mantener sus focos delanteros encendidos, a menos que ...",
    options: [
        "A) su vehículo esté en pana en la berma.",
        "B) vayan vehículos muy cerca delante suyo.",
        "C) circule a menos de 50 km/hr.",
        "D) la carretera esté iluminada."],
                image: false,
        correctAnswers: ["A) su vehículo esté en pana en la berma."]
},
{
    number: 230,
    question: "¿Cómo debería conducir usted en una curva cuando hay hielo en la calzada?",
    options: [
        "A) Usando el embrague y el freno al mismo tiempo.",
        "B) Lenta y suavemente.",
        "C) En primera.",
        "D) Frenando a medida que va tomando la curva."],
                image: false,
        correctAnswers: ["B) Lenta y suavemente."]
},

{
    "number": 231,
    "question": "Hay mucha neblina y el auto que viene detrás suyo parece estar muy cerca. ¿Qué debería hacer usted?",
    "options": [
      "A) Encender sus luces de advertencia de peligro.",
      "B) Desplazarse hacia el costado derecho y detenerse de inmediato.",
      "C) Acelerar y alejarse de él.",
      "D) Continuar con mucho cuidado."],
                image: false,
        "correctAnswers": ["D) Continuar con mucho cuidado."]
  },
  {
    "number": 232,
    "question": "Usted va conduciendo de noche por una carretera cerca de otros vehículos que van delante suyo. ¿Qué luces debería mantener encendidas?",
    "options": [
      "A) Las neblineras delanteras.",
      "B) Las luces altas.",
      "C) Las luces bajas.",
      "D) Las luces de estacionamiento."],
                image: false,
        "correctAnswers": ["C) Las luces bajas."]
  },
  {
    "number": 233,
    "question": "¿Por qué razón debería usted reducir siempre su velocidad al conducir con neblina?",
    "options": [
      "A) Porque los frenos no funcionan bien.",
      "B) Porque las luces neblineras de otros lo pueden encandilar.",
      "C) Porque es más difícil ver lo que hay más adelante.",
      "D) Porque el motor está más frío."],
                image: false,
        "correctAnswers": ["C) Porque es más difícil ver lo que hay más adelante."]
  },
  {
    "number": 234,
    "question": "Su vehículo ha quedado en pana en medio de una autopista. ¿Qué es lo primero que usted debería hacer?",
    "options": [
      "A) Intentar detener a los autos que pasan para solicitar ayuda.",
      "B) Intentar reparar su vehículo rápidamente.",
      "C) Encender sus luces de advertencia de peligro.",
      "D) Instalar un triángulo reflectante para advertir a los demás usuarios."],
                image: false,
        "correctAnswers": ["C) Encender sus luces de advertencia de peligro."]
  },
  {
    "number": 235,
    "question": "Usted va circulando por la pista de la derecha de una carretera de doble calzada muy transitada. Una señal le indica que a 800 m su pista se encuentra cerrada. ¿Qué debería hacer usted?",
    "options": [
      "A) Señalizar a la izquierda, luego detenerse y esperar a que alguien le dé la pasada.",
      "B) Encender sus luces de advertencia de peligro y desplazarse hacia la pista de su izquierda.",
      "C) Continuar hasta llegar a la obstrucción y luego se cambia hacia la pista de la izquierda.",
      "D) Desplazarse hacia la pista de su izquierda tan pronto pueda hacerlo en forma segura."],
                image: true,
        "correctAnswers": ["D) Desplazarse hacia la pista de su izquierda tan pronto pueda hacerlo en forma segura."]
  },
  {
    "number": 236,
    "question": "En una calle de una pista por sentido de tránsito usted se encuentra con que su pista está obstruida. ¿Qué hace usted?",
    "options": [
      "A) Continúa, porque usted tiene el derecho a vía.",
      "B) Hace señas con la mano a quienes vienen en contra para que le den la pasada.",
      "C) Cede el paso al tránsito que viene en sentido contrario.",
      "D) Acelera para poder pasar primero."],
                image: true,
        "correctAnswers": ["C) Cede el paso al tránsito que viene en sentido contrario."]
  },
  {
    "number": 237,
    "question": "Usted va tirando un remolque pequeño que comienza a zigzaguear. ¿Qué hace usted?",
    "options": [
      "A) Frena a fondo y mantiene la presión sobre el pedal de freno.",
      "B) Aumenta su velocidad tan pronto sea posible.",
      "C) Suelta ligeramente el volante y espera que el problema se corrija solo.",
      "D) Retira suavemente el pie del acelerador y disminuye la velocidad."],
                image: false,
        "correctAnswers": ["D) Retira suavemente el pie del acelerador y disminuye la velocidad."]
  },
  {
    "number": 238,
    "question": "En relación con el transporte de una carga sobre la parrilla de un automóvil, ¿cuál de las siguientes afirmaciones constituye una obligación para el conductor?",
    "options": [
      "A) Debe llevarse sólo cuando es estrictamente necesario.",
      "B) Debe ser lo más liviana posible.",
      "C) Debe estar cubierta con un plástico.",
      "D) Debe estar muy bien sujeta."],
                image: false,
        "correctAnswers": ["D) Debe estar muy bien sujeta."]
  },
  {
    "number": 239,
    "question": "¿Cómo puede usted detener el zigzagueo de una casa rodante que va remolcando?",
    "options": [
      "A) Moviendo el volante lentamente hacia cada lado.",
      "B) Acelerando para aumentar la velocidad.",
      "C) Disminuyendo la velocidad gradualmente.",
      "D) Deteniéndose lo más rápido que pueda."],
                image: false,
        "correctAnswers": ["C) Disminuyendo la velocidad gradualmente."]
  },
  {
    "number": 240,
    "question": "¿Qué precaución debe tomar usted al cargar un remolque que va a arrastrar con su automóvil?",
    "options": [
      "A) Que el mayor peso se concentre en la parte trasera.",
      "B) Que la mayor parte del peso se concentre en la parte delantera.",
      "C) Que el peso se distribuya en forma pareja.",
      "D) Que el peso se concentre al lado derecho."],
                image: false,
        "correctAnswers": ["C) Que el peso se distribuya en forma pareja."]
  },
  {
    "number": 241,
    "question": "En una carretera de doble calzada y de mucho tránsito, usted está siendo seguido muy de cerca por un vehículo que viene atrás. ¿Qué hace usted para disminuir el riesgo de accidente?",
    "options": [
      "A) Sale a la berma y se detiene.",
      "B) Enciende sus luces de advertencia de peligro.",
      "C) Frena.",
      "D) Aumenta su distancia al vehículo que va adelante."],
                image: false,
        "correctAnswers": ["D) Aumenta su distancia al vehículo que va adelante."]
  },

{
    number: 242,
    question: "Asocie los números de las señales de tráfico con los textos correctos:",
    options: [
        "Mantenga su derecha:",
        "Pavimento resbaladizo:",
        "Curva:",
        "No adelantar:"],
                image: true,
        correctAnswers: ["3","5","1","4"]
},

  {
   "number": 243,
    "question": "Usted va circulando por una carretera de doble calzada con tres pistas por sentido. Las demarcaciones de pistas y de eje central están reforzadas con tachas reflectantes. Si a su izquierda las tachas son rojas y a su derecha éstas son blancas, ¿por cuál pista va usted?",
    "options": [
      "A) Por la pista del medio.",
      "B) Por la pista de la izquierda.",
      "C) Por la pista de la derecha."],
                image: false,
        "correctAnswers": ["B) Por la pista de la izquierda."]
  },
  {
    "number": 244,
    "question": "Al ir circulando en su vehículo usted enfrenta esta señal. ¿Qué significa?",
    "options": [
      "A) Que usted puede conducir hasta un 10% más rápido, porque la señal es solo una recomendación.",
      "B) Que en días no hábiles, cuando hay poco tránsito, no rige tal restricción.",
      "C) Que usted no debe exceder esta velocidad.",
      "D) Que usted debe mantener una velocidad inferior a la indicada en la señal."],
                image: true,
        "correctAnswers": ["C) Que usted no debe exceder esta velocidad."]
  },
  {
    "number": 245,
    "question": "¿Qué significa esta señal?",
    "options": [
      "A) Usted no debe exceder la velocidad indicada.",
      "B) Es más seguro conducir a la velocidad indicada.",
      "C) La velocidad indicada es la máxima aconsejada.",
      "D) Es una recomendación para cuando hay mucho tránsito."],
                image: true,
        "correctAnswers": ["A) Usted no debe exceder la velocidad indicada."]
  },
  {
    "number": 246,
    "question": "¿Cuándo puede usted ingresar a un cruce en cuya calzada se han pintado franjas amarillas diagonales?",
    "options": [
      "A) Siempre que el semáforo esté en verde.",
      "B) Cuando en la salida del cruce tenga espacio suficiente como para no quedar detenido en él.",
      "C) Cada vez que va a virar hacia la derecha.",
      "D) Sólo cuando haya menos de dos vehículos delante suyo."],
                image: true,
        "correctAnswers": ["B) Cuando en la salida del cruce tenga espacio suficiente como para no quedar detenido en él."]
  },
  {
    "number": 247,
    "question": "¿Qué significa esta señal de tránsito?",
    "options": [
      "A) Gravilla suelta.",
      "B) Peligro de que se pinchen los neumáticos.",
      "C) Pavimento resbaladizo.",
      "D) Curvas en el camino."],
                image: true,
        "correctAnswers": ["C) Pavimento resbaladizo."]
  },
  {
    "number": 248,
    "question": "¿Qué significa esta señal?",
    "options": [
      "A) No adelantar.",
      "B) Mantenga su derecha.",
      "C) Preferencia al tránsito que viene en sentido contrario.",
      "D) No cambiar de pista."],
                image: true,
        "correctAnswers": ["A) No adelantar."]
  },
  {
    "number": 249,
    "question": "¿Cuál de los siguientes tipos de señales le indica que no haga algo?",
    "options": [
      "1).",
      "2).",
      "3).",
      "4)."],
                image: true,
        "correctAnswers": ["3)."]
  },
  {
    "number": 250,
    "question": "¿Qué debe hacer usted cuando enfrenta esta señal?",
    "options": [
      "A) Detenerse solo si viene algún vehículo por la otra vía.",
      "B) Detenerse solo si hay peatones esperando para cruzar.",
      "C) Detenerse solo si en la calzada está pintada la leyenda PARE.",
      "D) Detenerse siempre."],
                image: true,
        "correctAnswers": ["D) Detenerse siempre."]
  },
  {
    "number": 251,
    "question": "¿Qué significa esta señal?",
    "options": [
      "A) Semáforo fuera de servicio.",
      "B) Proximidad de semáforo.",
      "C) Semáforo activado por peatones.",
      "D) Semáforos sincronizados."],
                image: true,
        "correctAnswers": ["B) Proximidad de semáforo."]
  },
  {
    "number": 252,
    "question": "¿Qué significa un semáforo en rojo?",
    "options": [
      "A) Que usted puede seguir su camino si no vienen vehículos por la otra vía.",
      "B) Que usted debe disminuir su velocidad y estar preparado para detenerse.",
      "C) Que usted debe detenerse antes de la línea de detención de vehículos.",
      "D) Que usted debe detenerse sobre el paso de peatones."],
                image: false,
        "correctAnswers": ["C) Que usted debe detenerse antes de la línea de detención de vehículos."]
  },
  {
    "number": 253,
    "question": "¿Para qué sirven las señales amarillas con forma de rombo?",
    "options": [
      "A) Para entregar información.",
      "B) Para dar órdenes.",
      "C) Para indicar direcciones.",
      "D) Para advertir acerca de peligros."],
                image: true,
        "correctAnswers": ["D) Para advertir acerca de peligros."]
  },
  {
    "number": 254,
    "question": "¿Qué significa un semáforo en amarillo?",
    "options": [
      "A) Que usted debe prepararse para continuar.",
      "B) Que usted debe detenerse antes de entrar al cruce, a menos que no alcance a hacerlo en forma segura.",
      "C) Que usted debe continuar, siempre que vaya a virar.",
      "D) Que usted debe continuar si no hay peatones cruzando."],
                image: false,
        "correctAnswers": ["B) Que usted debe detenerse antes de entrar al cruce, a menos que no alcance a hacerlo en forma segura."]
  },
  {
    "number": 255,
    "question": "¿Qué significa esta señal?",
    "options": [
      "A) Angostamiento de la vía.",
      "B) Preferencia al tránsito que viene en sentido contrario.",
      "C) Proximidad de doble calzada.",
      "D) Dos sentidos de tránsito más adelante."],
                image: true,
        "correctAnswers": ["D) Dos sentidos de tránsito más adelante."]
  },
  {
    "number": 256,
    "question": "¿Qué significa esta señal?",
    "options": [
      "A) Zona de escuela.",
      "B) Cruce de peatones.",
      "C) Niños jugando.",
      "D) Peatón debe transitar por su izquierda."],
                image: true,
        "correctAnswers": ["B) Cruce de peatones."]
  },
  {
    "number": 257,
    "question": "¿Cuál de estas señales le previene que más adelante hay una serie de curvas?",
    "options": [
      "1).",
      "2).",
      "3).",
      "4)."],
                image: true,
        "correctAnswers": ["2)."]
  },
  {
    "number": 258,
    "question": "¿Qué significa esta señal?",
    "options": [
      "A) Que se cerca a una zona en la que no se permiten bicicletas.",
      "B) Que los ciclistas deben circular por la pista de la derecha.",
      "C) Que los ciclistas deben circular en sentido contrario.",
      "D) Que se acerca a una zona donde es muy probable la presencia de ciclistas en la vía."],
                image: true,
        "correctAnswers": ["D) Que se acerca a una zona donde es muy probable la presencia de ciclistas en la vía."]
  },
  {
    "number": 259,
    "question": "¿Cuál de estas señales le advierte la proximidad de un cruce de peatones?",
    "options": [
      "A).",
      "B).",
      "C).",
      "D)."],
                image: true,
        "correctAnswers": ["A)."]
  },
  {
    "number": 260,
    "question": "De las siguientes señales de tránsito, ¿cuál o cuáles corresponden a señales amarillas con forma de rombo? MARQUE LAS RESPUESTAS CORRECTAS:",
    "options": [
      "A) Puente angosto.",
      "B) Angostamiento de la vía.",
      "C) Dirección obligada.",
      "D) Mantenga su derecha.",
      "E) Bifurcación o cruce en T.",
      "F) Cruce ferroviario."],
                image: false,
        "correctAnswers": ["A) Puente angosto.", "B) Angostamiento de la vía.", "D) Mantenga su derecha.", "F) Cruce ferroviario."]
  },

  {
    number: 261,
    question: "Usted está enfrentando un semáforo en amarillo. ¿Qué luces se encenderán después?",
    options: [
        "A) Primero la roja y luego la amarilla nuevamente.",
        "B) Primero la roja y luego la verde.",
        "C) Primero la verde y luego la roja.",
        "D) Primero la verde y luego la amarilla nuevamente."],
                image: false,
        correctAnswers: ["B) Primero la roja y luego la verde."]
},
{
    number: 262,
    question: "¿Qué significa la demarcación de centro de calzada que muestra la figura?",
    options: [
        "A) Que no puede ser traspasada por un conductor que viene por la pista A.",
        "B) Que no puede ser traspasada por un conductor que va por la pista B.",
        "C) Que en ningún caso pueden efectuarse adelantamientos.",
        "D) Que sólo un conductor que va por la pista B podría efectuar un adelantamiento."],
                image: true,
        correctAnswers: ["B) Que no puede ser traspasada por un conductor que va por la pista B."]
},
{
    number: 263,
    question: "El vehículo indicado con la flecha se encuentra detenido sobre una zona achurada esperando poder efectuar un viraje en U, ¿es esto correcto?",
    options: [
        "A) Sí, la zona achurada sólo separa sentidos de circulación.",
        "B) Sí, siempre que la zona achurada no esté reforzada con tachas o tachones reflectantes.",
        "C) No, porque los vehículos no pueden detenerse ni circular por zonas achuradas.",
        "D) No, porque se trata de una vía de mucho tránsito."],
                image: true,
        correctAnswers: ["C) No, porque los vehículos no pueden detenerse ni circular por zonas achuradas."]
},
{
    number: 264,
    question: "De acuerdo a las circunstancias que se aprecian en la fotografía, ¿sería correcto que el automóvil indicado con la flecha continuara derecho?",
    options: [
        "A) Sí",
        "B) No"],
                image: true,
        correctAnswers: ["B) No"]
},
{
    number: 265,
    question: "¿Qué le indica la señal de tránsito que se observa en la fotografía?",
    options: [
        "A) Que usted está obligado a detenerse a la altura de la señal.",
        "B) Advierte que el cruce al que usted se aproxima es peligroso.",
        "C) Que usted está obligado a ceder el paso a los vehículos que se aproximen por la otra vía.",
        "D) Es sólo una recomendación para que usted ponga especial atención al pasar el cruce."],
                image: true,
        correctAnswers: ["C) Que usted está obligado a ceder el paso a los vehículos que se aproximen por la otra vía."]
},
{
    number: 266,
    question: "¿Qué significa la luz verde del semáforo?",
    options: [
        "A) Siga tan pronto aparezca la luz verde.",
        "B) Siga, pero sólo si su pista está expedita justo después del cruce.",
        "C) Siga después de mirar hacia ambos lados.",
        "D) Siga."],
                image: false,
        correctAnswers: ["B) Siga, pero sólo si su pista está expedita justo después del cruce."]
},
{
    number: 267,
    question: "¿Cuándo no debería usted detenerse al ponerse el semáforo en amarillo? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
        "A) Cuando la luz cambia sorpresivamente.",
        "B) Cuando va demasiado rápido.",
        "C) Cuando ya ha ingresado al cruce.",
        "D) Cuando está tan cerca del cruce que su detención puede ocasionar un accidente."],
                image: false,
        correctAnswers: ["C) Cuando ya ha ingresado al cruce.", "D) Cuando está tan cerca del cruce que su detención puede ocasionar un accidente."]
},
{
    number: 268,
    question: "Usted se ve involucrado en un accidente. ¿Qué hace usted para ayudar de mejor forma a una persona herida que está con una fuerte hemorragia en la parte inferior de una pierna? MARQUE DOS RESPUESTAS",
    options: [
        "A) La sienta y le da a beber algo caliente para tranquilizarla.",
        "B) La mantiene tendida con la pierna herida en alto.",
        "C) Aplica presión manual firme sobre la herida con un paño limpio y luego la venda.",
        "D) La sienta y espera a que llegue una ambulancia.",
        "E) Le conversa tranquilamente ayudándola a mantenerse de pie."],
                image: false,
        correctAnswers: ["B) La mantiene tendida con la pierna herida en alto.", "C) Aplica presión manual firme sobre la herida con un paño limpio y luego la venda."]
},
{
    number: 269,
    question: "Excepcionalmente, un joven de 17 años puede obtener licencia de conducir clase B. En tanto no cumpla 18 años deberá conducir siempre acompañado. ¿Qué requisitos debe cumplir su acompañante? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
        "A) Debe ir siempre sentado en el asiento delantero.",
        "B) Debe ser mayor de 35 años.",
        "C) Debe ser egresado de enseñanza media.",
        "D) Debe haber efectuado un curso especial en una escuela de conductores.",
        "E) Debe poseer una licencia de conducir, que le permita conducir vehículos de la clase B, de a lo menos 5 años de antigüedad."],
                image: false,
        correctAnswers: ["A) Debe ir siempre sentado en el asiento delantero.", "E) Debe poseer una licencia de conducir, que le permita conducir vehículos de la clase B, de a lo menos 5 años de antigüedad."]
},
{
    number: 270,
    question: "Usted se ve involucrado en un accidente. Un pasajero del otro vehículo ha resultado con lesiones leves. ¿Debe usted informar el hecho a la policía?",
    options: [
        "A) Sí, debe dar cuenta del hecho a la policía dentro de los próximos 20 días.",
        "B) No, el pasajero lesionado debe decidir si se informa a la policía o no.",
        "C) No, los accidentes en que sólo resultan lesionados leves no se informan a la policía.",
        "D) Sí, debe dar cuenta del hecho a la autoridad policial más inmediata a la brevedad."],
                image: false,
        correctAnswers: ["D) Sí, debe dar cuenta del hecho a la autoridad policial más inmediata a la brevedad."]
},
{
    number: 271,
    question: "Usted se ha detenido en el lugar de un accidente para prestar ayuda. ¿Qué debería hacer usted? MARQUE TRES RESPUESTAS:",
    options: [
        "A) Mantener a las personas lesionadas en movimiento haciéndolas caminar.",
        "B) Dar a las personas heridas algo caliente para beber.",
        "C) Mantener abrigadas y cómodas a las personas heridas.",
        "D) Mantener tranquilas a las personas heridas hablándoles alentadoramente.",
        "E) Asegurarse de que no queden solos los heridos."],
                image: false,
        correctAnswers: ["C) Mantener abrigadas y cómodas a las personas heridas.", "D) Mantener tranquilas a las personas heridas hablándoles alentadoramente.", "E) Asegurarse de que no queden solos los heridos."]
},
{
    number: 272,
    question: "Usted es el primero en llegar al sitio de un accidente. ¿Qué debería hacer usted? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
        "A) Encender sus luces de advertencia de peligro para alertar a los demás conductores.",
        "B) Asegurarse de que los motores de los vehículos involucrados estén apagados.",
        "C) Abandonar el lugar tan pronto llegue otro conductor.",
        "D) Ayudar a salir a las personas ilesas de los vehículos."],
                image: false,
        correctAnswers: ["A) Encender sus luces de advertencia de peligro para alertar a los demás conductores.", "B) Asegurarse de que los motores de los vehículos involucrados estén apagados.", "D) Ayudar a salir a las personas ilesas de los vehículos."]
},
{
    number: 273,
    question: "Usted es el primero en llegar al lugar de un accidente en el que hay heridos graves. ¿Qué hace usted? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
        "A) Enciende sus luces de advertencia de peligro.",
        "B) Se asegura de que alguien llame al 133 de Carabineros.",
        "C) Intenta que los heridos beban algo.",
        "D) Saca de los autos a los heridos."],
                image: false,
        correctAnswers: ["A) Enciende sus luces de advertencia de peligro.", "B) Se asegura de que alguien llame al 133 de Carabineros."]
},
{
    number: 274,
    question: "Usted llega al lugar de un accidente en el que participó un camión cargado con productos químicos peligrosos. ¿Qué debería hacer usted antes de llamar al 133 de Carabineros?",
    options: [
        "A) Tratar de mover el camión.",
        "B) Tratar de diluir los productos químicos con agua.",
        "C) Averiguar de qué clase de producto químico se trata mirando los rótulos y letreros que tiene el camión.",
        "D) Tratar de evitar que los productos químicos se sigan derramando."],
                image: false,
        correctAnswers: ["C) Averiguar de qué clase de producto químico se trata mirando los rótulos y letreros que tiene el camión."]
},
{
    number: 275,
    question: "Usted llega al lugar de un accidente en el que ha participado un motociclista. El motociclista yace consciente, pero en estado de shock. ¿De qué debería asegurarse usted?",
    options: [
        "A) Que el motociclista se saque el casco.",
        "B) Que el motociclista no se saque el casco.",
        "C) Que al motociclista se le ayude a ponerse de pie.",
        "D) Que al motociclista se le dé algo para beber."],
                image: false,
        correctAnswers: ["B) Que el motociclista no se saque el casco."]
},
{
    number: 276,
    question: "Usted va por una autopista. De un camión cargado que va delante suyo cae una caja sin que su conductor se dé cuenta. ¿Qué hace usted?",
    options: [
        "A) Trata de alcanzar al camión y de llamar la atención de su conductor.",
        "B) Se detiene junto a la caja y enciende sus luces de emergencia hasta que llegue la policía.",
        "C) Se desplaza hacia la berma y luego intenta recoger la caja.",
        "D) Continúa hasta donde haya un teléfono para avisar a la policía o a los servicios de emergencia."],
                image: false,
        correctAnswers: ["D) Continúa hasta donde haya un teléfono para avisar a la policía o a los servicios de emergencia."]
},

{
    number: 277,
    question: "¿Quién o quiénes están cubiertos por el Seguro Obligatorio de Accidentes Personales?",
    options: [
        "A) Sólo el conductor del vehículo asegurado.",
        "B) Sólo los pasajeros del vehículo asegurado.",
        "C) Sólo los pasajeros y el conductor del vehículo asegurado.",
        "D) El conductor, los pasajeros y cualquier tercero afectado en un accidente de tránsito en que participe el vehículo asegurado."],
                image: false,
        correctAnswers: ["D) El conductor, los pasajeros y cualquier tercero afectado en un accidente de tránsito en que participe el vehículo asegurado."]
},
{
    number: 278,
    question: "¿Qué documento no está obligado a portar usted siempre en su vehículo?",
    options: [
        "A) El Permiso de Circulación.",
        "B) El certificado de un Seguro Obligatorio de Accidentes Personales.",
        "C) Su licencia de conductor.",
        "D) El certificado de revisión técnica o de homologación.",
        "E) El certificado de inscripción en el Registro Nacional de Vehículos Motorizados."],
                image: false,
        correctAnswers: ["E) El certificado de inscripción en el Registro Nacional de Vehículos Motorizados."]
},
{
    number: 279,
    question: "En relación con las infracciones a las normas del tránsito, ¿cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
        "A) Conducir un vehículo bajo los efectos del alcohol es una infracción gravísima.",
        "B) No respetar una señal PARE es una infracción gravísima.",
        "C) La comisión de una infracción gravísima es sancionada no sólo con una multa, sino que también con la suspensión de la licencia de conducir del infractor.",
        "D) Solamente son infracciones gravísimas el no respetar la luz roja de un semáforo y el exceso de velocidad.",
        "E) En ningún caso una licencia de conducir puede ser cancelada por el Juez."],
                image: false,
        correctAnswers: ["A) Conducir un vehículo bajo los efectos del alcohol es una infracción gravísima.", "B) No respetar una señal PARE es una infracción gravísima.", "C) La comisión de una infracción gravísima es sancionada no sólo con una multa, sino que también con la suspensión de la licencia de conducir del infractor."]
},
{
    number: 280,
    question: "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? MARQUE LAS RESPUESTAS CORRECTAS:",
    options: [
        "A) Las únicas infracciones gravísimas son el conducir bajo los efectos del alcohol y el exceso de velocidad.",
        "B) Las infracciones gravísimas son sancionadas con multas y, además, con la suspensión de la licencia de conducir del infractor.",
        "C) Dos infracciones graves cometidas en un período de 12 meses dan origen a una suspensión de la licencia de conducir del infractor.",
        "D) No respetar el derecho preferente de paso de un peatón es una infracción leve.",
        "E) No respetar una señal Ceda el Paso es una infracción gravísima si a consecuencia de la infracción se produce un accidente."],
                image: false,
        correctAnswers: ["B) Las infracciones gravísimas son sancionadas con multas y, además, con la suspensión de la licencia de conducir del infractor.", "C) Dos infracciones graves cometidas en un período de 12 meses dan origen a una suspensión de la licencia de conducir del infractor.", "E) No respetar una señal Ceda el Paso es una infracción gravísima si a consecuencia de la infracción se produce un accidente."]
}


];

let currentQuestion = 0;
let messageText;
let score = 0; // Contador de puntuación
const form = document.getElementById("quizForm");
const randomizeQuestionsBtn = document.getElementById("randomizeQuestionsBtn");

// Variable para llevar un registro de si las preguntas se están mostrando de manera aleatoria o no.
let isRandomizing = false;

// Evento de clic para el botón de alternancia
randomizeQuestionsBtn.addEventListener("click", () => {
  if (isRandomizing) {
    // Si las preguntas se están mostrando de manera aleatoria, restablece la página.
    window.location.reload();
  } else {
    // Si no se están mostrando de manera aleatoria, mezcla las preguntas y comienza desde el principio.
    shuffleQuestions();
    currentQuestion = 0;
    score = 0;
    updateScoreDisplay();
    generateQuiz();
    randomizeQuestionsBtn.textContent = "Restablecer Cuestionario";
  }
  isRandomizing = !isRandomizing;
});

// Función para mezclar las preguntas de manera aleatoria
function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

// Función para actualizar la pantalla de puntuación
function updateScoreDisplay() {
  scoreDiv.textContent = `Puntuación: ${score}/${questions.length}`;
}
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

scoreDiv.style.fontSize = "20px"
scoreDiv.style.border = "2px solid gold"; // Puedes ajustar el ancho del borde y el color (en este caso, "gold" para dorado)
scoreDiv.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)"; // Puedes ajustar los valores de sombra
scoreDiv.style.color = "gold"; // Color del texto dorado
 
const showQuestionBtn = document.getElementById("showQuestionBtn");
const questionNumberInput = document.getElementById("questionNumberInput");
const questionContainer = document.getElementById("questionContainer");
const questionModal = document.getElementById("questionModal");
const closeModal = document.getElementById("closeModal");
const menuButton = document.getElementById("menuButton");
const menuOptions = document.getElementById("menuOptions");
const darkModeButton = document.getElementById("darkModeButton");
const isDarkMode = localStorage.getItem("darkMode") === "true";
const originalQuestions = questions.slice();
const fontSizeControl = document.getElementById("fontSizeControl");
const startQuizButton = document.getElementById("start-quiz-button");
const introHeader = document.getElementById("intro-header");

// Agrega un controlador de eventos para el clic en el botón de inicio
startQuizButton.addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    introHeader.style.display = "none"; // Oculta el encabezado introductorio
});

fontSizeControl.addEventListener("input", () => {
const root = document.documentElement;
const newSize = fontSizeControl.value + "px";

  root.style.setProperty("--base-font-size", newSize);
  root.style.setProperty("--checkbox-size", newSize);
});


function enableDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "true");
    darkModeButton.textContent = "Desactivar Modo Oscuro";


    // Cambia el color de las leyendas de preguntas en modo oscuro
        document.body.classList.add("dark-mode");
    const questionLegends = document.querySelectorAll(".question-legend");
    questionLegends.forEach((legend) => {
            const searchQuestionContainer = document.querySelector(".search-question-container");
    searchQuestionContainer.classList.add("dark-mode");
        legend.style.color = "darkorange"; // Cambia "darkorange" al color oscuro deseado
    });
}

function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "false");
    darkModeButton.textContent = "Activar Modo Oscuro";

    // Restablece el color de las leyendas de preguntas al desactivar el modo oscuro
        const searchQuestionContainer = document.querySelector(".search-question-container");
    searchQuestionContainer.classList.remove("dark-mode");
    const questionLegends = document.querySelectorAll(".question-legend");
    questionLegends.forEach((legend) => {
        legend.style.color = ""; // Elimina el color personalizado para volver al valor original
    });
}

// Aplica el modo oscuro si estaba activado
if (isDarkMode) {
    enableDarkMode();
}

    menuButton.addEventListener("click", function() {
        if (menuOptions.style.display === "none" || menuOptions.style.display === "") {
            menuOptions.style.display = "block";
        } else {
            menuOptions.style.display = "none";
        }
    });

scoreDiv.textContent = `Puntuación: ${score}/${questions.length}`;


function generateQuiz() {
    const questionObj = questions[currentQuestion];
    const fieldset = document.createElement("fieldset");
    fieldset.innerHTML = `
        <legend class="question-title">${questionObj.number}. ${questionObj.question}</legend>
    `;

    if (questionObj.image) {
        const image = document.createElement("img");
        const imageSrc = `imagen/${questionObj.number}.png`;
        image.setAttribute("src", imageSrc);
        image.setAttribute("alt", `${questionObj.number}`);
        fieldset.appendChild(image);
    } else {
        // Si no hay imagen, muestra la imagen predeterminada
        const image = document.createElement("img");
        const imageSrc = "imagen/1.png";
        image.setAttribute("src", imageSrc);
        image.setAttribute("alt", "Pregunta sin imagen");
        fieldset.appendChild(image);
    }

if (questionObj.number === 242) {
    questionObj.options.forEach((opt, index) => {
        const label = document.createElement("label");
        label.textContent = opt;
        const inputField = document.createElement("input");
        inputField.setAttribute("type", "text");
        inputField.setAttribute("name", `q${questionObj.number}`);
        label.appendChild(inputField);
        fieldset.appendChild(label);
    });
} else {
        // Crear opciones de selección para las demás preguntas
        questionObj.options.forEach((opt, index) => {
            fieldset.innerHTML += `
                <label>
                    <input type='checkbox' name='q${questionObj.number}' value="${opt}">${opt}
                </label>
            `;
        });
    }

    form.innerHTML = ""; // Limpia el formulario actual
    form.appendChild(fieldset);
}


function checkAnswers() {
    const questionObj = questions[currentQuestion];

    if (questionObj.number === 242) {
        const inputElements = document.querySelectorAll(`input[name^='q${questionObj.number}']`);
        const userAnswers = Array.from(inputElements).map(input => input.value.trim());
        const correctAnswers = questionObj.correctAnswers.map(correctAnswer => correctAnswer.trim());

        const allFieldsFilled = userAnswers.every(answer => answer !== '');

        if (!allFieldsFilled) {
            const messageBox = document.getElementById("messageBox");
            if (messageBox) {
                const messageText = messageBox.querySelector(".message-text");
                messageText.textContent = "Debes llenar todos los campos correctamente.";
                messageBox.classList.remove("message-box");
                messageBox.classList.add("error");
                messageBox.style.display = "block";
            }
            return;
        }

        const isCorrect = userAnswers.length === correctAnswers.length &&
            userAnswers.every((userAnswer, index) => userAnswer.toLowerCase() === correctAnswers[index].toLowerCase());

        const messageBox = document.getElementById("messageBox");

        if (messageBox) {
            const messageText = messageBox.querySelector(".message-text");

            if (isCorrect) {
                messageText.textContent = "Respuesta Correcta";
                messageBox.classList.remove("error");
                messageBox.classList.add("message-box");
                score++;
            } else {
                messageText.textContent = "Respuesta Incorrecta";
                messageBox.classList.remove("message-box");
                messageBox.classList.add("error");

                const formattedCorrectAnswers = correctAnswers.map((answer, index) => `${questionObj.options[index]}: — ${answer}`).join('<br>');
                messageText.innerHTML = `Respuestas correctas:<br>${formattedCorrectAnswers}`;
            }

            messageBox.style.display = "block";
            submitBtn.style.display = "none";
            nextBtn.style.display = "block";
            nextBtn.style.margin = "0 auto";
            scoreDiv.textContent = `Puntuación: ${score}/${questions.length}`;
        }
    } else {
        const inputElements = document.querySelectorAll(`input[name='q${questionObj.number}']:checked`);
        const userAnswers = Array.from(inputElements).map(input => input.value);
        const correctAnswers = questionObj.correctAnswers;

        const isCorrect = arraysEqual(userAnswers, correctAnswers);

        const messageBox = document.getElementById("messageBox");

        if (messageBox) {
            const messageText = messageBox.querySelector(".message-text");

            if (isCorrect) {
                messageText.textContent = "Respuesta Correcta";
                messageBox.classList.remove("error");
                messageBox.classList.add("message-box");
                score++;
            } else {
                messageText.textContent = "Respuesta Incorrecta";
                messageBox.classList.remove("message-box");
                messageBox.classList.add("error");

                const formattedCorrectAnswers = correctAnswers.map(option => `${option}`).join('<br>');
                messageText.innerHTML = `Respuestas correctas:<br>${formattedCorrectAnswers}`;
            }

            messageBox.style.display = "block";
            submitBtn.style.display = "none";
            nextBtn.style.display = "block";
            nextBtn.style.margin = "0 auto";
            scoreDiv.textContent = `Puntuación: ${score}/${questions.length}`;
        }
    }
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}


function loadNextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        form.innerHTML = ""; // Limpia el formulario actual
        generateQuiz(); // Genera la siguiente pregunta

        // Limpia los elementos de resultado
        const resultContainer = document.getElementById("result");
        const questionNumber = resultContainer.querySelector(".question-number");
        const resultText = resultContainer.querySelector(".result-text");
        const correctAnswerText = resultContainer.querySelector(".correct-answer");
        questionNumber.textContent = "";
        resultText.textContent = "";
        correctAnswerText.textContent = "";

        submitBtn.style.display = "block";
        nextBtn.style.display = "none";

        // Agrega esta línea para borrar el mensaje de respuesta
        const messageBox = document.getElementById("messageBox");
        messageBox.style.display = "none";
        messageBox.classList.remove("error");
    } else {
        resultDiv.textContent = `¡Has completado el cuestionario! Puntuación final: ${score}/${questions.length}`;
        submitBtn.style.display = "none";
        nextBtn.style.display = "none";
    }
}


function displayQuestionInModal(question) {
    // Limpia el contenido existente en el modal
    modalQuestionContainer.innerHTML = "";

    // Crea un elemento para mostrar el número de la pregunta
    const questionNumberElement = document.createElement("p");
    questionNumberElement.textContent = "Pregunta #" + question.number;

    // Agrega el número de la pregunta al modal primero
    modalQuestionContainer.appendChild(questionNumberElement);

    // Si la pregunta tiene una imagen, crea y agrega un elemento de imagen
    if (question.image) {
        const imageElement = document.createElement("img");
        imageElement.src = `imagen/${question.number}.png`;
        imageElement.alt = `Pregunta ${question.number}`;
        modalQuestionContainer.appendChild(imageElement);
    }

    // Crea un elemento para mostrar la pregunta
    const questionElement = document.createElement("p");
    questionElement.textContent = question.question;

    // Crea un elemento para mostrar las respuestas
    const answersElement = document.createElement("ul");
    question.options.forEach((option) => {
        const answerItem = document.createElement("li");
        answerItem.textContent = option;
        answersElement.appendChild(answerItem);
    });

    // Crea un elemento para mostrar las respuestas correctas
    const correctAnswersElement = document.createElement("p");
    correctAnswersElement.innerHTML = "Respuestas Correctas:<br>" + question.correctAnswers.join(",<br>");

    // Agrega la pregunta, las respuestas y las respuestas correctas al modal
    modalQuestionContainer.appendChild(questionElement);
    modalQuestionContainer.appendChild(answersElement);
    modalQuestionContainer.appendChild(correctAnswersElement);

    // Muestra el cuadro de pregunta modal
    questionModal.style.display = "block";
}

// Maneja el clic en el botón "Mostrar Pregunta"
showQuestionBtn.addEventListener("click", () => {
  const questionNumber = parseInt(questionNumberInput.value);

  if (!isNaN(questionNumber) && questionNumber >= 1 && questionNumber <= questions.length) {
    const selectedQuestion = questions.find((question) => question.number === questionNumber);
    if (selectedQuestion) {
      displayQuestionInModal(selectedQuestion);
    } else {
      alert("La pregunta con el número especificado no se encontró.");
    }
  } else {
    alert("Número de pregunta no válido. Ingresa un número entre 1 y " + questions.length);
  }
});

// Maneja el clic en el botón de cerrar
closeModal.addEventListener("click", () => {
    // Oculta el cuadro de pregunta modal
    questionModal.style.display = "none";
});

// Cierra el cuadro de pregunta modal si se hace clic fuera de él
window.addEventListener("click", (event) => {
    if (event.target === questionModal) {
        questionModal.style.display = "none";
    }
});

darkModeButton.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

generateQuiz(); // Genera la primera pregunta al cargar la página

submitBtn.addEventListener("click", checkAnswers);
nextBtn.addEventListener("click", loadNextQuestion);
    // Aquí puedes llamar a la función displayQuestionWithAnswer y otras operaciones una vez que el DOM esté cargado.
    // Asegúrate de que esta llamada se realice en el lugar adecuado dentro de tu flujo de trabajo.
});
