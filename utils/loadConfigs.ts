/* eslint-disable no-console */
import * as config from '../config.json';

// Resolve the test environment from node environment variable
const nodeEnv = process.env.TEST_ENV;

const configs = {
  dev: config.dev,
  prod: config.prod,
};

if (nodeEnv) {
  console.log(`Test will be run against ${configs[nodeEnv].baseUrl}`);
} else {
  console.log(`Test will be run against ${config.dev.baseUrl}`);
}

export const envConfigs = nodeEnv ? configs[nodeEnv] : config.dev;
export const getConfig = config;
