import React from 'react';

import { BaseFont, BaseFontProps } from './Typography.styled';

export interface BaseFontPropsRestricted<T>
  extends Partial<Omit<BaseFontProps, 'type'>> {
  type?: T;
}
export interface BaseFontRegularPropsRestricted extends BaseFontProps {
  type: 'regular';
}
export interface BaseFontBoldPropsRestricted extends BaseFontProps {
  type: 'bold';
}
export interface BaseFontMediumPropsRestricted extends BaseFontProps {
  type: 'medium';
}

export const HeaderXXL: React.FC<BaseFontPropsRestricted<'regular' | 'bold'>> =
  ({ ...props }) => (
    <BaseFont size={44} lineHeight={1.5} type="regular" {...props}>
      {props.children}
    </BaseFont>
  );

export const HeaderXL: React.FC<BaseFontPropsRestricted<'regular' | 'bold'>> =
  ({ ...props }) => (
    <BaseFont size={36} lineHeight={1.5} type="regular" {...props}>
      {props.children}
    </BaseFont>
  );

export const HeaderL: React.FC<BaseFontPropsRestricted<'regular' | 'bold'>> = ({
  ...props
}) => (
  <BaseFont size={32} lineHeight={1.4} type="regular" {...props}>
    {props.children}
  </BaseFont>
);

export const HeaderM: React.FC<BaseFontPropsRestricted<'regular' | 'bold'>> = ({
  ...props
}) => (
  <BaseFont size={28} lineHeight={1.4} type="regular" {...props}>
    {props.children}
  </BaseFont>
);

export const HeaderS: React.FC<BaseFontPropsRestricted<'regular' | 'bold'>> = ({
  ...props
}) => (
  <BaseFont size={24} lineHeight={1.5} type="regular" {...props}>
    {props.children}
  </BaseFont>
);

export const HeaderXS: React.FC<BaseFontPropsRestricted<'regular' | 'bold'>> =
  ({ ...props }) => (
    <BaseFont size={20} lineHeight={1.5} type="regular" {...props}>
      {props.children}
    </BaseFont>
  );

export const BodyXL: React.FC<BaseFontPropsRestricted<'regular' | 'bold'>> = ({
  ...props
}) => (
  <BaseFont size={18} lineHeight={1.6} type="regular" {...props}>
    {props.children}
  </BaseFont>
);

export const BodyL: React.FC<BaseFontPropsRestricted<'regular' | 'bold'>> = ({
  ...props
}) => (
  <BaseFont size={16} lineHeight={1.5} type="regular" {...props}>
    {props.children}
  </BaseFont>
);

export const BodyM: React.FC<BaseFontPropsRestricted<'regular' | 'bold'>> = ({
  ...props
}) => (
  <BaseFont size={14} lineHeight={1.6} type="regular" {...props}>
    {props.children}
  </BaseFont>
);

export const Footnote: React.FC<BaseFontPropsRestricted<'regular' | 'bold'>> =
  ({ ...props }) => (
    <BaseFont size={12} lineHeight={1.6} type="regular" {...props}>
      {props.children}
    </BaseFont>
  );

export const ButtonM: React.FC<BaseFontPropsRestricted<'medium'>> = ({
  ...props
}) => (
  <BaseFont size={16} lineHeight={1} type="medium" {...props}>
    {props.children}
  </BaseFont>
);

export const ButtonS: React.FC<BaseFontPropsRestricted<'medium'>> = ({
  ...props
}) => (
  <BaseFont size={14} lineHeight={1} type="medium" {...props}>
    {props.children}
  </BaseFont>
);

export const InputM: React.FC<BaseFontPropsRestricted<'regular'>> = ({
  ...props
}) => (
  <BaseFont size={16} lineHeight={1.5} type="regular" {...props}>
    {props.children}
  </BaseFont>
);

export const InputS: React.FC<BaseFontPropsRestricted<'regular'>> = ({
  ...props
}) => (
  <BaseFont size={14} lineHeight={1.5} type="regular" {...props}>
    {props.children}
  </BaseFont>
);

export const LinkXL: React.FC<BaseFontPropsRestricted<'bold'>> = ({
  ...props
}) => (
  <BaseFont
    size={18}
    lineHeight={1.6}
    type="bold"
    underLine={true}
    {...props}
  />
);

export const LinkL: React.FC<BaseFontPropsRestricted<'bold'>> = ({
  ...props
}) => (
  <BaseFont
    size={16}
    lineHeight={1.6}
    type="bold"
    underLine={true}
    {...props}
  />
);

export const LinkM: React.FC<BaseFontPropsRestricted<'bold'>> = ({
  ...props
}) => (
  <BaseFont
    size={14}
    lineHeight={1.6}
    type="bold"
    underLine={true}
    {...props}
  />
);

export const LinkS: React.FC<BaseFontPropsRestricted<'bold' | 'regular'>> = ({
  ...props
}) => (
  <BaseFont
    size={12}
    lineHeight={1.6}
    type="bold"
    underLine={true}
    {...props}
  />
);

export const MiscM: React.FC<BaseFontPropsRestricted<'bold'>> = ({
  ...props
}) => (
  <BaseFont size={14} lineHeight={1.6} type="bold" {...props}>
    {props.children}
  </BaseFont>
);

export const MiscS: React.FC<BaseFontPropsRestricted<'bold'>> = ({
  ...props
}) => (
  <BaseFont size={12} lineHeight={1.6} type="bold" {...props}>
    {props.children}
  </BaseFont>
);
