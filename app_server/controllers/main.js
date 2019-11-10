const index = (req, res) => {
	res.render('index', { title: 'Loc8r App' });
};

module.exports = {
	index
};
