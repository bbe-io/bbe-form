import _Object$keys from 'babel-runtime/core-js/object/keys';
import _Promise from 'babel-runtime/core-js/promise';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import axios from 'axios';

var inputText = {
  name: 'bbe-text-input',
  template: '\n        <div :class="wrapperClass">\n            <span v-if="header" v-html="header"></span>\n            <label :class="labelClass" :for="id">{{label}}</label>\n            <input\n                ref="input"\n                :disabled="disabled"\n                :id="id" :name="name"\n                :value="value" :type="type"\n                @input="change"\n                :class="inputClass" :placeholder="placeholder"/>\n            <small :class="errorClass"\n                   v-if="form.errors.has(name)"\n                   v-text="form.errors.get(name)"\n            ></small>\n            <span v-if="footer" v-html="footer"></span>\n        </div>\n    ',

  props: {
    form: {
      type: Object
    },
    type: {
      type: String,
      default: 'text'
    },
    labelClass: {
      type: String,
      default: ''
    },
    label: {
      type: String
    },
    inputClass: {
      type: String,
      default: 'form-control'
    },
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: function _default() {
        return this.id;
      }
    },
    value: {
      type: String,
      required: true
    },
    errorClass: {
      type: String,
      default: 'form-text text-warning'
    },
    placeholder: {
      type: String,
      default: function _default() {
        return this.label;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    header: {
      type: String
    },
    footer: {
      type: String
    }
  },
  computed: {
    hasError: function hasError() {
      return this.form.errors.has(this.name);
    },
    errorMessage: function errorMessage() {
      return this.form.errors.get(this.name);
    },
    wrapperClass: function wrapperClass() {
      if (!this.$el) {
        return 'form-group';
      }
      return this.$el.classList ? '' : 'form-group';
    }
  },
  methods: {
    change: function change() {
      this.$emit('input', this.$refs.input.value);
    }
  },
  mounted: function mounted() {}
};

var select = {
  name: 'bbe-text-input',
  template: '\n    <div :class="wrapperClass">\n        <label :for="id">{{label}}</label>\n            <select\n                ref="select"\n                :value="value"\n                :id="id" :name="name"\n                @change="change"\n                :class="inputClass"\n            >\n              <option\n                  :value="c[optionValueKey]"\n                  v-for="c in options">\n                  {{ c[optionLabelKey]}}\n              </option>\n            </select>\n            <small :class="errorClass"\n              v-if="hasError"\n                   v-text="errorMessage"\n            ></small>\n        </div>   \n  ',
  props: {
    form: {
      type: Object
    },
    options: {
      type: Array,
      required: true
    },
    optionValueKey: {
      type: String,
      default: 'value'
    },
    optionLabelKey: {
      type: String,
      default: 'label'
    },
    labelClass: {
      type: String,
      default: ''
    },
    label: {
      type: String
    },
    inputClass: {
      type: String,
      default: 'form-control'
    },
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: function _default() {
        return this.id;
      }
    },
    value: {
      type: String,
      required: true
    },
    errorClass: {
      type: String,
      default: 'form-text text-warning'
    },
    placeholder: {
      type: String,
      default: function _default() {
        return this.label;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasError: function hasError() {
      return this.form.errors.has(this.name);
    },
    errorMessage: function errorMessage() {
      return this.form.errors.get(this.name);
    },
    wrapperClass: function wrapperClass() {
      if (!this.$el) {
        return 'form-group';
      }
      return this.$el.classList ? '' : 'form-group';
    }
  },
  methods: {
    change: function change(event) {
      this.$emit('input', event.target.value);
    }
  },
  mounted: function mounted() {}
};

var renderless = {
  name: 'bbe-renderless',
  template: '\n        <div :class="wrapperClass">\n            <slot :value="value" :change="change">\n            \n            </slot>\n            <small :class="errorClass"\n                   v-if="form.errors.has(name)"\n                   v-text="form.errors.get(name)"\n            ></small>\n        </div>\n    ',

  props: {
    form: {
      type: Object
    },
    type: {
      type: String,
      default: 'text'
    },
    labelClass: {
      type: String,
      default: ''
    },
    label: {
      type: String
    },
    inputClass: {
      type: String,
      default: 'form-control'
    },
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: function _default() {
        return this.id;
      }
    },
    value: {
      required: true
    },
    errorClass: {
      type: String,
      default: 'form-text text-warning'
    },
    placeholder: {
      type: String,
      default: function _default() {
        return this.label;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasError: function hasError() {
      return this.form.errors.has(this.name);
    },
    errorMessage: function errorMessage() {
      return this.form.errors.get(this.name);
    },
    wrapperClass: function wrapperClass() {
      if (!this.$el) {
        return 'form-group';
      }
      return this.$el.classList ? '' : 'form-group';
    },
    hasChecked: function hasChecked() {
      return this.type === 'checkbox';
    }
  },
  methods: {
    change: function change(event) {
      this.$emit('input', this.hasChecked ? event.target.checked : event.target.value);
    }
  },
  mounted: function mounted() {}
};

var Form = function () {
  function Form(data) {
    _classCallCheck(this, Form);

    this.originalData = data;

    for (var field in data) {
      this[field] = data[field];
    }
    this.errors = new Errors();
  }

  _createClass(Form, [{
    key: 'data',
    value: function data() {
      var data = {};

      for (var field in this.originalData) {
        data[field] = this[field];
      }

      return data;
    }
  }, {
    key: 'reset',
    value: function reset() {
      for (var field in this.originalData) {
        this[field] = '';
      }
    }
  }, {
    key: 'submit',
    value: function submit(requestType, url) {
      var _this = this;

      return new _Promise(function (resolve, reject) {
        axios[requestType](url, _this.data()).then(function (response) {
          _this.onSuccess.bind(_this);
          resolve(response.data);
        }).catch(function (error) {
          _this.onFail(error);
          reject(error.response.data);
        });
      });
    }
  }, {
    key: 'onSuccess',
    value: function onSuccess(response) {
      this.reset();
    }
  }, {
    key: 'onFail',
    value: function onFail(error) {
      this.errors.record(error.response.data);
    }
  }]);

  return Form;
}();



var Errors = function () {
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = {};
    this.message = {};
  }

  _createClass(Errors, [{
    key: 'any',
    value: function any() {
      return _Object$keys(this.errors).length > 0;
    }
  }, {
    key: 'has',
    value: function has(field) {
      return this.errors.hasOwnProperty(field);
    }
  }, {
    key: 'get',
    value: function get(field) {
      if (!this.errors[field]) {
        return;
      }
      return this.errors[field][0];
    }
  }, {
    key: 'clear',
    value: function clear(field) {
      if (!field) {
        this.errors = {};
      } else {
        delete this.errors[field];
      }
    }
  }, {
    key: 'record',
    value: function record(errors) {
      if (errors.errors) {
        this.errors = errors.errors;
      }
      if (errors.message) {
        this.message = errors.message;
      }
    }
  }]);

  return Errors;
}();

export { Form, Errors, inputText as textInput, select, renderless };export default Form;
//# sourceMappingURL=index.es.js.map
