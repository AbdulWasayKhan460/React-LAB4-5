function StudentTable({students}){

return(
<table>
<thead>
<tr>
<th>Student ID</th><th>Name</th><th>Subject</th><th>Marks</th></tr>
</thead>
<tbody>
{students.map((student)=>(
<tr key={student.id}>
<td>{student.studentid}</td>
<td>{student.name}</td>
<td>{student.subject}</td>
<td>{student.marks}</td>
</tr>
))}
</tbody>
</table>
);
}
export default StudentTable;