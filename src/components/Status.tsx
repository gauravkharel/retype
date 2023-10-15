
//conditionally render one of these= 

type StatusProps = {
    // status: string
    //if we use string here any string pass down to props shows no error so we changed it to
    status: 'loading' | 'success' | 'error'
}
function Status( props: StatusProps) {
    let message
    if(props.status === 'loading'){
        message = 'Loading...'
    } else if (props.status ==='success'){
        message = 'Data fetched successfully.'
    } else if(props.status === 'error'){
        message = 'Error fetchig data'
    }
  return (
    <div>
        <h2>Status - {message}</h2>
    </div>
  )
}

export default Status