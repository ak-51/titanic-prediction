import ReactLoading from 'react-loading'

const Loading = () => {
    const type = "bars"
    const color = "#41A5F9"
    return(
        <div className="loadinganimation">
            <ReactLoading type={type} color={color} height={'5%'} width={'5%'} />
        </div>
    )
}
export default Loading