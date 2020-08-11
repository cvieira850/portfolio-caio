import styled from 'styled-components';

export const Error = styled.span`
  color: #ff4136;
`;

export const Center = styled.div`
  text-align: left;

  h4 {
    font-weight: normal;
  }
`;

export const InputField = styled.div`
  position: relative;
  margin-bottom: 1rem;
  input {
    width: 100%;
    box-sizing:border-box;
    margin-bottom: 0.5rem;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(108,99,255);
    border-image: initial;
    padding: 0.8rem 1rem;
    border-radius: 7px;
    transition: all 0.3s ease 0s;
    overflow:visible;
    font: inherit;
    margin: 0px;
  }
  textarea {
    width: 100%;
    box-sizing:border-box;
    margin-bottom: 0.5rem;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(108,99,255);
    border-image: initial;
    padding: 0.8rem 1rem;
    border-radius: 7px;
    transition: all 0.3s ease 0s;
    overflow:visible;
    font: inherit;
    margin: 0px;
  }
`;
export const ButtonDiv = styled.div`
  text-align: left;
  box-sizing: inherit;
  display:block;
  button {
    appearance: button;
    cursor: pointer;
    user-select: none;
    color: rgb(255,255,255);
    border-radius: 3px;
    padding: 0.7rem 2.5rem;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    background: rgb(0,31,63);
  }

`

