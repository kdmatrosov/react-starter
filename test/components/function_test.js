import { expect , assert} from '../test_helper';
import {testAction} from '../../src/actions/index';

describe('testAction' , () => {
    const res = testAction();
    it('testAction is expect', () => {
        expect(res.payload).to.equal(true);
    });
    it('testAction is assert', () => {
        assert.equal(res.payload, true);
    });
});
