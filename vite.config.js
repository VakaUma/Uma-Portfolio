import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Uma-Portfolio/', // Replace 'Uma-Portfolio' with your repo name
});
