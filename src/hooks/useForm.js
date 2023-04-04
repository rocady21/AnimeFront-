import React, { useEffect, useState } from 'react'

export const useForm = (initialForm = {}) => {
    
    const [inputValue, setInputValue] = useState(initialForm);


    const oninputChange = (e) => {
        const target = e.target
        const {name,value} = target
        setInputValue(
            {
              ...inputValue,
              [name] :value
            }
        )

    }

    const setKey = ({key,value}) => {
      setInputValue({
        ...inputValue,
        [key]: value
      })
    }
    
    const onResetForm = () => {
      setInputValue(initialForm)
    }
    
  return {
    ...inputValue,
    inputValue,
    oninputChange,
    onResetForm,
    setKey
  }
}
