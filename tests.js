const expect = chai.expect;

describe('integerToRoman', function() {
  it('should convert 1 to "I"', () => expect(integerToRoman(1)).to.equal('I'));
  it('should convert 3 to "III"', () => expect(integerToRoman(3)).to.equal('III'));
  it('should convert 4 to "IV"', () => expect(integerToRoman(4)).to.equal('IV'));
  it('should convert 9 to "IX"', () => expect(integerToRoman(9)).to.equal('IX'));
  it('should convert 58 to "LVIII"', () => expect(integerToRoman(58)).to.equal('LVIII'));
  it('should convert 99 to "XCIX"', () => expect(integerToRoman(99)).to.equal('XCIX'));
  it('should convert 149 to "CXLIX"', () => expect(integerToRoman(149)).to.equal('CXLIX'));
  it('should convert 400 to "CD"', () => expect(integerToRoman(400)).to.equal('CD'));
  it('should convert 1000 to "M"', () => expect(integerToRoman(1000)).to.equal('M'));
  it('should convert 2000 to "MM"', () => expect(integerToRoman(2000)).to.equal('MM'));
  it('should convert 3999 to "MMMCMXCIX"', () => expect(integerToRoman(3999)).to.equal('MMMCMXCIX'));

  it('should throw error for 0', () => expect(() => integerToRoman(0)).to.throw('The number must be between 1 and 3999.'));
  it('should throw error for 4000', () => expect(() => integerToRoman(4000)).to.throw('The number must be between 1 and 3999.'));
  it('should throw error for -5', () => expect(() => integerToRoman(-5)).to.throw('The number must be between 1 and 3999.'));
});

describe('romanToInteger', function() {
  it('should convert "I" to 1', () => expect(romanToInteger('I')).to.equal(1));
  it('should convert "III" to 3', () => expect(romanToInteger('III')).to.equal(3));
  it('should convert "IX" to 9', () => expect(romanToInteger('IX')).to.equal(9));
  it('should convert "LVIII" to 58', () => expect(romanToInteger('LVIII')).to.equal(58));
  it('should convert "XC" to 90', () => expect(romanToInteger('XC')).to.equal(90));
  it('should convert "CD" to 400', () => expect(romanToInteger('CD')).to.equal(400));
  it('should convert "CM" to 900', () => expect(romanToInteger('CM')).to.equal(900));
  it('should convert "XLV" to 45', () => expect(romanToInteger('XLV')).to.equal(45));
  it('should convert "MCMXCIV" to 1994', () => expect(romanToInteger('MCMXCIV')).to.equal(1994));
  it('should convert "XLII" to 42', () => expect(romanToInteger('XLII')).to.equal(42));
  it('should convert "MMMCMXCIX" to 3999', () => expect(romanToInteger('MMMCMXCIX')).to.equal(3999));
  it('should convert "XII" to 12', () => expect(romanToInteger('XII')).to.equal(12));
  it('should convert lowercase "ix" to 9', () => expect(romanToInteger('ix')).to.equal(9));

  it('should throw error for empty input', () => expect(() => romanToInteger('')).to.throw('Input must be a valid Roman numeral.'));
  it('should throw error for "IIII"', () => expect(() => romanToInteger('IIII')).to.throw('The Roman numeral is not in canonical form.'));
  it('should throw error for "ABC"', () => expect(() => romanToInteger('ABC')).to.throw('The Roman numeral contains invalid characters.'));
  it('should throw error for "XM"', () => expect(() => romanToInteger('XM')).to.throw('The Roman numeral is not in canonical form.'));
  it('should throw error for "IL"', () => expect(() => romanToInteger('IL')).to.throw('The Roman numeral is not in canonical form.'));
  it('should throw error for "VV"', () => expect(() => romanToInteger('VV')).to.throw('The Roman numeral is not in canonical form.'));
  it('should throw error for "MIM"', () => expect(() => romanToInteger('MIM')).to.throw('The Roman numeral is not in canonical form.'));
  it('should throw error for "MXM"', () => expect(() => romanToInteger('MXM')).to.throw('The Roman numeral is not in canonical form.'));
});
