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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-a3eb-2986f201d201\",\"location\":\"global\",\"tags\":{},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-07.azure-dns.com.\",\"ns2-07.azure-dns.net.\",\"ns3-07.azure-dns.org.\",\"ns4-07.azure-dns.info.\"],\"numberOfRecordSets\":18}}", { 'cache-control': 'private',
  'content-length': '469',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-a3eb-2986f201d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '035db5de-59c4-427c-984c-8b919b9b68bd',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '2c42a69c-ea53-4b85-bc74-40ed0ee356ab',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124051Z:2c42a69c-ea53-4b85-bc74-40ed0ee356ab',
  date: 'Mon, 29 Aug 2016 12:40:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-a3eb-2986f201d201\",\"location\":\"global\",\"tags\":{},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-07.azure-dns.com.\",\"ns2-07.azure-dns.net.\",\"ns3-07.azure-dns.org.\",\"ns4-07.azure-dns.info.\"],\"numberOfRecordSets\":18}}", { 'cache-control': 'private',
  'content-length': '469',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-a3eb-2986f201d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '035db5de-59c4-427c-984c-8b919b9b68bd',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '2c42a69c-ea53-4b85-bc74-40ed0ee356ab',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124051Z:2c42a69c-ea53-4b85-bc74-40ed0ee356ab',
  date: 'Mon, 29 Aug 2016 12:40:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com/recordsets?api-version=2016-04-01')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"6c371ea7-a179-4de0-a09a-51a45437bf99\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"1.2.3.4\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/NS\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"13b95648-10cb-422c-a71e-65ea615826d4\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":172800,\"NSRecords\":[{\"nsdname\":\"ns1-07.azure-dns.com.\"},{\"nsdname\":\"ns2-07.azure-dns.net.\"},{\"nsdname\":\"ns3-07.azure-dns.org.\"},{\"nsdname\":\"ns4-07.azure-dns.info.\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"702b6734-4dbe-4626-8b08-994da0e83864\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"hostmaster.example1.com.\",\"expireTime\":1814400,\"host\":\"ns1-07.azure-dns.com.\",\"minimumTTL\":10800,\"refreshTime\":43200,\"retryTime\":900,\"serialNumber\":2003080800}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/default\",\"name\":\"default\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"214af848-b4db-44f5-aed5-12f5552ca1cb\",\"properties\":{\"fqdn\":\"default.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"0.1.2.3\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/record\",\"name\":\"record\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"c91e727b-ba44-4b3e-96ca-ec01eb915f79\",\"properties\":{\"fqdn\":\"record.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"bar.foo.com.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/subzone\",\"name\":\"subzone\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"a6ee6397-29c4-487c-9a65-5f8727071277\",\"properties\":{\"fqdn\":\"subzone.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"3.4.5.6\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/test-cname.subzone\",\"name\":\"test-cname.subzone\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"adfee9d1-72b0-48db-8058-05c14c05c95c\",\"properties\":{\"fqdn\":\"test-cname.subzone.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"r1.subzone.example1.com.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/www.subzone\",\"name\":\"www.subzone\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"26f8f5d0-7168-4c40-baeb-baf5292f8b5a\",\"properties\":{\"fqdn\":\"www.subzone.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"4.5.6.7\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/tc\",\"name\":\"tc\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"ca905876-b8d2-4b95-b284-3bea821bded5\",\"properties\":{\"fqdn\":\"tc.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"test.example1.com.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/test\",\"name\":\"test\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"76e27029-77a9-439b-923b-823d82979bf6\",\"properties\":{\"fqdn\":\"test.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"7.8.9.0\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/test-cname\",\"name\":\"test-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"cf7e7a2e-98a3-4317-829f-4d7e3ad899c9\",\"properties\":{\"fqdn\":\"test-cname.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"r1.example1.com.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/test-cname2\",\"name\":\"test-cname2\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"7e898c22-d167-4b26-8cc7-0d85b57bb9e7\",\"properties\":{\"fqdn\":\"test-cname2.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"r1.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/test-multi-a\",\"name\":\"test-multi-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"fe9fbded-b150-4f10-a45f-bbf434886129\",\"properties\":{\"fqdn\":\"test-multi-a.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"192.168.1.145\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/test-mx\",\"name\":\"test-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"3a9fd8f5-2bca-49a7-ae99-041ec2779c89\",\"properties\":{\"fqdn\":\"test-mx.example1.com.\",\"TTL\":3600,\"MXRecords\":[{\"exchange\":\"m1.example1.com.\",\"preference\":10}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/test-mx2\",\"name\":\"test-mx2\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"8fa56502-1527-4e8e-acd5-baa07505486c\",\"properties\":{\"fqdn\":\"test-mx2.example1.com.\",\"TTL\":3600,\"MXRecords\":[{\"exchange\":\"m1.\",\"preference\":10}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/test-srv\",\"name\":\"test-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"143e4c6e-3d9c-442b-8850-da80b62f6317\",\"properties\":{\"fqdn\":\"test-srv.example1.com.\",\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"srv1.example1.com.\",\"weight\":2}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/test-srv2\",\"name\":\"test-srv2\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"1f71fe5f-f021-464c-a75b-7237e9d52cfb\",\"properties\":{\"fqdn\":\"test-srv2.example1.com.\",\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"srv1.\",\"weight\":2}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/www\",\"name\":\"www\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"41aab447-a91f-4f56-a095-2021b0673d30\",\"properties\":{\"fqdn\":\"www.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"2.3.4.5\"}]}}]}", { 'cache-control': 'private',
  'content-length': '7019',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8b236225-1231-443a-80e9-0f29c51a0454',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14959',
  'x-ms-correlation-request-id': 'a691961b-7c4e-4730-96e3-e9465b8c4e9d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124051Z:a691961b-7c4e-4730-96e3-e9465b8c4e9d',
  date: 'Mon, 29 Aug 2016 12:40:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com/recordsets?api-version=2016-04-01')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"6c371ea7-a179-4de0-a09a-51a45437bf99\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"1.2.3.4\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/NS\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"13b95648-10cb-422c-a71e-65ea615826d4\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":172800,\"NSRecords\":[{\"nsdname\":\"ns1-07.azure-dns.com.\"},{\"nsdname\":\"ns2-07.azure-dns.net.\"},{\"nsdname\":\"ns3-07.azure-dns.org.\"},{\"nsdname\":\"ns4-07.azure-dns.info.\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"702b6734-4dbe-4626-8b08-994da0e83864\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"hostmaster.example1.com.\",\"expireTime\":1814400,\"host\":\"ns1-07.azure-dns.com.\",\"minimumTTL\":10800,\"refreshTime\":43200,\"retryTime\":900,\"serialNumber\":2003080800}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/default\",\"name\":\"default\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"214af848-b4db-44f5-aed5-12f5552ca1cb\",\"properties\":{\"fqdn\":\"default.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"0.1.2.3\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/record\",\"name\":\"record\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"c91e727b-ba44-4b3e-96ca-ec01eb915f79\",\"properties\":{\"fqdn\":\"record.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"bar.foo.com.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/subzone\",\"name\":\"subzone\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"a6ee6397-29c4-487c-9a65-5f8727071277\",\"properties\":{\"fqdn\":\"subzone.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"3.4.5.6\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/test-cname.subzone\",\"name\":\"test-cname.subzone\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"adfee9d1-72b0-48db-8058-05c14c05c95c\",\"properties\":{\"fqdn\":\"test-cname.subzone.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"r1.subzone.example1.com.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/www.subzone\",\"name\":\"www.subzone\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"26f8f5d0-7168-4c40-baeb-baf5292f8b5a\",\"properties\":{\"fqdn\":\"www.subzone.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"4.5.6.7\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/tc\",\"name\":\"tc\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"ca905876-b8d2-4b95-b284-3bea821bded5\",\"properties\":{\"fqdn\":\"tc.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"test.example1.com.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/test\",\"name\":\"test\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"76e27029-77a9-439b-923b-823d82979bf6\",\"properties\":{\"fqdn\":\"test.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"7.8.9.0\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/test-cname\",\"name\":\"test-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"cf7e7a2e-98a3-4317-829f-4d7e3ad899c9\",\"properties\":{\"fqdn\":\"test-cname.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"r1.example1.com.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/test-cname2\",\"name\":\"test-cname2\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"7e898c22-d167-4b26-8cc7-0d85b57bb9e7\",\"properties\":{\"fqdn\":\"test-cname2.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"r1.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/test-multi-a\",\"name\":\"test-multi-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"fe9fbded-b150-4f10-a45f-bbf434886129\",\"properties\":{\"fqdn\":\"test-multi-a.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"192.168.1.145\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/test-mx\",\"name\":\"test-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"3a9fd8f5-2bca-49a7-ae99-041ec2779c89\",\"properties\":{\"fqdn\":\"test-mx.example1.com.\",\"TTL\":3600,\"MXRecords\":[{\"exchange\":\"m1.example1.com.\",\"preference\":10}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/test-mx2\",\"name\":\"test-mx2\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"8fa56502-1527-4e8e-acd5-baa07505486c\",\"properties\":{\"fqdn\":\"test-mx2.example1.com.\",\"TTL\":3600,\"MXRecords\":[{\"exchange\":\"m1.\",\"preference\":10}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/test-srv\",\"name\":\"test-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"143e4c6e-3d9c-442b-8850-da80b62f6317\",\"properties\":{\"fqdn\":\"test-srv.example1.com.\",\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"srv1.example1.com.\",\"weight\":2}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/test-srv2\",\"name\":\"test-srv2\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"1f71fe5f-f021-464c-a75b-7237e9d52cfb\",\"properties\":{\"fqdn\":\"test-srv2.example1.com.\",\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"srv1.\",\"weight\":2}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/www\",\"name\":\"www\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"41aab447-a91f-4f56-a095-2021b0673d30\",\"properties\":{\"fqdn\":\"www.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"2.3.4.5\"}]}}]}", { 'cache-control': 'private',
  'content-length': '7019',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8b236225-1231-443a-80e9-0f29c51a0454',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14959',
  'x-ms-correlation-request-id': 'a691961b-7c4e-4730-96e3-e9465b8c4e9d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124051Z:a691961b-7c4e-4730-96e3-e9465b8c4e9d',
  date: 'Mon, 29 Aug 2016 12:40:51 GMT',
  connection: 'close' });
 return result; }]];