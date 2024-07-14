const plugin = require('tailwindcss/plugin');
const bsGrid = plugin(
  ({ addComponents }) => {
    addComponents([
      {
        '.container': {
          'marginInline': 'auto',
          'paddingInline': 'calc(var(--gutter-x) * 0.5)',
          'width': '100%',
          '--gutter-x': '1.5rem',
          '--gutter-y': '0rem',
          // Breakpoints
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1320px',
          },
        },
      },
      {
        '.row': {
          'display': 'flex',
          'flexWrap': 'wrap',
          'paddingInline': 'calc(var(--gutter-x) * 0.5)',
          'marginTop': 'calc(var(--gutter-y) * -1)',
          '--gutter-x': '1.5rem',
          '--gutter-y': '0rem',
          '&>*': {
            flexShrink: '0',
            width: '100%',
            maxWidth: '100%',
            paddingInline: 'calc(var(--gutter-x) * 0.5)',
            marginTop: 'var(--gutter-y)',
          },
        },
      },
      {
        '.col-1': {
          flex: '0 0 auto',
          width: '8.3333333333%',
        },
      },
      {
        '.col-2': {
          flex: '0 0 auto',
          width: '16.6666666667%',
        },
      },
      { '.col-3': { flex: '0 0 auto', width: '25%' } },
      { '.col-4': { flex: '0 0 auto', width: '33.3333333333%' } },
      { '.col-5': { flex: '0 0 auto', width: '41.6666666667%' } },
      { '.col-6': { flex: '0 0 auto', width: '50%' } },
      { '.col-7': { flex: '0 0 auto', width: '58.3333333333%' } },
      { '.col-8': { flex: '0 0 auto', width: '66.6666666667%' } },
      { '.col-9': { flex: '0 0 auto', width: '75%' } },
      { '.col-10': { flex: '0 0 auto', width: '83.3333333333%' } },
      { '.col-11': { flex: '0 0 auto', width: '91.6666666667%' } },
      { '.col-12': { flex: '0 0 auto', width: '100%' } },
      { '.col': { flex: '1 0 0%' } },
      { '.gx-0': { '--gutter-x': '0rem' } },
      { '.gy-0': { '--gutter-y': '0rem' } },
      { '.gx-1': { '--gutter-x': '0.25rem' } },
      { '.gy-1': { '--gutter-y': '0.25rem' } },
      { '.gx-2': { '--gutter-x': '0.5rem' } },
      { '.gy-2': { '--gutter-y': '0.5rem' } },
      { '.gx-3': { '--gutter-x': '1rem' } },
      { '.gy-3': { '--gutter-y': '1rem' } },
      { '.gx-4': { '--gutter-x': '1.5rem' } },
      { '.gy-4': { '--gutter-y': '1.5rem' } },
      { '.gx-5': { '--gutter-x': '3rem' } },
      { '.gy-5': { '--gutter-y': '3rem' } },
      { '.g-0': { '@apply gx-0 gy-0': {} } },
      { '.g-1': { '@apply gx-1 gy-1': {} } },
      { '.g-2': { '@apply gx-2 gy-2': {} } },
      { '.g-3': { '@apply gx-3 gy-3': {} } },
      { '.g-4': { '@apply gx-4 gy-4': {} } },
      { '.g-5': { '@apply gx-5 gy-5': {} } },
    ]);
  },
  {
    theme: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
    },
  }
);
module.exports = bsGrid;
