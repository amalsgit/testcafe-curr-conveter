/* eslint-disable no-console */
import * as config from '../config.json';

// Resolve the test environment from node environment variable
function getCurrConfig() {
  const nodeEnv = process.env.TEST_ENV;
  let getEnvConfig;
  if (nodeEnv === 'dev') {
    getEnvConfig = config.dev;
  } else if (nodeEnv === 'prod') {
    getEnvConfig = config.prod;
  } else {
    getEnvConfig = config.dev;
  }
  console.log(`Test will be run against ${getEnvConfig.baseUrl}`);
  return getEnvConfig;
}

export const envConfigs = getCurrConfig();
export const getConfig = config;
