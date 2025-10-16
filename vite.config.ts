import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    visualizer({
      filename: "stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Create separate chunks for React and ReactDOM
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-vendor';
          }
          
          // Split Three.js related packages
          if (id.includes('node_modules/three/') || 
              id.includes('node_modules/@react-three/fiber') || 
              id.includes('node_modules/@react-three/drei')) {
            // Further split Three.js into smaller chunks
            if (id.includes('node_modules/three/examples/')) {
              return 'three-examples';
            }
            if (id.includes('node_modules/@react-three/drei')) {
              return 'drei-vendor';
            }
            if (id.includes('node_modules/@react-three/fiber')) {
              return 'fiber-vendor';
            }
            return 'three-core';
          }
          
          // Split Radix UI components into smaller chunks
          if (id.includes('node_modules/@radix-ui/')) {
            // Group similar components together
            if (id.includes('dialog') || id.includes('popover') || id.includes('modal')) {
              return 'ui-overlays';
            }
            if (id.includes('navigation') || id.includes('tabs') || id.includes('menubar')) {
              return 'ui-navigation';
            }
            if (id.includes('form') || id.includes('checkbox') || id.includes('radio') || id.includes('select')) {
              return 'ui-forms';
            }
            return 'ui-base';
          }
          
          // Other major dependencies
          if (id.includes('node_modules/recharts/')) {
            return 'recharts-vendor';
          }
          if (id.includes('node_modules/framer-motion/')) {
            return 'animations';
          }
          
          if (id.includes('node_modules/')) {
            return 'vendor';
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    assetsInlineLimit: 4096,
  },
}));
