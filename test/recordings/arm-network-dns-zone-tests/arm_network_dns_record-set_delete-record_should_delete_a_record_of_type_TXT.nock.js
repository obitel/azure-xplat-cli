// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9316\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-8009-4ce6f201d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-01.azure-dns.com.\",\"ns2-01.azure-dns.net.\",\"ns3-01.azure-dns.org.\",\"ns4-01.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '508',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-8009-4ce6f201d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '47e6e1e2-a87d-4e3e-98ef-f7018f2fdb5f',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11996',
  'x-ms-correlation-request-id': '24a8fef0-1e5f-44d2-a5bc-1b72de718cbd',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124417Z:24a8fef0-1e5f-44d2-a5bc-1b72de718cbd',
  date: 'Mon, 29 Aug 2016 12:44:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9316\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-8009-4ce6f201d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-01.azure-dns.com.\",\"ns2-01.azure-dns.net.\",\"ns3-01.azure-dns.org.\",\"ns4-01.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '508',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-8009-4ce6f201d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '47e6e1e2-a87d-4e3e-98ef-f7018f2fdb5f',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11996',
  'x-ms-correlation-request-id': '24a8fef0-1e5f-44d2-a5bc-1b72de718cbd',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124417Z:24a8fef0-1e5f-44d2-a5bc-1b72de718cbd',
  date: 'Mon, 29 Aug 2016 12:44:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9316\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"4fb0dacc-368d-4ec6-8d69-b11b4c1f5e39\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.example1.com.\",\"TTL\":3600,\"TXTRecords\":[{\"value\":[\"longtexthere\"]}]}}", { 'cache-control': 'private',
  'content-length': '425',
  'content-type': 'application/json; charset=utf-8',
  etag: '4fb0dacc-368d-4ec6-8d69-b11b4c1f5e39',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '1b39c0ab-a268-4177-af3d-0e46f6473a46',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '67ec59fd-5052-4cd8-8d6c-87928a2fb92f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124417Z:67ec59fd-5052-4cd8-8d6c-87928a2fb92f',
  date: 'Mon, 29 Aug 2016 12:44:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9316\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"4fb0dacc-368d-4ec6-8d69-b11b4c1f5e39\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.example1.com.\",\"TTL\":3600,\"TXTRecords\":[{\"value\":[\"longtexthere\"]}]}}", { 'cache-control': 'private',
  'content-length': '425',
  'content-type': 'application/json; charset=utf-8',
  etag: '4fb0dacc-368d-4ec6-8d69-b11b4c1f5e39',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '1b39c0ab-a268-4177-af3d-0e46f6473a46',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '67ec59fd-5052-4cd8-8d6c-87928a2fb92f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124417Z:67ec59fd-5052-4cd8-8d6c-87928a2fb92f',
  date: 'Mon, 29 Aug 2016 12:44:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9316\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"5b316f49-374c-405e-9ed2-d5d301660c45\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.example1.com.\",\"TTL\":3600,\"TXTRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '399',
  'content-type': 'application/json; charset=utf-8',
  etag: '5b316f49-374c-405e-9ed2-d5d301660c45',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8733a3fd-6cb3-49b6-87d8-cb4a8ca97f6a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '5a43756c-46bc-4e13-a928-57f1ce9c9dfd',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124418Z:5a43756c-46bc-4e13-a928-57f1ce9c9dfd',
  date: 'Mon, 29 Aug 2016 12:44:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9316\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"5b316f49-374c-405e-9ed2-d5d301660c45\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.example1.com.\",\"TTL\":3600,\"TXTRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '399',
  'content-type': 'application/json; charset=utf-8',
  etag: '5b316f49-374c-405e-9ed2-d5d301660c45',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8733a3fd-6cb3-49b6-87d8-cb4a8ca97f6a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '5a43756c-46bc-4e13-a928-57f1ce9c9dfd',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124418Z:5a43756c-46bc-4e13-a928-57f1ce9c9dfd',
  date: 'Mon, 29 Aug 2016 12:44:17 GMT',
  connection: 'close' });
 return result; }]];