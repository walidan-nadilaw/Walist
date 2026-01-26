FROM node:22-alpine

WORKDIR /app

# Ubah permission folder kerja agar user node bisa menulis (penting untuk Vite caching)
RUN chown -R node:node /app

# Switch user
USER node

# Copy package files
COPY --chown=node:node package*.json ./

# Install dependencies (termasuk devDependencies karena ini frontend build tool)
RUN npm install

# Copy source code
COPY --chown=node:node . .

EXPOSE 5173

# Host 0.0.0.0 wajib untuk akses dari luar container
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]