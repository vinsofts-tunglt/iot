// this is home controller
const mdun = 'master'
module.exports = {
    index: (req, res) => {
        res.render(mdun + '/dashboard', {
            title: 'Dashboard ' + mdun
        });
    },
    agency: (req, res) => {
        res.render(mdun + '/agency', {
            title: 'Agency ' + mdun
        });
    },
    agencyadd: (req, res) => {
        res.render(mdun + '/agency/add', {
            title: 'Add Agency',
            type: 1 // 1 la them moi
        })
    },
    agencyedit: (req, res) => {
        res.render(mdun + '/agency/add', {
            title: 'Edit Agency',
            type: 2, // 2 la sua
            id: req.params.id
        })
    },
    customer: (req, res) => {
        res.render(mdun + '/customer', {
            title: 'List Sổ  Customer ' + mdun
        });
    },
    addcustomer: (req, res) => {
        res.render(mdun + '/customer/add', {
            title: 'Add Sổ Customer ' + mdun
        })
    },
    product: (req, res) => {
        res.render(mdun + '/product', {
            title: 'List Sổ  Product ' + mdun
        });
    },
    addproduct: (req, res) => {
        res.render(mdun + '/product/add', {
            title: 'Add Sổ Product ' + mdun
        })
    }
}