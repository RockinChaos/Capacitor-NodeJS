import { renameSync, readdirSync } from 'fs';

const file = readdirSync('..').find((file) => file.startsWith('types-bridge-') && file.endsWith('.tgz'));
if (!file) throw new Error('No types-bridge-*.tgz found');
renameSync(`../${file}`, '../bridge.tgz');
