function Complex(real, imag) {
    this.real = real;
    this.imag = imag;
}

Complex.prototype.getReal = function () {
    return this.real;
};

Complex.prototype.getImaginary = function () {
    return this.imag;
};

Complex.prototype.get = function () {
    return {
        real: this.real,
        imag: this.imag
    };
};

Complex.prototype.getRealParity = function() {
    if (this.real % 2 === 0) {
      return true;
    }

    return false;
}

module.exports = Complex;