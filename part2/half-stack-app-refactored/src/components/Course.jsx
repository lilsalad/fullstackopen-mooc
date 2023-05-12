const Course = (props) => {
    const courseName = props.course.name
    
    return(
    <>
    <h1>{courseName}</h1>
      <ul>
        {props.course.parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
      </ul>
      <p>Total exercises in this course: {props.course.parts.reduce(function(total, num){
        return total + num.exercises
      },0)}</p>
    </>
    )
}

export default Course