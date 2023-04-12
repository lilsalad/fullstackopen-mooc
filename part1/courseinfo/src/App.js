const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  
  return(
  <>
    <p>
      {props.parts[0]} {props.exercises[0]}
    </p>
    <p>
      {props.parts[1]} {props.exercises[1]}
    </p>
    <p>
      {props.parts[2]} {props.exercises[2]}
    </p>
  </>
  )
}

const Total = (props) => {
  return(
  <div>
    <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
  </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React','Using props to pass data','State of a component']
  const exercises = [10,7,14]

  return(
    <>
    <Header course = {course}/>
    <Content parts = {parts} exercises={exercises}/>
    <Total exercises = {exercises}/>
    </>
  )
}

export default App