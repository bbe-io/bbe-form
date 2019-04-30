export default {
  name: 'bbe-renderless',
  template: `
        <div :class="wrapperClass">
            <slot :value="value" :change="change">
            
            </slot>
            <small :class="errorClass"
                   v-if="form.errors.has(name)"
                   v-text="form.errors.get(name)"
            ></small>
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
    },
    hasChecked() {
      return this.type === 'checkbox'
    }
  },
  methods: {
    change(event) {
      this.$emit('input', this.hasChecked ? event.target.checked : event.target.value)
    }
  },
  mounted() {

  }
}
