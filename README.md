# 살방살방 — 안동 강변 토요 러닝 기록

[Astro](https://astro.build/) 정적 사이트입니다. GitHub에 올린 뒤 **GitHub Actions → GitHub Pages**로 무료 배포할 수 있습니다.

**배포된 사이트:** [https://ehdcjf2142-kr.github.io/salbang-diary/](https://ehdcjf2142-kr.github.io/salbang-diary/)

## 로컬에서 보기

저장소 루트에서:

```bash
npm install
npm run dev
```

브라우저 주소는 **`http://localhost:4321/salbang-diary/`** 입니다.  
(`base`가 저장소 이름과 맞아야 합니다. 저장소 이름이 `salbang-diary`가 아니면 [astro.config.mjs](astro.config.mjs)의 `PUBLIC_BASE` 기본값을 바꾸세요.)

### 더블클릭으로 미리보기 (Windows)

프로젝트 폴더의 **`로컬에서보기.bat`** 또는 **`preview-local.bat`** 을 더블클릭하면 빌드 후 브라우저가 열립니다. **Node.js**가 설치되어 있어야 합니다. 끝내려면 검은 창에서 **Ctrl+C** 후 창을 닫으면 됩니다.

배치 파일 안에 한글이 있으면, 편집기가 UTF-8로 저장한 경우 **명령 프롬프트가 글자를 깨뜨리고** 이상한 오류가 날 수 있습니다. 그럴 때는 **`preview-local.bat`**(내용이 영문만 있음)을 쓰거나, 메모장에서 **다른 이름으로 저장 → 인코딩: ANSI**로 `로컬에서보기.bat`을 다시 저장하세요.

`dist/index.html`만 더블클릭해서 여는 방식(`file://`)은 이 프로젝트처럼 주소에 **`/salbang-diary/`** 같은 경로가 붙는 경우 글·CSS 링크가 깨지므로 권장하지 않습니다.

## GitHub Pages 배포

1. 이 프로젝트를 GitHub 저장소에 푸시합니다. (저장소 **이름**이 `astro.config.mjs`의 기본 `base` 경로 `/salbang-diary/`와 같으면 그대로 두면 됩니다.)
2. 저장소 **Settings → Pages**에서 **Source: GitHub Actions**를 선택합니다.
3. `main`에 푸시하면 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)이 빌드 후 Pages에 올립니다.
4. 사이트 주소: `https://<사용자이름>.github.io/<저장소이름>/`

빌드 시 `PUBLIC_SITE_URL` / `PUBLIC_BASE`는 워크플로에서 자동으로 채워집니다.

## 기록(글) 넣는 방법

공개 사이트 메뉴에는 **글 쓰기(admin)** 링크를 두지 않았습니다. 방문자는 읽기만 하고, 글은 저장소에 쓰기 권한이 있는 사람이 올립니다.

### 1) Decap CMS (`/admin/`) — 선택

`https://<사용자>.github.io/<저장소>/admin/` 에서 편집할 수 있게 [public/admin/config.yml](public/admin/config.yml)을 준비해 두었습니다.  
GitHub에 글을 저장하려면 **GitHub OAuth 앱**과 **OAuth 프록시**(예: Cloudflare Workers 등 커뮤니티 예제)가 필요합니다. [Decap 문서 — GitHub 백엔드](https://decapcms.org/docs/github-backend/)를 참고해 인증을 연결하세요.

`config.yml`에서 다음을 반드시 본인 값으로 바꿉니다.

- `backend.repo`
- `site_url`, `display_url`
- `public_folder` (예: 저장소 이름이 `my-run`이면 `/my-run/uploads`)

### 2) 저장소에 마크다운 직접 추가 (인증 없이)

GitHub 웹이나 모바일 앱에서 `src/content/posts/` 아래에 `.md` 파일을 추가해도 됩니다. 앞부분(프론트매터) 예시는 기존 `2026-05-10-welcome.md`를 복사하면 됩니다. 이미지는 `public/uploads/`에 넣고, 본문에는 `![설명](/저장소경로/uploads/파일명)` 형식으로 넣습니다 (프로젝트 사이트일 때 경로에 저장소 이름이 포함됩니다).

## 오픈채팅 링크 ([src/site.config.ts](src/site.config.ts))

- **`mode: 'hint'`** (기본): 안내 문구만 표시합니다. 카카오 초대 URL을 사이트에 직접 안 올립니다.
- **`mode: 'link'`** + `url`에 오픈채팅 초대 링크: 버튼으로 바로 열 수 있습니다.

필요할 때만 `link`로 바꾸는 것을 권장합니다.

## 라이선스

개인·모임용으로 자유롭게 수정해 사용하세요.
