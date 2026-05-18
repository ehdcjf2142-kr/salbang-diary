# salbang-diary — 새 채팅용 (짧게)

에이전트는 이 파일만 읽고 작업하면 됨. 나머지 히스토리 불필요.

## 글 한 편 추가

1. 파일: `src/content/posts/YYYY-MM-DD-영문슬러그.md` (슬러그: `a-z0-9-`만)
2. 맨 위 YAML:

```yaml
---
title: 제목
date: YYYY-MM-DD
summary: 한 줄 요약 (없으면 줄 삭제)
---
```

3. `---` 다음 줄부터 마크다운 본문.
4. **글 속 사진(선택):** `public/uploads/`에 넣고 본문에  
   `![](/salbang-diary/uploads/파일명.jpg)`  
   저장소 이름이 `salbang-diary`가 아니면 `astro.config.mjs`의 `base`와 동일한 경로로 맞출 것.  
   (홈 히어로·로고 등 **사이트 꾸밈**용 이미지는 `src/assets/images/` — 에이전트가 옮겨 두면 됨.)
5. `npm run build`로 확인. 사용자가 배포 원하면 `git push`.

`photos` 프론트필드는 선택. 본문 이미지만 써도 됨.

## 사이트 구조 (참고)

- `/` — 이 모임은 (랜딩, 히어로·소개)
- `/records/` — 기록 목록 (텍스트만, 2026-05-10 이후 글)
- `/about/` — `/` 로 리다이렉트

## 템플릿 복사

`docs/new-post.template.md` 복사 후 날짜·제목만 바꿔도 됨.

---

## 사용자 → 새 채팅에 붙여넣기 (이 블록만)

```
c:\dev\salbang-diary — AGENTS.md 기준으로 회차 글 추가해줘.
날짜: YYYY-MM-DD
제목: …
본문:
(여기 글)
푸시까지 해줘 / 푸시는 내가 할게
```

이미지 있으면 한 줄 추가: `이미지: (설명 또는 파일 경로)` 또는 GitHub에 올릴 파일을 알려주기.
