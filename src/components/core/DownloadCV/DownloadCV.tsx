import './styles.scss';

type Props = {
  modifierClasses?: string,
  isMobile?: boolean;
}
export const DownloadCV = ({ isMobile, modifierClasses = '' }: Props) => {
  const classes = [
    'c-download-cv',
    'u-button u-button--text',
    isMobile === true ? 'u-hidden-desktop-up' : '',
    isMobile === false ? 'u-hidden-desktop-down' : '',
    modifierClasses,
  ].join(' ').trim();

  return (
    <a className={classes} href="./files/CV - St Sume, Jennifer.pdf" download>Download CV</a>
  )
}