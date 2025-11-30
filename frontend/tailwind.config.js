import daisyui from 'daisyui';

export default { // Mengekspor objek konfigurasi ini agar bisa dibaca oleh Tailwind saat proses build (npm run dev).
  content: [ // Bagian paling KRUSIAL. Ini memberi tahu Tailwind: "Tolong cari nama class HANYA di file-file yang terdaftar di sini".
    "./index.html", // Tailwind akan memindai file index.html utama Anda.
    "./src/**/*.{js,ts,jsx,tsx}", // Pola "Glob". Artinya: Cek folder "src" dan SEMUA sub-foldernya (/**) untuk file apapun yang berakhiran .js, .ts, .jsx, atau .tsx.
  ],
  theme: { // Bagian untuk mengatur desain visual dasar (font, warna, ukuran).
    extend: {}, // Gunakan "extend" jika ingin MENAMBAH style kustom (misal: warna baru) tanpa menghapus style bawaan Tailwind.
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "white",
      "cupcake",
      "forest",
      "sunset",
    ],
  },
}

/*
Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p


*/