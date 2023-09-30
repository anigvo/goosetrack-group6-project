// кольори сторінки юзера
 //  userAvatarBackground: '#FFFFFF',
//   userAvatarBorder: '#3E85F3',
//   userAvatarInsideBackground: '#F8F8F8',
//   userNameTextColor: '#343434',
//   userInputLabelColor: '#111111',
//   userInputBorderColor: 'rgba(17, 17, 17, 0.15)',
//   userInputTextColor: '#111111',
//   userFillCollor: rgba(62, 133, 243, 0.18);


//  userAvatarBackground: '#21222C',
//   userAvatarBorder: '#3E85F3',
//   userAvatarInsideBackground: '#171820',
//   userNameTextColor: '#FFFFFF',
//   userInputLabelColor: 'rgba(250, 250, 250, 0.3)',
//   userInputBorderColor: 'rgba(255, 255, 255, 0.15)',
//     userInputTextColor: '#FFFFFF',
//   userFillCollor: rgba(255, 255, 255, 0.18);
      
        
// кольори кнопок (однакові на темній та світлій темах)
//   btnBackgroundColor: '#3E85F3',
//   btnTextColor: '#FFFFFF',
//     btnHoverBackground: '#2B78EF',
      
import styled from "@emotion/styled";
import { media } from 'utils/queries';

export const AddAvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;

    ${media('tablet', '')`
        gap: 14px;
    `}    
`;
export const AvatarContainer = styled.div`
    width: 72px;
    height: 76px;
    position: absolute;

     ${media('tablet', '')`
        width: 124px;
        height: 130px;
        position: static;
    `}
`;

export const AvatarBox = styled.div`    
    display: flex;    
    align-items: center;    
    justify-content: center;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.userAvatarBorder};          
    background-color: ${props => props.theme.userAvatarInsideBackground};
    overflow: hidden;
    position: absolute;
    bottom: 99px;

     ${media('tablet', '')`
        width: 124px;
        height: 124px; 
        position: static;
    `}
`;

export const Avatar = styled.img`     
    width: 30px;
    height: 30px;
    object-fit: cover;
    fill: ${props => props.theme.userFillCollor};     

    ${media('tablet', '')`
        width: 48px;
        height: 48px; 
    `}
`;

export const AddImageBox = styled.div`
    display: flex;    
    align-items: center;    
    justify-content: center;  
      
    background-color: ${props => props.theme.btnBackgroundColor};
    overflow: hidden;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    position: relative;
    left: 43px;  
    bottom: 32px;
    

    ${media('tablet', '')`  
        width: 24px;
        height: 24px; 
        left: 79px;  
        bottom: 20px;
    `}
`;

export const AddImage = styled.img`    
    width: 8px;
    height: 8px;  
    
    ${media('tablet', '')`  
        width: 18px;
        height: 18px; 
    `}
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const UserName = styled.h2`   
    font-size: 14px;
    font-weight: 700;
    line-height: 1.29;

    margin-bottom: 4px;
    color: ${props => props.theme.userNameTextColor};

    ${media('tablet', '')`
        font-size: 18px;
        line-height: 1.0;

        margin-bottom: 8px;
    `}
`;

export const Position = styled.p`
    font-size: 12px;
    font-weight: 600;
    line-height: 1.17;
    color: ${props => props.theme.userInputLabelColor};

     ${media('tablet', '')`
        font-size: 14px;
        line-height: 1.29;
    `}
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 88px;
    width: 100%;  
`;

export const BoxAllInputs = styled.div`
    display: flex;
    flex-direction: column;  
    gap: 18px; 

    ${media('tablet', '')`
        gap: 24px;
    `}

    ${media('desktop', '')`        
        flex-direction: row;
        gap: 50px;
    `}  
`;

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 299px;

    ${media('tablet', '')`
        gap: 24px;
        width: 354px;
    `}
`;

export const BoxInput = styled.div`
`;

export const InputTitle = styled.h2`    
    font-size: 12px;
    line-height: 1.17;
    margin-bottom: 8px;  
    color: ${props => props.theme.userInputLabelColor};
    
    ${media('tablet', '')`
        font-size: 14px;
        line-height: 1.29;
    `}
`;

export const Input = styled.input`
    font-size: 14px;
    font-weight: 600;
    line-height: 1.29;

    background-color: inherit;
    border-radius: 8px;       
    border: 1px solid ${props => props.theme.userInputBorderColor};
    height: 42px;    
    width: 100%;
    padding-left: 14px;

    cursor: pointer;
    color: ${props => props.theme.userInputTextColor};

    :hover,
    :focus {
        border: 1px solid ${props => props.theme.userInputBorderHoverColor};
    }

     ${media('tablet', '')`
        font-size: 16px;
        line-height: 1.125;
        height: 46px;
        padding-left: 18px;
        
    `}
`;
    
export const Button = styled.button`
    font-size: 14px;    
    font-weight: 600;
    line-height: 1.29;  

    border: none;
    font: inherit;
    cursor: pointer;
    
    width: 195px;
    height: 46px;
    padding: 0 8px;
    margin-top: 44px;
    border-radius: 16px;

    color: ${props => props.theme.btnTextColor};   
    background-color: ${props => props.theme.btnBackgroundColor};
    
    ${media('tablet', '')`
        width: 262px;
        height: 48px; 
    `}
    
    :hover,
    :focus {
        background: ${props => props.theme.btnHoverBackground}; 
        box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    }
`;











