import AngleDownIcon from '@app/components/icons/AngleDownIcon';
import AngleLeftIcon from '@app/components/icons/AngleLeftIcon';
import AngleRightIcon from '@app/components/icons/AngleRightIcon';
import AngleUpIcon from '@app/components/icons/AngleUpIcon';
import BellIcon from '@app/components/icons/BellIcon';
import CheckIcon from '@app/components/icons/CheckIcon';
import CommentsIcon from '@app/components/icons/CommentsIcon';
import EnvelopeIcon from '@app/components/icons/EnvelopeIcon';
import GearIcon from '@app/components/icons/GearIcon';
import HeartIcon from '@app/components/icons/HeartIcon';
import HomeIcon from '@app/components/icons/HomeIcon';
import InfoIcon from '@app/components/icons/InfoIcon';
import MagnifierIcon from '@app/components/icons/MagnifierIcon';
import MinusIcon from '@app/components/icons/MinusIcon';
import PlayIcon from '@app/components/icons/PlayIcon';
import PlusIcon from '@app/components/icons/PlusIcon';
import SpinnerIcon from '@app/components/icons/SpinnerIcon';
import TimesIcon from '@app/components/icons/TimesIcon';
import TrashIcon from '@app/components/icons/TrashIcon';
import UserIcon from '@app/components/icons/UserIcon';
import Subtitle from '@app/components/typography/subtitle/Subtitle';
import { ReactElement } from 'react';
import styles from './IconsPresentation.module.scss';

const IconsPresentation = (): ReactElement => {
  return (
    <>
      <Subtitle>Icons</Subtitle>
      <div className={styles.controls}>
        <AngleDownIcon />
        <AngleLeftIcon />
        <AngleRightIcon />
        <AngleUpIcon />
        <BellIcon />
        <CheckIcon />
        <CommentsIcon />
        <EnvelopeIcon />
        <GearIcon />
        <HeartIcon />
        <HomeIcon />
        <InfoIcon />
        <MagnifierIcon />
        <MinusIcon />
        <PlayIcon />
        <PlusIcon />
        <SpinnerIcon />
        <TimesIcon />
        <TrashIcon />
        <UserIcon />
      </div>
    </>
  );
};

export default IconsPresentation;
