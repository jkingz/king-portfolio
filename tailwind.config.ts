import type { Config } from 'tailwindcss';
import tailwindcssTypography from '@tailwindcss/typography';

export default <Partial<Config>>{
  content: ['./app/**/*.{js,ts,vue}'],
  plugins: [tailwindcssTypography],
};
