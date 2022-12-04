import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyleUpdateForm = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 370px;
  border-radius: ${props => props.theme.radii.normal};
  padding: ${props => props.theme.space[4]}px;
  background-color: #C55F05;
`;

export const Label = styled.label`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.s};
`;

export const Input = styled(Field)`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top:${props => props.theme.space[2]}px;
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.white};
`;

export const CloseButton = styled.button`
  cursor: pointer;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: ${props => props.theme.fontSizes.xs};
  background-color: ${props => props.theme.colors.orange};
  border-radius: ${props => props.theme.radii.round};
  padding: ${props => props.theme.space[2]}px;
  border:none;
  :hover,
  :focus {
    box-shadow: ${props => props.theme.shadows.normal};
  }
`;

export const EditButton = styled.button`
  cursor: pointer;  
  font-size: 12px;
  border-radius: ${props => props.theme.radii.normal};
  border: none;
  margin-top:${props => props.theme.space[3]}px;
  padding: ${props => props.theme.space[3]}px;
  background-color:${props => props.theme.colors.green};
  color:${props => props.theme.colors.white};
  :hover,
  :focus {
    box-shadow: ${props => props.theme.shadows.normal};
  }
`;