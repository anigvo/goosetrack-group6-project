import styled from '@emotion/styled';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';

const TaskFormWrapper = styled.div`
  font-family: Inter, sans-serif;
  background-color: ${props => props.theme.modalBackground}; 
  margin-top: 10px;


  input{
    outline: none;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    label {
      font-size: 12px;
      color: ${props => props.theme.userNameTextColor}; 
      font-weight: 500;
      
    }

    input[type="text"],
    select {
      min-width: 126px;
      min-height: 42px;
      margin-top: 8px;
      padding: 10px;
      border: 1px solid ${props => props.theme.userInputBorderColor}; 
      border-radius: 4px;
      font-size: 14px;
      color: ${props => props.theme.userNameTextColor}; 
      background-color: ${props => props.theme.modalInputBackground};  
      font-weight: 600;
      -webkit-appearance: none; 
      -moz-appearance: none;
      appearance: none;
      background-repeat: no-repeat;
      background-position: right center;
      outline: none;
    }

    input[type="text"] {
      min-width: 267px;

    @media (min-width: 767px) {
      padding-right: 10px;
      min-width: 340px;
      min-height: 46px;
    }}

    select {
      @media (min-width: 767px) {
        min-width: 163px;
        padding: 15px
      }}

    

    button[type="submit"] {
      min-width: 135px;
      height: 42px;
      padding: 15px auto;
      border-radius: 8px;
      background-color: ${props => props.theme.btnBackgroundColor};
      color: ${props => props.theme.modalEditActiveIconColor}; 
      border: none;
      cursor: pointer;
      font-size: 14px;
      margin-top: 10px;
    }


  }

  button[type="button"] {
    min-width: 118px;
    height: 42px;
    padding: 15px auto;
    border-radius: 8px;
    background-color: ${props => props.theme.btnBackgroundColor};
    color: ${props => props.theme.modalEditActiveIconColor}; 
    border: none;
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;

    @media (min-width: 767px) {
      min-width: 144px;
      min-height: 48px;
    }

  }


  button[type="submit"].addBtn {
    @media (min-width: 767px) {
      min-width: 182px;
      min-height: 48px;
    }
  }

  button[type="button"].cancelBtn{
    background-color: ${props => props.theme.modalCancelBtnTaskBackground}; 
    color: #111111; 
    }

  input[type="checkbox"] {
    display: none;
  }
  
  input[type="checkbox"] + span::before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #000; 
    background-color: ${props => props.theme.modalEditActiveIconColor}; 
    margin-right: 10px; 

  }
  input.lowCheck:checked + span::before {
    border: 3px solid #BFDFFF; 
  }
  
  input.midCheck:checked + span::before {
    border: 3px solid #FFDCA0; 
  }
  
  input.highCheck:checked + span::before {
    border: 3px solid #FFA0B3; 
  }
  


  input.lowCheck + span::before {
    border: 2px solid ${props => props.theme.taskLowPriority}; 
    background-color: ${props => props.theme.taskLowPriority}; 
  }
  input.midCheck + span::before {
    border: 2px solid ${props => props.theme.taskMediumPriority}; 
    background-color: ${props => props.theme.taskMediumPriority};  
  }
  input.highCheck + span::before {
    border: 2px solid ${props => props.theme.taskHighPriority};   
    background-color: ${props => props.theme.taskHighPriority}; 
    
  }

  input.lowCheck + span::before,
  input.midCheck + span::before,
  input.highCheck + span::before { 
  content: "";
  display: inline-block;
  width: 10px; 
  height: 10px; 
  border-radius: 50%;
  margin-right: 5px; 
  font-weight:600;
  cursor: pointer;


}

span.Check {
  font-size: 12px;
  @media (min-width: 767px) {
    font-size: 14px;
  }
}


span.button-content {
  display: flex;
  align-items: center; 
  justify-content: center;
  gap: 4px;
  }




`;

const TimeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

`;


export const AddIcon = styled(Plus)`
stroke: ${props => props.theme.btnTextColor};
width: 20px;
height: 20px;
`;
const LoaderCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 20vh; 
`;

export { TaskFormWrapper, TimeDiv, LoaderCont };