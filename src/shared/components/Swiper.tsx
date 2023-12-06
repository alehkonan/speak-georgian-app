import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from 'framer-motion';
import { type PropsWithChildren, type ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';

type Props = {
  delta: number;
  onLeftSwipe?: () => void;
  leftElement?: ReactNode;
  onRightSwipe?: () => void;
  rightElement?: ReactNode;
};

export const Swiper = ({
  children,
  delta,
  onLeftSwipe,
  leftElement,
  onRightSwipe,
  rightElement,
}: PropsWithChildren<Props>) => {
  const x = useMotionValue(0);

  const leftOpacity = useTransform(x, [0, -delta], [0, 1]);
  const leftDisplay = useTransform(() =>
    x.get() === -delta ? 'block' : 'none',
  );
  const rightDisplay = useTransform(() =>
    x.get() === delta ? 'block' : 'none',
  );
  const rightOpacity = useTransform(x, [0, delta], [0, 1]);

  useMotionValueEvent(x, 'change', (value) => {
    if (value < -delta) x.updateAndNotify(-delta);
    if (value > delta) x.updateAndNotify(delta);
  });

  const onPointerUp = () => {
    if (x.get() === delta && onRightSwipe) onRightSwipe();
    if (x.get() === -delta && onLeftSwipe) onLeftSwipe();
  };

  return (
    <>
      <motion.div
        className="cursor-pointer"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x }}
        onPointerUp={onPointerUp}
      >
        {children}
      </motion.div>
      <motion.div
        className={twJoin([
          'flex items-center justify-start',
          'pointer-events-none fixed left-0 top-0 z-10 h-full w-10 bg-left-gradient',
        ])}
        style={{ opacity: leftOpacity }}
      >
        {leftElement && (
          <motion.div
            className="m-2 rounded-full bg-white p-2 shadow-lg"
            style={{ display: leftDisplay }}
          >
            {leftElement}
          </motion.div>
        )}
      </motion.div>
      <motion.div
        className={twJoin([
          'flex items-center justify-end',
          'pointer-events-none fixed right-0 top-0 z-10 h-full w-10 bg-right-gradient',
        ])}
        style={{ opacity: rightOpacity }}
      >
        {rightElement && (
          <motion.div
            className="m-2 rounded-full bg-white p-2 shadow-lg"
            style={{ display: rightDisplay }}
          >
            {rightElement}
          </motion.div>
        )}
      </motion.div>
    </>
  );
};
