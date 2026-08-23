# 박혜진 자기소개 홈페이지

| 항목 | 주소 |
|---|---|
| **내 사이트** | https://hyejin-me.vercel.app |
| **GitHub 저장소** | https://github.com/markejin/hyejin-me |
| **내 컴퓨터 폴더** | `~/Desktop/내홈페이지` |

---

## 다시 고치고 싶을 때

1. **폴더를 열고 클로드 코드를 켠다** — 이 폴더(`~/Desktop/내홈페이지`)에서 클로드 코드를 실행하고,
   고치고 싶은 것을 말로 설명한다.
   예: "소개 글 두 번째 문단을 이렇게 바꿔줘", "관심사에 '데이터 분석' 추가해줘"

2. **내 컴퓨터에서 먼저 확인한다**

   ```bash
   npm run dev
   ```

   그다음 브라우저에서 http://localhost:3000 을 연다.
   (`localhost` = 내 컴퓨터 안에서만 열리는 주소. 아직 인터넷에는 반영되지 않은 상태)
   확인이 끝나면 터미널에서 `Control + C` 를 눌러 끈다.

3. **인터넷에 반영한다**

   ```bash
   git add -A && git commit -m "수정" && git push
   vercel --prod
   ```

   - 위 줄: 바뀐 내용을 GitHub 저장소에 기록한다
   - 아래 줄: 실제 사이트에 새로 올린다

> **참고 — GitHub 자동 배포가 아직 연결되지 않았습니다.**
> 지금은 `git push` 만으로는 사이트가 바뀌지 않고, `vercel --prod` 를 한 번 더 쳐야 합니다.
> 아래 "자동 배포 연결하기" 를 한 번 해두면 그다음부터는 `git push` 만으로 사이트가 자동으로 갱신됩니다.

---

## 자동 배포 연결하기 (한 번만 하면 됨)

1. https://vercel.com 에 로그인한다 (GitHub 계정으로)
2. `hyejin-me` 프로젝트를 클릭한다
3. **Settings → Git** 으로 간다
4. **Connect Git Repository** 를 눌러 `markejin/hyejin-me` 를 고른다
5. 중간에 GitHub 이 "Vercel 앱을 설치하시겠습니까?" 라고 물으면 **Install / Authorize** 를 누른다

이 과정이 필요한 이유: Vercel 이 내 GitHub 저장소를 들여다볼 수 있게 허락하는 절차인데,
브라우저에서 직접 버튼을 눌러야만 되는 부분이라 명령어만으로는 되지 않는다.

---

## 내 도메인을 붙이고 싶을 때

`hyejin-me.vercel.app` 대신 직접 산 주소(예: `hyejin.kr`)를 쓰고 싶다면:

1. https://vercel.com 에서 `hyejin-me` 프로젝트를 연다
2. **Settings → Domains** 로 간다
3. 가지고 있는 도메인 주소를 입력하고, 화면에 나오는 안내대로 도메인 산 곳(가비아, 후이즈 등)에 설정값을 넣는다

---

## 이 사이트가 무엇으로 만들어졌나

- **Next.js** — 웹사이트를 만드는 도구
- **Tailwind CSS · shadcn/ui** — 화면을 꾸미는 도구
- **Pretendard** (본문) · **나눔손글씨 펜** (손글씨 부분) — 글꼴
- **Vercel** — 만든 사이트를 인터넷에 올려주는 서비스 (무료)

주요 파일:

- `src/app/page.tsx` — 페이지에 보이는 **글과 순서**
- `src/app/globals.css` — **색과 배경 괘선**
- `src/app/layout.tsx` — **글꼴**, 카톡 링크 미리보기 문구

Built with Claude Code
