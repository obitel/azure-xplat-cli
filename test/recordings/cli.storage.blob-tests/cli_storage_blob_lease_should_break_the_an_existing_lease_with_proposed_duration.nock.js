// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname5169376393893464?comp=lease')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:47:03 GMT',
  etag: '"0x8D3C27C781234C4"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5b259101-0001-0024-1c65-f40f49000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-time': '20',
  date: 'Fri, 12 Aug 2016 06:47:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname5169376393893464?comp=lease')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 12 Aug 2016 06:47:03 GMT',
  etag: '"0x8D3C27C781234C4"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5b259101-0001-0024-1c65-f40f49000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-time': '20',
  date: 'Fri, 12 Aug 2016 06:47:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname5169376393893464')
  .reply(200, "", { 'content-length': '17',
  'content-type': 'text/plain',
  'content-md5': 'rG1yD4pD69MsOEPPGr72YA==',
  'last-modified': 'Fri, 12 Aug 2016 06:47:03 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3C27C781234C4"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e7984367-0001-004c-0865-f45118000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'breaking',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Fri, 12 Aug 2016 06:47:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname5169376393893464')
  .reply(200, "", { 'content-length': '17',
  'content-type': 'text/plain',
  'content-md5': 'rG1yD4pD69MsOEPPGr72YA==',
  'last-modified': 'Fri, 12 Aug 2016 06:47:03 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3C27C781234C4"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e7984367-0001-004c-0865-f45118000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'breaking',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Fri, 12 Aug 2016 06:47:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname5169376393893464')
  .reply(200, "", { 'content-length': '17',
  'content-type': 'text/plain',
  'content-md5': 'rG1yD4pD69MsOEPPGr72YA==',
  'last-modified': 'Fri, 12 Aug 2016 06:47:03 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3C27C781234C4"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a2bd9a66-0001-000e-2265-f47a0c000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'broken',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Fri, 12 Aug 2016 06:48:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname5169376393893464')
  .reply(200, "", { 'content-length': '17',
  'content-type': 'text/plain',
  'content-md5': 'rG1yD4pD69MsOEPPGr72YA==',
  'last-modified': 'Fri, 12 Aug 2016 06:47:03 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3C27C781234C4"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a2bd9a66-0001-000e-2265-f47a0c000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'broken',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Fri, 12 Aug 2016 06:48:16 GMT',
  connection: 'close' });
 return result; }]];