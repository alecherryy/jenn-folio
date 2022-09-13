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
]

export const Committee = () => {
  return (
    <p className="c-committee">
      <span className="c-committee__label">Dissertation Commitee: </span>
      {COMMITTEE.map((person, index) =>
      (
        <>
          <a className="c-committee__person" href={person.website} target="_blank" rel="noreferrer">{person.name}</a>
          {index === COMMITTEE.length - 1 ? '' : index === COMMITTEE.length - 2 ? ' and ' : ', '}
        </>
      )
      )}
    </p>
  )
}