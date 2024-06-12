import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run gearframe:serve',
        production: 'nx run gearframe:preview',
      },
      ciWebServerCommand: 'nx run gearframe:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
