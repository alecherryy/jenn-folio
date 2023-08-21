import './styles.scss';

const COMMITTEE = [
  {
    name: 'Lilliana Mason',
    website: 'https://snfagora.jhu.edu/person/lilliana-mason/',
  },
  {
    name: 'Chryl Laird',
    website: 'https://www.chryllaird.com/',
  },
  {
    name: 'Antoine Banks',
    website: 'https://gvpt.umd.edu/facultyprofile/banks/antoine',
  },
  {
    name: 'Janelle Wong',
    website: 'https://www.aast.umd.edu/bio-janelle-wong',
  },
  {
    name: 'Niambi Carter',
    website: 'https://www.niambicarter.com/',
  },
]

export const Committee = () => {
  return (
    <p className="c-committee">
      <span className="c-committee__label">Dissertation Commitee: </span>
      {COMMITTEE.map((person, index) =>
      (
        <>
          <a className="c-committee__person" href={person.website} target="_blank" rel="noreferrer">{person.name}</a>
          {index === 1 && <span className="u-txt-italic"> (Co-Chairs)</span>}
          {index === COMMITTEE.length - 1 ? '' : index === 0 ? ' and ' : ', '}
        </>
      )
      )}
    </p>
  )
}