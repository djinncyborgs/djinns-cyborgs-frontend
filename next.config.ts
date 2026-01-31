import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `
      @use "@/shared/styles/variables" as *;
      @use "@/shared/styles/mixins" as *;
    `,
  },

  turbopack: {
    rules: {
      '*.stories.{ts,tsx,js,jsx}': {
        loaders: ['ignore-loader'],
      },
    },
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.stories\.(ts|tsx|js|jsx)$/,
      use: 'ignore-loader',
    });

    return config;
  },
};

export default nextConfig;
