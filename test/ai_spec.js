const expect = require('expect.js');
const Ai = require('../src/javascripts/ai');

describe('Our Ai ', () => {
  it('is a function', () => {
    expect(Ai).to.be.a('function');
  });

  it('returns an object', () => {
    const actual = new Ai();
    expect(actual).to.be.an('object');
  });

  describe('instance...', () => {
    let instance;
    beforeEach(() => {
      instance = new Ai();
    });

    afterEach(() => {
      instance = null;
    });
    describe('.board', () => {
      it('should be an array', () => {
        expect(instance.board).to.be.an('array');
      });
    });
  });
});
