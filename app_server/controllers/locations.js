const homelist = (req, res) => {
	res.render('locations-list', {});
};

const locationInfo = (req, res) => {
	res.render('index', { title: 'Location Info' });
};

const addReview = (req, res) => {
	res.render('index', { title: 'Add review' });
};

module.exports = {
	homelist,
	locationInfo,
	addReview
};
