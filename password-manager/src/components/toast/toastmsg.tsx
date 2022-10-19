import './toastmsg.css'

const Toast = (props:any) => {
    return (
        <div className='toast'>
            <p className='congratsMessage'>{props.message}</p>
            <i className="fa-solid fa-xmark crossSymbol"></i>
        </div>
    )
}

export default Toast