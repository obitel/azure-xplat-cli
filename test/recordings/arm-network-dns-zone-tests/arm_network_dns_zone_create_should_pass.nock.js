// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"scope\":\"user_impersonation\",\"expires_on\":\"1446713957\",\"not_before\":\"1446710057\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDQ2NzEwMDU3LCJuYmYiOjE0NDY3MTAwNTcsImV4cCI6MTQ0NjcxMzk1NywiYWNyIjoiMSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkJhbmRhcnUiLCJnaXZlbl9uYW1lIjoiU3JlZWthbnRoIiwiZ3JvdXBzIjpbIjdjOGFjYjRjLWRhM2UtNDc4ZS1hYTkyLWVjMmZkMzU4ZjkyZCIsImNjOWY4YTZjLWU5YzEtNGUzNC05ZWEwLTJjMTUxZGZhNjNmYiIsImEzNDY5ZDVkLTg1M2EtNDkyYi05NjVmLWZlZDdhYzI4NTk1YSIsIjZjZWQyZmQ1LTkzMTAtNDdmNy1iNjBjLTUyN2NlOWI3NzFlZSIsIjJkMmU2NTU3LTc2Y2ItNDdiMy1hODk3LTA2YzJlNTRlM2M0YiIsIjlhOTBlYzNkLTE0MzUtNDNmNS1hMjFkLTA5ZDgxOTg2MzM3NiIsIjdkYjNlOTYzLTAyNGItNGU0NS1hZWQ3LTU0YzAzMDBmMWNhNiIsImRjMDMxYWVhLWUzZDctNDU1OS1hZDljLTAzN2VhYTRjYmI2OCIsImE3MTAyNjhkLTUxYTktNDQ0Ny1iZjIwLTVjNDI4ZmQ3MDQ3YyIsIjkzMjlkMzhjLTUyOTYtNGVjYi1hZmE1LTNlNzRmOWFiZTA5ZiIsIjk3ZGE2MjlkLTU3ZDktNDIzNi04OWFmLWJmOTE4NDFkZmQ5MiIsIjYyZWRiZDdiLThkNDYtNGQyYy1hNWExLWRhNWI3OGJhMWQzOCIsIjNjNGZjZTQ2LTUzYzktNDlmNy05YmNjLWU5OTdkYzU2OGMwOSIsImY0NDQ0ZGFlLTRiY2UtNDAyZi1iNTRiLWYxMjQ2MWEzNmJiYyIsImExOTBiMzdlLTMyMjgtNGRiZS05NzFkLWM0YWQ1ZTI3NGNhYSIsImQ3ZDM5ZmU1LWU3ZWItNDc5Ny1iZDRiLWU4MDJlOGZhMjZjYyIsIjlkNTI5ZDVlLWI4ODItNGZmYi1hOGU2LWM0MTQ3YzY4MDczNSIsImU3NmFiMzFlLWRkNTgtNDBlMi1hN2MxLTNlYmIwMjkyMTIxMSIsIjJjYzE4NzVlLWUzZmItNDFlYS04MzcyLWI1NjkwZThjOTQyMSIsIjdhZDEyYmZiLTczMWEtNDBmYS1hMGYzLWE1MTFjMzRjODVjZSIsIjNiYzhhYTdkLTQ5YzgtNGQ3ZC05ZjlmLTkzNzBkZmJmN2I3OCIsIjYxZDliYzZiLWJjOWQtNGU4ZC05ZGU0LWYyMThkNDEyOGJlNSIsIjIwNjUxMzVkLTUxNjUtNDFkNi05Mjc3LThlMTQ5ZmMzM2VmOCIsImM4MzVkNWQwLWYwNDMtNGNjMC04Y2NlLTYwMWE2MTk2OGYxZiIsIjBkODY0Njc2LTdmNTUtNDY5NC05MGYyLTViNzVlYjc3YjM0MiIsImRjYzMxYjM5LWU3ZmUtNDAwYy1hZjg0LTMxZGQ4NTVkZWZhMSJdLCJpcGFkZHIiOiI1OS4xNjUuMjE1LjI1MyIsIm5hbWUiOiJTcmVla2FudGggQmFuZGFydSAoQlJJTExJTyBMTEMpIiwib2lkIjoiYzA3MjA3YTUtNWUzNi00NzcxLTgwMmUtMGZiYzMzOTNiYjhlIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTIxNDY3NzMwODUtOTAzMzYzMjg1LTcxOTM0NDcwNy0xOTEwNzAyIiwicHVpZCI6IjEwMDMzRkZGOEQ3NUM3OTQiLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJQYjNudG03RjlHckZKZUNJVDNPRVdPZzBnTElJX1ZWTi0yNTBFOFlqeFdVIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidW5pcXVlX25hbWUiOiJ2LXNyZWJhbkBtaWNyb3NvZnQuY29tIiwidXBuIjoidi1zcmViYW5AbWljcm9zb2Z0LmNvbSIsInZlciI6IjEuMCJ9.Ov1oeOCr_yQYIzDLjI1IETFbdTTYjyFusElJjI2FZpa5Knab1l7ZzQeeCF27o1EnjgJM_NcS2RGW-6Yr8B6TTeDwcnK8auz5Ky5B0B7akM4eJG0RJeLGf6N3MPDNUP6wtZgxvNBZSX09IS_8E2Kcj2nrAThEP38nc7ffMeVzf3v605iDjAHG8CmZYI_d3qxM5EZLPm7XUOim1m3BBZo0RkQHuUBKJZhL_Dl_D2oPBrzAkmI0hGIc99EXi9-FMKvcX5ipV8JK1Fj2qq3zxLL-OB_wn0k6ZZojpS7ZFyu3ZQPEE99wmVWzNOmeuTrbUq3_N0kbM1HtpPA1V0HTUFN27g\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLYj3KwbJL6XZ6web41FqbAgyHb-mCLNfPD_AGXy5jNhGdpCXySsvRNWpsNHpoMfU6BFJ2jKoHfblW2K6DisUCPhxniFjzROHmRzCVolEoYeXrDL7inDsKDzmlmMZZAQcKWab6PuwLbBgAPUpTgvgAVRZ8pMgTa8RNoiXk-7Rrq5uYql0UDDf3F0sWPPgPjacTDid4k-alPcrgoQpWO-CrevQ_2T2RGlNgEw474r-V5o8Sd254hN693D-Z72waPDAFEBXgmX50NQQdP5nWzGOcNejGWmbtdh_AZAn0MCcCYm5uaKm9CSxr-szWATcwXVD0yjyncRufh2zAIHqw98A6ekD7tG-sJJO4A6w9_DaoEHtHSBql1Xy9k_JbwYi1TH3x7OC7ctIjA3xqEHLyaimB52dTm_p1Avf8giGGg--kFLicgaR_jqxkp6Jo6leTKSED9rEZJCrX_ANLIaa1USTZkSojjNQFjguoSdv10X5NwGqn6K9csJiKi9NYweEqVzHcegRpvOJ0NLIuyXzlroy9ybLIElpYc6y43-v_TwOD5kx_rgOBH3bdTEAI0F8AP1fTvHaj1sD_i_XThSyBhaAnaxSFIqcUqwhKGJG8ZI2jkhEQAV_zyeOEpPstg5A3Z06zErFRlKvynCSwjHvWBA2G3_5sY4VsSrlE3tbOaW3y8ebfE-WtAxI0hDPcyd42kdG4CAA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '6a8f35fb-e47a-489e-917e-bf61d39aafa9',
  'client-request-id': 'e0f407d7-71bd-4ea2-9a14-9a0085c25a64',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_36',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 05 Nov 2015 07:59:16 GMT',
  connection: 'close',
  'content-length': '3743' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"scope\":\"user_impersonation\",\"expires_on\":\"1446713957\",\"not_before\":\"1446710057\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDQ2NzEwMDU3LCJuYmYiOjE0NDY3MTAwNTcsImV4cCI6MTQ0NjcxMzk1NywiYWNyIjoiMSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkJhbmRhcnUiLCJnaXZlbl9uYW1lIjoiU3JlZWthbnRoIiwiZ3JvdXBzIjpbIjdjOGFjYjRjLWRhM2UtNDc4ZS1hYTkyLWVjMmZkMzU4ZjkyZCIsImNjOWY4YTZjLWU5YzEtNGUzNC05ZWEwLTJjMTUxZGZhNjNmYiIsImEzNDY5ZDVkLTg1M2EtNDkyYi05NjVmLWZlZDdhYzI4NTk1YSIsIjZjZWQyZmQ1LTkzMTAtNDdmNy1iNjBjLTUyN2NlOWI3NzFlZSIsIjJkMmU2NTU3LTc2Y2ItNDdiMy1hODk3LTA2YzJlNTRlM2M0YiIsIjlhOTBlYzNkLTE0MzUtNDNmNS1hMjFkLTA5ZDgxOTg2MzM3NiIsIjdkYjNlOTYzLTAyNGItNGU0NS1hZWQ3LTU0YzAzMDBmMWNhNiIsImRjMDMxYWVhLWUzZDctNDU1OS1hZDljLTAzN2VhYTRjYmI2OCIsImE3MTAyNjhkLTUxYTktNDQ0Ny1iZjIwLTVjNDI4ZmQ3MDQ3YyIsIjkzMjlkMzhjLTUyOTYtNGVjYi1hZmE1LTNlNzRmOWFiZTA5ZiIsIjk3ZGE2MjlkLTU3ZDktNDIzNi04OWFmLWJmOTE4NDFkZmQ5MiIsIjYyZWRiZDdiLThkNDYtNGQyYy1hNWExLWRhNWI3OGJhMWQzOCIsIjNjNGZjZTQ2LTUzYzktNDlmNy05YmNjLWU5OTdkYzU2OGMwOSIsImY0NDQ0ZGFlLTRiY2UtNDAyZi1iNTRiLWYxMjQ2MWEzNmJiYyIsImExOTBiMzdlLTMyMjgtNGRiZS05NzFkLWM0YWQ1ZTI3NGNhYSIsImQ3ZDM5ZmU1LWU3ZWItNDc5Ny1iZDRiLWU4MDJlOGZhMjZjYyIsIjlkNTI5ZDVlLWI4ODItNGZmYi1hOGU2LWM0MTQ3YzY4MDczNSIsImU3NmFiMzFlLWRkNTgtNDBlMi1hN2MxLTNlYmIwMjkyMTIxMSIsIjJjYzE4NzVlLWUzZmItNDFlYS04MzcyLWI1NjkwZThjOTQyMSIsIjdhZDEyYmZiLTczMWEtNDBmYS1hMGYzLWE1MTFjMzRjODVjZSIsIjNiYzhhYTdkLTQ5YzgtNGQ3ZC05ZjlmLTkzNzBkZmJmN2I3OCIsIjYxZDliYzZiLWJjOWQtNGU4ZC05ZGU0LWYyMThkNDEyOGJlNSIsIjIwNjUxMzVkLTUxNjUtNDFkNi05Mjc3LThlMTQ5ZmMzM2VmOCIsImM4MzVkNWQwLWYwNDMtNGNjMC04Y2NlLTYwMWE2MTk2OGYxZiIsIjBkODY0Njc2LTdmNTUtNDY5NC05MGYyLTViNzVlYjc3YjM0MiIsImRjYzMxYjM5LWU3ZmUtNDAwYy1hZjg0LTMxZGQ4NTVkZWZhMSJdLCJpcGFkZHIiOiI1OS4xNjUuMjE1LjI1MyIsIm5hbWUiOiJTcmVla2FudGggQmFuZGFydSAoQlJJTExJTyBMTEMpIiwib2lkIjoiYzA3MjA3YTUtNWUzNi00NzcxLTgwMmUtMGZiYzMzOTNiYjhlIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTIxNDY3NzMwODUtOTAzMzYzMjg1LTcxOTM0NDcwNy0xOTEwNzAyIiwicHVpZCI6IjEwMDMzRkZGOEQ3NUM3OTQiLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJQYjNudG03RjlHckZKZUNJVDNPRVdPZzBnTElJX1ZWTi0yNTBFOFlqeFdVIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidW5pcXVlX25hbWUiOiJ2LXNyZWJhbkBtaWNyb3NvZnQuY29tIiwidXBuIjoidi1zcmViYW5AbWljcm9zb2Z0LmNvbSIsInZlciI6IjEuMCJ9.Ov1oeOCr_yQYIzDLjI1IETFbdTTYjyFusElJjI2FZpa5Knab1l7ZzQeeCF27o1EnjgJM_NcS2RGW-6Yr8B6TTeDwcnK8auz5Ky5B0B7akM4eJG0RJeLGf6N3MPDNUP6wtZgxvNBZSX09IS_8E2Kcj2nrAThEP38nc7ffMeVzf3v605iDjAHG8CmZYI_d3qxM5EZLPm7XUOim1m3BBZo0RkQHuUBKJZhL_Dl_D2oPBrzAkmI0hGIc99EXi9-FMKvcX5ipV8JK1Fj2qq3zxLL-OB_wn0k6ZZojpS7ZFyu3ZQPEE99wmVWzNOmeuTrbUq3_N0kbM1HtpPA1V0HTUFN27g\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLYj3KwbJL6XZ6web41FqbAgyHb-mCLNfPD_AGXy5jNhGdpCXySsvRNWpsNHpoMfU6BFJ2jKoHfblW2K6DisUCPhxniFjzROHmRzCVolEoYeXrDL7inDsKDzmlmMZZAQcKWab6PuwLbBgAPUpTgvgAVRZ8pMgTa8RNoiXk-7Rrq5uYql0UDDf3F0sWPPgPjacTDid4k-alPcrgoQpWO-CrevQ_2T2RGlNgEw474r-V5o8Sd254hN693D-Z72waPDAFEBXgmX50NQQdP5nWzGOcNejGWmbtdh_AZAn0MCcCYm5uaKm9CSxr-szWATcwXVD0yjyncRufh2zAIHqw98A6ekD7tG-sJJO4A6w9_DaoEHtHSBql1Xy9k_JbwYi1TH3x7OC7ctIjA3xqEHLyaimB52dTm_p1Avf8giGGg--kFLicgaR_jqxkp6Jo6leTKSED9rEZJCrX_ANLIaa1USTZkSojjNQFjguoSdv10X5NwGqn6K9csJiKi9NYweEqVzHcegRpvOJ0NLIuyXzlroy9ybLIElpYc6y43-v_TwOD5kx_rgOBH3bdTEAI0F8AP1fTvHaj1sD_i_XThSyBhaAnaxSFIqcUqwhKGJG8ZI2jkhEQAV_zyeOEpPstg5A3Z06zErFRlKvynCSwjHvWBA2G3_5sY4VsSrlE3tbOaW3y8ebfE-WtAxI0hDPcyd42kdG4CAA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '6a8f35fb-e47a-489e-917e-bf61d39aafa9',
  'client-request-id': 'e0f407d7-71bd-4ea2-9a14-9a0085c25a64',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_36',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 05 Nov 2015 07:59:16 GMT',
  connection: 'close',
  'content-length': '3743' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateDns?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreateDns' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-request-id': 'af49c43d-02a3-4b78-a904-51a2ece25f06',
  'x-ms-correlation-request-id': 'af49c43d-02a3-4b78-a904-51a2ece25f06',
  'x-ms-routing-request-id': 'CENTRALINDIA:20151105T075917Z:af49c43d-02a3-4b78-a904-51a2ece25f06',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 05 Nov 2015 07:59:17 GMT',
  connection: 'close',
  'content-length': '111' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateDns?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreateDns' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-request-id': 'af49c43d-02a3-4b78-a904-51a2ece25f06',
  'x-ms-correlation-request-id': 'af49c43d-02a3-4b78-a904-51a2ece25f06',
  'x-ms-routing-request-id': 'CENTRALINDIA:20151105T075917Z:af49c43d-02a3-4b78-a904-51a2ece25f06',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 05 Nov 2015 07:59:17 GMT',
  connection: 'close',
  'content-length': '111' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateDns?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDns\",\"name\":\"xplatTestGCreateDns\",\"location\":\"southeastasia\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '208',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': 'ce55c7a0-3241-4865-bc43-f56c787e616e',
  'x-ms-correlation-request-id': 'ce55c7a0-3241-4865-bc43-f56c787e616e',
  'x-ms-routing-request-id': 'CENTRALINDIA:20151105T075918Z:ce55c7a0-3241-4865-bc43-f56c787e616e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 05 Nov 2015 07:59:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateDns?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDns\",\"name\":\"xplatTestGCreateDns\",\"location\":\"southeastasia\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '208',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': 'ce55c7a0-3241-4865-bc43-f56c787e616e',
  'x-ms-correlation-request-id': 'ce55c7a0-3241-4865-bc43-f56c787e616e',
  'x-ms-routing-request-id': 'CENTRALINDIA:20151105T075918Z:ce55c7a0-3241-4865-bc43-f56c787e616e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 05 Nov 2015 07:59:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDns/providers/Microsoft.Network/dnszones/xplattestgcreatedns.xplattestdns?api-version=2015-05-04-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDns\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedns.xplattestdns\",\"name\":\"xplattestgcreatedns.xplattestdns\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"5c9ef0cf-18a1-46f3-93fc-51d22cf4fadb\",\"location\":\"global\",\"properties\":{}}", { 'cache-control': 'private',
  'content-length': '334',
  'content-type': 'application/json; charset=utf-8',
  etag: '5c9ef0cf-18a1-46f3-93fc-51d22cf4fadb',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '9fe7d136-0d38-44a0-b971-8bcccc24b479',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11997',
  'x-ms-correlation-request-id': '6efbf0f2-3fef-41bd-9c72-a9ef0a23b532',
  'x-ms-routing-request-id': 'CENTRALINDIA:20151105T075924Z:6efbf0f2-3fef-41bd-9c72-a9ef0a23b532',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 05 Nov 2015 07:59:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDns/providers/Microsoft.Network/dnszones/xplattestgcreatedns.xplattestdns?api-version=2015-05-04-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDns\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedns.xplattestdns\",\"name\":\"xplattestgcreatedns.xplattestdns\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"5c9ef0cf-18a1-46f3-93fc-51d22cf4fadb\",\"location\":\"global\",\"properties\":{}}", { 'cache-control': 'private',
  'content-length': '334',
  'content-type': 'application/json; charset=utf-8',
  etag: '5c9ef0cf-18a1-46f3-93fc-51d22cf4fadb',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '9fe7d136-0d38-44a0-b971-8bcccc24b479',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11997',
  'x-ms-correlation-request-id': '6efbf0f2-3fef-41bd-9c72-a9ef0a23b532',
  'x-ms-routing-request-id': 'CENTRALINDIA:20151105T075924Z:6efbf0f2-3fef-41bd-9c72-a9ef0a23b532',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 05 Nov 2015 07:59:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDns/providers/Microsoft.Network/dnszones/xplattestgcreatedns.xplattestdns?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDns\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedns.xplattestdns\",\"name\":\"xplattestgcreatedns.xplattestdns\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"5c9ef0cf-18a1-46f3-93fc-51d22cf4fadb\",\"location\":\"global\",\"properties\":{\"maxNumberOfRecordSets\":1000,\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '385',
  'content-type': 'application/json; charset=utf-8',
  etag: '5c9ef0cf-18a1-46f3-93fc-51d22cf4fadb',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '4f449bca-2c53-4003-9bdb-48479a1ad27a',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11996',
  'x-ms-correlation-request-id': 'c3833300-2e77-4920-9f2c-c181aa562472',
  'x-ms-routing-request-id': 'CENTRALINDIA:20151105T075927Z:c3833300-2e77-4920-9f2c-c181aa562472',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 05 Nov 2015 07:59:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDns/providers/Microsoft.Network/dnszones/xplattestgcreatedns.xplattestdns?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDns\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedns.xplattestdns\",\"name\":\"xplattestgcreatedns.xplattestdns\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"5c9ef0cf-18a1-46f3-93fc-51d22cf4fadb\",\"location\":\"global\",\"properties\":{\"maxNumberOfRecordSets\":1000,\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '385',
  'content-type': 'application/json; charset=utf-8',
  etag: '5c9ef0cf-18a1-46f3-93fc-51d22cf4fadb',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '4f449bca-2c53-4003-9bdb-48479a1ad27a',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11996',
  'x-ms-correlation-request-id': 'c3833300-2e77-4920-9f2c-c181aa562472',
  'x-ms-routing-request-id': 'CENTRALINDIA:20151105T075927Z:c3833300-2e77-4920-9f2c-c181aa562472',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 05 Nov 2015 07:59:26 GMT',
  connection: 'close' });
 return result; }]];
