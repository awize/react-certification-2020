import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'ui'
import { Loupe } from 'ui/Icons'

const SearchBar = ({ defaultValue, onChange, value: valueProp, onSearch }) => {
  const [valueState, setValueState] = useState('')
  const isControlled = valueProp !== undefined

  const value = isControlled ? valueProp : valueState

  const handleChange = (e) => {
    if (isControlled) {
      onChange(e)
    } else {
      setValueState(e.target.value)
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(value)
    }
  }

  return (
    <Flex
      container
      css={`
        width: 400px;
        max-width: 100%;
        border-radius: 25px;
        background-color: #073437;
        box-shadow: 0px 4px 8px rgba(58, 58, 68, 0.16),
          0px 8px 16px rgba(90, 91, 106, 0.16);
        overflow: hidden;
      `}
    >
      <Flex col="auto">
        <input
          css={`
            width: 100%;
            height: 100%;
            border: 0;
            box-sizing: border-box;
            outline: none;
            padding: 0 10px;
          `}
          type="text"
          onChange={handleChange}
          value={value}
          defaultValue={defaultValue}
          onKeyPress={handleKeyPress}
        />
      </Flex>
      <button
        type="button"
        css={`
          height: 100%;
          width: 50px;
          border: 0;
          padding: 10px;
          background-color: ${({ theme }) => theme.palette.primary.main};
          cursor: pointer;
        `}
        onClick={() => onSearch(value)}
      >
        <Loupe
          css={`
            color: ${({ theme }) => theme.palette.primary.mainContrast};
          `}
        />
      </button>
    </Flex>
  )
}
SearchBar.defaultProps = {
  defaultValue: undefined,
  onChange: () => {},
  value: undefined
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
}
export default SearchBar
