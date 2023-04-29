import { danger, warn } from 'danger';

const hasModifiedPackages = danger.git.fileMatch('package.json').modified;
if (hasModifiedPackages) {
  warn('NPM packages have been changed');
}
