# HOPPANGDEV — Studio Website

HOPPANGDEV의 공식 소개 홈페이지. React + TypeScript + Vite로 제작한 정적 웹사이트이며, 게임 실행 원본 소스는 포함하지 않습니다.

## 공개 정보의 근거

`hoppangdev/hoppangdev.github.io` 저장소에서 확인한 **Bathtub Blastoff (날아라 욕조!)**의 공개 소개/지원 내용을 기반으로 작성했습니다.

- 무료 브라우저 게임 (기존 소개 페이지 기준)
- 스팀 부스터, 캐릭터 특기, 부품 업그레이드
- 메인 스테이지 8개, 12개 언어 지원 (기존 지원 문서 기준)
- 게임 개인정보 처리방침, 이용약관, 지원 페이지는 **기존 GitHub Pages 주소로 연결**

게임 실행 파일이나 로컬 프로젝트는 이 저장소에 넣지 않습니다. 게임 출시 상태는 실제 상황에 맞게 검토하여 수정하세요.

## 로컬 실행

Node.js 20.19+ 또는 22.12+ 권장 (Vite 7 요구 사항).

```bash
npm install
npm run dev
```

브라우저에 출력되는 로컬 주소(보통 http://localhost:5173)에서 확인하세요.

빌드 검증:

```bash
npm run build
npm run preview
```

## Cloudflare Pages: 무료 GitHub 자동 배포

1. GitHub 계정 `hoppangdev`에서 **새 공개 저장소 `hoppangdev-site`**를 생성합니다. **기존 `hoppangdev.github.io` 저장소는 그대로 둡니다.**
2. 이 프로젝트의 파일을 새 저장소에 올립니다 (`node_modules`나 `dist` 제외).
3. Cloudflare 대시보드 → **Workers & Pages → Create application → Pages → Connect to Git / Import an existing Git repository**.
4. `hoppangdev/hoppangdev-site`를 선택합니다.
5. Build settings:
   - Framework preset: **React (Vite)** 혹은 **Vite**
   - Production branch: **main**
   - Build command: **npm run build**
   - Build output directory: **dist**
   - Root directory: **/** (repo root)
6. Save and Deploy. `<프로젝트명>.pages.dev`를 먼저 테스트합니다.
7. Cloudflare DNS의 `hoppangdev.shop` 상태가 Active가 되면 Pages 프로젝트 → **Custom domains → Set up a custom domain** → `hoppangdev.shop`을 연결합니다.
8. `www.hoppangdev.shop`은 필요 시 추가하고 한쪽으로 리다이렉트합니다.

Cloudflare 공식 문서: https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/

## 회사 이메일

`src/App.tsx`의 `contactEmail`은 **현재 작동이 확인된** `hoppangdev@gmail.com`을 사용합니다. Cloudflare Email Routing을 설정하여 `contact@hoppangdev.shop` 수신을 테스트한 후에만 해당 상수를 회사 주소로 변경하세요.

- 수신: Cloudflare DNS → Email Routing → Destination addresses: `hoppangdev@gmail.com` 인증 → Custom address `contact@hoppangdev.shop`
- **Cloudflare Email Routing은 발신 메일을 제공하지 않습니다.** 회사 도메인에서 답장하려면 별도 발신 서비스가 필요합니다.

## 수정 지점

- 게임 소개/언어별 문구: `src/App.tsx`의 `i18n`
- 게임 도움말, 약관 등: `src/App.tsx`의 `gameDocs`
- 연락 이메일: `src/App.tsx`의 `contactEmail`
- 디자인 및 색상: `src/styles.css`
- 게임 일러스트: `src/components/BathArt.tsx` (실제 스크린샷이 **아닌 장식용 SVG**)
- 브랜드 마크: `src/components/BunLogo.tsx`, `public/favicon.svg` (기존 공개 브랜드 자산과 일치하는 스타일)

## 중요한 주의사항

- 실제 출시 상태를 확인하지 않았으므로 'In development'로 표시합니다.
- 게임 판매/배포 플랫폼 링크는 실제 공개될 때 추가합니다. Poki/CrazyGames/Playgama 문서의 플랫폼 예시는 출시 사실을 보증하지 않습니다.
- 홈은 스튜디오 소개 목적이며 **법적으로 설립된 회사나 투자 유치 이력은 주장하지 않습니다.**
- 페이지 제작/배포만으로 Claude 스타트업 프로그램의 자격이나 승인 여부가 확정되는 것은 아닙니다.
