export type ActionButtonProps = {
  onClear?: () => void;
  onAddToCart?: () => void;
  onComplete?: () => void;
};

export type ActionButtonContainerProps = {
  isAddToCart: boolean | undefined;
};
