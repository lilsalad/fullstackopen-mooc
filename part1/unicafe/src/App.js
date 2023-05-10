import { useState } from 'react'

const Section = ({text}) => {
  return <h1>{text}</h1>
}

const Display = ({value, text}) => {
  return <p>{text} {value}</p>
}

const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}>{text}</button>
}

const Summary = ({good, bad , neutral}) => {
  const numOfReviews = good+bad+neutral;
  const average = (good-bad)/numOfReviews;
  const positive = good/numOfReviews*100 + '%';

  if(numOfReviews>0)
  return (<>
    <Display value={numOfReviews} text='All'/>
    <Display value={average} text='Average'/>
    <Display value={positive} text='Positive '/>
  </>)
  else
  return <p>No reviews provided!</p>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <Section text = 'Please provide feedback: '/>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Section text = 'Summary: '/>
      <Display value={good} text='Good'/>
      <Display value={neutral} text='Neutral'/>
      <Display value={bad} text='Bad'/>
      <Summary good={good} bad={bad} neutral={neutral}/>
    </>
  )
}

export default App