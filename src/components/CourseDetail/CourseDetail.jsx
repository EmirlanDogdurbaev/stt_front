import classes from "./CourseDetail.module.scss";
import {useParams} from "react-router-dom";
import {api} from "../../store/requests/api.js";
import {useEffect, useState} from "react";
import axios from "axios";

function CourseDetail() {
    const {id} = useParams();

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get(`${api}/lesson/grammar/${id}/`).then((response) => {
            setCourses(response.data);
        })
    }, []);


    const [reading, setReading] = useState([]);
    useEffect(() => {
        axios.get(`${api}/lesson/reading/${id}/`).then((response) => {
            setReading(response.data);
        })
    }, []);


    // sdasdasd

    const [selectedAnswers, setSelectedAnswers] = useState({});
    console.log(selectedAnswers)

    const handleAnswerChange = (questionId, selectedOptionId) => {
        setSelectedAnswers(prevState => ({
            ...prevState,
            [questionId]: selectedOptionId
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const jsonData = JSON.stringify(answerData.answers);

            const response = await axios.post(
                `http://192.168.54.19:8000/lesson/reading/${id}/test/`,
                {answers: {"1": 3, "2": 6, "3": 9}}
            );

            console.log(response.data);
        } catch (error) {
            console.error("Error adding film:", error);
        }
    };


    const [speaking, setSpeaking] = useState([]);
    useEffect(() => {
        try {
            axios.get(`${api}/lesson/reading/${id}/`).then((response) => {
                setSpeaking(response)
            })
        } catch (error) {
            console.error("Error adding film:", error);
        }
    }, []);


    console.log(speaking);

    return (<div className={classes.CourseDetail}>
        <div className={classes.CourseDetail__wallpaper}>
            <img src="https://wallpaper.dog/large/5439940.jpg" alt="wallpaper"
                 className={classes.CourseDetail__img}/>
        </div>
        <div className={classes.CourseDetail__content}>
            <h2 className={classes.CourseDetail__title}>{courses.title}</h2>
            <p className={classes.CourseDetail__text}>
                {courses.content}
            </p>

            {reading.questions && reading.questions.map((question, index) => (
                <div key={index}>
                    <h3>{question.text}</h3>
                    {question.options.map((option) => (
                        <ul className={classes.answers} key={option.id}>
                            <li className={classes.answer}
                                style={{border: "1px solid red", padding: "10px 20px", margin: "10px 0"}}>
                                <p>{option.id}</p>
                                <button className={classes.variant}
                                        onClick={() => {
                                            console.log(option.id);
                                            handleAnswerChange(question.id, option.id);
                                        }}

                                        style={{padding: "10px 20px"}}>
                                    {option.text}
                                </button>
                            </li>
                        </ul>
                    ))}
                </div>
            ))}

            <button onClick={handleSubmit}>test</button>

            <div className={classes.test}>
                <h3 className={classes.test__title}>Дававйте пройдем небольшой тест для закрепления
                    материала:</h3>
                <ul className={classes.test__questions}>
                    <li className={classes.test__quetion}>
                        <h4 className={classes.quetion__text}>{reading.title}</h4>
                        <p>{reading.content}</p>


                    </li>
                    <li className={classes.test__quetion}>
                        <h4 className={classes.quetion__text}>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse, veritatis?</h4>
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
                        <h4 className={classes.quetion__text}>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse, veritatis?</h4>
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
                        <h4 className={classes.quetion__text}>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse, veritatis?</h4>
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
                        <h4 className={classes.quetion__text}>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse, veritatis?</h4>
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
                        Total: <span className={classes.test__rights}>5</span>/<span
                        className={classes.test__total}>5</span>
                    </p>
                    <p className={classes.test__mark}>Excellent</p>
                </div>
            </div>
        </div>
    </div>);
}

export default CourseDetail;
