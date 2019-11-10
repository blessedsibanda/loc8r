const homelist = (req, res) => {
	res.render('index', { title: 'Loc8r App' });
};

const locationInfo = (req, res) => {
	res.send('location info page');
};

const addReview = (req, res) => {
	res.send('add review page');
};

module.exports = {
	homelist,
	locationInfo,
	addReview
};
