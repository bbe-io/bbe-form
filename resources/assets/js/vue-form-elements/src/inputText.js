export default {
  name: 'bbe-text-input',
  template: `
        <div :class="wrapperClass">
            <span v-if="header" v-html="header"></span>
            <label :class="labelClass" :for="id">{{label}}</label>
            <input
                ref="input"
                :disabled="disabled"
                :id="id" :name="name"
                :value="value" :type="type"
                @input="change"
                :class="inputClass" :placeholder="placeholder"/>
            <small :class="errorClass"
                   v-if="form.errors.has(name)"
                   v-text="form.errors.get(name)"
            ></small>
            <span v-if="footer" v-html="footer"></span>
        </div>
    `
  ,
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
      default() {
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
      default() {
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
    hasError() {
      return this.form.errors.has(this.name)
    },
    errorMessage() {
      return this.form.errors.get(this.name)
    },
    wrapperClass() {
      if (!this.$el) {
        return 'form-group';
      }
      return this.$el.classList ? '' : 'form-group';
    }
  },
  methods: {
    change() {
      this.$emit('input', this.$refs.input.value)
    }
  },
  mounted() {

  }
}
