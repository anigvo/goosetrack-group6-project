import styled from '@emotion/styled';

export const RegisterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 375px;
  border-radius: 8px;
  padding: 40px 24px;
  margin: 0 20px;
  background:  #ffffff;
`;

export const Title = styled.h1`
  margin: 0 0 32px 0;
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #13151a;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  line-height: 1.28;
  margin-bottom: ${(props) => (props.last ? '34px' : '24px')};
`;

export const Input = styled.input`
  height: 46px;
  padding: 0 14px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.6);
  background-color:  #ffffff;
  color: #13151a;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  line-height: 1.28;
  ::placeholder {
    color:  #dce3e5;
    font-size: 14px;
    font-family: Inter;
    line-height: 1.28;
  }
  :hover,
  :focus {
    border: 1px solid #3e85f3;
  }
  &.is-valid {
    border: 1px solid green;
    background-color: rgba(15, 216, 102, 0.038);
  }
  &.is-invalid {
    border: 1px solid rgba(240, 8, 8, 0.6);
    background-color: rgba(240, 8, 8, 0.045);
  }
};

// export const ValidIcon = styled(FiCheckCircle)`
//   position: absolute;
//   top: 41px;
//   right: 15px;
//   color: var(--green-color);
// `;

// export const InvalidIcon = styled(FiAlertCircle)`
//   position: absolute;
//   top: 41px;
//   right: 15px;
//   color: var(--color-task-high);
// `;

export const Togle = styled.span`
  position: absolute;
  top: 41px;
  right: 34px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Button = styled.button`
  width: 100%;
  height: 46px;
  padding: 14px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border: none;
  border-radius: 16px;
  background: var(--color-blue);
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  color: var(--color-white);
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 1.28;
  letter-spacing: -0.36px;
  text-decoration: none;
  :hover,
  :focus {
    background-color: #2571e2;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
