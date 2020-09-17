import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import { Grid, TextField, Button, FormControl, InputLabel, MenuItem, Select, Typography, CircularProgress } from '@material-ui/core';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

import Constants from '../Constants';

registerPlugin(FilePondPluginFileValidateSize, FilePondPluginFileValidateType);
class SubmissionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            is_submitting: false
        }

    }

    submitData = (values) => {
        this.setState({ is_submitting: true }, () => {
            let uuid = uuidv4();

            let data = values;

            for (const key in data) {
                data[key] = _.trim(data[key])
            }

            if (data.name === '') {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please enter your Full Name.',
                    'error'
                )
            }
            if (data.name.length < 3) {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please enter your Full Name.',
                    'error'
                )
            }
            if (data.phone_no === '') {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please enter your Phone Number.',
                    'error'
                )
            }
            if (!data.phone_no.match('^[0-9]{10}$')) {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please enter valid 10 digit Phone Number.',
                    'error'
                )
            }
            if (data.email === '') {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please enter your Email Id.',
                    'error'
                )
            }
            if (!data.email.match('[A-Za-z0-9._%+-]+@[A-Za-z0-9]+.[A-Za-z]{2,}')) {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please enter valid Email Id.',
                    'error'
                )
            }
            if (data.gender === '') {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please select your Gender.',
                    'error'
                )
            }
            if (data.age === '') {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please enter your Age.',
                    'error'
                )
            }
            if (isNaN(Number(data.age))) {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please enter valid Age (1-18).',
                    'error'
                )
            }
            if (Number(data.age) <= 0 || (Number(data.age) > 18)) {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please enter valid Age (1-18).',
                    'error'
                )
            }
            if (data.address === '') {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please enter your Address.',
                    'error'
                )
            }
            if (data.address.length < 3) {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please enter your Address.',
                    'error'
                )
            }
            if (data.school === '') {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please enter your School Name.',
                    'error'
                )
            }
            if (data.class === '') {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please enter your Class.',
                    'error'
                )
            }
            if (data.competition_type === '') {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please select Competition Type.',
                    'error'
                )
            }

            let files = this.pond_rc.getFiles();
            if (files.length === 0) {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please select your Essay PDF / Yoga Video file before submitting.',
                    'error'
                )
            }

            if (this.pond_rc._pond.status === 2) {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please select valid Essay PDF / Yoga Video file before submitting.',
                    'error'
                )
            }

            files[0].setMetadata({
                uuid: uuid
            });
            this.pond_rc._pond.setOptions({
                server: {
                    url: Constants.API_BASE_URL + "upload_document"
                }
            });
            this.pond_rc.processFile()
                .then(file => {
                    this.pond_rc._pond.setOptions({
                        server: null
                    });

                    values.uuid = uuid;

                    Axios.post(Constants.API_BASE_URL + 'add_entry', values)
                        .then((res) => {
                            if (res.data.success) {
                                this.setState({ is_submitting: false });
                                return Swal.fire(
                                    'Successful!',
                                    'Entry is submitted successfully.',
                                    'success'
                                )
                            } else {
                                this.setState({ is_submitting: false });
                                return Swal.fire(
                                    'Failed!',
                                    'Failed to submit your entry. Please try again after some time.',
                                    'error'
                                )
                            }
                        })
                        .catch(err => {
                            this.setState({ is_submitting: false });
                            return Swal.fire(
                                'Failed!',
                                'Failed to submit your entry. Please try again after some time.',
                                'error'
                            )
                        });
                })
                .catch(error => {
                    this.setState({ is_submitting: false });
                    return Swal.fire(
                        'Failed!',
                        'Failed to submit your entry. Please try again after some time.',
                        'error'
                    )
                })
        })
    }

    render() {
        return (
            <div>
                <Formik
                    initialValues={
                        {
                            name: 'Nilutpol',
                            phone_no: '8011670731',
                            email: 'nilutpol@gmail.com',
                            gender: 'male',
                            age: 15,
                            address: 'Khanapara',
                            school: 'Army School, Khanapara',
                            class: '5',
                            competition_type: 'essay',
                        }
                    }
                    onSubmit={(values, actions) => {
                        this.submitData(values);
                    }}
                >
                    {({ values }) => (
                        <Form>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={12} lg={12}>
                                    <Field
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                        label="Full Name"
                                        name="name"
                                        id="name"
                                        as={TextField}
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12}>
                                    <Field
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                        label="Phone Number"
                                        name="phone_no"
                                        id="phone_no"
                                        as={TextField}
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12}>
                                    <Field
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                        label="Email Id"
                                        name="email"
                                        id="email"
                                        as={TextField}
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12}>
                                    <FormControl
                                        variant="outlined"
                                        fullWidth
                                        margin="dense"
                                        style={{ minWidth: 190 }}
                                    >
                                        <InputLabel id="gender">
                                            Gender
                                    </InputLabel>
                                        <Field
                                            id="gender"
                                            name="gender"
                                            type="select"
                                            variant="outlined"
                                            margin="dense"
                                            label="Gender"
                                            as={Select}
                                        >

                                            <MenuItem key={1} value={'male'}>
                                                Male
                                            </MenuItem>
                                            <MenuItem key={2} value={'female'}>
                                                Female
                                            </MenuItem>

                                        </Field>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={12} lg={12}>
                                    <Field
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                        label="Age"
                                        name="age"
                                        id="age"
                                        as={TextField}
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12}>
                                    <Field
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                        label="Full Address"
                                        name="address"
                                        id="address"
                                        as={TextField}
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12}>
                                    <Field
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                        label="School Name"
                                        name="school"
                                        id="school"
                                        as={TextField}
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12}>
                                    <Field
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                        label="Class"
                                        name="class"
                                        id="class"
                                        as={TextField}
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12}>
                                    <FormControl
                                        variant="outlined"
                                        fullWidth
                                        margin="dense"
                                        style={{ minWidth: 190 }}
                                    >
                                        <InputLabel id="competitionTypeLabel">
                                            Competition Type
                                    </InputLabel>
                                        <Field
                                            id="competition_type"
                                            name="competition_type"
                                            type="select"
                                            variant="outlined"
                                            margin="dense"
                                            label="Competition Type"
                                            as={Select}
                                        >

                                            <MenuItem key={1} value={'essay'}>
                                                Essay
                                            </MenuItem>
                                            <MenuItem key={2} value={'yoga'}>
                                                Yoga
                                            </MenuItem>

                                        </Field>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>{'Please Upload your ' + (values.competition_type === 'essay' ? 'Essay' : 'Yoga Video')}</Typography>
                                    <FilePond
                                        ref={ref => this.pond_rc = ref}
                                        labelIdle='Select file to upload or drag and drop it here.'
                                        instantUpload={false}
                                        allowRevert={false}
                                        labelTapToRetry='Click Upload to Retry'
                                        labelTapToCancel='Click to Cancel'
                                        allowFileSizeValidation={true}
                                        maxFileSize={50e6}
                                        allowFileTypeValidation={true}
                                        acceptedFileTypes={['application/pdf', 'video/*']}
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12}>
                                    <Button type="submit" variant="contained" disabled={this.state.is_submitting}>
                                        {this.state.is_submitting ?
                                            <CircularProgress
                                                color="secondary"
                                                size={26}
                                            /> : 'Submit'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default SubmissionForm;
//  <Grid item xs={12} sm={2}>
//                   <Field
//                     variant="outlined"
//                     margin="dense"
//                     fullWidth
//                     label="Network ID"
//                     name="sc.networkId"
//                     id="networkId"
//                     as={TextField}
//                   />
//                 </Grid>