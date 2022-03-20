import { ReactNode } from "react";
import './styles.scss';

/**
 * Split layout
 */
type Props = {
  children: ReactNode,
}
export const Split = ({ children }: Props) => {
  return (
    <div className="l-split">
      <div className="l-split__inner">
        {children}
      </div>
    </div>
  )
}