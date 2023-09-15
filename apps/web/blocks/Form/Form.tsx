import { FormBlock } from 'types'
import { Container } from '@/components/Container'
import { Form as FormComponent } from '@/components/Form'

export type FormProps = FormBlock

export function Form({}: FormProps) {
  return (
    <Container>
      <FormComponent />
    </Container>
  )
}
