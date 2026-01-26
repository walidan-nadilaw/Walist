FROM node:22-alpine

# 1. Setup Environment
ENV NODE_ENV=production

# 2. Buat direktori app dan ubah pemiliknya ke user 'node'
# Kita harus melakukan ini SEBELUM switch user
WORKDIR /app
RUN chown -R node:node /app

# 3. Switch ke user 'node' (Non-Root)
USER node

# 4. Copy package files dengan kepemilikan yang benar
# --chown=node:node sangat PENTING agar user 'node' bisa membacanya
COPY --chown=node:node package*.json ./

# 5. Install dependencies
# Gunakan 'npm ci' untuk build yang lebih cepat dan konsisten (wajib ada package-lock.json)
# --omit=dev agar devDependencies (seperti nodemon) tidak ikut terinstall di production
RUN npm ci --omit=dev

# 6. Copy sisa kode aplikasi
COPY --chown=node:node . .

# 7. Expose port
EXPOSE 5001

# 8. Jalankan server
CMD ["node", "src/server.js"]