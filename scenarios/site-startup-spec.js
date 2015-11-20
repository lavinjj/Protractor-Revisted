describe('Brew Everywhere App', function() {
    beforeEach(function(){
        browser.get('/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Brew Everywhere');
    });

    it('should have a login form', function(){
        element(by.css('[name="loginForm"]')).isPresent().then(function(value){
            console.log(value);
            expect(value).toBe(true);
        });
    });

    it('should have a login with google button', function(){
        expect(element(by.css('[ng-click="loginWithGooglePlus()"]')).isPresent()).toBe(true);
    });

    it('should not have a login with facebook button', function(){
        expect(element(by.css('[ng-click="loginWithFacebook()"]')).isPresent()).toBe(false);
    });

    it('should have a register button', function(){
        expect(element(by.css('[href="#/register"]')).isPresent()).toBe(true);
    });

    it('should navigate to the register page when the register button is clicked', function(){
        element(by.css('[href="#/register"]')).click();

        expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/#/register');
    });
});