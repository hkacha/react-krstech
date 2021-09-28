import React, {useEffect, useState} from 'react'

import { Table } from 'react-bootstrap'

const TableComponent = () => {

	const [result, setResult] = useState([])

	useEffect(() => {
		const allData = JSON.parse(localStorage.getItem('allData'));
		setResult(allData)
	}, [])

	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>Id</th>
					<th>Title</th>
					<th>Description</th>
					<th>Email</th>
					<th>Range</th>
					<th>Valid</th>
				</tr>
			</thead>
			<tbody>
				{
					result.map((item, index) => {
						return (
							<tr key={index}>
								<td>{item.id}</td>
								<td>{item.title}</td>
								<td>{item.description}</td>
								<td>{item.email}</td>
								<td>{item.range}</td>
								<td>{item.valid}</td>
							</tr>
						)
					})
				}
			</tbody>
		</Table>
	)
}

export default TableComponent
