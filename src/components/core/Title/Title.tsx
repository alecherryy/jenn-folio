import { ReactNode } from 'react';
import './styles.scss';

/**
 * Title component
 */
type Props = {
  singleChar?: string,
  title: string,
  children?: ReactNode
}
export const Title = ({ title, singleChar, children }: Props) => {
  return (
    <div className="c-title">
      <h1 className="c-title__title">
        {singleChar && (
          <span className="u-txt-blue">{singleChar}</span>
        )}{title}</h1>
      {children}
    </div>
  )
}