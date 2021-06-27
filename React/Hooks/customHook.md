### Custom hook

custom hook outsource stateful logic into re-useable functions .

### introduction 

There is a forward logic which increase one at every single second .


````
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
````

and there is another logic which decrease one in every second. 

````
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

````

so we want to find a way to extract the same logic to a component ,which is called custom hook .

custom hook must start with 'use', as it is the rule of reactJs itself .

as it is a function , it can receive parameters and return a value . Here , we use counter in the Forward counter component and Backward counter component , so we will return counter .

````
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
````







