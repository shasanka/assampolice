import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import { Grid, TextField, Button, FormControl, InputLabel, MenuItem, Select, CircularProgress, Checkbox } from '@material-ui/core';
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
            data: {
                name: '',
                phone_no: '',
                email: '',
                gender: '',
                // age: '',
                address: '',
                school: '',
                class: '',
                division: '',
                competition_type: '',
                essay_language: '',
                declaration: false
            },
            is_submitting: false
        }
    }

    submitData = (values, actions) => {
        this.setState({ is_submitting: true }, () => {
            let uuid = uuidv4();


            let data = values;

            // for (const key in data) {
            //     data[key] = _.trim(data[key])
            // }

            data.name = _.trim(data.name);
            data.phone_no = _.trim(data.phone_no);
            data.email = _.trim(data.email);
            data.address = _.trim(data.address);
            data.school = _.trim(data.school);
            data.class = _.trim(data.class);

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
            // if (data.age === '') {
            //     this.setState({ is_submitting: false });
            //     return Swal.fire(
            //         'Error!',
            //         'Please enter your Age.',
            //         'error'
            //     )
            // }
            // if (isNaN(Number(data.age))) {
            //     this.setState({ is_submitting: false });
            //     return Swal.fire(
            //         'Error!',
            //         'Please enter valid Age (5-25).',
            //         'error'
            //     )
            // }
            // if (Number(data.age) < 5 || (Number(data.age) > 25)) {
            //     this.setState({ is_submitting: false });
            //     return Swal.fire(
            //         'Error!',
            //         'Please enter valid Age (5-25).',
            //         'error'
            //     )
            // }
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
                    'Please enter your School/Institution Name.',
                    'error'
                )
            }
            if (data.class === '') {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please enter your Class/Year.',
                    'error'
                )
            }
            if (data.division === '') {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please enter your Division.',
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
            if (data.competition_type === 'essay' && data.essay_language === '') {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please select Essay Language.',
                    'error'
                )
            }

            if (data.competition_type === 'essay' && !data.declaration) {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please agree to the Declaration.',
                    'error'
                )
            }

            if (data.competition_type !== 'essay') {
                data.essay_language = '';
                data.declaration = false;
            }

            let files_photo = this.pond_photo.getFiles();
            if (files_photo.length === 0) {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please select your Passport Size Colour Photograph file before submitting.',
                    'error'
                )
            }

            if (this.pond_photo._pond.status === 2) {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please select valid Passport Size Colour Photograph file (jpg).',
                    'error'
                )
            }

            let files_entry = this.pond_entry.getFiles();
            if (files_entry.length === 0) {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please select your Essay PDF / Yoga Video file before submitting.',
                    'error'
                )
            }

            if (this.pond_entry._pond.status === 2) {
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Error!',
                    'Please select valid Essay PDF / Yoga Video file.',
                    'error'
                )
            }

            files_photo[0].setMetadata({
                uuid: uuid,
                name: data.name,
                phone_no: data.phone_no,
                competition_type: data.competition_type,
                type: 'photo'
            });
            this.pond_photo._pond.setOptions({
                server: {
                    url: Constants.API_BASE_URL + "upload_document"
                }
            });

            files_entry[0].setMetadata({
                uuid: uuid,
                name: data.name,
                phone_no: data.phone_no,
                competition_type: data.competition_type,
                type: 'entry'
            });
            this.pond_entry._pond.setOptions({
                server: {
                    url: Constants.API_BASE_URL + "upload_document"
                }
            });

            this.pond_photo.processFile()
                .then(() => {
                    this.pond_entry.processFile()
                        .then(() => {
                            values.uuid = uuid;

                            Axios.post(Constants.API_BASE_URL + 'add_entry', values)
                                .then((res) => {
                                    if (res.data.success) {
                                        this.pond_photo.removeFiles();
                                        this.pond_entry.removeFiles();
                                        this.setState({
                                            is_submitting: false,
                                            data: {
                                                name: '',
                                                phone_no: '',
                                                email: '',
                                                gender: '',
                                                // age: '',
                                                address: '',
                                                school: '',
                                                class: '',
                                                division: '',
                                                competition_type: '',
                                                essay_language: '',
                                                declaration: false
                                            }
                                        });
                                        return Swal.fire(
                                            'Successful!',
                                            'Entry is submitted successfully.',
                                            'success'
                                        )
                                    } else {
                                        this.pond_photo.removeFiles();
                                        this.pond_entry.removeFiles();
                                        this.setState({ is_submitting: false });
                                        return Swal.fire(
                                            'Failed!',
                                            'Failed to submit your entry. Please try again after some time.',
                                            'error'
                                        )
                                    }
                                })
                                .catch(err => {
                                    this.pond_photo.removeFiles();
                                    this.pond_entry.removeFiles();
                                    this.setState({ is_submitting: false });
                                    return Swal.fire(
                                        'Failed!',
                                        'Failed to submit your entry. Please try again after some time.',
                                        'error'
                                    )
                                });
                        })
                        .catch(error => {
                            this.pond_photo.removeFiles();
                            this.pond_entry.removeFiles();
                            this.setState({ is_submitting: false });
                            return Swal.fire(
                                'Failed!',
                                'Failed to submit your entry. Please try again after some time.',
                                'error'
                            )
                        });
                })
                .catch(error => {
                    this.pond_photo.removeFiles();
                    this.pond_entry.removeFiles();
                    this.setState({ is_submitting: false });
                    return Swal.fire(
                        'Failed!',
                        'Failed to submit your entry. Please try again after some time.',
                        'error'
                    )
                });
        })
            .catch(error => {
                this.pond_photo.removeFiles();
                this.pond_entry.removeFiles();
                this.setState({ is_submitting: false });
                return Swal.fire(
                    'Failed!',
                    'Failed to submit your entry. Please try again after some time.',
                    'error'
                )
            });
    }

    render() {
        return (
            <div>
                <Formik
                    initialValues={this.state.data}
                    // enableReinitialize={true}
                    onSubmit={(values, actions) => {
                        this.submitData(values, actions);
                    }}
                >
                    {({ values }) => (
                        <Form>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
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
                                <Grid item xs={12} >
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
                                <Grid item xs={12}>
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
                                <Grid item xs={12}>
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
                                {/* <Grid item xs={12}>
                                    <Field
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                        label="Age"
                                        name="age"
                                        id="age"
                                        as={TextField}
                                    />
                                </Grid> */}
                                <Grid item xs={12} >
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
                                <Grid item xs={12} >
                                    <Field
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                        label="School/Institution Name"
                                        name="school"
                                        id="school"
                                        as={TextField}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <Field
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                        label="Class/Year"
                                        name="class"
                                        id="class"
                                        as={TextField}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <FormControl
                                        variant="outlined"
                                        fullWidth
                                        margin="dense"
                                        style={{ minWidth: 190 }}
                                    >
                                        <InputLabel id="DivisionLabel">
                                            Division
                                    </InputLabel>
                                        <Field
                                            id="division"
                                            name="division"
                                            type="select"
                                            variant="outlined"
                                            margin="dense"
                                            label="Division"
                                            as={Select}
                                        >

                                            <MenuItem key={1} value={'junior'}>
                                                Junior
                                            </MenuItem>
                                            <MenuItem key={2} value={'senior'}>
                                                Senior
                                            </MenuItem>

                                        </Field>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} >
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
                                {values.competition_type === 'essay' && <Grid item xs={12} >
                                    <FormControl
                                        variant="outlined"
                                        fullWidth
                                        margin="dense"
                                        style={{ minWidth: 190 }}
                                    >
                                        <InputLabel id="essayLanguageLabel">
                                            Essay Language
                                    </InputLabel>
                                        <Field
                                            id="essay_language"
                                            name="essay_language"
                                            type="select"
                                            variant="outlined"
                                            margin="dense"
                                            label="Essay Language"
                                            as={Select}
                                        >

                                            <MenuItem key={1} value={'assamese'}>
                                                Assamese
                                            </MenuItem>
                                            <MenuItem key={2} value={'english'}>
                                                English
                                            </MenuItem>

                                        </Field>
                                    </FormControl>
                                </Grid>}
                                {values.competition_type === 'essay' && <Grid item xs={12} >
                                    <Field
                                        id="declaration"
                                        name="declaration"
                                        type="checkbox"
                                        // value='declaration'
                                        variant="outlined"
                                        margin="dense"
                                        // label="Essay Language"
                                        as={Checkbox}
                                    >
                                    </Field>
                                        I declare that the Essay submitted by me is original and does not violate any provision of the Indian Copyright Act, 1957.
                                </Grid>}
                                <Grid item xs={12}>
                                    <FilePond
                                        ref={ref => this.pond_photo = ref}
                                        labelIdle='Please Upload your Passport Size Colour Photograph or drag and drop it here.'
                                        instantUpload={false}
                                        allowRevert={false}
                                        labelTapToRetry='Click Upload to Retry'
                                        labelTapToCancel='Click to Cancel'
                                        allowFileSizeValidation={true}
                                        maxFileSize={5e6}
                                        allowFileTypeValidation={true}
                                        acceptedFileTypes={['image/*']}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FilePond
                                        ref={ref => this.pond_entry = ref}
                                        labelIdle='Please Upload your Essay/Video file or drag and drop it here.'
                                        instantUpload={false}
                                        allowRevert={false}
                                        labelTapToRetry='Click Upload to Retry'
                                        labelTapToCancel='Click to Cancel'
                                        allowFileSizeValidation={true}
                                        maxFileSize={15e6}
                                        allowFileTypeValidation={true}
                                        acceptedFileTypes={values.competition_type === 'essay' ? ['application/pdf'] : ['video/*']}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <Button type="submit" variant="contained" fullWidth color='primary' disabled={this.state.is_submitting}>
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