// this is home controller
const mdun = 'master'
module.exports = {
    index: (req, res) => {
        res.render(mdun + '/dashboard', {
            title: '' 
        });
    },
    agency: (req, res) => {
        res.render(mdun + '/agency', {
            title: 'Agency '
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
            title: 'Customer Admin' 
        });
    },
    addcustomer: (req, res) => {
        res.render(mdun + '/customer/add', {
            title: 'Add Address Customer' 
        })
    },
    product: (req, res) => {
        res.render(mdun + '/product', {
            title: 'Product List '
        });
    },
    addproduct: (req, res) => {
        res.render(mdun + '/product/add', {
            title: 'Add Address Product '
        })
    }
}