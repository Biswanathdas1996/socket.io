const Layout = ({ children, heading, subHeading }) => {
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <div className="headerWrapper">
                    <h1 className="heading">{heading}</h1>
                    <small className="subheading">{subHeading}</small>
                </div>
                {children}
            </div>
        </div>

    )
}
export default Layout;