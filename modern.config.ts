import { moduleTools, defineConfig } from '@modern-js/module-tools';

export default defineConfig({
  plugins: [moduleTools()],
  buildConfig: [
    {
      format: 'cjs',
      target: 'es2022',
      buildType: 'bundleless',
      autoExtension: true,
      sourceMap: true,
    },
  ],
});
