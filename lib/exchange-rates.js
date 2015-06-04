var request = require('request');
var parseString = require('xml2js').parseString;

var url = 'https://www.bac.net/exchangerate/showXmlExchangeRate.do';

var ExchangeRate = function() {
  this.country = 'Nicaragua';
};

ExchangeRate.prototype.CR = 'Costa Rica';
ExchangeRate.prototype.SV = 'El Salvador';
ExchangeRate.prototype.GT = 'Guatemala';
ExchangeRate.prototype.HN = 'Honduras';
ExchangeRate.prototype.NI = 'Nicaragua';
ExchangeRate.prototype.PA = 'Panamá';

ExchangeRate.prototype.setCountry = function(country) {
  this.country = country;
};

ExchangeRate.prototype.get = function(callback) {
  var self = this;
  request.post(url, function(err, httpResponse, body) {
    if (err) {
      callback(err, null);
    }
    else {
      parseString(body, function (err, xmlResult) {
        if (err) {
          callback(err, null);
        }
        else {
          var countries =  xmlResult.exchangeRates.country;

          var result = {
            usd: {
              buy: '',
              sale: ''
            },
            eur: {
              buy: '',
              sale: ''
            }
          };

          countries.forEach(function(country) {
            if (country.name[0] === self.country) {
              result.usd.buy = parseFloat(country.buyRateUSD[0]);
              result.usd.sale = parseFloat(country.saleRateUSD[0]);

              result.eur.buy = parseFloat(country.buyRateEUR[0]);
              result.eur.sale = parseFloat(country.saleRateEUR[0]);
            }
          });

          callback(err, result);
        }
      });
    }
  });
};

module.exports = ExchangeRate;
