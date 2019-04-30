import axios from 'axios';

class Form {
  constructor(data) {
    this.originalData = data;

    for (let field in data) {
      this[field] = data[field];
    }
    this.errors = new Errors();
  }

  data() {
    let data = {};

    for (let field in this.originalData) {
      data[field] = this[field];
    }

    return data;
  }

  reset() {
    for (let field in this.originalData) {
      this[field] = '';
    }
  }

  submit(requestType, url) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.data())
        .then(response => {
          this.onSuccess.bind(this);
          resolve(response.data);
        })
        .catch(error => {
          this.onFail(error);
          reject(error.response.data);
        })
    })

  }

  onSuccess(response) {
    this.reset();
  }

  onFail(error) {
    this.errors.record(error.response.data)
  }
};

class Errors {
  constructor() {
    this.errors = {};
    this.message = {};
  }

  any() {
    return Object.keys(this.errors).length > 0
  }

  has(field) {
    return this.errors.hasOwnProperty(field);
  }

  get(field) {
    if (!this.errors[field]) {
      return;
    }
    return this.errors[field][0];
  }

  clear(field) {
    if (!field) {
      this.errors = {};
    } else {
      delete this.errors[field];
    }
  }

  record(errors) {
    if (errors.errors) {
      this.errors = errors.errors;
    }
    if (errors.message) {
      this.message = errors.message;
    }
  }
};

import textInput from './inputText';
import select from './select';
import renderless from './renderless';

export {
  Form,
  Errors,
  textInput,
  select,
  renderless
};

export default Form;
