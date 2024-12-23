import Hyperlink from '@app/components/typography/hyperlink/Hyperlink';
import Subtitle from '@app/components/typography/subtitle/Subtitle';
import { ReactElement } from 'react';
import styles from './Donation.module.scss';

const Donation = (): ReactElement => {
  return (
    <>
      <Subtitle>Donation</Subtitle>
      <Hyperlink href="https://www.buymeacoffee.com/georgeroubie" target="_blank">
        <img
          className={styles.image}
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
        />
      </Hyperlink>
    </>
  );
};

export default Donation;
