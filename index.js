import assert from 'assert';

const foo = require('./lib/foo');
import bar from './lib/bar';

describe('ordering', () => {
  it('executed `foo` before `bar`', () => {
    assert(foo.calledBefore(bar));
  });
});
