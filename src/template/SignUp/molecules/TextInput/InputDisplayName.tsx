import {faSignature} from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  register: UseFormRegisterReturn;
  message?: string;
};
export const Component: React.VFC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation('signup');
  return (
    <BaseComponent
      {...props}
      i18n={{
        label: t('signup:display_name.label'),
        description: t('signup:display_name.description'),
      }}
      id="displayName"
      icon={faSignature}
    />
  );
};