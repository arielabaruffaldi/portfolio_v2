import { HTMLAttributes, PropsWithChildren } from "react";

export interface SectionWrapperProps
  extends React.JSX.IntrinsicAttributes,
    PropsWithChildren<HTMLAttributes<HTMLElement>> {
  children?: React.ReactNode;
  title?: string;
  id?: string;
  hasPadding?: boolean;
}
