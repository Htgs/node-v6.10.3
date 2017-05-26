const assert = require('assert')

// const str = 'test'
// assert(str)

// const obj1 = {
//   a : {
//     b : 1
//   }
// };
// const obj2 = {
//   a : {
//     b : 2
//   }
// };
// const obj3 = {
//   a : {
//     b : 1
//   }
// };
// const obj4 = Object.create(obj1);
// assert.deepEqual(obj1, obj1);
// assert.deepEqual(obj1, obj2);
// assert.deepEqual(obj1, obj3);
// assert.deepEqual(obj1, obj4);

// assert.notDeepEqual(obj1, obj1);
// assert.notDeepEqual(obj1, obj2);
// assert.notDeepEqual(obj1, obj3);
// assert.notDeepEqual(obj1, obj4);

// assert.deepEqual({a:1}, {a:'1'});
// assert.deepStrictEqual({a:1}, {a:'1'});

// assert.notDeepEqual({a:1}, {a:'1'});
// assert.notDeepStrictEqual({a:1}, {a:'1'});


// assert.doesNotThrow(
//   () => {
//     throw new TypeError('错误');
//   },
//   TypeError,
//   '抛出错误'
// );

assert.equal(1, '1');
// 通过，1 == '1'
assert.equal(1, 2);


assert.notEqual(1, 1);
// 抛出 AssertionError: 1 != 1

assert.notEqual(1, '1');
// 抛出 AssertionError: 1 != '1'

assert.fail(1, 2, undefined, '>');
// 抛出 AssertionError: 1 > 2

assert.fail(1, 2, '错误信息', '>');
// 抛出 AssertionError: 错误信息

assert.ifError('error');

assert.notStrictEqual(1, 2);
// 通过

assert.notStrictEqual(1, 1);
// 抛出 AssertionError: 1 !== 1

assert.notStrictEqual(1, '1');
// 通过

assert.ok(true);
// 通过
assert.ok(1);
// 通过
assert.ok(false);
// 抛出 "AssertionError: false == true"
assert.ok(0);
// 抛出 "AssertionError: 0 == true"
assert.ok(false, '不是真值');
// 抛出 "AssertionError: 不是真值

assert.strictEqual(1, 2);
// 抛出 AssertionError: 1 === 2

assert.strictEqual(1, 1);
// 通过

assert.strictEqual(1, '1');
// 抛出 AssertionError: 1 === '1'

assert.throws(
  () => {
    throw new Error('错误信息');
  },
  function(err) {
    if ( (err instanceof Error) && /错误/.test(err) ) {
      return true;
    }
  },
  '不是期望的错误'
);
