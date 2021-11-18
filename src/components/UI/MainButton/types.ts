export type MainButtonProps = {
  onSave?: () => void;
  isForm?: boolean;
  onNewBet?: () => void;
};

export type MainButtonContainerProps = {
  isForm: boolean | undefined;
  isCart: boolean | undefined;
};
