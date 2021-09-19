import styled from '@emotion/styled';

export const Searchform = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: 3px;
  overflow: hidden;
`;
export const Searchbtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  outline: none;
`;
export const Searchlabel = styled.span`
  padding: 0;
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
`;
export const Searchinput = styled.input`
  padding: 0 4px;
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
export const Searchbarh = styled.header`
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  position: sticky;
  min-height: 64px;
  color: white;
  background-color: blue;
`;