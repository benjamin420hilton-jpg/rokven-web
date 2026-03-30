import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Or whatever framework plugin you are using

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rokven-web/', // <--- ADD THIS LINE
  plugins: [react()], // Your existing plugins
  // ... other configurations
});
