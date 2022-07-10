import { ReactNode } from 'react';
import './styles.scss';

/**
 * Content component
 */
type Props = {
  children: ReactNode;
}
export const Content = ({ children }: Props) => {
  return (
    <div className="c-content">
      {children}
    </div>
  )
}