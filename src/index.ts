import { defineCustomElement } from 'vue'
import EButton from '@/components/EButton.ce.vue'
import EAlert from '@/components/EAlert.ce.vue'
import ERadio from '@/components/ERadio.ce.vue'
import ECheckbox from '@/components/ECheckbox.ce.vue'
import EInput from '@/components/EInput.ce.vue'
import ESelect from '@/components/ESelect.ce.vue'
import ETable from '@/components/ETable.ce.vue'

export const EButtonElement = defineCustomElement(EButton)
export const EAlertElement = defineCustomElement(EAlert)
export const ERadioElement = defineCustomElement(ERadio)
export const ECheckboxElement = defineCustomElement(ECheckbox)
export const EInputElement = defineCustomElement(EInput)
export const ESelectElement = defineCustomElement(ESelect)
export const ETableElement = defineCustomElement(ETable)

const registerEssentialComponents = () => {
  customElements.define('e-button', EButtonElement)
  customElements.define('e-alert', EAlertElement)
  customElements.define('e-radio', ERadioElement)
  customElements.define('e-checkbox', ECheckboxElement)
  customElements.define('e-input', EInputElement)
  customElements.define('e-select', ESelectElement)
  customElements.define('e-table', ETableElement)
}

export default registerEssentialComponents