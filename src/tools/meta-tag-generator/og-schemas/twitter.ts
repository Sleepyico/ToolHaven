import type { OGSchemaType } from '../OGSchemaType.type';

export const twitter: OGSchemaType = {
  name: 'Twitter',
  elements: [
    {
      type: 'select',
      options: [
        { label: 'Summary', value: 'summary' },
        { label: 'Summary with large image', value: 'summary_large_image' },
        { label: 'Application', value: 'app' },
        { label: 'Player', value: 'player' },
      ],
      label: 'Card type',
      placeholder: 'The Twitter card type...',
      key: 'twitter:card',
    },
    {
      type: 'input',
      label: 'Site account',
      placeholder: '',
      key: 'twitter:site',
    },
    {
      type: 'input',
      label: 'Creator acc.',
      placeholder: '@sleepyiconical',
      key: 'twitter:creator',
    },
  ],
};
