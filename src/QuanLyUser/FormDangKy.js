import React, { Component } from 'react'
import { Button } from '../Component/Button'
import { Table, Tr, Th, Thead, Tbody } from '../Component/Table'
import { Container } from '../Component/Container'
import { Input } from '../Component/Input'
import { Dropdown } from '../Component/Dropdown'
import '../styles/QuanlyUser.module.css'
export default class FormDangKy extends Component {

    state = {
        values: {
            accountName: '',
            username: '',
            password: '',
            phone: '',
            email: '',
            dropdown: 1
        },
        errors: {
            accountName: '',
            username: '',
            password: '',
            phone: '',
            email: '',
        }
    }


    handleChange = (event) => {
        // console.log(event.target.value)
        let { name, value } = event.target
        let newInfo = { ...this.state.values, [name]: value }
        let newError = { ...this.state.errors }
        if (name === 'accountName' || name === 'username') {
            if (value.trim() === '') {
                newError[name] += name + ' không được để trống  '
            } else {
                newError[name] = ''
            }
        }
        if (name === 'email') {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (!re.test(value)) {
                newError[name] = name + ' không hợp lệ'
            }
            else {
                newError[name] = ''
            }
        }
        if (name === 'phone') {
            const re = /(09|01[2|6|8|9])+([0-9]{8})\b/
            if (!re.test(value)) {
                newError[name] = name + ' phải có 10 chữ số và có đầu số ở Việt Nam'
            }
            else {
                newError[name] = ''
            }
        }
        
        if (name === 'password') {
            const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
            if (!re.test(value)) {
                newError[name] = name + ' phải chứa ít nhất 8 kí tự, ít nhất 1 kí tự hoa'
            } else {
                newError[name] = ''
            }
        }

        this.setState({
            values: newInfo,
            errors: newError
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        let { values, errors } = this.state;
        let valid = true;
        for (let item in values) {
            if (values[item] === '') {
                valid = false
            }
        }
        for (let item in errors) {
            if (values[item] === '' && item !== 'dropdown') {
                valid = false
            }
        }
        if (!valid) {
            alert('Kiểm tra lại các thông tin đã đăng kí!!')
            return
        }
        alert('Chúc Mừng bạn đã đăng kí thành công')
    }
    render() {
        return (
            <div>
                <div className="card text-left">
                    <h4 style={{ backgroundColor: '#242424' }} className="text-white card-header">Form Đăng Ký</h4>
                    <div className="card-body">
                        <Container>
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-6">
                                        <h6>Tài Khoản</h6>
                                        <Input value={this.state.values.accountName} name="accountName" type="text" onChange={this.handleChange} />
                                        <span className="text-danger">{this.state.errors.accountName}</span>
                                    </div>
                                    <div className="col-6">
                                        <h6>Họ Tên</h6>
                                        <Input value={this.state.values.username} name="username" type="text" onChange={this.handleChange} />
                                        <span className="text-danger">{this.state.errors.username}</span>
                                    </div>
                                    <div className="col-6">
                                        <h6>Mật Khẩu</h6>
                                        <Input autoComplete="off" value={this.state.values.password} name="password" type="password" onChange={this.handleChange} />
                                        <span className="text-danger">{this.state.errors.password}</span>
                                    </div>
                                    <div className="col-6">
                                        <h6>Số điện thoại</h6>
                                        <Input value={this.state.values.phone} name="phone" type="text" onChange={this.handleChange} />
                                        <span className="text-danger">{this.state.errors.phone}</span>
                                    </div>
                                    <div className="col-6">
                                        <h6>Email</h6>
                                        <Input value={this.state.values.email} name="email" type="email" onChange={this.handleChange} />
                                        <span className="text-danger">{this.state.errors.email}</span>
                                    </div>
                                    <div className="col-6">
                                        <h6>Loại Người Dùng</h6>
                                        <Dropdown value={this.state.values.typePerson} name="dropdown" onChange={this.handleChange}>
                                            <option value="1">Khách Hàng</option>
                                            <option value="2">Quản trị</option>
                                        </Dropdown>
                                    </div>
                                </div>
                                <Button type="submit" value="submit" SignUp>Đăng kí</Button>
                                <Button Update>Cập nhật</Button>
                            </form>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}


