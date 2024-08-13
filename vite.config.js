// import { defineConfig } from 'vite'
// import { resolve } from 'path'

// export default defineConfig({
//   root: 'src',
//   build: {
//     outDir: '../dist',
//     emptyOutDir: true,
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'src/index.html'),
//       },
//     },
//   },
//   publicDir: '../public',
//   assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif'],
// })

// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        // Add other pages here
      },
    },
  },
  publicDir: '../public',
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif'],
})