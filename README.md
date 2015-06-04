# node-bac-exchange-rates
Tipo de Cambio del Banco de América Central (https://www.bac.net/nicaragua/esp/banco/index.html)

## Install

    npm i exchange-rates-bac

## Example

    var ExchangeRate = require('exchange-rates-bac');
    var exchangeRate = new ExchangeRate();

    exchangeRate.setCountry(exchangeRate.NI);
    exchangeRate.get(function(err, result) {
      console.log(result)
    });

## Response

    {
      usd: {
        buy: 26.85,
        sale: 27.34
      },
      eur: {
        buy: 29.6713,
        sale: 31.5067
      }
    }

## Countries

    ExchangeRate.CR | 'Costa Rica';
    ExchangeRate.SV | 'El Salvador';
    ExchangeRate.GT | 'Guatemala';
    ExchangeRate.HN | 'Honduras';
    ExchangeRate.NI | 'Nicaragua';
    ExchangeRate.PA | 'Panamá';
