import React from 'react'
import { Layout } from '../components/Layout'
import { Button, Col, Form, Row, TimePicker } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import Input from 'antd/es/input/Input'

function ApplyDoctor() {
  const onFinish= (values: any) => {
    console.log('Success', values);
    
  }
  return (
    <div>
      <Layout>
        <h1 className='page-title'>Apply Doctor</h1>
        <hr />
        <Form layout='vertical' onFinish={onFinish}>
          <h1 className="card-title">Personal Information</h1>
          <Row gutter={20}>
            <Col span={8} xs={24} sm={24} lg={8}>
              <FormItem label="First Name" name="firstName" rules={[{required:true}]}>
                <Input placeholder='First Name'/>
              </FormItem>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <FormItem label="Last Name" name="lastName" rules={[{required:true}]}>
                <Input placeholder='Last Name'/>
              </FormItem>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <FormItem label="Phone Name" name="phoneName" rules={[{required:true}]}>
                <Input placeholder='Phone Name'/>
              </FormItem>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <FormItem label="Website" name="website" rules={[{required:true}]}>
                <Input placeholder='Website'/>
              </FormItem>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <FormItem label="Address" name="address" rules={[{required:true}]}>
                <Input placeholder='Address'/>
              </FormItem>
            </Col>
          </Row>
          <hr />
          <h1 className="card-title">Professional Information</h1>
          <Row gutter={20}>
            <Col span={8} xs={24} sm={24} lg={8}>
              <FormItem label="Specialization" name="specialization" rules={[{required:true}]}>
                <Input placeholder='Specialization'/>
              </FormItem>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <FormItem label="Experience" name="experience" rules={[{required:true}]}>
                <Input placeholder='Experience' type='number'/>
              </FormItem>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <FormItem label="Fee Per Cunsultation" name="feePerCunsultation" rules={[{required:true}]}>
                <Input placeholder='Fee Per Cunsultation' type='number'/>
              </FormItem>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <FormItem label="Timings" name="timings" rules={[{required:true}]}>
                <TimePicker.RangePicker/>
              </FormItem>
            </Col>
          </Row>
          <div className='d-flex'>
            <Button type="primary" htmlType='submit'>SUBMIT</Button>
          </div>
        </Form>
      </Layout>
    </div>
  )
}

export default ApplyDoctor