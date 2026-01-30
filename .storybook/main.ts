import type {StorybookConfig} from '@storybook/nextjs-vite';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'],
  viteFinal(config) {
    config.css = config.css ?? {};
    config.css.preprocessorOptions = {
      scss: {
        additionalData: `
          @use "@/shared/styles/variables" as *;
          @use "@/shared/styles/mixins" as *;
        `,
      },
    };

    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias as Record<string, string>),
      '@': path.resolve(__dirname, '../src'),
    };

    return config;
  },
};

export default config;
