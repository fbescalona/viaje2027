// Expediciones Antigravity - Interactive Web App
// Embedded Complete Trips Data (3 weeks per country, 3 real photos per day, Interactive Maps)

const TRIPS_DATA = {
  "trips": [
    {
      "id": "filipinas",
      "name": "Filipinas",
      "flag": "🇵🇭",
      "title": "Archipiélago Esmeralda: Arrozales Milenarios, Cuevas Sagradas y Paraísos Kársticos",
      "subtitle": "21 Días cruzando Luzón, Bisayas y Palawan a ritmo alto",
      "doc_file": "Itinerario_Filipinas_3_Semanas.docx",
      "hero_img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Kayangan_Lake%2C_Coron%2C_Palawan.jpg/1280px-Kayangan_Lake%2C_Coron%2C_Palawan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "stats": {
        "duration": "21 Días / 20 Noches",
        "pace": "Muy Alto / Intenso",
        "culture_pct": "50%",
        "nature_pct": "50%",
        "budget": "2.760€ - 3.210€ / persona (todo incl.)",
        "best_season": "Noviembre a Mayo (Época Seca)"
      },
      "dna_match": "Diseñado para vuestro perfil viajero: al igual que en Indonesia (Bromo/Ijen/Sumatra) y Vietnam (Phong Nha/Angkor), combina la cultura milenaria de los pueblos Ifugao e Igorot en la cordillera norte y la ciudad colonial hispana de Vigan (UNESCO), con aventuras de alta adrenalina como la espeleología de 'Cave Connection' en Sagada, el barranquismo saltando cascadas en Kawasan, el avistamiento de miles de sardinas a nado y expediciones en banca privada exclusiva por los laberintos kársticos de Coron y El Nido.",
      "gallery": [
        {
          "title": "Anfiteatro de Batad (UNESCO)",
          "location": "Ifugao, Cordillera Central",
          "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Banaue_Philippines_Batad-Rice-Terraces-02.jpg/1280px-Banaue_Philippines_Batad-Rice-Terraces-02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "desc": "Colosales terrazas de arroz esculpidas en la montaña viva hace más de 2.000 años."
        },
        {
          "title": "Lago Kayangan",
          "location": "Isla de Coron, Palawan",
          "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Kayangan_Lake%2C_Coron%2C_Palawan.jpg/1280px-Kayangan_Lake%2C_Coron%2C_Palawan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "desc": "Aguas de visibilidad asombrosa encajonadas entre agujas kársticas de caliza negra."
        },
        {
          "title": "Big Lagoon & Bacuit",
          "location": "El Nido, Palawan",
          "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Big_Lagoon%2C_El_Nido%2C_Philippines_%2836929017682%29.jpg/1280px-Big_Lagoon%2C_El_Nido%2C_Philippines_%2836929017682%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "desc": "Paredes verticales de caliza negra que encierran una laguna turquesa en silencio."
        },
        {
          "title": "Chocolate Hills & Tarsiers",
          "location": "Carmen y Corella, Bohol",
          "img": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Chocolate_Hills_-_edit.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
          "desc": "Más de 1.260 colinas cónicas y el primate más diminuto y fascinante de la Tierra."
        },
        {
          "title": "Barranquismo en Kawasan",
          "location": "Badian, Cebú",
          "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Badian_Kawasan_Falls_Cebu.jpg/1280px-Badian_Kawasan_Falls_Cebu.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "desc": "4 horas saltando a pozas color aguamarina desde repisas de roca natural."
        },
        {
          "title": "Ciudad Colonial de Vigan",
          "location": "Ilocos Sur, Luzón",
          "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Vigan_Heritage_Village_wedding_carriage.JPG/1280px-Vigan_Heritage_Village_wedding_carriage.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "desc": "La joya hispano-filipina del siglo XVI con casonas de madera y calles empedradas."
        }
      ],
      "gastro": [
        {
          "name": "Lechón de Cebú",
          "desc": "Cerdo entero asado a la brasa aromatizado con citronela, ajo y laurel.",
          "tag": "Plato Nacional"
        },
        {
          "name": "Kinilaw de Atún",
          "desc": "Ceviche filipino macerado en vinagre de coco, lima calamansi y jengibre.",
          "tag": "Costero"
        },
        {
          "name": "Chicken Adobo",
          "desc": "Pollo cocinado a fuego lento con soja, vinagre negro, ajo y pimienta en grano.",
          "tag": "Tradicional"
        },
        {
          "name": "Halo-Halo Supremo",
          "desc": "Postre de hielo raspado con ube, leche evaporada, jalea de coco y flan.",
          "tag": "Dulce"
        }
      ],
      "highlights": [
        "Trekking por los 2.000 años de historia viva en las terrazas arroceras de Batad (UNESCO)",
        "Travesía de espeleología 'Cave Connection' entre Lumiang y Sumaguing en Sagada",
        "Ataúdes colgantes del Echo Valley y mar de nubes en Marlboro Hills",
        "Noche iluminada por faroles coloniales en la Calle Crisólogo de Vigan",
        "Chocolate Hills en quad al amanecer y encuentro con los Tarsiers en Bohol",
        "El legendario Sardine Run de Panagsama nadando a 20 metros de la playa",
        "Barranquismo épico saltando cascadas en Kawasan Falls (Badian)",
        "Navegación privada por los lagos Kayangan y Barracuda y pecios de la II Guerra Mundial en Coron",
        "Entrada en kayak transparente a la Big Lagoon y vía ferrata de Taraw Cliff en El Nido",
        "Exploración en barca eléctrica de la Maravilla Natural del Río Subterráneo de Puerto Princesa"
      ],
      "days": [
        {
          "num": "Día 1",
          "title": "Llegada a Manila – Primer contacto con la capital filipina",
          "transp": "Vuelo internacional con llegada a Manila Ninoy Aquino (NAIA T1/T3). Traslado con taxi oficial de cupón blanco o mediante app Grab (descargar previamente) hasta el distrito amurallado de Intramuros (trayecto: 45'-1h según tráfico).",
          "morning": "Llegada al aeropuerto internacional, paso de aduana y recogida de equipajes. Compra de tarjeta SIM física o activación de eSIM (Smart / Globe en terminal de llegadas). Retirada de pesos filipinos (PHP) en cajeros BDO / BPI.",
          "afternoon": "Check-in en el hotel. Tiempo para refrescarse y descansar de las horas de vuelo. Paseo vespertino relajado por las murallas de piedra volcánica de Intramuros y los jardines de Baluarte de San Diego.",
          "evening": "Caminata al atardecer por el paseo marítimo de Roxas Boulevard / Manila Bay contemplando la legendaria puesta de sol de la bahía. Cena informal en el restaurante *Barbara's Heritage Restaurant* (cocina filipina tradicional con música en directo) o en la terraza panorámica *Sky Deck on the Bayleaf* con vistas a los tejados de la ciudad amurallada.",
          "hotel": "The Bayleaf Intramuros (2 habitaciones con aire acondicionado y desayuno incluido). Muralla St, Intramuros, Manila. Excelente ubicación para iniciar las visitas a pie al día siguiente.",
          "gastro": "Probar el primer plato nacional: *Chicken Adobo* (pollo marinado en vinagre, soja, ajo y laurel) o *Sinigang na Hipon* (sopa agria de tamarindo con langostinos).",
          "links": "https://www.thebayleaf.com.ph | Grab App: https://www.grab.com/ph/",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Dreamy_sunset_in_Manila_Bay%2C_Manila%2C_Philippines.jpg/960px-Dreamy_sunset_in_Manila_Bay%2C_Manila%2C_Philippines.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Cultura & Patrimonio",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "Atardecer dorado sobre la bahía de Manila",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Dreamy_sunset_in_Manila_Bay%2C_Manila%2C_Philippines.jpg/960px-Dreamy_sunset_in_Manila_Bay%2C_Manila%2C_Philippines.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Atardecer dorado sobre la bahía de Manila",
              "desc": "Atardecer dorado sobre la bahía de Manila"
            },
            {
              "caption": "Monumento a José Rizal en el Parque Luneta",
              "url": "https://upload.wikimedia.org/wikipedia/commons/a/ad/2011_The_Rizal_Monument%2C_Luneta_Park_%2C_Manila%2C_Philippines.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
              "name": "Monumento a José Rizal en el Parque Luneta",
              "desc": "Monumento a José Rizal en el Parque Luneta"
            },
            {
              "caption": "Rascacielos y vida nocturna en Makati",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Makati%2C_Manila_%28Night%29_-_Flickr.jpg/960px-Makati%2C_Manila_%28Night%29_-_Flickr.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Rascacielos y vida nocturna en Makati",
              "desc": "Rascacielos y vida nocturna en Makati"
            }
          ]
        },
        {
          "num": "Día 2",
          "title": "Manila Colonial (Intramuros) & Barrio Chino de Binondo – Noche en Bus a la Cordillera",
          "transp": "Desplazamientos a pie en Intramuros. Cruce en triciclo o barca por el río Pásig hacia Binondo. Por la noche, traslado en Grab a la terminal de Ohayami Trans / Coda Lines en Sampaloc / Cubao. Salida del autobús nocturno ejecutivo hacia Banaue a las 21:30 (duración: 9h - 10h, asientos reclinables de lujo, aire acondicionado potente - imprescindible llevar forro polar/sudadera).",
          "morning": "08:30 Visita guiada a pie por Intramuros (Free Tour o guía local acreditado): Fuerte Santiago (celda del héroe nacional José Rizal y mazmorras españolas), Iglesia de San Agustín (la edificación de piedra más antigua de Filipinas, Patrimonio de la Humanidad UNESCO, salvada de los bombardeos de la II Guerra Mundial) y la réplica señorial de Casa Manila.",
          "afternoon": "13:00 Inmersión gastronómica y cultural en Binondo, fundado en 1594 como el barrio chino más antiguo del mundo. Ruta probando comida callejera: dumplings fritos en *Dong Bei Dumplings*, lumpia fresca en *New Po-Heng*, pastelitos hopia en *Eng Bee Tin* y fideos mami en *Ma Mon Luk*. Visita a la Iglesia de Binondo y el concurrido mercado de Quiapo.",
          "evening": "Regreso al hotel para recoger el equipaje guardado en consigna y darse una ducha de cortesía en el spa del hotel. Cena ligera y traslado a las 20:00 a la estación de autobuses. Embarque en el bus nocturno hacia el corazón de la Cordillera Central de Luzón.",
          "hotel": "Noche en autobús nocturno ejecutivo hacia Banaue (Coda Lines Executive Class con baño integrado y asientos amplios) – se ahorra una noche de hotel y se optimiza el tiempo de desplazamiento.",
          "gastro": "Tour de street food en Ongpin St (Binondo): empanadillas al vapor de cebollino y cerdo, halo-halo tradicional para merendar.",
          "links": "Ohayami Trans: https://www.facebook.com/OhayamiTrans | Coda Lines: https://codalines.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Entrance_of_Rizal_Shrine%2C_Fort_Santiago%2C_Intramuros%2C_Manila_-_panoramio.jpg/960px-Entrance_of_Rizal_Shrine%2C_Fort_Santiago%2C_Intramuros%2C_Manila_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Baluartes históricos de piedra y murallas coloniales de Intramuros en Manila",
              "name": "Baluartes históricos de piedra y murallas coloniales de Intramuros en Manila",
              "desc": "Baluartes históricos de piedra y murallas coloniales de Intramuros en Manila",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Dusk_Along_the_Walls_of_Intramuros.jpg/960px-Dusk_Along_the_Walls_of_Intramuros.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail"
            },
            {
              "caption": "Interior barroco de San Agustín (UNESCO)",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Iglesia_de_San_Agust%C3%ADn%2C_Manila%2C_Filipinas%2C_2023-08-27%2C_DD_73.jpg/960px-Iglesia_de_San_Agust%C3%ADn%2C_Manila%2C_Filipinas%2C_2023-08-27%2C_DD_73.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Interior barroco de San Agustín (UNESCO)",
              "desc": "Interior barroco de San Agustín (UNESCO)"
            },
            {
              "caption": "Callejones gastronómicos y arcos de Binondo",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Binondo_%26_Malate%2C_Manila_-_Manila2062.jpg/960px-Binondo_%26_Malate%2C_Manila_-_Manila2062.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Callejones gastronómicos y arcos de Binondo",
              "desc": "Callejones gastronómicos y arcos de Binondo"
            }
          ]
        },
        {
          "num": "Día 3",
          "title": "Llegada a Banaue y Gran Trekking al Anfiteatro Arrocero de Batad (UNESCO)",
          "transp": "Llegada a la terminal de Banaue sobre las 06:30 AM. Desayuno reconfortante y contratación de Jeepney tradicional privado 4x4 con conductor local hasta el Saddle de Batad (1h de pista de montaña). Desde el Saddle, descenso a pie de 40 minutos con porteadores hasta la aldea aislada de Batad.",
          "morning": "07:00 Desayuno en *Sanafe Lodge* con vistas al valle de Banaue. Pago de la tasa medioambiental municipal en el centro de información turística. Subida en Jeepney hasta Batad Saddle contemplando los primeros abismos verdes de la cordillera. Inicio del descenso a pie hacia el anfiteatro de Batad, una obra de ingeniería agrícola colosal esculpida en la roca viva por la etnia Ifugao hace más de 2.000 años.",
          "afternoon": "Check-in en la guesthouse rústica y almuerzo con arroz rojo orgánico cosechado en las propias terrazas. A las 13:30, gran caminata guiada por las estrechas crestas de piedra que separan los arrozales inundados (se requiere calzado con excelente agarre y bastón de trekking de bambú) hasta alcanzar el mirador superior del anfiteatro. Continuación del descenso empinado por escalones de piedra hasta la imponente Cascada Tappiya (70 metros de caída de agua atronadora). Baño reconstituyente en su profunda poza de aguas turquesas.",
          "evening": "Regreso ascendente a la aldea al atardecer mientras la niebla desciende sobre las terrazas. Cena comunitaria casera preparada por la familia Ifugao anfitriona (pollo al jengibre y verduras de la montaña). Tertulia nocturna sin ruidos de motores bajo un cielo plagado de estrellas.",
          "hotel": "Batad Transient House / Ramon's Homestay (cabañas de madera tradicionales estilo Ifugao con vistas directas al anfiteatro arrocero, 2 habitaciones rústicas limpias, baño privado o compartido con agua caliente generada por leña).",
          "gastro": "Arroz Tinawon (arroz autóctono aromático patrimonio biológico) con estofado Ifugao y vino de arroz artesanal (*tapuy*).",
          "links": "Información terrazas Batad: https://whc.unesco.org/en/list/722/",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Banaue_Philippines_Batad-Rice-Terraces-02.jpg/960px-Banaue_Philippines_Batad-Rice-Terraces-02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Cultura & Patrimonio",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "Anfiteatro milenario de arrozales de Batad (UNESCO)",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Banaue_Philippines_Batad-Rice-Terraces-02.jpg/960px-Banaue_Philippines_Batad-Rice-Terraces-02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Anfiteatro milenario de arrozales de Batad (UNESCO)",
              "desc": "Anfiteatro milenario de arrozales de Batad (UNESCO)"
            },
            {
              "caption": "Pozas esmeralda de las cascadas de Tappiya",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Tappiyah_Falls.jpg/960px-Tappiyah_Falls.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Pozas esmeralda de las cascadas de Tappiya",
              "desc": "Pozas esmeralda de las cascadas de Tappiya"
            },
            {
              "caption": "Cabañas tradicionales de madera del pueblo Ifugao",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Ifugao_House.jpg/960px-Ifugao_House.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Cabañas tradicionales de madera del pueblo Ifugao",
              "desc": "Cabañas tradicionales de madera del pueblo Ifugao"
            }
          ]
        },
        {
          "num": "Día 4",
          "title": "Terrazas de Bangaan, Museo Etnográfico de Bontoc y Llegada a Sagada",
          "transp": "Caminata de subida desde Batad hacia el Saddle (45') o enlace por sendero panorámico hacia la aldea de Bangaan. Encuentro con nuestra van privada con conductor. Trayecto por carretera escénica de alta montaña cruzando el Paso de Bontoc hacia Sagada (85 km, 3h30' con paradas escénicas).",
          "morning": "07:00 Amanecer dorado sobre el valle de Batad. Desayuno de tortitas de plátano y café de las montañas de Kalinga. Despedida de Batad y caminata hacia Bangaan, otra pintoresca aldea declarada Patrimonio UNESCO ubicada en el fondo de un cuenco esmeralda. Encuentro con la furgoneta privada.",
          "afternoon": "Parada en la ciudad de Bontoc: visita al imprescindible *Bontoc Museum*, fundado por monjas belgas, que alberga la colección fotográfica y antropológica más valiosa sobre las tribus indígenas de las montañas, sus costumbres funerarias y las antiguas expediciones de cazadores de cabezas. Almuerzo montañés en Bontoc y continuación ascendente hasta Sagada (1.500 m de altitud, clima fresco y aire puro de pino).",
          "evening": "Llegada a Sagada y registro en la oficina de turismo municipal (SAGADA Tourism Office). Check-in en el hotel. Paseo por la calle principal del pueblo, repleta de cafeterías de madera y talleres de telares tradicionales. Cena en el legendario *Sagada Yoghurt House* (platos caseros y yogur con miel salvaje de pino y fresas).",
          "hotel": "Sagada Heritage Village / Rock Inn & Cafe (2 habitaciones amplias en entorno natural rodeado de pinos y huertos de naranjos orgánicos).",
          "gastro": "Yogur artesano de fresas silvestres de Sagada; *Pinikpikan* (plato ceremonial tradicional de pollo ahumado de la cordillera).",
          "links": "Sagada Tourism: https://sagada.gov.ph",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Bangaan_Rice_Terraces_%28Banaue%2C_Ifugao%3B_11-26-2022%29.jpg/960px-Bangaan_Rice_Terraces_%28Banaue%2C_Ifugao%3B_11-26-2022%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gran Traslado",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Panorámica protegida de las terrazas de Bangaan",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Bangaan_Rice_Terraces_%28Banaue%2C_Ifugao%3B_11-26-2022%29.jpg/960px-Bangaan_Rice_Terraces_%28Banaue%2C_Ifugao%3B_11-26-2022%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Panorámica protegida de las terrazas de Bangaan",
              "desc": "Panorámica protegida de las terrazas de Bangaan"
            },
            {
              "caption": "Patrimonio etnográfico de los pueblos de la Cordillera",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Bontoc%2C_Mountain_Province_%283299081695%29.jpg/960px-Bontoc%2C_Mountain_Province_%283299081695%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Patrimonio etnográfico de los pueblos de la Cordillera",
              "desc": "Patrimonio etnográfico de los pueblos de la Cordillera"
            },
            {
              "caption": "Valles de pinos y niebla matinal en Sagada",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Sagada_overlooking_houses_%28Sagada%2C_Mountain_Province%3B_12-01-2022%29.jpg/960px-Sagada_overlooking_houses_%28Sagada%2C_Mountain_Province%3B_12-01-2022%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Valles de pinos y niebla matinal en Sagada",
              "desc": "Valles de pinos y niebla matinal en Sagada"
            }
          ]
        },
        {
          "num": "Día 5",
          "title": "Sagada Mística: Amanecer en Marlboro Hills, Ataúdes Colgantes y Espeleología Cave Connection",
          "transp": "Desplazamientos locales en jeepney o van contratada a través de la asociación oficial de guías SEGA (Sagada Environmental Guides Association).",
          "morning": "04:30 Salida temprana hacia Marlboro Hills (Kamanbaneng Peak) para presenciar uno de los amaneceres más sobrecogedores del sudeste asiático: un mar de nubes blanco ondulando entre las crestas afiladas de los montes. Trekking de regreso de 2h pasando por las Colinas Azules de Arcilla (Blue Soil Hills). Desayuno en el pueblo.",
          "afternoon": "09:30 Excursión al místico Valle del Eco (Echo Valley): descenso entre pinos y peñascos kársticos hasta contemplar los célebres Ataúdes Colgantes (Hanging Coffins), antigua tradición funeraria animista de la etnia Igorot donde los ancianos suspendían sus féretros tallados a mano en las paredes verticales para estar más cerca de los espíritus de sus ancestros. Visita a la cueva de entierros de Lumiang (con más de 100 ataúdes apilados de madera de pino centenario).",
          "evening": "13:30 Gran Aventura Subterránea: Travesía 'Cave Connection' (3.5 horas de espeleología técnica acompañados por guías con lámparas de carburo). Conexión subterránea entrando por la cueva de Lumiang y emergiendo por la colosal caverna de Sumaguing. Se atraviesan pozas subterráneas con el agua hasta la cintura, cañones de caliza pulida y espectaculares salas con estalactitas y terrazas de travertino. (Experiencia pura de adrenalina, similar a las cuevas de Phong Nha de Vietnam). Cena reparadora en *Log Cabin Sagada*.",
          "hotel": "Sagada Heritage Village / Rock Inn & Cafe (segunda noche).",
          "gastro": "Costillas asadas a la leña de pino y café recién tostado de variedad arábica de Sagada en *Gaia Cafe and Crafts*.",
          "links": "Guías Oficiales SEGA Sagada: https://www.facebook.com/SEGASagada/",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Close_up_of_Hanging_Coffins_in_Sagada.jpg/960px-Close_up_of_Hanging_Coffins_in_Sagada.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "Milenarios ataúdes colgantes suspendidos en los riscos",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Close_up_of_Hanging_Coffins_in_Sagada.jpg/960px-Close_up_of_Hanging_Coffins_in_Sagada.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Milenarios ataúdes colgantes suspendidos en los riscos",
              "desc": "Milenarios ataúdes colgantes suspendidos en los riscos"
            },
            {
              "name": "Espeleología en Sumaguing Cave",
              "desc": "Impresionantes formaciones de estalactitas, estalagmitas y piscinas subterráneas en la gran caverna de Sagada.",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Sumaguing_Cave_2018.jpg/960px-Sumaguing_Cave_2018.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail",
              "caption": "Espeleología en Sumaguing Cave"
            },
            {
              "name": "Amanecer sobre el Mar de Nubes (Marlboro Hills)",
              "desc": "Espectacular panorámica por encima del manto de nubes ('Sea of Clouds') al amanecer en las cumbres de Sagada.",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Heaven_within_Reach.jpg/960px-Heaven_within_Reach.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail",
              "caption": "Amanecer sobre el Mar de Nubes (Marlboro Hills)"
            }
          ]
        },
        {
          "num": "Día 6",
          "title": "Descenso de la Cordillera hacia la Costa: La Ciudad Colonial Española de Vigan (UNESCO)",
          "transp": "Van privada exclusiva desde Sagada hasta Vigan City (Ilocos Sur). Ruta escénica atravesando el puerto de Bessang Pass y descendiendo de las montañas hacia el litoral del Mar de China Meridional (160 km, 5h con paradas panorámicas y almuerzo).",
          "morning": "07:30 Salida temprana de Sagada. El trayecto cruza puertos de montaña con vistas espectaculares del Parque Nacional Bessang Pass (escenario histórico de la II Guerra Mundial). Paradas fotográficas en cascadas y miradores hacia la llanura costera.",
          "afternoon": "13:00 Llegada a Vigan, la ciudad colonial española mejor conservada de toda Asia, fundada en 1572 por Juan de Salcedo y declarada Patrimonio de la Humanidad por la UNESCO. Check-in en un hotel señorial que ocupa una antigua mansión de comerciantes del siglo XVIII. Almuerzo degustando la famosa *Empanada de Vigan* (masa crujiente de harina de arroz teñida con achiote, huevo entero y longganisa especiada de Vigan).",
          "evening": "16:30 Recorrido a pie por la adoquinada Calle Crisólogo, flanqueada por casonas coloniales con ventanas de concha de capiz y balcones de hierro forjado. Paseo nostálgico en 'kalesa' (coche de caballos tradicional). Al anochecer, la calle se ilumina exclusivamente con faroles de época amarillos, recreando una atmósfera mágica. A las 19:30, asistencia al espectáculo de fuentes de luz y sonido en la Plaza Salcedo frente al Palacio Arzobispal.",
          "hotel": "Hotel Luna / Ciudad Fernandina Hotel (2 habitaciones en un hotel boutique histórico que combina muros coloniales de ladrillo con comodidades de lujo y piscina). General Luna St, Vigan City.",
          "gastro": "*Bagnet* (panceta de cerdo frita ultra crujiente al estilo ilocano) servida con vinagre Sukang Iloco y ensalada de algas *pokpoklo*.",
          "links": "Vigan UNESCO: https://whc.unesco.org/en/list/502/ | Hotel Luna: https://hotelluna.com.ph",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Calle_Crisologo%2C_Vigan_City_-_Vigan2202.jpg/960px-Calle_Crisologo%2C_Vigan_City_-_Vigan2202.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Cultura & Patrimonio",
            "Gran Traslado",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Casonas coloniales de madera y farolas en Calle Crisólogo",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Calle_Crisologo%2C_Vigan_City_-_Vigan2202.jpg/960px-Calle_Crisologo%2C_Vigan_City_-_Vigan2202.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Casonas coloniales de madera y farolas en Calle Crisólogo",
              "desc": "Casonas coloniales de madera y farolas en Calle Crisólogo"
            },
            {
              "caption": "Paseo en calesa tradicional por el adoquinado colonial",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Vigan_heritage_village_Calle_Crisologo%2C_calesa_outside_admin_office_%28Vigan%2C_Ilocos_Sur%3B_11-15-2022%29.jpg/960px-Vigan_heritage_village_Calle_Crisologo%2C_calesa_outside_admin_office_%28Vigan%2C_Ilocos_Sur%3B_11-15-2022%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Paseo en calesa tradicional por el adoquinado colonial",
              "desc": "Paseo en calesa tradicional por el adoquinado colonial"
            },
            {
              "caption": "Fachada barroco-sísmica de la Catedral de San Pablo",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Facade_of_St._Paul_Metropolitan_Cathedral%2C_Vigan%2C_Ilocos_Sur.jpg/960px-Facade_of_St._Paul_Metropolitan_Cathedral%2C_Vigan%2C_Ilocos_Sur.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Fachada barroco-sísmica de la Catedral de San Pablo",
              "desc": "Fachada barroco-sísmica de la Catedral de San Pablo"
            }
          ]
        },
        {
          "num": "Día 7",
          "title": "Vigan Histórico y Salto Aéreo a las Bisayas Centrales (Cebú)",
          "transp": "Traslado privado en van desde Vigan al Aeropuerto de Laoag (LAO, 2h) o conexión vía Manila hacia Cebú Mactan (CEB) mediante vuelo regular con Philippine Airlines / Cebu Pacific. Llegada a Cebú y traslado en van al hotel.",
          "morning": "08:00 Subida al histórico Campanario de Bantay (torre vigía de ladrillo de 1590 sobre una colina con vistas al mar). Visita a los talleres de alfarería tradicional de *Pagburnayan*, donde todavía moldean ánforas de barro usando tornos manuales y tracción de carabao (búfalo). Visita a la Catedral Metropolitana de San Pablo.",
          "afternoon": "11:00 Traslado hacia el aeropuerto para embarcar en el vuelo hacia Cebú (la reina del sur de Filipinas). Vuelo de conexión cómodo y eficiente.",
          "evening": "Llegada al Aeropuerto Internacional de Mactan-Cebú. Traslado al hotel céntrico. Cena en el complejo Ayala Center o en *House of Lechon* para probar el célebre *Lechón de Cebú*, proclamado por Anthony Bourdain como 'el mejor cerdo asado del planeta', sazonado con citronela, ajo y hojas de laurel.",
          "hotel": "Seda Ayala Center Cebu (2 habitaciones interconectadas o contiguas, piscina exterior en azotea, excelente desayuno buffet). Cardinal Rosales Ave, Cebu Business Park.",
          "gastro": "*Lechon de Cebu* tradicional con arroz en hoja de plátano (*puso*) y salsa de vinagre con calamansi.",
          "links": "House of Lechon: https://www.facebook.com/HouseOfLechonCebu/",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Bantay_Bell_Tower_Ilocos_Sur.jpg/960px-Bantay_Bell_Tower_Ilocos_Sur.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "Campanario histórico de ladrillo vigía en Bantay",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Bantay_Bell_Tower_Ilocos_Sur.jpg/960px-Bantay_Bell_Tower_Ilocos_Sur.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Campanario histórico de ladrillo vigía en Bantay",
              "desc": "Campanario histórico de ladrillo vigía en Bantay"
            },
            {
              "caption": "Interiores señoriales del siglo XIX en Vigan",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Syquia_Mansion_%2847997246637%29.jpg/960px-Syquia_Mansion_%2847997246637%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Interiores señoriales del siglo XIX en Vigan",
              "desc": "Interiores señoriales del siglo XIX en Vigan"
            },
            {
              "caption": "Llegada al centro neurálgico de las Bisayas en Cebú",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Cebu_City_skyline%2C_CCLEX_Bridge%2C_Cebu_Strait_%28Cebu_City%3B_01-17-2025%29.jpg/960px-Cebu_City_skyline%2C_CCLEX_Bridge%2C_Cebu_Strait_%28Cebu_City%3B_01-17-2025%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Llegada al centro neurálgico de las Bisayas en Cebú",
              "desc": "Llegada al centro neurálgico de las Bisayas en Cebú"
            }
          ]
        },
        {
          "num": "Día 8",
          "title": "Cebú Histórico (Magallanes) y Salto en Fast Ferry a la Isla de Bohol",
          "transp": "Visitas matinales en Cebú en van. A las 13:00, traslado a la terminal portuaria Pier 1. Ferry de alta velocidad OceanJet desde Cebú Pier 1 hasta Tagbilaran (Bohol): salida 14:00, llegada 16:00 (clase turista superior / business class con maletas facturadas). Encuentro con furgoneta privada en el puerto de Bohol.",
          "morning": "08:30 Mañana cultural en el corazón histórico de Cebú: visita a la Cruz de Magallanes (plantada por Fernando de Magallanes en 1521 marcando el inicio de la cristianización de Asia), la colindante Basílica Menor del Santo Niño (templo más venerado del país que guarda la imagen original del Niño Jesús) y el Fuerte de San Pedro (fuerte militar triangular de piedra de coral de la época de Miguel López de Legazpi).",
          "afternoon": "12:00 Almuerzo rápido y traslado al muelle de Cebú. Travesía en ferry rápido surcando las tranquilas aguas del Estrecho de Cebú (2 horas placenteras de navegación con aire acondicionado). Llegada al muelle de Tagbilaran en Bohol.",
          "evening": "16:30 Traslado directo hacia el municipio interior de Loboc. Embarque en un catamarán fluvial de madera para realizar el famoso Crucero por el Río Loboc al atardecer: navegación silenciosa bajo la densa vegetación tropical de palmeras nipa con música acústica en vivo a bordo y cena buffet de mariscos y carnes a la brasa. Check-in en el resort de cabañas junto al río.",
          "hotel": "Loboc River Resort (2 cabañas de madera sobre el agua rodeadas de selva y manglares, piscina exterior, kayak gratuito). Camayaan, Loboc, Bohol.",
          "gastro": "Buffet fluvial en Loboc: cangrejos de río, calamares salteados, pancit bihon y fruta fresca (mangos de Guimaras).",
          "links": "OceanJet Ferries: https://www.oceanjet.net | Loboc River Resort: https://lobocriverresort.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Magellan%27s_Cross%2C_Cebu_City%2C_Jan_2024.jpg/960px-Magellan%27s_Cross%2C_Cebu_City%2C_Jan_2024.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "La emblemática Cruz de Magallanes de 1521",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Magellan%27s_Cross%2C_Cebu_City%2C_Jan_2024.jpg/960px-Magellan%27s_Cross%2C_Cebu_City%2C_Jan_2024.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "La emblemática Cruz de Magallanes de 1521",
              "desc": "La emblemática Cruz de Magallanes de 1521"
            },
            {
              "caption": "El santuario católico más antiguo del archipiélago",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Basilica_Minore_del_Santo_Ni%C3%B1o_de_Cebu_%28Osme%C3%B1a_Boulevard%2C_Cebu_City%3B_09-05-2022%29.jpg/960px-Basilica_Minore_del_Santo_Ni%C3%B1o_de_Cebu_%28Osme%C3%B1a_Boulevard%2C_Cebu_City%3B_09-05-2022%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El santuario católico más antiguo del archipiélago",
              "desc": "El santuario católico más antiguo del archipiélago"
            },
            {
              "caption": "Navegación en fast ferry cruzando hacia la isla de Bohol",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Cebu-bohol.JPG/960px-Cebu-bohol.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Navegación en fast ferry cruzando hacia la isla de Bohol",
              "desc": "Navegación en fast ferry cruzando hacia la isla de Bohol"
            }
          ]
        },
        {
          "num": "Día 9",
          "title": "Bohol en Estado Puro: Las Chocolate Hills en Quad, Tarsiers y Bosques de Caoba",
          "transp": "Coche / van privada con conductor a nuestra entera disposición durante toda la jornada para recorrer el interior de la isla de Bohol.",
          "morning": "06:00 Madrugón para ver salir el sol desde el mirador principal de las Colinas de Chocolate (Chocolate Hills Complex en Carmen): más de 1.268 colinas cónicas de origen kárstico casi idénticas que en época seca toman el color del cacao. A continuación, ruta de 1 hora en quads / ATV por caminos de tierra y arrozales pedregosos bordeando la base de las colinas (adrenalina pura y vistas sin barreras).",
          "afternoon": "10:30 Visita al Santuario Oficial de Tarsiers de Filipinas en Corella (Philippine Tarsier Sanctuary de la Philippine Tarsier Foundation): visita en estricto silencio y respeto guiada por naturalistas para observar en libertad a los primates más diminutos del planeta (con sus ojos gigantes y cabezas que giran 180°). A continuación, parada fotográfica en el Bilar Man-Made Forest (túnel vegetal de caobas centenarias de 2 km) y cruce del puente colgante de bambú de Sipatan sobre el río.",
          "evening": "15:30 Tirolina gigante de Loboc Eco-Tourism Adventure Park (vuelo estilo Superman suspendido a 120 metros de altura sobre el cañón del río Loboc). Regreso al resort a media tarde. Baño en la piscina frente al río y, al caer la noche, pequeña excursión en barca o stand-up paddle para presenciar los árboles repletos de miles de luciérnagas titilando sincronizadas en la orilla.",
          "hotel": "Loboc River Resort (segunda noche).",
          "gastro": "Cena en el restaurante *Venice at Loboc*: pescado fresco a la plancha con leche de coco y jengibre (*Kinilaw de atún*).",
          "links": "Philippine Tarsier Foundation: http://www.tarsierfoundation.org",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Bohol_Hills%2C_Chocolate_Hills%2C_Philippines.jpg/960px-Bohol_Hills%2C_Chocolate_Hills%2C_Philippines.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Las 1.200 colinas cónicas de las Chocolate Hills",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Bohol_Hills%2C_Chocolate_Hills%2C_Philippines.jpg/960px-Bohol_Hills%2C_Chocolate_Hills%2C_Philippines.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Las 1.200 colinas cónicas de las Chocolate Hills",
              "desc": "Las 1.200 colinas cónicas de las Chocolate Hills"
            },
            {
              "caption": "El diminuto tarsero filipino de grandes ojos",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Tarsier_Sanctuary%2C_Corella%2C_Bohol_%282052878890%29.jpg/960px-Tarsier_Sanctuary%2C_Corella%2C_Bohol_%282052878890%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El diminuto tarsero filipino de grandes ojos",
              "desc": "El diminuto tarsero filipino de grandes ojos"
            },
            {
              "caption": "Crucero fluvial en barcaza por la selva del río Loboc",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Bohol%2C_Loboc_river_cruise_-_panoramio.jpg/960px-Bohol%2C_Loboc_river_cruise_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Crucero fluvial en barcaza por la selva del río Loboc",
              "desc": "Crucero fluvial en barcaza por la selva del río Loboc"
            }
          ]
        },
        {
          "num": "Día 10",
          "title": "Santuario Marino de Balicasag & Apo Island (Tortugas en Libertad) y Traslado a Moalboal",
          "transp": "Barca tradicional 'banca' privada desde Panglao. Ferry rápido de regreso OceanJet Tagbilaran -> Cebú (2h). Traslado privado por carretera en furgoneta desde el muelle de Cebú hasta la costa suroeste en Moalboal (90 km, 2h30').",
          "morning": "06:00 Salida en banca motorizada hacia la Isla de Balicasag y las aguas protegidas del estrecho, con opción de enlace al santuario de *Apo Island*: una reserva marina comunitaria modelo en el mundo con centenares de tortugas carey y verdes gigantes pastando sobre corales prístinos a escasos metros de la orilla en libertad absoluta (sin alimentación artificial). Avistamiento matutino de delfines en aguas abiertas y snorkel sobre la pared de coral de 50 metros de caída vertical.",
          "afternoon": "10:30 Parada en el espectacular banco de arena blanca de Virgin Island (Pungtud Island), una lengua de arena virgen que emerge y desaparece con las mareas. Almuerzo de marisco recién asado en la playa. Regreso a tierra firme, ducha rápida y recogida del equipaje.",
          "evening": "14:30 Embarque en el ferry rápido hacia Cebú Pier 1. A la llegada a Cebú, nuestra van nos espera para cruzar la cordillera central de la isla de Cebú en dirección a la localidad costera de Moalboal. Llegada al anochecer, check-in en el resort de buceo frente al mar y cena en el relajado pueblo de Panagsama Beach. (💡 *Variante de Refugio Anticiclónico:* En caso de frentes monzónicos en Palawan, las calas y cascadas escalonadas de *Siquijor* (Cambugahay) y Apo Island constituyen el mejor circuito alternativo de aguas calmas y protegidas).",
          "hotel": "Quo Vadis Dive Resort / Dolphin House Resort (2 habitaciones con terraza y vistas al mar/jardín, piscina, club de buceo propio). Panagsama Beach, Moalboal, Cebu.",
          "gastro": "*Kinilaw na Tanigue* (ceviche filipino de caballa fresca macerada en vinagre de coco, calamansi, jengibre y chiles) en *Chili Bar Moalboal*.",
          "links": "Quo Vadis Resort: https://quovadisresort.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Sea_Turtle_in_Apo_Island.jpg/960px-Sea_Turtle_in_Apo_Island.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Gran Traslado",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Tortugas marinas verdes en libertad en los arrecifes",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Sea_Turtle_in_Apo_Island.jpg/960px-Sea_Turtle_in_Apo_Island.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Tortugas marinas verdes en libertad en los arrecifes",
              "desc": "Tortugas marinas verdes en libertad en los arrecifes"
            },
            {
              "caption": "Avistamiento de delfines en aguas abiertas",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Gray%27s_spinner_dolphin_%28Stenella_longirostris_longirostris%29_Panglao.jpg/960px-Gray%27s_spinner_dolphin_%28Stenella_longirostris_longirostris%29_Panglao.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Avistamiento de delfines en aguas abiertas",
              "desc": "Avistamiento de delfines en aguas abiertas"
            },
            {
              "caption": "Atmósfera pesquera y marinera en Panagsama (Moalboal)",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Sea_floor_in_Panagsama_Beach%2C_Moalboal_02.jpg/960px-Sea_floor_in_Panagsama_Beach%2C_Moalboal_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Atmósfera pesquera y marinera en Panagsama (Moalboal)",
              "desc": "Atmósfera pesquera y marinera en Panagsama (Moalboal)"
            }
          ]
        },
        {
          "num": "Día 11",
          "title": "El 'Sardine Run' de Panagsama y Gran Barranquismo en Kawasan Falls (Badian)",
          "transp": "Desplazamiento a pie hasta el arrecife de Panagsama. Traslado de 30 minutos en van a Badian (centro de operaciones de barranquismo en Kawasan).",
          "morning": "06:30 Experiencia marina única en el mundo: colocarse la máscara y tubo y entrar nadando directamente desde la playa de guijarros de Panagsama Beach. A solo 20 metros de la orilla, la plataforma marina cae verticalmente en un abismo azul donde habita de forma permanente el colosal *Sardine Run* (un cardumen de millones de sardinas que se mueven al unísono formando gigantescas bolas de plata que se abren a vuestro paso, rodeadas por tortugas marinas residentes).",
          "afternoon": "09:00 Gran Expedición de Canyoneering en Kawasan Falls (Badian). Equipados con chaleco salvavidas, casco y calzado de agarre, acompañados por 2 guías expertos certificados: 4 horas de descenso vertiginoso por la garganta del río Kanlaob. La aventura incluye flotación por corrientes de agua dulce cristalina color aguamarina, toboganes de piedra natural, saltos a pozas profundas desde repisas de 3, 5, 8 y hasta 10 metros (los saltos altos son opcionales con camino alternativo a pie) hasta culminar en la majestuosa cascada de Kawasan. Almuerzo tradicional al final de la actividad en Badian.",
          "evening": "Tarde de relax en la piscina del resort de Moalboal o paseo en moto por la cercana playa de arena blanca de White Beach (Basdaku). Masaje filipino tradicional (*Hilot*) en la terraza con sonido de las olas. Cena frente al mar comentando los saltos del día.",
          "hotel": "Quo Vadis Dive Resort / Dolphin House Resort (segunda noche en Moalboal).",
          "gastro": "*Crispy Pata* (codillo de cerdo marinado y frito hasta quedar crujiente) con salsa de soja y vinagre especiado en *Lantaw Restaurant*.",
          "links": "Kawasan Canyoneering Oficial: https://kawasancanyoneering.com.ph",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Sardine_run_over_seafloor_in_Moalboal_01.jpg/960px-Sardine_run_over_seafloor_in_Moalboal_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura"
          ],
          "photos": [
            {
              "caption": "El sobrecogedor 'Sardine Run' con millones de sardinas",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Sardine_run_over_seafloor_in_Moalboal_01.jpg/960px-Sardine_run_over_seafloor_in_Moalboal_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El sobrecogedor 'Sardine Run' con millones de sardinas",
              "desc": "El sobrecogedor 'Sardine Run' con millones de sardinas"
            },
            {
              "caption": "Descenso de cañones y saltos a pozas turquesas",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Falling_for_Waterfalls-_Badian_Canyoneering.jpg/960px-Falling_for_Waterfalls-_Badian_Canyoneering.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Descenso de cañones y saltos a pozas turquesas",
              "desc": "Descenso de cañones y saltos a pozas turquesas"
            },
            {
              "name": "Cascadas Kawasan (Badian)",
              "desc": "La icónica cascada de Kawasan Falls con su piscina natural de intensas aguas azul turquesa en el cañón de Badian.",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Kawasan_Falls_Cebu.jpg/960px-Kawasan_Falls_Cebu.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail",
              "caption": "Cascadas Kawasan (Badian)"
            }
          ]
        },
        {
          "num": "Día 12",
          "title": "De Cebú al Paraíso Kárstico de Coron (Palawan) – Monte Tapyas y Termas de Maquinit",
          "transp": "Traslado privado temprano en van desde Moalboal hasta el Aeropuerto Internacional de Cebú Mactan (CEB, 2h30' - 3h). Vuelo regular doméstico Cebú -> Busuanga/Coron (USU) con Philippine Airlines o Cebu Pacific (1h15' de vuelo panorámico sobre los archipiélagos). Furgoneta compartida/privada desde el aeropuerto de Busuanga a Coron Town (30').",
          "morning": "07:00 Salida matutina hacia el aeropuerto de Cebú. Embarque en el vuelo hacia Busuanga, la puerta de entrada al archipiélago de las Calamianes en el norte de Palawan. Las vistas aéreas al aproximarse a Coron, con decenas de atolones y picos de piedra caliza emergiendo de aguas azul cobalto, son inolvidables.",
          "afternoon": "13:30 Llegada a Coron Town y check-in en el resort. Almuerzo ligero con zumo de mango fresco. A las 16:30, inicio del ascenso a pie a Mount Tapyas (724 escalones bien acondicionados): en la cima, coronada por una gran cruz luminosa, se disfruta de la puesta de sol más espectacular de Palawan, con vistas de 360° sobre la bahía de Coron, la silueta afilada de la isla de Coron y las islas circundantes tiñéndose de naranja y violeta.",
          "evening": "18:30 Traslado en triciclo local a las *Maquinit Hot Springs*, uno de los escasísimos manantiales termales de agua marina salada del planeta. Baño relajante bajo los manglares en piscinas naturales de piedra a 38°-40°C bajo el cielo estrellado para relajar la musculatura de los días anteriores. Cena en *Santino's Grill* (las mejores costillas a la barbacoa de la isla).",
          "hotel": "The Funny Lion Coron / Coron Bancuang Mansion (2 habitaciones de categoría superior, piscina infinita frente al manglar, excelente coctelería en el rooftop). Sitio Dinicuman, Brgy. Poblacion 5, Coron.",
          "gastro": "*Pork Ribs* marinadas al estilo isleño y helado casero de Ube (ñame morado filipino).",
          "links": "The Funny Lion: https://thefunnylion.com/coron/",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Coron_Port%2C_Mount_Tapyas_skyline_%28Coron%2C_Palawan%3B_08-02-2023%29.jpg/960px-Coron_Port%2C_Mount_Tapyas_skyline_%28Coron%2C_Palawan%3B_08-02-2023%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Gran Traslado",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Panorámica de la bahía kárstica desde el mirador del Monte Tapyas",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Coron_Port%2C_Mount_Tapyas_skyline_%28Coron%2C_Palawan%3B_08-02-2023%29.jpg/960px-Coron_Port%2C_Mount_Tapyas_skyline_%28Coron%2C_Palawan%3B_08-02-2023%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Panorámica de la bahía kárstica desde el mirador del Monte Tapyas",
              "desc": "Panorámica de la bahía kárstica desde el mirador del Monte Tapyas"
            },
            {
              "caption": "Piscinas termales de agua salada en Maquinit Hot Springs",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/One_of_the_pools_of_Maquinit_Hotspring%2C_Coron%2C_Palawan.jpg/960px-One_of_the_pools_of_Maquinit_Hotspring%2C_Coron%2C_Palawan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Piscinas termales de agua salada en Maquinit Hot Springs",
              "desc": "Piscinas termales de agua salada en Maquinit Hot Springs"
            },
            {
              "caption": "Embarcaciones tradicionales bangka fondeadas en Coron",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Coron_and_Calamian_Islands_-_Coron1713.jpg/960px-Coron_and_Calamian_Islands_-_Coron1713.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Embarcaciones tradicionales bangka fondeadas en Coron",
              "desc": "Embarcaciones tradicionales bangka fondeadas en Coron"
            }
          ]
        },
        {
          "num": "Día 13",
          "title": "Coron Ultimate Island Hopping: Kayangan, Barracuda Lake y Pecios de la II Guerra Mundial",
          "transp": "Barca tradicional 'banca' privada alquilada en exclusiva para nuestro grupo con capitán, marinero y cocinero privado a bordo. Zarpamos desde el muelle de Coron a las 08:00 AM para adelantarnos a todos los barcos compartidos.",
          "morning": "08:15 Llegada a primera hora al Lago Kayangan (considerado el lago más limpio y transparente de toda Asia): subida al icónico mirador de la bahía para tomar la fotografía más famosa de Filipinas y descenso al lago interior de agua semisalada encajonado entre colosales acantilados kársticos negros. Baño en soledad con aguas de visibilidad cristalina de 20 metros. A continuación, navegación hacia el asombroso Lago Barracuda (Barracuda Lake): un fenómeno geológico único con capas termoclinas donde la temperatura del agua pasa repentinamente de 28°C a 38°C mientras se bucea o nada entre paredes submarinas de piedra caliza con aspecto lunar.",
          "afternoon": "12:00 Parada en Banul Beach o Smith Beach: arena blanca finísima y cabañas sobre pilotes donde nuestra tripulación nos sirve un suculento festín preparado a bordo (pescado fresco entero a la parrilla, calamares, arroz al vapor, ensalada de algas y frutas tropicales recién cortadas). A las 13:30, snorkel sobre el *Skeleton Wreck* (un carguero de abastecimiento japonés de 25 metros hundido por la aviación naval estadounidense en septiembre de 1944 cuya proa descansa a tan solo 5 metros de la superficie, colonizada por corales cerebro y peces loro).",
          "evening": "15:00 Travesía hacia Twin Lagoons (Lagunas Gemelas): fondeo del barco y nado atravesando una estrecha abertura sumergida bajo la roca calcárea para acceder a una laguna secreta interior rodeada de paredones verticales de 150 metros. Regreso a Coron Town a las 17:00. Ducha y paseo relajado por las tiendas de artesanía local de madera de acacia.",
          "hotel": "The Funny Lion Coron (segunda noche).",
          "gastro": "Cena marinera en *Sharky's Restobar*: atún fresco a la brasa con salsa teriyaki y cerveza local San Miguel Especial bien fría.",
          "links": "Coron Island Hopping: https://coroninformation.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Kayangan_Lake%2C_Coron%2C_Palawan.jpg/960px-Kayangan_Lake%2C_Coron%2C_Palawan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "Las aguas cristalinas y pináculos del Lago Kayangan",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Kayangan_Lake%2C_Coron%2C_Palawan.jpg/960px-Kayangan_Lake%2C_Coron%2C_Palawan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Las aguas cristalinas y pináculos del Lago Kayangan",
              "desc": "Las aguas cristalinas y pináculos del Lago Kayangan"
            },
            {
              "caption": "El espejo de agua azul y termoclinas del Lago Barracuda",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Barracuda_Lake.jpg/960px-Barracuda_Lake.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El espejo de agua azul y termoclinas del Lago Barracuda",
              "desc": "El espejo de agua azul y termoclinas del Lago Barracuda"
            },
            {
              "name": "Lagunas Gemelas (Twin Lagoon)",
              "desc": "Vista aérea de las dos lagunas gemelas de Coron, separadas por una imponente muralla kárstica vertical.",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Twin_Lagoon_Coron_Palawan.jpg/960px-Twin_Lagoon_Coron_Palawan.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail",
              "caption": "Lagunas Gemelas (Twin Lagoon)"
            }
          ]
        },
        {
          "num": "Día 14",
          "title": "Coron Salvaje: Arrecifes de Coral de Siete Pecados y Pecio Lusong Gunboat",
          "transp": "Segunda jornada de navegación en banca privada exclusiva hacia los arrecifes exteriores de las Calamianes.",
          "morning": "08:30 Snorkel a primera hora en el Parque Marino de Siete Pecados, un conjunto de siete pequeños islotes kársticos donde la corriente oceánica alimenta el jardín de corales duros y blandos más denso y vivo de la bahía. Millones de peces de colores (peces payaso en sus anémonas, peces ángel, lábridos y rayas de manchas azules).",
          "afternoon": "11:00 Navegación hacia Lusong Gunboat Wreck (otro buque de guerra japonés de la II Guerra Mundial hundido en aguas poco profundas, con su popa emergiendo casi a ras de agua, ideal para explorar en apnea o snorkel sin necesidad de botellas) y el cercano *Lusong Coral Garden*, una ladera submarina tapizada al 100% por corales cuerno de ciervo y abanicos de mar intactos. Almuerzo en Pass Island, isla virgen de postal tropical.",
          "evening": "Regreso al puerto de Coron al atardecer. Cena en el restaurante *Hermanos Tapas & Wine* o comida criolla filipina en *Lolo Nonoy's Food Station* (ambiente 100% auténtico frecuentado por locales).",
          "hotel": "The Funny Lion Coron (tercera noche).",
          "gastro": "*Sisig de atún* servido en plancha de hierro fundido crepitante con huevo y lima calamansi.",
          "links": "Coron Reefs Protection: https://calamianes.org",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Ship_Wreck_Coron_Palawan%2C_Philippines_09.jpg/960px-Ship_Wreck_Coron_Palawan%2C_Philippines_09.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura"
          ],
          "photos": [
            {
              "name": "Pecio Japonés de la II Guerra Mundial (Skeleton Wreck)",
              "desc": "Buceo y snorkel sobre las costillas sumergidas del buque de guerra japonés hundido en las aguas cristalinas de Coron.",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Skeleton_wreck.jpg/960px-Skeleton_wreck.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail",
              "caption": "Pecio Japonés de la II Guerra Mundial (Skeleton Wreck)"
            },
            {
              "name": "Jardines de Coral Virgen (Lusong Coral Garden)",
              "desc": "Jardines de Coral Virgen (Lusong Coral Garden)",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Coral_%26_Limestone%2C_Coron_Island%2C_Palawan%2C_Philippines.jpg/960px-Coral_%26_Limestone%2C_Coron_Island%2C_Palawan%2C_Philippines.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "caption": "Jardines de Coral Virgen (Lusong Coral Garden)"
            },
            {
              "caption": "Arenas de coral blanco y aguas turquesas en Malcapuya",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Malcapuya_Island%2C_Palawan%2C_Philippines.jpg/960px-Malcapuya_Island%2C_Palawan%2C_Philippines.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Arenas de coral blanco y aguas turquesas en Malcapuya",
              "desc": "Arenas de coral blanco y aguas turquesas en Malcapuya"
            }
          ]
        },
        {
          "num": "Día 15",
          "title": "Fast Ferry de Coron a El Nido (Palawan) – Atardecer en Las Cabañas y Nacpan Beach",
          "transp": "Ferry rápido de alta velocidad (Jomalia Shipping o Montenegro Lines) desde Coron Port hasta El Nido Port (salida 06:00, travesía de 3h30' - 4h surcando el estrecho de Linapacan). Alquiler de scooters o triciclo privado en El Nido.",
          "morning": "05:30 Check-out y embarque en el fast ferry rumbo al sur, hacia la punta norte de la isla principal de Palawan. La navegación bordea archipiélagos desiertos de ensueño. Llegada a El Nido sobre las 09:45 AM. Desembarque y traslado al hotel situado frente a la bahía de Bacuit.",
          "afternoon": "Check-in y alquiler de scooters o contratación de triciclo privado para explorar el norte terrestre de la península de El Nido: trayecto de 45 minutos por carreteras rurales entre arrozales y búfalos hasta llegar a la salvaje Nacpan Beach: una impresionante franja continua de 4 kilómetros de arena dorada, aguas cristalinas y cocoteros inclinados. Paseo a pie hasta las colinas gemelas de Twin Beach. Almuerzo de mariscos en *Nacpan Sunmai Sunset Restaurant*.",
          "evening": "16:30 Regreso hacia el sur para disfrutar del atardecer en Las Cabañas Beach (Marimegmeg Beach): el punto de encuentro social más famoso de Palawan, con bares chill-out sobre la arena, música ambiente y una tirolina que conecta la colina con un islote sobre el mar. Cena frente al mar con los pies en la arena en *The Beach Shack*.",
          "hotel": "Cadlao Resort and Restaurant / El Nido Mahogany Beach Resort (2 villas/habitaciones independientes con piscina frente al mar y vistas a la imponente isla de Cadlao). Caalan Beach / Corong-Corong, El Nido.",
          "gastro": "Calamares a la parrilla rellenos de tomate y cebolla, con ensalada de mango verde con *bagoong* (pasta dulce de gambas).",
          "links": "Jomalia Shipping: https://www.jomaliashipping.com | Cadlao Resort: https://cadlaoresort.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Island_lagoon_in_Bacuit_Bay%2C_El_Nido%2C_Palawan%2C_Philippines.jpg/960px-Island_lagoon_in_Bacuit_Bay%2C_El_Nido%2C_Palawan%2C_Philippines.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "Navegación entre los archipiélagos del norte de Palawan",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Island_lagoon_in_Bacuit_Bay%2C_El_Nido%2C_Palawan%2C_Philippines.jpg/960px-Island_lagoon_in_Bacuit_Bay%2C_El_Nido%2C_Palawan%2C_Philippines.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Navegación entre los archipiélagos del norte de Palawan",
              "desc": "Navegación entre los archipiélagos del norte de Palawan"
            },
            {
              "caption": "Acantilados kársticos de caliza negra que custodian El Nido",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/El_Nido_town_-_ElNido2132.jpg/960px-El_Nido_town_-_ElNido2132.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Acantilados kársticos de caliza negra que custodian El Nido",
              "desc": "Acantilados kársticos de caliza negra que custodian El Nido"
            },
            {
              "caption": "El célebre atardecer sobre el mar en Las Cabañas",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Las_Cabanas_Beach_-_panoramio.jpg/960px-Las_Cabanas_Beach_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El célebre atardecer sobre el mar en Las Cabañas",
              "desc": "El célebre atardecer sobre el mar en Las Cabañas"
            }
          ]
        },
        {
          "num": "Día 16",
          "title": "El Nido: Expedición Privada en el Archipiélago de Bacuit (Tour A Premium)",
          "transp": "Barca tradicional banca privada contratada en exclusiva para nuestro grupo. Salida temprana a las 07:45 AM para entrar en las lagunas antes de la llegada de los grandes tours compartidos.",
          "morning": "08:15 Entrada a Big Lagoon (Gran Laguna): alquiler de kayaks dobles transparentes para adentrarse en un cañón marino de aguas verde esmeralda encajonado entre paredes verticales de piedra caliza de más de 100 metros de altura cubiertas de vegetación endémica. Deslizarse remando en absoluto silencio por este santuario geológico es una de las experiencias cumbres del sudeste asiático.",
          "afternoon": "11:00 Visita a Secret Lagoon: acceso a pie agachándose a través de una hendidura natural en la roca calcárea para descubrir una poza oculta en el corazón de la montaña. A continuación, fondeo en Shimizu Island: almuerzo buffet servido sobre la barca con pescados gigantes a la brasa, piña caramelizada y ensaladas frescas. Tiempo de snorkel de alta calidad con peces loro y tortugas.",
          "evening": "14:30 Parada de relax en Seven Commandos Beach: playa de arena blanca y aguas turquesas donde tomar un coco fresco recién bajado de la palmera. Regreso al pueblo de El Nido a las 16:30. Paseo por las callejuelas peatonales de El Nido Town y cena con pescado fresco a elegir al peso en los puestos sobre la playa en *Sava Beach Bar* o *El Nido Grill*.",
          "hotel": "Cadlao Resort / El Nido Mahogany Beach Resort (segunda noche).",
          "gastro": "Pescado *Lapu-Lapu* (mero rojo local) al vapor con jengibre y cebolleta fresca al estilo costero filipino.",
          "links": "El Nido Protected Area: https://www.elnidoprotectedarea.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Big_Lagoon%2C_El_Nido%2C_Philippines_%2836705678660%29.jpg/960px-Big_Lagoon%2C_El_Nido%2C_Philippines_%2836705678660%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura"
          ],
          "photos": [
            {
              "caption": "Navegación silenciosa en kayak por la Big Lagoon",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Big_Lagoon%2C_El_Nido%2C_Philippines_%2836705678660%29.jpg/960px-Big_Lagoon%2C_El_Nido%2C_Philippines_%2836705678660%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Navegación silenciosa en kayak por la Big Lagoon",
              "desc": "Navegación silenciosa en kayak por la Big Lagoon"
            },
            {
              "caption": "Aguas esmeralda entre paredes de roca en Shimizu Island",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Shimizu_Island.jpg/960px-Shimizu_Island.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Aguas esmeralda entre paredes de roca en Shimizu Island",
              "desc": "Aguas esmeralda entre paredes de roca en Shimizu Island"
            },
            {
              "caption": "Almuerzo marinero y arrecife en Miniloc Island",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/El_Nido_-_panoramio_%2830%29.jpg/960px-El_Nido_-_panoramio_%2830%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Almuerzo marinero y arrecife en Miniloc Island",
              "desc": "Almuerzo marinero y arrecife en Miniloc Island"
            }
          ]
        },
        {
          "num": "Día 17",
          "title": "Adrenalina en Taraw Cliff (Vía Ferrata) y Navegación Bacuit (Tour C)",
          "transp": "Desplazamiento a pie a la base de Taraw Cliff. A las 09:30, salida en barca banca privada para la segunda ruta por el archipiélago.",
          "morning": "07:00 Aventura matutina en Taraw Cliff Canopy Walk: equipados con arnés de seguridad y casco, ascenso guiado por puentes colgantes suspendidos y pasarelas de rejilla metálica ancladas sobre los afiladísimos picos de piedra caliza kárstica que dominan El Nido. En la plataforma superior se contempla la vista panorámica más sobrecogedora y vertical de toda la bahía de Bacuit y el pueblo.",
          "afternoon": "09:30 Inicio del Tour C privado: navegación hacia Matinloc Island para visitar el mirador histórico de Matinloc Shrine y la espectacular Secret Beach (playa secreta a la que solo se puede acceder nadando a través de un túnel sumergido bajo el arrecife). Continuación hacia Hidden Beach, una ensenada protegida entre cañones marinos donde las aguas son tan mansas como una piscina. Almuerzo parrillero a bordo.",
          "evening": "15:00 Última parada en Helicopter Island, llamada así por su silueta de helicóptero, célebre por su arrecife exterior de gorgonias y corales abanico. Regreso a El Nido Town. Tiempo para relajarse con un masaje de aromaterapia y cena en el restaurante italiano-mediterráneo *Trattoria Altrove* (pizzas crujientes al horno de leña hechas por expertos pizzeros locales).",
          "hotel": "Cadlao Resort / El Nido Mahogany Beach Resort (tercera noche).",
          "gastro": "Pizza artesanal al horno de leña en *Altrove* (prepararse para hacer cola de 15 minutos, pero vale totalmente la pena) o tapas marineras en *Aplaya Restaurant*.",
          "links": "Taraw Cliff Canopy: https://elnidoviasferratas.ph",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Cadlao_Island_view_from_Canopy_Walk.jpg/960px-Cadlao_Island_view_from_Canopy_Walk.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura"
          ],
          "photos": [
            {
              "caption": "Vía ferrata y vistas de pájaro sobre la bahía en Taraw Cliff",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Cadlao_Island_view_from_Canopy_Walk.jpg/960px-Cadlao_Island_view_from_Canopy_Walk.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Vía ferrata y vistas de pájaro sobre la bahía en Taraw Cliff",
              "desc": "Vía ferrata y vistas de pájaro sobre la bahía en Taraw Cliff"
            },
            {
              "caption": "Aguas cristalinas protegidas en las playas de Bacuit",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/El_Nido%2C_Palawan_%282020%29.jpg/960px-El_Nido%2C_Palawan_%282020%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Aguas cristalinas protegidas en las playas de Bacuit",
              "desc": "Aguas cristalinas protegidas en las playas de Bacuit"
            },
            {
              "caption": "Mirador del santuario de Matinloc sobre el estrecho",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Matinloc_Shrine%2C_El_Nido%2C_Palawan_by_Say_Bernardo.jpg/960px-Matinloc_Shrine%2C_El_Nido%2C_Palawan_by_Say_Bernardo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Mirador del santuario de Matinloc sobre el estrecho",
              "desc": "Mirador del santuario de Matinloc sobre el estrecho"
            }
          ]
        },
        {
          "num": "Día 18",
          "title": "El Nido Oculto: Cascadas en la Selva, Playa de Duli y Cultura Tradicional en Sibaltan",
          "transp": "Furgoneta privada o alquiler de scooters para recorrer el interior virgen y la costa este de la península de El Nido.",
          "morning": "08:30 Trekking por la jungla tropical hacia las Cascadas de Nagkalit-kalit: caminata de 45 minutos cruzando varios ríos poco profundos a pie bajo frondosos árboles de teca hasta alcanzar dos pozas gemelas de agua fresca de montaña para un chapuzón revitalizante en plena selva.",
          "afternoon": "11:30 Ruta hacia Duli Beach: una inmensa playa virgen de surf de 2 km en el extremo norte, santuario protegido de desove de tortugas marinas. Almuerzo con pescado a la brasa en *Duli Beach Resort*. Por la tarde, desplazamiento hacia el este, al tranquilo pueblo pesquero de Sibaltan, cuna de la cultura milenaria del pueblo Cuyonon. Visita al museo comunitario flotante *Pangko Museum* para comprender la construcción de los barcos tradicionales que navegaban hasta Borneo.",
          "evening": "Cena temprana en Sibaltan con productos orgánicos locales en *Tapik Beach Park* contemplando las aguas tranquilas del Mar de Joló. Regreso nocturno a El Nido Town para preparar el equipaje del día siguiente.",
          "hotel": "Cadlao Resort / El Nido Mahogany Beach Resort (cuarta noche).",
          "gastro": "*Pancit Palabok* con salsa de gambas, chicharrón triturado y huevo duro servido en hoja de plátano.",
          "links": "Sibaltan Heritage: https://cuyononheritage.org",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Nacpan_Beach_in_El_Nido.jpg/960px-Nacpan_Beach_in_El_Nido.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Cultura & Patrimonio"
          ],
          "photos": [
            {
              "caption": "Kilómetros de arena dorada y cocoteros en Nacpan Beach",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Nacpan_Beach_in_El_Nido.jpg/960px-Nacpan_Beach_in_El_Nido.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Kilómetros de arena dorada y cocoteros en Nacpan Beach",
              "desc": "Kilómetros de arena dorada y cocoteros en Nacpan Beach"
            },
            {
              "caption": "Playa salvaje de surf en el litoral norte (Duli Beach)",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Duli_beach_can_surprise_with_strong_rip_currents_-_panoramio.jpg/960px-Duli_beach_can_surprise_with_strong_rip_currents_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Playa salvaje de surf en el litoral norte (Duli Beach)",
              "desc": "Playa salvaje de surf en el litoral norte (Duli Beach)"
            },
            {
              "caption": "Playas vírgenes y ambiente tradicional en el norte de Palawan",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Corong_Corong%2C_El_Nido%2C_Palawan_Island%2C_Philippines.jpg/960px-Corong_Corong%2C_El_Nido%2C_Palawan_Island%2C_Philippines.jpg",
              "name": "Playas vírgenes y ambiente tradicional en el norte de Palawan",
              "desc": "Playas vírgenes y ambiente tradicional en el norte de Palawan"
            }
          ]
        },
        {
          "num": "Día 19",
          "title": "Del Norte al Sur de Palawan: El Río Subterráneo de Puerto Princesa (Maravilla Mundial)",
          "transp": "Furgoneta privada desde El Nido hacia el sur por la carretera panorámica de Palawan hasta Sabang (230 km, 4h15'). Embarque en lancha a motor hacia la playa del río subterráneo. Tras la visita, traslado por carretera a Puerto Princesa ciudad (70 km, 1h30').",
          "morning": "06:30 Salida temprana en van privada hacia Sabang. Atravesamos los paisajes montañosos del centro de la isla de Palawan. Llegada a las 11:00 al muelle de Sabang, registro oficial de permisos y embarque en la lancha que bordea los acantilados marinos hasta la entrada del Parque Nacional del Río Subterráneo de Puerto Princesa (Patrimonio de la Humanidad UNESCO y una de las 7 Maravillas Naturales del Mundo).",
          "afternoon": "12:00 Equipados con casco y audioguía en español, navegación de 45 minutos en barca eléctrica silenciosa adentrándose más de 1,5 km en el interior de una de las cavernas navegables más largas del planeta. La ruta revela colosales catedrales kársticas subterráneas de hasta 60 metros de altura, estalactitas con formas escultóricas y una asombrosa colonia de miles de murciélagos y salanganas que anidan en la oscuridad. Almuerzo buffet filipino en el muelle de Sabang.",
          "evening": "15:30 Continuación en vehículo privado hasta Puerto Princesa, capital de la provincia de Palawan. Check-in en el hotel. Tarde de descanso y paseo por la Plaza Cuartel (lugar histórico de la II Guerra Mundial) y la Catedral de la Inmaculada Concepción. Cena de celebración en el famoso restaurante *Kalui* (imprescindible reserva previa: se entra descalzo sobre suelos de madera de teca pulida, rodeados de arte filipino y mariscos exquisitos).",
          "hotel": "Hue Hotels and Resorts Puerto Princesa (2 habitaciones Deluxe contemporáneas, piscina en la azotea, excelente ubicación). Puerto Princesa North Road.",
          "gastro": "Menú degustación marino en *KaLui Restaurant*: atún al sashimi, gambas al ajillo dulce de coco y postre de plátano con azúcar mascabado.",
          "links": "Puerto Princesa Subterranean River: https://www.puerto-undergroundriver.com | KaLui: https://kaluirestaurant.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Jungle_lake_at_the_entrance_to_Puerto_Princesa_Subterranean_River_Cave%2C_Palawan%2C_Philippines.jpg/960px-Jungle_lake_at_the_entrance_to_Puerto_Princesa_Subterranean_River_Cave%2C_Palawan%2C_Philippines.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "Boca de entrada al Parque Nacional del Río Subterráneo",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Jungle_lake_at_the_entrance_to_Puerto_Princesa_Subterranean_River_Cave%2C_Palawan%2C_Philippines.jpg/960px-Jungle_lake_at_the_entrance_to_Puerto_Princesa_Subterranean_River_Cave%2C_Palawan%2C_Philippines.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Boca de entrada al Parque Nacional del Río Subterráneo",
              "desc": "Boca de entrada al Parque Nacional del Río Subterráneo"
            },
            {
              "caption": "Catedrales de roca y estalactitas gigantes en el río subterráneo",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Puerto_Princesa_Subterranean_River_-_PuertoPrincesaSR1760.jpg/960px-Puerto_Princesa_Subterranean_River_-_PuertoPrincesaSR1760.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Catedrales de roca y estalactitas gigantes en el río subterráneo",
              "desc": "Catedrales de roca y estalactitas gigantes en el río subterráneo"
            },
            {
              "caption": "Selva costera y playas agrestes en Sabang",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Sabang%2C_Puerto_Princesa%2C_Palawan%2C_Philippines_-_panoramio.jpg/960px-Sabang%2C_Puerto_Princesa%2C_Palawan%2C_Philippines_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Selva costera y playas agrestes en Sabang",
              "desc": "Selva costera y playas agrestes en Sabang"
            }
          ]
        },
        {
          "num": "Día 20",
          "title": "Puerto Princesa Ecoturismo y Vuelo a Manila – Cena de Despedida",
          "transp": "Excursiones matinales en van. Traslado al Aeropuerto de Puerto Princesa (PPS). Vuelo regular doméstico Puerto Princesa -> Manila (MNL) con Philippine Airlines (duración: 1h15'). Traslado en Grab a la zona moderna y segura de Bonifacio Global City (BGC) / Makati.",
          "morning": "08:30 Visita social e innovadora a la Prisión Abierta y Colonia Penal de Iwahig: uno de los modelos penitenciarios más singulares del mundo, donde los internos viven sin rejas en una inmensa granja autosuficiente de 26.000 hectáreas aprendiendo agricultura, carpintería y artesanía. Visita al Centro de Rescate de Fauna Silvestre de Palawan (Palawan Wildlife Rescue and Conservation Center) para conocer los cocodrilos endémicos filipinos.",
          "afternoon": "12:00 Almuerzo ligero y compras de última hora de perlas cultivadas del Mar del Sur en el mercado artesanal de Puerto Princesa. Traslado al aeropuerto y embarque en el vuelo hacia Manila. Llegada a Manila a media tarde y check-in en el vibrante distrito de Bonifacio Global City (BGC), el centro neurálgico más vanguardista del país.",
          "evening": "19:30 Gran Cena de Despedida en el aclamado restaurante *Manam Comfort Filipino* en BGC High Street: un recorrido por la gastronomía filipina contemporánea con sus dos versiones de cada plato clásico (clásica vs moderna). Paseo nocturno entre los rascacielos iluminados, murales artísticos y terrazas de High Street.",
          "hotel": "Seda BGC Hotel / Shangri-La The Fort (2 habitaciones ejecutivas en el corazón peatonal de Bonifacio Global City). Taguig, Manila.",
          "gastro": "*Crispy Sisig* premiado de Manam, *Sinigang na Beef Short Rib and Watermelon* (receta de autor que fusiona ternera tierna con sandía caramelizada en caldo de tamarindo).",
          "links": "Manam Comfort Filipino: https://momentgroup.ph/our-brands/manam/ | Seda BGC: https://bgc.sedahotels.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Sunset_over_Palawan_Island.jpg/960px-Sunset_over_Palawan_Island.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gran Traslado",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Bancos de arena blanca y aguas turquesas en Honda Bay",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Luli_Island%2C_Honda_Bay%2C_Palawan%2C_Philippines.jpg/960px-Luli_Island%2C_Honda_Bay%2C_Palawan%2C_Philippines.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Bancos de arena blanca y aguas turquesas en Honda Bay",
              "desc": "Bancos de arena blanca y aguas turquesas en Honda Bay"
            },
            {
              "caption": "Paseo marítimo y manglares de Puerto Princesa",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Puerto_Princesa_City_Baywalk_%28Puerto_Princesa%2C_Palawan%3B_08-03-2023%29.jpg/960px-Puerto_Princesa_City_Baywalk_%28Puerto_Princesa%2C_Palawan%3B_08-03-2023%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Paseo marítimo y manglares de Puerto Princesa",
              "desc": "Paseo marítimo y manglares de Puerto Princesa"
            },
            {
              "caption": "Cena de despedida con vistas a los rascacielos de Makati",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Makati%2C_Metro_Manila_skyline_-_Flickr.jpg/960px-Makati%2C_Metro_Manila_skyline_-_Flickr.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Cena de despedida con vistas a los rascacielos de Makati",
              "desc": "Cena de despedida con vistas a los rascacielos de Makati"
            }
          ]
        },
        {
          "num": "Día 21",
          "title": "Manila Cultural: El Tesoro de Oro Prehispánico y Regreso a España",
          "transp": "Desplazamientos locales en Grab. Traslado por la tarde al Aeropuerto Internacional Ninoy Aquino (NAIA T1/T3). Facturación de equipaje y vuelo internacional de regreso a España.",
          "morning": "09:30 Visita matinal al extraordinario *Ayala Museum* en Makati: admirar la sala 'Gold of Ancestors' (con más de mil piezas ceremoniales de oro puro elaboradas por las civilizaciones indígenas filipinas antes de la llegada de los colonizadores españoles en el siglo XVI) y la colección de dioramas que narran visualmente la historia del archipiélago.",
          "afternoon": "12:30 Almuerzo en *Sentro 1771* en Greenbelt (degustación de su famoso *Corned Beef Sinigang*). Últimas compras de café de la cordillera, tabletas de chocolate artesanal de cacao de Davao (*Auro Chocolate*) y tejidos tradicionales de piña en las tiendas de diseño local de Greenbelt.",
          "evening": "16:30 Traslado con margen de tiempo suficiente (el tráfico en Manila puede ser muy denso) hacia el aeropuerto internacional NAIA. Trámites de control de pasaportes y embarque en el vuelo intercontinental de regreso a España. Noche a bordo.",
          "hotel": "Vuelo nocturno internacional con destino a España.",
          "gastro": "Último capricho dulce: *Halo-Halo* supremo con helado de ube, leche evaporada, jalea de coco, judías dulces y flan de leche (*leche flan*).",
          "links": "Ayala Museum: https://www.ayalamuseum.org | Auro Chocolate: https://aurochocolate.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Ayala_Museum%2C_Makati%2C_Feb_2025_%281%29.jpg/960px-Ayala_Museum%2C_Makati%2C_Feb_2025_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gran Traslado",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Tesoros arqueológicos de oro prehispánico en el Museo Ayala",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Gold_of_Ancestors%2C_Ayala_Museum.jpg/960px-Gold_of_Ancestors%2C_Ayala_Museum.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Tesoros arqueológicos de oro prehispánico en el Museo Ayala",
              "desc": "Tesoros arqueológicos de oro prehispánico en el Museo Ayala"
            },
            {
              "name": "Jardín Tropical y Parque de Greenbelt (Makati)",
              "desc": "Paseo por el exuberante oasis botánico urbano de Greenbelt Park en Makati con sus fuentes, estanques y vegetación tropical.",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Greenbelt_Park%2C_Makati%2C_Jul_2024.jpg/960px-Greenbelt_Park%2C_Makati%2C_Jul_2024.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail",
              "caption": "Jardín Tropical y Parque de Greenbelt (Makati)"
            },
            {
              "caption": "Despedida del archipiélago filipino en el aeropuerto NAIA",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Ninoy_Aquino_International_Airport_Terminal_3_in_2023.jpg/960px-Ninoy_Aquino_International_Airport_Terminal_3_in_2023.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Despedida del archipiélago filipino en el aeropuerto NAIA",
              "desc": "Despedida del archipiélago filipino en el aeropuerto NAIA"
            }
          ]
        }
      ]
    },
    {
      "id": "colombia",
      "name": "Colombia",
      "flag": "🇨🇴",
      "title": "Magia Salvaje: De los Andes y la Tatacoa al Eje Cafetero, Tayrona y Cartagena",
      "subtitle": "21 Días de páramos, desiertos, selvas cafeteras y caribe colonial",
      "doc_file": "Itinerario_Colombia_3_Semanas.docx",
      "hero_img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Castillo_San_Felipe_de_Barajas%2C_Cartagena_14.jpg/1280px-Castillo_San_Felipe_de_Barajas%2C_Cartagena_14.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "stats": {
        "duration": "21 Días / 20 Noches",
        "pace": "Medio-Alto / Muy Dinámico",
        "culture_pct": "50%",
        "nature_pct": "50%",
        "budget": "2.780€ - 3.280€ / persona (todo incl.)",
        "best_season": "Diciembre a Marzo / Julio a Septiembre"
      },
      "dna_match": "Un país de una diversidad geográfica y cultural apabullante. Diseñado como vuestros viajes a Turquía y Asia Central: con desplazamientos en vehículos 4x4 y jeeps Willys clásicos para cruzar valles cafeteros, rutas a pie de alta intensidad (Valle de Cocora a 2.850m, senderos de jungla en Tayrona a 32°C y 740 escalones en Piedra del Peñol), combinadas con historia precolombina (Museo del Oro), pueblos coloniales intactos, la metamorfosis social y graffitis de la Comuna 13 de Medellín, el sabor caribeño amurallado de Cartagena y la magia de San Basilio de Palenque (UNESCO).",
      "gallery": [
        {
          "title": "Palmas de Cera en Valle de Cocora",
          "location": "Salento, Quindío",
          "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Palmas_de_cera%2C_Valle_del_c%C3%B3cora.jpg/1280px-Palmas_de_cera%2C_Valle_del_c%C3%B3cora.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "desc": "Palmeras gigantes de hasta 60 metros emergiendo entre la niebla andina."
        },
        {
          "title": "Castillo San Felipe y Cartagena",
          "location": "Cartagena de Indias",
          "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Castillo_San_Felipe_de_Barajas%2C_Cartagena_14.jpg/1280px-Castillo_San_Felipe_de_Barajas%2C_Cartagena_14.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "desc": "La mayor fortaleza colonial de América y casonas de balcones floridos."
        },
        {
          "title": "Cárcavas Rojas del Cuzco",
          "location": "Desierto de la Tatacoa, Huila",
          "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Desierto_de_la_Tatacoa_-_Cuzco.jpg/1280px-Desierto_de_la_Tatacoa_-_Cuzco.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "desc": "Un paisaje de otro planeta esculpido por la erosión con cielos estrellados puros."
        },
        {
          "title": "Comuna 13 & Metrocable",
          "location": "Medellín, Antioquia",
          "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Escaleras_el%C3%A9ctricas_de_la_comuna_13%2C_Medell%C3%ADn_-_03.jpg/1280px-Escaleras_el%C3%A9ctricas_de_la_comuna_13%2C_Medell%C3%ADn_-_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "desc": "Murales monumentales, música y escaleras mecánicas al aire libre."
        },
        {
          "title": "Cabo San Juan en P.N. Tayrona",
          "location": "Santa Marta, Magdalena",
          "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Cabo_San_Juan_del_Guia_%285499853451%29.jpg/1280px-Cabo_San_Juan_del_Guia_%285499853451%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "desc": "Ensenadas gemelas de arena blanca encajadas entre la jungla virgen y rocas de granito."
        },
        {
          "title": "Bogotá & Cerro Monserrate",
          "location": "Altiplano Cundiboyacense",
          "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/2019_Bogot%C3%A1_-_Iglesia_de_Monserrate.jpg/1280px-2019_Bogot%C3%A1_-_Iglesia_de_Monserrate.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "desc": "Vistas a 3.150m, la Balsa Muisca de El Dorado y museos de nivel mundial."
        }
      ],
      "gastro": [
        {
          "name": "Ajiaco Santafereño",
          "desc": "Sopa tradicional de tres papas andinas con pollo, alcaparras y crema de leche.",
          "tag": "Bogotá"
        },
        {
          "name": "Bandeja Paisa Completa",
          "desc": "Frijoles, chicharrón crujiente, carne molida, plátano maduro, arepa y aguacate.",
          "tag": "Antioquia"
        },
        {
          "name": "Cazuela de Mariscos",
          "desc": "Guiso cremoso de langostinos, calamares y pescado fresco con leche de coco.",
          "tag": "Caribe"
        },
        {
          "name": "Frutas Exóticas de Mercado",
          "desc": "Degustación de lulo, maracuyá, granadilla, feijoa, uchuva y guanábana.",
          "tag": "Sensorial"
        }
      ],
      "highlights": [
        "El resplandor del oro prehispánico en el Museo del Oro y vistas desde Monserrate",
        "Cata de más de 12 frutas tropicales exóticas en el Mercado de Paloquemao",
        "Laberintos ocres y observación estelar nocturna en el Desierto de la Tatacoa",
        "Gran Trekking circular por el Valle de Cocora y reserva de colibríes Acaime",
        "Inmersión cafetera de la semilla a la taza en Willys clásicos y pueblo de Filandia",
        "Giro histórico y arte urbano en la Comuna 13 de Medellín con líderes comunitarios",
        "Subida de 740 escalones a la cima de la Piedra del Peñol y los zócalos de Guatapé",
        "Fábrica de café del siglo XIX impulsada por agua y cacao orgánico en Minca",
        "Trekking selvático en el Parque Tayrona hasta las playas de Cabo San Juan del Guía",
        "Túneles del Castillo de San Felipe y atardecer en las murallas de Cartagena",
        "San Basilio de Palenque (UNESCO): tambores, lengua propia y memoria cimarrona",
        "Navegación en kayak por manglares y baño nocturno con plancton bioluminiscente en Islas del Rosario"
      ],
      "days": [
        {
          "num": "Día 1",
          "title": "Llegada a Bogotá (2.640 msnm) – La Candelaria y Bienvenida Andina",
          "transp": "Vuelo internacional con llegada al Aeropuerto El Dorado (BOG). Traslado privado en van climatizada hacia el barrio histórico de La Candelaria (trayecto: 45'-1h según tráfico de Bogotá).",
          "morning": "Aterrizaje en Bogotá, trámites migratorios y recogida de maletas. Retirada de pesos colombianos (COP) en cajeros de Bancolombia / Davivienda en terminal internacional. Activación de eSIM.",
          "afternoon": "Check-in en el hotel boutique colonial. Tiempo de adaptación a la altitud andina (2.640 metros sobre el nivel del mar). Primer paseo relajado por las calles adoquinadas de La Candelaria contemplando los aleros de teja de barro, portones tallados y balcones de madera policromada.",
          "evening": "Caminata hasta la imponente Plaza de Bolívar, rodeada por el Capitolio Nacional, el Palacio de Justicia y la Catedral Primada de Colombia. Cena tradicional en el histórico restaurante *La Puerta Falsa* (fundado en 1816) degustando un auténtico *Ajiaco Santafereño* (sopa reconfortante de tres tipos de papa nativa con pollo deshilachado, mazorca de maíz, crema de leche, alcaparras y guascas) acompañado de chocolate caliente con queso.",
          "hotel": "Hotel de la Ópera (2 habitaciones de estilo republicano/colonial, spa termal con piscina climatizada interior para aclimatarse, excelente desayuno). Calle 10 # 5-72, La Candelaria, Bogotá.",
          "gastro": "*Ajiaco Santafereño* con aguacate y alcaparras; tamal bogotano envuelto en hoja de plátano en *La Puerta Falsa*.",
          "links": "https://www.hotelopera.com.co | Alcaldía Mayor de Bogotá: https://bogota.gov.co",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Catedral_Primada%2C_Bogota%2C_Colombia_%285796344537%29.jpg/960px-Catedral_Primada%2C_Bogota%2C_Colombia_%285796344537%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "Plaza de Bolívar con la Catedral Primada y el Capitolio",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Catedral_Primada%2C_Bogota%2C_Colombia_%285796344537%29.jpg/960px-Catedral_Primada%2C_Bogota%2C_Colombia_%285796344537%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Plaza de Bolívar con la Catedral Primada y el Capitolio",
              "desc": "Plaza de Bolívar con la Catedral Primada y el Capitolio"
            },
            {
              "caption": "Callejones coloniales adoquinados en La Candelaria",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/LLuvia_en_El_Callej%C3%B3n_del_Embudo_mirando_sur.jpg/960px-LLuvia_en_El_Callej%C3%B3n_del_Embudo_mirando_sur.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Callejones coloniales adoquinados en La Candelaria",
              "desc": "Callejones coloniales adoquinados en La Candelaria"
            },
            {
              "caption": "Tradicional ajiaco santafereño con alcaparras y crema",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Ajiaco%2C_El_Colonial%2C_Nemoc%C3%B3n%2C_Colombia.jpg/960px-Ajiaco%2C_El_Colonial%2C_Nemoc%C3%B3n%2C_Colombia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Tradicional ajiaco santafereño con alcaparras y crema",
              "desc": "Tradicional ajiaco santafereño con alcaparras y crema"
            }
          ]
        },
        {
          "num": "Día 2",
          "title": "Bogotá Cultural & Catedral de Sal de Zipaquirá: Monserrate, Museo del Oro y Mina Subterránea",
          "transp": "Funicular/teleférico en Monserrate. Vehículo privado para la excursión hacia la sabana norte hasta Zipaquirá (48 km, 1h por trayecto).",
          "morning": "07:30 Ascenso temprano en funicular al Cerro de Monserrate (3.152 msnm): vistas panorámicas sobrecogedoras de toda la metrópolis de Bogotá. A las 10:00, visita guiada imprescindible al *Museo del Oro*: la mayor colección de orfebrería prehispánica del mundo con la legendaria Balsa Muisca de El Dorado, y paseo por las casonas coloniales de La Candelaria y el Museo Botero.",
          "afternoon": "13:30 Almuerzo tradicional de ajiaco santafereño. Traslado hacia la sabana norte hasta la monumental *Catedral de Sal de Zipaquirá*: colosal templo subterráneo excavado a 180 metros de profundidad en el corazón de una montaña de sal fósil de 250 millones de años. Recorrido por el sobrecogedor Vía Crucis tallado en roca salina y la nave central con su cruz monumental de 16 metros iluminada con tecnología LED.",
          "evening": "18:00 Regreso a Bogotá. Paseo nocturno por el vibrante barrio gastronómico de Usaquén o la Zona G y cena de autor en un restaurante andino.",
          "hotel": "Hotel de la Ópera (segunda noche).",
          "gastro": "Cena de autor en *Prudencia* (menú degustación de producto andino cocinado a la leña) o empanadas de carne criolla en el Callejón del Embudo.",
          "links": "Museo del Oro: https://www.banrepcultural.org/bogota/museo-del-oro | Bogotá Graffiti: https://bogotagraffiti.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/View_of_Bogota_from_the_church_of_Monserrate.jpg/960px-View_of_Bogota_from_the_church_of_Monserrate.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Santuario de Monserrate a 3.150m con vistas de la sabana",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/View_of_Bogota_from_the_church_of_Monserrate.jpg/960px-View_of_Bogota_from_the_church_of_Monserrate.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Santuario de Monserrate a 3.150m con vistas de la sabana",
              "desc": "Santuario de Monserrate a 3.150m con vistas de la sabana"
            },
            {
              "caption": "La célebre Balsa Muisca de El Dorado en el Museo del Oro",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Muisca_Raft_Gold_Museum_BOG_03_2018_8514.jpg/960px-Muisca_Raft_Gold_Museum_BOG_03_2018_8514.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "La célebre Balsa Muisca de El Dorado en el Museo del Oro",
              "desc": "La célebre Balsa Muisca de El Dorado en el Museo del Oro"
            },
            {
              "caption": "La monumental nave central y cruz de halita tallada iluminada en la Catedral de Sal de Zipaquirá",
              "name": "La monumental nave central y cruz de halita tallada iluminada en la Catedral de Sal de Zipaquirá",
              "desc": "La monumental nave central y cruz de halita tallada iluminada en la Catedral de Sal de Zipaquirá",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Sal_Azul_01.jpg/960px-Sal_Azul_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail"
            }
          ]
        },
        {
          "num": "Día 3",
          "title": "Del Altiplano al Desierto: Mercado de Paloquemao y Laberintos Rojos de la Tatacoa",
          "transp": "Van privada exclusiva con conductor desde Bogotá descendiendo de la cordillera hacia el valle del río Magdalena en el departamento del Huila hasta el Desierto de la Tatacoa (280 km, 5h30' con paradas escénicas y almuerzo).",
          "morning": "07:00 Visita sensorial matutina a la Plaza de Mercado de Paloquemao: inmersión en los aromas y colores de Colombia con cata guiada de más de 12 frutas tropicales autóctonas (lulo, granadilla, maracuyá, uchuva, feijoa, guanábana, borojó y mangostino). Desayuno con arepa de huevo y jugo natural recién exprimido.",
          "afternoon": "08:45 Inicio del viaje por carretera descendiendo los Andes hacia el sur. Parada en Natagaima o Saldaña para almorzar un exquisito *Lechón Tolimense* tradicional. Llegada por la tarde a Villavieja y entrada al mágico Desierto de la Tatacoa (en realidad, un bosque seco tropical fosilizado de 330 km² con una geología de cañones esculpidos por la erosión milenaria). Check-in en el hotel.",
          "evening": "16:30 Caminata guiada por el laberinto rojo de *El Cuzco*: senderos serpenteantes entre colosales cárcavas y montículos de tierra rojiza y ocre salpicados de cactus gigantes de hasta 5 metros de altura. Puesta de sol de colores incandescentes. A las 20:00, sesión en el Observatorio Astronómico de la Tatacoa: al estar situado cerca del ecuador y libre de contaminación lumínica, los astrónomos locales enseñan a identificar constelaciones de ambos hemisferios a través de telescopios de alta potencia.",
          "hotel": "Bethel Bio Luxury Hotel / Hotel Yararaka (2 cabañas ecológicas integradas en el paisaje desértico con piscina para refrescarse del calor). Desierto de la Tatacoa, Huila.",
          "gastro": "*Cabrito asado* al estilo de la Tatacoa con arepa de maíz 'orejeperro' y jugo fresco de cactus.",
          "links": "Turismo Tatacoa: https://desiertodelatatacoa.com.co",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Market_in_Bogot%C3%A1.jpg/960px-Market_in_Bogot%C3%A1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Gran Traslado",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Colores y aromas de frutas exóticas en la plaza de Paloquemao",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Market_in_Bogot%C3%A1.jpg/960px-Market_in_Bogot%C3%A1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Colores y aromas de frutas exóticas en la plaza de Paloquemao",
              "desc": "Colores y aromas de frutas exóticas en la plaza de Paloquemao"
            },
            {
              "caption": "Laberintos de cárcavas rojas del Cuzco en la Tatacoa",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Laberintos_del_Cusco%2C_Desierto_de_la_Tatacoa.jpg/960px-Laberintos_del_Cusco%2C_Desierto_de_la_Tatacoa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Laberintos de cárcavas rojas del Cuzco en la Tatacoa",
              "desc": "Laberintos de cárcavas rojas del Cuzco en la Tatacoa"
            },
            {
              "caption": "Bóveda celeste y astroturismo en el Desierto de la Tatacoa",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/B%C3%B3veda_celeste_profunda_en_el_desierto_de_la_Tatacoa.jpg/960px-B%C3%B3veda_celeste_profunda_en_el_desierto_de_la_Tatacoa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Bóveda celeste y astroturismo en el Desierto de la Tatacoa",
              "desc": "Bóveda celeste y astroturismo en el Desierto de la Tatacoa"
            }
          ]
        },
        {
          "num": "Día 4",
          "title": "Cañón Gris de Los Hoyos y Salto Aéreo al Eje Cafetero (Salento)",
          "transp": "Caminata matinal en el desierto. Traslado en van privada de Tatacoa al Aeropuerto Benito Salas de Neiva (NVA, 1h). Vuelo regular doméstico a Pereira (PEI) o Armenia (AXM) vía Bogotá con Avianca/Clic. Encuentro con nuestros Jeeps Willys tradicionales en el aeropuerto y traslado a Salento (1h).",
          "morning": "06:00 Caminata al amanecer por el sector de *Los Hoyos*: a diferencia de El Cuzco, este cañón presenta un sobrecogedor paisaje lunar de arcillas grises y cenizas donde se encuentran fósiles marinos milenarios. Baño matutino en el oasis de la piscina mineral natural en mitad del desierto.",
          "afternoon": "09:30 Desayuno campestre, ducha y traslado hacia el aeropuerto de Neiva. Vuelo de conexión sobrevolando la majestuosa Cordillera Central de los Andes hacia la región del Paisaje Cultural Cafetero (declarado Patrimonio de la Humanidad por la UNESCO). Llegada a Pereira/Armenia a primera hora de la tarde.",
          "evening": "Subida en Jeep Willys 4x4 hasta el icónico pueblo de Salento (1.895 msnm). Check-in en el hotel. Primer paseo nocturno por la Calle Real, repleta de talleres artesanales de orfebrería, cuero y guadua (bambú gigante andino). Cena en *El Rincón de Lucy* o en *Bernabé Gourmet*.",
          "hotel": "Hotel Salento Real / Finca Hotel El Rancho de Salento (2 habitaciones con balcón tradicional paisa, patios con flores y excelente atención familiar). Calle 3 # 4-31, Salento, Quindío.",
          "gastro": "*Trucha arcoíris* de río preparada al ajillo sobre un patacón gigante crujiente de plátano verde.",
          "links": "Paisaje Cultural Cafetero UNESCO: https://whc.unesco.org/en/list/1121/",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Cactus_cabecinegro_en_Los_Hoyos.jpg/960px-Cactus_cabecinegro_en_Los_Hoyos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Cultura & Patrimonio",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "Cañón gris de Los Hoyos y paisaje lunar en la Tatacoa",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Los_Hoyos%2C_desierto_de_la_Tatacoa.JPG/960px-Los_Hoyos%2C_desierto_de_la_Tatacoa.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Cañón gris de Los Hoyos y paisaje lunar en la Tatacoa",
              "desc": "Cañón gris de Los Hoyos y paisaje lunar en la Tatacoa"
            },
            {
              "caption": "Colinas verdes del Paisaje Cultural Cafetero",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Cafetales%2C_en_Colombia.jpg/960px-Cafetales%2C_en_Colombia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Colinas verdes del Paisaje Cultural Cafetero",
              "desc": "Colinas verdes del Paisaje Cultural Cafetero"
            },
            {
              "caption": "Balcones multicolores de arquitectura bahareque en Salento",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Calle_5%2C_Salento_01.jpg/960px-Calle_5%2C_Salento_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Balcones multicolores de arquitectura bahareque en Salento",
              "desc": "Balcones multicolores de arquitectura bahareque en Salento"
            }
          ]
        },
        {
          "num": "Día 5",
          "title": "El Gran Trekking del Valle de Cocora: Palmas de Cera y Reserva Acaime",
          "transp": "Traslado tradicional en Jeeps Willys 4x4 compartidos/privados desde la plaza de Bolívar de Salento hasta el Valle de Cocora (11 km, 25 minutos de trayecto escénico sobre caminos rurales).",
          "morning": "06:30 Salida muy temprana en Willys para ser los primeros en iniciar el trekking y evitar la niebla densa y el turismo masivo. Gran Trekking Circular de Cocora (5-6 horas de duración, dificultad moderada): inicio remontando el curso del río San José entre pastizales andinos, cruzando 6 puentes colgantes de madera suspendidos sobre el torrente.",
          "afternoon": "10:00 Ascenso por el frondoso bosque de niebla hasta la Reserva Natural Acaime (la Casa de los Colibríes): parada reconfortante para degustar un chocolate caliente con queso campesino mientras decenas de colibríes de plumajes multicolores vuelan a escasos centímetros de vuestros ojos. Continuación del ascenso hasta la Finca La Montaña (2.850 msnm) para disfrutar de un picnic con vistas panorámicas. A las 12:30, inicio del descenso por el sendero principal del Valle de Cocora, caminando entre centenares de colosales Palmas de Cera del Quindío (*Ceroxylon quindiuense*, el árbol nacional de Colombia, palmeras que alcanzan hasta 60 metros de altura desafiando la gravedad entre las brumas andinas).",
          "evening": "15:00 Regreso en Willys a Salento. Almuerzo tardío. Subida a pie por los 253 escalones del Mirador Alto de la Cruz para contemplar el valle del Quindío al atardecer. Por la noche, experiencia lúdica en una cancha tradicional para jugar una partida de *Tejo* (el deporte nacional de Colombia de origen indígena, lanzando discos de metal hacia un aro con pequeñas mechas de pólvora que explotan al impactar, acompañado de cerveza local).",
          "hotel": "Hotel Salento Real (segunda noche en Salento).",
          "gastro": "Chocolate caliente artesanal con queso campesino en Acaime; trucha ahumada en salsa de maracuyá en *Restaurante Los Huertos*.",
          "links": "Parque Los Nevados / Cocora: https://www.parquesnacionales.gov.co",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Cocora_Valley.jpg/960px-Cocora_Valley.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Colosales palmas de cera de hasta 60m en el Valle de Cocora",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Cocora_Valley.jpg/960px-Cocora_Valley.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Colosales palmas de cera de hasta 60m en el Valle de Cocora",
              "desc": "Colosales palmas de cera de hasta 60m en el Valle de Cocora"
            },
            {
              "caption": "Colibríes de alta montaña libando en el bosque de niebla",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Brown_violetear_%28Colibri_delphinae%29_Las_Tangaras.jpg/960px-Brown_violetear_%28Colibri_delphinae%29_Las_Tangaras.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Colibríes de alta montaña libando en el bosque de niebla",
              "desc": "Colibríes de alta montaña libando en el bosque de niebla"
            },
            {
              "caption": "Tradicionales Jeeps Willys aparcados en la plaza de Salento",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Jeep_Willys_-_Salento_%281%29.JPG/960px-Jeep_Willys_-_Salento_%281%29.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Tradicionales Jeeps Willys aparcados en la plaza de Salento",
              "desc": "Tradicionales Jeeps Willys aparcados en la plaza de Salento"
            }
          ]
        },
        {
          "num": "Día 6",
          "title": "Inmersión Cafetera de la Semilla a la Taza y Pueblo Pintoresco de Filandia",
          "transp": "Desplazamientos en Jeep Willys 4x4 por carreteras terciarias y pistas cafeteras.",
          "morning": "08:30 Visita vivencial profunda a una auténtica finca cafetera tradicional (Finca El Ocaso o Finca Las Acacias): ataviados con el canasto campesino tradicional de recolector, recorrido entre los cafetales aprendiendo las diferencias entre café Arábica de alta montaña y Robusta, recolección manual de granos cereza maduros, despulpado, fermentación controlada y secado al sol en paseras. Taller de catación profesional guiado por un barista para entrenar el olfato distinguiendo notas de chocolate, caramelo y frutas cítricas.",
          "afternoon": "13:00 Traslado hacia el vecino municipio de Filandia (30 minutos en Willys), considerado por muchos como el pueblo más bello y auténtico del Quindío, preservando intacta la arquitectura tradicional de bahareque de colores brillantes y balcones llenos de begonias sin la saturación turística. Almuerzo en el célebre restaurante *Helena Adentro* (cocina contemporánea creativa con ingredientes orgánicos de huertos locales).",
          "evening": "Paseo por el Barrio San José viendo a los maestros cesteros tejer bejucos y fibras naturales. Subida al Mirador Colina Iluminada (torre de madera de 27 metros construida en mangle y guadua con vistas de 360° sobre el cañón del río Barbas). Regreso a Salento para una noche tranquila.",
          "hotel": "Hotel Salento Real (tercera noche en Salento).",
          "gastro": "Platos para compartir en *Helena Adentro* (costillas de cerdo confitadas en panela y lulo, croquetas de trucha ahumada, arepas de chócolo con queso fresco).",
          "links": "Finca El Ocaso: https://fincaelocasosalento.com | Helena Adentro: https://helenaadentro.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Cafetales%2C_en_Colombia.jpg/960px-Cafetales%2C_en_Colombia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Gran Traslado",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Granos de café arábica maduros recolectados a mano en Colombia",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Coffee_cherries_of_varying_ripeness%2C_on_a_tree_in_Colombia_%28by_Brian_Smith%29.jpg/960px-Coffee_cherries_of_varying_ripeness%2C_on_a_tree_in_Colombia_%28by_Brian_Smith%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Granos de café arábica maduros recolectados a mano en Colombia",
              "desc": "Granos de café arábica maduros recolectados a mano en Colombia"
            },
            {
              "caption": "Mirador panorámico de la Colina Iluminada de Filandia",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/El_mirador_del_Quind%C3%ADo.jpg/960px-El_mirador_del_Quind%C3%ADo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Mirador panorámico de la Colina Iluminada de Filandia",
              "desc": "Mirador panorámico de la Colina Iluminada de Filandia"
            },
            {
              "caption": "Fachadas históricas intactas en el pueblo de Filandia",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Calle_7%2C_Filandia.jpg/960px-Calle_7%2C_Filandia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Fachadas históricas intactas en el pueblo de Filandia",
              "desc": "Fachadas históricas intactas en el pueblo de Filandia"
            }
          ]
        },
        {
          "num": "Día 7",
          "title": "Ruta Escénica Andina hacia Medellín: La Ciudad de la Eterna Primavera",
          "transp": "Van privada con conductor desde Salento hasta Medellín atravesando la Cordillera Central y descendiendo por el cañón del río Cauca (250 km, 5h30' de viaje panorámico) o vuelo corto doméstico Pereira -> Medellín Olaya Herrera (45').",
          "morning": "08:00 Salida temprana rumbo al norte. El recorrido por carretera atraviesa paisajes montañosos espectaculares: plantaciones de café, plataneras, caña de azúcar y pueblos de colonización antioqueña. Parada a media mañana para tomar un tinto de café recién colado y pan de yuca caliente en un parador de carretera con vistas al cañón.",
          "afternoon": "14:00 Llegada al Valle de Aburrá y entrada a Medellín (1.495 msnm). Check-in en el moderno y arbolado barrio de El Poblado o Laureles. Tiempo libre para descansar en el hotel.",
          "evening": "17:30 Paseo introductorio por el Parque Lleras y Provenza: el epicentro del ocio gastronómico de la ciudad, repleto de terrazas ajardinadas, cafeterías de diseño y restaurantes de autor. Cena en *Mondongo's* degustando una generosa *Bandeja Paisa* (frijoles cargamanto con chicharrón crujiente, carne molida, arroz, huevo frito, tajada de plátano maduro, arepa blanca y aguacate).",
          "hotel": "Diez Hotel Categoria Colombia / The Click Clack Hotel Medellín (2 habitaciones de diseño contemporáneo inspiradas en las culturas indígenas colombianas, terraza rooftop con vistas al skyline de la montaña). Calle 10 A # 34-11, El Poblado, Medellín.",
          "gastro": "*Bandeja Paisa* completa tradicional en *Mondongo's El Poblado*; degustación de cócteles de autor con lulo y aguardiente antioqueño.",
          "links": "Mondongos: https://mondongos.com.co | Diez Hotel: https://www.diezhotel.com",
          "photo": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Cauca_River_Canyon_-_home_of_the_new_wren_Thryophilus_sernai_%28Cucarachero_Paisa%29_%287241470126%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
          "tags": [
            "Naturaleza & Aventura",
            "Gran Traslado",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Paisaje montañoso y cañón del río Cauca en la cordillera andina antioqueña",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Panor%C3%A1mica_del_ca%C3%B1%C3%B3n_del_r%C3%ADo_Cauca_-_Hidroituango_1.jpg/960px-Panor%C3%A1mica_del_ca%C3%B1%C3%B3n_del_r%C3%ADo_Cauca_-_Hidroituango_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail",
              "name": "Paisaje montañoso y cañón del río Cauca en la cordillera andina antioqueña",
              "desc": "Paisaje montañoso y cañón del río Cauca en la cordillera andina antioqueña"
            },
            {
              "caption": "Bulevares arbolados, diseño y ambiente gastronómico en Provenza (El Poblado, Medellín)",
              "url": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Medellin_Provenza.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
              "name": "Bulevares arbolados, diseño y ambiente gastronómico en Provenza (El Poblado, Medellín)",
              "desc": "Bulevares arbolados, diseño y ambiente gastronómico en Provenza (El Poblado, Medellín)"
            },
            {
              "caption": "Panorámica nocturna y skyline del Valle de Aburrá en Medellín",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Medell%C3%ADn_skyline02.jpg/960px-Medell%C3%ADn_skyline02.jpg",
              "name": "Panorámica nocturna y skyline del Valle de Aburrá en Medellín",
              "desc": "Panorámica nocturna y skyline del Valle de Aburrá en Medellín"
            }
          ]
        },
        {
          "num": "Día 8",
          "title": "Medellín: Metamorfosis Urbana, Comuna 13 y el Legado de Botero",
          "transp": "Desplazamientos integrados en el sistema de transporte público ejemplar de Medellín: Metro, Metrocable y tranvía, combinados con caminata.",
          "morning": "08:30 Gran Tour de la Transformación Social de la Comuna 13: guiados en exclusiva por un rapero o artista gráfico nacido en la propia comunidad. Subida por las históricas escaleras mecánicas públicas al aire libre (símbolo mundial de urbanismo social que conectó un barrio marginado con la ciudad). Recorrido por los miradores de San Javier contemplando graffitis monumentales que narran el dolor del conflicto armado y la victoria de la música, el arte callejero y la resiliencia comunitaria. Demostración improvisada de breakdance y degustación de los helados caseros de fruta con sal de Doña Alba.",
          "afternoon": "12:30 Almuerzo ligero en el centro de Medellín. Subida en la línea K del Metrocable (teleférico urbano pionero en el mundo que sobrevuela las laderas de la montaña integrando las barriadas periféricas) hasta Santo Domingo Savio. A las 14:30, recorrido a pie por la Plaza Botero: 23 gigantescas y voluptuosas esculturas de bronce donadas a la ciudad natal del maestro Fernando Botero. Visita a las salas de pintura del *Museo de Antioquia*.",
          "evening": "18:00 Paseo por el animado Paseo Junín y visita al Palacio de la Cultura Rafael Uribe Uribe. Regreso a El Poblado. Cena de alta cocina colombiana contemporánea en *Carmen Medellín* o *Oci.Mde* (cocina lenta de cocción prolongada).",
          "hotel": "Diez Hotel Categoria Colombia (segunda noche en Medellín).",
          "gastro": "Menú creativo en *Carmen Medellín*: panceta confitada con reducción de tamarindo y puré de yuca con coco.",
          "links": "Metro de Medellín: https://www.metrodemedellin.gov.co | Museo de Antioquia: https://www.museodeantioquia.co",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Comuna_13_-_Medell%C3%ADn.jpg/960px-Comuna_13_-_Medell%C3%ADn.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio"
          ],
          "photos": [
            {
              "caption": "Monumentales murales y arte urbano en la Comuna 13",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Comuna_13_-_Medell%C3%ADn.jpg/960px-Comuna_13_-_Medell%C3%ADn.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Monumentales murales y arte urbano en la Comuna 13",
              "desc": "Monumentales murales y arte urbano en la Comuna 13"
            },
            {
              "caption": "Escaleras mecánicas públicas, símbolo de innovación social",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Escaleras_el%C3%A9ctricas_de_la_comuna_13%2C_Medell%C3%ADn_-_01.jpg/960px-Escaleras_el%C3%A9ctricas_de_la_comuna_13%2C_Medell%C3%ADn_-_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Escaleras mecánicas públicas, símbolo de innovación social",
              "desc": "Escaleras mecánicas públicas, símbolo de innovación social"
            },
            {
              "caption": "Las monumentales figuras de bronce de Botero frente al Palacio de la Cultura",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Plaza_Botero%2C_Palacio_de_la_Cultura.jpg/960px-Plaza_Botero%2C_Palacio_de_la_Cultura.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Las monumentales figuras de bronce de Botero frente al Palacio de la Cultura",
              "desc": "Las monumentales figuras de bronce de Botero frente al Palacio de la Cultura"
            }
          ]
        },
        {
          "num": "Día 9",
          "title": "El Monolito de la Piedra del Peñol y los Zócalos de Colores de Guatapé",
          "transp": "Van privada con conductor y guía exclusivo para la excursión de día completo al oriente antioqueño (80 km por trayecto, 2 horas).",
          "morning": "07:30 Salida temprana hacia Guatapé. La primera parada es la colosal *Piedra del Peñol* (un monolito granítico de 220 metros de altura que emerge como un titán solitario en mitad del paisaje). Desafío físico: ascenso a pie por los 740 escalones en zigzag encajonados en una grieta natural de la roca. En la cumbre se contempla una de las panorámicas más espectaculares de América del Sur: un laberinto infinito de cientos de islas verdes rodeadas por las aguas color zafiro del embalse de Peñol-Guatapé.",
          "afternoon": "11:30 Paseo en lancha privada rápida navegando entre las ensenadas del embalse, pasando junto a las ruinas de las antiguas haciendas inundadas. A continuación, traslado al cercano pueblo de Guatapé: considerado el pueblo más colorido del mundo gracias a sus famosos 'zócalos' (bajorrelieves decorativos tallados y pintados a mano en la parte inferior de las fachadas de cada casa, que representan oficios familiares, animales andinos, girasoles y escenas históricas). Almuerzo a orillas del malecón con trucha fresca o costillas asadas.",
          "evening": "Paseo por la Plaza de los Zócalos y la vibrante Calle de las Sombrillas. Tiempo libre para compras de artesanías antioqueñas y café especial. Regreso a Medellín a media tarde. Noche libre para disfrutar del ambiente de terrazas en Provenza.",
          "hotel": "Diez Hotel Categoria Colombia (tercera noche en Medellín).",
          "gastro": "*Solomito* de ternera con chimichurri andino y arepa de chócolo con queso quesito en Guatapé.",
          "links": "Piedra del Peñol: https://www.piedradelpenol.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/La_piedra_del_penol_-_panoramio.jpg/960px-La_piedra_del_penol_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gran Traslado",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "El gigantesco monolito de piedra de 220 metros de El Peñol",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/La_piedra_del_penol_-_panoramio.jpg/960px-La_piedra_del_penol_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El gigantesco monolito de piedra de 220 metros de El Peñol",
              "desc": "El gigantesco monolito de piedra de 220 metros de El Peñol"
            },
            {
              "caption": "Laberinto de colinas e islas sobre el embalse de Guatapé",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Dan-gold-guatape-colombia.jpg/960px-Dan-gold-guatape-colombia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Laberinto de colinas e islas sobre el embalse de Guatapé",
              "desc": "Laberinto de colinas e islas sobre el embalse de Guatapé"
            },
            {
              "caption": "Zócalos en relieve pintados en las casas de Guatapé",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Plazoleta_de_los_Z%C3%B3calos_de_colores_en_Guatap%C3%A9_-_Pueblo_de_los_z%C3%B3calos.jpg/960px-Plazoleta_de_los_Z%C3%B3calos_de_colores_en_Guatap%C3%A9_-_Pueblo_de_los_z%C3%B3calos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Zócalos en relieve pintados en las casas de Guatapé",
              "desc": "Zócalos en relieve pintados en las casas de Guatapé"
            }
          ]
        },
        {
          "num": "Día 10",
          "title": "Vuelo al Caribe y Ascenso a la Sierra Nevada: El Paraíso Verde de Minca",
          "transp": "Traslado al Aeropuerto José María Córdova de Rionegro (MDE, 35'). Vuelo regular directo Medellín -> Santa Marta (SMR) con Avianca / LATAM (1h15'). Encuentro con vehículos 4x4 todoterreno en el aeropuerto y ascenso por carretera de montaña a Minca (650 msnm, 45 minutos).",
          "morning": "08:00 Vuelo panorámico cruzando desde los valles andinos hacia el litoral del Mar Caribe. Aterrizaje en Santa Marta, la ciudad más antigua de Colombia (fundada en 1525). Recogida inmediata en vehículos 4x4 para iniciar la subida hacia las faldas de la Sierra Nevada de Santa Marta (el sistema montañoso costero más alto del mundo, que se eleva desde el mar hasta los 5.775 m en los picos nevados Colón y Bolívar).",
          "afternoon": "11:30 Llegada a Minca, meca ecológica de biodiversidad y clima templado. Visita a la histórica *Finca La Victoria* (una de las plantaciones de café más antiguas de Colombia, fundada en 1892 que opera íntegramente con maquinaria original de la Revolución Industrial impulsada por la fuerza del agua de los ríos de montaña). Almuerzo campestre en la finca con cerveza artesanal elaborada con agua de manantial de la sierra (*Nevada Cervecería*).",
          "evening": "15:00 Caminata hacia las Cascadas de Marinka o Pozo Azul: un conjunto de pozas cristalinas de agua pura de deshielo rodeadas de helechos gigantes y bambúes. Baño refrescante en la selva. Check-in en el eco-lodge enclavado en la montaña. Cena al aire libre escuchando la sinfonía nocturna de ranas y grillos de la Sierra Nevada.",
          "hotel": "Casas Viejas Lodge by Masaya / Minca Glamping (2 habitaciones o cabañas con vistas panorámicas sobre la selva nublada, terrazas privadas y hamacas). Finca La Victoria, Minca.",
          "gastro": "Cerveza artesanal *Happy Nebbi* (elaborada con café de Minca y agua de deshielo de la Sierra) con sándwich gourmet de pan artesanal.",
          "links": "Finca La Victoria: https://lavictoria.coffee | Casas Viejas: https://masaya-experience.com/casas-viejas/",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Bahia_de_Santa_Marta_01.JPG/960px-Bahia_de_Santa_Marta_01.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gran Traslado",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "La bahía caribeña de Santa Marta al pie de las montañas",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Bahia_de_Santa_Marta_01.JPG/960px-Bahia_de_Santa_Marta_01.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "La bahía caribeña de Santa Marta al pie de las montañas",
              "desc": "La bahía caribeña de Santa Marta al pie de las montañas"
            },
            {
              "caption": "Pozas de agua dulce fresca en las cascadas de Minca",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Santa_Marta_cascadas.jpg/960px-Santa_Marta_cascadas.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Pozas de agua dulce fresca en las cascadas de Minca",
              "desc": "Pozas de agua dulce fresca en las cascadas de Minca"
            },
            {
              "caption": "Miradores de hamacas gigantes sobre la jungla de Minca",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Atardece_Desde_Minca_En_La_Sierra_Nevada_De_Santa_Marta.jpg/960px-Atardece_Desde_Minca_En_La_Sierra_Nevada_De_Santa_Marta.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Miradores de hamacas gigantes sobre la jungla de Minca",
              "desc": "Miradores de hamacas gigantes sobre la jungla de Minca"
            }
          ]
        },
        {
          "num": "Día 11",
          "title": "Minca Salvaje: Aves Endémicas, Taller de Cacao y Atardecer en Los Pinos",
          "transp": "Senderismo guiado y desplazamientos locales en vehículos 4x4 o moto-taxi de montaña.",
          "morning": "06:00 Salida al amanecer con guía ornitólogo local: la Sierra Nevada de Minca es el mayor 'hotspot' de endemismo de aves del planeta (avistamiento de tucanes de montaña, quetzales colinegros, carpinteros y periquitos de Santa Marta). Desayuno con frutas tropicales y café recién molido en la terraza del lodge mientras decenas de aves sobrevuelan el valle.",
          "afternoon": "09:30 Taller vivencial de cacao orgánico artesanal en la Finca San Rafael: apertura de mazorcas frescas de cacao criollo, fermentación, secado y tostado al fuego de leña hasta elaborar vuestra propia pasta pura de chocolate con canela y chile. A las 12:30, almuerzo en *The Lazy Cat* en el pueblo de Minca.",
          "evening": "14:30 Ruta en 4x4 hacia el Mirador de Los Pinos (a 1.400 msnm): un punto geográfico excepcional donde, en días despejados, se pueden contemplar simultáneamente los picos nevados de la Sierra Nevada a la espalda y el azul turquesa del Mar Caribe y la Ciénaga Grande al frente. Atardecer tumbados en las colosales hamacas de red suspendidas sobre el abismo de la selva en *Sierra Mincana*. Cena en el eco-lodge.",
          "hotel": "Casas Viejas Lodge by Masaya (segunda noche en Minca).",
          "gastro": "Cacao ceremonial caliente al 100% con panela orgánica; trucha fresca a la plancha con puré de plátano verde (*cayeye* costeño).",
          "links": "Aves de Santa Marta: https://proaves.org",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Brown_violetear_%28Colibri_delphinae%29_Las_Tangaras.jpg/960px-Brown_violetear_%28Colibri_delphinae%29_Las_Tangaras.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Aves tropicales y tucanes de la Sierra Nevada",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Ramphastos_sulfuratus_Tuc%C3%A1n_caribe%C3%B1o_Keel-billed_Toucan_%288255321312%29.jpg/960px-Ramphastos_sulfuratus_Tuc%C3%A1n_caribe%C3%B1o_Keel-billed_Toucan_%288255321312%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Aves tropicales y tucanes de la Sierra Nevada",
              "desc": "Aves tropicales y tucanes de la Sierra Nevada"
            },
            {
              "caption": "Tradicionales fincas y plantaciones de café orgánico en las laderas de la Sierra Nevada (Minca)",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Fincas_cafeteras_-_Sierra_Nevada_-_panoramio.jpg/960px-Fincas_cafeteras_-_Sierra_Nevada_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail",
              "name": "Tradicionales fincas y plantaciones de café orgánico en las laderas de la Sierra Nevada (Minca)",
              "desc": "Tradicionales fincas y plantaciones de café orgánico en las laderas de la Sierra Nevada (Minca)"
            },
            {
              "caption": "Amanecer y cumbres nevadas sobre la Sierra Nevada de Santa Marta",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Amanecer_con_vistas_al_Pico_Crist%C3%B3bal_Col%C3%B3n_und_Pico_Sim%C3%B3n_Bol%C3%ADvar_en_la_Sierra_Nevada_de_Santa_Marta%2C_Departamento_de_Magdalena%2C_Colombia.jpg/960px-Amanecer_con_vistas_al_Pico_Crist%C3%B3bal_Col%C3%B3n_und_Pico_Sim%C3%B3n_Bol%C3%ADvar_en_la_Sierra_Nevada_de_Santa_Marta%2C_Departamento_de_Magdalena%2C_Colombia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Amanecer y cumbres nevadas sobre la Sierra Nevada de Santa Marta",
              "desc": "Amanecer y cumbres nevadas sobre la Sierra Nevada de Santa Marta"
            }
          ]
        },
        {
          "num": "Día 12",
          "title": "Del Caribe a Tayrona: Selva Húmeda Tropical, Cañaveral y Arrecifes",
          "transp": "Funicular/teleférico en Monserrate. Vehículo privado para la excursión hacia la sabana norte hasta Zipaquirá (48 km, 1h por trayecto).",
          "morning": "07:30 Ascenso temprano en funicular al Cerro de Monserrate (3.152 msnm): vistas panorámicas sobrecogedoras de toda la metrópolis de Bogotá. A las 10:00, visita guiada imprescindible al *Museo del Oro*: la mayor colección de orfebrería prehispánica del mundo con la legendaria Balsa Muisca de El Dorado, y paseo por las casonas coloniales de La Candelaria y el Museo Botero.",
          "afternoon": "13:30 Almuerzo tradicional de ajiaco santafereño. Traslado hacia la sabana norte hasta la monumental *Catedral de Sal de Zipaquirá*: colosal templo subterráneo excavado a 180 metros de profundidad en el corazón de una montaña de sal fósil de 250 millones de años. Recorrido por el sobrecogedor Vía Crucis tallado en roca salina y la nave central con su cruz monumental de 16 metros iluminada con tecnología LED.",
          "evening": "18:00 Regreso a Bogotá. Paseo nocturno por el vibrante barrio gastronómico de Usaquén o la Zona G y cena de autor en un restaurante andino.",
          "hotel": "Ecohabs Tayrona / Senda Koguiwa (2 cabañas de arquitectura bioclimática inspirada en las chozas tradicionales indígenas Kogui con terrazas privadas y techos de paja entre la vegetación tropical). Parque Tayrona.",
          "gastro": "*Pargo rojo* entero frito con arroz con coco dulce, patacones crujientes y ensalada de aguacate con lima.",
          "links": "Parque Nacional Natural Tayrona: https://www.parquesnacionales.gov.co/nuestros-parques/pnn-tayrona/",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/111_Tayrona_National_Park_Colombia.JPG/960px-111_Tayrona_National_Park_Colombia.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "Senderos selváticos entre ceibas milenarias en Tayrona",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/111_Tayrona_National_Park_Colombia.JPG/960px-111_Tayrona_National_Park_Colombia.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Senderos selváticos entre ceibas milenarias en Tayrona",
              "desc": "Senderos selváticos entre ceibas milenarias en Tayrona"
            },
            {
              "caption": "Costa bravía y cabañas de diseño tradicional en Cañaveral",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Ca%C3%B1averal_2_-_panoramio.jpg/960px-Ca%C3%B1averal_2_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Costa bravía y cabañas de diseño tradicional en Cañaveral",
              "desc": "Costa bravía y cabañas de diseño tradicional en Cañaveral"
            },
            {
              "caption": "Grandes bloques de granito y oleaje en Playa Arrecifes (Tayrona)",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/105_Playa_Arrecifes_Tayrona_Colombia.JPG/960px-105_Playa_Arrecifes_Tayrona_Colombia.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Grandes bloques de granito y oleaje en Playa Arrecifes (Tayrona)",
              "desc": "Grandes bloques de granito y oleaje en Playa Arrecifes (Tayrona)"
            }
          ]
        },
        {
          "num": "Día 13",
          "title": "El Gran Trekking de Tayrona: De La Piscina al Legendario Cabo San Juan del Guía",
          "transp": "Trekking a pie de día completo por el litoral del parque (aprox. 5 horas de caminata combinada entre senderos de arena, rocas y selva). Regreso por la tarde en lancha rápida a Taganga o a pie a El Zaino y traslado en van a Santa Marta (45').",
          "morning": "07:00 Salida matutina hacia La Piscina: un arrecife de coral natural sumergido que frena el oleaje caribeño creando una calma absoluta para practicar snorkel matutino con tortugas carey y peces de arrecife. A continuación, caminata de 40 minutos cruzando palmerales salvajes hasta llegar a la estampa más célebre de Colombia: *Cabo San Juan del Guía*.",
          "afternoon": "10:30 Descubrimiento de las dos playas gemelas de Cabo San Juan en forma de herradura, divididas por una colina de roca coronada por una choza de paja tradicional con hamacas colgantes. Baño en aguas turquesas y relax en la arena blanca. Excursión opcional de ascenso (1h30') por el empinado sendero de losas de piedra prehispánicas hacia las terrazas arqueológicas de *Pueblito Chairama*, antiguo centro ceremonial de la cultura Tayrona.",
          "evening": "15:00 Almuerzo marinero y comienzo del retorno. Regreso caminando hacia la salida de El Zaino o embarque en lancha rápida en Cabo San Juan que bordea los acantilados marinos del parque hasta la bahía de Taganga (45' de emocionante travesía marítima). Traslado al centro histórico de Santa Marta. Check-in y cena en el Callejón del Correo.",
          "hotel": "Casa de Leda, a Kali Hotel / Boutique Hotel Don Pepe (2 habitaciones en mansión histórica restaurada en el centro de Santa Marta, piscina en el patio interior). Calle 18 # 4-61, Santa Marta.",
          "gastro": "*Ceviche mixto* costeño (camarones y pulpo marinados en lima y salsa rosada tradicional colombiana) en *Restaurante Ouzo Santa Marta*.",
          "links": "Casa de Leda: https://kalihotels.com | Ouzo Restaurant: https://ouzosantamarta.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Cabo_San_Juan_de_Gu%C3%ADa_Santa_Marta_-_Colombia.JPG/960px-Cabo_San_Juan_de_Gu%C3%ADa_Santa_Marta_-_Colombia.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura"
          ],
          "photos": [
            {
              "caption": "La choza del peñón y las ensenadas de Cabo San Juan",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Cabo_San_Juan_de_Gu%C3%ADa_Santa_Marta_-_Colombia.JPG/960px-Cabo_San_Juan_de_Gu%C3%ADa_Santa_Marta_-_Colombia.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "La choza del peñón y las ensenadas de Cabo San Juan",
              "desc": "La choza del peñón y las ensenadas de Cabo San Juan"
            },
            {
              "caption": "Aguas calmas y arrecife de coral en Playa La Piscina (Tayrona)",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/La_Piscina_-_Parque_Tayrona_%284167790032%29.jpg/960px-La_Piscina_-_Parque_Tayrona_%284167790032%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Aguas calmas y arrecife de coral en Playa La Piscina (Tayrona)",
              "desc": "Aguas calmas y arrecife de coral en Playa La Piscina (Tayrona)"
            },
            {
              "caption": "Caminos empedrados y terrazas líticas en Pueblito Chairama (Tayrona)",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Camino_en_Pueblito_Chairama%2C_Parque_Tayrona.JPG/960px-Camino_en_Pueblito_Chairama%2C_Parque_Tayrona.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Caminos empedrados y terrazas líticas en Pueblito Chairama (Tayrona)",
              "desc": "Caminos empedrados y terrazas líticas en Pueblito Chairama (Tayrona)"
            }
          ]
        },
        {
          "num": "Día 14",
          "title": "De Santa Marta a Cartagena de Indias: La Reina Colonial del Caribe",
          "transp": "Van privada exclusiva con conductor desde Santa Marta por la Carretera Troncal del Caribe pasando por Ciénaga y Barranquilla hasta Cartagena de Indias (230 km, 4h de viaje cómodo bordeando el mar).",
          "morning": "08:30 Visita matinal a la *Quinta de San Pedro Alejandrino* en Santa Marta: hacienda histórica fundada en 1608 donde pasó sus últimos días y falleció el Libertador Simón Bolívar en 1830, rodeada por un jardín botánico con ceibas bicentenarias e iguanas en libertad.",
          "afternoon": "10:30 Inicio del viaje por carretera hacia Cartagena. Cruce del río Magdalena por el imponente puente Pumarejo en Barranquilla. Almuerzo de comida de mar en Puerto Colombia o a la entrada de Cartagena. Llegada a media tarde a Cartagena de Indias (declarada Patrimonio de la Humanidad por la UNESCO en 1984). Check-in en un hotel boutique señorial en el corazón amurallado o en el bohemio Getsemaní.",
          "evening": "17:30 Primer paseo al atardecer recorriendo el adarve superior de las murallas de piedra de coral. Cóctel de bienvenida en el emblemático *Café del Mar* o en el *Baluarte San Francisco Javier* mientras el sol se oculta en el horizonte del Mar Caribe al ritmo de música chill-out. Cena en *La Cevichería* (el rincón favorito de Anthony Bourdain en Cartagena).",
          "hotel": "Bastión Luxury Hotel / Hotel Casa San Agustín (2 habitaciones en un palacete del siglo XVI restaurado con patio de palmeras, piscina panorámica en la azotea frente a las cúpulas coloniales). Calle del Sargento Mayor, Centro Histórico, Cartagena.",
          "gastro": "*Cazuela de mariscos* cremosa con leche de coco y queso gratinado; ceviche de corvina con mango y cilantro en *La Cevichería*.",
          "links": "Bastión Hotel: https://www.bastionluxuryhotel.com | Cartagena UNESCO: https://whc.unesco.org/en/list/285/",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Clock_Tower_CTG_11_2019_1349.jpg/960px-Clock_Tower_CTG_11_2019_1349.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Cultura & Patrimonio",
            "Gran Traslado",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Torre del Reloj, entrada al recinto amurallado de Cartagena",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Clock_Tower_CTG_11_2019_1349.jpg/960px-Clock_Tower_CTG_11_2019_1349.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Torre del Reloj, entrada al recinto amurallado de Cartagena",
              "desc": "Torre del Reloj, entrada al recinto amurallado de Cartagena"
            },
            {
              "caption": "Casonas coloniales con balcones repletos de buganvillas",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/A_Colorful_Side_Street_View_Cartagena_Postcards_%28168852045%29.jpeg/960px-A_Colorful_Side_Street_View_Cartagena_Postcards_%28168852045%29.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Casonas coloniales con balcones repletos de buganvillas",
              "desc": "Casonas coloniales con balcones repletos de buganvillas"
            },
            {
              "caption": "Paseo sobre los baluartes de piedra frente al mar Caribe",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Las_Murallas%2C_the_walls_of_Cartagena%2C_Colombia_%2824216310329%29.jpg/960px-Las_Murallas%2C_the_walls_of_Cartagena%2C_Colombia_%2824216310329%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Paseo sobre los baluartes de piedra frente al mar Caribe",
              "desc": "Paseo sobre los baluartes de piedra frente al mar Caribe"
            }
          ]
        },
        {
          "num": "Día 15",
          "title": "Cartagena Colonial: Murallas, Inquisición y la Gran Fortaleza de San Felipe",
          "transp": "Recorridos a pie en el recinto histórico y traslado corto en taxi al castillo.",
          "morning": "08:30 Recorrido histórico a pie con historiador oficial: la Torre del Reloj Público (antigua entrada principal de la ciudadela), la Plaza de los Coches, la Plaza de la Aduana, la Iglesia y Claustro de San Pedro Claver (apóstol de los esclavos) y el Palacio de la Inquisición, con sus balcones de celosía y su museo histórico. Visita a Las Bóvedas (antiguas mazmorras militares convertidas en galerías de arte y artesanía).",
          "afternoon": "12:30 Almuerzo caribeño de alta escuela en *Celele* (clasificado entre los mejores restaurantes de América Latina por su rescate de la biodiversidad culinaria del Caribe colombiano). A las 15:00, visita exhaustiva al colosal *Castillo de San Felipe de Barajas*: la mayor fortaleza militar jamás construida por el Imperio Español en América. Exploración linterna en mano de su intrincado laberinto de túneles y galerías subterráneas diseñadas estratégicamente para repeler los ataques de piratas ingleses y franceses.",
          "evening": "18:00 Subida en taxi al Cerro de La Popa: convento agustino del siglo XVII situado en el punto más elevado de la ciudad, desde donde se domina una vista de 360° sobre la bahía de Cartagena, los rascacielos de Bocagrande y la ciudad amurallada. Cena nocturna en la romántica Plaza de Santo Domingo bajo la sombra de la escultura 'La Gorda' de Botero.",
          "hotel": "Bastión Luxury Hotel (segunda noche en Cartagena).",
          "gastro": "Menú degustación en *Celele*: flor de jamaica rellena de pato confitado, canelazo costeño y sorbete de corozo silvestre.",
          "links": "Restaurante Celele: https://celelerestaurante.com | Castillo San Felipe: https://fortificacionescartagena.com.co",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Castillo_San_Felipe_de_Barajas%2C_Cartagena_01.jpg/960px-Castillo_San_Felipe_de_Barajas%2C_Cartagena_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Cultura & Patrimonio"
          ],
          "photos": [
            {
              "caption": "La colosal fortaleza militar del Castillo San Felipe",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Castillo_San_Felipe_de_Barajas%2C_Cartagena_01.jpg/960px-Castillo_San_Felipe_de_Barajas%2C_Cartagena_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "La colosal fortaleza militar del Castillo San Felipe",
              "desc": "La colosal fortaleza militar del Castillo San Felipe"
            },
            {
              "caption": "Laberinto de túneles defensivos subterráneos en San Felipe",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Inside_the_tunnels_of_the_Castillio_de_San_Felipe%2C_Cartagena%2C_Colombia_%2824178266003%29.jpg/960px-Inside_the_tunnels_of_the_Castillio_de_San_Felipe%2C_Cartagena%2C_Colombia_%2824178266003%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Laberinto de túneles defensivos subterráneos en San Felipe",
              "desc": "Laberinto de túneles defensivos subterráneos en San Felipe"
            },
            {
              "caption": "Patios y arquitectura señorial en el Palacio de la Inquisición",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Colombia%2C_Cartagena%2C_Palacio_de_la_Inquisici%C3%B3n_%28Patio%29.jpg/960px-Colombia%2C_Cartagena%2C_Palacio_de_la_Inquisici%C3%B3n_%28Patio%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Patios y arquitectura señorial en el Palacio de la Inquisición",
              "desc": "Patios y arquitectura señorial en el Palacio de la Inquisición"
            }
          ]
        },
        {
          "num": "Día 16",
          "title": "Getsemaní Bohemio y Safari Gastronómico en el Mercado Popular de Bazurto",
          "transp": "Desplazamientos a pie por Getsemaní y en vehículo local hacia el mercado de Bazurto con chef y guía de seguridad.",
          "morning": "08:30 Recorrido a pie por el barrio de Getsemaní: el arrabal extramuros donde se fraguó la independencia de Cartagena en 1811. Paseo por el Callejón Angosto con su techo de sombrillas multicolores flotantes, la Calle de la Sierpe con sus murales de arte urbano reivindicativo y la Plaza de la Trinidad, donde los vecinos se reúnen a jugar al ajedrez y bailar champeta.",
          "afternoon": "11:00 Visita vivencial al caótico, frenético y fascinante *Mercado de Bazurto*: el corazón popular y comercial de Cartagena, ajeno al circuito turístico convencional. Acompañados por un cocinero local, recorrido por los puestos de pescado fresco del Caribe, carnicerías, yerberas de medicina tradicional y música champeta a todo volumen. Degustación en los fogones populares: *arroz con chipi-chipi*, sancocho de pescado en leña y carimañolas crujientes de yuca rellenas de carne.",
          "evening": "15:30 Regreso al hotel para descansar y refrescarse en la piscina de la azotea. A las 18:00, paseo en barco catamarán privado al atardecer por la bahía interna de Cartagena, con copas de vino blanco y música mientras se encienden las luces doradas de las fortificaciones. Cena en *Alma Restaurante* (cocina fusión caribeña en patio señorial con música en vivo).",
          "hotel": "Bastión Luxury Hotel (tercera noche en Cartagena).",
          "gastro": "Carimañolas de yuca con queso costeño; cazuela de langostinos al curry de coco en *Alma Restaurante*.",
          "links": "Alma Restaurante: https://almacolombia.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Caf%C3%A9_Mural_in_Cartagena_06.jpg/960px-Caf%C3%A9_Mural_in_Cartagena_06.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Murales artísticos y callejones bohemios en Getsemaní",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Caf%C3%A9_Mural_in_Cartagena_06.jpg/960px-Caf%C3%A9_Mural_in_Cartagena_06.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Murales artísticos y callejones bohemios en Getsemaní",
              "desc": "Murales artísticos y callejones bohemios en Getsemaní"
            },
            {
              "caption": "Puestos tradicionales de mariscos y gastronomía popular en el Mercado de Bazurto",
              "name": "Puestos tradicionales de mariscos y gastronomía popular en el Mercado de Bazurto",
              "desc": "Puestos tradicionales de mariscos y gastronomía popular en el Mercado de Bazurto",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Mercado_de_Bazurto.jpg/960px-Mercado_de_Bazurto.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail"
            },
            {
              "caption": "Atardecer frente al horizonte marino desde las murallas",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Baluarte_de_Santo_Domingo_%28Cafe_del_mar%29_%28cropped%29.jpg/960px-Baluarte_de_Santo_Domingo_%28Cafe_del_mar%29_%28cropped%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Atardecer frente al horizonte marino desde las murallas",
              "desc": "Atardecer frente al horizonte marino desde las murallas"
            }
          ]
        },
        {
          "num": "Día 17",
          "title": "San Basilio de Palenque (UNESCO): El Primer Pueblo Libre de América",
          "transp": "Van privada con aire acondicionado y guía experto desde Cartagena hacia el sur, adentrándose en las faldas de los Montes de María (55 km, 1h20' de trayecto).",
          "morning": "08:00 Excursión profunda a San Basilio de Palenque, fundado a finales del siglo XVI por esclavos cimarrones liderados por Benkos Biohó que escaparon de las cadenas españolas, convirtiéndose en el primer pueblo libre de América (decretado formalmente libre por la Corona Española en 1691) y proclamado por la UNESCO como Obra Maestra del Patrimonio Oral e Inmaterial de la Humanidad.",
          "afternoon": "09:30 Recibimiento por los líderes de la comunidad palenquera: recorrido por las calles de tierra aprendiendo sobre la lengua palenquera (la única lengua criolla con base léxica española y gramática bantú africana que sobrevive en el mundo). Visita a la casa de la medicina tradicional, taller de trenzado de cabello (las mujeres explican cómo los peinados africanos servían de mapas secretos de fuga con rutas y semillas escondidas en el pelo) y clase práctica de percusión con los legendarios tambores *Alegre* y *Llamador* al ritmo del lumbalú y la champeta criolla.",
          "evening": "13:30 Almuerzo comunitario tradicional elaborado por las célebres 'palenqueras': pescado fresco en salsa de coco con arroz de bledo servido en hoja de bijao, acompañado de dulces típicos artesanales de ajonjolí, coco y panela (*alegrías* y *cocadas*). Regreso a Cartagena a media tarde. Noche de descanso en la ciudad amurallada.",
          "hotel": "Bastión Luxury Hotel (cuarta noche en Cartagena).",
          "gastro": "Almuerzo tradicional palenquero en hoja de bijao con arroz con coco frito negrito y dulce artesanal de alegría palenquera.",
          "links": "Palenque UNESCO: https://whc.unesco.org/en/list/1101",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Colombia%2C_Cartagena%2C_Fruit_seller.jpg/960px-Colombia%2C_Cartagena%2C_Fruit_seller.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "Tradicionales palenqueras con sus trajes multicolores y frutas",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Colombia%2C_Cartagena%2C_Fruit_seller.jpg/960px-Colombia%2C_Cartagena%2C_Fruit_seller.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Tradicionales palenqueras con sus trajes multicolores y frutas",
              "desc": "Tradicionales palenqueras con sus trajes multicolores y frutas"
            },
            {
              "caption": "Monumento a Benkos Biohó con cadenas rotas en Palenque",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Estatua_de_Benkos_Bioh%C3%B3_-_panoramio_%281%29.jpg/960px-Estatua_de_Benkos_Bioh%C3%B3_-_panoramio_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Monumento a Benkos Biohó con cadenas rotas en Palenque",
              "desc": "Monumento a Benkos Biohó con cadenas rotas en Palenque"
            },
            {
              "caption": "Vida cotidiana y patrimonio inmaterial afrocolombiano en las calles de San Basilio de Palenque",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/San_basilio_de_palenque_-_panoramio_%281%29.jpg/960px-San_basilio_de_palenque_-_panoramio_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail",
              "name": "Vida cotidiana y patrimonio inmaterial afrocolombiano en las calles de San Basilio de Palenque",
              "desc": "Vida cotidiana y patrimonio inmaterial afrocolombiano en las calles de San Basilio de Palenque"
            }
          ]
        },
        {
          "num": "Día 18",
          "title": "Salto al Archipiélago de las Islas del Rosario (Isla Grande): Arrecifes de Coral",
          "transp": "Lancha rápida motora privada exclusiva desde el Muelle de la Bodeguita en Cartagena surcando las aguas del Caribe hasta Isla Grande en el Parque Nacional Natural Corales del Rosario (travesía de 45 minutos).",
          "morning": "08:30 Embarque en la lancha privada. La travesía marítima cruza la bahía de Cartagena pasando entre los fuertes coloniales de San José y San Fernando de Bocachica que custodiaban la entrada del puerto. Llegada a las aguas cristalinas de tono verde esmeralda y turquesa del Parque Natural Corales del Rosario.",
          "afternoon": "10:00 Check-in en el eco-resort frente al mar rodeado de manglares y arrecifes. Desembarco directo en el muelle de madera. Salida inmediata en barco con instructor para realizar una sesión guiada de snorkel en el arrecife exterior protegido: nado sobre jardines de coral cerebro, corales cuerno de alce, gorgonias flotantes, rayas y peces loro de vivos colores. Almuerzo de langosta caribeña fresca a la parrilla sobre la playa.",
          "evening": "Tarde de relax en las tumbonas bajo las palmeras o baño en las calas de arena blanca de Isla Grande (Playa Bonita o Playa Libre). Cóctel de bienvenida de coco fresco al atardecer. Cena frente al mar iluminados por velas y el sonido de las olas.",
          "hotel": "Hotel San Pedro de Majagua / Coralina Island (2 bungalows independientes con terraza privada, suelo de madera de teca, acceso directo al mar y club náutico propio). Isla Grande, Islas del Rosario.",
          "gastro": "*Langosta caribeña* a la brasa con mantequilla de ajo y limón, arroz con coco y patacones crujientes.",
          "links": "Hotel San Pedro de Majagua: https://www.hotelmajagua.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Cocolise_Isla_Resort%2C_Islas_del_Rosario_%2823938738774%29.jpg/960px-Cocolise_Isla_Resort%2C_Islas_del_Rosario_%2823938738774%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Cultura & Patrimonio",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "Lancha rápida hacia el archipiélago de las Islas del Rosario",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Cocolise_Isla_Resort%2C_Islas_del_Rosario_%2823938738774%29.jpg/960px-Cocolise_Isla_Resort%2C_Islas_del_Rosario_%2823938738774%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Lancha rápida hacia el archipiélago de las Islas del Rosario",
              "desc": "Lancha rápida hacia el archipiélago de las Islas del Rosario"
            },
            {
              "caption": "Aguas cristalinas y arena blanca en Playa Blanca y las islas",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/012_Playa_Blanca_from_the_Boat.JPG/960px-012_Playa_Blanca_from_the_Boat.JPG",
              "name": "Aguas cristalinas y arena blanca en Playa Blanca y las islas",
              "desc": "Aguas cristalinas y arena blanca en Playa Blanca y las islas"
            },
            {
              "caption": "Arrecife de coral cuerno de alce y fauna marina en aguas cristalinas del Caribe",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Elkhorn_Coral_with_a_Yellowtail_Damselfish_in_the_Caribbean_Sea_in_Cura%C3%A7ao.jpg/960px-Elkhorn_Coral_with_a_Yellowtail_Damselfish_in_the_Caribbean_Sea_in_Cura%C3%A7ao.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail",
              "name": "Arrecife de coral cuerno de alce y fauna marina en aguas cristalinas del Caribe",
              "desc": "Arrecife de coral cuerno de alce y fauna marina en aguas cristalinas del Caribe"
            }
          ]
        },
        {
          "num": "Día 19",
          "title": "Islas del Rosario: Laberintos de Manglar y Noche Mágica de Plancton Bioluminiscente",
          "transp": "Kayaks de mar dobles y lancha tradicional de madera para la excursión nocturna.",
          "morning": "08:30 Travesía matutina en kayak de mar guiada por un barquero nativo de la comunidad de Orika: navegación silenciosa adentrándose por los estrechos canales naturales de manglar rojo que cruzan el corazón de Isla Grande hasta la escondida *Laguna del Silencio*. Observación de esponjas marinas, estrellas de mar gigantes y aves marinas pescadoras (garzas blancas y fragatas).",
          "afternoon": "12:00 Almuerzo marinero en la aldea comunitaria de Orika, conociendo los proyectos locales de reforestación de manglares y protección de tortugas marinas. Tarde libre para practicar paddle surf, submarinismo en pecios cercanos o simplemente descansar con un buen libro de Gabriel García Márquez bajo la sombra tropical.",
          "evening": "19:30 Experiencia Cumbre Nocturna: Excursión en barca tradicional sin luces artificiales hacia la *Laguna Encantada*. Baño nocturno en aguas cálidas para presenciar el fenómeno mágico del *Plancton Bioluminiscente*: millones de microorganismos dinoflagelados que reaccionan al movimiento emitiendo destellos de luz fosforescente verde azulada (cada brazada, giro de la mano o pataleo bajo el agua crea una estela luminosa como de estrellas líquidas en la oscuridad). Regreso al resort con la emoción a flor de piel.",
          "hotel": "Hotel San Pedro de Majagua / Coralina Island (segunda noche en Islas del Rosario).",
          "gastro": "Cena romántica en el muelle: pescado mero al vapor con jengibre y coco fresco con chips de plátano verde.",
          "links": "Reserva Natural Corales del Rosario: https://www.parquesnacionales.gov.co",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Boats_in_La_Boquilla.jpg/960px-Boats_in_La_Boquilla.jpg",
          "tags": [
            "Naturaleza & Aventura"
          ],
          "photos": [
            {
              "caption": "Navegación tradicional en canoa por los manglares costeros",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Boats_in_La_Boquilla.jpg/960px-Boats_in_La_Boquilla.jpg",
              "name": "Navegación tradicional en canoa por los manglares costeros",
              "desc": "Navegación tradicional en canoa por los manglares costeros"
            },
            {
              "caption": "Lagunas costeras y santuarios de manglar en el litoral caribeño",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Cocolise_Isla_Resort%2C_Islas_del_Rosario_%2823938722454%29.jpg/960px-Cocolise_Isla_Resort%2C_Islas_del_Rosario_%2823938722454%29.jpg",
              "name": "Lagunas costeras y santuarios de manglar en el litoral caribeño",
              "desc": "Lagunas costeras y santuarios de manglar en el litoral caribeño"
            },
            {
              "caption": "El mágico resplandor del plancton bioluminiscente en la laguna nocturna (Laguna Encantada)",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Blue_Tide-_Noctiluca.jpeg/960px-Blue_Tide-_Noctiluca.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El mágico resplandor del plancton bioluminiscente en la laguna nocturna (Laguna Encantada)",
              "desc": "El mágico resplandor del plancton bioluminiscente en la laguna nocturna (Laguna Encantada)"
            }
          ]
        },
        {
          "num": "Día 20",
          "title": "Regreso a Cartagena: Bocagrande, Joyería de Esmeraldas y Cena de Gala",
          "transp": "Lancha rápida desde las Islas del Rosario de regreso al Muelle de la Bodeguita en Cartagena (45 min). Traslados locales en vehículo privado por Bocagrande y el centro amurallado.",
          "morning": "07:30 Ascenso temprano en funicular al Cerro de Monserrate (3.152 msnm): vistas panorámicas sobrecogedoras de toda la metrópolis de Bogotá. A las 10:00, visita guiada imprescindible al *Museo del Oro*: la mayor colección de orfebrería prehispánica del mundo con la legendaria Balsa Muisca de El Dorado, y paseo por las casonas coloniales de La Candelaria y el Museo Botero.",
          "afternoon": "13:30 Almuerzo tradicional de ajiaco santafereño. Traslado hacia la sabana norte hasta la monumental *Catedral de Sal de Zipaquirá*: colosal templo subterráneo excavado a 180 metros de profundidad en el corazón de una montaña de sal fósil de 250 millones de años. Recorrido por el sobrecogedor Vía Crucis tallado en roca salina y la nave central con su cruz monumental de 16 metros iluminada con tecnología LED.",
          "evening": "18:00 Regreso a Bogotá. Paseo nocturno por el vibrante barrio gastronómico de Usaquén o la Zona G y cena de autor en un restaurante andino.",
          "hotel": "Bastión Luxury Hotel / Sofitel Legend Santa Clara (2 habitaciones de categoría superior en pleno centro amurallado).",
          "gastro": "Menú degustación en *Restaurante 1621*: corvina en costra de achiote con espuma de plátano maduro y volcán de chocolate amargo de Tumaco.",
          "links": "Restaurante 1621 Santa Clara: https://www.sofitellegendsantaclara.com/restaurante-1621/",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Bocagrande_skyline%2C_Cartagena%2C_Colombia.jpg/960px-Bocagrande_skyline%2C_Cartagena%2C_Colombia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gran Traslado",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Rascacielos de Bocagrande emergiendo sobre la bahía",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Bocagrande_skyline%2C_Cartagena%2C_Colombia.jpg/960px-Bocagrande_skyline%2C_Cartagena%2C_Colombia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Rascacielos de Bocagrande emergiendo sobre la bahía",
              "desc": "Rascacielos de Bocagrande emergiendo sobre la bahía"
            },
            {
              "caption": "Auténticas esmeraldas colombianas talladas con su característico e intenso color verde Muzo",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/5_Emeralds_from_Colombia.JPG/960px-5_Emeralds_from_Colombia.JPG?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail",
              "name": "Auténticas esmeraldas colombianas talladas con su característico e intenso color verde Muzo",
              "desc": "Auténticas esmeraldas colombianas talladas con su característico e intenso color verde Muzo"
            },
            {
              "caption": "Ambiente colonial nocturno y terrazas iluminadas en la Plaza de San Pedro Claver (Cartagena)",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Plaza_de_San_Pedro_Claver%2C_Cartagena_01.jpg/960px-Plaza_de_San_Pedro_Claver%2C_Cartagena_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail",
              "name": "Ambiente colonial nocturno y terrazas iluminadas en la Plaza de San Pedro Claver (Cartagena)",
              "desc": "Ambiente colonial nocturno y terrazas iluminadas en la Plaza de San Pedro Claver (Cartagena)"
            }
          ]
        },
        {
          "num": "Día 21",
          "title": "Cartagena de Indias: Claustro de La Popa y Vuelo de Regreso a España",
          "transp": "Vehículo privado para la subida al Convento de La Popa y traslado final al Aeropuerto Internacional Rafael Núñez de Cartagena (CTG, 15-20 min).",
          "morning": "07:30 Ascenso temprano en funicular al Cerro de Monserrate (3.152 msnm): vistas panorámicas sobrecogedoras de toda la metrópolis de Bogotá. A las 10:00, visita guiada imprescindible al *Museo del Oro*: la mayor colección de orfebrería prehispánica del mundo con la legendaria Balsa Muisca de El Dorado, y paseo por las casonas coloniales de La Candelaria y el Museo Botero.",
          "afternoon": "13:30 Almuerzo tradicional de ajiaco santafereño. Traslado hacia la sabana norte hasta la monumental *Catedral de Sal de Zipaquirá*: colosal templo subterráneo excavado a 180 metros de profundidad en el corazón de una montaña de sal fósil de 250 millones de años. Recorrido por el sobrecogedor Vía Crucis tallado en roca salina y la nave central con su cruz monumental de 16 metros iluminada con tecnología LED.",
          "evening": "18:00 Regreso a Bogotá. Paseo nocturno por el vibrante barrio gastronómico de Usaquén o la Zona G y cena de autor en un restaurante andino.",
          "hotel": "Vuelo nocturno transatlántico con destino a España.",
          "gastro": "Último tentempié en el aeropuerto: arequipe artesanal con obleas crujientes y café Juan Valdez edición especial Sierra Nevada.",
          "links": "Aeropuerto El Dorado Bogotá: https://eldorado.aero",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Convento_de_Santa_Cruz_de_la_Popa_03.jpg/960px-Convento_de_Santa_Cruz_de_la_Popa_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "Claustro colonial y vistas panorámicas de Cartagena desde La Popa",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Convento_de_Santa_Cruz_de_la_Popa_03.jpg/960px-Convento_de_Santa_Cruz_de_la_Popa_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Claustro colonial y vistas panorámicas de Cartagena desde La Popa",
              "desc": "Claustro colonial y vistas panorámicas de Cartagena desde La Popa"
            },
            {
              "caption": "Salida internacional desde el aeropuerto El Dorado",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Apron_or_Ramp_internacional_airport_%22El_Dorado%22%2C_Bogot%C3%A1%2C_Colombia_-_Landing_View_2.jpg/960px-Apron_or_Ramp_internacional_airport_%22El_Dorado%22%2C_Bogot%C3%A1%2C_Colombia_-_Landing_View_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Salida internacional desde el aeropuerto El Dorado",
              "desc": "Salida internacional desde el aeropuerto El Dorado"
            },
            {
              "caption": "Vistas aéreas de las cordilleras andinas",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/The_Andes_as_seen_from_an_airplane_%2816732027895%29.jpg/960px-The_Andes_as_seen_from_an_airplane_%2816732027895%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Vistas aéreas de las cordilleras andinas",
              "desc": "Vistas aéreas de las cordilleras andinas"
            }
          ]
        }
      ]
    },
    {
      "id": "china",
      "name": "China",
      "flag": "🇨🇳",
      "title": "Imperio Milenario, Montañas de Avatar y la Meca Tecnológica de Shenzhen",
      "subtitle": "21 Días combinando alta velocidad Fuxing, trekking alpino, pilares kársticos y el Silicon Valley del hardware",
      "doc_file": "Itinerario_China_3_Semanas.docx",
      "hero_img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/20090529_Great_Wall_8185.jpg/1280px-20090529_Great_Wall_8185.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      "stats": {
        "duration": "21 Días / 20 Noches",
        "pace": "Alto / Muy Dinámico",
        "culture_pct": "40% Imperial",
        "nature_pct": "40% Naturaleza",
        "budget": "3.170€ - 3.770€ / persona (todo incl.)",
        "best_season": "Septiembre a Noviembre / Abril a Junio",
        "budget_note": "Expedición Familiar Confort: ~3.170€ - 3.770€ p.p. (Ref. suelo mochilero extremo: ~1.934€)"
      },
      "dna_match": "Adaptado con vuestra pasión declarada por la tecnología: enlazamos las cumbres históricas de China (Ciudad Prohibida, Gran Muralla de Jinshanling, 8.000 Guerreros de Xi'an) y sus paisajes de leyenda (trekking de 2 días en el cañón del Salto del Tigre, pilares flotantes de Avatar en Zhangjiajie y balsa en Yangshuo) con una inmersión futurista en Shenzhen, la capital mundial del hardware y la robótica. En apenas 3 horas de tren bala directo desde Yangshuo llegaréis a Huaqiangbei (el mayor mercado de electrónica del mundo), la sede mundial de drones DJI con jaulas de vuelo, el mirador del rascacielos Ping An (599m), taxis autónomos sin conductor y entrega de comida con drones.",
      "gallery": [
        {
          "title": "Gran Muralla de Jinshanling",
          "location": "Hebei / Pekín",
          "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/20090529_Great_Wall_8185.jpg/1280px-20090529_Great_Wall_8185.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "desc": "Tramo semi-salvaje y fotogénico que serpentea por las crestas sin aglomeraciones."
        },
        {
          "title": "Montañas de Avatar (Zhangjiajie)",
          "location": "Wulingyuan, Hunan",
          "img": "https://upload.wikimedia.org/wikipedia/commons/1/11/Bailong_Elevator.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
          "desc": "Más de 3.000 pilares verticales de arenisca cuarzosa flotando sobre la niebla."
        },
        {
          "title": "Shenzhen: La Capital Tecnológica",
          "location": "Nanshan & Futian, Guangdong",
          "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Entrance_of_Huaqiangbei%2C_2017.jpg/1280px-Entrance_of_Huaqiangbei%2C_2017.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "desc": "El 'Silicon Valley del Hardware': Huaqiangbei, DJI, taxis autónomos y Ping An (599m)."
        },
        {
          "title": "Garganta del Salto del Tigre",
          "location": "Shangri-La / Lijiang, Yunnan",
          "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Yunnan_China_Tiger-Leaping-Gorge-05.jpg/1280px-Yunnan_China_Tiger-Leaping-Gorge-05.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "desc": "Uno de los cañones más profundos de la Tierra con el río Yangtsé rugiendo en el fondo."
        },
        {
          "title": "Crucero del Río Li & Yangshuo",
          "location": "Guangxi",
          "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Li_River_cruise_from_Guilin_to_Yangshuo.JPG/1280px-Li_River_cruise_from_Guilin_to_Yangshuo.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "desc": "Colinas kársticas cónicas de ensueño inmortalizadas en el billete de 20 yuanes."
        },
        {
          "title": "The Bund & Skyline de Shanghái",
          "location": "Shanghái",
          "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Pudong_Shanghai_November_2017_panorama.jpg/1280px-Pudong_Shanghai_November_2017_panorama.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "desc": "Paseo colonial de los años 20 frente al bosque de rascacielos iluminados de Pudong."
        }
      ],
      "gastro": [
        {
          "name": "Pato Laqueado Pekinés",
          "desc": "Piel dorada ultra crujiente servida en finas crepes al vapor con salsa dulce de judía.",
          "tag": "Pekín"
        },
        {
          "name": "Dim Sum Cantonés de Autor",
          "desc": "Bocaditos al vapor de marisco y cerdo servidos en mesas inteligentes en Shenzhen.",
          "tag": "Shenzhen"
        },
        {
          "name": "Sichuan Hotpot Volcánico",
          "desc": "Caldero con caldo aromatizado con decenas de chiles y pimienta entumecedora de Sichuan.",
          "tag": "Chengdu"
        },
        {
          "name": "Xiaolongbao al Vapor",
          "desc": "Bocaditos de masa finísima rellenos de carne picada y caldo hirviendo de jamón curado.",
          "tag": "Shanghái"
        }
      ],
      "highlights": [
        "Inmersión en los misterios imperiales de la Ciudad Prohibida y el Templo del Cielo en Pekín",
        "Gran Trekking panorámico de 4 horas por la sección salvaje de la Gran Muralla en Jinshanling",
        "Viaje a 350 km/h en tren bala Fuxing hasta la cuna de la Ruta de la Seda en Xi'an",
        "Frente a frente con los 8.000 Guerreros de Terracota del Emperador Qin (UNESCO)",
        "Recorrido completo en bicicleta sobre los 14 km de la colosal Muralla Antigua de Xi'an",
        "Encuentro matutino con los Pandas Gigantes en Chengdu y el Gran Buda de Leshan de 71 metros",
        "El legendario Trekking de 2 días por la Garganta del Salto del Tigre (28 curvas y Halfway)",
        "Subida vertiginosa en el Ascensor Bailong de 326m y pilares flotantes de Avatar en Zhangjiajie",
        "Cruce del puente colgante de cristal y descenso de 999 escalones en Tianmen",
        "Crucero por el Río Li y balsas tradicionales de bambú por el río Yulong en Yangshuo",
        "Shenzhen: peregrinaje tecnológico a Huaqiangbei (la meca del hardware) y mirador Ping An (599m)",
        "Sede mundial de drones DJI con jaulas de vuelo y entrega de comida con drones en parques",
        "Shanghái de vanguardia y traslado al aeropuerto en el tren de levitación magnética Maglev a 431 km/h"
      ],
      "days": [
        {
          "num": "Día 1",
          "title": "Llegada a Pekín (Beijing) – Primeros Pasos en los Hutongs y Pato Laqueado",
          "transp": "Llegada al Aeropuerto Internacional de Pekín Capital (PEK) o Daxing (PKX). Traslado en van privada climatizada o Airport Express Train hasta el centro histórico de la ciudad (trayecto: 45'-1h).",
          "morning": "Llegada a Pekín. Trámites de control de pasaportes (España cuenta con exención de visado para estancias turísticas de hasta 15 días, consultar actualización para 21 días o trámite de visado turístico estándar L). Activación de eSIM con VPN integrada (Astrill / LetsVPN) para navegación sin censura. Retirada de yuanes (CNY) o vinculación directa de tarjetas Visa/Mastercard a Alipay / WeChat Pay.",
          "afternoon": "Check-in en el hotel boutique ubicado dentro de un patio tradicional cuadrangular restaurado (*siheyuan*) en el laberinto de los hutongs históricos. Tiempo de descanso para recuperarse del vuelo. Paseo vespertino a pie por los callejones peatonales de Nanluoguxiang y los lagos de Shichahai (Houhai), bordeados de sauces llorones, puentes de piedra arqueados y pequeñas casas de té.",
          "evening": "19:00 Gran Cena de Bienvenida degustando el auténtico *Pato Laqueado a la Pekinesa* tradicional en el prestigioso restaurante *Siji Minfu* (frente a la Ciudad Prohibida) o en *Da Dong*: el maestro asador corta la piel crujiente dorada y la carne tierna en 108 láminas frente a vuestra mesa, enseñando a enrollarlas en finas tortitas al vapor con pepino en juliana, cebolleta y salsa dulce fermentada de judía.",
          "hotel": "The Orchid Hotel Beijing / Shichahai Shadow Art Performance Hotel (2 habitaciones con encanto tradicional en patio con jardines y terraza en el tejado). Baochao Hutong, Dongcheng, Pekín.",
          "gastro": "*Pato Laqueado a la Pekinesa* (Beijing Kao Ya) con consomé de pato y piel crujiente mojada en azúcar blanco en *Siji Minfu*.",
          "links": "The Orchid Hotel: https://theorchid.com.cn | Metro de Pekín: https://www.bjsubway.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Colorful_hutong_gate_in_Beijing.jpg/960px-Colorful_hutong_gate_in_Beijing.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Gran Traslado",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Patios tradicionales siheyuan en los callejones Hutong",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Colorful_hutong_gate_in_Beijing.jpg/960px-Colorful_hutong_gate_in_Beijing.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Patios tradicionales siheyuan en los callejones Hutong",
              "desc": "Patios tradicionales siheyuan en los callejones Hutong"
            },
            {
              "caption": "La majestuosa Torre del Tambor en el eje histórico de Pekín",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Beijing_Drum_Tower.jpg/960px-Beijing_Drum_Tower.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "La majestuosa Torre del Tambor en el eje histórico de Pekín",
              "desc": "La majestuosa Torre del Tambor en el eje histórico de Pekín"
            },
            {
              "caption": "Ceremonia del pato laqueado tradicional pekín",
              "url": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Quanjude_roastduck.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
              "name": "Ceremonia del pato laqueado tradicional pekín",
              "desc": "Ceremonia del pato laqueado tradicional pekín"
            }
          ]
        },
        {
          "num": "Día 2",
          "title": "Pekín Imperial: Ciudad Prohibida (UNESCO), Parque Jingshan y Templo del Cielo",
          "transp": "Desplazamientos integrados en el moderno metro de Pekín y caminata guiada.",
          "morning": "07:30 Entrada por la imponente Plaza de Tiananmen (la plaza pública más grande del mundo) bajo el icónico retrato de Mao. Acceso a la colosal *Ciudad Prohibida* (Palacio Imperial de las dinastías Ming y Qing, declarado Patrimonio de la Humanidad por la UNESCO): visita exhaustiva de 4 horas recorriendo el eje ceremonial central (Puerta del Mediodía, Salón de la Suprema Armonía, Salón de la Armonía Media y Salón de la Armonía Preservada), así como los patios privados de las concubinas, el Jardín Imperial y la Galería de los Tesoros con los sellos de jade imperiales.",
          "afternoon": "12:00 Salida por la Puerta Norte y subida a la Colina del Carbón en el *Parque Jingshan*: la atalaya más elevada del centro histórico, desde donde se contempla la vista panorámica más espectacular y conmovedora sobre el océano infinito de tejados de teja amarilla dorada de la Ciudad Prohibida. Almuerzo tradicional en *Deyuan Roast Duck* o fideos de pasta de soja frita (*Zhajiangmian*).",
          "evening": "14:30 Visita al *Templo del Cielo* (Tiantan): obra maestra absoluta de la arquitectura ritual Ming, donde los emperadores oraban dos veces al año por las cosechas. Recorrido por el Salón de Oración por las Buenas Cosechas (erigido enteramente en madera policromada sin un solo clavo), la Bóveda Imperial del Cielo y la Piedra del Triple Eco. Paseo por los jardines del parque observando a los jubilados locales practicando tai chi, caligrafía con agua en el suelo y danzas tradicionales. Cena ligera en los hutongs.",
          "hotel": "The Orchid Hotel Beijing (segunda noche en Pekín).",
          "gastro": "*Zhajiangmian* (fideos gruesos frescos con salsa densa de cerdo y soja fermentada con brotes de soja y rábano crujiente).",
          "links": "Ciudad Prohibida Oficial: https://www.dpm.org.cn | Templo del Cielo: https://whc.unesco.org/en/list/881/",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Beijing_China_Forbidden-City-03.jpg/960px-Beijing_China_Forbidden-City-03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio"
          ],
          "photos": [
            {
              "caption": "El Salón de la Suprema Armonía en la Ciudad Prohibida (UNESCO)",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Hall_of_Supreme_Harmony.JPG/960px-Hall_of_Supreme_Harmony.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El Salón de la Suprema Armonía en la Ciudad Prohibida (UNESCO)",
              "desc": "El Salón de la Suprema Armonía en la Ciudad Prohibida (UNESCO)"
            },
            {
              "caption": "Panorámica de los tejados dorados de la Ciudad Prohibida desde la colina de Jingshan",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Forbidden_City_from_Jingshan_Park_%286349214639%29.jpg/960px-Forbidden_City_from_Jingshan_Park_%286349214639%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail",
              "name": "Panorámica de los tejados dorados de la Ciudad Prohibida desde la colina de Jingshan",
              "desc": "Panorámica de los tejados dorados de la Ciudad Prohibida desde la colina de Jingshan"
            },
            {
              "caption": "El Salón de Oración por las Buenas Cosechas en el Templo del Cielo",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/20200110_Temple_of_Heaven-1.jpg/960px-20200110_Temple_of_Heaven-1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El Salón de Oración por las Buenas Cosechas en el Templo del Cielo",
              "desc": "El Salón de Oración por las Buenas Cosechas en el Templo del Cielo"
            }
          ]
        },
        {
          "num": "Día 3",
          "title": "La Gran Muralla Salvaje: Gran Trekking Panorámico de Jinshanling a Simatai",
          "transp": "Vehículo privado con conductor exclusivo desde Pekín hacia el noreste, adentrándose en las montañas de Hebei hasta la sección de Jinshanling (140 km, 2h30' por trayecto).",
          "morning": "06:30 Salida muy temprana de Pekín para llegar a primera hora a la sección de *Jinshanling*: a diferencia del tramo excesivamente turístico y abarrotado de Badaling, Jinshanling ofrece el equilibrio perfecto entre torres de vigilancia de ladrillo y granito magníficamente conservadas y tramos semi-salvajes cubiertos de vegetación, serpentando sobre las afiladas crestas de montañas agrestes sin aglomeraciones.",
          "afternoon": "09:30 Gran Trekking por la Gran Muralla (4 horas de caminata, 7 km de longitud, continuos subibajas de escalones empinados): paso por la Torre Zhuanduokou, la Torre General, la Torre de los Cinco Ojos y la Torre de la Pequeña Flor de Loto. Cada recodo ofrece perspectivas visuales de vértigo sobre la muralla perdiéndose en el horizonte brumoso. Sesión de picnic ligero sobre las losas de piedra centenarias de una de las torres de vigilancia.",
          "evening": "14:30 Descenso en teleférico o por sendero rural. Almuerzo montañés campesino en una aldea al pie de la muralla (verduras silvestres salteadas, huevos de corral y tofu a la cazuela). Regreso a Pekín a media tarde. A las 19:30, asistencia opcional al asombroso espectáculo de acrobacias tradicionales en el *Chaoyang Theatre* (equilibristas, contorsionistas y la jaula con 8 motoristas girando a toda velocidad).",
          "hotel": "The Orchid Hotel Beijing (tercera noche en Pekín).",
          "gastro": "Platos caseros de montaña en la base de la muralla: berenjena caramelizada con ajo y jengibre (*Yuxiang Qiezi*) y albóndigas de cordero.",
          "links": "Gran Muralla Jinshanling: http://www.jinshanlinggreatwall.com | Chaoyang Theatre: https://www.chaoyangtheatre.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/20090529_Great_Wall_8125.jpg/960px-20090529_Great_Wall_8125.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura"
          ],
          "photos": [
            {
              "caption": "Torres de vigilancia serpenteando los riscos de Jinshanling",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/20090529_Great_Wall_8125.jpg/960px-20090529_Great_Wall_8125.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Torres de vigilancia serpenteando los riscos de Jinshanling",
              "desc": "Torres de vigilancia serpenteando los riscos de Jinshanling"
            },
            {
              "caption": "Tramo escarpado y salvaje de la Gran Muralla en Simatai",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/20090529_Great_Wall_Simatai_8327.jpg/960px-20090529_Great_Wall_Simatai_8327.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Tramo escarpado y salvaje de la Gran Muralla en Simatai",
              "desc": "Tramo escarpado y salvaje de la Gran Muralla en Simatai"
            },
            {
              "caption": "Destreza milenaria y equilibrios en el célebre espectáculo de acrobacias de Pekín",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Plate_Spinning_at_Acrobatics_show_in_Beijing_%285399920080%29.jpg/960px-Plate_Spinning_at_Acrobatics_show_in_Beijing_%285399920080%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail",
              "name": "Destreza milenaria y equilibrios en el célebre espectáculo de acrobacias de Pekín",
              "desc": "Destreza milenaria y equilibrios en el célebre espectáculo de acrobacias de Pekín"
            }
          ]
        },
        {
          "num": "Día 4",
          "title": "Palacio de Verano, Templo de los Lamas y Tren de Alta Velocidad Fuxing a Xi'an",
          "transp": "Visitas matinales en metro/van. A las 15:30, traslado a la estación Beijing West (Beijingxi). Embarque en el Tren de Alta Velocidad Fuxing G-Train (velocidad de crucero 350 km/h, trayecto de 1.200 km en solo 4h20' de confort absoluto). Llegada a la estación Xi'an North (Xi'anbei) a las 20:30. Traslado privado al hotel.",
          "morning": "08:00 Visita matinal al *Palacio de Verano* (Yiheyuan): el gigantesco refugio estival de la corte imperial. Paseo por el Gran Corredor (galería de madera lacada de 728 metros decorada con más de 14.000 pinturas tradicionales), el curioso Barco de Mármol de la emperatriz Cixi y paseo en barca tradicional de dragón cruzando las aguas del Lago Kunming.",
          "afternoon": "11:30 Visita al *Templo de los Lamas* (Yonghegong): el monasterio budista tibetano más grandioso fuera del Tíbet, con sus patios impregnados del aroma a incienso de sándalo y el gigantesco Buda Maitreya de 18 metros tallado en un solo tronco de sándalo blanco (récord Guinness). Almuerzo vegetariano budista en el restaurante con estrella Michelin *King's Joy* o en un restaurante local cercano.",
          "evening": "15:00 Recogida del equipaje en el hotel y traslado a la estación de ferrocarril de Pekín Oeste. Experiencia fascinante a bordo de los trenes Fuxing de última generación: silencio total, asientos reclinables, enchufes y wifi mientras el tren surca la Gran Llanura del Norte de China a 350 km/h. Llegada a Xi'an, la legendaria Chang'an, capital de 13 dinastías imperiales y punto de partida de la Ruta de la Seda. Check-in y primer paseo nocturno frente a las murallas iluminadas.",
          "hotel": "Grand Noble Hotel Xi'an / Mercure Xian Downtown (2 habitaciones ejecutivas en excelente ubicación céntrica dentro del recinto amurallado, cerca de la Torre de la Campana). Dongdajie, Xi'an.",
          "gastro": "*Roujiamo* (la conocida como 'hamburguesa china': panecillo crujiente recién horneado relleno de carne de cerdo estofada con especias de la Ruta de la Seda).",
          "links": "Palacio de Verano: https://www.summerpalace-china.com | China Railway: https://www.12306.cn",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Kunming_Lake_Summer_Palace_Beijing_%283%29.jpg/960px-Kunming_Lake_Summer_Palace_Beijing_%283%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Cultura & Patrimonio",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "El Barco de Mármol y el Lago Kunming en el Palacio de Verano",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Marble_Boat%2C_Summer_Palace_at_Beijing_2.jpg/960px-Marble_Boat%2C_Summer_Palace_at_Beijing_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El Barco de Mármol y el Lago Kunming en el Palacio de Verano",
              "desc": "El Barco de Mármol y el Lago Kunming en el Palacio de Verano"
            },
            {
              "caption": "Templo de los Lamas con sus pabellones budistas tibetanos",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Beijing_2009-1013.jpg/960px-Beijing_2009-1013.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Templo de los Lamas con sus pabellones budistas tibetanos",
              "desc": "Templo de los Lamas con sus pabellones budistas tibetanos"
            },
            {
              "caption": "Tren bala de última generación Fuxinghao CR400 operando a 350 km/h en la línea de alta velocidad",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Fuxinghao_CR400_high-speed_train_front.jpg/960px-Fuxinghao_CR400_high-speed_train_front.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail",
              "name": "Tren bala de última generación Fuxinghao CR400 operando a 350 km/h en la línea de alta velocidad",
              "desc": "Tren bala de última generación Fuxinghao CR400 operando a 350 km/h en la línea de alta velocidad"
            }
          ]
        },
        {
          "num": "Día 5",
          "title": "Xi'an: El Ejército de Guerreros de Terracota (UNESCO), Muralla en Bicicleta y Barrio Musulmán",
          "transp": "Van privada exclusiva al museo de los Guerreros de Terracota (40 km, 50 minutos). Bicicleta tándem o individuales sobre la muralla antigua.",
          "morning": "08:00 Visita al yacimiento arqueológico más trascendental del siglo XX: el *Museo de los Guerreros y Caballos de Terracota del Primer Emperador Qin* (Patrimonio de la Humanidad UNESCO). Visita exhaustiva de las tres fosas: la colosal Fosa 1 (con más de 6.000 soldados de infantería alineados en rigurosa formación de batalla, cada uno con una expresión facial, peinado y armadura completamente individualizada), la Fosa 2 (caballería y arqueros arrodillados) y la Fosa 3 (el cuartel general de los comandantes). Visita a la sala de los Carros de Bronce imperiales.",
          "afternoon": "13:00 Almuerzo tradicional probando los célebres fideos *Biang Biang* (largos y anchos como un cinturón, condimentados con aceite hirviendo, chile rojo, ajo picado y verduras crujientes). A las 15:00, subida a la *Muralla Antigua de Xi'an*: la fortificación militar medieval mejor conservada del mundo (14 kilómetros de perímetro, 12 metros de altura y 15 metros de grosor). Alquiler de bicicletas para pedalear la vuelta completa sobre la muralla disfrutando de vistas panorámicas sobre los contrastes entre la ciudad antigua y los rascacielos modernos.",
          "evening": "18:00 Inmersión sensorial en el laberíntico *Barrio Musulmán* (Hui Min Jie): visita a la Gran Mezquita de Xi'an (fundada en el año 742, sublime ejemplo de arquitectura islámica fusionada con pabellones tradicionales chinos y patios con bonsáis). Al anochecer, recorrido por el mercado nocturno de comida callejera entre vapores, faroles rojos y aromas a comino: brochetas de cordero a la brasa (*chuanr*), dulces de caqui y panqueques de sésamo.",
          "hotel": "Grand Noble Hotel Xi'an (segunda noche en Xi'an).",
          "gastro": "Fideos *Biang Biang Mian* hechos a mano al momento con aceite quemado y especias en *First Noodle Under the Sun*.",
          "links": "Museo Guerreros Terracota: http://www.bmy.com.cn | Muralla de Xi'an: https://whc.unesco.org/en/list/1442",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Terracotta_Army_Pit_1_ruined_warriors_1.JPG/960px-Terracotta_Army_Pit_1_ruined_warriors_1.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Cultura & Patrimonio"
          ],
          "photos": [
            {
              "caption": "Las colosales filas de guerreros y caballos del Foso 1 del Ejército de Terracota de Xi'an (UNESCO)",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Qin_Terracotta_Warriors%2C_Pit_1_Horses_%26_Soldiers.jpg/960px-Qin_Terracotta_Warriors%2C_Pit_1_Horses_%26_Soldiers.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail",
              "name": "Las colosales filas de guerreros y caballos del Foso 1 del Ejército de Terracota de Xi'an (UNESCO)",
              "desc": "Las colosales filas de guerreros y caballos del Foso 1 del Ejército de Terracota de Xi'an (UNESCO)"
            },
            {
              "caption": "Paseo en bicicleta sobre la gran muralla medieval de Xi'an",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/City_wall_of_Xi%27an_51550-Xian_%2827959363326%29.jpg/960px-City_wall_of_Xi%27an_51550-Xian_%2827959363326%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Paseo en bicicleta sobre la gran muralla medieval de Xi'an",
              "desc": "Paseo en bicicleta sobre la gran muralla medieval de Xi'an"
            },
            {
              "caption": "Puestos de especias y gastronomía en el animado Barrio Musulmán",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Muslim_Quarter_Xi%27an_China.jpg/960px-Muslim_Quarter_Xi%27an_China.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Puestos de especias y gastronomía en el animado Barrio Musulmán",
              "desc": "Puestos de especias y gastronomía en el animado Barrio Musulmán"
            }
          ]
        },
        {
          "num": "Día 6",
          "title": "De Xi'an a Chengdu en Tren Bala: La Capital de Sichuan, Casas de Té y Hotpot Picante",
          "transp": "Traslado a la estación Xi'an North. Tren de Alta Velocidad Fuxing atravesando los túneles de las míticas montañas Qinling hacia Chengdu (duración: 3h30', velocidad 250-300 km/h). Traslado privado al hotel en Chengdu.",
          "morning": "08:30 Visita matinal a la *Gran Pagoda de la Oca Salvaje* (Da Cien Si): construida en el año 652 por el monje Xuanzang para albergar los manuscritos y reliquias budistas traídas desde la India a lo largo de la Ruta de la Seda. Paseo por los jardines circundantes.",
          "afternoon": "11:30 Embarque en el tren de alta velocidad rumbo a Chengdu, capital de la provincia suroccidental de Sichuan y paraíso gastronómico declarado por la UNESCO. Llegada a las 15:00. Check-in en el hotel. Tarde dedicada a la auténtica vida local en el *Parque del Pueblo* (People's Park): sentarse en una centenaria casa de té al aire libre (*Ming Shan Tea House*) en sillas de bambú, beber té de jazmín en cuencos de porcelana con tapa (*gaiwan*), observar a los locales jugando al mahjong y presenciar el insólito servicio tradicional de limpieza y masaje de oídos con diapasones de cobre.",
          "evening": "18:30 Paseo por el callejón tradicional Jinli, iluminado con miles de faroles rojos. Cena de gala probando el legendario *Hotpot Sichuanés* (caldero mongol dividido en dos compartimentos: uno con caldo aromático suave y otro con un caldo volcánico de chiles rojos secos y pimienta de Sichuan (*mala*) que produce un fascinante hormigueo en la boca) en *Huangcheng Laoma* o *Shu JiuXiang*.",
          "hotel": "Buddha Zen Hotel / Canopy by Hilton Chengdu City Centre (2 habitaciones con estética budista zen tradicional, maderas nobles y patios interiores serenos). Wenshu Monastery area, Chengdu.",
          "gastro": "Auténtico *Sichuan Hotpot* con ternera laminada, setas silvestres, brotes de bambú y verduras frescas; tofu Mapo picante con pimienta de Sichuan.",
          "links": "Buddha Zen Hotel: http://www.buddhazenhotel.com | Chengdu UNESCO City of Gastronomy: https://en.unesco.org",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Chengdu_Kuanzhai_Alley_Touristic_Spot_Relics_%E6%88%90%E9%83%BD%E5%AE%BD%E7%AA%84%E5%B7%B7%E5%AD%90%E6%96%87%E7%89%A9%E5%8F%91%E6%8E%98%E9%81%97%E4%BA%A7.jpg/960px-Chengdu_Kuanzhai_Alley_Touristic_Spot_Relics_%E6%88%90%E9%83%BD%E5%AE%BD%E7%AA%84%E5%B7%B7%E5%AD%90%E6%96%87%E7%89%A9%E5%8F%91%E6%8E%98%E9%81%97%E4%BA%A7.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gran Traslado",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Casas de té tradicionales en los callejones Kuanzhai Xiangzi",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Shops_-_Kuanzhai_Alleys_-_Chengdu%2C_China_-_DSC05305.jpg/960px-Shops_-_Kuanzhai_Alleys_-_Chengdu%2C_China_-_DSC05305.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Casas de té tradicionales en los callejones Kuanzhai Xiangzi",
              "desc": "Casas de té tradicionales en los callejones Kuanzhai Xiangzi"
            },
            {
              "caption": "El festín del auténtico Hotpot picante con pimienta de Sichuan",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Chengdu_Hot_Pot_Yuanyangguo_style_2019.jpg/960px-Chengdu_Hot_Pot_Yuanyangguo_style_2019.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El festín del auténtico Hotpot picante con pimienta de Sichuan",
              "desc": "El festín del auténtico Hotpot picante con pimienta de Sichuan"
            },
            {
              "caption": "Cultura del té y calma en el Parque del Pueblo de Chengdu",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Teahouse_in_Peoples_Park_-_Chengdu%2C_China_-_DSC05348.jpg/960px-Teahouse_in_Peoples_Park_-_Chengdu%2C_China_-_DSC05348.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Cultura del té y calma en el Parque del Pueblo de Chengdu",
              "desc": "Cultura del té y calma en el Parque del Pueblo de Chengdu"
            }
          ]
        },
        {
          "num": "Día 7",
          "title": "Base de Cría del Panda Gigante, el Colosal Gran Buda de Leshan y Ópera de Sichuan",
          "transp": "Van privada con conductor para toda la jornada (Chengdu - Leshan: 140 km, 2h por autopista moderna).",
          "morning": "07:00 Salida muy temprana hacia la *Base de Investigación y Cría del Panda Gigante de Chengdu*: visita estratégica a primera hora de la mañana, que coincide con el momento en que los pandas están más activos comiendo kilos de brotes de bambú fresco en los recintos boscosos exteriores y jugando antes de retirarse a dormir la siesta al mediodía. Visita a la guardería de crías recién nacidas y al recinto de los pandas rojos.",
          "afternoon": "10:30 Traslado por carretera hacia Leshan. Visita al monumental *Gran Buda de Leshan* (Patrimonio de la Humanidad UNESCO): una colosal estatua de piedra de 71 metros de altura esculpida en el siglo VIII en el acantilado de roca viva en la confluencia de tres ríos caudalosos (Minjiang, Dadu y Qingyi). Descenso por la empinada escalera de caracol de los Nueve Giros tallada en la pared vertical para contemplar sus pies de 8,5 metros de anchura y paseo en barco fluvial para admirar la monumentalidad de la escultura en toda su escala desde el agua. Almuerzo de cocina local en Leshan. (💡 *Plan B por Lluvia / Alternativa Arqueológica de Élite:* Si amanece con lluvias torrenciales de agosto en la cuenca fluvial de Leshan, sustituir la visita por el *Museo de Sanxingdui*, a 40 min de Chengdu: uno de los hallazgos arqueológicos más enigmáticos del siglo XX, con las colosales máscaras de bronce de ojos desorbitados y árboles de la vida de hace más de 3.000 años de la civilización Shu).",
          "evening": "Regreso a Chengdu a media tarde. A las 20:00, asistencia al espectáculo de la *Ópera de Sichuan* en la tradicional Casa de Té Shufeng Yayun: el momento cumbre es el legendario arte del *Bian Lian* (Cambio Mágico de Caras), donde los maestros actores cambian sus máscaras de seda pintada en una fracción de segundo ante vuestros ojos sin que nadie logre descubrir el truco.",
          "hotel": "Buddha Zen Hotel (segunda noche en Chengdu).",
          "gastro": "*Pollo Kung Pao* tradicional (Gong Bao Ji Ding) con cacahuetes crujientes, chiles secos y pimienta de Sichuan; albóndigas *Zhong* al vapor con salsa dulce de soja y aceite de chile.",
          "links": "Chengdu Panda Base: http://www.panda.org.cn | Gran Buda Leshan: https://whc.unesco.org/en/list/779/",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Chengdu_pandas_eating.jpg/960px-Chengdu_pandas_eating.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Cultura & Patrimonio",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "Crías de Oso Panda Gigante comiendo bambú en Chengdu",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Chengdu_pandas_eating.jpg/960px-Chengdu_pandas_eating.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Crías de Oso Panda Gigante comiendo bambú en Chengdu",
              "desc": "Crías de Oso Panda Gigante comiendo bambú en Chengdu"
            },
            {
              "caption": "El colosal Gran Buda de Leshan de 71m tallado en la roca",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Leshan%2C_Big_Buddha_%286170331980%29.jpg/960px-Leshan%2C_Big_Buddha_%286170331980%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El colosal Gran Buda de Leshan de 71m tallado en la roca",
              "desc": "El colosal Gran Buda de Leshan de 71m tallado en la roca"
            },
            {
              "caption": "El mágico cambio ultrarrápido de máscaras Bian Lian en la ópera",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Bian_lian_1.jpg/960px-Bian_lian_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El mágico cambio ultrarrápido de máscaras Bian Lian en la ópera",
              "desc": "El mágico cambio ultrarrápido de máscaras Bian Lian en la ópera"
            }
          ]
        },
        {
          "num": "Día 8",
          "title": "De las Tierras Bajas a las Montañas de Yunnan: La Ciudad Antigua de Lijiang (UNESCO)",
          "transp": "Traslado al Aeropuerto de Chengdu Shuangliu (CTU, 30'). Vuelo regular directo Chengdu -> Lijiang Sanyi (LJG) con Sichuan Airlines / Air China (duración: 1h25'). Traslado privado en van desde el aeropuerto de Lijiang al casco histórico (30 km, 40 minutos).",
          "morning": "09:00 Vuelo matutino sobrevolando los majestuosos macizos montañosos del Tíbet oriental hacia la provincia de Yunnan. Aterrizaje en Lijiang (a 2.400 metros de altitud), tierra ancestral de la minoría étnica Naxi. Llegada y check-in en un patio señorial tradicional Naxi construido íntegramente en madera tallada con aleros volados.",
          "afternoon": "13:00 Almuerzo en el casco antiguo. Tarde dedicada a explorar a pie la *Ciudad Antigua de Lijiang* (Dayan, declarada Patrimonio de la Humanidad por la UNESCO): un fascinante laberinto peatonal de callejuelas empedradas con losas de río, puentes de piedra medievales y canales de agua cristalina procedente del deshielo de las montañas que cruzan cada rincón. Subida a la Colina del León (Parque Wangu Lou): torre pagoda de cinco pisos con las mejores vistas panorámicas sobre el mar de tejas grises curvadas de la ciudad vieja recortadas contra la mole nevada de la Montaña Nevada del Dragón de Jade (5.596 m).",
          "evening": "Paseo al anochecer por la Plaza del Mercado (Sifangjie), donde las ancianas de la etnia Naxi, vestidas con sus trajes tradicionales azules y capas bordadas con las siete estrellas, bailan en círculo danzas tradicionales. Cena en una terraza junto a los canales probando la trucha de río de montaña al vapor.",
          "hotel": "Lijiang Ancient Town Yinhe Hotel / Banyan Tree Lijiang (2 habitaciones en patio tradicional Naxi con comodidades contemporáneas y calefacción por suelo radiante). Dayan Old Town, Lijiang.",
          "gastro": "*Baba de Lijiang* (pan plano hojaldrado artesanal relleno de carne picada o miel de azahar) y sopa de pollo negro de montaña con setas matsutake.",
          "links": "Ciudad Vieja de Lijiang UNESCO: https://whc.unesco.org/en/list/811/",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Lijiang_Oct_2007_294.jpg/960px-Lijiang_Oct_2007_294.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "Canales y casonas de madera en la Ciudad Antigua de Lijiang (UNESCO)",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/1_lijiang_old_town_2012a.jpg/960px-1_lijiang_old_town_2012a.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Canales y casonas de madera en la Ciudad Antigua de Lijiang (UNESCO)",
              "desc": "Canales y casonas de madera en la Ciudad Antigua de Lijiang (UNESCO)"
            },
            {
              "caption": "Panorámica de los tejados tradicionales desde la Pagoda Wangu",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Old_Town_of_Lijiang_roofs_02.JPG/960px-Old_Town_of_Lijiang_roofs_02.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Panorámica de los tejados tradicionales desde la Pagoda Wangu",
              "desc": "Panorámica de los tejados tradicionales desde la Pagoda Wangu"
            },
            {
              "caption": "Los históricos molinos de agua en la entrada a la ciudad vieja",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Old_Town_of_Lijiang_water_wheels_front_1.JPG/960px-Old_Town_of_Lijiang_water_wheels_front_1.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Los históricos molinos de agua en la entrada a la ciudad vieja",
              "desc": "Los históricos molinos de agua en la entrada a la ciudad vieja"
            }
          ]
        },
        {
          "num": "Día 9",
          "title": "Cultura Naxi, Frescos de Baisha y Preparación del Trekking de la Garganta del Salto del Tigre",
          "transp": "Bicicletas de montaña o van privada para recorrer el valle rural de Lijiang hacia las aldeas del norte.",
          "morning": "08:30 Paseo matinal al *Parque del Estanque del Dragón Negro* (Heilongtan): la icónica estampa donde el Puente de Mármol Blanco de los Cinco Arcos y el Pabellón Deyue se reflejan con nitidez cristalina en el agua con la Montaña Nevada del Dragón de Jade como telón de fondo. Visita al Instituto de Investigación de la Cultura Dongba (la única escritura puramente pictográfica y jeroglífica que sigue viva y en uso en el mundo).",
          "afternoon": "11:30 Ruta en bicicleta o en van hacia la aldea tradicional de *Baisha*, la antigua capital original del reino Naxi antes de trasladarse a Lijiang. Visita a los famosos *Frescos de Baisha* (pinturas murales del siglo XIV que fusionan magistralmente elementos del budismo tibetano, taoísmo y chamanismo Dongba). Encuentro con el legendario Dr. Ho Shixiu (su centenaria clínica de hierbas medicinales tradicionales de las montañas ha sido visitada por viajeros de todo el mundo).",
          "evening": "Almuerzo en Baisha y regreso al hotel de Lijiang. Tarde dedicada a la logística del gran trekking del día siguiente: preparación de mochilas de trekking de 25-30L con ropa ligera, muda, calzado técnico y bastones, dejando las maletas pesadas principales guardadas en la consigna segura del hotel en Lijiang. Cena temprana rica en carbohidratos.",
          "hotel": "Lijiang Ancient Town Yinhe Hotel (segunda noche en Lijiang).",
          "gastro": "Costillas curadas Naxi cocinadas a fuego lento en cazuela de barro con patatas de montaña y setas porcini frescas.",
          "links": "Cultura Dongba de Lijiang: https://en.unesco.org/silkroad/countries-along-the-silk-road/china",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Naxi_Baisha_Hand_made_Embroidery_Sign.jpg/960px-Naxi_Baisha_Hand_made_Embroidery_Sign.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura"
          ],
          "photos": [
            {
              "caption": "Manuscrito litúrgico sagrado original con escritura jeroglífica Dongba milenaria",
              "name": "Manuscrito litúrgico sagrado original con escritura jeroglífica Dongba milenaria",
              "desc": "Manuscrito litúrgico sagrado original con escritura jeroglífica Dongba milenaria",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Naxi_Dongba_scripture_-_Yunnan_Provincial_Museum_-_DSC02093.JPG/960px-Naxi_Dongba_scripture_-_Yunnan_Provincial_Museum_-_DSC02093.JPG?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail"
            },
            {
              "caption": "Los picos glaciares del Macizo del Dragón de Jade",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Jade_Dragon_Snow_Mountain_20260221-1.jpg/960px-Jade_Dragon_Snow_Mountain_20260221-1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Los picos glaciares del Macizo del Dragón de Jade",
              "desc": "Los picos glaciares del Macizo del Dragón de Jade"
            },
            {
              "caption": "El Estanque del Dragón Negro reflejando el monte nevado",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Black_Dragon_Pool.jpg/960px-Black_Dragon_Pool.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El Estanque del Dragón Negro reflejando el monte nevado",
              "desc": "El Estanque del Dragón Negro reflejando el monte nevado"
            }
          ]
        },
        {
          "num": "Día 10",
          "title": "Gran Trekking Garganta del Salto del Tigre (Día 1): De Qiaotou a Halfway Guesthouse",
          "transp": "Van privada desde Lijiang hasta Qiaotou (punto de inicio del sendero alto del cañón, 90 km, 1h45'). Trekking alpino a pie de 5-6 horas por la ruta alta (High Trail).",
          "morning": "07:30 Salida hacia la mítica *Garganta del Salto del Tigre* (Hutiao Xia), uno de los cañones fluviales más profundos y sobrecogedores de la Tierra (el impetuoso río Jinsha, afluente principal del Yangtsé, ruge encajonado en el fondo mientras las paredes de roca de la Montaña Nevada del Dragón de Jade y el Macizo Haba Snow Mountain se elevan verticalmente casi 3.900 metros por encima del cauce). Inicio del trekking en Qiaotou.",
          "afternoon": "09:30 Tramo inicial ascendente por sendero de montaña. A las 11:30 se afronta el tramo más exigente físicamente del sendero: las famosas *28 Curvas* (28 Bends), una serie de zigzags empinados de piedra que ganan altura rápidamente. Al coronar el puerto (a 2.670 msnm), la recompensa visual quita el aliento: una vista aérea vertiginosa de los picos glaciares nevados y el cañón abismal. Descenso suave hasta la *Tea Horse Guesthouse* para almorzar fideos salteados y tortitas de huevo con vistas al abismo.",
          "evening": "14:30 Caminata vespertina de 2 horas por senderos colgados en la cornisa de la montaña cruzando arroyos y pequeñas cascadas hasta alcanzar la mítica *Halfway Guesthouse* en la aldea de Bendiwan. La terraza de madera de Halfway es famosa entre la comunidad internacional de montañeros por sus vistas panorámicas cara a cara contra la muralla de roca del Dragón de Jade. Ducha caliente, cena montañesa reconfortante y descanso reparador bajo las estrellas de Yunnan.",
          "hotel": "Halfway Guesthouse (2 habitaciones privadas con baño privado y balcón de madera con vistas directas sobre el abismo del cañón). Bendiwan, Tiger Leaping Gorge.",
          "gastro": "Cena campesina en Halfway: tortilla de cebollino fresco, pollo salteado con pimientos y patatas locales a la sartén con té tibetano.",
          "links": "Tiger Leaping Gorge Trekking Guide: https://www.travelchinaguide.com/attraction/yunnan/diqing/tiger_gorge.htm",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Yunnan_China_Tiger-Leaping-Gorge-04.jpg/960px-Yunnan_China_Tiger-Leaping-Gorge-04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura"
          ],
          "photos": [
            {
              "caption": "El abismo del cañón del Salto del Tigre sobre el río Yangtsé",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Yunnan_China_Tiger-Leaping-Gorge-04.jpg/960px-Yunnan_China_Tiger-Leaping-Gorge-04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El abismo del cañón del Salto del Tigre sobre el río Yangtsé",
              "desc": "El abismo del cañón del Salto del Tigre sobre el río Yangtsé"
            },
            {
              "caption": "Sendero de alta montaña y precipicios en la Garganta del Salto del Tigre",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Tiger_Leaping_Gorge.JPG/960px-Tiger_Leaping_Gorge.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Sendero de alta montaña y precipicios en la Garganta del Salto del Tigre",
              "desc": "Sendero de alta montaña y precipicios en la Garganta del Salto del Tigre"
            },
            {
              "caption": "Los imponentes farallones nevados frente al cañón",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Mountains_opposite_Walnut_Grove%2C_Yunnan_1.JPG/960px-Mountains_opposite_Walnut_Grove%2C_Yunnan_1.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Los imponentes farallones nevados frente al cañón",
              "desc": "Los imponentes farallones nevados frente al cañón"
            }
          ]
        },
        {
          "num": "Día 11",
          "title": "Garganta del Salto del Tigre (Día 2) a Tina's, Descenso al Río y Traslado a Zhangjiajie",
          "transp": "Trekking a pie de 2h30' hasta Tina's Guesthouse y descenso de 1h30' a la Garganta Media. Minivan privada de regreso a Lijiang / estación de tren. Tren de alta velocidad o vuelo con escala hacia Zhangjiajie (Hunan).",
          "morning": "07:30 Desayuno al amanecer en la terraza de Halfway con el sol iluminando las cumbres nevadas. Inicio de la caminata descendente: sendero escénico excavado en la pared de roca viva pasando por la Cascada Guanyin. Llegada a media mañana a *Tina's Guesthouse*, punto final de la ruta alta.",
          "afternoon": "10:30 Gran Descenso a la Garganta Media (Middle Rapids): caminata empinada de 45 minutos por senderos acondicionados con escaleras metálicas verticales ancladas en la roca hasta el nivel del río Yangtsé. Se llega a la legendaria *Roca del Salto del Tigre*: una gigantesca roca donde, según la leyenda, un tigre perseguido por un cazador saltó de un salto los 30 metros que separan ambas orillas. El estruendo ensordecedor del agua comprimida y la fuerza salvaje de la corriente es una experiencia sobrecogedora. Subida por la Escalera Celestial o sendero de montaña.",
          "evening": "13:30 Almuerzo reconfortante en Tina's. A las 15:00, traslado por carretera de vuelta hacia Lijiang o enlace hacia Kunming. Embarque en tren bala nocturno con literas blandas o vuelo de conexión rumbo a la provincia de Hunan para llegar al reino de ensueño de Zhangjiajie. Llegada y descanso.",
          "hotel": "Pullman Zhangjiajie Hotel / Homeward Mountain Resort (2 habitaciones de categoría superior en la entrada del parque nacional de Wulingyuan, piscina exterior y spa de recuperación muscular). Wulingyuan, Zhangjiajie.",
          "gastro": "Platos de la minoría Tujia: carne ahumada al fuego de leña de pino con brotes tiernos de bambú y setas oreja de madera.",
          "links": "Pullman Zhangjiajie: https://all.accor.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Yunnan_China_Tiger-Leaping-Gorge-08.jpg/960px-Yunnan_China_Tiger-Leaping-Gorge-08.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "Los colosales rápidos atronadores junto a la legendaria Roca del Tigre",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Yunnan_China_Tiger-Leaping-Gorge-08.jpg/960px-Yunnan_China_Tiger-Leaping-Gorge-08.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Los colosales rápidos atronadores junto a la legendaria Roca del Tigre",
              "desc": "Los colosales rápidos atronadores junto a la legendaria Roca del Tigre"
            },
            {
              "caption": "Puentes colgantes y desfiladeros kársticos en el cañón bajo",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/56710-Tiger-Leaping-Gorge_%2827940748334%29.jpg/960px-56710-Tiger-Leaping-Gorge_%2827940748334%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Puentes colgantes y desfiladeros kársticos en el cañón bajo",
              "desc": "Puentes colgantes y desfiladeros kársticos en el cañón bajo"
            },
            {
              "caption": "Tren de alta velocidad moderno cruzando hacia Hunan",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/China_Rail_Bullet_Train.jpg/960px-China_Rail_Bullet_Train.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Tren de alta velocidad moderno cruzando hacia Hunan",
              "desc": "Tren de alta velocidad moderno cruzando hacia Hunan"
            }
          ]
        },
        {
          "num": "Día 12",
          "title": "Llegada al Reino de Avatar: Wulingyuan y Descanso Termal",
          "transp": "Traslado local privado hacia el valle de Wulingyuan. Día de ritmo más relajado para recuperar fuerzas del trekking alpino.",
          "morning": "09:30 Desayuno buffet relajado en el hotel. Paseo tranquilo por el pintoresco arroyo Xibu (Xibu Street): una recreación peatonal de aldea tradicional de la minoría Tujia, con canales de agua, norias de madera, talleres de dulces tradicionales de azúcar estirado a mano y tiendas de artesanía de plata.",
          "afternoon": "13:00 Almuerzo degustando la gastronomía de Hunan (célebre por sus sabores aromáticos especiados). Tarde dedicada a un masaje tradicional chino de reflexología podal y espalda en el spa del hotel para dejar las piernas en perfectas condiciones antes de afrontar los días de exploración en los parques geológicos.",
          "evening": "Paseo al atardecer contemplando las primeras siluetas de las colosales torres de arenisca que custodian la entrada al valle de Wulingyuan. Cena en un restaurante típico Tujia con espectáculo de cantos polifónicos de montaña.",
          "hotel": "Pullman Zhangjiajie Hotel (segunda noche en Wulingyuan).",
          "gastro": "*Sanxiaguo de Zhangjiajie* (plato tradicional Tujia servido en cazuela caliente con panceta de cerdo estofada, intestino crujiente, setas y verduras de raíz).",
          "links": "Parque Nacional Wulingyuan UNESCO: https://whc.unesco.org/en/list/640/",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/38319-Zhangjiajie_%2849047512532%29.jpg/960px-38319-Zhangjiajie_%2849047512532%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gran Traslado",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Monumento y puertas de acceso al Parque Nacional de Zhangjiajie",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/38319-Zhangjiajie_%2849047512532%29.jpg/960px-38319-Zhangjiajie_%2849047512532%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Monumento y puertas de acceso al Parque Nacional de Zhangjiajie",
              "desc": "Monumento y puertas de acceso al Parque Nacional de Zhangjiajie"
            },
            {
              "caption": "Arquitectura rural y terrazas de la etnia Tujia",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Building_in_Furong_1.jpg/960px-Building_in_Furong_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Arquitectura rural y terrazas de la etnia Tujia",
              "desc": "Arquitectura rural y terrazas de la etnia Tujia"
            },
            {
              "caption": "Siluetas de las colosales torres de arenisca al atardecer custodiando la entrada a Wulingyuan",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/1_tianzishan_wulingyuan_zhangjiajie_2012.jpg/960px-1_tianzishan_wulingyuan_zhangjiajie_2012.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail",
              "name": "Siluetas de las colosales torres de arenisca al atardecer custodiando la entrada a Wulingyuan",
              "desc": "Siluetas de las colosales torres de arenisca al atardecer custodiando la entrada a Wulingyuan"
            }
          ]
        },
        {
          "num": "Día 13",
          "title": "Zhangjiajie: Los Pilares Flotantes de Avatar en Yuanjiajie y la Montaña Tianzi",
          "transp": "Buses lanzadera ecológicos interiores del parque nacional. Ascensor exterior de cristal Bailong (326 m de subida vertical) y teleférico panorámico de Tianzi.",
          "morning": "07:30 Entrada al Parque Nacional Forestal de Zhangjiajie (Patrimonio de la Humanidad UNESCO). Subida vertiginosa en el *Ascensor Bailong* (el ascensor exterior de doble piso más alto y rápido del mundo, construido en cristal transparente adosado a la pared vertical de un acantilado de 326 metros): el ascenso dura menos de 90 segundos y proporciona una transición sobrecogedora desde el cañón boscoso hasta la cima de la meseta kárstica.",
          "afternoon": "09:00 Recorrido por el sendero panorámico de *Yuanjiajie*: mirador de la célebre *Columna del Cielo del Sur* (rebautizada como 'Montaña Hallelujah de Avatar', el colosal pilar monolítico de 1.080 metros que inspiró las montañas flotantes de Pandora en la película de James Cameron). Cuando la niebla matinal cubre el fondo del abismo, los pilares parecen literalmente flotar suspendidos en el aire. Cruce del *Primer Puente Bajo el Cielo* (arco de piedra natural que une dos abismos a 357 metros de altura).",
          "evening": "13:30 Almuerzo ligero en la meseta. Traslado en bus interno hacia el sector de la *Montaña Tianzi* (el 'Hijo del Cielo'): aquí la erosión ha esculpido un bosque aún más denso de agujas afiladas de arenisca cuarzosa, con miradores memorables como la Terraza de Dianjiang y el Bosque de Pinceles Imperiales. Descenso panorámico en el teleférico de Tianzi sobrevolando las copas de los árboles y pilares de piedra. Regreso al hotel.",
          "hotel": "Pullman Zhangjiajie Hotel (tercera noche en Wulingyuan).",
          "gastro": "Pescado de arroyo frito crujiente con chiles encurtidos y arroz cocinado en tubo de bambú verde.",
          "links": "Zhangjiajie National Forest Park: http://www.zhangjiajie.gov.cn",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Zhangjiajie_National_Forest_Park.jpg/960px-Zhangjiajie_National_Forest_Park.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Cultura & Patrimonio"
          ],
          "photos": [
            {
              "caption": "El Pilar del Cielo del Sur (Montaña Aleluya de Avatar)",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Zhangjiajie_National_Forest_Park.jpg/960px-Zhangjiajie_National_Forest_Park.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El Pilar del Cielo del Sur (Montaña Aleluya de Avatar)",
              "desc": "El Pilar del Cielo del Sur (Montaña Aleluya de Avatar)"
            },
            {
              "caption": "El ascensor de cristal Bailong de 326 metros ascendiendo verticalmente por el risco de arenisca",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Bailong_Elevator_01.jpg/960px-Bailong_Elevator_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=api&utm_content=thumbnail",
              "name": "El ascensor de cristal Bailong de 326 metros ascendiendo verticalmente por el risco de arenisca",
              "desc": "El ascensor de cristal Bailong de 326 metros ascendiendo verticalmente por el risco de arenisca"
            },
            {
              "caption": "El mar de agujas kársticas de arenisca en la Montaña Tianzi",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Pilier_rocheux_couronn%C3%A9_de_pins%2C_monts_Tianzi_%282026%29.jpg/960px-Pilier_rocheux_couronn%C3%A9_de_pins%2C_monts_Tianzi_%282026%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El mar de agujas kársticas de arenisca en la Montaña Tianzi",
              "desc": "El mar de agujas kársticas de arenisca en la Montaña Tianzi"
            }
          ]
        },
        {
          "num": "Día 14",
          "title": "Gran Cañón de Zhangjiajie: Puente de Cristal, Tirolina, Tobogán y Arroyo Golden Whip",
          "transp": "Van privada hacia el Gran Cañón de Zhangjiajie (30'). Por la tarde, caminata llana de 6 km a lo largo del arroyo.",
          "morning": "08:00 Visita al *Gran Cañón de Zhangjiajie*: cruce del colosal *Puente de Cristal de Zhangjiajie* (430m de largo, suspendido a 300m sobre el abismo con suelo transparente de triple capa). Para descender al cañón realizamos el circuito de adrenalina activa: vuelo en la *Tirolina Panorámica (Zipline)* de 358m cruzando la garganta de pared a pared, seguido del emocionante descenso en el *Tobogán de Mármol y Cristal Pulido* deslizándonos con protecciones hasta el fondo (con alternativa de *Ascensor Panorámico Vertical* en la roca viva para quien prefiera no deslizarse o tenga vértigo).",
          "afternoon": "11:30 Paseo en barca por las aguas esmeralda del fondo del cañón. Almuerzo campestre. Por la tarde, traslado hacia el interior del parque nacional para la relajante caminata por el *Arroyo Golden Whip* (Jinbian Xi), sendero llano de 6 km bordeando el río cristalino entre macacos salvajes y mirando hacia arriba a los pilares de piedra que se elevan 400m verticales hacia el cielo.",
          "evening": "16:30 Fin del sendero y regreso al hotel. Tiempo para descansar en la piscina. Cena en un restaurante local probando las empanadillas al vapor rellenas de carne y jengibre.",
          "hotel": "Pullman Zhangjiajie Hotel (cuarta noche en Wulingyuan).",
          "gastro": "Costillas de cerdo estofadas con taro dulce y verduras de la montaña en cazuela de hierro.",
          "links": "Zhangjiajie Glass Bridge: http://www.zjjdxf.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Glass_Bridge_in_Zhangjiajie_China.jpg/960px-Glass_Bridge_in_Zhangjiajie_China.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "El impresionante Puente de Cristal suspendido a 300m de altura",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Glass_Bridge_in_Zhangjiajie_China.jpg/960px-Glass_Bridge_in_Zhangjiajie_China.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El impresionante Puente de Cristal suspendido a 300m de altura",
              "desc": "El impresionante Puente de Cristal suspendido a 300m de altura"
            },
            {
              "caption": "Sendero fluvial del Arroyo Látigo Dorado entre paredes de roca",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Wulingyuan%2C_Zhangjiajie%2C_Hunan_20230702.jpg/960px-Wulingyuan%2C_Zhangjiajie%2C_Hunan_20230702.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Sendero fluvial del Arroyo Látigo Dorado entre paredes de roca",
              "desc": "Sendero fluvial del Arroyo Látigo Dorado entre paredes de roca"
            },
            {
              "caption": "Bóvedas subterráneas iluminadas en la Cueva del Dragón Amarillo",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/20120410_YD_cave_0001_08.jpg/960px-20120410_YD_cave_0001_08.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Bóvedas subterráneas iluminadas en la Cueva del Dragón Amarillo",
              "desc": "Bóvedas subterráneas iluminadas en la Cueva del Dragón Amarillo"
            }
          ]
        },
        {
          "num": "Día 15",
          "title": "La Puerta del Cielo en la Montaña Tianmen y Enlace a Guilin",
          "transp": "Teleférico urbano de Tianmen (el más largo del mundo, 7.455 m, 28 minutos de trayecto directo). Escaleras mecánicas interiores de la montaña. Tren de alta velocidad o vuelo directo de enlace hacia Guilin (Guangxi).",
          "morning": "07:30 Embarque en el centro de la ciudad de Zhangjiajie en el *Teleférico de la Montaña Tianmen*: un viaje aéreo vertiginoso de 7,5 km que asciende sobrevolando huertos urbanos, vías de tren y paredones verticales de caliza hasta la cima plana de Tianmen (1.518 msnm). Recorrido por la pasarela de cristal *Coiling Dragon Cliff Walk*: pasarela de 100 metros de longitud colgada literalmente sobre el abismo vertical de la roca.",
          "afternoon": "10:30 Descenso en 7 tramos de escaleras mecánicas gigantescas construidas íntegramente dentro de la roca de la montaña hasta alcanzar la legendaria *Cueva de Tianmen* (La Puerta del Cielo): un colosal arco natural de 131 metros de altura abierto en la montaña, considerado por los taoístas como el umbral de entrada al cielo. Descenso a pie por la emblemática *Escalera de los 999 Escalones* hacia la plaza inferior, contemplando las 99 curvas de la carretera de montaña. Almuerzo rápido.",
          "evening": "14:30 Traslado a la estación de tren o aeropuerto de Zhangjiajie. Tren de alta velocidad o vuelo corto conectando hacia Guilin (en la provincia meridional de Guangxi). Llegada a Guilin al anochecer. Check-in y paseo nocturno contemplando las Pagodas del Sol y de la Luna (Shan Hu) resplandecientes en bronce y plata sobre el lago.",
          "hotel": "Guilin Bravo Hotel / Shangri-La Guilin (2 habitaciones de lujo frente al lago Ronghu, cerca del centro peatonal). Guilin, Guangxi.",
          "gastro": "*Fideos de arroz de Guilin* (Guilin Mifen): fideos redondos sedosos servidos con caldo concentrado de huesos de ternera, rodajas de ternera marinada, cacahuetes fritos y brotes de soja en vinagre.",
          "links": "Tianmen Mountain: http://www.tianmenshan.com.cn | Guilin Tourism: http://www.visitguilin.org",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Tianmen_Mountain_20180326_094335.jpg/960px-Tianmen_Mountain_20180326_094335.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "El teleférico de pasajeros más largo del mundo en Tianmen",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Tianmen_Mountain_20180326_094335.jpg/960px-Tianmen_Mountain_20180326_094335.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El teleférico de pasajeros más largo del mundo en Tianmen",
              "desc": "El teleférico de pasajeros más largo del mundo en Tianmen"
            },
            {
              "caption": "Pasarela de cristal suspendida sobre el vacío en el risco",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Glass_walkway-_Tianmen_Mountain_-_panoramio.jpg/960px-Glass_walkway-_Tianmen_Mountain_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Pasarela de cristal suspendida sobre el vacío en el risco",
              "desc": "Pasarela de cristal suspendida sobre el vacío en el risco"
            },
            {
              "caption": "El monumental arco natural de la Puerta del Cielo y sus 999 escalones",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Tianmen_38220-Zhangjiajie_%2849047309516%29.jpg/960px-Tianmen_38220-Zhangjiajie_%2849047309516%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El monumental arco natural de la Puerta del Cielo y sus 999 escalones",
              "desc": "El monumental arco natural de la Puerta del Cielo y sus 999 escalones"
            }
          ]
        },
        {
          "num": "Día 16",
          "title": "El Legendario Crucero por el Río Li: De Guilin al Paraíso de Yangshuo",
          "transp": "Barco panorámico de crucero fluvial de 4 estrellas desde el muelle de Mopanshan/Zhujiang en Guilin hasta Yangshuo (travesía de 83 km, 4 horas de navegación plácida). Alquiler de bicicletas o scooters eléctricas en Yangshuo.",
          "morning": "08:30 Embarque en el barco panorámico de 4 estrellas con cubierta de observación superior al aire libre. Inicio del legendario *Crucero por el Río Li*: la experiencia paisajística más célebre de China. La navegación discurre entre miles de colinas cónicas de origen kárstico cubiertas de bambúes verdes que emergen directamente del agua como colmillos de dragón. Paso por parajes emblemáticos como la Montaña de los Nueve Caballos (Jiu Ma Hua Shan) y el sector de Huangbu, cuyo reflejo exacto en el agua verde esmeralda está inmortalizado en el billete oficial de 20 yuanes.",
          "afternoon": "13:00 Almuerzo buffet a bordo mientras el barco se aproxima a Yangshuo. Desembarque en el muelle de Yangshuo. Check-in en un idílico hotel boutique situado entre los arrozales y el río Yulong, lejos del bullicio urbano. Alquiler de bicicletas o scooters eléctricas silenciosas para recorrer los caminos rurales entre búfalos de agua y campos de pomelos.",
          "evening": "17:30 Subida a pie a una pequeña colina para contemplar la puesta de sol dorada sobre los conos kársticos de Yangshuo. Cena en un restaurante rural probando el famoso *Pescado a la Cerveza de Yangshuo* (Beer Fish) cocinado con pescado fresco del río Li, cerveza local (Liquan), tomates maduros y pimientos verdes.",
          "hotel": "Yangshuo Mountain Retreat / Alila Sugar House (2 habitaciones o suites con terraza privada mirando directamente al río Yulong y a los picos de caliza, sin televisores para promover la inmersión total en la naturaleza). Yulong River, Yangshuo.",
          "gastro": "*Beer Fish de Yangshuo* (Pescado a la cerveza) cocinado entero con escamas crujientes y salsa espesa especiada con tomates.",
          "links": "Yangshuo Mountain Retreat: https://www.yangshuomountainretreat.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/At_this_point_the_Li_River_was_really_wide_%2835689607800%29.jpg/960px-At_this_point_the_Li_River_was_really_wide_%2835689607800%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Naturaleza & Aventura"
          ],
          "photos": [
            {
              "caption": "El idílico crucero por el Río Li entre colinas kársticas",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/At_this_point_the_Li_River_was_really_wide_%2835689607800%29.jpg/960px-At_this_point_the_Li_River_was_really_wide_%2835689607800%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El idílico crucero por el Río Li entre colinas kársticas",
              "desc": "El idílico crucero por el Río Li entre colinas kársticas"
            },
            {
              "caption": "Pescador tradicional con cormoranes en balsa de bambú",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Cormorant_Fisherman_%2849298270808%29.jpg/960px-Cormorant_Fisherman_%2849298270808%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Pescador tradicional con cormoranes en balsa de bambú",
              "desc": "Pescador tradicional con cormoranes en balsa de bambú"
            },
            {
              "caption": "El animado ambiente nocturno y gastronomía de Yangshuo",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/West_Street_-Yangshuo-Guilin_-_China_-_panoramio.jpg/960px-West_Street_-Yangshuo-Guilin_-_China_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El animado ambiente nocturno y gastronomía de Yangshuo",
              "desc": "El animado ambiente nocturno y gastronomía de Yangshuo"
            }
          ]
        },
        {
          "num": "Día 17",
          "title": "Yangshuo Rural: Balsas de Bambú en el Río Yulong, Moon Hill y Luz de Sanjie Liu",
          "transp": "Balsas tradicionales de bambú artesanales para 2 personas impulsadas con pértiga por barquero local. Bicicletas y furgoneta privada.",
          "morning": "07:30 Navegación tradicional en *Balsas de Bambú por el Río Yulong*: a diferencia de los grandes barcos del río Li, aquí solo se navega en pequeñas balsas de bambú artesanales sin motor impulsadas manualmente con una pértiga por un remero campesino. Durante 1h30' se deslizan en absoluto silencio por aguas cristalinas, sorteando pequeños azudes o diques de piedra donde la balsa desciende provocando una divertida salpicadura de agua fresca.",
          "afternoon": "10:30 Ruta en bicicleta hacia la *Colina de la Luna* (Moon Hill): ascenso a pie de 800 escalones de piedra a la sombra del bosque de bambú hasta alcanzar el gigantesco arco de roca natural circular que corona la montaña semejando una luna llena. Las vistas de 360° sobre el océano de pináculos kársticos de Yangshuo son inolvidables. Almuerzo campestre en la aldea de Moon Hill. (💡 *Plan B por Lluvia / Alternativa Arqueológica de Élite:* Si amanece con lluvias torrenciales de agosto en la cuenca fluvial de Leshan, sustituir la visita por el *Museo de Sanxingdui*, a 40 min de Chengdu: uno de los hallazgos arqueológicos más enigmáticos del siglo XX, con las colosales máscaras de bronce de ojos desorbitados y árboles de la vida de hace más de 3.000 años de la civilización Shu).",
          "evening": "15:00 Tarde libre: opción de clase práctica de cocina cantonesa/guangxi en una granja orgánica o relax en la piscina del resort. A las 19:30, asistencia al colosal espectáculo nocturno al aire libre *Impression Sanjie Liu*: dirigido por el cineasta Zhang Yimou (director de la ceremonia inaugural de los Juegos de Pekín), el escenario natural son las propias aguas del río Li y 12 colinas kársticas iluminadas con potentes focos, con más de 600 campesinos y pescadores locales actuando sobre barcas al ritmo de melodías populares.",
          "hotel": "Yangshuo Mountain Retreat / Alila Sugar House (segunda noche en Yangshuo).",
          "gastro": "Pato con brotes de bambú tierno y rollitos de caracol de río rellenos de carne picada y menta salvaje.",
          "links": "Impression Sanjie Liu: http://www.yxlms.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/1_aerial_yangshuo_panorama_2017.jpg/960px-1_aerial_yangshuo_panorama_2017.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio"
          ],
          "photos": [
            {
              "caption": "Descenso en balsas de bambú tradicionales por el río Yulong",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/20090502_Yangshuo_Yulong_River_6125.jpg/960px-20090502_Yangshuo_Yulong_River_6125.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Descenso en balsas de bambú tradicionales por el río Yulong",
              "desc": "Descenso en balsas de bambú tradicionales por el río Yulong"
            },
            {
              "caption": "El arco kárstico de la Colina de la Luna (Moon Hill)",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/1_yangshuo_moon_hill_view_2011.jpg/960px-1_yangshuo_moon_hill_view_2011.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El arco kárstico de la Colina de la Luna (Moon Hill)",
              "desc": "El arco kárstico de la Colina de la Luna (Moon Hill)"
            },
            {
              "caption": "El colosal espectáculo de luces y música de Zhang Yimou en el río",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Yangshuo-Impression_Sanjie_Liu-26-2012-gje.jpg/960px-Yangshuo-Impression_Sanjie_Liu-26-2012-gje.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El colosal espectáculo de luces y música de Zhang Yimou en el río",
              "desc": "El colosal espectáculo de luces y música de Zhang Yimou en el río"
            }
          ]
        },
        {
          "num": "Día 18",
          "title": "De Yangshuo al Silicon Valley Mundial: Shenzhen en Tren Bala, Huaqiangbei y Ping An Centre",
          "transp": "Traslado matinal en van desde Yangshuo a la estación de Yangshuo o Guilin (30'-45'). Tren de Alta Velocidad Fuxing G-Train directo Yangshuo/Guilin -> Shenzhen North (Shenzhenbei) en solo 3 horas y 15 minutos (550 km a 300 km/h). Traslado en metro de última generación o taxi autónomo al distrito financiero de Futian / Nanshan.",
          "morning": "08:30 Salida en tren bala directo surcando las provincias de Guangxi y Guangdong rumbo a la capital tecnológica de China: Shenzhen. Llegada al mediodía a la estación Shenzhen North. Check-in en un hotel ultramoderno con domótica integrada y robots asistentes en el vestíbulo.",
          "afternoon": "14:00 Gran Inmersión en *Huaqiangbei (华强北)*: el mayor mercado de electrónica y hardware del planeta, un laberinto cibernético de rascacielos comerciales interconectados (SEG Electronics Market, Huaqiang Electronic World). Aquí late el corazón de la innovación global: plantas enteras dedicadas a microchips, placas base customizadas, sensores IoT, piezas de robótica avanzada, drones de competición DIY, componentes de impresión 3D, gadgets de última hornada antes de llegar a occidente y herramientas de prototipado rápido.",
          "evening": "17:30 Ascenso al rascacielos *Ping An Finance Centre* (el 4º rascacielos más alto del planeta con 599 metros de altura): el ascensor sube a 36 km/h hasta el mirador *Free Sky 116*, desde donde se contempla una panorámica de ciencia ficción sobre los rascacielos de cristal de Shenzhen y los humedales fronterizos con los Nuevos Territorios de Hong Kong. Cena cantonesa moderna en el centro comercial futurista de Coco Park.",
          "hotel": "Andaz Shenzhen Bay / The Langham Shenzhen (2 habitaciones ejecutivas con vistas panorámicas a la bahía de Nanshan, tecnología domótica inteligente y piscina infinita). Nanshan District, Shenzhen.",
          "gastro": "*Dim Sum cantonés de autor* en *Lei Garden* o cazuela de mariscos al vapor en mesa robotizada en Nanshan.",
          "links": "Huaqiangbei Electronics Market: https://www.szhqe.com | Ping An Finance Centre: http://www.pafc.cn",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Huaqiangbei_July_2024_%281%29.jpg/960px-Huaqiangbei_July_2024_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Gran Traslado",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "El corazón tecnológico mundial: Huaqiangbei en Shenzhen",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Huaqiangbei_July_2024_%281%29.jpg/960px-Huaqiangbei_July_2024_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El corazón tecnológico mundial: Huaqiangbei en Shenzhen",
              "desc": "El corazón tecnológico mundial: Huaqiangbei en Shenzhen"
            },
            {
              "caption": "El rascacielos Ping An Finance Centre (599m) en Futian",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/PING_AN_FINANCE_CENTER%2C_SHENZHEN.jpg/960px-PING_AN_FINANCE_CENTER%2C_SHENZHEN.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El rascacielos Ping An Finance Centre (599m) en Futian",
              "desc": "El rascacielos Ping An Finance Centre (599m) en Futian"
            },
            {
              "caption": "Espectáculo futurista de luces LED en los rascacielos de Futian",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Shenzhen_%28247882861%29.jpg/960px-Shenzhen_%28247882861%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Espectáculo futurista de luces LED en los rascacielos de Futian",
              "desc": "Espectáculo futurista de luces LED en los rascacielos de Futian"
            }
          ]
        },
        {
          "num": "Día 19",
          "title": "Shenzhen Tecnológico: Flagship Mundial de DJI, Taxis Autónomos y Vuelo a Shanghái",
          "transp": "Desplazamientos urbanos probando taxis autónomos sin conductor (Robotaxis de Baidu Apollo Go / AutoX solicitados vía app móvil) en Nanshan. A las 16:30, traslado al Aeropuerto Internacional de Shenzhen Bao'an (SZX). Vuelo regular doméstico Shenzhen -> Shanghái Hongqiao (SHA) con China Southern / Air China (2h15'). Traslado al Bund.",
          "morning": "08:30 Visita a la espectacular Flagship Store Mundial de *DJI* en OCT Harbour / Nanshan (la sede central de la empresa de drones más avanzada del mundo): un edificio de arquitectura biomórfica con jaulas interiores de prueba de vuelo, simuladores de pilotaje de drones FPV con gafas de realidad virtual, robots educativos de batalla *RoboMaster* y estabilizadores cinematográficos de última generación.",
          "afternoon": "11:30 Recorrido por el *Shenzhen Talent Park* en la bahía de Nanshan: presenciar en directo el funcionamiento pionero de los puntos de entrega de comida automatizados con drones de Meituan (drones de reparto que descienden en quioscos inteligentes de recogida en los jardines del parque) y los barrenderos robóticos autónomos. Almuerzo rápido en la zona tecnológica de Houhai frente a las torres de Tencent y ByteDance.",
          "evening": "15:30 Traslado al vanguardista Aeropuerto de Shenzhen Bao'an (famoso por su terminal futurista diseñada por Massimiliano Fuksas inspirada en una manta raya gigante). Vuelo hacia Shanghái. Llegada a las 19:30. Check-in en el hotel y primer paseo nocturno por *The Bund* contemplando el alucinante skyline de rascacielos iluminados de Pudong reflejados en el río Huangpu.",
          "hotel": "The Radisson Collection Hyland Shanghai / The Les Suites Orient Bund Shanghai (2 habitaciones ejecutivas con vistas al Bund o Nanjing Road). East Nanjing Road, Shanghái.",
          "gastro": "*Hongshao Rou* tradicional (panceta de cerdo confitada glaseada con salsa de soja oscura, vino Shaoxing y azúcar de roca) en Shanghái.",
          "links": "DJI Flagship Store: https://www.dji.com | Shenzhen Airport: https://www.szairport.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/DJI_Headquarters_Tower.jpg/960px-DJI_Headquarters_Tower.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Gran Traslado",
            "Gastronomía"
          ],
          "photos": [
            {
              "caption": "Las futuristas torres gemelas de DJI Sky City en Shenzhen",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/DJI_Headquarters_Tower.jpg/960px-DJI_Headquarters_Tower.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Las futuristas torres gemelas de DJI Sky City en Shenzhen",
              "desc": "Las futuristas torres gemelas de DJI Sky City en Shenzhen"
            },
            {
              "caption": "Flota de taxis autónomos robotizados Apollo Go en Shenzhen",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/%28CHN-Hubei%29_Apollo_Go_Apollo_RT6_Temporary-%E9%84%82A1395%E8%AF%95_2025-12-17.jpg/960px-%28CHN-Hubei%29_Apollo_Go_Apollo_RT6_Temporary-%E9%84%82A1395%E8%AF%95_2025-12-17.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Flota de taxis autónomos robotizados Apollo Go en Shenzhen",
              "desc": "Flota de taxis autónomos robotizados Apollo Go en Shenzhen"
            },
            {
              "caption": "Diseño futurista en el Museo de Arte Contemporáneo MOCAPE",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/SZ_%E6%B7%B1%E5%9C%B3%E5%B8%82_Shenzhen_%E7%A6%8F%E7%94%B0%E5%8D%80_Futian_%E7%95%B6%E4%BB%A3%E8%97%9D%E8%A1%93%E9%A4%A8_MOCAPE._Interior_blob.jpg/960px-SZ_%E6%B7%B1%E5%9C%B3%E5%B8%82_Shenzhen_%E7%A6%8F%E7%94%B0%E5%8D%80_Futian_%E7%95%B6%E4%BB%A3%E8%97%9D%E8%A1%93%E9%A4%A8_MOCAPE._Interior_blob.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Diseño futurista en el Museo de Arte Contemporáneo MOCAPE",
              "desc": "Diseño futurista en el Museo de Arte Contemporáneo MOCAPE"
            }
          ]
        },
        {
          "num": "Día 20",
          "title": "Shanghái & Excursión en Tren Bala a Suzhou (Jardines UNESCO y Canales de Seda)",
          "transp": "Tren bala Fuxing/CRH desde Shanghái Hongqiao a Suzhou ida y vuelta (25-30 min por trayecto, salidas cada 10'). En Shanghái, desplazamientos en metro y paseo a pie.",
          "morning": "08:00 Salida en tren de alta velocidad hacia *Suzhou*, la histórica 'Venecia de Oriente'. Visita al *Jardín del Administrador Humilde* (Zhuozheng Yuan, Patrimonio de la Humanidad UNESCO): obra cumbre del diseño paisajístico de la dinastía Ming con laberintos de estanques de loto, puentes en zigzag y pabellones de madera noble. Paseo por la calle empedrada de *Pingjiang Road*, bordeando canales navegados por barcazas tradicionales de remos y talleres de seda artesanal.",
          "afternoon": "13:30 Regreso en tren bala a Shanghái. Visita al *Jardín Clásico Yuyuan* y el animado bazar de la Ciudad Vieja para degustar auténticos *Xiaolongbao* en Nanxiang. A continuación, paseo arbolado por los bulevares con arquitectura *Shikumen* de la *Antigua Concesión Francesa* (Xintiandi y Tianzifang): galerías de diseño y cafés cosmopolitas.",
          "evening": "17:30 Cruce a Pudong para subir al mirador de la *Torre de Shanghái* (632 metros de altura, el 2º rascacielos más alto del planeta): vistas panorámicas vertiginosas 360° al atardecer sobre el río Huangpu. Paseo nocturno por *The Bund* con sus majestuosos edificios coloniales iluminados de estilo art déco y cena de gala de despedida.",
          "hotel": "The Radisson Collection Hyland Shanghai (segunda noche en Shanghái).",
          "gastro": "*Xiaolongbao* artesanales rellenos de carne y caldo concentrado de jamón Jinhua; costillas crujientes al estilo Yunnan en *Lost Heaven*.",
          "links": "Torre de Shanghái: http://www.shanghaitower.com.cn | Jardín Yuyuan: https://www.yugarden.com.cn",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Humble_Administrator%27s_Garden_Suzhou_November_2017_005.jpg/960px-Humble_Administrator%27s_Garden_Suzhou_November_2017_005.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio"
          ],
          "photos": [
            {
              "caption": "El célebre Jardín del Administrador Humilde en Suzhou (UNESCO)",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Humble_Administrator%27s_Garden_Suzhou_November_2017_005.jpg/960px-Humble_Administrator%27s_Garden_Suzhou_November_2017_005.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El célebre Jardín del Administrador Humilde en Suzhou (UNESCO)",
              "desc": "El célebre Jardín del Administrador Humilde en Suzhou (UNESCO)"
            },
            {
              "caption": "Canales tradicionales y farolillos en la calle histórica Shantang",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/2017-04-17_Shantang_River%2C_Suzhou_02.jpg/960px-2017-04-17_Shantang_River%2C_Suzhou_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Canales tradicionales y farolillos en la calle histórica Shantang",
              "desc": "Canales tradicionales y farolillos en la calle histórica Shantang"
            },
            {
              "caption": "El histórico malecón The Bund frente al skyline de Pudong en Shanghái",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Pudong_Shanghai_November_2017_panorama.jpg/960px-Pudong_Shanghai_November_2017_panorama.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "El histórico malecón The Bund frente al skyline de Pudong en Shanghái",
              "desc": "El histórico malecón The Bund frente al skyline de Pudong en Shanghái"
            }
          ]
        },
        {
          "num": "Día 21",
          "title": "Shanghái en el Tren Maglev a 431 km/h y Vuelo de Regreso a España",
          "transp": "Desplazamientos en metro y trayecto final en el Tren Maglev (de levitación magnética) desde Longyang Road hasta el Aeropuerto Internacional de Pudong (PVG): 30 km en solo 7 minutos y 20 segundos a una velocidad punta de 431 km/h. Vuelo intercontinental de regreso a España.",
          "morning": "09:30 Visita matinal al vanguardista *Museo de Shanghái* (en la Plaza del Pueblo): una de las colecciones de arte clásico más sublimes de Asia (galerías dedicadas al bronce antiguo de las dinastías Shang y Zhou, cerámica de porcelana imperial Ming, caligrafía sobre rollos de seda y mobiliario Ming de madera noble).",
          "afternoon": "12:30 Almuerzo ligero de dim sum. Regreso al hotel para recoger el equipaje y traslado a la estación de Longyang Road. Embarque en el futurista *Tren Maglev*: sentir la aceleración del tren flotando magnéticamente sobre la vía a 431 km/h es el broche de oro tecnológico a un viaje inolvidable.",
          "evening": "15:30 Llegada a las terminales del Aeropuerto Internacional de Shanghái Pudong (PVG). Facturación de equipaje y embarque en el vuelo internacional de regreso a España (Air China, Iberia, Qatar o Emirates). Llegada a España con la satisfacción de haber vivido el viaje definitivo por el Imperio del Medio.",
          "hotel": "Vuelo nocturno internacional con destino a España.",
          "gastro": "Último té verde de jazmín Longjing en el aeropuerto y paquetitos de pastas de judía roja de la histórica pastelería Xing Hua Lou.",
          "links": "Shanghai Maglev: http://www.smtdc.com | Aeropuertos de Shanghái: https://www.shanghai-airport.com",
          "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/A_maglev_train_coming_out%2C_Pudong_International_Airport%2C_Shanghai.jpg/960px-A_maglev_train_coming_out%2C_Pudong_International_Airport%2C_Shanghai.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
          "tags": [
            "Cultura & Patrimonio",
            "Gran Traslado"
          ],
          "photos": [
            {
              "caption": "Tren de levitación magnética Maglev flotando a 431 km/h",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/A_maglev_train_coming_out%2C_Pudong_International_Airport%2C_Shanghai.jpg/960px-A_maglev_train_coming_out%2C_Pudong_International_Airport%2C_Shanghai.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Tren de levitación magnética Maglev flotando a 431 km/h",
              "desc": "Tren de levitación magnética Maglev flotando a 431 km/h"
            },
            {
              "caption": "Los famosos raviolis al vapor Xiaolongbao con caldo caliente",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Crab_xiaolongbao_in_shanghai.jpg/960px-Crab_xiaolongbao_in_shanghai.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Los famosos raviolis al vapor Xiaolongbao con caldo caliente",
              "desc": "Los famosos raviolis al vapor Xiaolongbao con caldo caliente"
            },
            {
              "caption": "Terminal moderna del Aeropuerto Internacional de Shanghái Pudong",
              "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/20230720_Departure_Concourse_of_Terminal_2_of_Shanghai_Pudong_International_Airport_01.jpg/960px-20230720_Departure_Concourse_of_Terminal_2_of_Shanghai_Pudong_International_Airport_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              "name": "Terminal moderna del Aeropuerto Internacional de Shanghái Pudong",
              "desc": "Terminal moderna del Aeropuerto Internacional de Shanghái Pudong"
            }
          ]
        }
      ]
    }
  ]
};
const MAP_ROUTES = {
  "filipinas": {
    "center": [
      13.2,
      122.0
    ],
    "zoom": 6,
    "color": "#059669",
    "stops": [
      {
        "num": "D1-D2",
        "name": "Manila (Intramuros)",
        "coords": [
          14.5995,
          120.9842
        ],
        "desc": "Capital histórica, murallas coloniales y Binondo",
        "dayIdx": 0
      },
      {
        "num": "D3",
        "name": "Banaue & Batad",
        "coords": [
          16.92,
          121.05
        ],
        "desc": "Anfiteatro de terrazas de arroz (UNESCO)",
        "dayIdx": 2
      },
      {
        "num": "D4-D5",
        "name": "Sagada",
        "coords": [
          17.0833,
          120.9
        ],
        "desc": "Ataúdes colgantes, Marlboro Hills y cueva Sumaguing",
        "dayIdx": 4
      },
      {
        "num": "D6-D7",
        "name": "Vigan (UNESCO)",
        "coords": [
          17.5747,
          120.3869
        ],
        "desc": "Ciudad colonial española del siglo XVI y calesas",
        "dayIdx": 5
      },
      {
        "num": "D8",
        "name": "Cebú City",
        "coords": [
          10.3157,
          123.8854
        ],
        "desc": "Cruz de Magallanes y Basílica del Santo Niño",
        "dayIdx": 7
      },
      {
        "num": "D9-D10",
        "name": "Bohol & Balicasag",
        "coords": [
          9.8333,
          124.1667
        ],
        "desc": "Chocolate Hills, tarsiers y tortugas en Balicasag / Apo Island",
        "dayIdx": 8
      },
      {
        "num": "D11",
        "name": "Moalboal & Kawasan",
        "coords": [
          9.9567,
          123.4
        ],
        "desc": "Sardine Run masivo y barranquismo en Kawasan Falls",
        "dayIdx": 10
      },
      {
        "num": "D12-D14",
        "name": "Coron (Palawan)",
        "coords": [
          11.9986,
          120.2075
        ],
        "desc": "Lagos Kayangan y Barracuda, pecios de la II Guerra Mundial",
        "dayIdx": 11
      },
      {
        "num": "D15-D18",
        "name": "El Nido (Palawan)",
        "coords": [
          11.1949,
          119.4075
        ],
        "desc": "Archipiélago de Bacuit, Big Lagoon, Taraw Cliff y Nacpan",
        "dayIdx": 14
      },
      {
        "num": "D19-D20",
        "name": "Puerto Princesa",
        "coords": [
          9.7392,
          118.7353
        ],
        "desc": "Parque Nacional del Río Subterráneo (Maravilla Mundial)",
        "dayIdx": 18
      },
      {
        "num": "D21",
        "name": "Manila (Salida)",
        "coords": [
          14.5995,
          120.9842
        ],
        "desc": "Tesoros de oro prehispánico en Museo Ayala y regreso",
        "dayIdx": 20
      }
    ]
  },
  "colombia": {
    "center": [
      6.5,
      -74.5
    ],
    "zoom": 6,
    "color": "#d97706",
    "stops": [
      {
        "num": "D1-D2",
        "name": "Bogotá & Zipaquirá",
        "coords": [
          4.711,
          -74.0721
        ],
        "desc": "Monserrate, Museo del Oro y Catedral de Sal subterránea",
        "dayIdx": 0
      },
      {
        "num": "D3-D4",
        "name": "Desierto de la Tatacoa",
        "coords": [
          3.2333,
          -75.1667
        ],
        "desc": "Cárcavas rojas de El Cuzco, cañón gris y observatorio astronómico",
        "dayIdx": 2
      },
      {
        "num": "D5-D7",
        "name": "Eje Cafetero (Salento)",
        "coords": [
          4.6375,
          -75.5708
        ],
        "desc": "Palmas de cera de 60m en Cocora, fincas cafeteras y Filandia",
        "dayIdx": 4
      },
      {
        "num": "D8-D9",
        "name": "Medellín & Guatapé",
        "coords": [
          6.2442,
          -75.5812
        ],
        "desc": "Comuna 13, Botero, metrocable y Piedra del Peñol (740 peldaños)",
        "dayIdx": 7
      },
      {
        "num": "D10-D11",
        "name": "Minca (Sierra Nevada)",
        "coords": [
          11.1444,
          -74.1167
        ],
        "desc": "Selva andina, aves endémicas, cacao y cascadas de Marinka",
        "dayIdx": 9
      },
      {
        "num": "D12-D13",
        "name": "Parque Nacional Tayrona",
        "coords": [
          11.3167,
          -73.9167
        ],
        "desc": "Cabo San Juan del Guía, La Piscina y arrecifes de granito",
        "dayIdx": 11
      },
      {
        "num": "D14-D17",
        "name": "Cartagena & Palenque",
        "coords": [
          10.391,
          -75.4794
        ],
        "desc": "Murallas coloniales, Castillo San Felipe y San Basilio de Palenque",
        "dayIdx": 13
      },
      {
        "num": "D18-D19",
        "name": "Islas del Rosario",
        "coords": [
          10.1833,
          -75.75
        ],
        "desc": "Arrecifes coralinos en Isla Grande y plancton bioluminiscente",
        "dayIdx": 17
      },
      {
        "num": "D20-D21",
        "name": "Cartagena - Bogotá (Salida)",
        "coords": [
          4.711,
          -74.0721
        ],
        "desc": "Compras de artesanías de autor y vuelo transatlántico a España",
        "dayIdx": 19
      }
    ]
  },
  "china": {
    "center": [
      30.5,
      111.0
    ],
    "zoom": 5,
    "color": "#dc2626",
    "stops": [
      {
        "num": "D1-D4",
        "name": "Pekín (Beijing)",
        "coords": [
          39.9042,
          116.4074
        ],
        "desc": "Ciudad Prohibida, Gran Muralla Jinshanling y Templo del Cielo",
        "dayIdx": 0
      },
      {
        "num": "D5-D6",
        "name": "Xi'an",
        "coords": [
          34.3416,
          108.9398
        ],
        "desc": "Guerreros de Terracota (UNESCO) y muralla medieval en bici",
        "dayIdx": 4
      },
      {
        "num": "D7-D8",
        "name": "Chengdu & Leshan",
        "coords": [
          30.5728,
          104.0668
        ],
        "desc": "Base de Pandas, Gran Buda de 71m (o Sanxingdui) y hotpot",
        "dayIdx": 6
      },
      {
        "num": "D9-D11",
        "name": "Yunnan & Salto del Tigre",
        "coords": [
          26.855,
          100.2277
        ],
        "desc": "Lijiang UNESCO y gran trekking de la Garganta del Salto del Tigre",
        "dayIdx": 8
      },
      {
        "num": "D12-D15",
        "name": "Zhangjiajie (Avatar)",
        "coords": [
          29.117,
          110.479
        ],
        "desc": "Pilares flotantes, puente de cristal con tirolina/tobogán y Tianmen",
        "dayIdx": 11
      },
      {
        "num": "D16-D17",
        "name": "Guilin & Yangshuo",
        "coords": [
          24.7766,
          110.4947
        ],
        "desc": "Crucero por el Río Li en billete de 20¥, río Yulong y Moon Hill",
        "dayIdx": 15
      },
      {
        "num": "D18-D19",
        "name": "Shenzhen (Tech Capital)",
        "coords": [
          22.5431,
          114.0579
        ],
        "desc": "Huaqiangbei, Flagship de DJI, Ping An 599m, drones y robotaxis",
        "dayIdx": 17
      },
      {
        "num": "D20-D21",
        "name": "Shanghái & Suzhou",
        "coords": [
          31.2304,
          121.4737
        ],
        "desc": "Jardines de Suzhou (UNESCO), Torre de Shanghái 632m y Maglev",
        "dayIdx": 19
      }
    ]
  }
};

