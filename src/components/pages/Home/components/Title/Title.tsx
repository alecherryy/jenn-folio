import './styles.scss';

/**
 * Title component
 */
export const Title = () => {
  return (
    <div className="c-title">
      <h1 className="c-title__title">
        <span className="u-txt-blue">J</span>enn St Sume
      </h1>
      <p>Ph.D. Government and Politics<br />
        <span className="u-txt-italic">
          University of Maryland, College Park, MD
        </span>
      </p>
    </div>
  )
}