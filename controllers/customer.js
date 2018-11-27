const type ='customer/'
module.exports = {
    index: (req, res) => {
        res.render(type, {
            title: 'Flat Admin V.2 - Free Bootstrap Admin Templates',
            type:type,
        });
    },
    add: (req, res) => {
        res.render(type+'add', {
            title: 'Flat Admin V.2 - Free Bootstrap Admin Templates',
            type:type,
            event: 'createCustommer()'
        });
    },
    edit: (req, res) => {
        res.render(type+'add', {
            title: 'Flat Admin V.2 - Free Bootstrap Admin Templates',
            type:type,
            event: 'editCustommer()',
            // addressWarranty:req.params.addressWarranty,
        });
    },
}
