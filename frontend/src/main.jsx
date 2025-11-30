import { StrictMode } from 'react'; // Mengimpor komponen StrictMode dari React untuk membantu mendeteksi bug/masalah saat development.
import { createRoot } from 'react-dom/client'; // Mengimpor fungsi createRoot, cara baru React 18+ untuk menempelkan aplikasi ke HTML.
import { BrowserRouter } from 'react-router'; // Mengimpor Router agar aplikasi bisa berpindah halaman tanpa me-refresh browser.
import './index.css'; // Mengimpor file CSS global (di sini biasanya tempat konfigurasi Tailwind berada).
import App from './App.jsx'; // Mengimpor komponen utama "App" yang menjadi induk dari semua tampilan website.
import {Toaster} from "react-hot-toast"; // Mengimpor komponen Toaster yang berfungsi sebagai "wadah" untuk menampilkan notifikasi pop-up.

// Baris ini mencari elemen <div> dengan id="root" di file index.html, lalu menyuruh React untuk merender (menggambar) aplikasi di dalamnya.
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Pembungkus khusus development. Ini akan merender komponen 2x untuk memastikan tidak ada efek samping kode yang aneh. */}
    <BrowserRouter> {/* Membungkus seluruh aplikasi agar semua komponen di dalamnya (termasuk App) bisa menggunakan fitur navigasi/link. */}
      <App /> {/* Memanggil dan menampilkan komponen utama aplikasi kita. */}
      <Toaster /> {/* Menaruh komponen notifikasi di level paling atas agar bisa muncul melayang di atas semua halaman. */}
    </BrowserRouter>
  </StrictMode>,
)