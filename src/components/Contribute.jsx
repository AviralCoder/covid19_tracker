import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useForm, ValidationError } from "@formspree/react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: 7,
        width: 350,
    },
}));

const Contribute = () => {
    const [state, handleSubmit] = useForm("xayaaywe");
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

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
                            Add the necessary details about the issue. (Markdown
                            is accaptable in Github)
                        </li>
                        <li>
                            Click on the green <b>Submit new issue</b>button.
                        </li>
                    </ul>
                    For pull requests -<li>Fork the repository</li>
                    <li>
                        Go to the forked repository and click the period on your
                        keyboard
                    </li>
                    <li>Make necessary changes and push it.</li>
                    <li>
                        Go to pull requests tab and click on the new pull
                        request button.{" "}
                    </li>
                    <li>
                        There would be a commit compare screen appearing, click
                        on any one of the compares and click on the necessary
                        button to raise the pull request.
                    </li>
                    <br />
                    However, if you don't have a Github account, you can
                    directly send it to me from here - <br /> <br />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        Send message
                    </Button>
                    <br />
                </p>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={() => {
                    setOpen(false);
                }}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        {state.succeeded ? (
                            <h3 style={{ color: "white", textAlign: "center" }}>
                                Thanks! We will take a look into it
                            </h3>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h4
                                    style={{
                                        color: "white",
                                        textAlign: "center",
                                    }}
                                >
                                    Send message
                                </h4>
                                <TextField
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="off"
                                    style={{ width: "100%" }}
                                />

                                <br />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <TextField
                                    id="message"
                                    label="Message"
                                    name="message"
                                    autoComplete="off"
                                    rows={4}
                                    multiline
                                    style={{ width: "100%" }}
                                />
                                <br />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                                <br />
                                <center>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        disabled={state.submitting}
                                    >
                                        Submit
                                    </Button>{" "}
                                    <br />
                                    {state.submitting ? (
                                        <p style={{ color: "white" }}>
                                            Sending
                                        </p>
                                    ) : null}
                                </center>
                            </form>
                        )}
                    </div>
                </Fade>
            </Modal>
        </React.Fragment>
    );
};

export default Contribute;
