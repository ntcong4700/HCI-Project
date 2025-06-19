# Medical Dashboard

## Projekt Idee
Web-basierten Dachboards zur Unterstützung der Ärztinnen im
Praxisalltag. 
- **Praxisalltag** ➜ *subject of research*
- **Dashboard** ➜ *Möglichst viele Informationen der Patientinnen in einem benutzbaren interaktiven User Interface*

### Install Tailwind CSS

**Install Tailwind CSS**  

Install tailwindcss and @tailwindcss/vite via npm.  
```npm install tailwindcss @tailwindcss/vite```  

**Configure the Vite plugin**

Add the @tailwindcss/vite plugin to your Vite configuration.
```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

**Import Tailwind CSS**  

Add an @import to your CSS file that imports Tailwind CSS.
``` 
@import "tailwindcss" 
```

**Start your build process**  

Run your build process with npm run dev or whatever command is configured in your package.json file.

``` npm run dev ```
