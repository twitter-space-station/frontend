import clsx from 'clsx';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {UniqueName} from '~/components/atoms/UniqueName';
import {UserIcon} from '~/components/atoms/UserIcon';

export type ComponentProps = {
  className?: string;
  uniqueName: string;
  displayName: string;
  picture: string;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  displayName,
  uniqueName,
  picture,
}) => {
  const {t} = useTranslation('user');

  return (
    <section
      className={clsx(
        className,
        'px-2',
        'py-4',
        'bg-gray-50',
        'shadow-sm',
        'rounded-sm',
      )}
    >
      <p className={clsx('px-2', 'font-bold')}>
        {t('user:section.profile.title')}
      </p>
      <div
        className={clsx(
          'mt-2',
          'flex',
          'bg-white',
          'px-4',
          'py-3',
          'rounded-md',
          'shadow-md',
        )}
      >
        <div className={clsx('flex', 'items-center', 'justify-center')}>
          <div className={clsx('w-16', 'h-16')}>
            <UserIcon {...{displayName, picture}} />
          </div>
        </div>
        <div
          className={clsx(
            'ml-4',
            'flex-grow',
            'flex',
            'flex-col',
            'justify-center',
          )}
        >
          <span className={clsx('text-lg', 'font-bold')}>{displayName}</span>
          <UniqueName
            className={clsx('text-gray-500')}
            uniqueName={uniqueName}
          />
        </div>
      </div>
    </section>
  );
};