import { SaveBtn } from './SaveChangesBtn.styled';

export const SaveChangesBtn = ({isChanged}) => {
  return (
    <SaveBtn type="submit" disabled={isChanged}>
      Save Canges
    </SaveBtn>
  );
};