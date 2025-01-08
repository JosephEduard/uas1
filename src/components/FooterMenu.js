import "../style/menu.css"

const FooterMenu = () => {

    return (
        <div id="footer-menu">
            <div className="x-footer-top  bg-dark flex justify-center align-center">
                <h4>MAEN GAME TEROSSS</h4>
            </div>

            <div className="flex justify-between align-center x-footer-menu">
                <div className="x-footer-group">
                    <div className="x-footer-title">
                        <h5>Bantuan</h5>
                    </div>
                    <div>
                        <ul>
                            <li><a className="x-footer-list" href="">Tentang Retro Hub</a></li>
                            <li><a className="x-footer-list" href="">customer Service</a></li>
                            <li><a className="x-footer-list" href="">Kebijakan Privasi</a></li>
                            <li><a className="x-footer-list" href="">Keamanan Akun</a></li>
                            <li><a className="x-footer-list" href="">Syarat Dan Ketentuan</a></li>
                        </ul>
                    </div>
                </div>

                <div className="x-footer-group">
                    <div className="x-footer-title">
                        <h5>Ikuti Kami</h5>
                    </div>
                    <div>
                        <ul>
                            <li><a className="x-footer-list" href="">Instagram</a></li>
                            <li><a className="x-footer-list" href="">Whatsapp</a></li>
                            <li><a className="x-footer-list" href="">Threads</a></li>
                            <li><a className="x-footer-list" href="">Twitter</a></li>
                            <li><a className="x-footer-list" href="">Facebook</a></li>
                        </ul>
                    </div>
                </div>

                <div className="x-footer-group">
                    <div className="x-footer-title">
                        <h5>Hubungi Kami</h5>
                    </div>
                    <div>
                        <ul>
                            <li><a className="x-footer-list" href="">Alamat : Jl Rajawali</a></li>
                            <li><a className="x-footer-list" href="">Contact : 08123456789</a></li>
                            <li><a className="x-footer-list" href="">Email : retrohub@gmail.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="x-footer-group">
                    {/* peta alamat */}
                    <div className="x-footer-title">
                        <h5>Lokasi Kami</h5>
                    </div>
                    <div>
                        <a href="">
                            <img src="/assets/icons/lokasi.png" className="w-44 h-34" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterMenu