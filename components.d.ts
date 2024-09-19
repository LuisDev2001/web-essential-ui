import {
  EButtonElement,
  EAlertElement,
  ERadioElement,
  ECheckboxElement,
  EInputElement,
  ESelectElement,
  ETableElement
} from '@/index'

declare module 'vue' {
  export interface GlobalComponents {
    EButtonElement: typeof EButtonElement,
    EAlertElement: typeof EAlertElement,
    ERadioElement: typeof ERadioElement,
    ECheckboxElement: typeof ECheckboxElement,
    EInputElement: typeof EInputElement,
    ESelectElement: typeof ESelectElement,
    ETableElement: typeof ETableElement
  }
}