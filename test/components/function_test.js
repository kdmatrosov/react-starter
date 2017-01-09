import { expect } from '../test_helper';
import {testAction} from '../../src/actions/index';

describe('testAction' , () => {

    it('testAction is working', () => {
        const res = testAction();
        expect(res.payload).to.equal(true);
    });
});
