import { Quiz } from '../types';

export const ALL_QUIZZES: Quiz[] = [
  {
    "name": "Trivia de Computación - Nivel Universitario",
    "description": "Preguntas introductorias de informática, hardware, software, redes, lógica y sistemas",
    "questions": [
      {
        "id": "q1",
        "text": "¿Qué significa la sigla CPU?",
        "type": "multiple",
        "options": [
          "Central Process Unit",
          "Central Processing Unit",
          "Computer Personal Unit",
          "Control Program Utility"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      },
      {
        "id": "q2",
        "text": "¿La memoria RAM pierde su contenido al apagar la computadora?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 15
      },
      {
        "id": "q3",
        "text": "¿Cuál de los siguientes dispositivos es de entrada?",
        "type": "multiple",
        "options": [
          "Monitor",
          "Impresora",
          "Teclado",
          "Parlantes"
        ],
        "correctAnswer": 2,
        "timeLimit": 20
      },
      {
        "id": "q4",
        "text": "¿Qué sistema numérico utiliza únicamente 0 y 1?",
        "type": "multiple",
        "options": [
          "Decimal",
          "Hexadecimal",
          "Binario",
          "Octal"
        ],
        "correctAnswer": 2,
        "timeLimit": 20
      },
      {
        "id": "q5",
        "text": "¿El software libre permite modificar el código fuente?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 15
      },
      {
        "id": "q6",
        "text": "¿Cuál de estos es un navegador web?",
        "type": "multiple",
        "options": [
          "Ubuntu",
          "Excel",
          "Firefox",
          "Python"
        ],
        "correctAnswer": 2,
        "timeLimit": 20
      },
      {
        "id": "q7",
        "text": "¿Qué componente almacena datos de manera permanente?",
        "type": "multiple",
        "options": [
          "RAM",
          "Procesador",
          "Disco SSD",
          "Caché"
        ],
        "correctAnswer": 2,
        "timeLimit": 20
      },
      {
        "id": "q8",
        "text": "¿Linux es un sistema operativo?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q9",
        "text": "¿Qué protocolo se utiliza principalmente para navegar sitios web?",
        "type": "multiple",
        "options": [
          "FTP",
          "HTTP",
          "SMTP",
          "SSH"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      },
      {
        "id": "q10",
        "text": "¿Cuál de los siguientes es un lenguaje de programación?",
        "type": "multiple",
        "options": [
          "HTML",
          "Python",
          "WiFi",
          "Windows"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      },
      {
        "id": "q11",
        "text": "¿El bit es la unidad mínima de información digital?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q12",
        "text": "¿Qué dispositivo convierte señales digitales y analógicas para conectarse a Internet?",
        "type": "multiple",
        "options": [
          "Router",
          "Switch",
          "Módem",
          "GPU"
        ],
        "correctAnswer": 2,
        "timeLimit": 20
      },
      {
        "id": "q13",
        "text": "¿Cuál es la función principal del sistema operativo?",
        "type": "multiple",
        "options": [
          "Diseñar gráficos",
          "Administrar recursos del sistema",
          "Crear videojuegos",
          "Editar videos"
        ],
        "correctAnswer": 1,
        "timeLimit": 25
      },
      {
        "id": "q14",
        "text": "¿El software de aplicación incluye programas como Word o Excel?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q15",
        "text": "¿Qué significa la sigla USB?",
        "type": "multiple",
        "options": [
          "Universal Serial Bus",
          "United System Board",
          "Universal Software Base",
          "Unique Serial Block"
        ],
        "correctAnswer": 0,
        "timeLimit": 25
      },
      {
        "id": "q16",
        "text": "¿Cuál de estos dispositivos procesa gráficos?",
        "type": "multiple",
        "options": [
          "GPU",
          "SSD",
          "ROM",
          "Mouse"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q17",
        "text": "¿La nube permite almacenar archivos en servidores remotos?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 15
      },
      {
        "id": "q18",
        "text": "¿Qué topología de red conecta todos los dispositivos a un punto central?",
        "type": "multiple",
        "options": [
          "Bus",
          "Anillo",
          "Estrella",
          "Malla"
        ],
        "correctAnswer": 2,
        "timeLimit": 25
      },
      {
        "id": "q19",
        "text": "¿Cuál de estas extensiones corresponde a un archivo comprimido?",
        "type": "multiple",
        "options": [
          ".mp3",
          ".jpg",
          ".zip",
          ".html"
        ],
        "correctAnswer": 2,
        "timeLimit": 20
      },
      {
        "id": "q20",
        "text": "¿El código binario utiliza únicamente dos estados posibles?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q21",
        "text": "¿Qué empresa desarrolló originalmente el sistema operativo Windows?",
        "type": "multiple",
        "options": [
          "Apple",
          "IBM",
          "Microsoft",
          "Google"
        ],
        "correctAnswer": 2,
        "timeLimit": 20
      },
      {
        "id": "q22",
        "text": "¿Cuál es la principal función de un firewall?",
        "type": "multiple",
        "options": [
          "Aumentar la memoria RAM",
          "Proteger la red y controlar accesos",
          "Editar imágenes",
          "Reproducir videos"
        ],
        "correctAnswer": 1,
        "timeLimit": 25
      },
      {
        "id": "q23",
        "text": "¿La inteligencia artificial puede utilizar aprendizaje automático?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 15
      },
      {
        "id": "q24",
        "text": "¿Qué significa la sigla HTML?",
        "type": "multiple",
        "options": [
          "HyperText Markup Language",
          "HighText Machine Language",
          "Home Tool Markup Language",
          "Hyper Transfer Main Link"
        ],
        "correctAnswer": 0,
        "timeLimit": 25
      },
      {
        "id": "q25",
        "text": "¿Qué componente conecta todos los dispositivos internos de una computadora?",
        "type": "multiple",
        "options": [
          "Motherboard",
          "Fuente",
          "Disco rígido",
          "Gabinete"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q26",
        "text": "¿Un SSD suele ser más rápido que un disco rígido tradicional?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q27",
        "text": "¿Qué lenguaje se utiliza principalmente para dar estilo visual a páginas web?",
        "type": "multiple",
        "options": [
          "Python",
          "CSS",
          "SQL",
          "C++"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      },
      {
        "id": "q28",
        "text": "¿Cuál de estos servicios pertenece a la computación en la nube?",
        "type": "multiple",
        "options": [
          "Google Drive",
          "Paint",
          "Bloc de notas",
          "BIOS"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q29",
        "text": "¿La BIOS se ejecuta antes de cargar el sistema operativo?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 15
      },
      {
        "id": "q30",
        "text": "¿Qué tipo de software es LibreOffice?",
        "type": "multiple",
        "options": [
          "Sistema operativo",
          "Suite ofimática",
          "Antivirus",
          "Base de datos"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      }
    ]
  },
  {
    "name": "Trivia de Producción de Bioimágenes",
    "description": "Preguntas sobre radiología convencional, radiología digital, protección radiológica y archivos médicos",
    "questions": [
      {
        "id": "q1",
        "text": "¿Qué tipo de radiación utiliza la radiología convencional?",
        "type": "multiple",
        "options": [
          "Rayos gamma",
          "Rayos X",
          "Ultrasonido",
          "Luz infrarroja"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      },
      {
        "id": "q2",
        "text": "¿La radiología digital reduce el uso de películas radiográficas?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 15
      },
      {
        "id": "q3",
        "text": "¿Qué significa la sigla PACS?",
        "type": "multiple",
        "options": [
          "Picture Archiving and Communication System",
          "Patient Archive Clinical System",
          "Professional Archive Computer Service",
          "Primary Analysis Control Software"
        ],
        "correctAnswer": 0,
        "timeLimit": 25
      },
      {
        "id": "q4",
        "text": "¿Cuál es la función principal del delantal plomado?",
        "type": "multiple",
        "options": [
          "Mejorar la calidad de imagen",
          "Reducir la exposición a radiación",
          "Aumentar el contraste",
          "Evitar errores digitales"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      },
      {
        "id": "q5",
        "text": "¿El formato DICOM se utiliza en imágenes médicas?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q6",
        "text": "¿Qué equipo transforma la energía eléctrica en rayos X?",
        "type": "multiple",
        "options": [
          "Colimador",
          "Tubo de rayos X",
          "Detector digital",
          "Monitor"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      },
      {
        "id": "q7",
        "text": "¿Qué sistema reemplaza a la película radiográfica en radiología digital directa?",
        "type": "multiple",
        "options": [
          "Chasis analógico",
          "Detector digital",
          "Negatoscopio",
          "Revelador químico"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      },
      {
        "id": "q8",
        "text": "¿La tomografía computada utiliza rayos X?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q9",
        "text": "¿Qué parámetro controla principalmente la energía y penetración del haz?",
        "type": "multiple",
        "options": [
          "mAs",
          "kVp",
          "Píxel",
          "DPI"
        ],
        "correctAnswer": 1,
        "timeLimit": 25
      },
      {
        "id": "q10",
        "text": "¿Qué parámetro influye principalmente en la cantidad de radiación emitida?",
        "type": "multiple",
        "options": [
          "kVp",
          "mAs",
          "Zoom",
          "Resolución"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      },
      {
        "id": "q11",
        "text": "¿El principio ALARA busca minimizar la exposición a radiación?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 15
      },
      {
        "id": "q12",
        "text": "¿Qué significa la sigla RIS en diagnóstico por imágenes?",
        "type": "multiple",
        "options": [
          "Radiology Information System",
          "Radiation Imaging Software",
          "Regional Image Server",
          "Radiographic Internal Storage"
        ],
        "correctAnswer": 0,
        "timeLimit": 25
      },
      {
        "id": "q13",
        "text": "¿Cuál de estos estudios utiliza resonancia magnética?",
        "type": "multiple",
        "options": [
          "RM",
          "Radiografía",
          "Mamografía",
          "Fluoroscopía"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q14",
        "text": "¿La resonancia magnética utiliza radiación ionizante?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 1,
        "timeLimit": 15
      },
      {
        "id": "q15",
        "text": "¿Qué dispositivo limita el tamaño del haz de rayos X?",
        "type": "multiple",
        "options": [
          "Colimador",
          "Detector",
          "Transformador",
          "Monitor"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q16",
        "text": "¿Qué formato de archivo es específico de imágenes médicas?",
        "type": "multiple",
        "options": [
          ".jpg",
          ".png",
          ".dicom",
          ".mp4"
        ],
        "correctAnswer": 2,
        "timeLimit": 20
      },
      {
        "id": "q17",
        "text": "¿La fluoroscopía permite obtener imágenes en tiempo real?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 15
      },
      {
        "id": "q18",
        "text": "¿Qué unidad se utiliza frecuentemente para medir dosis absorbida?",
        "type": "multiple",
        "options": [
          "Gray",
          "Volt",
          "Tesla",
          "Pixel"
        ],
        "correctAnswer": 0,
        "timeLimit": 25
      },
      {
        "id": "q19",
        "text": "¿Qué estudio es especializado para imágenes de mama?",
        "type": "multiple",
        "options": [
          "Ecografía",
          "Tomografía",
          "Mamografía",
          "Resonancia"
        ],
        "correctAnswer": 2,
        "timeLimit": 20
      },
      {
        "id": "q20",
        "text": "¿Los rayos X son radiaciones ionizantes?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q21",
        "text": "¿Qué sistema se utiliza para almacenar y visualizar estudios digitales?",
        "type": "multiple",
        "options": [
          "PACS",
          "CPU",
          "BIOS",
          "HTML"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q22",
        "text": "¿Cuál es una ventaja de la radiología digital frente a la convencional?",
        "type": "multiple",
        "options": [
          "Mayor uso de químicos",
          "Procesamiento más rápido",
          "Menor resolución",
          "Mayor tiempo de espera"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      },
      {
        "id": "q23",
        "text": "¿El contraste radiográfico ayuda a diferenciar estructuras anatómicas?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q24",
        "text": "¿Qué profesional opera habitualmente equipos radiológicos?",
        "type": "multiple",
        "options": [
          "Programador",
          "Licenciado en Producción de Bioimágenes",
          "Contador",
          "Arquitecto"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      },
      {
        "id": "q25",
        "text": "¿Qué tipo de estudio utiliza ondas sonoras?",
        "type": "multiple",
        "options": [
          "Radiografía",
          "Tomografía",
          "Ecografía",
          "Mamografía"
        ],
        "correctAnswer": 2,
        "timeLimit": 20
      },
      {
        "id": "q26",
        "text": "¿La protección radiológica busca proteger al paciente y al personal?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q27",
        "text": "¿Qué elemento mejora el contraste al absorber radiación dispersa?",
        "type": "multiple",
        "options": [
          "Grid o rejilla",
          "Mouse",
          "Monitor",
          "Router"
        ],
        "correctAnswer": 0,
        "timeLimit": 25
      },
      {
        "id": "q28",
        "text": "¿Qué modalidad genera imágenes en cortes axiales del cuerpo?",
        "type": "multiple",
        "options": [
          "Tomografía computada",
          "Radiografía dental",
          "Ecografía Doppler",
          "Negatoscopio"
        ],
        "correctAnswer": 0,
        "timeLimit": 25
      },
      {
        "id": "q29",
        "text": "¿La imagen digital está compuesta por píxeles?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q30",
        "text": "¿Qué archivo es más utilizado para compartir imágenes comunes fuera del entorno médico?",
        "type": "multiple",
        "options": [
          ".jpg",
          ".dicom",
          ".raw",
          ".sys"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      }
    ]
  },
  {
    "name": "Trivia de Instrumentación Quirúrgica",
    "description": "Preguntas sobre instrumentación quirúrgica, bioseguridad, esterilización y procedimientos de quirófano",
    "questions": [
      {
        "id": "q1",
        "text": "¿Cuál es la función principal del instrumental quirúrgico?",
        "type": "multiple",
        "options": [
          "Realizar diagnósticos por imágenes",
          "Asistir procedimientos quirúrgicos",
          "Administrar medicamentos",
          "Tomar signos vitales"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      },
      {
        "id": "q2",
        "text": "¿La esterilización elimina todos los microorganismos?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 15
      },
      {
        "id": "q3",
        "text": "¿Qué método de esterilización utiliza vapor de agua a presión?",
        "type": "multiple",
        "options": [
          "Óxido de etileno",
          "Autoclave",
          "Radiación UV",
          "Alcohol"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      },
      {
        "id": "q4",
        "text": "¿Cuál de estos elementos pertenece al campo estéril?",
        "type": "multiple",
        "options": [
          "Guantes estériles",
          "Teléfono celular",
          "Lapicera",
          "Monitor externo"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q5",
        "text": "¿El lavado quirúrgico de manos es parte de la bioseguridad?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q6",
        "text": "¿Qué instrumento se utiliza para cortar tejidos?",
        "type": "multiple",
        "options": [
          "Pinza Kelly",
          "Tijera Mayo",
          "Separador Farabeuf",
          "Portaagujas"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      },
      {
        "id": "q7",
        "text": "¿Cuál es la función del portaagujas?",
        "type": "multiple",
        "options": [
          "Cortar hueso",
          "Sujetar agujas de sutura",
          "Separar tejidos",
          "Aspirar líquidos"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      },
      {
        "id": "q8",
        "text": "¿La mesa de Mayo se utiliza para disponer instrumental durante la cirugía?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 15
      },
      {
        "id": "q9",
        "text": "¿Qué profesional mantiene el campo estéril durante la cirugía?",
        "type": "multiple",
        "options": [
          "Instrumentador quirúrgico",
          "Recepcionista",
          "Administrativo",
          "Camillero"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q10",
        "text": "¿Cuál de estas pinzas es hemostática?",
        "type": "multiple",
        "options": [
          "Kelly",
          "Farabeuf",
          "Mango de bisturí",
          "Valva"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q11",
        "text": "¿El uso de barbijo ayuda a disminuir el riesgo de contaminación?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q12",
        "text": "¿Qué instrumento se utiliza para realizar incisiones?",
        "type": "multiple",
        "options": [
          "Bisturí",
          "Pinza Kocher",
          "Portaagujas",
          "Separador"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q13",
        "text": "¿Cuál es la finalidad de la antisepsia?",
        "type": "multiple",
        "options": [
          "Eliminar o reducir microorganismos",
          "Tomar radiografías",
          "Mejorar la anestesia",
          "Controlar la iluminación"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q14",
        "text": "¿El instrumental debe contarse antes y después de la cirugía?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 15
      },
      {
        "id": "q15",
        "text": "¿Qué elemento se utiliza para aspirar fluidos en cirugía?",
        "type": "multiple",
        "options": [
          "Aspirador quirúrgico",
          "Separador",
          "Pinza Adson",
          "Tijera Metzembaum"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q16",
        "text": "¿Qué color suele utilizarse en la vestimenta quirúrgica para disminuir el cansancio visual?",
        "type": "multiple",
        "options": [
          "Rojo",
          "Negro",
          "Verde o azul",
          "Amarillo"
        ],
        "correctAnswer": 2,
        "timeLimit": 20
      },
      {
        "id": "q17",
        "text": "¿La bioseguridad busca proteger tanto al paciente como al equipo de salud?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q18",
        "text": "¿Qué instrumento se utiliza para separar tejidos?",
        "type": "multiple",
        "options": [
          "Separador",
          "Bisturí",
          "Portaagujas",
          "Jeringa"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q19",
        "text": "¿Qué tipo de residuo incluye material contaminado con sangre?",
        "type": "multiple",
        "options": [
          "Reciclable",
          "Patogénico",
          "Orgánico común",
          "Electrónico"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      },
      {
        "id": "q20",
        "text": "¿La técnica aséptica ayuda a prevenir infecciones?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q21",
        "text": "¿Qué pinza posee dientes para sujetar tejidos firmes?",
        "type": "multiple",
        "options": [
          "Adson con dientes",
          "Kelly",
          "Foerster",
          "Mayo"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q22",
        "text": "¿Cuál es la función principal del campo quirúrgico?",
        "type": "multiple",
        "options": [
          "Mantener esterilidad",
          "Aumentar iluminación",
          "Reducir anestesia",
          "Registrar imágenes"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q23",
        "text": "¿El autoclave utiliza calor húmedo para esterilizar?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q24",
        "text": "¿Qué integrante del equipo quirúrgico realiza el acto operatorio principal?",
        "type": "multiple",
        "options": [
          "Cirujano",
          "Instrumentador",
          "Camillero",
          "Administrativo"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q25",
        "text": "¿Qué instrumento se utiliza para sujetar campos quirúrgicos?",
        "type": "multiple",
        "options": [
          "Pinza Backhaus",
          "Pinza Kelly",
          "Tijera Mayo",
          "Separador"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q26",
        "text": "¿El instrumental debe revisarse antes de esterilizarse?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q27",
        "text": "¿Qué elemento protege los ojos ante salpicaduras biológicas?",
        "type": "multiple",
        "options": [
          "Antiparras",
          "Guantes",
          "Cofia",
          "Bata"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q28",
        "text": "¿Qué área del quirófano tiene máxima restricción de circulación?",
        "type": "multiple",
        "options": [
          "Área restringida",
          "Área administrativa",
          "Sala de espera",
          "Recepción"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q29",
        "text": "¿La correcta identificación del paciente es una medida de seguridad quirúrgica?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q30",
        "text": "¿Qué documento internacional impulsa la cirugía segura?",
        "type": "multiple",
        "options": [
          "Checklist OMS",
          "ISO 9000",
          "HTML5",
          "PACS"
        ],
        "correctAnswer": 0,
        "timeLimit": 25
      }
    ]
  },
  {
    "name": "Desafío Athenea - Cultura General",
    "description": "Trivia de cultura general con preguntas de historia, ciencia, arte, geografía, literatura y curiosidades",
    "questions": [
      {
        "id": "q1",
        "text": "¿Cuál es el océano más grande del planeta?",
        "type": "multiple",
        "options": [
          "Atlántico",
          "Índico",
          "Ártico",
          "Pacífico"
        ],
        "correctAnswer": 3,
        "timeLimit": 20
      },
      {
        "id": "q2",
        "text": "¿La Torre Eiffel se encuentra en París?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q3",
        "text": "¿Quién escribió 'Don Quijote de la Mancha'?",
        "type": "multiple",
        "options": [
          "Gabriel García Márquez",
          "Miguel de Cervantes",
          "Pablo Neruda",
          "Julio Cortázar"
        ],
        "correctAnswer": 1,
        "timeLimit": 25
      },
      {
        "id": "q4",
        "text": "¿Cuál es el planeta más cercano al Sol?",
        "type": "multiple",
        "options": [
          "Venus",
          "Marte",
          "Mercurio",
          "Júpiter"
        ],
        "correctAnswer": 2,
        "timeLimit": 20
      },
      {
        "id": "q5",
        "text": "¿El agua hierve a 100 °C al nivel del mar?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q6",
        "text": "¿Quién pintó la Mona Lisa?",
        "type": "multiple",
        "options": [
          "Pablo Picasso",
          "Vincent van Gogh",
          "Leonardo da Vinci",
          "Miguel Ángel"
        ],
        "correctAnswer": 2,
        "timeLimit": 25
      },
      {
        "id": "q7",
        "text": "¿Cuál es la capital de Japón?",
        "type": "multiple",
        "options": [
          "Seúl",
          "Pekín",
          "Tokio",
          "Bangkok"
        ],
        "correctAnswer": 2,
        "timeLimit": 20
      },
      {
        "id": "q8",
        "text": "¿La fotosíntesis ocurre en las plantas?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q9",
        "text": "¿Qué país ganó el Mundial de Fútbol de 2022?",
        "type": "multiple",
        "options": [
          "Brasil",
          "Francia",
          "Argentina",
          "Alemania"
        ],
        "correctAnswer": 2,
        "timeLimit": 20
      },
      {
        "id": "q10",
        "text": "¿Cuál es el metal cuyo símbolo químico es Au?",
        "type": "multiple",
        "options": [
          "Plata",
          "Oro",
          "Aluminio",
          "Cobre"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      },
      {
        "id": "q11",
        "text": "¿La Gran Muralla China puede verse fácilmente desde la Luna?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 1,
        "timeLimit": 15
      },
      {
        "id": "q12",
        "text": "¿Qué instrumento tiene 88 teclas?",
        "type": "multiple",
        "options": [
          "Violín",
          "Piano",
          "Trompeta",
          "Batería"
        ],
        "correctAnswer": 1,
        "timeLimit": 20
      },
      {
        "id": "q13",
        "text": "¿Cuál es la función principal del sistema operativo?",
        "type": "multiple",
        "options": [
          "Diseñar gráficos",
          "Administrar recursos del sistema",
          "Crear videojuegos",
          "Editar videos"
        ],
        "correctAnswer": 1,
        "timeLimit": 25
      },
      {
        "id": "q14",
        "text": "¿El software de aplicación incluye programas como Word o Excel?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q15",
        "text": "¿Qué significa la sigla USB?",
        "type": "multiple",
        "options": [
          "Universal Serial Bus",
          "United System Board",
          "Universal Software Base",
          "Unique Serial Block"
        ],
        "correctAnswer": 0,
        "timeLimit": 25
      },
      {
        "id": "q16",
        "text": "¿Cuál de estos dispositivos procesa gráficos?",
        "type": "multiple",
        "options": [
          "GPU",
          "SSD",
          "ROM",
          "Mouse"
        ],
        "correctAnswer": 0,
        "timeLimit": 20
      },
      {
        "id": "q17",
        "text": "¿La nube permite almacenar archivos en servidores remotos?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 15
      },
      {
        "id": "q18",
        "text": "¿Qué topología de red conecta todos los dispositivos a un punto central?",
        "type": "multiple",
        "options": [
          "Bus",
          "Anillo",
          "Estrella",
          "Malla"
        ],
        "correctAnswer": 2,
        "timeLimit": 25
      },
      {
        "id": "q19",
        "text": "¿Cuál de estas extensiones corresponde a un archivo comprimido?",
        "type": "multiple",
        "options": [
          ".mp3",
          ".jpg",
          ".zip",
          ".html"
        ],
        "correctAnswer": 2,
        "timeLimit": 20
      },
      {
        "id": "q20",
        "text": "¿El código binario utiliza únicamente dos estados posibles?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 15
      },
      {
        "id": "q21",
        "text": "¿Qué país es conocido como la tierra del sol naciente?",
        "type": "multiple",
        "options": [
          "China",
          "Corea",
          "Japón",
          "Tailandia"
        ],
        "correctAnswer": 2,
        "timeLimit": 20
      },
      {
        "id": "q22",
        "text": "¿Cuál es el elemento químico más abundante en el universo?",
        "type": "multiple",
        "options": [
          "Oxígeno",
          "Carbono",
          "Hidrógeno",
          "Helio"
        ],
        "correctAnswer": 2,
        "timeLimit": 25
      },
      {
        "id": "q23",
        "text": "¿La velocidad de la luz es mayor que la del sonido?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q24",
        "text": "¿Qué civilización construyó Machu Picchu?",
        "type": "multiple",
        "options": [
          "Azteca",
          "Maya",
          "Inca",
          "Romana"
        ],
        "correctAnswer": 2,
        "timeLimit": 20
      },
      {
        "id": "q25",
        "text": "¿Cuál es el país más grande del mundo por superficie?",
        "type": "multiple",
        "options": [
          "China",
          "Estados Unidos",
          "Canadá",
          "Rusia"
        ],
        "correctAnswer": 3,
        "timeLimit": 20
      },
      {
        "id": "q26",
        "text": "¿La penicilina fue descubierta por Alexander Fleming?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 15
      },
      {
        "id": "q27",
        "text": "¿Qué escritor creó el personaje Sherlock Holmes?",
        "type": "multiple",
        "options": [
          "Edgar Allan Poe",
          "Arthur Conan Doyle",
          "Agatha Christie",
          "Jules Verne"
        ],
        "correctAnswer": 1,
        "timeLimit": 25
      },
      {
        "id": "q28",
        "text": "¿Qué órgano del cuerpo humano bombea la sangre?",
        "type": "multiple",
        "options": [
          "Pulmón",
          "Hígado",
          "Corazón",
          "Riñón"
        ],
        "correctAnswer": 2,
        "timeLimit": 15
      },
      {
        "id": "q29",
        "text": "¿La Luna es un satélite natural de la Tierra?",
        "type": "boolean",
        "options": ["Verdadero", "Falso"],
        "correctAnswer": 0,
        "timeLimit": 10
      },
      {
        "id": "q30",
        "text": "¿Qué filósofo fue maestro de Alejandro Magno?",
        "type": "multiple",
        "options": [
          "Sócrates",
          "Platón",
          "Aristóteles",
          "Pitágoras"
        ],
        "correctAnswer": 2,
        "timeLimit": 25
      }
    ]
  }
];
