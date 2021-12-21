// @ts-ignore: JSX/MDX with Stencil
import docs from './modus-tabs-storybook-docs.mdx';
import { html } from 'lit-html';

export default {
  title: 'Components/Tabs',
  parameters: {
    docs: {
      page: docs,
    },
    options: {
      isToolshown: true
    },
    previewTabs: {
      canvas: {
        hidden: true
      }
    }
  },
};

const Template = () => html`
  <modus-tabs id="my-tabs"></modus-tabs>
  ${setTabs()}
`;
export const Default = Template.bind({});

const setTabs = () => {
  const tag = document.createElement('script');
  tag.innerHTML = `
    document.querySelector('modus-tabs').tabs = [
      {
        id: 0,
        label: 'Tab 1'
      },
      {
        active: true,
        id: 1,
        label: 'Tab 2'
      }
    ];
  `;

  return tag;
}

