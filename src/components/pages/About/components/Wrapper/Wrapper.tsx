import './styles.scss';

/**
 * Wrapper component
 */
export const Wrapper = () => {
  return (
    <div className="c-wrapper">
      <div className="c-wrapper__inner">
        <h1 className="c-wrapper__title">
          <span className="u-txt-blue">A</span>bout
        </h1>
        <p>Jennifer St Sume is a PhD student in <a href="https://gvpt.umd.edu/landing/Graduate" target="_blank" rel="noreferrer">Government and Politics</a> at
          the University of Maryland, College Park focusing on race and American politics.
          Specifically, her work examines the role of grievances in Black American political behavior. Her other
          work includes research on the political attitudes of non-religious people of color
          in a "secularizing" world. She received her B.A. in Communication from Florida Atlantic University in Boca Raton, FL
          where she graduated a Presidential Scholar. She also received an M.A. in Communication from Wake Forest
          University where she specialized in race and presidential rhetoric.</p>

        <p>A daughter of Haitian immigrants and south Florida native, she enjoys karaoke by the beach, <b><i>Publix chicken tender subs</i></b>, and cool craft beers.</p>
        <p>Contact me via email at stsumej [at] umd dot edu.</p>
        <a className="u-mt-6 c-button c-button--text" href="../../../../../assets/files/St-Sume-CV.docx" download>Download Resume</a>
      </div>
    </div>
  )
}