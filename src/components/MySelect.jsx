import Select from 'react-select';
import styled from "styled-components";

export const MySelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-ui-base)',
            color: 'var(--colors-text)',
            borderRadius: 'var(--radius)',
            padding: '0.25rem',
            border: 'none',
            boxShadow: 'var(--shadow)',
            height: '50px',
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: 'var(--colors-text)',
            background: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
        }),
    },
})`
  width: 200px;
  border-radius: var(--radius);
  font-family: var(--family);
  border: none;
  
  & > * {
    box-shadow: var(--shadow);
  }
  
  & input {
    padding-left: 0.5rem;
  }
  
  & * {
    color: var(--colors-text) !important;
  }
  
  & div[id] {
    background-color: var(--colors-ui-base);
  }
`;
