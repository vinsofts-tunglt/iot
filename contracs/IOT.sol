pragma solidity ^0.4.25;
pragma experimental ABIEncoderV2;

/*
*************** EC ******************
*/

contract EC {
    constructor() public {
        
    }
    
    function ecrecovery(bytes32 hash, bytes sig) public returns (address) {
        bytes32 r;
        bytes32 s;
        uint8 v;
    
    
        if (sig.length != 65) {
            return 0;
        }
    
        assembly {
            r := mload(add(sig, 32))
            s := mload(add(sig, 64))
            v := and(mload(add(sig, 65)), 255)
        }
    
        if (v < 27) {
            v += 27;
        }
    
        if (v != 27 && v != 28) {
            return 0;
        }
    
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        hash = sha3(prefix, hash);
    
        return ecrecover(hash, v, r, s);
    }

    function ecverify(bytes32 hash, bytes sig, address signer) public returns (bool) {
        return signer == ecrecovery(hash, sig);
    }
}


/*
************ SafeMath ******************
*/
library SafeMath {
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }

    uint256 c = a * b;
    require(c / a == b);

    return c;
  }

  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    require(b > 0);
    uint256 c = a / b;

    return c;
  }

  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    require(b <= a);
    uint256 c = a - b;

    return c;
  }

  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    require(c >= a);

    return c;
  }

  function mod(uint256 a, uint256 b) internal pure returns (uint256) {
    require(b != 0);
    return a % b;
  }
}

/* 
************* Owner ********************* 
*/
contract Owner {
    address internal admin;
    
    constructor() {
        admin = msg.sender;
    }
    
    modifier onlyAdmin() {
        require(
            msg.sender == admin,
            "Permission denied"
        );
        _;    
    }
    
    modifier onlyOwner(address _owner) {
        require(
          msg.sender == _owner,
          "Permission denied"
        );
        _;
    }
    
}

/* 
************ People ********************* 
*/
contract People is Owner {
    struct Person {
        address owner;
        string name;
        string homeAddr;
        uint32 phoneNumber;
        uint8 age;
        uint8 Type; // 1 is employer, 2 is buyer default is buyer
    }
    
    mapping(address => Person) private persons;
    address[] private avaiablePersons;
    
    function register(
        address _owner, 
        string _name, 
        string _homeAddr, 
        uint32 _phoneNumber,
        uint8 _age,
        uint8 _Type
    ) 
        external 
        onlyAdmin 
    {
        require(persons[_owner].owner == 0);
            
        Person memory newPerson = Person(_owner, _name, _homeAddr, _phoneNumber, _age, _Type);
        persons[_owner] = newPerson;
        avaiablePersons.push(_owner);
    }
    
    function accountDetail(
        address _owner
    ) 
        external 
        view 
        returns(Person) 
    {
        return persons[_owner];
    }
    
    function updateAccount(
        string _name,
        string _homeAddr,
        uint32 _phoneNumber,
        uint8 _age
    ) 
        external 
        onlyOwner(persons[msg.sender].owner) 
        returns(bool) 
    {
        persons[msg.sender].name = _name;
        persons[msg.sender].homeAddr = _homeAddr;
        persons[msg.sender].phoneNumber = _phoneNumber;
        persons[msg.sender].age = _age;
            
        return true;
    }
    
    function getAllAccount() external view returns(address[]) {
        return avaiablePersons;
    }
}

/*
********* Products *********
*/
contract Products is Owner {
    struct Product {
        uint64 id;
        uint64 MFG; // manufacturing date
        uint64 EXP; // expire date
        uint8 state; // default 100%
        uint64 idChipIOT; // chipIOT report to parnters about the state of product, I set idChipIOT == id ; because that will be easy for me(coding) and user :)
        string manufacturer;
        string name;
    }    
    
    /*
    **** @Key : id of Product ****
    **** @Value: Product ****
    */
    mapping(uint64 => Product) private products;
    uint64[] private avaiableProducts;
    
    function createProduct(
        uint64 _MFG, 
        uint64 _EXP, 
        uint8 _state,
        string _manufacturer,
        string _name
    ) 
        external 
        onlyAdmin 
    {
        uint64 idauto = uint64(avaiableProducts.length+1);
        require(products[idauto].id == 0);
        Product memory newProduct = Product(idauto, _MFG, _EXP, _state, idauto, _manufacturer, _name);
        products[idauto] = newProduct;
        avaiableProducts.push(idauto);
    }
    
    function updateStateOfProduct(uint64 _idChipIOT, uint8 _state) external returns(bool) {
        // only chipIOT can update the state of product
        require(products[_idChipIOT].idChipIOT == _idChipIOT);
        
        products[_idChipIOT].state = _state;
        return true;
    }
    
    
    function productDetail(uint64 _id) external view returns(Product) {
        return products[_id];
    }
    
    function getAllProducts() external view returns(uint64[]){
        return avaiableProducts;
    }
}
/*
************** IERC20 *****************
*/
interface IBank {

