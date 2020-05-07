/* eslint-disable no-console, no-template-curly-in-string */
const createTestCafe = require('testcafe');

const browserArg = process.argv[2];

const browsers = [
  ...[browserArg === 'chrome' ? ['chrome'] : []],
  ...[browserArg === 'all' ? ['chrome', 'firefox', 'edge', 'ie'] : []],
];

const run = async () => {
  const testcafe = await createTestCafe();
  const runner = testcafe.createRunner();

  const failedCount = await runner
    .src(['tests/mockedCurrConversion.tests.ts'])
    .browsers(browsers)
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

  console.log(`Tests failed: ${failedCount}`);
  testcafe.close();
  if (failedCount !== 0) {
    process.exit(1);
  }
};

run();
