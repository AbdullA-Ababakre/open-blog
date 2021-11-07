## Components

````
import { FC } from 'react'
const HelloWorld: FC = () => "Hello, World!"
export default HelloWorld
````

```
import React from 'react'

// Written as a function declaration
function Heading(): React.ReactNode {
  return <h1>My Website Heading</h1>
}

// Written as a function expression
const OtherHeading: React.FC = () => <h1>My Website Heading</h1>
```

In the first example, we’re writing our function as a function declaration. We annotate the return type with React.Node because that’s what it returns. In contrast, the second example uses a function expression. Because the second instance returns a function, instead of a value or expression, we annotate the function type with React.FC for React “Function Component”.


2.props

```
import { FC } from 'react'

const List: FC<{ data: string[] }> = ({ data }) => (
  <ul>
    {data.map(item => <li>{item}</li>)}
  </ul>
)

export default List
```

````
import React from 'react'

interface Props {
  name: string;
  color: string;
}

type OtherProps = {
  name: string;
  color: string;
}

// Notice here we're using the function declaration with the interface Props
function Heading({ name, color }: Props): React.ReactNode {
  return <h1>My Website Heading</h1>
}

// Notice here we're using the function expression with the type OtherProps
const OtherHeading: React.FC<OtherProps> = ({ name, color }) =>
  <h1>My Website Heading</h1>
````


## Hooks

````
// `value` is inferred as a string
// `setValue` is inferred as (newValue: string) => void
const [value, setValue] = useState('')
````

````
type User = {
  email: string;
  id: string;
}

// the generic is the < >
// the union is the User | null
// together, TypeScript knows, "Ah, user can be User or null".
const [user, setUser] = useState<User | null>(null);
````

## Common Use Cases

### Handling Form Events

````
import React from 'react'

const MyInput = () => {
  const [value, setValue] = React.useState('')

  // The event type is a "ChangeEvent"
  // We pass in "HTMLInputElement" to the input
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  return <input value={value} onChange={onChange} id="input-example"/>
}
````


### 文件后缀

普通组件文件后缀为.tsx，公共方法文件后缀为.ts





## Reference

https://www.sitepoint.com/react-with-typescript-best-practices/


https://github.com/typescript-cheatsheets/react
