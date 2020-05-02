/* eslint-disable no-console */
import * as config from '../config.json';

// Resolve the test environment from node environment variable
function getCurrConfig() {
  const nodeEnv = process.env.TEST_ENV;
  let getConfig;
  if (nodeEnv === 'dev') {
    getConfig = config.dev;
  } else if (nodeEnv === 'prod') {
    getConfig = config.prod;
  } else {
    getConfig = config.dev;
  }
  console.log(`Test will be run against ${getConfig.baseUrl}`);
  return getConfig;
}

export const envConfigs = getCurrConfig();
export const getConfig = config;
