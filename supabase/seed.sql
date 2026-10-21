-- SDN Ngletih 1 sample data
-- Run after migrations/001_schema.sql. Clears the content tables first, so it can be re-run.
-- Image paths are keys inside each table's Storage bucket (galeri/berita/sarpras),
-- uploaded by: node --env-file=.env.local scripts/upload-assets.mjs

truncate table
  public.beritas,
  public.galeris,
  public.prestasis,
  public.ekstrakurikulers,
  public.sarpras
restart identity;

-- ekstrakurikulers (icon = Bootstrap Icons class, warna = .ekstra-card-* class in styles/style.css)
insert into public.ekstrakurikulers (nama, deskripsi, icon, warna, urutan) values
  ('Pramuka', 'Melatih kedisiplinan, kemandirian, kerja sama, dan cinta tanah air melalui kegiatan kepramukaan.', 'bi bi-flag-fill', 'ekstra-card-orange', 1),
  ('Sepak Bola', 'Mengembangkan bakat olahraga, sportivitas, dan kekompakan tim melalui latihan rutin.', 'bi bi-dribbble', 'ekstra-card-green', 2),
  ('Seni Tari', 'Mengenalkan dan melestarikan tari tradisional serta melatih ekspresi dan kepercayaan diri.', 'bi bi-music-note-beamed', 'ekstra-card-pink', 3),
  ('Baca Tulis Al-Qur''an', 'Membimbing siswa membaca dan menulis Al-Qur''an dengan tartil serta menanamkan akhlak mulia.', 'bi bi-book-half', 'ekstra-card-cyan', 4),
  ('Drumband', 'Melatih kekompakan, ketepatan irama, dan kedisiplinan dalam penampilan musik barisan.', 'bi bi-vinyl-fill', 'ekstra-card-purple', 5),
  ('Komputer', 'Mengenalkan dasar-dasar teknologi informasi dan penggunaan komputer secara bijak.', 'bi bi-laptop', 'ekstra-card-blue', 6),
  ('Melukis', 'Mengasah kreativitas dan imajinasi siswa melalui kegiatan menggambar dan mewarnai.', 'bi bi-palette-fill', 'ekstra-card-yellow', 7);

-- prestasis (nama supports line breaks, shown with white-space: pre-line)
insert into public.prestasis (judul, nama, tingkat, tahun, kategori) values
  ('Juara 1 Olimpiade Matematika', 'Ahmad Fauzan', 'Kota Kediri', 2025, 'Akademik'),
  ('Juara 2 Lomba Cerdas Cermat', E'Nadia Putri\nRizky Pratama\nSalsabila Azzahra', 'Kecamatan Pesantren', 2025, 'Akademik'),
  ('Juara 3 Olimpiade Sains Nasional (OSN) IPA', 'Dimas Aditya', 'Kota Kediri', 2024, 'Akademik'),
  ('Juara 1 Lomba Pidato Bahasa Jawa', 'Aisyah Rahmawati', 'Kecamatan Pesantren', 2024, 'Akademik'),
  ('Juara 1 Turnamen Sepak Bola Antar SD', 'Tim Sepak Bola SDN Ngletih 1', 'Kota Kediri', 2025, 'Non Akademik'),
  ('Juara 2 Lomba Tari Tradisional', E'Kirana Dewi\nAyu Lestari\nNaila Safitri', 'Kota Kediri', 2025, 'Non Akademik'),
  ('Juara Harapan 1 Lomba Pramuka Penggalang', 'Regu Melati', 'Kecamatan Pesantren', 2024, 'Non Akademik');

-- galeris
insert into public.galeris (judul, gambar, deskripsi, tanggal) values
  ('Upacara Bendera', 'seed/upacara.jpeg', 'Upacara bendera rutin setiap hari Senin.', '2025-08-18'),
  ('Peringatan Hari Anak Nasional', 'seed/harianak-1.jpg', 'Kegiatan bersama siswa dalam rangka Hari Anak Nasional.', '2025-07-23'),
  ('Tes Kebugaran Siswa', 'seed/teskebugaran-1.jpg', 'Pengukuran kebugaran jasmani siswa.', '2025-05-14'),
  ('Latihan Seni Tari', 'seed/menari.jpeg', 'Latihan rutin ekstrakurikuler seni tari.', '2025-04-10'),
  ('Latihan Sepak Bola', 'seed/sepakbola.jpeg', 'Latihan rutin ekstrakurikuler sepak bola.', '2025-03-20'),
  ('Peringatan Hari Kartini', 'seed/kartin.jpeg', 'Siswa mengenakan pakaian adat untuk memperingati Hari Kartini.', '2025-04-21'),
  ('Kegiatan Sekolah', 'seed/galeri1.jpg', 'Dokumentasi kegiatan siswa SDN Ngletih 1.', '2025-02-12');

