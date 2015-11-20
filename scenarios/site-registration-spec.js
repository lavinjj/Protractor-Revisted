xdescribe('Brew Everywhere Registration', function(){
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
       expect(element(by.model('brewer.UserName')).isPresent()).toBe(true);
    });

    it('user name field should be invalid by default', function(){
        expect(element(by.model('brewer.UserName')).getAttribute('class')).toContain('ng-invalid ');
    });

    it('user name field should be required by default', function(){
        expect(element(by.model('brewer.UserName')).getAttribute('class')).toContain('ng-invalid-required');
    });

    it('user name field should be valid required when data is entered', function(){
        element(by.model('brewer.UserName')).sendKeys(username);
        expect(element(by.model('brewer.UserName')).getAttribute('class')).not.toContain('ng-invalid-required ');
    });

    it('user name field should be valid when data is entered', function(){
        element(by.model('brewer.UserName')).sendKeys(username);
        expect(element(by.model('brewer.UserName')).getAttribute('class')).not.toContain('ng-invalid ');
    });

    it('should have a first name field', function(){
        expect(element(by.model('brewer.FirstName')).isPresent()).toBe(true);
    });

    it('first name field should be invalid by default', function(){
        expect(element(by.model('brewer.FirstName')).getAttribute('class')).toContain('ng-invalid');
    });

    it('first name field should be required by default', function(){
        expect(element(by.model('brewer.FirstName')).getAttribute('class')).toContain('ng-invalid-required');
    });

    it('first name field should be valid required when data is entered', function(){
        element(by.model('brewer.FirstName')).sendKeys('Test');
        expect(element(by.model('brewer.FirstName')).getAttribute('class')).not.toContain('ng-invalid-required ');
    });

    it('first name field should be valid when data is entered', function(){
        element(by.model('brewer.FirstName')).sendKeys('Test');
        expect(element(by.model('brewer.FirstName')).getAttribute('class')).not.toContain('ng-invalid ');
    });

    it('should have a last name field', function(){
        expect(element(by.model('brewer.LastName')).isPresent()).toBe(true);
    });

    it('last name field should be invalid by default', function(){
        expect(element(by.model('brewer.LastName')).getAttribute('class')).toContain('ng-invalid');
    });

    it('last name field should be required by default', function(){
        expect(element(by.model('brewer.LastName')).getAttribute('class')).toContain('ng-invalid-required');
    });

    it('last name field should be valid required when data is entered', function(){
        element(by.model('brewer.LastName')).sendKeys('User');
        expect(element(by.model('brewer.LastName')).getAttribute('class')).not.toContain('ng-invalid-required ');
    });

    it('last name field should be valid when data is entered', function(){
        element(by.model('brewer.LastName')).sendKeys('User');
        expect(element(by.model('brewer.LastName')).getAttribute('class')).not.toContain('ng-invalid ');
    });

    it('should have a email field', function(){
        expect(element(by.model('brewer.Email')).isPresent()).toBe(true);
    });

    it('email field should be invalid by default', function(){
        expect(element(by.model('brewer.Email')).getAttribute('class')).toContain('ng-invalid');
    });

    it('email field should be required by default', function(){
        expect(element(by.model('brewer.Email')).getAttribute('class')).toContain('ng-invalid-required');
    });

    it('email field should be valid required when data is entered', function(){
        element(by.model('brewer.Email')).sendKeys(email);
        expect(element(by.model('brewer.Email')).getAttribute('class')).not.toContain('ng-invalid-required ');
    });

    it('email field should be valid when data is entered', function(){
        element(by.model('brewer.Email')).sendKeys(email);
        expect(element(by.model('brewer.Email')).getAttribute('class')).not.toContain('ng-invalid ');
    });

    it('should have a location name field', function(){
        expect(element(by.model('brewer.Location')).isPresent()).toBe(true);
    });

    it('location field should be valid by default', function(){
        expect(element(by.model('brewer.Location')).getAttribute('class')).toContain('ng-valid');
    });

    it('should have a biography field', function(){
        expect(element(by.model('brewer.Bio')).isPresent()).toBe(true);
    });

    it('biography field should be valid by default', function(){
        expect(element(by.model('brewer.Bio')).getAttribute('class')).toContain('ng-valid');
    });

    it('should have a web site field', function(){
        expect(element(by.model('brewer.WebSite')).isPresent()).toBe(true);
    });

    it('web site field should be valid by default', function(){
        expect(element(by.model('brewer.WebSite')).getAttribute('class')).toContain('ng-valid');
    });

    it('should have a password field', function(){
        expect(element(by.model('password')).isPresent()).toBe(true);
    });

    it('password field should be invalid by default', function(){
        expect(element(by.model('password')).getAttribute('class')).toContain('ng-invalid');
    });

    it('password field should be required by default', function(){
        expect(element(by.model('password')).getAttribute('class')).toContain('ng-invalid-required');
    });

    it('password field should be valid required when data is entered', function(){
        element(by.model('password')).sendKeys('abc123DEF');
        expect(element(by.model('password')).getAttribute('class')).not.toContain('ng-invalid-required ');
    });

    it('password field should be valid when data is entered', function(){
        element(by.model('password')).sendKeys('abc123DEF');
        expect(element(by.model('password')).getAttribute('class')).not.toContain('ng-invalid ');
    });

    it('should have a confirm password field', function(){
        expect(element(by.model('confirmpassword')).isPresent()).toBe(true);
    });

    it('confirm password field should be invalid by default', function(){
        expect(element(by.model('confirmpassword')).getAttribute('class')).toContain('ng-invalid');
    });

    it('confirm password field should be required by default', function(){
        expect(element(by.model('confirmpassword')).getAttribute('class')).toContain('ng-invalid-required');
    });

    it('confirm password field should be valid required when data is entered', function(){
        element(by.model('password')).sendKeys('abc123DEF');
        element(by.model('confirmpassword')).sendKeys('abc123DEF');
        expect(element(by.model('confirmpassword')).getAttribute('class')).not.toContain('ng-invalid-required ');
    });

    it('confirm password field should be valid when data is entered', function(){
        element(by.model('password')).sendKeys('abc123DEF');
        element(by.model('confirmpassword')).sendKeys('abc123DEF');
        expect(element(by.model('confirmpassword')).getAttribute('class')).not.toContain('ng-invalid ');
    });

    it('should have a save button', function(){
        expect(element(by.css('[name="registerBtn"]')).isPresent()).toBe(true);
    });

    it('save button should be disabled by default', function(){
        expect(element(by.css('[name="registerBtn"]')).getAttribute('disabled')).toBe('true');
    });

    it('save button should be enabled when required data is entered', function(){
        element(by.model('brewer.UserName')).sendKeys(username);
        element(by.model('brewer.FirstName')).sendKeys('Test');
        element(by.model('brewer.LastName')).sendKeys('User');
        element(by.model('brewer.Email')).sendKeys(email);
        element(by.model('brewer.Location')).sendKeys('Texas');
        element(by.model('brewer.Bio')).sendKeys('Test user');
        element(by.model('brewer.WebSite')).sendKeys('http://breweverywhere.com');
        element(by.model('password')).sendKeys('abc123DEF');
        element(by.model('confirmpassword')).sendKeys('abc123DEF');
        expect(element(by.css('[name="registerBtn"]')).getAttribute('disabled')).toBe(null);
    });

    it('should create an account', function(){
        element(by.model('brewer.UserName')).sendKeys(username);
        element(by.model('brewer.FirstName')).sendKeys('Test');
        element(by.model('brewer.LastName')).sendKeys('User');
        element(by.model('brewer.Email')).sendKeys(email);
        element(by.model('brewer.Location')).sendKeys('Texas');
        element(by.model('brewer.Bio')).sendKeys('Test user');
        element(by.model('brewer.WebSite')).sendKeys('http://breweverywhere.com');
        element(by.model('password')).sendKeys('abc123DEF');
        element(by.model('confirmpassword')).sendKeys('abc123DEF');
        element(by.css('[name="registerBtn"]')).click();
        expect(browser.getCurrentUrl()).toBe('http://breweverywhere.com/#/home');
    });

    it('should have a cancel button', function(){
        expect(element(by.css('[name="cancelBtn"]')).isPresent()).toBe(true);
    });
});