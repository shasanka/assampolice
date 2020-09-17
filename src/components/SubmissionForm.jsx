import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import { Grid, TextField, Button , FormControl,InputLabel,MenuItem,Select } from '@material-ui/core';


class SubmissionForm extends Component {
    constructor(props) {
        super(props);
          this.state = {
            selectedFile: null
          }
       
      }

    onChangeHandler = (event) =>{
        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
            // loaded: 0,
          },
          ()=>console.log("selected file:", this.state.selectedFile))
    }
    render() {
        return (
            <div>
                <Formik
                    initialValues={
                        {
                            name: '',
                            phoneNumber: '',
                            email: '',
                            school: '',
                            class: '',
                            competitionType:'',
                            age: '',
                            gender: '',
                            address: '',
                            pincode: ''

                        }
                    }
                    onSubmit={(values, actions) => {
                        // setTimeout(() => {
                        //   alert(JSON.stringify(values, null, 2));
                        //   actions.setSubmitting(false);
                        // }, 1000);
                        console.log("data:", values)
                        console.log("file:", this.state.selectedFile)
                      }}
                >
                    <Form>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={12} lg={12}>
                                <Field
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    label="Name"
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
                                    label="Mobile Number"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    as={TextField}
                                />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <Field
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    label="Email ID"
                                    name="email"
                                    id="email"
                                    as={TextField}
                                />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <Field
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    label="School"
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
                                        id="competitionType"
                                        name="competitionType"
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
                                    label="Address"
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
                                    label="Pincode"
                                    name="pincode"
                                    id="pincode"
                                    as={TextField}
                                />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <Button
                                    variant="contained"
                                    component="label"
                                >
                                    Upload File
                                    {/* <input
                                        type="file"
                                        style={{ display: "none" }}
                                    /> */}
                                    <input type="file" name="file" style={{ display: "none" }} onChange={this.onChangeHandler}/>
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                            <Button type="submit" variant="contained">Submit</Button>
                            </Grid>
                        </Grid>
                    </Form>
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