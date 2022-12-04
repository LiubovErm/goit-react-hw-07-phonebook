import styled from 'styled-components';

export const ContactItem = styled.li`
  margin-bottom: ${props => props.theme.space[2]}px;
  display: flex;
  justify-content: space-between;
  align-items:center;
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
`;

export const Name = styled.span`
 font-weight: ${props => props.theme.fontWeights.bold};
`;

export const Number = styled.span`
 margin-left: ${props => props.theme.space[4]}px;
`;

export const ButtonDelete = styled.button`
  cursor: pointer;  
  width:30px;
  height:30px;
  border-radius: ${props => props.theme.radii.round};
  border: none;
  padding: ${props => props.theme.space[3]}px;
  background-color:${props => props.theme.colors.red};
  color:${props => props.theme.colors.white};
  :hover,
  :focus {
    box-shadow: ${props => props.theme.shadows.normal};
  }
`;

export const ButtonEdit = styled.button`
  cursor: pointer;  
  width:30px;
  height:30px;
  border-radius: ${props => props.theme.radii.round};
  border: none;
  margin-left:  ${props => props.theme.space[3]}px;
  padding: ${props => props.theme.space[3]}px;
  background-color:${props => props.theme.colors.orange};
  color:${props => props.theme.colors.white};
  :hover,
  :focus {
    box-shadow: ${props => props.theme.shadows.normal};
  }
`;
