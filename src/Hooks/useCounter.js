import { useState } from 'react';

export const useCounter = (initialValue = 100) => {
  const [count, setCount] = useState(initialValue)

  function Add() {
    setCount(count + 1)
  }

  function Sub() {
    setCount(count - 1)
  }

  return [count, Add, Sub]
}