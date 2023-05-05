import { danger, markdown, schedule, warn } from 'danger';
import depcheck from 'depcheck';

// look if there are changes in packages
const packageChanged = danger.git.modified_files.includes('package.json');
const lockfileChanged = danger.git.modified_files.includes('package-lock.json');

if (packageChanged && !lockfileChanged) {
  const message = 'Changes were made to package.json, but not to package-lock.json';
  const idea = 'Perhaps you need to run `npm install`?';
  warn(`${message} - <i>${idea}</i>`);
}

// look if there tests
const hasAppChanges = danger.git.modified_files.length > 0;
const testChanges = danger.git.modified_files.filter((filepath) => filepath.includes('test'));
const hasTestChanges = testChanges.length > 0;

if (hasAppChanges && !hasTestChanges) {
  warn("There are library changes, but not tests. That's OK as long as you're refactoring existing code");
}

// look for dependencies
console.log(depcheck);

const promise = depcheck('.', { ignoreMatches: ['src'] }).then((unused) => {
  markdown(`
    > unused dependencies: \n
    - ${unused.dependencies.join('\n')}
    > unused dev dependencies: \n
    - ${unused.devDependencies.join('\n')}
    > missing dependencies: \n
    - ${Object.keys(unused.missing).join('\n')}
  `);
});

schedule(promise);
