// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2915bbd6-1252-405f-8173-6c00428146d9',
    name: 'Batch-MatthChr',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .post('/pools/xplatTestPool/nodes/tvm-3850571994_6-20160803t201149z/disablescheduling?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '005df83b-7580-47f0-b402-509bb64ec464',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '030ddf0a-cb70-44a7-9a7a-d5e5ca28ba2d',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_6-20160803t201149z/disablescheduling',
  date: 'Thu, 04 Aug 2016 00:01:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .post('/pools/xplatTestPool/nodes/tvm-3850571994_6-20160803t201149z/disablescheduling?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '005df83b-7580-47f0-b402-509bb64ec464',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '030ddf0a-cb70-44a7-9a7a-d5e5ca28ba2d',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_6-20160803t201149z/disablescheduling',
  date: 'Thu, 04 Aug 2016 00:01:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes/tvm-3850571994_6-20160803t201149z?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#nodes/@Element\",\"id\":\"tvm-3850571994_6-20160803t201149z\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_6-20160803t201149z\",\"state\":\"offline\",\"schedulingState\":\"disabled\",\"stateTransitionTime\":\"2016-08-04T00:01:23.9152041Z\",\"lastBootTime\":\"2016-08-03T23:10:32.785991Z\",\"allocationTime\":\"2016-08-03T20:11:49.8693034Z\",\"ipAddress\":\"100.118.152.66\",\"affinityId\":\"TVM:tvm-3850571994_6-20160803t201149z\",\"vmSize\":\"small\",\"totalTasksRun\":4,\"totalTasksSucceeded\":4,\"runningTasksCount\":0,\"startTask\":{\r\n    \"commandLine\":\"cmd /c dir\",\"resourceFiles\":[\r\n      \r\n    ],\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"startTaskInfo\":{\r\n    \"state\":\"completed\",\"startTime\":\"2016-08-03T23:10:35.651042Z\",\"endTime\":\"2016-08-03T23:10:35.91665Z\",\"exitCode\":0,\"retryCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e86d8a86-544b-46f7-b629-ce697a402de9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '3d6856b5-486b-47a4-95bb-c5fd61e2ca15',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:01:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes/tvm-3850571994_6-20160803t201149z?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#nodes/@Element\",\"id\":\"tvm-3850571994_6-20160803t201149z\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_6-20160803t201149z\",\"state\":\"offline\",\"schedulingState\":\"disabled\",\"stateTransitionTime\":\"2016-08-04T00:01:23.9152041Z\",\"lastBootTime\":\"2016-08-03T23:10:32.785991Z\",\"allocationTime\":\"2016-08-03T20:11:49.8693034Z\",\"ipAddress\":\"100.118.152.66\",\"affinityId\":\"TVM:tvm-3850571994_6-20160803t201149z\",\"vmSize\":\"small\",\"totalTasksRun\":4,\"totalTasksSucceeded\":4,\"runningTasksCount\":0,\"startTask\":{\r\n    \"commandLine\":\"cmd /c dir\",\"resourceFiles\":[\r\n      \r\n    ],\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"startTaskInfo\":{\r\n    \"state\":\"completed\",\"startTime\":\"2016-08-03T23:10:35.651042Z\",\"endTime\":\"2016-08-03T23:10:35.91665Z\",\"exitCode\":0,\"retryCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e86d8a86-544b-46f7-b629-ce697a402de9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '3d6856b5-486b-47a4-95bb-c5fd61e2ca15',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:01:23 GMT',
  connection: 'close' });
 return result; }]];