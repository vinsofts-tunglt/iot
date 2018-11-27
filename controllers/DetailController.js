const mdun = 'detail'
module.exports = {
    index: (req, res) => {
        res.render(mdun, {
            title: 'Detail',
            id:req.body.addressWarranty
        });
    }
}