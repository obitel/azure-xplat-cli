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
  .get('/jobschedules?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#jobschedules\",\"value\":[\r\n    {\r\n      \"id\":\"xplatJobSchedule\",\"displayName\":\"displayName\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobschedules/xplatJobSchedule\",\"eTag\":\"0x8D3BBFA5A793043\",\"lastModified\":\"2016-08-04T00:00:32.3481667Z\",\"creationTime\":\"2016-08-04T00:00:32.3481667Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-04T00:00:32.3481667Z\",\"schedule\":{\r\n        \"recurrenceInterval\":\"P2D\"\r\n      },\"jobSpecification\":{\r\n        \"displayName\":\"jobSpecDisplayName\",\"priority\":1,\"usesTaskDependencies\":false,\"constraints\":{\r\n          \"maxWallClockTime\":\"P1D\",\"maxTaskRetryCount\":5\r\n        },\"jobManagerTask\":{\r\n          \"id\":\"jobManager\",\"displayName\":\"jobManagerDisplay\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n            {\r\n              \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n            }\r\n          ],\"environmentSettings\":[\r\n            {\r\n              \"name\":\"name1\",\"value\":\"value1\"\r\n            },{\r\n              \"name\":\"name2\",\"value\":\"value2\"\r\n            }\r\n          ],\"constraints\":{\r\n            \"maxWallClockTime\":\"PT1H\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n          },\"runElevated\":false,\"runExclusive\":true,\"killJobOnCompletion\":false\r\n        },\"jobPreparationTask\":{\r\n          \"id\":\"jobPrep\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n            {\r\n              \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobPrepFilePath\"\r\n            }\r\n          ],\"environmentSettings\":[\r\n            {\r\n              \"name\":\"jobPrepName1\",\"value\":\"jobPrepValue1\"\r\n            },{\r\n              \"name\":\"jobPrepName2\",\"value\":\"jobPrepValue2\"\r\n            }\r\n          ],\"constraints\":{\r\n            \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n          },\"runElevated\":false,\"waitForSuccess\":true,\"rerunOnNodeRebootAfterSuccess\":true\r\n        },\"jobReleaseTask\":{\r\n          \"id\":\"jobRelease\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n            {\r\n              \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobReleaseFilePath\"\r\n            }\r\n          ],\"environmentSettings\":[\r\n            {\r\n              \"name\":\"jobReleaseName1\",\"value\":\"jobReleaseValue1\"\r\n            },{\r\n              \"name\":\"jobReleaseName2\",\"value\":\"jobReleaseValue2\"\r\n            }\r\n          ],\"maxWallClockTime\":\"PT15M\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"runElevated\":false\r\n        },\"commonEnvironmentSettings\":[\r\n          {\r\n            \"name\":\"commonName1\",\"value\":\"commonValue1\"\r\n          },{\r\n            \"name\":\"commonName2\",\"value\":\"commonValue2\"\r\n          }\r\n        ],\"poolInfo\":{\r\n          \"autoPoolSpecification\":{\r\n            \"autoPoolIdPrefix\":\"TestSpecPrefix\",\"poolLifetimeOption\":\"jobschedule\",\"keepAlive\":false,\"pool\":{\r\n              \"vmSize\":\"small\",\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n                \"nodeFillType\":\"Spread\"\r\n              },\"resizeTimeout\":\"PT15M\",\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n                \"commandLine\":\"cmd /c dir /s\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n              },\"certificateReferences\":[\r\n                {\r\n                  \"thumbprint\":\"0123456789abcdef\",\"thumbprintAlgorithm\":\"sha1\",\"storeLocation\":\"LocalMachine\",\"storeName\":\"certStore\",\"visibility\":[\r\n                    \"starttask\"\r\n                  ]\r\n                }\r\n              ],\"cloudServiceConfiguration\":{\r\n                \"osFamily\":\"4\",\"targetOSVersion\":\"*\"\r\n              }\r\n            }\r\n          }\r\n        },\"metadata\":[\r\n          {\r\n            \"name\":\"specMeta1\",\"value\":\"specMetaValue1\"\r\n          },{\r\n            \"name\":\"specMeta2\",\"value\":\"specMetaValue2\"\r\n          }\r\n        ]\r\n      },\"executionInfo\":{\r\n        \"nextRunTime\":\"2016-08-06T00:00:32.3481667Z\",\"recentJob\":{\r\n          \"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJobSchedule:job-1\",\"id\":\"xplatJobSchedule:job-1\"\r\n        }\r\n      },\"metadata\":[\r\n        {\r\n          \"name\":\"meta2\",\"value\":\"value2\"\r\n        },{\r\n          \"name\":\"meta1\",\"value\":\"value1\"\r\n        }\r\n      ]\r\n    },{\r\n      \"id\":\"xplatParamsJobSchedule\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobschedules/xplatParamsJobSchedule\",\"eTag\":\"0x8D3BBFA5B1E4F55\",\"lastModified\":\"2016-08-04T00:00:33.4303061Z\",\"creationTime\":\"2016-08-04T00:00:33.4303061Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-04T00:00:33.4303061Z\",\"schedule\":{\r\n        \"doNotRunUntil\":\"2020-01-01T12:00:00Z\",\"doNotRunAfter\":\"2021-01-01T12:00:00Z\",\"startWindow\":\"PT1H\",\"recurrenceInterval\":\"PT2H\"\r\n      },\"jobSpecification\":{\r\n        \"priority\":1,\"usesTaskDependencies\":false,\"constraints\":{\r\n          \"maxWallClockTime\":\"PT12H\",\"maxTaskRetryCount\":3\r\n        },\"poolInfo\":{\r\n          \"poolId\":\"pool1\"\r\n        }\r\n      },\"executionInfo\":{\r\n        \"nextRunTime\":\"2020-01-01T12:00:00Z\"\r\n      },\"metadata\":[\r\n        {\r\n          \"name\":\"meta1\",\"value\":\"value1\"\r\n        },{\r\n          \"name\":\"meta2\",\"value\":\"value2\"\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '11657fe3-17f5-4038-96cb-79af20c454de',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '496bec27-7a2a-48e0-8f48-6b7e9d4a9cd1',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:00:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/jobschedules?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#jobschedules\",\"value\":[\r\n    {\r\n      \"id\":\"xplatJobSchedule\",\"displayName\":\"displayName\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobschedules/xplatJobSchedule\",\"eTag\":\"0x8D3BBFA5A793043\",\"lastModified\":\"2016-08-04T00:00:32.3481667Z\",\"creationTime\":\"2016-08-04T00:00:32.3481667Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-04T00:00:32.3481667Z\",\"schedule\":{\r\n        \"recurrenceInterval\":\"P2D\"\r\n      },\"jobSpecification\":{\r\n        \"displayName\":\"jobSpecDisplayName\",\"priority\":1,\"usesTaskDependencies\":false,\"constraints\":{\r\n          \"maxWallClockTime\":\"P1D\",\"maxTaskRetryCount\":5\r\n        },\"jobManagerTask\":{\r\n          \"id\":\"jobManager\",\"displayName\":\"jobManagerDisplay\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n            {\r\n              \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n            }\r\n          ],\"environmentSettings\":[\r\n            {\r\n              \"name\":\"name1\",\"value\":\"value1\"\r\n            },{\r\n              \"name\":\"name2\",\"value\":\"value2\"\r\n            }\r\n          ],\"constraints\":{\r\n            \"maxWallClockTime\":\"PT1H\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n          },\"runElevated\":false,\"runExclusive\":true,\"killJobOnCompletion\":false\r\n        },\"jobPreparationTask\":{\r\n          \"id\":\"jobPrep\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n            {\r\n              \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobPrepFilePath\"\r\n            }\r\n          ],\"environmentSettings\":[\r\n            {\r\n              \"name\":\"jobPrepName1\",\"value\":\"jobPrepValue1\"\r\n            },{\r\n              \"name\":\"jobPrepName2\",\"value\":\"jobPrepValue2\"\r\n            }\r\n          ],\"constraints\":{\r\n            \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n          },\"runElevated\":false,\"waitForSuccess\":true,\"rerunOnNodeRebootAfterSuccess\":true\r\n        },\"jobReleaseTask\":{\r\n          \"id\":\"jobRelease\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n            {\r\n              \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobReleaseFilePath\"\r\n            }\r\n          ],\"environmentSettings\":[\r\n            {\r\n              \"name\":\"jobReleaseName1\",\"value\":\"jobReleaseValue1\"\r\n            },{\r\n              \"name\":\"jobReleaseName2\",\"value\":\"jobReleaseValue2\"\r\n            }\r\n          ],\"maxWallClockTime\":\"PT15M\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"runElevated\":false\r\n        },\"commonEnvironmentSettings\":[\r\n          {\r\n            \"name\":\"commonName1\",\"value\":\"commonValue1\"\r\n          },{\r\n            \"name\":\"commonName2\",\"value\":\"commonValue2\"\r\n          }\r\n        ],\"poolInfo\":{\r\n          \"autoPoolSpecification\":{\r\n            \"autoPoolIdPrefix\":\"TestSpecPrefix\",\"poolLifetimeOption\":\"jobschedule\",\"keepAlive\":false,\"pool\":{\r\n              \"vmSize\":\"small\",\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n                \"nodeFillType\":\"Spread\"\r\n              },\"resizeTimeout\":\"PT15M\",\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n                \"commandLine\":\"cmd /c dir /s\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n              },\"certificateReferences\":[\r\n                {\r\n                  \"thumbprint\":\"0123456789abcdef\",\"thumbprintAlgorithm\":\"sha1\",\"storeLocation\":\"LocalMachine\",\"storeName\":\"certStore\",\"visibility\":[\r\n                    \"starttask\"\r\n                  ]\r\n                }\r\n              ],\"cloudServiceConfiguration\":{\r\n                \"osFamily\":\"4\",\"targetOSVersion\":\"*\"\r\n              }\r\n            }\r\n          }\r\n        },\"metadata\":[\r\n          {\r\n            \"name\":\"specMeta1\",\"value\":\"specMetaValue1\"\r\n          },{\r\n            \"name\":\"specMeta2\",\"value\":\"specMetaValue2\"\r\n          }\r\n        ]\r\n      },\"executionInfo\":{\r\n        \"nextRunTime\":\"2016-08-06T00:00:32.3481667Z\",\"recentJob\":{\r\n          \"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJobSchedule:job-1\",\"id\":\"xplatJobSchedule:job-1\"\r\n        }\r\n      },\"metadata\":[\r\n        {\r\n          \"name\":\"meta2\",\"value\":\"value2\"\r\n        },{\r\n          \"name\":\"meta1\",\"value\":\"value1\"\r\n        }\r\n      ]\r\n    },{\r\n      \"id\":\"xplatParamsJobSchedule\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobschedules/xplatParamsJobSchedule\",\"eTag\":\"0x8D3BBFA5B1E4F55\",\"lastModified\":\"2016-08-04T00:00:33.4303061Z\",\"creationTime\":\"2016-08-04T00:00:33.4303061Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-04T00:00:33.4303061Z\",\"schedule\":{\r\n        \"doNotRunUntil\":\"2020-01-01T12:00:00Z\",\"doNotRunAfter\":\"2021-01-01T12:00:00Z\",\"startWindow\":\"PT1H\",\"recurrenceInterval\":\"PT2H\"\r\n      },\"jobSpecification\":{\r\n        \"priority\":1,\"usesTaskDependencies\":false,\"constraints\":{\r\n          \"maxWallClockTime\":\"PT12H\",\"maxTaskRetryCount\":3\r\n        },\"poolInfo\":{\r\n          \"poolId\":\"pool1\"\r\n        }\r\n      },\"executionInfo\":{\r\n        \"nextRunTime\":\"2020-01-01T12:00:00Z\"\r\n      },\"metadata\":[\r\n        {\r\n          \"name\":\"meta1\",\"value\":\"value1\"\r\n        },{\r\n          \"name\":\"meta2\",\"value\":\"value2\"\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '11657fe3-17f5-4038-96cb-79af20c454de',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '496bec27-7a2a-48e0-8f48-6b7e9d4a9cd1',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:00:33 GMT',
  connection: 'close' });
 return result; }]];