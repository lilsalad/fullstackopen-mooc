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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App