import skillHTML from "../assets/img/skill_html.png";
import skillCSS from "../assets/img/skill_css.png";
import skillJS from "../assets/img/skill_javascript.png";
import skillVue from "../assets/img/skill_vue.png";
import skillReact from "../assets/img/skill_react.png";
import skillTS from "../assets/img/skill_typescript.png";
import skillNextjs from "../assets/img/skill_nextjs.png";

import vueSiteVideo from "../assets/videos/vue_site.mp4";
import reactSiteVideo from "../assets/videos/react_site.mp4";
import renewalSite01Video from "../assets/videos/gcimed_site.mp4";
import renewalSite02Video from "../assets/videos/espoir_site.mp4";
import megaboxSiteVideo from "../assets/videos/megabox_site.mp4";
import portfolioSiteVideo from "../assets/videos/portfolio_site.mp4";

export const mobileMenuData = [
  { title: "About", label: "#about" },
  { title: "Skills", label: "#skills" },
  { title: "Projects", label: "#projects" },
  { title: "Career", label: "#career" },
  { title: "Contact", label: "#contact" },
];

export const skillsData = [
  {
    title: "Overall",
    label: "",
    desc: [
      "주도성을 갖고 솔선수범하는 마인드를 최우선으로 합니다.",
      "클린코드 작성을 위해 노력합니다.",
      "맡은 서비스를 사용자 입장에서 고민하여 개발합니다.",
      "배려와 이해를 기반으로 다양한 직군과 원활한 커뮤니케이션을 바탕으로 협업합니다.",
      "협업툴(Slack, Jira, Confluence) 사용에 익숙합니다.",
      "새로운 기술에 호기심이 많고 도전하여 얻은 경험을 공유하고 함께 성장하는 것을 즐깁니다.",
    ],
    logo: [],
  },
  {
    title: "HTML/CSS",
    label: "HTML5, CSS3, Sass, CSS Frameworks, Emotion, Styled-Component",
    desc: [
      "HTML 구조와 DOM을 이해하고 HTML5 시멘틱 태그에 맞게 작성할 수 있습니다.",
      "Sass와 CSS 프레임워크(Bootstrap, Tailwind)를 활용해 레이아웃과 디자인을 구현할 수 있습니다.",
      "Media Query를 사용해 어떤 기기에도 대응하는 반응형 웹을 만들 수 있습니다.",
    ],
    logo: [skillHTML, skillCSS],
  },
  {
    title: "JavaScript",
    label: "JavaScript, ES6, jQuery, React, Vue.js",
    desc: [
      "ES6와 jQuery를 활용해 DOM을 제어하고 AJAX로 데이터를 가져올 수 있습니다.",
      "애니메이션 기능을 구현하여 웹 페이지를 더 부드럽고 생동감 있게 만들 수 있습니다.",
      "reduce, map, filter 등 다양한 고차함수를 적극적으로 활용합니다.",
    ],
    logo: [skillJS],
  },
  {
    title: "Vue.js",
    label: "Vue.js, Vue3, Lifecycle Hooks, Vuex",
    desc: [
      "Vue.js 문법에 익숙하며 Vue3 버전의 <code>&#60;script setup&#62;</code> 문법으로 Composition-API를 더 효율적으로 사용할 수 있습니다.",
      "Lifecycle Hooks를 능숙하게 사용가능하며 DOM 제어에 익숙합니다.",
      "Vuex 상태관리 라이브러리를 통해 자주 쓰이는 데이터와 함수의 재사용이 가능합니다.",
    ],
    logo: [skillVue],
  },
  {
    title: "React",
    label: "JSX, React Hooks, React-Router-Dom, Redux, Context API",
    desc: [
      "JSX문법과 React hooks를 능숙하게 사용하고, 함수형 컴포넌트를 기반으로 컴포넌트를 작성합니다.",
      "React-Router-Dom을 사용하여 SPA 내부에서 페이지를 전환할 수 있습니다.",
      "Redux와 ContextAPI를 적절히 사용하여 State의 상태관리를 할 수 있습니다.",
    ],
    logo: [skillReact],
  },
  {
    title: "TypeScript",
    label: "interface, type alias, public, private, protected, static",
    desc: [
      "TypeScript를 활용해 웹 어플리케이션을 제작하는 데 익숙합니다.",
      "때에 따라 interface와 type alias을 적절히 나누어 사용 할 수 있습니다.",
      "Utility Type들을 활용해 약간 복잡한 Type들을 생성하여 개발할 수 있습니다.",
    ],
    logo: [skillTS],
  },
  {
    title: "Next.js",
    label: "SSR, MongoDB, Routing, AWS",
    desc: [
      "MongoDB 라이브러리를 사용해 DB 데이터를 저장하고 출력할 수 있습니다.",
      "Next.js 자동 라우팅 기능을 이용해 페이지 이동이 가능합니다.",
      "AWS Elastic Beanstalk에 Next.js서버를 배포할 수 있습니다.",
    ],
    logo: [skillNextjs],
  },
  // {
  //   title: "GraphQL",
  //   label: "API, Resolvers, Apollo",
  //   desc: [
  //     "Express GraphQL Server를 생성할 수 있습니다.",
  //     "Resolvers 모듈화를 할 수 있습니다.",
  //     "Apollo Server 4로 마이그레이션하여 개인프로젝트를 만든 경험이 있습니다.",
  //   ],
  // },
  // {
  //   title: "State Management",
  //   label: "Redux, Recoil, MobX, ReactQuery, Zustand, Context API",
  //   desc: ["작성 전 입니다.", "작성 전 입니다.", "작성 전 입니다."],
  // },
  // {
  //   title: "BackEnd & DB",
  //   label: "Firebase, Node.js, Prisma, Vercel, Express, GraphQL",
  //   desc: ["작성 전 입니다.", "작성 전 입니다.", "작성 전 입니다."],
  // },
  // {
  //   title: "CI/CD",
  //   label: "Docker, Github Action, AWS CloudFront",
  //   desc: ["작성 전 입니다.", "작성 전 입니다.", "작성 전 입니다."],
  // },
];

