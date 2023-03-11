import {StylesConfig} from 'react-select'

export const customStyles: StylesConfig<Record<string, string>> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#00e676',
    color: '#fff',
    border: 'none'
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#ffffff'
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#ffffff',
    fontSize: '16px'
  }),
  menu: (provided)  => ({
    ...provided,
    backgroundColor: '#424242',
    color: '#fff'
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#00e676' : '#424242',
    color: '#ffffff',
    cursor: 'pointer',
  })
}
