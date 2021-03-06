import {useTranslation} from 'next-i18next';
import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {tw} from 'twind';
import {IconTitle} from '~/components/atoms/Icon';
import {InputText} from '~/components/atoms/InputText';
import {FieldFrame} from '../../atoms/FieldFrame';

export type ComponentProps = {
  className?: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
};

export const Component: React.VFC<ComponentProps> = ({
  className,
  register,
  errorMessage,
}) => {
  const {t} = useTranslation();
  return (
    <FieldFrame
      {...{errorMessage}}
      id="title"
      className={tw(className)}
      Icon={IconTitle}
      i18n={{label: t('new:form.title.label')}}
      Input={({className, ...props}) => (
        <InputText className={tw(className)} register={register} {...props} />
      )}
      required
    />
  );
};
