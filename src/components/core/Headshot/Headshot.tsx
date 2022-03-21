import './styles.scss';
import Image from "../../../assets/images/headshot.jpg";

/**
 * Headshot component
 */
export const Headshot = () => {
  return (
    <figure className="c-headshot">
      <img className="c-headshot__image" src={Image} alt="Jenn St Stume headshot" />
    </figure>
  )
}