// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Mac',
	imageBackground: true,
	openInNewTab: false,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'f4901f20bd57da8804b62dd579c52198',
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '45.421532',
	defaultLongitude: '-75.697189',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

    //for some reason it sorts icons by id in this order
    //1 2 5 
    //3 4 6
    //so I switched 3 and 5 ids
	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Outlook',
			icon: 'mail',
			link: 'https://outlook.live.com/mail/0'
		},
		{
			id: '5',
			name: 'Gmail',
			icon: 'mail-open',
			link: 'https://outlook.live.com/mail/0'
		},
		{
			id: '3',
			name: 'Jira',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '4',
			name: 'Datadog',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '6',
			name: '',
			icon: 'youtube',
			link: 'https://odysee.com/',
		}
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'newspaper',
			id: '1',
			links: [
				{
					name: 'Current Events',
					link: 'https://en.wikipedia.org/wiki/Portal:Current_events',
				}, {
                    name: 'Hackernews',
                    link: 'https://news.ycombinator.com/',
                }, {
					name: 'Pocket',
					link: 'https://getpocket.com/saves?src=recent-saves',
				}, {
                    name: 'Podcasts',
                    link: 'https://play.pocketcasts.com/podcasts'
                }

			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Current Events',
					link: 'https://en.wikipedia.org/wiki/Portal:Current_events',
				}, {
					name: '',
					link: 'https://www.reddit.com',
				}, {
                    name: 'Hackernews',
                    link: 'https://news.ycombinator.com/',
                }, {
					name: 'Pocket',
					link: 'https://getpocket.com/saves?src=recent-saves',
				}
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Github',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Jira',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Confluence',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
