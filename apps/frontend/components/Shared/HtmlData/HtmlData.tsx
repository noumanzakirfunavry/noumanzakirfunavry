const HtmlData = ({data}) =>{

    return (
        <>
          <div dangerouslySetInnerHTML={{__html: data}}/>
        </>
    )
}

export default HtmlData