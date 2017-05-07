var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then, setDefaultTimeout}) {
  setDefaultTimeout(6000000);

  var result = function() {};
  result.prototype.variable = 0;
  result.prototype.Dat = function(number) {
    this.variable = parseInt(number);
  };
  result.prototype.Cong = function(number) {
    this.variable += parseInt(number);
  };

  Given('cho {number}', function(number) {
    result.prototype.Dat(number);
  });

  When('Khi cộng thêm {number}', function (number) {
    result.prototype.Cong(number);
  });

  Then('kết quả bằng {number}', function (number) {
    if (result.prototype.variable != parseInt(number)){
      throw new Error('cộng sai');
    }
  });

  Given('I am on the www.w3schools.com', function() {
    return this.driver.get('https://www.w3schools.com/');
  });

  When('I click on {stringInDoubleQuotes}', function (text) {
    return this.driver.findElement({linkText: text}).then(function(element) {
      return element.click();
    });
  });

  Then('I should see the page to learn html', function () {
    return this.driver.get('https://www.w3schools.com/html/default.asp');
  });

  Then('I Should see the page to learn javascript', function () {
    return this.driver.get('https://www.w3schools.com/js/default.asp');
  });
});
