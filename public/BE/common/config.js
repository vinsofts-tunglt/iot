var urlbase = window.location.origin;
var basenow = window.location.href;
console.log("urlbase", urlbase)
console.log("basenow", basenow)

var abiMaster = [{
  "constant": true,
  "inputs": [{
    "name": "_type",
    "type": "uint8"
  }],
  "name": "getListContract",
  "outputs": [{
    "components": [{
      "name": "owner",
      "type": "address"
    }, {
      "name": "addressContract",
      "type": "address"
    }],
    "name": "",
    "type": "tuple[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_contractWarranty",
    "type": "address"
  }, {
    "name": "_contractAgency",
    "type": "address"
  }],
  "name": "setListContractWarranty",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_contract",
    "type": "address"
  }, {
    "name": "_type",
    "type": "uint8"
  }],
  "name": "saveListContract",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_owner",
    "type": "address"
  }],
  "name": "getAgency",
  "outputs": [{
    "components": [{
      "name": "id",
      "type": "uint256"
    }, {
      "name": "owner",
      "type": "address"
    }, {
      "name": "name",
      "type": "string"
    }, {
      "name": "homeAddr",
      "type": "string"
    }, {
      "name": "phoneNumber",
      "type": "string"
    }, {
      "name": "Type",
      "type": "uint8"
    }, {
      "name": "addressCustomer",
      "type": "address"
    }, {
      "name": "addressProduct",
      "type": "address"
    }],
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getAll",
  "outputs": [{
    "components": [{
      "name": "id",
      "type": "uint256"
    }, {
      "name": "owner",
      "type": "address"
    }, {
      "name": "name",
      "type": "string"
    }, {
      "name": "homeAddr",
      "type": "string"
    }, {
      "name": "phoneNumber",
      "type": "string"
    }, {
      "name": "Type",
      "type": "uint8"
    }, {
      "name": "addressCustomer",
      "type": "address"
    }, {
      "name": "addressProduct",
      "type": "address"
    }],
    "name": "",
    "type": "tuple[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addressAgency",
    "type": "address"
  }],
  "name": "getListContractWarranty",
  "outputs": [{
    "name": "",
    "type": "address[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_owner",
    "type": "address"
  }, {
    "name": "_name",
    "type": "string"
  }, {
    "name": "_homeAddr",
    "type": "string"
  }, {
    "name": "_phoneNumber",
    "type": "string"
  }, {
    "name": "_Type",
    "type": "uint8"
  }, {
    "name": "_addrCustomer",
    "type": "address"
  }, {
    "name": "_addrProduct",
    "type": "address"
  }],
  "name": "updateAgency",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_owner",
    "type": "address"
  }, {
    "name": "_name",
    "type": "string"
  }, {
    "name": "_homeAddr",
    "type": "string"
  }, {
    "name": "_phoneNumber",
    "type": "string"
  }, {
    "name": "_addrCustomer",
    "type": "address"
  }, {
    "name": "_addrProduct",
    "type": "address"
  }],
  "name": "registerAgency",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}]


var abiCustomer = [{
  "constant": true,
  "inputs": [{
    "name": "_soluong",
    "type": "uint256"
  }, {
    "name": "_batdautu",
    "type": "uint256"
  }],
  "name": "getAll",
  "outputs": [{
    "components": [{
      "name": "owner",
      "type": "address"
    }, {
      "name": "name",
      "type": "string"
    }, {
      "name": "homeAddr",
      "type": "string"
    }, {
      "name": "phoneNumber",
      "type": "uint32"
    }, {
      "name": "age",
      "type": "uint8"
    }],
    "name": "",
    "type": "tuple[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_owner",
    "type": "address"
  }],
  "name": "accountDetail",
  "outputs": [{
    "components": [{
      "name": "owner",
      "type": "address"
    }, {
      "name": "name",
      "type": "string"
    }, {
      "name": "homeAddr",
      "type": "string"
    }, {
      "name": "phoneNumber",
      "type": "uint32"
    }, {
      "name": "age",
      "type": "uint8"
    }],
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_owner",
    "type": "address"
  }, {
    "name": "_name",
    "type": "string"
  }, {
    "name": "_homeAddr",
    "type": "string"
  }, {
    "name": "_phoneNumber",
    "type": "uint32"
  }, {
    "name": "_age",
    "type": "uint8"
  }],
  "name": "register",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_name",
    "type": "string"
  }, {
    "name": "_homeAddr",
    "type": "string"
  }, {
    "name": "_phoneNumber",
    "type": "uint32"
  }, {
    "name": "_age",
    "type": "uint8"
  }],
  "name": "updateAccount",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "name": "_addressAgency",
    "type": "address"
  }, {
    "name": "_addressMaster",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}]


var abiProduct = [{
  "constant": true,
  "inputs": [{
    "name": "_id",
    "type": "uint64"
  }],
  "name": "productDetail",
  "outputs": [{
    "components": [{
      "name": "id",
      "type": "uint64"
    }, {
      "name": "MFG",
      "type": "uint64"
    }, {
      "name": "EXP",
      "type": "uint64"
    }, {
      "name": "state",
      "type": "uint8"
    }, {
      "name": "idChipIOT",
      "type": "uint64"
    }, {
      "name": "manufacturer",
      "type": "string"
    }, {
      "name": "name",
      "type": "string"
    }],
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getAll",
  "outputs": [{
    "components": [{
      "name": "id",
      "type": "uint64"
    }, {
      "name": "MFG",
      "type": "uint64"
    }, {
      "name": "EXP",
      "type": "uint64"
    }, {
      "name": "state",
      "type": "uint8"
    }, {
      "name": "idChipIOT",
      "type": "uint64"
    }, {
      "name": "manufacturer",
      "type": "string"
    }, {
      "name": "name",
      "type": "string"
    }],
    "name": "",
    "type": "tuple[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_MFG",
    "type": "uint64"
  }, {
    "name": "_EXP",
    "type": "uint64"
  }, {
    "name": "_state",
    "type": "uint8"
  }, {
    "name": "_manufacturer",
    "type": "string"
  }, {
    "name": "_name",
    "type": "string"
  }],
  "name": "createProduct",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_idChipIOT",
    "type": "uint64"
  }, {
    "name": "_state",
    "type": "uint8"
  }],
  "name": "updateStateOfProduct",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "name": "_addressAgency",
    "type": "address"
  }, {
    "name": "_addressMaster",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}]


