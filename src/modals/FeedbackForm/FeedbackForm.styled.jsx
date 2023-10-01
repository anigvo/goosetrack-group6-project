import styled from '@emotion/styled';

const StyledRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  gap: 10px;
  margin-bottom: 10px;
`;



const FeedbackFormWrapper = styled.div`
  font-family: Inter, sans-serif;
  min-width: 295px;
  max-width: 295px;
  min-height: 275px;
  max-height: 275px;
 

  label {
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
    border: 1px solid ${props => props.theme.modalInputBackground};  
    resize: vertical;
    background-color: ${props => props.theme.modalInputBackground};  
    resize: none;
    padding-top: 10px;
    padding-left: 15px;
    font-size: 14px;
    color: ${props => props.theme.userNameTextColor}; 
    font-weight: 600;

    @media (min-width: 767px) {
      width: 404px;
    }
  }

  button {
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

  

`; 

export { FeedbackFormWrapper, StyledRatingContainer };
