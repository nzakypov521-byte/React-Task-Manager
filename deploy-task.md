# ТЗ: Деплой Task Manager на GitHub Pages

## Цель

Выкатить готовую тудушку в публичный доступ и настроить **автодеплой**: при попадании кода в `master` сайт сам пересобирается и обновляется. Бэкенда нет — это статика, поэтому GitHub Pages подходит идеально.

По итогу должна быть рабочая публичная ссылка вида:
`https://<твой-логин>.github.io/React-Task-Manager/`

---

## Ветка

Отдельная ветка от `dev`, как обычно:

```bash
git checkout dev
git pull
git checkout -b feature/deploy
```

В конце — PR в `dev`, после мёржа влить `dev` → `master` (пуш в `master` и запустит деплой).

---

## Что нужно сделать

### 1. Базовый путь в Vite

GitHub Pages отдаёт проект не с корня домена, а с подпути с именем репозитория (`/React-Task-Manager/`). Если это не указать — браузер будет искать JS/CSS не там, и откроется белый экран.

В `vite.config.ts` добавь `base` с именем репозитория (с слешами по краям, регистр важен — точно как имя репо):

```ts
export default defineConfig({
  base: '/React-Task-Manager/',
  plugins: [react()],
})
```

### 2. GitHub Actions workflow

Создай файл `.github/workflows/deploy.yml`. Он на каждый пуш в `master` собирает проект и публикует папку `dist` в Pages:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [master]
  workflow_dispatch:        # позволяет запускать вручную из вкладки Actions

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### 3. Включить Pages в настройках репозитория

GitHub → твой репозиторий → **Settings → Pages** → в разделе **Build and deployment** поле **Source** поставить **GitHub Actions** (не «Deploy from a branch»).

### 4. Запустить и проверить

- влей ветку до `master` (через PR в `dev`, затем `dev` → `master`) — это запустит workflow;
- либо для первой проверки запусти вручную: вкладка **Actions** → workflow «Deploy to GitHub Pages» → **Run workflow**;
- дождись зелёной галочки в Actions, открой ссылку из шага `deploy` (или из Settings → Pages);
- проверь, что сайт открывается, ассеты грузятся (нет белого экрана и 404 на js/css в консоли), задачи добавляются/сохраняются после F5.

### 5. Ссылку — в README и About

- добавь строку с живой ссылкой в `README.md`;
- на главной репозитория справа (шестерёнка **About**) тоже вставь ссылку в поле Website.

---

## Definition of Done

- [+] `base` в `vite.config.ts` равен имени репозитория.
- [+] есть `.github/workflows/deploy.yml`, в Actions он проходит зелёным.
- [+] в Settings → Pages источник = GitHub Actions.
- [ ] сайт открывается по публичной ссылке, ассеты грузятся, тудушка работает (добавление, чекбокс, фильтры, удаление, сохранение после F5).
- [ ] пуш в `master` автоматически обновляет задеплоенный сайт.
- [ ] ссылка добавлена в README и в About репозитория.
- [ ] всё прошло через PR (`feature/deploy` → `dev`), напрямую в `master`/`dev` не пушим.

---

## Полезно понимать по итогу

- зачем нужен `base` и что было бы без него;
- что делает workflow по шагам: `checkout` → `setup-node` → `npm ci` → `npm run build` → публикация `dist`;
- чем `npm run build` отличается от `npm run dev` (что вообще уезжает на Pages);
- почему деплоится именно `dist`, а не исходники.

## Если что-то пойдёт не так (частое)

- **белый экран / 404 на js и css** — почти всегда неправильный `base` (не совпадает с именем репо, забыты слеши, не тот регистр);
- **workflow падает на `npm ci`** — нет `package-lock.json` в репо или он рассинхронён с `package.json`;
- **Pages не обновляется** — проверь, что в Settings → Pages источник именно «GitHub Actions», и что пуш был в `master`.
