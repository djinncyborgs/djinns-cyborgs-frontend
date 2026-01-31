import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `
      @use "@/shared/styles/variables" as *;
      @use "@/shared/styles/mixins" as *;
    `,
  },

  // Конфигурация для Turbopack
  turbopack: {
    rules: {
      '*.stories.{ts,tsx,js,jsx}': {
        loaders: ['ignore-loader'],
      },
    },
  },

  // Конфигурация для webpack (для production build)
  webpack: (config) => {
    config.module.rules.push({
      test: /\.stories\.(ts|tsx|js|jsx)$/,
      use: 'ignore-loader',
    });

    return config;
  },
};

export default nextConfig;
