/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { useColorTheme, useInView, useReducedMotion } from '@hooks';
import c from 'clsx';
import LottiePlayer from 'lottie-web';
import { ReactElement, useEffect, useRef, useState } from 'react';
import styles from './Lottie.module.scss';
import { LottieAnimations } from './constants';

type Props = {
  className?: string;
  name: LottieAnimations;
  width?: number;
  height?: number;
  speed?: number;
  rootMargin?: string;
  centered?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  player?: any;
  onPlay?: () => void;
  onComplete?: () => void;
  onClick?: () => void;
};

const Lottie = ({
  className,
  name,
  speed,
  width,
  height,
  centered = false,
  loop = true,
  autoplay = true,
  rootMargin = '250px',
  player,
  onPlay,
  onComplete,
  onClick,
}: Props): ReactElement => {
  const ref = useRef<any>(null);
  const lottie = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const isIntersecting = useInView(ref, { threshold: 1, rootMargin });
  const [hasIntersect, setHasIntersect] = useState(false);

  useEffect(() => {
    if (isIntersecting && !hasIntersect) {
      setHasIntersect(true);
    }
  }, [isIntersecting, hasIntersect]);

  const colorTheme = useColorTheme();

  const reducedMotion = useReducedMotion();

  function handleOnClick() {
    onClick?.();

    if (isPlaying) {
      return;
    }

    lottie?.current?.goToAndPlay(0);
    setIsPlaying(true);
    onPlay?.();
  }

  useEffect(() => {
    if (hasIntersect) {
      lottie?.current?.destroy();

      lottie.current = LottiePlayer.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop,
        autoplay: reducedMotion ? false : autoplay,
        path: `/animations/${colorTheme}/${name}.json`,
      });

      lottie.current.onComplete = () => {
        setIsPlaying(false);
        onComplete?.();
      };

      if (speed) {
        lottie.current.setSpeed(speed);
      }

      if (player) {
        player.current = lottie.current;
      }

      if (reducedMotion) {
        lottie.current.stop();
      }
    }

    return () => {
      lottie.current && lottie.current.destroy();
    };
  }, [autoplay, loop, name, player, speed, colorTheme, reducedMotion, hasIntersect, onComplete]);

  return (
    <div
      ref={ref}
      className={c(centered && styles.centered, className)}
      style={{
        height: height ? height + 'px' : 'auto',
        width: width ? width + 'px' : '100%',
      }}
      onClick={handleOnClick}
    />
  );
};

export default Lottie;