  function balanceOf(address who) external view returns (uint256);

  function transfer(address to, uint256 value) external returns (bool);
  
  function deposit(uint256 value) external returns(bool);
  
  function withDraw(uint256 value) external returns(bool);

  event Transfer(
    address indexed from,
    address indexed to,
    uint256 value
  );
}

/*
******************** Bank *******************
*/
contract Bank is Owner {
    using SafeMath for uint256;
    mapping(address => uint256) balances;
    
    event Transfer(address indexed from, address indexed to, uint256 value);

    struct Transaction {
        address root;
        address destination;
        uint balance;
        bool confirmed;
    }

    mapping(uint => Transaction) transaction;
    uint numberOfTransactions;

    modifier notConfirmed(uint _identifer) {
        Transaction storage _trans = transaction[_identifer];
        require(!_trans.confirmed);
        _;
    }

    modifier notExists(uint _identifer) {
        Transaction storage _trans = transaction[_identifer];
        require(_trans.balance == 0 && _trans.destination == 0x0);
        _;
    }

    modifier onlyHumanOfBenefit(uint _identifier) {
        Transaction storage _trans = transaction[_identifier];
        if(_trans.root != _trans.destination) {
            require(_trans.root == msg.sender);
        }
        _;
    }

    // Check balance of an account.
    function balanceOf(address addr) constant external returns (uint) {
        return balances[addr];
    }
    
    function balance() constant external returns (uint) {
        return balances[msg.sender];
    }
    
    // Deposit ethers to sender's account.
    function deposit() external payable {
        balances[msg.sender] = balances[msg.sender].add(msg.value);
    }
    
    function withDraw(address _warranty) external returns (bool){
        var benefit = Warranty(_warranty).getBenefit();
        bool isContractInvalid = Warranty(_warranty).demonstrateMeInvalid(msg.sender);
        require(isContractInvalid);
        submitTransaction(numberOfTransactions, benefit.sender, benefit.receiver, benefit.balance);
        
        return true;
    }

    function submitTransaction(
        uint _identifier, 
        address _from, 
        address _to, 
        uint _value
    )   
        internal
        notExists(_identifier)
        returns(bool) 
    {
        Transaction memory _trans = Transaction(_from, _to, _value, false);
        transaction[_identifier] = _trans;
        numberOfTransactions = numberOfTransactions.add(1);
        
        return true;
    }

    function confirmTransaction(
        uint _identifier, 
        bool _status
    )   
        public 
        onlyHumanOfBenefit(_identifier) notConfirmed(_identifier)
        returns (bool) 
    {
        Transaction storage _trans = transaction[_identifier];
        _trans.confirmed = _status;

        if(_status && balances[_trans.root] >= _trans.balance) {
            balances[_trans.root] = balances[_trans.root].sub(_trans.balance);
            _trans.destination.transfer(_trans.balance);
        }

        if (!deleteTransaction(_identifier)) {
            return false;
        }

        return true;
    }

    function deleteTransaction(uint transactionId) internal returns (bool){
        delete transaction[transactionId];
        return true;
    }
    
    function() external payable {
        balances[msg.sender] = balances[msg.sender].add(msg.value);
    }
    
    function kill() public onlyAdmin {
        selfdestruct(admin);
    }
}


