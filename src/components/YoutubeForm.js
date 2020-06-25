import React from 'react';
import './style.css';
import { useFormik } from 'formik';

function YoutubeForm(props) {

    const initialValues = {
        /* 
            chứa các biểu mẫu của Form, có bao nhiêu field sẽ có
            bấy nhiêu tên_thuoc_tinh được khai báo dưới đây.
            Và tên_thuoc_tinh phải trùng với 'name' của field.
        */
        username: "",
        email: "",
        channel: ""
    }

    const onSubmit = (values) => {
        // có thể truy cập các giá trị đã được submit
        console.log("form data submitted: ", values)
    }

    const validate = (values) => {
        let errors = {}

        if (!values.username) {
            errors.name = 'Vui lòng nhập tên của bạn.'
        }

        if (!values.email) {
            errors.email = 'Vui lòng nhập email của bạn.'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Email của bạn không hợp lệ.'
        }

        if (!values.channel) {
            errors.channel = 'Vui lòng nhập tên Channel của bạn.'
        }
        return errors;
    }

    const formik = useFormik({
        // Managing Form State
        initialValues,
        onSubmit,
        validate
    })


    return (
        <div>
            <div className="container-shadow"></div>
            <div className="container">
                <div className="wrap">
                    <div className="headings">
                        <a id="sign-in" href="# " className="active"><span>Log In</span></a>
                    </div>
                    <div id="sign-in-form">
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="username">Username</label>
                            <input
                                id="username"
                                type="text"
                                name="username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                            />

                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />

                            <label htmlFor="channel">Channel</label>
                            <input
                                id="channel"
                                type="text"
                                name="channel"
                                value={formik.values.channel}
                                onChange={formik.handleChange}
                            />

                            <input type="submit" className="button" name="submit" value="Sign in" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YoutubeForm;