import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Pas besoin de base: './' pour Vercel, la racine par défaut est parfaite.
})