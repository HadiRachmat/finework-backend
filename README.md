. # 🛒 app-finework-backend

Backend untuk aplikasi Finework — layanan REST sederhana menggunakan Express dan Prisma.

## Ringkasan

Proyek ini adalah backend Node.js yang menggunakan:
# app-finework-backend

Backend untuk aplikasi Finework — REST API sederhana berbasis Node.js, Express, dan Prisma.

## Ringkasan singkat

Repo ini menyediakan struktur backend dengan:

- Express sebagai web framework
- Prisma sebagai ORM (client sudah ada di `generated/prisma`)
- dotenv untuk konfigurasi environment
- Auth dasar menggunakan JWT dan bcrypt
- File upload dengan multer

## Persyaratan

- Node.js 18+ (direkomendasikan)
- npm atau yarn

## Instalasi

1. Clone repo dan masuk ke folder proyek.
2. Install dependensi:

```bash
npm install
# atau
yarn install
```

3. Buat file `.env` di root berdasarkan contoh di bawah.

## Contoh `.env` (contoh minimal)

```
DATABASE_URL="file:./dev.db"
JWT_SECRET=your_jwt_secret
PORT=3000
```

Sesuaikan `DATABASE_URL` jika menggunakan Postgres/MySQL.

## Prisma

Schema Prisma ada di `prisma/schema.prisma`. Perintah yang umum digunakan:

```bash
# generate prisma client
npx prisma generate

# jalankan migrasi di development
npx prisma migrate dev --name init
```

Catatan: folder `generated/prisma` nampaknya berisi client yang sudah digenerate; jika Anda mengubah schema, jalankan `npx prisma generate`.

## Script NPM yang tersedia

Periksa `package.json` — ada script `dev` untuk development:

```json
"scripts": {
	"test": "echo \"Error: no test specified\" && exit 1",
	"dev": "nodemon src/main.js"
}
```

Anda bisa menambahkan `start`:

```json
"start": "node src/main.js",
"dev": "nodemon src/main.js"
```

## Menjalankan server

Development (dengan nodemon):

```bash
npm run dev
```

Production (contoh):

```bash
npm start
```

## Struktur proyek (ringkas)

- `main.js` (entry jika ada di root) atau `src/main.js` (digunakan oleh script `dev`)
- `src/` - kode sumber
	- `application/` - services / use-cases
	- `configuration/` - App config, Database init
	- `domain/` - entitas / value objects
	- `error/` - error response helper
	- `helpers/` - utilitas
	- `infrastructur/` - repository, mappers, prisma adapters
	- `interface/` - controllers, routes
	- `middleware/` - auth middleware
	- `validation/` - Joi validation schemas
- `prisma/` - Prisma schema
- `generated/prisma/` - Prisma client dan runtime

## Environment variables penting

- DATABASE_URL - connection string untuk Prisma
- JWT_SECRET - secret JWT
- PORT - port untuk server

## Rekomendasi & Next steps

- Tambahkan `start` script ke `package.json` (saya bisa tambahkan jika diizinkan).
- Buat file `.env.example` di repo untuk memudahkan onboarding.
- Tambahkan dokumentasi endpoint dasar (containing examples) jika perlu.
- Tambahkan testing minimal dan CI pipeline.

## Kontak

Author: Hadi Rachmat S

---

Jika Anda ingin saya menambahkan `.env.example` atau memperbarui `package.json` untuk menambahkan `start` script sekarang, beri tahu dan saya akan lanjutkan.
