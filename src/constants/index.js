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
  },
  {
    title: "HTML/CSS",
    label: "HTML5, CSS3, Sass, CSS Frameworks, Emotion, Styled-Component",
    desc: [
      "HTML 구조와 DOM을 이해하고 HTML5 시멘틱 태그에 맞게 작성할 수 있습니다.",
      "Sass와 CSS 프레임워크(Bootstrap, Tailwind)를 활용해 레이아웃과 디자인을 구현할 수 있습니다.",
      "Media Query를 사용해 어떤 기기에도 대응하는 반응형 웹을 만들 수 있습니다.",
    ],
  },
  {
    title: "JavaScript",
    label: "JavaScript, ES6, jQuery, React, Vue.js",
    desc: [
      "ES6와 jQuery를 활용해 DOM을 제어하고 AJAX로 데이터를 가져올 수 있습니다.",
      "애니메이션 기능을 구현하여 웹 페이지를 더 부드럽고 생동감 있게 만들 수 있습니다.",
      "reduce, map, filter 등 다양한 고차함수를 적극적으로 활용합니다.",
    ],
  },
  {
    title: "Vue.js",
    label: "Vue.js, Vue3, Lifecycle Hooks, Vuex",
    desc: [
      "Vue.js 문법에 익숙하며 Vue3 버전의 <code>&#60;script setup&#62;</code> 문법으로 Composition-API를 더 효율적으로 사용할 수 있습니다.",
      "Lifecycle Hooks를 능숙하게 사용가능하며 DOM 제어에 익숙합니다.",
      "Vuex 상태관리 라이브러리를 통해 자주 쓰이는 데이터와 함수의 재사용이 가능합니다.",
    ],
  },
  {
    title: "React",
    label: "JSX, React Hooks, React-Router-Dom, Redux, Context API",
    desc: [
      "JSX문법과 React hooks를 능숙하게 사용하고, 함수형 컴포넌트를 기반으로 컴포넌트를 작성합니다.",
      "React-Router-Dom을 사용하여 SPA 내부에서 페이지를 전환할 수 있습니다.",
      "Redux와 ContextAPI를 적절히 사용하여 State의 상태관리를 할 수 있습니다.",
    ],
  },
  {
    title: "TypeScript",
    label: "interface, type alias, public, private, protected, static",
    desc: [
      "TypeScript를 활용해 웹 어플리케이션을 제작하는 데 익숙합니다.",
      "때에 따라 interface와 type alias을 적절히 나누어 사용 할 수 있습니다.",
      "Utility Type들을 활용해 약간 복잡한 Type들을 생성하여 개발할 수 있습니다.",
    ],
  },
  {
    title: "Next.js",
    label: "SSR, MongoDB, Routing, AWS",
    desc: [
      "MongoDB 라이브러리를 사용해 DB 데이터를 저장하고 출력할 수 있습니다.",
      "Next.js 자동 라우팅 기능을 이용해 페이지 이동이 가능합니다.",
      "AWS Elastic Beanstalk에 Next.js서버를 배포할 수 있습니다.",
    ],
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
    title: "뷰 사이트 / Youtube, Unsplash, Movie & TV",
    stack: "Vue.js, Sass, Responsive, WebStandard, CompositionAPI, Swiper.js, Netlify",
    video: vueSiteVideo,
    link: ["https://seoeun-vuesite.netlify.app/", "https://github.com/SeoeunCho/site2023-vue"],
  },
  {
    title: "트위터 사이트 / React CRUD",
    stack: "React, Tailwind, Recoil, Firebase(auth, storage / 구글 로그인, 보안, 통신), Vercel",
    video: reactSiteVideo,
    link: ["demo", "code"],
  },
  {
    title: "맛집 지도 / Next.js",
    stack: "Next.js, Tailwind, Prisma, Supabase, Next-auth, React-query, React-hook-form, Kakao map API, GoDaddy",
    video: reactSiteVideo,
    link: ["demo", "code"],
  },
  // {
  //   title: "여행 예약 홈페이지 / React + TypeScript",
  //   stack: "React, TypeScript, Recoil, Emotion, Firebase, Vercel",
  //   video: reactSiteVideo,
  //   link: ["demo", "code"],
  // },
  {
    title: "청첩장 홈페이지 / React",
    stack: "React, TypeScript, Sass, React-query, Firebase, ContextAPI",
    video: reactSiteVideo,
    link: ["demo", "code"],
  },
  {
    title: "리엑트 사이트 / Youtube, Unsplash, Movie & TV",
    stack: "React, Sass, Responsive, WebStandard, React Router Dom, Swiper.js, Netlify",
    video: reactSiteVideo,
    link: ["https://seoeun-reactsite.netlify.app/", "https://github.com/SeoeunCho/site2023-react"],
  },
  // {
  //   title: "To Do App / GraphQL",
  //   stack: "GraphQL, Tailwind, Apollo Client, useMutation",
  //   video: reactSiteVideo,
  //   link: ["demo", "code"],
  // },
  // {
  //   title: "ToDo App / GraphQL, CI/CD",
  //   stack: "Docker, Github Action, AWS CloudFront",
  //   video: reactSiteVideo,
  //   link: ["demo", "code"],
  // },
  {
    title: "GC녹십자아이메드 / Renewal Site",
    stack: "HTML/CSS, JavaScript, jQuery",
    video: renewalSite01Video,
    link: ["https://seoeuncho.github.io/renewal1/", "https://github.com/SeoeunCho/renewal1"],
  },
  {
    title: "에스쁘아 / Renewal Site",
    stack: "HTML/CSS, JavaScript, jQuery",
    video: renewalSite02Video,
    link: ["https://seoeuncho.github.io/renewal2", "https://github.com/SeoeunCho/renewal2"],
  },
  {
    title: "메가박스 / WebStandard Site",
    stack: "HTML/CSS, Responsive, JavaScript, jQuery, Swiper.js, Youtube API",
    video: megaboxSiteVideo,
    link: ["https://seoeuncho.github.io/MegaboxSite/", "https://github.com/SeoeunCho/MegaboxSite"],
  },
  {
    title: "포트폴리오 사이트",
    stack: "HTML/CSS, Responsive, JavaScript, jQuery",
    video: portfolioSiteVideo,
    link: ["https://seoeuncho.github.io/Portfolio01/", "https://github.com/SeoeunCho/Portfolio01"],
  },
];
