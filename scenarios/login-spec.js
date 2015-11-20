describe("Login In", function(){
    var userName = 'lavinjj';
    var password = 'test123';

    beforeEach(function(){
       browser.get("/");
    });

    it("should login user and navigate to home screen", function(){
       element(by.model("username")).sendKeys(userName);
        element(by.model("password")).sendKeys(password);
        element(by.css('[type="submit"]')).click();
        expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/#/home');
    });

});