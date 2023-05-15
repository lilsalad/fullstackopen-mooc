const Contact = (props) => {
    //console.log(props)
    return(
    <>
      <ul>
        {props.list.map(person => <li>{person.name} - {person.number}</li>)}
      </ul>
    </>
    )
}

export default Contact