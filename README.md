# POV Burger — menü verisi

POV Burger mobil uygulaması menüyü, fiyatları ve şube bilgilerini bu depodan okur.
Buradaki `menu.json` güncellendiğinde uygulama bir sonraki açılışta yeni fiyatları gösterir;
App Store / Google Play'e yeni sürüm göndermek gerekmez.

- `menu.json` — kategoriler, ürünler, fiyatlar (TL, KDV dahil), alerjenler, menü seçenekleri, çalışma saatleri
- `branches.json` — şubeler ve WhatsApp sipariş numaraları
- `check.mjs` — yayınlamadan önce doğrulama: `node check.mjs`