/*
****************** Warranty *******************
*/
contract Warranty is Owner {
    
    address ecAddress = 0x36c5804a3f063487c0dc09ae93e47fc6f584f136;
    
    struct Convention {
        uint64 expireTime;
        uint64 idProduct;
        uint compensation;
        address employer;
        address buyer;
        bytes32 hash;
        bytes signatureEmployer;
        bytes signatureBuyer;
    }
    
    Convention public convention;

    address bankAddr = 0x0;
    
    struct BenefitOfHuman {
        address sender;
        address receiver;
        uint balance;
    }
    
    BenefitOfHuman public benefit;
    
    bool private isSignaturePurchase = false;
    bool private isSignatureSell = false;

    modifier onlyFromOurBank() {
        require(msg.sender == bankAddr);
        _;
    }
    
    constructor(uint64 _expireTime, uint _compensation, uint64 _idProduct) {
        convention.expireTime = _expireTime;
        convention.compensation = _compensation;
        convention.idProduct = _idProduct;
        convention.employer = msg.sender;
        // convention = Convention(
        //     _expireTime, 
        //     _idProduct, 
        //     _compensation, 
        //     msg.sender, 
        //     0x0, 
        //     0x0
        // );
    }
    
    function createParnter(address _buyer) external onlyAdmin {
        require(!isSignaturePurchase && !isSignatureSell);
        
        convention.buyer = _buyer;
    }
    
    function sell(bytes _signatureEmployer, bytes32 _hash) external onlyAdmin {
        require(!isSignaturePurchase || !isSignatureSell);
            
        convention.signatureEmployer = _signatureEmployer;
        convention.hash = _hash;
        isSignatureSell = true;
    }
    
    function purchase(bytes _signatureBuyer) external onlyOwner(convention.buyer) {
        require(!isSignaturePurchase || !isSignatureSell);
            
        convention.signatureBuyer = _signatureBuyer;
        isSignaturePurchase = true;
    }
    
    
    function courts(address _productsContract) public returns(string){
        //detail products
        var p = Products(_productsContract).productDetail(convention.idProduct);
      
        if(p.state == 0 && now < convention.expireTime) {
            benefit = BenefitOfHuman(
                convention.employer , 
                convention.buyer, 
                convention.compensation
            );
            
            return "Buyer can with draw money from Employer";
        }
        
        if(now > convention.expireTime && p.state >= 90) {
            benefit = BenefitOfHuman(
                convention.employer, 
                convention.employer, 
                convention.compensation
            );
            
            return "Employer can with draw money from Contract";
        }
        
        return "Dont do something";
    }
    
    function verifyWarranty(
        address _owner, 
        bytes32 _hash, 
        bytes32 r, 
        bytes32 s,
        uint8 v
    )   
        external 
        pure 
        returns(bool)
    {
            require(_owner != address(0x0));
            
            bytes32 _recoverHash = prefixed(_hash);
            address _temp = ecrecover(_recoverHash, v, r, s);
            
            return _temp == _owner;
    }
    
    function demonstrateMeInvalid(address _owner) public view returns(bool) {
        require(isSignaturePurchase && isSignatureSell);
        
        if(_owner == convention.buyer) {
            bool demonstrateEmployerInvalid = 
                EC(ecAddress).ecrecovery(convention.hash, convention.signatureEmployer) == convention.employer;
            require(demonstrateEmployerInvalid);
            
            return EC(ecAddress).ecrecovery(convention.hash, convention.signatureBuyer) == _owner;
        }
        if(_owner == convention.employer) {
            bool demonstrateBuyerInvalid = 
                EC(ecAddress).ecrecovery(convention.hash, convention.signatureBuyer) == convention.buyer;
            require(demonstrateBuyerInvalid);
            
            return EC(ecAddress).ecrecovery(convention.hash, convention.signatureEmployer) == _owner;
        }
        
        return false;
    }
    
    function prefixed(bytes32 _hash) internal pure returns (bytes32) {
        return keccak256("\x19Ethereum Signed Message:\n32", _hash);
    }
    
    function getBenefit() public view onlyFromOurBank() returns(BenefitOfHuman) {
        return benefit;
    }
}

/*
****************** Ledger *************************
*/
contract Ledger is Owner {
    address private owner;
    struct History {
        address Warranty;
    }
    
    mapping(address => History[]) private histories;
    
    constructor() public {
        owner = msg.sender;
    }
    
    function saveHistory(address _warranty) public onlyAdmin {
        History memory newData = History(_warranty);
        histories[msg.sender].push(newData);
    }
    
    function getHistory() external view onlyAdmin returns(History[]) {
        return histories[msg.sender];
    }
}