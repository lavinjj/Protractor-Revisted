var RegisterPage = function() {
    this.userName = element(by.model('brewer.UserName'));
    this.firstName = element(by.model('brewer.FirstName'));
    this.lastName = element(by.model('brewer.LastName'));
    this.email = element(by.model('brewer.Email'));
    this.location = element(by.model('brewer.Location'));
    this.bio = element(by.model('brewer.Bio'));
    this.webSite = element(by.model('brewer.WebSite'));
    this.password = element(by.model('password'));
    this.confirmPassword = element(by.model('confirmpassword'));
    this.saveButton = element(by.css('[name="registerBtn"]'));
    this.cancelButton = element(by.css('[name="cancelBtn"]'));
};

module.exports = new RegisterPage();
