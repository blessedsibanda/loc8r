const homelist = (req, res) => {
	res.render('locations-list', {
		title: 'Loc8r - find a place to work with wifi',
		pageHeader: {
			title: 'Loc8r',
			strapline: 'Find places to work with wifi near you!'
		},
		sidebar:
			"Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
		locations: [
			{
				name: 'Starcups',
				address: '125 High Street, Reading, RG6 1PS',
				rating: 3,
				facilities: [ 'Hot drinks', 'Food', 'Premium wifi' ],
				distance: '100m'
			},
			{
				name: 'Cafe Hero',
				address: '125 High Street, Reading, RG6 1PS',
				rating: 4,
				facilities: [ 'Hot drinks', 'Food', 'Premium wifi' ],
				distance: '200m'
			},
			{
				name: 'Burger Queen',
				address: '125 High Street, Reading, RG6 1PS',
				rating: 2,
				facilities: [ 'Food', 'Premium wifi' ],
				distance: '250m'
			}
		]
	});
};

const locationInfo = (req, res) => {
	res.render('location-info', {
		src: 'https://maps.google.com/maps?q=Bulawayo,%20Zimbabwe&t=&z=14&ie=UTF8&iwloc=&output=embed',
		title: 'Loc8r - find a place to work with wifi',
		location: {
			name: 'Starcups Name',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: [ 'Hot drinks', 'Food', 'Premium wifi' ],
			distance: '100m',
			reviews: [
				{
					rating: 4,
					author: 'Blessed Sibanda',
					timestamp: '11 October 2019',
					content: 'What a great place'
				},
				{
					rating: 2,
					author: 'Simon Holmes',
					timestamp: '02 October 2019',
					content: "It was okay. Coffee wasn't great."
				}
			],
			openingTimes: [
				{ days: 'Monday - Friday', time: '7:00am - 7:00pm' },
				{ days: 'Saturday', time: '8:00am - 5:00pm' },
				{ days: 'Sunday', time: 'closed' }
			]
		}
	});
};

const addReview = (req, res) => {
	res.render('location-review-form', {});
};

module.exports = {
	homelist,
	locationInfo,
	addReview
};
