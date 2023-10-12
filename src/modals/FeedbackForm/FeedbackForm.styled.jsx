import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ReactComponent as Pencil } from '../../assets/icons/pencil.svg';
import { ReactComponent as Trash } from '../../assets/icons/trash.svg';


const StyledRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  gap: 10px;
  margin-bottom: 10px;
`;



const FeedbackFormWrapper = styled.div`
  font-family: Inter, sans-serif;

 

  label, span {
    font-size: 12px;
    font-family: Inter, sans-serif;
    color: ${props => props.theme.userNameTextColor}; 
    font-weight: 500;
     
  }

  textarea::placeholder {
    color: ${props => props.theme.userNameTextColor};  
    font-weight: 600;
  }
  
  textarea {
    margin-top: 10px;
    margin-bottom: 15px;
    font: Inter;
    width: 295px;
    height: 130px;
    border: 1px solid ${props => props.theme.userInputBorderColor};  
    resize: vertical;
    background-color: ${props => props.theme.modalInputBackground};  
    resize: none;
    padding-top: 10px;
    padding-left: 15px;
    font-size: 14px;
    color: ${props => props.theme.userNameTextColor}; 
    font-weight: 600;
    outline: none;

    @media (min-width: 767px) {
      width: 404px;
    }
  }

  button.BtnSave {
    min-width: 144px;
    height: 42px;
    padding: 15px auto; 
    border-radius: 8px;
    background-color: ${props => props.theme.btnBackgroundColor};   
    color: ${props => props.theme.btnTextColor};   
    border: none; 
    cursor: pointer;
    font: Inter;
    font-size: 14px;
    font-weight: 600;

    @media (min-width: 767px) {
      min-width: 198px;
    }
  }

  button.BtnCancel {
    min-width: 144px;
    height: 42px;
    padding: 15px auto; 
    border-radius: 8px;
    background-color: ${props => props.theme.btnBackgroundColor};   
    color: ${props => props.theme.btnTextColor};   
    border: none; 
    cursor: pointer;
    font: Inter;
    font-size: 14px;
    font-weight: 600;

    @media (min-width: 767px) {
      min-width: 198px;
    }
  }

  button.BtnCancel {
      background-color: ${props => props.theme.modalCancelBtnFeedbackBackground}; 
      color: ${props => props.theme.userNameTextColor}; 
  }

  button.fakeIcon,
  button.fakeDelIcon {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    padding: 0;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center; 
    align-items: center; 
  }


  button.fakeIcon {
    background-color: ${props => props.theme.modalEditIconBackground};
  }

  button.fakeDelIcon {
    background-color: ${props => props.theme.modalDeleteIconBackground};
  }


  button.fakeIcon:hover,
  button.fakeIcon:focus,
  button.fakeIcon:active {
  background-color: ${props => props.theme.modalEditActiveIconBackground};
}

  button.fakeDelIcon:hover,
  button.fakeDelIcon:focus,
  button.fakeDelIcon:active {
    background-color: ${props => props.theme.modalDeleteIconColor};
  }
  

`; 

const styledIconPen = ({ theme }) => css`
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  stroke: ${theme.modalEditIconColor};
  width: 16px;
  height: 16px;

  button.fakeIcon:hover &,
  button.fakeIcon:focus &,
  button.fakeIcon:active & {
    stroke: ${theme.modalEditActiveIconColor};
  }
`;
const styledIconDel = ({ theme }) => css`
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  stroke: ${theme.modalDeleteIconColor};
  width: 16px;
  height: 16px;

  button.fakeDelIcon:hover &,
  button.fakeDelIcon:focus &,
  button.fakeDelIcon:active & {
    stroke: ${theme.modalEditActiveIconColor};
  }
`;

export const TrashIcon = styled(Trash)`
    ${styledIconDel}
`;

export const PencilIcon = styled(Pencil)`
    ${styledIconPen}
`;

const LoaderCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 30vh; 
`;

export { FeedbackFormWrapper, StyledRatingContainer, LoaderCont };
