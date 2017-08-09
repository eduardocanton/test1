var chai = require('chai');
var expect = chai.expect;
var mocha= require('mocha');

describe('Title of the Global Test cases: ',function(){
	it('Title Test cases 1', function(){
               // test 1
			expect(true).to.be.ok;
			//samples
			//expect(function () {}).to.not.throw();
			//expect({a: 1}).to.not.have.property('b');
			//expect([1, 2]).to.be.an('array').that.does.not.include(3);
			//expect(2).to.equal(2);
			//expect([1, 2, 3]).to.include.ordered.members([1, 2])  .but.not.include.ordered.members([2, 3]);
			//expect('foo').to.be.a('string');
			//more: http://chaijs.com/api/bdd/
	});

  it('Title Test cases 2', function(){
              // test 2
			expect(true).to.be.ok;
	});

});
