// import { serviceFunction } from service/user.js
// export async function getUser(username) {
//   const user = await findUserByUsername();
//   const chat = await getChat(user);
//   const somethingElse = doSomethingElse(chat);
//   return somethingElse;
// } example
const type ='product/'
module.exports = {
    index: (req, res) => {
        res.render(type, {
            title: 'Flat Admin V.2 - Free Bootstrap Admin Templates',
            type: type,
        });
    },
    add: (req, res) => {
        res.render(type+'add', {
            title: 'Flat Admin V.2 - Free Bootstrap Admin Templates',
            type: type,
            event: 'createProduct()'
        });
    },

    edit: (req, res) => {
        res.render(type+'add', {
            title: 'Flat Admin V.2 - Free Bootstrap Admin Templates',
            type: type,
            event: 'editProduct()'
        });
    },
    
   
}