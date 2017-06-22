var test = require("tape");
var Complex = require("../lib/complex.js");

test('Complex Constructor should exist', (t) => {
    var c1 = new Complex(2,3);
    t.ok(Complex, 'Complex module should exist');
    t.equals(typeof c1, 'object', 'c1 should be an object');
    t.ok(c1 instanceof Complex, 'c1 should be an instance of object');
    t.end();
});

test('Complex instance should return real part', (t) => {
    var c1 = new Complex(2,3);
    t.equals(typeof c1.getReal, 'function', 'c1.getReal should be a function');
    t.equals(c1.getReal(), 2, 'Should return real part');
    t.end();
});

test('Complex instance should return imaginary part', (t) => {
    var c1 = new Complex(2,3);
    t.equals(typeof c1.getImaginary, 'function', 'c1.getImaginary should be a function');
    t.equals(c1.getImaginary(), 3, 'Should return imaginary part');
    t.end();
});

test('Complex instance should return real and imaginary', (t) => {
    var c1 = new Complex(2,3);
    var expectedObj = {
        real: 2,
        imag: 3
    };
    t.equals(typeof c1.get, 'function', 'c1.get should be a function');
    t.deepEqual(c1.get(), expectedObj, 'Should return a complex object');
    t.end();
});

test('Complex instance should return true when real part is even', (t) => {
  var c1 = new Complex(2,3);
  t.equals(typeof c1.getRealParity, 'function', 'c1.getRealParity should be a function');
  t.equals(c1.getRealParity(), true, 'c1.getRealParity should be true');
  t.end();
});

test('Complex instance should return false when real part is odd', (t) => {
  var c1 = new Complex(1,3);
  t.equals(c1.getRealParity(), false, 'c1.getRealParity should be false');
  t.end();
});