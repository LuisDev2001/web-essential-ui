import { defineCustomElement } from 'vue'
import EButton from '@/components/EButton.ce.vue'
import EAlert from '@/components/EAlert.ce.vue'
import ERadio from '@/components/ERadio.ce.vue'
import ECheckbox from '@/components/ECheckbox.ce.vue'
import EInput from '@/components/EInput.ce.vue'
import ESelect from '@/components/ESelect.ce.vue'
import ETable from '@/components/ETable.ce.vue'

const EButtonElement = defineCustomElement(EButton)
const EAlertElement = defineCustomElement(EAlert)
const ERadioElement = defineCustomElement(ERadio)
const ECheckboxElement = defineCustomElement(ECheckbox)
const EInputElement = defineCustomElement(EInput)
const ESelectElement = defineCustomElement(ESelect)
const ETableElement = defineCustomElement(ETable)

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