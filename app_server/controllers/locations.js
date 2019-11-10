const homelist = (req, res) => {
	res.render('locations-list', {});
};

const locationInfo = (req, res) => {
	res.render('location-info', {
		src: 'https://maps.google.com/maps?q=Bulawayo,%20Zimbabwe&t=&z=14&ie=UTF8&iwloc=&output=embed'
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
