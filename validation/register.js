const Validator = require('validator');

const isEmpty = require('./isEmpty');


module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.confPassword = !isEmpty(data.confPassword) ? data.confPassword : '';


  if (!Validator.isLength(data.name, {
      min: 2,
      max: 30
    })) {
    errors.name = 'name must be between two and thirty characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password required';
  }
  if (!Validator.isLength(data.password, {
      min: 6,
      max: 30
    })) {
    errors.password = 'Password must be at least six characters.';
  }

  if (Validator.isEmpty(data.confPassword)) {
    errors.confPassword = 'Password Confirmation required.'
  }
  if (!Validator.equals(data.password, data.confPassword)) {
    errors.confPassword = 'Passwords must match'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}