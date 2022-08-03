import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";

const SignUpForm = () => {
    const [errors, setErrors] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [reEmail, setReEmail] = useState("");
    const [bDay, setBDay] = useState(new Date().getDay());
    const [bMonth, setBMonth] = useState(new Date().getMonth());
    const [bYear, setBYear] = useState(new Date().getFullYear());
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");

    //birthday must be 13 years old

    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("bDay", bDay);
        console.log("bMonth", +bMonth + 1);
        console.log("bYear", bYear);
        setBirthday(new Date(`${bYear} ${+bMonth + 1} ${bDay}`));
        console.log("birthday", birthday);
    }, [setBirthday, bDay, bMonth, bYear]);

    const onSignUp = async e => {
        e.preventDefault();
        if (email === reEmail) {
            const data = await dispatch(signUp(firstName, lastName, email, password, birthday));
            if (data) {
                setErrors(data);
            }
        }
    };

    // const checkAge = () => {};

    // if (user) {
    //   return <Redirect to='/' />;
    // }

    return (
        <>
            {!user && (
                <form onSubmit={onSignUp}>
                    <div>
                        {errors.map((error, ind) => (
                            <div key={ind}>{error}</div>
                        ))}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="firstname"
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
                            placeholder="First name"></input>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="firstname"
                            onChange={e => setLastName(e.target.value)}
                            value={lastName}
                            placeholder="Last name"></input>
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            placeholder="email"></input>
                    </div>
                    <div>
                        <input
                            type="email"
                            name="re-email"
                            onChange={e => setReEmail(e.target.value)}
                            value={reEmail}
                            placeholder="Re-enter email"></input>
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            placeholder="New password"></input>
                    </div>
                    <div>
                        <div>
                            <select
                                name="month"
                                onChange={e => setBMonth(e.target.value)}
                                value={bMonth}>
                                <option value={0}>Jan</option>
                                <option value={1}>Feb</option>
                                <option value={2}>Mar</option>
                                <option value={3}>Apr</option>
                                <option value={4}>May</option>
                                <option value={5}>Jun</option>
                                <option value={6}>Jul</option>
                                <option value={7}>Aug</option>
                                <option value={8}>Sep</option>
                                <option value={9}>Oct</option>
                                <option value={10}>Nov</option>
                                <option value={11}>Dec</option>
                            </select>
                        </div>
                        <div>
                            <select name="day" onChange={e => setBDay(e.target.value)} value={bDay}>
                                {[...Array(31).keys()].map(day => (
                                    <option key={day}>{day + 1}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <select
                                name="year"
                                onChange={e => setBYear(e.target.value)}
                                value={bYear}>
                                {[...Array(100).keys()].map(year => (
                                    <option key={year}>{2022 - year}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            )}
        </>
    );
};

export default SignUpForm;
