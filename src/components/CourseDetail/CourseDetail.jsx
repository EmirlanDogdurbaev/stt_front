import { useEffect, useState } from "react";
import classes from "./CourseDetail.module.scss";

function CourseDetail() {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        async function fetchQuestions(){
            try {
                const response  = await axios.get("http://192.168.54.19:8000/lesson/reading/`${id}`");
                setQuestions(response.data);
            } catch (error) {
                console.error("Error fetching questions: ", error);
            }
        }  

        fetchQuestions();  
    }, []);

    const [questionData, setQuestionData] = useState({
        text: "",
        answer: null,
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("asdasd")
        try {
            const formData = new FormData();
            formData.append("title", questionData.text);
            formData.append("image", questionData.answer);

            const response = await axios.post(
                "http://192.168.54.19:8000/reading/``${id}`/test",
                formData
            );
            console.log(response.data);
        } catch (error) {
            console.error("Error sending answer:", error);
        }
    };


    return (
        <div className={classes.CourseDetail}>
            <div className={classes.CourseDetail__wallpaper}>
                <img src="https://wallpaper.dog/large/5439940.jpg" alt="wallpaper" className={classes.CourseDetail__img} />
            </div>
            <div className={classes.CourseDetail__content}>
                <h2 className={classes.CourseDetail__title}>Алфавит</h2>    
                <p className={classes.CourseDetail__text}>
                «Перелом в сознании произошел», — завил в интервью RFI  по поводу прав  женщин заместитель председателя кабинета министров Кыргызстана Эдиль  Байсалов, который прибыл в Париж в связи с празднованиями  в честь 75-летия принятия Всеобщей декларации прав человека. Он также  ответил на вопросы об экологических правах, борьбе с коррупцией и об  ограничивающих свободу гражданского общества законопроектах.
                «Перелом в сознании произошел», — завил в интервью RFI  по поводу прав  женщин заместитель председателя кабинета министров Кыргызстана Эдиль  Байсалов, который прибыл в Париж в связи с празднованиями  в честь 75-летия принятия Всеобщей декларации прав человека. Он также  ответил на вопросы об экологических правах, борьбе с коррупцией и об  ограничивающих свободу гражданского общества законопроектах.
                «Перелом в сознании произошел», — завил в интервью RFI  по поводу прав  женщин заместитель председателя кабинета министров Кыргызстана Эдиль  Байсалов, который прибыл в Париж в связи с празднованиями  в честь 75-летия принятия Всеобщей декларации прав человека. Он также  ответил на вопросы об экологических правах, борьбе с коррупцией и об  ограничивающих свободу гражданского общества законопроектах.
                </p> 

            <div className={classes.test}>
                <h3 className={classes.test__title}>Дававйте пройдем небольшой тест для закрепления материала:</h3>    
                <ul className={classes.test__questions}>
                    <li className={classes.test__quetion}>
                        <h4 className={classes.quetion__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veritatis?</h4>
                        <ul className={classes.answers}>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 1</button>
                            </li>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 2</button>
                            </li>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 3</button>
                            </li>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 4</button>
                            </li>
                        </ul>
                    </li>
                    <li className={classes.test__quetion}>
                        <h4 className={classes.quetion__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veritatis?</h4>
                        <ul className={classes.answers}>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 1</button>
                            </li>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 2</button>
                            </li>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 3</button>
                            </li>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 4</button>
                            </li>
                        </ul>
                    </li>
                    <li className={classes.test__quetion}>
                        <h4 className={classes.quetion__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veritatis?</h4>
                        <ul className={classes.answers}>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 1</button>
                            </li>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 2</button>
                            </li>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 3</button>
                            </li>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 4</button>
                            </li>
                        </ul>
                    </li>
                    <li className={classes.test__quetion}>
                        <h4 className={classes.quetion__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veritatis?</h4>
                        <ul className={classes.answers}>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 1</button>
                            </li>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 2</button>
                            </li>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 3</button>
                            </li>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 4</button>
                            </li>
                        </ul>
                    </li>
                    <li className={classes.test__quetion}>
                        <h4 className={classes.quetion__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veritatis?</h4>
                        <ul className={classes.answers}>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 1</button>
                            </li>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 2</button>
                            </li>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 3</button>
                            </li>
                            <li className={classes.answer}>
                                <button className={classes.variant}>Variant 4</button>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className={classes.test__end}>
                    <p className={classes.test__result}>
                        Total: <span className={classes.test__rights}>5</span>/<span className={classes.test__total}>5</span>
                    </p>
                    <p className={classes.test__mark}>Excellent</p>
                </div>
            </div>      
            </div> 
        </div>
    );
}

export default CourseDetail;
