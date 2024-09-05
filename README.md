### Install

    yarn add --dev @tinychange/chakra-hook-form @tinychange/chakra-datepicker react-select react-datepicker

```javascript
// Inject style for Datepicker
import { chakraDatePickerStyle } from '@tinychange/chakra-datepicker'

export const styles = {
  global: {
    ...chakraDatePickerStyle,
  },
}
```

### Usage

    import { Form, Input } from '@tinychange/chakra-hook-form'


    const { register } = useForm()

    <Form>
    	<Input label="name" inputProps={register('name')} />
    	// ...
    </Form>
