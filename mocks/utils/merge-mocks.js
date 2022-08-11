const fs = require('fs');
const files = process.argv.slice(2);

function mergeJsonObjects() {
  const requests = files.map((file) => require(`../${file}`));
  return requests.reduce(
    (previousValue, currentValue) => Object.assign(previousValue, currentValue),
    {}
  );
}

try {
  const mergedObject = mergeJsonObjects();
  fs.writeFile(
    'mocks/merged/mocks.json',
    JSON.stringify(mergedObject),
    function (err) {
      console.error(err);
    }
  );
  console.info("Successfully created mocks.json file at 'merged/mocks.json'");
} catch (err) {
  console.error('Something went wrong...');
  console.error(err);
}
