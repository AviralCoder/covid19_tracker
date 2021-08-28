import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contribute = () => {
    const [state, handleSubmit] = useForm("xayaaywe");

    return (
        <React.Fragment>
            <div className="contribute-screen">
                <p>
                    This project is open-source, that is, the source code of
                    this project is on <b>Github</b> and anyone can contribute
                    to it.
                </p>
                <br />
                <p>
                    To contribute, you can either raise an <b>issue</b> or a{" "}
                    <b>pull request</b> on Github. Issue is just normal text and
                    pull request is when you want to change the code of this
                    project. To raise an issue or a pull request go to their
                    respective tabs (on github repo) and for issues you need to
                    do these - <br />
                    <ul>
                        <li>Click on the green new issue button</li>
                        <li>
                            You would see something like this -
                            <img
                                src="https://github.com/AviralCoder/covid19_tracker/blob/master/src/assets/Screenshot%202021-08-28%20at%203.39.39%20PM.png"
                                alt=""
                            />
                        </li>
                    </ul>
                </p>
            </div>
        </React.Fragment>
    );
};

export default Contribute;

/*{state.succeeded ? (
                "thanks for joining in"
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" name="email" />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea id="message" name="message" />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </form>
            )}*/
