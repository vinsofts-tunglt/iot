// this is home controller
const mdun = 'admin'
module.exports = {
    index: (req, res) => {
        res.render(mdun + '/dashboard', {
            title: 'Dashboard ' + mdun
        });
    },
    user: (req, res) => {
        res.render(mdun + '/user', {
            title: 'List User '
        });
    },
    addUser: (req, res) => {
        res.render(mdun + '/user/add', {
            title: 'Add User ',
            event: 'createUser()'
        })
    },
    editUser: (req, res) => {
        res.render(mdun + '/user/edit', {
            title: 'Add User ',
            event: 'editUser()'
        })
    },
    product: (req, res) => {
        res.render(mdun + '/product', {
            title: 'List Product '
        });
    },
    addProduct: (req, res) => {
        res.render(mdun + '/product/add', {
            title: 'Add Product '
        })
    },
    warranty: (req, res) => {
        res.render(mdun + '/warranty', {
            title: 'List Warranty '
        });
    },
    addWarranty: (req, res) => {
        res.render(mdun + '/warranty/add', {
            title: 'Add Warranty',
            type: 1
        })
    },
    warrantyEdit: (req, res) => {
        res.render(mdun + '/warranty/add', {
            title: 'Edit Warranty',
            type: 2, // 2 la sua
            id: req.params.id
        })
    },
    warrantyDetail: (req, res) => {
        res.render(mdun + '/warranty/detail', {
            title: 'Detail Warranty',
            type: 3, // 3 la chitiet
            id: req.params.id
        })
    },
    warrantyByer: (req, res) => {
        res.render(mdun + '/warranty/byer', {
            title: 'Byer Warranty',
            type: 3, // 3 la chitiet
            id: req.params.id
        })
    },
}