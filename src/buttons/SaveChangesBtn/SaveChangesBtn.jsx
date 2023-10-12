import { SaveBtn } from './SaveChangesBtn.styled';

export const SaveChangesBtn = ({isChanged, children}) => {
  return (
    <SaveBtn aria-label='save updated profile' type="submit" disabled={isChanged}>
      {children}
    </SaveBtn>
  );
};