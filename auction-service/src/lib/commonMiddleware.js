import middy from '@middy/core';
import httpEventNormalizer from '@middy/http-event-normalizer';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpErrorHandler from 'middy-middleware-json-error-handler';

export default (handler) =>
  middy(handler).use([
    httpEventNormalizer(),
    httpJsonBodyParser(),
    httpErrorHandler(),
  ]);
