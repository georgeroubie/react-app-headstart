import {
  AngleDownIcon,
  AngleLeftIcon,
  AngleRightIcon,
  AngleUpIcon,
  BellIcon,
  CheckIcon,
  CommentsIcon,
  EnvelopeIcon,
  GearIcon,
  HeartIcon,
  HomeIcon,
  InfoIcon,
  MagnifierIcon,
  MinusIcon,
  PlayIcon,
  PlusIcon,
  SpinnerIcon,
  TimesIcon,
  TrashIcon,
  UserIcon,
} from '@icons';
import { Subtitle } from '@typography-components';
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
