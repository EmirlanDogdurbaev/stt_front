import cl from "./CourseDetail.module.scss";

function CourseDetail() {
  return (
    <div className={cl.CourseDetail}>
      <div>
        <h2>Алфавит</h2>
        <aside>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSypY8h0eIBpPbxLdf5ZJCMj3eSCi46T-iBjtDEm-jAcA&s"
            alt=""
            width={750}
            height={490}
          />
          <article>
            <p>
              «Перелом в сознании произошел», — завил в интервью RFI по поводу
              прав женщин заместитель председателя кабинета министров
              Кыргызстана Эдиль Байсалов, который прибыл в Париж в связи с
              празднованиями в честь 75-летия принятия Всеобщей декларации прав
              человека. Он также ответил на вопросы об экологических правах,
              борьбе с коррупцией и об ограничивающих свободу гражданского
              общества законопроектах.
            </p>
          </article>
        </aside>
      </div>

      <div>
        <h2>Тест</h2>
      </div>
    </div>
  );
}

export default CourseDetail;
