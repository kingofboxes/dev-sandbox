// Types
import { ReactNode } from 'react';

// For the public shell.
export type ShellProps = Readonly<{
  children?: ReactNode,
  title?: string,
}>;

// For content headers.
export type ContentProps = Readonly<{
  heading?: string,
  description?: string | string[],
}>;
