const Contact = (props) => {
    //console.log(props.list)
    return(
    <>
      <ul>
        {props.list.map(person => <li>{person.name}</li>)}
      </ul>
    </>
    )
}

export default Contact