const tripMaps = {};

document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  initTabs();
  initFilterButtons();
  initComparisonModal();

  // Initialize initial map for active tab
  setTimeout(() => {
    initTripMap('filipinas');
  }, 200);
});

function renderApp() {
  const container = document.getElementById('trips-container');
  if (!container) return;
  container.innerHTML = '';

  TRIPS_DATA.trips.forEach((trip, tIdx) => {
    const panel = document.createElement('div');
    panel.className = `trip-panel ${tIdx === 0 ? 'active' : ''}`;
    panel.id = `panel-${trip.id}`;

    const routeInfo = (typeof MAP_ROUTES !== 'undefined' && MAP_ROUTES) ? MAP_ROUTES[trip.id] : null;
    let routeRibbonHtml = '';
    if (routeInfo) {
      routeRibbonHtml = routeInfo.stops.map((s, sIdx) => `
        <div class='route-step-pill' onclick='focusMapStop("${trip.id}", ${sIdx}, ${s.dayIdx})'>
          <span class='step-badge'>${s.num}</span>
          <span>${s.name}</span>
        </div>
        ${sIdx < routeInfo.stops.length - 1 ? "<span class='route-arrow'>➔</span>" : ""}
      `).join('');
    }

    // Render Highlights
    const highlightsHtml = trip.highlights.map(h => `
      <div class='highlight-card'>
        <div class='highlight-icon'>${h.icon}</div>
        <div class='highlight-title'>${h.title}</div>
        <div class='highlight-desc'>${h.desc}</div>
      </div>
    `).join('');

    // Render Gallery
    const galleryHtml = trip.gallery.map(g => `
      <div class='gallery-card'>
        <div class='gallery-img-wrapper'>
          <img src='${g.img}' alt='${g.title}' loading='lazy' />
          <span class='gallery-loc-pill'>📍 ${g.location}</span>
        </div>
        <div class='gallery-content'>
          <h4 class='gallery-item-title'>${g.title}</h4>
          <p class='gallery-item-desc'>${g.desc}</p>
        </div>
      </div>
    `).join('');

    // Render Gastro
    const gastroHtml = trip.gastro.map(item => `
      <div class='gastro-card'>
        <div class='gastro-icon'>🍽️</div>
        <div>
          <h4 class='gastro-dish'>${item.dish}</h4>
          <p class='gastro-desc'>${item.desc}</p>
        </div>
      </div>
    `).join('');

    // Render Days Timeline
    const daysHtml = trip.days.map((d, dIdx) => {
      let tagsHtml = d.tags.map(t => {
        let cls = 'nature';
        if (t.includes('Cultura') || t.includes('Historia') || t.includes('Patrimonio')) cls = 'culture';
        if (t.includes('Traslado') || t.includes('Vuelo') || t.includes('Tren')) cls = 'transit';
        if (t.includes('Gastro')) cls = 'gastro';
        return `<span class='tag-badge ${cls}'>${t}</span>`;
      }).join('');

      let openClass = dIdx === 0 ? 'open' : '';

      // 3 Photos Grid
      const photosGridHtml = `
        <div class='day-photos-grid'>
          ${d.photos.map(p => `
            <div class='day-photo-card'>
              <div class='day-photo-wrapper'>
                <img src='${p.url}' alt='${p.caption}' loading='lazy' onerror="this.onerror=null;this.src='${d.photo}';"/>
                <div class='photo-overlay-badge'>${p.caption}</div>
              </div>
            </div>
          `).join('')}
        </div>
      `;

      return `
        <div class='day-card ${openClass}' id='card-${trip.id}-day-${dIdx}' data-tags='${d.tags.join(',')}'>
          <div class='day-header' onclick='toggleDayCard(this)'>
            <div class='day-header-left'>
              <span class='day-pill'>${d.num}</span>
              <span class='day-title-text'>${d.title}</span>
            </div>
            <div class='day-tags'>
              ${tagsHtml}
              <span class='toggle-icon'>▼</span>
            </div>
          </div>
          <div class='day-body'>
            ${photosGridHtml}
            <div class='day-body-content'>
              <div class='day-logistics-box'>
                <span>🚗</span> <strong>Logística:</strong> ${d.transp}
              </div>
              <div class='time-slot'>
                <strong>🌅 Mañana:</strong>
                <span>${d.morning}</span>
              </div>
              <div class='time-slot'>
                <strong>☀️ Tarde:</strong>
                <span>${d.afternoon}</span>
              </div>
              <div class='time-slot'>
                <strong>🌙 Noche:</strong>
                <span>${d.evening}</span>
              </div>
              <div class='day-hotel-box'>
                <span>🏨</span>
                <div><strong>Alojamiento Recomendado:</strong> ${d.hotel}</div>
              </div>
              <div class='day-gastro-box'>
                <span>🍽️</span>
                <div><strong>Gastronomía Destacada:</strong> ${d.gastro}</div>
              </div>
              <div class='day-links-box'>
                <span>🔗 Enlaces:</span> ${d.links}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    panel.innerHTML = `
      <!-- Hero -->
      <div class='trip-hero' style='background-image: url("${trip.hero_img}");'>
        <div class='hero-content'>
          <div class='hero-badge-pill'>${trip.flag} PROPUESTA OFICIAL 3 SEMANAS</div>
          <h2 class='hero-title'>${trip.title}</h2>
          <p class='hero-subtitle'>${trip.subtitle}</p>
          <div class='hero-stats-row'>
            <div class='stat-item'>
              <span class='stat-label'>Duración</span>
              <span class='stat-val'>${trip.stats.duration}</span>
            </div>
            <div class='stat-item'>
              <span class='stat-label'>Ritmo</span>
              <span class='stat-val'>${trip.stats.pace}</span>
            </div>
            <div class='stat-item'>
              <span class='stat-label'>Balance</span>
              <span class='stat-val'>${trip.stats.culture_pct} Cult / ${trip.stats.nature_pct} Nat</span>
            </div>
            <div class='stat-item'>
              <span class='stat-label'>Época Ideal</span>
              <span class='stat-val'>${trip.stats.best_season}</span>
            </div>
          </div>
          <a href='${trip.doc_file}' class='btn-download-docx' download>
            📥 Descargar Itinerario Word Completo (.docx)
          </a>
        </div>
      </div>

      <!-- DNA Match -->
      <div class='dna-match-card ${trip.id}'>
        <div class='dna-title'>
          <span>🧬</span> Por qué este destino encaja al 100% con vuestro ADN Viajero
        </div>
        <p class='dna-text'>${trip.dna_match}</p>
      </div>

      <!-- Interactive Route Map Section -->
      <div class='trip-map-section'>
        <div class='map-header-row'>
          <h3 class='map-title'><span>🗺️</span> Mapa de la Expedición y Trazado de la Ruta</h3>
          <span class='map-hint'>Haz clic en los puntos numerados o en la barra inferior para ver cada etapa y saltar al día</span>
        </div>
        <div id='map-${trip.id}' class='trip-map-container'></div>
        <div class='route-ribbon'>
          ${routeRibbonHtml}
        </div>
      </div>

      <!-- Visual Wonders Gallery -->
      <div class='section-block'>
        <h3 class='section-block-title'>
          <span>📸</span> Galería Visual de Maravillas Reales
        </h3>
        <div class='gallery-grid'>
          ${galleryHtml}
        </div>
      </div>

      <!-- Day by Day Timeline -->
      <div class='section-block'>
        <h3 class='section-block-title'>
          <span>🗓️</span> Itinerario Detallado Día a Día (21 Días — 3 Fotos Reales por Día)
        </h3>
        <div class='days-filter-bar' data-trip='${trip.id}'>
          <button class='filter-btn active' data-filter='all'>Todos los días (21)</button>
          <button class='filter-btn' data-filter='nature'>🌿 Naturaleza & Aventura</button>
          <button class='filter-btn' data-filter='culture'>🏛️ Cultura & Patrimonio</button>
          <button class='filter-btn' data-filter='transit'>✈️ Grandes Traslados</button>
        </div>
        <div class='days-timeline' id='timeline-${trip.id}'>
          ${daysHtml}
        </div>
      </div>

      <!-- Gastro Section -->
      <div class='section-block'>
        <h3 class='section-block-title'>
          <span>🍜</span> Experiencias Gastronómicas Autóctonas
        </h3>
        <div class='gastro-grid'>
          ${gastroHtml}
        </div>
      </div>
    `;

    container.appendChild(panel);
  });
}

function initTripMap(tripId) {
  if (typeof L === 'undefined') return;
  const container = document.getElementById(`map-${tripId}`);
  if (!container) return;

  if (tripMaps[tripId]) {
    tripMaps[tripId].invalidateSize();
    return;
  }

  const routeData = (typeof MAP_ROUTES !== 'undefined' && MAP_ROUTES) ? MAP_ROUTES[tripId] : null;
  if (!routeData) return;

  const map = L.map(`map-${tripId}`, {
    center: routeData.center,
    zoom: routeData.zoom,
    scrollWheelZoom: false
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18
  }).addTo(map);

  // Draw Polyline Route
  const latlngs = routeData.stops.map(s => s.coords);
  L.polyline(latlngs, {
    color: routeData.color,
    weight: 3.5,
    opacity: 0.85,
    dashArray: '6, 8',
    smoothFactor: 1
  }).addTo(map);

  // Add Custom Markers
  routeData.stops.forEach((stop, idx) => {
    const customIcon = L.divIcon({
      className: 'custom-map-pin',
      html: `<div style="background-color: ${routeData.color}; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 800; font-size: 11px; border: 2.5px solid #fff; box-shadow: 0 3px 8px rgba(0,0,0,0.35);">${idx+1}</div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -14]
    });

    const marker = L.marker(stop.coords, { icon: customIcon }).addTo(map);

    const popupHtml = `
      <div class='map-popup-card'>
        <span class='popup-tag' style='color: ${routeData.color};'>${stop.num}</span>
        <h4 class='popup-title'>${stop.name}</h4>
        <p class='popup-desc'>${stop.desc}</p>
        <button class='popup-btn' onclick='scrollToDayCard("${tripId}", ${stop.dayIdx})'>Ver Día en el Itinerario ➔</button>
      </div>
    `;

    marker.bindPopup(popupHtml);
  });

  tripMaps[tripId] = map;
}

