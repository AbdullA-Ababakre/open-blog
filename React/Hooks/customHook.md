### Custom hook

custom hook outsource stateful logic into re-useable functions .

### Why we need custom hooks

Because we can only use hooks in the function componet and custom Hooks(which will be covered here) . As you can see from the defenition , custom hooks outsources stateful logic into re-useable functions ,you might wonder it is the normal function does (which outsource the re-useable logic) ,but React state and React hooks only be availabe in custom hooks ,this is why we need custom hooks.

### introduction

There is a forward logic which increase one at every single second .

```
import { useState, useEffect } from 'react';

import Card from './Card';

const ForwardCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
```

and there is another logic which decrease one in every second.

```
import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from '../hooks/use-counter'

const BackwardCounter = () => {
  // const counter = useCounter();


  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;

```

so we want to find a way to extract the same logic to a component ,which is called custom hook .

custom hook must start with 'use', as it is the rule of reactJs itself .

as it is a function , it can receive parameters and return a value . Here , we use counter in the Forward counter component and Backward counter component , so we will return counter ,and we just extracted the re-useable logic out to the custom hook.

```
import { useState, useEffect } from 'react'

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return counter;
}

export default useCounter;
```

### configure the custom hook

As we saw ,we will use the useCounter in two functions , one is ForwardCounter ,the other is BackwardCounter . So , we have to give a param to distinct those two functions. Let's just give a forward boolean param to it . If forward is true ,we can just add one , or just minus one

```
const val = () => {
  const useCounter = (forward) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (forward === true) {
          setCounter((prevCounter) => prevCounter + 1);
        } else {
          setCounter((prevCounter) => prevCounter - 1);
        }
      }, 1000);
    }, []);
  };
};
```
