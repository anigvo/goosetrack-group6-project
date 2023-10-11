import { SaveBtn } from './SaveChangesBtn.styled';

export const SaveChangesBtn = ({isChanged, children}) => {
  return (
    <SaveBtn type="submit" disabled={isChanged}>
      {children}
    </SaveBtn>
  );
};