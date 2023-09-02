import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './header.css'
export default function Header(){
    return (
        <div id='divHeader'>
            <a href="https://www.instagram.com/enzoggscotti/" target='_blank'>
                <FaInstagram size={40} color="#e4405f" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5548991410102" target='_blank'>
                <FaWhatsapp size={40} color="#32FF02" />
            </a>
            <a href="https://github.com/EnzoGoulart" target='_blank'>
                <FaGithub size={40} color="#3B58E5" />
            </a>
            <a href="https://www.linkedin.com/in/enzo-goulart-scotti-703573265" target='_blank'>
                <FaLinkedin size={40} color="#1F35E5" />
            </a>
            <a href="mailto:enzogscotti@example.com">
                <FaEnvelope size={40} color="#E64E3C" />
            </a>
        </div>
    )
}