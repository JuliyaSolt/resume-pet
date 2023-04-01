// Підключаємо технологію express для back-end сервера
const express = require('express')
const { ModuleFilenameHelpers } = require('webpack')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header= {
	name: {
		firstname: 'Ivan',
		lastname: 'Ivanov',
	 },
position: 'Junior Fullstack Developer',
salary: '600$ в місяць',
address: 'Україна м.Київ вул.Андрія Скрябіна, 26', 
} 

var footer= {
	social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      href: 'https://www.C.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
	page: {
  title: 'Resume | Summary',
	},
	
	header,

  main: {   
   summary: {
    tile: 'Summary',
    text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
    work on a new project I learn the domain and try to understand the idea of the project. Good team
    player, every colleague is a friend to me.`,
	}, 

   experience: {
    tile: 'Other experience',
    text:` Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
      tournament position, goals etc), analyzing by simple mathematics models and preparing probability
      for such events like: money line - first win / draw / second win, totals etc.`,
   },
	},
 
  footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
    title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
				{ 
					name:'HTML',
					point: 10,
					isTop: true,
			    },
				{
					name:'Handlebars',
					point: 10,
					isTop: true,
			    },
				{ 
					name:'VS code & NPM',
					point: 10,
					isTop: true,
			    },
				{ 
					name:'Terminal & Git',
					point: 9,	
			    },
				{ 
					name:'React.js',
					point: 0,
			    },
				{ 
					name:'PHP',
					point: null,
			    },
			],
			hobbies: [
				{
					name: 'Малювання',
					isMain: false,
				},
				{
					name: 'Пілатес',
					isMain: true,
				},
				{
					name: 'Йога',
					isMain: true,
				},
			],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
    title: 'Resume | Education ',
    },

    header,

    main: {
    education: [
		  {
				name:	'Київський національний університет імені Тараса Шевченка',
				isEnd: true,
			},
			{
				name:	'Національний авіаційний університет',
				isEnd: true,
			},
			{
				name:	'Харківський національний університет радіотехніки',
				isEnd: false,
			},
		],
		certificates: [
			{
				name:'Диплом КНУ',
				id: 'АС №453628',	
			},
			{
				name:'Диплом НАУ',
				id: 'АВ №342546',	
			},		
		],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
    title: 'Resume | Work ',
    },

    header,

    main: {
    	works: [{
		position: 'Junior Fullstack Developer',
		company: {
			name: 'IT Brains',
			url: 'https://it-brains.com.ua/',
		},
		duration: {
			from: '21.10.2022',
			to: null,
	  },
		projectAmount: 3,

		projects: [
			{
				name: 'Resume',
				url: 'https://resume.com.ua/',
				about: 'Airbnb competitor.High-load application for searching apartments',
				stacks: [
					{
						name: 'React.js',		
					},
					{
						name: 'HTML/CSS',		
					},
					{
						name: 'Node.js',		
					},
				],
			stackAmount: 3,
			awards: [
				{
					name: 'Digital Transformation of the Year',
				},
				{
					name: 'HR and Digital Workplace Tech of the Year',
				},
			],
			awardAmount: 2,
			},
		],
	}],
},
    footer,
  })
})

// ================================================================



// Підключаємо роутер до бек-енду
module.exports = router
