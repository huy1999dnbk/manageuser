import React, { Component } from 'react'
import { Button } from '../Component/Button'
import { Table, Tbody, Thead, Tr, Th, Td } from '../Component/Table'

export default class TableDanhSachNguoiDung extends Component {
    render() {
        return (
            <div>
                <Table>
                    <Thead>
                        <Tr>
                            <Th colSpan="8">Danh sách người dùng</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>STT</Td>
                            <Td>Tài khoản</Td>
                            <Td>Họ tên</Td>
                            <Td>Mật khẩu</Td>
                            <Td>Email</Td>
                            <Td>Số Điện Thoại</Td>
                            <Td>Loại Người Dùng</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>123</Td>
                            <Td>123</Td>
                            <Td>123</Td>
                            <Td>123</Td>
                            <Td>123</Td>
                            <Td>123</Td>
                            <Td>123</Td>
                            <Td>
                                <Button Edit>Chỉnh sửa</Button>
                                <Button>Xóa</Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>123</Td>
                            <Td>123</Td>
                            <Td>123</Td>
                            <Td>123</Td>
                            <Td>123</Td>
                            <Td>123</Td>
                            <Td>123</Td>
                            <Td>
                                <Button Edit>Chỉnh sửa</Button>
                                <Button>Xóa</Button>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>

            </div>
        )
    }
}
