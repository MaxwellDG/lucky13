import React from 'react'

export const Footer = () => {

    return(
        <div id="footer">
            <div className="footer-div">
                <p className="whiteText" id="footer-number">416.537.7376</p>
                <p><a className="tealText" href="mailto:general@lucky13tattoos.com">general@lucky13tattoos.com</a></p> 
            </div>
            <div className="footer-div">
                <p className="whiteText">880 Bloor Street West</p>
                <p className="whiteText">Toronto ON, Canada - <a className="tealText" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/880+Bloor+St+W,+Toronto,+ON+M6G+1M5/@43.6621918,-79.4274468,
                            17z/data=!3m1!4b1!4m5!3m4!1s0x882b34f557ba6479:0x570000f7243d005d!8m2!3d43.6621918!4d-79.4252581">Open in Maps</a>
                </p>
            </div>
            <div className="footer-div">
                <p className="whiteText">© Lucky 13 Tattoos Toronto 2020</p>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/lucky13toronto/">
                    <img className="socialLink" alt="img_fb" src="/images/fblogo.png" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lucky13toronto/">
                    <img className="socialLink" alt="img_insta" src="/images/insta.png" />
                </a>
            </div>
        </div>
    )
}