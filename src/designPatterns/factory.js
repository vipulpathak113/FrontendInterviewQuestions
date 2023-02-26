//Instead of exposing the concrete logic of creating objects, we encapsulate the logic in a function,
// which can then be considered as a factory. 

let UserFactory = function (role) {
    function SuperAdmin() {
      this.name = "superAdmin",
      this.viewPage = ['Home', 'Service', 'App', 'Products', 'Permission management']
    }
    function Admin() {
      this.name = "admin",
      this.viewPage = ['Home', 'Service', 'App', 'Products']
    }
    function NormalUser() {
      this.name = 'user',
      this.viewPage = ['Home', 'Service', 'App']
    }
  
    switch (role) {
      case 'superAdmin':
        return new SuperAdmin();
        break;
      case 'admin':
        return new Admin();
        break;
      case 'user':
        return new NormalUser();
        break;
      default:
        throw new Error('Parameter error, optional parameter:superAdmin、admin、user');
    }
  }
  
  //invoke
  let superAdmin = UserFactory('superAdmin');
  let admin = UserFactory('admin') 
  let normalUser = UserFactory('user')