-- beritas
insert into public.beritas (judul, slug, isi, gambar, gambar2, gambar3, tanggal, kategori) values
  (
    'Peringatan Hari Anak Nasional di SDN Ngletih 1',
    'peringatan-hari-anak-nasional-di-sdn-ngletih-1',
    E'SDN Ngletih 1 memperingati Hari Anak Nasional dengan berbagai kegiatan yang menyenangkan bagi seluruh siswa.\n\nKegiatan diisi dengan lomba, pentas seni, dan kegiatan bersama guru untuk menumbuhkan semangat belajar dan kebersamaan.',
    'seed/harianak-1.jpg', 'seed/harianak-2.jpg', null,
    '2025-07-23', 'Kegiatan'
  ),
  (
    'Tes Kebugaran Jasmani Siswa',
    'tes-kebugaran-jasmani-siswa',
    E'Siswa kelas 4 sampai 6 mengikuti tes kebugaran jasmani untuk mengukur kesehatan dan kemampuan fisik.\n\nHasil tes digunakan sebagai bahan evaluasi pembelajaran pendidikan jasmani di sekolah.',
    'seed/teskebugaran-1.jpg', 'seed/teskebugaran-2.jpg', 'seed/teskebugaran-3.jpg',
    '2025-05-14', 'Kegiatan'
  ),
  (
    'Tim Sepak Bola Raih Juara 1 Tingkat Kota',
    'tim-sepak-bola-raih-juara-1-tingkat-kota',
    E'Tim sepak bola SDN Ngletih 1 berhasil meraih juara 1 turnamen sepak bola antar SD se-Kota Kediri.\n\nPrestasi ini merupakan hasil latihan rutin dan kerja keras para siswa serta pelatih.',
    'seed/sepakbola.jpeg', null, null,
    '2025-09-02', 'Prestasi'
  ),
  (
    'Pengumuman Penerimaan Murid Baru Tahun Ajaran 2026/2027',
    'pengumuman-penerimaan-murid-baru-2026-2027',
    E'SDN Ngletih 1 membuka pendaftaran murid baru untuk tahun ajaran 2026/2027.\n\nInformasi persyaratan dan jadwal pendaftaran dapat diperoleh langsung di sekolah atau melalui kontak resmi sekolah.',
    'seed/berita1.jpg', null, null,
    '2026-05-04', 'Pengumuman'
  ),
  (
    'Upacara Peringatan HUT Republik Indonesia',
    'upacara-peringatan-hut-republik-indonesia',
    E'Seluruh warga SDN Ngletih 1 mengikuti upacara bendera dalam rangka memperingati HUT Republik Indonesia.\n\nKegiatan dilanjutkan dengan berbagai lomba tradisional untuk siswa.',
    'seed/upacara.jpeg', 'seed/berita2.jpg', 'seed/berita3.jpg',
    '2025-08-17', 'Sekolah'
  );

-- sarpras (icon = Bootstrap Icons class)
insert into public.sarpras (nama, icon, deskripsi, gambar, gambar2, gambar3, urutan) values
  ('Ruang Kelas', 'bi bi-easel-fill', 'Ruang kelas yang bersih, nyaman, dan dilengkapi sarana belajar yang memadai.', 'seed/kelas1.jpeg', 'seed/kelas2.jpeg', null, 1),
  ('Perpustakaan', 'bi bi-book-fill', 'Perpustakaan dengan koleksi buku pelajaran dan bacaan untuk menumbuhkan minat baca siswa.', 'seed/perpustakaan.jpeg', 'seed/perpustakaan2.jpeg', null, 2),
  ('Musholla', 'bi bi-moon-stars-fill', 'Tempat ibadah untuk sholat berjamaah dan kegiatan keagamaan siswa.', 'seed/musholla1.jpeg', 'seed/musholla2.jpeg', 'seed/musholla3.jpeg', 3),
  ('Lapangan', 'bi bi-flag-fill', 'Lapangan untuk upacara, olahraga, dan kegiatan luar ruangan.', 'seed/lapangan1.jpeg', 'seed/lapangan2.jpeg', 'seed/lapangan3.jpeg', 4),
  ('Kantin Sehat', 'bi bi-cup-hot-fill', 'Kantin yang menyediakan makanan dan minuman sehat bagi warga sekolah.', 'seed/kantin.jpeg', 'seed/kantin2.jpeg', 'seed/kantin3.jpeg', 5),
  ('Toilet', 'bi bi-droplet-fill', 'Toilet bersih yang terpisah untuk siswa laki-laki dan perempuan.', 'seed/toilet3.jpeg', null, null, 6);
