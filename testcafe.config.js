/* eslint-disable no-console */
/* eslint-disable no-template-curly-in-string */
const createTestCafe = require('testcafe');

let testcafe = null;

createTestCafe()
  .then(tc => {
    testcafe = tc;
    const runner = testcafe.createRunner();

    return runner
      .src(['tests/mockedCurrConversion.tests.ts'])
      .browsers(['ie', 'edge', 'chrome', 'firefox'])
      .reporter([
        'spec',
        {
          name: 'html',
          output: 'reports/html_report.html',
        },
        {
          name: 'cucumber-json',
          output: 'reports/report.json',
        },
      ])
      .screenshots({
        path: 'reports/screenshots/',
        takeOnFails: true,
        pathPattern:
          '${DATE}_${TIME}/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png',
      })
      .video(
        'reports/videos/',
        {
          singleFile: true,
          failedOnly: true,
          pathPattern:
            '${DATE}_${TIME}/${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.mp4',
        },
        {
          r: 20,
          aspect: '4:3',
        },
      )
      .tsConfigPath('./tsconfig.json')
      .run();
  })
  .then(failedCount => {
    console.log(`Tests failed: ${  failedCount}`);
    testcafe.close();
  });
