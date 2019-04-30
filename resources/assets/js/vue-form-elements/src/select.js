export default {
  name: 'bbe-text-input',
  template: `
    <div :class="wrapperClass">
        <label :for="id">{{label}}</label>
            <select
                ref="select"
                :value="value"
                :id="id" :name="name"
                @change="change"
                :class="inputClass"
            >
              <option
                  :value="c[optionValueKey]"
                  v-for="c in options">
                  {{ c[optionLabelKey]}}
              </option>
            </select>
            <small :class="errorClass"
              v-if="hasError"
                   v-text="errorMessage"
            ></small>
        </div>   
  `,
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
    change(event) {
      this.$emit('input',event.target.value)
    }
  },
  mounted() {

  }
}
