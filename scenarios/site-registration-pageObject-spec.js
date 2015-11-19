describe('Brew Everywhere Registration', function(){
    var registerPage = require('../page-objects/registerPage.js');

    var now = new Date();
    var username = 'Test_User_' + now.getTime();
    var email = 'Test_User_' + now.getTime() + '@nomail.com';

    beforeEach(function(){
        browser.get('#/register');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Brew Everywhere');
    });

    it('should have a user name field', function(){
        expect(registerPage.userName.isPresent()).toBe(true);
    });

    it('user name field should be invalid by default', function(){
        expect(registerPage.userName.getAttribute('class')).toContain('ng-invalid');
    });

    it('user name field should be required by default', function(){
        expect(registerPage.userName.getAttribute('class')).toContain('ng-invalid-required');
    });

    it('user name field should be valid required when data is entered', function(){
        registerPage.userName.sendKeys(username);
        expect(registerPage.userName.getAttribute('class')).not.toContain('ng-invalid-required ');
    });

    it('user name field should be valid when data is entered', function(){
        registerPage.userName.sendKeys(username);
        expect(registerPage.userName.getAttribute('class')).not.toContain('ng-invalid ');
    });

    it('should have a first name field', function(){
        expect(registerPage.firstName.isPresent()).toBe(true);
    });

    it('first name field should be invalid by default', function(){
        expect(registerPage.firstName.getAttribute('class')).toContain('ng-invalid');
    });

    it('first name field should be required by default', function(){
        expect(registerPage.firstName.getAttribute('class')).toContain('ng-invalid-required');
    });

    it('first name field should be valid required when data is entered', function(){
        registerPage.firstName.sendKeys('Test');
        expect(registerPage.firstName.getAttribute('class')).not.toContain('ng-invalid-required ');
    });

    it('first name field should be valid when data is entered', function(){
        registerPage.firstName.sendKeys('Test');
        expect(registerPage.firstName.getAttribute('class')).not.toContain('ng-invalid ');
    });

    it('should have a last name field', function(){
        expect(registerPage.lastName.isPresent()).toBe(true);
    });

    it('last name field should be invalid by default', function(){
        expect(registerPage.lastName.getAttribute('class')).toContain('ng-invalid');
    });

    it('last name field should be required by default', function(){
        expect(registerPage.lastName.getAttribute('class')).toContain('ng-invalid-required');
    });

    it('last name field should be valid required when data is entered', function(){
        registerPage.lastName.sendKeys('User');
        expect(registerPage.lastName.getAttribute('class')).not.toContain('ng-invalid-required ');
    });

    it('last name field should be valid when data is entered', function(){
        registerPage.lastName.sendKeys('User');
        expect(registerPage.lastName.getAttribute('class')).not.toContain('ng-invalid ');
    });

    it('should have a email field', function(){
        expect(registerPage.email.isPresent()).toBe(true);
    });

    it('email field should be invalid by default', function(){
        expect(registerPage.email.getAttribute('class')).toContain('ng-invalid');
    });

    it('email field should be required by default', function(){
        expect(registerPage.email.getAttribute('class')).toContain('ng-invalid-required');
    });

    it('email field should be valid required when data is entered', function(){
        registerPage.email.sendKeys(email);
        expect(registerPage.email.getAttribute('class')).not.toContain('ng-invalid-required ');
    });

    it('email field should be valid when data is entered', function(){
        registerPage.email.sendKeys(email);
        expect(registerPage.email.getAttribute('class')).not.toContain('ng-invalid ');
    });

    it('should have a location name field', function(){
        expect(registerPage.location.isPresent()).toBe(true);
    });

    it('location field should be valid by default', function(){
        expect(registerPage.location.getAttribute('class')).toContain('ng-valid');
    });

    it('should have a biography field', function(){
        expect(registerPage.bio.isPresent()).toBe(true);
    });

    it('biography field should be valid by default', function(){
        expect(registerPage.bio.getAttribute('class')).toContain('ng-valid');
    });

    it('should have a web site field', function(){
        expect(registerPage.webSite.isPresent()).toBe(true);
    });

    it('web site field should be valid by default', function(){
        expect(registerPage.webSite.getAttribute('class')).toContain('ng-valid');
    });

    it('should have a password field', function(){
        expect(registerPage.password.isPresent()).toBe(true);
    });

    it('password field should be invalid by default', function(){
        expect(registerPage.password.getAttribute('class')).toContain('ng-invalid');
    });

    it('password field should be required by default', function(){
        expect(registerPage.password.getAttribute('class')).toContain('ng-invalid-required');
    });

    it('password field should be valid required when data is entered', function(){
        registerPage.password.sendKeys('abc123DEF');
        expect(registerPage.password.getAttribute('class')).not.toContain('ng-invalid-required ');
    });

    it('password field should be valid when data is entered', function(){
        registerPage.password.sendKeys('abc123DEF');
        expect(registerPage.password.getAttribute('class')).not.toContain('ng-invalid ');
    });

    it('should have a confirm password field', function(){
        expect(registerPage.confirmPassword.isPresent()).toBe(true);
    });

    it('confirm password field should be invalid by default', function(){
        expect(registerPage.confirmPassword.getAttribute('class')).toContain('ng-invalid');
    });

    it('confirm password field should be required by default', function(){
        expect(registerPage.confirmPassword.getAttribute('class')).toContain('ng-invalid-required');
    });

    it('confirm password field should be valid required when data is entered', function(){
        registerPage.password.sendKeys('abc123DEF');
        registerPage.confirmPassword.sendKeys('abc123DEF');
        expect(registerPage.confirmPassword.getAttribute('class')).not.toContain('ng-invalid-required ');
    });

    it('confirm password field should be valid when data is entered', function(){
        registerPage.password.sendKeys('abc123DEF');
        registerPage.confirmPassword.sendKeys('abc123DEF');
        expect(registerPage.confirmPassword.getAttribute('class')).not.toContain('ng-invalid ');
    });

    it('should have a save button', function(){
        expect(registerPage.saveButton.isPresent()).toBe(true);
    });

    it('save button should be disabled by default', function(){
        expect(registerPage.saveButton.getAttribute('disabled')).toBe('true');
    });

    it('save button should be enabled when required data is entered', function(){
        registerPage.userName.sendKeys(username);
        registerPage.firstName.sendKeys('Test');
        registerPage.lastName.sendKeys('User');
        registerPage.email.sendKeys(email);
        registerPage.location.sendKeys('Texas');
        registerPage.bio.sendKeys('Test user');
        registerPage.webSite.sendKeys('http://breweverywhere.com');
        registerPage.password.sendKeys('abc123DEF');
        registerPage.confirmPassword.sendKeys('abc123DEF');
        expect(registerPage.saveButton.getAttribute('disabled')).toBe(null);
    });

    it('should create an account', function(){
        registerPage.userName.sendKeys(username);
        registerPage.firstName.sendKeys('Test');
        registerPage.lastName.sendKeys('User');
        registerPage.email.sendKeys(email);
        registerPage.location.sendKeys('Texas');
        registerPage.bio.sendKeys('Test user');
        registerPage.webSite.sendKeys('http://breweverywhere.com');
        registerPage.password.sendKeys('abc123DEF');
        registerPage.confirmPassword.sendKeys('abc123DEF');
        registerPage.saveButton.click();
        expect(browser.getCurrentUrl()).toBe('http://breweverywhere.com/#/home');
    });

    it('should have a cancel button', function(){
        expect(registerPage.cancelButton.isPresent()).toBe(true);
    });
});