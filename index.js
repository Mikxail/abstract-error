var util = require('util');

var AbstractError = function (msg, constr) {
  Error.captureStackTrace(this, constr || this)
  this.message = msg || 'Error'
}
util.inherits(AbstractError, Error)
AbstractError.prototype.name = 'AbstractError';

module.exports = {
	AbstractError: AbstractError,
	create: function (name){
		name = name || "";
		var Err = function(message){
			return AbstractError.super_.call(this, message, this.constructor)
		};
		util.inherits(Err, AbstractError);
		Err.prototype.name = name;
		return Err;
	}
};