export const projectsData = [
  {
    title: "뷰 사이트 / Youtube, Unsplash, Movie 반응형 웹",
    stack: "Vue.js, Sass, CompositionAPI, Swiper.js, Netlify",
    video: vueSiteVideo,
    link: ["https://seoeun-vuesite.netlify.app/", "https://github.com/SeoeunCho/site2023-vue"],
    info: "이 프로젝트는 여러 가지 API사용에 익숙해지는 과정을 담은 Vue.js 사이트입니다. Youtube, Unsplash, TMDB(The Movie Database) API를 Postman사이트를 이용하여 데이터를 분류하고 그 중에서 원하는 데이터만 가져와 사용했습니다. 유튜브 영상 / 이미지 / 영화 목록과 검색이 가능합니다. 웹표준을 준수하며, Sass와 Media Query를 사용해 어떤 기기에도 대응하는 반응형으로 작업했습니다. Prettier, ESlint를 이용해 문법에 오류가 없도록 작업하며 코드정리를 하였습니다.",
  },
  {
    title: "트위터 사이트 / React SNS 실시간 데이터 업데이트",
    stack: "React, Tailwind, Recoil, Firebase(auth, storage / 구글 로그인, 보안, 통신), Vercel",
    video: reactSiteVideo,
    link: ["demo", "code"],
    info: "이 프로젝트는 반응형 웹 개발 프로젝트 실시간 트위터 프로젝트입니다.",
  },
  {
    title: "맛집 지도 홈페이지 / Next.js SSR 외부 API 사용",
    stack: "Next.js, Tailwind, Prisma, Supabase, Next-auth, React-query, React-hook-form, Kakao map API, GoDaddy",
    video: reactSiteVideo,
    link: ["demo", "code"],
    info: "이 프로젝트는 Next.js 완벽 학습을 위한 맛집 지도 프로젝트입니다.",
  },
  // {
  //   title: "여행 예약 홈페이지 / React + TypeScript",
  //   stack: "React, TypeScript, Recoil, Emotion, Firebase, Vercel",
  //   video: reactSiteVideo,
  //   link: ["demo", "code"],
  //   info: "",
  // },
  {
    title: "청첩장 홈페이지 / React 멀티미디어 콘텐츠 최적화",
    stack: "React, TypeScript, Sass, React-query, Firebase, ContextAPI",
    video: reactSiteVideo,
    link: ["demo", "code"],
    info: "이 프로젝트는 웹 어플리케이션의 주요 리소스 최적화로 파일 크리를 줄이는 방법을 학습하기 위해 만들었습니다.",
  },
  {
    title: "리액트 사이트 / Youtube, Unsplash, Movie 반응형 웹",
    stack: "React, Sass, React Router Dom, Swiper.js, Netlify",
    video: reactSiteVideo,
    link: ["https://seoeun-reactsite.netlify.app/", "https://github.com/SeoeunCho/site2023-react"],
    info: "이 프로젝트는 여러 가지 API사용에 익숙해지는 과정을 담은 React 사이트입니다. Youtube, Unsplash, TMDB(The Movie Database) API를 Postman사이트를 이용하여 데이터를 분류하고 그 중에서 원하는 데이터만 가져와 사용했습니다. 유튜브 영상 / 이미지 / 영화 목록과 검색이 가능합니다. 웹표준을 준수하며, Sass와 Media Query를 사용해 어떤 기기에도 대응하는 반응형으로 작업했습니다. Prettier, ESlint를 이용해 문법에 오류가 없도록 작업하며 코드정리를 하였습니다.",
  },
  // {
  //   title: "To Do App / GraphQL",
  //   stack: "GraphQL, Tailwind, Apollo Client, useMutation",
  //   video: reactSiteVideo,
  //   link: ["demo", "code"],
  //   info: "",
  // },
  // {
  //   title: "ToDo App / GraphQL, CI/CD",
  //   stack: "Docker, Github Action, AWS CloudFront",
  //   video: reactSiteVideo,
  //   link: ["demo", "code"],
  //   info: "",
  // },
  {
    title: "GC녹십자아이메드 사이트 / 웹표준 준수 리뉴얼 웹",
    stack: "HTML/CSS, JavaScript, jQuery",
    video: renewalSite01Video,
    link: ["https://seoeuncho.github.io/renewal1/", "https://github.com/SeoeunCho/renewal1"],
    info: "GC녹십자아이메드 사이트를 리뉴얼했습니다. 처음으로 제작한 웹사이트라서 꽤 긴 시간을 들여서 작업했습니다. 우선 현 사이트는 남녀노소, 나이불문 다양한 사용자가 이용하기 때문에 전 국민이 편리하게 이용하는 국민건강보험공단 사이트의 디자인을 참고하여 개발했습니다. 빠른 정보취득을 위한 검색창과 퀵메뉴, 탭메뉴를 구성하고 아이콘을 많이 배치해 빠른 의미전달을 돕고자 했습니다. 부드럽고 깔끔한 이미지를 주기 위해 둥근 테두리를 사용하고 로고의 색상을 가져와 통일감을 주었습니다.",
  },
  {
    title: "에스쁘아 사이트 / 웹표준 준수 리뉴얼 웹",
    stack: "HTML/CSS, JavaScript, jQuery",
    video: renewalSite02Video,
    link: ["https://seoeuncho.github.io/renewal2", "https://github.com/SeoeunCho/renewal2"],
    info: "에스쁘아 사이트를 리뉴얼했습니다. 에스쁘아의 웹사이트를 통해 제품의 광고효과와 수익창출을 높일 수 있도록 리뉴얼한 작업물입니다. 다양한 상품을 섹션별로 배치하였으며 장바구니/구매/찜하기 아이콘을 배치하였습니다. Overview까지 제작했습니다.",
  },
  {
    title: "메가박스 사이트 / 웹표준 준수 반응형 웹",
    stack: "HTML/CSS, JavaScript, jQuery, Swiper.js, Youtube API",
    video: megaboxSiteVideo,
    link: ["https://seoeuncho.github.io/MegaboxSite/", "https://github.com/SeoeunCho/MegaboxSite"],
    info: "메가박스 반응형 사이트입니다. 웹표준을 준수하며 모든 기기에 유연하게 대응하는 반응형 사이트입니다. Swiper 플러그인을 적용하여 배너와 차트 탭, 이미지 슬라이드, 동영상 등 다양하면서도 편리한 기능을 담은 기업형 웹사이트로 작업했습니다.",
  },
  {
    title: "포트폴리오 사이트 / 웹표준 준수 반응형 웹",
    stack: "HTML/CSS, JavaScript, jQuery",
    video: portfolioSiteVideo,
    link: ["https://seoeuncho.github.io/Portfolio01/", "https://github.com/SeoeunCho/Portfolio01"],
    info: "이 포트폴리오는 자기소개와 그동안 작업한 프로젝트들을 담은 첫 번째 포트폴리오 사이트입니다. 웹표준을 준수하며, 어떤 기기에도 대응하는 반응형으로 작업했습니다. Prettier, ESlint를 이용해 문법에 오류가 없도록 작업하며 코드정리를 하였습니다.",
  },
];
