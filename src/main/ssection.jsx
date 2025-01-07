import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Redux 훅 임포트
import ContentsBoxLayout from "src/components/ContentsBoxLayout";
import SectionLayout from "src/components/SectionLayout";
import styles from "src/styles/pages/Home/Sections.module.scss";

function Section2() {
const [someState, setSomeState] = React.useState(null); // useState로 변경

  return (
    <section className={styles.section2}>
      <SectionLayout>
        <ContentsBoxLayout
          title={`좋은 소식 전하기`}
          contents={`BFK의 자료를 활용해서 친구, 가족, 직장 동료 등 주변
            /사람들에게 예수 그리스도의 복음을 쉽게 전해보세요.`}
        >
          <Link to="/">
            <button className={styles.exploreBtn}>
              자료실 보기
            </button>
          </Link>
        </ContentsBoxLayout>
      </SectionLayout>
    </section>
  );
}

export default Section2;
