// this is home controller
module.exports = {
    index: (req, res) => {
         res.render('index', {
             title: 'best'
         });
    }
}