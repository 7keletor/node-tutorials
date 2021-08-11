const request = require('request');
const mobile=7080607014
request('https://api-alerts.kaleyra.com/v4/?api_key=Ab211b01725a52ac6f171ff372b17e798&method=sms&message=Your FanFight verification code is 777777&to='+mobile+'&sender=FANFGT', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url,'1');
  console.log(body.explanation);
});
// 'https://api-alerts.kaleyra.com/v4/?api_key=Ab211b01725a52ac6f171ff372b17e798&method=sms&message=Your FanFight verification code is 777777&to='+mobile+'&sender=FANFGT'
// https://api-alerts.kaleyra.com/v4/?api_key=Ab211b01725a52ac6f171ff372b17e798&method=sms&message=Your FanFight verification code is 777777&to=+917080607014&sender=FANFGT