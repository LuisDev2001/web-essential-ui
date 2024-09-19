import { defineCustomElement } from 'vue'

import '@/assets/main.css'
import EButton from '@/components/EButton.ce.vue'
import EAlert from '@/components/EAlert.ce.vue'
import ERadio from '@/components/ERadio.ce.vue'
import ECheckbox from '@/components/ECheckbox.ce.vue'
import EIcon from '@/components/EIcon.ce.vue'
import EInput from '@/components/EInput.ce.vue'
import ESelect from '@/components/ESelect.ce.vue'
import ETable from '@/components/ETable.ce.vue'

export const EButtonElement = defineCustomElement(EButton, {
  shadowRoot: false
})
export const EAlertElement = defineCustomElement(EAlert, {
  shadowRoot: false
})
export const ERadioElement = defineCustomElement(ERadio, {
  shadowRoot: false
})
export const ECheckboxElement = defineCustomElement(ECheckbox, {
  shadowRoot: false
})
export const EInputElement = defineCustomElement(EInput, {
  shadowRoot: false
})
export const ESelectElement = defineCustomElement(ESelect, {
  shadowRoot: false
})
export const ETableElement = defineCustomElement(ETable, {
  shadowRoot: false
})
export const EIconElement = defineCustomElement(EIcon, {
  shadowRoot: false
})

export const registerEssentialComponents = () => {
  customElements.define('e-button', EButtonElement)
  customElements.define('e-alert', EAlertElement)
  customElements.define('e-radio', ERadioElement)
  customElements.define('e-checkbox', ECheckboxElement)
  customElements.define('e-input', EInputElement)
  customElements.define('e-select', ESelectElement)
  customElements.define('e-table', ETableElement)
  customElements.define('e-icon', EIconElement)
}
