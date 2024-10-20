import { test } from 'node:test';
import { strictEqual } from 'assert';
import { add, multiply } from './index';

test('add function', (t) => {
  strictEqual(add(1, 2), 3, '1 + 2 should equal 3');
  strictEqual(add(-1, -1), -2, '-1 + -1 should equal -2');
  strictEqual(add(0, 0), 0, '0 + 0 should equal 0');
});

test('multiply function', (t) => {
  strictEqual(multiply(2, 3), 6, '2 * 3 should equal 6');
  strictEqual(multiply(-1, 5), -5, '-1 * 5 should equal -5');
  strictEqual(multiply(0, 10), 0, '0 * 10 should equal 0');
});
