# J&B — Presente Interativo (PWA + pronto para APK)
## Rodar (web/PWA)
npm i
npm run dev

O app é instalável (PWA) no celular/PC. Use "Adicionar à Tela Inicial".

## Gerar APK (Android) – passo a passo com Capacitor
1. Instale Node, Android Studio e SDKs.
2. Init Capacitor:
   npm i @capacitor/core @capacitor/cli
   npx cap init "J&B" "com.jb.app"
3. Build web:
   npm run build
4. Adicione Android:
   npm i @capacitor/android
   npx cap add android
   npx cap copy
5. Abra no Android Studio e gere o APK:
   npx cap open android
   (Build > Build Bundle(s)/APK(s) > Build APK(s))

Fotos: `public/fotos` | Música: `public/musica.mp3` | Declaração: `src/App.jsx` (procure por TEXTO).
