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


});