function focusMapStop(tripId, stopIdx, dayIdx) {
  const routeData = (typeof MAP_ROUTES !== 'undefined' && MAP_ROUTES) ? MAP_ROUTES[tripId] : null;
  const map = tripMaps[tripId];
  if (routeData && map && routeData.stops[stopIdx]) {
    const stop = routeData.stops[stopIdx];
    map.setView(stop.coords, Math.max(map.getZoom(), 8), { animate: true });
  }
  scrollToDayCard(tripId, dayIdx);
}

function scrollToDayCard(tripId, dayIdx) {
  const card = document.getElementById(`card-${tripId}-day-${dayIdx}`);
  if (card) {
    if (!card.classList.contains('open')) {
      card.classList.add('open');
    }
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.style.transition = 'box-shadow 0.4s ease';
    card.style.boxShadow = '0 0 0 3px #3b82f6, 0 10px 25px rgba(59, 130, 246, 0.25)';
    setTimeout(() => {
      card.style.boxShadow = '';
    }, 2000);
  }
}

function toggleDayCard(headerElement) {
  const card = headerElement.closest('.day-card');
  card.classList.toggle('open');
}

function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetId = btn.getAttribute('data-tab');
      document.querySelectorAll('.trip-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      const targetPanel = document.getElementById('panel-' + targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Initialize or refresh Leaflet map
        setTimeout(() => {
          initTripMap(targetId);
        }, 200);
      }
    });
  });
}

function initFilterButtons() {
  document.querySelectorAll('.days-filter-bar').forEach(bar => {
    const tripId = bar.getAttribute('data-trip');
    const timeline = document.getElementById('timeline-' + tripId);
    if (!timeline) return;
    const buttons = bar.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        const cards = timeline.querySelectorAll('.day-card');

        cards.forEach(card => {
          const tags = card.getAttribute('data-tags') || '';
          if (filter === 'all') {
            card.style.display = 'block';
          } else if (filter === 'nature' && (tags.includes('Naturaleza') || tags.includes('Selva') || tags.includes('Marino'))) {
            card.style.display = 'block';
          } else if (filter === 'culture' && (tags.includes('Cultura') || tags.includes('Historia') || tags.includes('Patrimonio'))) {
            card.style.display = 'block';
          } else if (filter === 'transit' && (tags.includes('Traslado') || tags.includes('Vuelo') || tags.includes('Tren'))) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });
}

function initComparisonModal() {
  const modal = document.getElementById('compare-modal');
  const openBtn = document.getElementById('btn-open-compare');
  const closeBtn = document.getElementById('btn-close-compare');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => modal.classList.add('open'));
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }
}
