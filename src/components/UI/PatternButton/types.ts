import React from "react";
export type PatternButtonProps = {
  isActive?: boolean;
  color?: string;
  gameButton?: boolean;
  onFilter?: (event: React.MouseEvent) => void;
  onSelect?: (event: React.MouseEvent) => void;
};

export type PatternButtonStyleProps = {
  activeColor: string | undefined;
  gameButton: boolean | undefined;
  isActive: boolean | undefined;
};