var abiWarranty = [{
  "constant": true,
  "inputs": [],
  "name": "convention",
  "outputs": [{
    "name": "expireTime",
    "type": "uint64"
  }, {
    "name": "idProduct",
    "type": "uint64"
  }, {
    "name": "compensation",
    "type": "uint256"
  }, {
    "name": "employer",
    "type": "address"
  }, {
    "name": "buyer",
    "type": "address"
  }, {
    "name": "hash",
    "type": "bytes32"
  }, {
    "name": "signatureEmployer",
    "type": "bytes"
  }, {
    "name": "signatureBuyer",
    "type": "bytes"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_owner",
    "type": "address"
  }, {
    "name": "_hash",
    "type": "bytes32"
  }, {
    "name": "r",
    "type": "bytes32"
  }, {
    "name": "s",
    "type": "bytes32"
  }, {
    "name": "v",
    "type": "uint8"
  }],
  "name": "verifyWarranty",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "benefit",
  "outputs": [{
    "name": "sender",
    "type": "address"
  }, {
    "name": "receiver",
    "type": "address"
  }, {
    "name": "balance",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_owner",
    "type": "address"
  }],
  "name": "demonstrateMeInvalid",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_productsContract",
    "type": "address"
  }],
  "name": "courts",
  "outputs": [{
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_buyer",
    "type": "address"
  }],
  "name": "createParnter",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_signatureBuyer",
    "type": "bytes"
  }],
  "name": "purchase",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getBenefit",
  "outputs": [{
    "components": [{
      "name": "sender",
      "type": "address"
    }, {
      "name": "receiver",
      "type": "address"
    }, {
      "name": "balance",
      "type": "uint256"
    }],
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_signatureEmployer",
    "type": "bytes"
  }, {
    "name": "_hash",
    "type": "bytes32"
  }],
  "name": "sell",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "name": "_expireTime",
    "type": "uint64"
  }, {
    "name": "_compensation",
    "type": "uint256"
  }, {
    "name": "_idProduct",
    "type": "uint64"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}]




var addressContractMaster = '0xf79107d581fcf37369318aaa282aec6c762f77d3'
var addressContractCustomer = localStorage.getItem('addressContractCustomer');
var addressContractProduct = localStorage.getItem('addressContractProduct');
var addressContractEC = '0x36c5804a3f063487c0dc09ae93e47fc6f584f136'

var ContractMaster = null;
var ContractCustomer = null;
var ContractProduct = null;
var contractWarranty = null;

console.log("Contract Master:", addressContractMaster)
console.log("Contract product:", addressContractProduct)
console.log("Contract Customer:", addressContractCustomer)

// admin = '2A9E2FC73B905B0744250A672A02A8821CD126A8DC0DE834772C670F19533B1D'
// nhasanxuat1 = 'B911E06F6EFF97E50B662FE217710031F6AA4958F00E7813B392B6CABC772FAE'
// nguoimuahang1 = '5742614E4950FB5F32AE3EB11542C43C5AAF989BD5E818639B137911B9F90620'

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
}
ContractMaster = new web3.eth.Contract(abiMaster, addressContractMaster);
ContractProduct = new web3.eth.Contract(abiProduct, addressContractProduct);
ContractCustomer = new web3.eth.Contract(abiCustomer, addressContractCustomer);
ContractWarrantyabi = new web3.eth.Contract(abiWarranty);

var gasPrice = web3.utils.toHex(web3.utils.toWei('40', 'gwei'))
var gasLimit = web3.utils.toHex(3000000)

var accf = async () => {
  var accs = await web3.eth.getAccounts();
  console.log("Địa chỉ người dùng hiện tại metamask", accs[0])
  return accs[0];
}

var changeAccRole = (acc) => {
  var account = localStorage.getItem('currentAccount')
  if (acc !== account && account != "undefined" && account) {
    location.href = '/'
  }
  localStorage.setItem('currentAccount', acc)
  try {
    ContractMaster.methods.getAgency(acc).call().then(datas => {
      $("#currentAccountli").css('display', 'block')
      $("#currentAccount").text("Hi: " + acc)
      console.log("type user:", datas['Type'])
      if (datas['Type'] == 1) {
        if ($("#login").length == 0) {
          $("#loginhiiden").append(`<li id="login"><a href="master">Login</a></li>`)
        }
      } else if (datas['Type'] == 2) {
        localStorage.setItem('addressContractCustomer', datas['addressCustomer']);
        localStorage.setItem('addressContractProduct', datas['addressProduct']);
        if ($("#login").length == 0) {
          $("#loginhiiden").append(`<li id="login"><a href="admin" >Login</a></li>`)
        }
      } else {
        
      }
      $("#login").css('display', 'block')
    });
  } catch (error) {
    $("#currentAccountli").css('display', 'none')
    $("#login").css('display', 'none')
  }
}

setInterval(async () => {
  var accs = await accf();
  changeAccRole(accs);
}, 2000);