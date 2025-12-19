## 調べる

- フォームバリデーション
- msw（サーバーサイドのほうできていない）
- orval（nuxt だと useFetch があるから、あまり使わないかも。。request や response の型を参照するくらい？） ※orval に client: vue-query というのがあったが、多分 TanStack Query 関連と思われる

## 済

- state 管理 pinia ／ inject provide
- storybook
- vitest
- tailwind

## storybook

- nuxt とバージョン合わない、ダウングレードも試したが、最新の nuxt だと storybook-vue/nuxt をインストールしようとしたときに vite のバージョンで不整合が起きる
  ⇒ 一旦作業保留。基本後回しで、時間あれば vue の sfc で storybook のコードを書く（※nuxt のオートインポートの影響ない範囲で書く）
