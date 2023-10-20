import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="home-skills" data-block="home-skills">
      <div className="container">
        <div className="home-skills__inner">
          <div className="skills__wrap">
            <ul className="skills__panels grid">
              <li className="skills__panel col-12 col-tablet-6 col-desktop-3">
                <div className="skills__content">
                  <h3 className="body-4 skills__heading">HTML/CSS</h3>
                  <div className="skills__description">
                    <p>&#123;HTML5, CSS3, Sass, CSS Frameworks, Emotion, Styled-Component&#125;</p>
                  </div>
                  <ul className="skills__benefits">
                    <li className="skills__benefit">HTML 구조와 DOM을 이해하고 HTML5 시멘틱 태그에 맞게 작성할 수 있습니다.</li>
                    <li className="skills__benefit">
                      Sass와 CSS 프레임워크(Bootstrap, Tailwind)를 활용해 레이아웃과 디자인을 구현할 수 있습니다.
                    </li>
                    <li className="skills__benefit">Media Query를 사용해 어떤 기기에도 대응하는 반응형 웹을 만들 수 있습니다.</li>
                  </ul>
                </div>
              </li>
              <li className="skills__panel col-12 col-tablet-6 col-desktop-3">
                <div className="skills__content">
                  <h3 className="body-4 skills__heading">JavaScript</h3>
                  <div className="skills__description">
                    <p className="js-description-core">&#123;JavaScript, ES6, jQuery, React, Vue.js&#125;</p>
                  </div>
                  <ul className="skills__benefits">
                    <li className="skills__benefit">ES6와 jQuery를 활용해 DOM을 제어하고 AJAX로 데이터를 가져올 수 있습니다.</li>
                    <li className="skills__benefit">애니메이션 기능을 구현하여 웹 페이지를 더 생동감 있게 만들 수 있습니다.</li>
                    <li className="skills__benefit">reduce, map, filter 등 다양한 고차함수를 적극적으로 활용합니다.</li>
                  </ul>
                </div>
              </li>
              <li className="skills__panel col-12 col-tablet-6 col-desktop-3">
                <div className="skills__content">
                  <h3 className="body-4 skills__heading">Vue.js</h3>
                  <div className="skills__description">
                    <p className="js-description-core">&#123;Vue.js, Vue3, Lifecycle Hooks, Vuex&#125;</p>
                  </div>
                  <ul className="skills__benefits">
                    <li className="skills__benefit">Vue.js 문법에 익숙하며 Vue3 버전의 <code>&#60;script setup&#62;</code> 문법으로 Composition-API를 더 효율적으로 사용할 수 있습니다.</li>
                    <li className="skills__benefit">Lifecycle Hooks를 능숙하게 사용가능하며 DOM 제어에 익숙합니다.</li>
                    <li className="skills__benefit">Vuex 상태관리 라이브러리를 통해 자주 쓰이는 데이터와 함수 재사용이 가능합니다.</li>
                  </ul>
                </div>
              </li>
              <li className="skills__panel col-12 col-tablet-6 col-desktop-3">
                <div className="skills__content">
                  <h3 className="body-4 skills__heading">React</h3>
                  <div className="skills__description">
                    <p className="js-description-core">&#123;JSX, React Hooks, React-Router-Dom, Redux, Context API&#125;</p>
                  </div>
                  <ul className="skills__benefits">
                    <li className="skills__benefit">
                      JSX문법과 React hooks를 능숙하게 사용하고, 함수형 컴포넌트를 기반으로 컴포넌트를 작성합니다.
                    </li>
                    <li className="skills__benefit">React-Router-Dom을 사용하여 SPA 내부에서 페이지를 전환할 수 있습니다.</li>
                    <li className="skills__benefit">Redux와 ContextAPI를 적절히 사용하여 State의 상태관리를 할 수 있습니다.</li>
                  </ul>
                </div>
              </li>
              {/* <li className="skills__panel col-12 col-tablet-6 col-desktop-3">
                <div className="skills__content">
                  <h3 className="body-4 skills__heading">TypeScript</h3>
                  <div className="skills__description">
                    <p className="js-description-core">설명란적어야합니다.</p>
                  </div>
                  <button className="button button--stroke" data-block="button">
                    TypeScript
                  </button>
                  <ul className="skills__benefits">
                    <li className="skills__benefit">React Hooks</li>
                    <li className="skills__benefit">React Hooks</li>
                    <li className="skills__benefit">React Hooks</li>
                  </ul>
                </div>
              </li>
              <li className="skills__panel col-12 col-tablet-6 col-desktop-3">
                <div className="skills__content">
                  <h3 className="body-4 skills__heading">Next.js</h3>
                  <div className="skills__description">
                    <p className="js-description-core">설명란적어야합니다.</p>
                  </div>
                  <button className="button button--stroke" data-block="button">
                    Next.js
                  </button>
                  <ul className="skills__benefits">
                    <li className="skills__benefit">React Hooks</li>
                    <li className="skills__benefit">React Hooks</li>
                    <li className="skills__benefit">React Hooks</li>
                  </ul>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
