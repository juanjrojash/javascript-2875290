/*id, nombre, year, genero, image */

let peliculas = [

    {
        id: 1,
        nombre: 'Twisters',
        year: 2024,
        direccion: 'Lee Isaac Chung',
        guionistas: ['Mark. L Smith', 'Michael Crichton', 'Joseph Kosinski'],
        genero: 'Acción',
        image: 'https://images.justwatch.com/poster/315736719/s166/twisters.webp'
    },
    {
        id: 2,
        nombre: 'Oppenheimer',
        year: 2023,
        direccion: 'Christopher Nolan',
        guionistas: ['Christopher Nolan'],
        genero: 'Drama',
        image: 'https://images.justwatch.com/poster/306300008/s166/oppenheimer.webp'
    },
    {
        id: 3,
        nombre: 'Barbie',
        year: 2023,
        direccion: 'Greta Gerwig',
        guionistas: ['Greta Gerwig', 'Noah Baumbach'],
        genero: 'Comedia',
        image: 'https://images.justwatch.com/poster/306421131/s166/barbie.webp'
    },
    {
        id: 4,
        nombre: 'Mission: Impossible – Dead Reckoning Part One',
        year: 2023,
        direccion: 'Christopher McQuarrie',
        guionistas: ['Christopher McQuarrie', 'Erik Jendresen'],
        genero: 'Acción',
        image: 'https://images.justwatch.com/poster/305934816/s166/mision-imposible-7.webp'
    },
    {
        id: 5,
        nombre: 'The Flash',
        year: 2023,
        direccion: 'Andy Muschietti',
        guionistas: ['Christina Hodson'],
        genero: 'Superhéroes',
        image: 'https://images.justwatch.com/poster/305934694/s166/the-flash.webp'
    },
    {
        id: 6,
        nombre: 'Guardians of the Galaxy Vol. 3',
        year: 2023,
        direccion: 'James Gunn',
        guionistas: ['James Gunn'],
        genero: 'Superhéroes',
        image: 'https://images.justwatch.com/poster/305935648/s166/guardianes-de-la-galaxia-vol-3.webp'
    },
    {
        id: 7,
        nombre: 'Transformers: Rise of the Beasts',
        year: 2023,
        direccion: 'Steven Caple Jr.',
        guionistas: ['Joby Harold', 'Darnell Metayer', 'Josh Peters', 'Erich Hoeber', 'Jon Hoeber'],
        genero: 'Acción',
        image: 'https://images.justwatch.com/poster/305924988/s166/transformers-el-despertar-de-las-bestias.webp'
    },
    {
        id: 8,
        nombre: 'Fast X',
        year: 2023,
        direccion: 'Louis Leterrier',
        guionistas: ['Justin Lin', 'Dan Mazeau'],
        genero: 'Acción',
        image: 'https://images.justwatch.com/poster/305793499/s166/fast-x.webp'
    },
    {
        id: 9,
        nombre: 'The Super Mario Bros. Movie',
        year: 2023,
        direccion: ['Aaron Horvath', 'Michael Jelenic'],
        guionistas: ['Matthew Fogel'],
        genero: 'Animación',
        image: 'https://images.justwatch.com/poster/302796037/s166/super-mario-bros-the-movie.webp'
    },
    {
        id: 10,
        nombre: 'Deadpool',
        year: 2016,
        direccion: 'Tim Miller',
        guionistas: ['Rhett Reese', 'Paul Wernick'],
        genero: 'Acción',
        image: 'https://images.justwatch.com/poster/260157237/s166/deadpool.webp'
    },
    {
        id: 11,
        nombre: 'Intensamente',
        year: 2015,
        direccion: 'Pete Docter',
        guionistas: ['Pete Docter', 'Meg LeFauve', 'Josh Cooley'],
        genero: 'Animación',
        image: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg'
    },
    {
        id: 12,
        nombre: 'Con todos menos contigo',
        year: 2023,
        direccion: 'Ivan Reitman',
        guionistas: ['Elizabeth Meriwether'],
        genero: 'Comedia Romántica',
        image: 'https://images.justwatch.com/poster/312178510/s166/anyone-but-you.webp'
    },
    {
        id: 13,
        nombre: 'Origen',
        year: 2010,
        direccion: 'Christopher Nolan',
        guionistas: ['Christopher Nolan'],
        genero: 'Ciencia Ficción',
        image: 'https://images.justwatch.com/poster/122809643/s166/origen.webp'
    },
    {
        id: 14,
        nombre: 'Enredados',
        year: 2010,
        direccion: ['Nathan Greno', 'Byron Howard'],
        guionistas: ['Dan Fogelman'],
        genero: 'Animación',
        image: 'https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg'
    },
    {
        id: 15,
        nombre: 'Hombres de Negro',
        year: 1997,
        direccion: 'Barry Sonnenfeld',
        guionistas: ['Ed Solomon'],
        genero: 'Ciencia Ficción',
        image: 'https://images.justwatch.com/poster/97503385/s166/hombres-de-negro.webp'
    },
    {
        id: 16,
        nombre: 'Gigantes de Acero',
        year: 2011,
        direccion: 'Shawn Levy',
        guionistas: ['John Gatins'],
        genero: 'Ciencia Ficción',
        image: 'https://images.justwatch.com/poster/125671690/s166/acero-puro.webp'
    },
    {
        id: 17,
        nombre: 'Iron Man',
        year: 2008,
        direccion: 'Jon Favreau',
        guionistas: ['Mark Fergus', 'Hawk Ostby', 'Art Marcum', 'Matt Holloway'],
        genero: 'Superhéroes',
        image: 'https://images.justwatch.com/poster/243962162/s166/iron-man.webp'
    },
    {
        id: 18,
        nombre: 'La Familia del Futuro',
        year: 2007,
        direccion: 'Stephen Anderson',
        guionistas: ['Jon Bernstein', 'Michelle Spitz', 'Don Hall', 'Nathan Greno', 'Aurian Redson', 'Joe Mateo'],
        genero: 'Animación',
        image: 'https://images.justwatch.com/poster/309794392/s166/descubriendo-a-los-robinsons.webp'
    },
    {
        id: 19,
        nombre: 'La Razón de Estar Contigo',
        year: 2017,
        direccion: 'Lasse Hallström',
        guionistas: ['W. Bruce Cameron', 'Cathryn Michon', 'Audrey Wells', 'Maya Forbes', 'Wally Wolodarsky'],
        genero: 'Drama',
        image: 'https://images.justwatch.com/poster/90145552/s166/tu-mejor-amigo.webp'
    },
    {
        id: 20,
        nombre: 'La Bella y la Bestia',
        year: 2017,
        direccion: 'Bill Condon',
        guionistas: ['Stephen Chbosky', 'Evan Spiliotopoulos'],
        genero: 'Fantasía',
        image: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Beauty_and_the_Beast_2017_poster.jpg'
    },
    {
        id: 21,
        nombre: 'Extraordinario',
        year: 2017,
        direccion: 'Stephen Chbosky',
        guionistas: ['Jack Thorne', 'Steve Conrad', 'Stephen Chbosky'],
        genero: 'Drama',
        image: 'https://upload.wikimedia.org/wikipedia/en/6/67/Wonder_%28film%29.png'
    },
    {
        id: 22,
        nombre: 'Antes de Partir',
        year: 2007,
        direccion: 'Rob Reiner',
        guionistas: ['Justin Zackham'],
        genero: 'Drama',
        image: 'https://images.justwatch.com/poster/16770884/s166/ahora-o-nunca.webp'
    },
    {
        id: 23,
        nombre: 'Belleza Inesperada',
        year: 2016,
        direccion: 'David Frankel',
        guionistas: ['Allan Loeb'],
        genero: 'Drama',
        image: 'https://images.justwatch.com/poster/94339142/s166/belleza-oculta.webp'
    },
    {
        id: 24,
        nombre: 'La Máscara',
        year: 1994,
        direccion: 'Chuck Russell',
        guionistas: ['Mike Werb'],
        genero: 'Comedia',
        image: 'https://images.justwatch.com/poster/288438218/s166/la-mascara.webp'
    },
    {
        id: 25,
        nombre: 'Zootopia',
        year: 2016,
        direccion: ['Byron Howard', 'Rich Moore'],
        guionistas: ['Jared Bush', 'Phil Johnston'],
        genero: 'Animación',
        image: 'https://images.justwatch.com/poster/180664894/s166/zootropolis.webp'
    },
    {
        id: 26,
        nombre: 'Reyes de las Olas',
        year: 2007,
        direccion: ['Ash Brannon', 'Chris Buck'],
        guionistas: ['Don Rhymer', 'Ash Brannon', 'Chris Buck', 'Christopher Jenkins'],
        genero: 'Animación',
        image: 'https://images.justwatch.com/poster/22742446/s166/locos-por-el-surf.webp'
    },
    {
        id: 27,
        nombre: 'Cars',
        year: 2006,
        direccion: ['John Lasseter', 'Joe Ranft'],
        guionistas: ['Dan Fogelman', 'John Lasseter', 'Joe Ranft', 'Kiel Murray', 'Phil Lorin', 'Jorgen Klubien'],
        genero: 'Animación',
        image: 'https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg'
    },
    {
        id: 28,
        nombre: 'La Sociedad de la Nieve',
        year: 2023,
        direccion: 'J. A. Bayona',
        guionistas: ['J. A. Bayona', 'Bernat Vilaplana', 'Jaime Marques', 'Nicolás Casariego'],
        genero: 'Drama',
        image: 'https://images.justwatch.com/poster/310469874/s166/la-sociedad-de-la-nieve.webp'
    },
    {
        id: 29,
        nombre: 'Mente Indomable',
        year: 1997,
        direccion: 'Gus Van Sant',
        guionistas: ['Matt Damon', 'Ben Affleck'],
        genero: 'Drama',
        image: 'https://upload.wikimedia.org/wikipedia/en/5/52/Good_Will_Hunting.png'
    },
    {
        id: 30,
        nombre: 'Hasta el Último Hombre',
        year: 2016,
        direccion: 'Mel Gibson',
        guionistas: ['Robert Schenkkan', 'Andrew Knight'],
        genero: 'Bélica',
        image: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Hacksaw_Ridge_poster.png'
    }
]