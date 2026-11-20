// Yayınlamadan önce menü dosyalarını doğrular: node check.mjs
import fs from 'node:fs';
const menu = JSON.parse(fs.readFileSync(new URL('./menu.json', import.meta.url)));
const { branches } = JSON.parse(fs.readFileSync(new URL('./branches.json', import.meta.url)));
const errs = [], ids = new Set();
if (!Array.isArray(menu.categories) || !menu.categories.length) errs.push('kategori yok');
for (const c of menu.categories ?? []) for (const it of c.items ?? []) {
  if (ids.has(it.id)) errs.push(`tekrarlanan id: ${it.id}`); ids.add(it.id);
  if (!it.name) errs.push(`adsız ürün: ${it.id}`);
  if (!Number.isFinite(it.price) || it.price <= 0) errs.push(`geçersiz fiyat: ${it.name} = ${it.price}`);
  if (it.options && !menu.optionSets?.[it.options]) errs.push(`seçenek seti yok: ${it.name} -> ${it.options}`);
}
for (const b of branches ?? []) if (!/^90\d{10}$/.test(b.whatsapp)) errs.push(`WhatsApp numarası hatalı: ${b.name} = ${b.whatsapp}`);
if (errs.length) { console.error('HATA:\n- ' + errs.join('\n- ')); process.exit(1); }
console.log(`Tamam: ${ids.size} ürün, ${branches.length} şube.`);
