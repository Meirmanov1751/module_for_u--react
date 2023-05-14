import React, {useContext, useEffect} from 'react';
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {ErrorMessage, Field, Formik} from "formik"
import classes from '../auth.module.css'
import {useNavigate} from "react-router";
import {login} from "../../../store/action.creators/auth";
import {useDispatch, useSelector} from "react-redux";

const LoginForm = () => {
    var user = useSelector(state => state.auth)
    let navigate = useNavigate();
    var dispatch = useDispatch()


    return (
        <div>
            <h1 className={classes.title}>Кіру</h1>
            <Formik initialValues={{username: '', password: ''}}
                    validate={(values) => {
                        const errors = {};
                        // if (!values.username) {
                        //   errors.username = 'Required';
                        // } else if (
                        //   !/^[^._ ](?:[\w-]|\.[\w-])+[^._ ]$/i.test(values.username)
                        // ) {
                        //   errors.username = 'Invalid username';
                        // }

                        if (!values.password) {
                            errors.password = 'Required';
                        }

                        if (values.password.length < 8) {
                            errors.password = 'password less then 8 symbol';
                        }

                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        dispatch(login(values.username, values.password));
                        debugger
                        setSubmitting(false);
                    }}>
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Field className={classes.input} placeholder={'email'} type="username" name="username"/>
                        <ErrorMessage name="username" component="div"/>
                        <Field className={classes.input} placeholder={'құпия сөз'} type="password" name="password"/>
                        <ErrorMessage name="password" component="div"/>
                        <button className={classes.btn} type="Кіру" disabled={isSubmitting}>
                            Кіру
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default observer(LoginForm);
