import React,{useEffect} from 'react'
import './main.scss'
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
{
    id: 1,
    imgSrc: img1,
    destTitle: 'Bà Nà Hills',
    location: 'Đà Nẵng, Việt Nam',
    grade: 'CẢNH QUAN ĐẸP',
    fees: '$30',
    description: 'Bà Nà Hills là khu du lịch nổi tiếng với khí hậu mát mẻ, công trình kiến trúc châu Âu và Cầu Vàng nổi bật giữa núi rừng.'
},
{
    id: 2,
    imgSrc: img2,
    destTitle: 'Ngũ Hành Sơn',
    location: 'Đà Nẵng, Việt Nam',
    grade: 'DU LỊCH TÂM LINH',
    fees: '$10',
    description: 'Ngũ Hành Sơn gồm 5 ngọn núi đá vôi tuyệt đẹp, nổi tiếng với các hang động và chùa chiền linh thiêng.'
},
{
    id: 3,
    imgSrc: img3,
    destTitle: 'Biển Mỹ Khê',
    location: 'Đà Nẵng, Việt Nam',
    grade: 'NGHỈ DƯỠNG BIỂN',
    fees: 'Free',
    description: 'Biển Mỹ Khê là một trong những bãi biển đẹp nhất hành tinh với cát trắng mịn, sóng êm và nước trong xanh.'
},
{
    id: 4,
    imgSrc: img4,
    destTitle: 'Cầu Rồng',
    location: 'Đà Nẵng, Việt Nam',
    grade: 'KIẾN TRÚC ĐỘC ĐÁO',
    fees: 'Free',
    description: 'Cầu Rồng là biểu tượng hiện đại của Đà Nẵng, nổi bật với khả năng phun lửa và phun nước vào cuối tuần.'
},
{
    id: 5,
    imgSrc: img5,
    destTitle: 'Công viên Châu Á',
    location: 'Đà Nẵng, Việt Nam',
    grade: 'GIẢI TRÍ GIA ĐÌNH',
    fees: '$15',
    description: 'Công viên Châu Á (Asia Park) là tổ hợp vui chơi giải trí với nhiều trò chơi cảm giác mạnh và vòng quay Sun Wheel.'
},
{
    id: 6,
    imgSrc: img6,
    destTitle: 'Bãi Rạng',
    location: 'Đà Nẵng, Việt Nam',
    grade: 'THIÊN NHIÊN HOANG SƠ',
    fees: 'Free',
    description: 'Bãi Rạng là bãi biển hoang sơ nằm gần bán đảo Sơn Trà, lý tưởng để tắm biển và cắm trại.'
},
{
    id: 7,
    imgSrc: img7,
    destTitle: 'Bán đảo Sơn Trà',
    location: 'Đà Nẵng, Việt Nam',
    grade: 'KHÁM PHÁ THIÊN NHIÊN',
    fees: 'Free',
    description: 'Sơn Trà được mệnh danh là “lá phổi xanh” của Đà Nẵng với cảnh quan tuyệt đẹp và đa dạng sinh học.'
},
{
    id: 8,
    imgSrc: img8,
    destTitle: 'Chùa Linh Ứng',
    location: 'Đà Nẵng, Việt Nam',
    grade: 'TÂM LINH & TỊNH TÂM',
    fees: 'Free',
    description: 'Chùa Linh Ứng nằm trên bán đảo Sơn Trà, nổi bật với tượng Phật Quan Âm cao nhất Việt Nam hướng ra biển.'
},
{
    id: 9,
    imgSrc: img9,
    destTitle: 'Bảo tàng điêu khắc Chăm',
    location: 'Đà Nẵng, Việt Nam',
    grade: 'LỊCH SỬ & VĂN HÓA',
    fees: '$5',
    description: 'Bảo tàng điêu khắc Chăm lưu giữ hàng trăm hiện vật quý giá từ nền văn hóa Chăm Pa cổ xưa.'
}
];

const Main = () => {
    useEffect(()=>{
    Aos.init({duration: 2000})
    },[])

    return (
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>
            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                        return(
                            <div key={id}
                            data-aos="fade-up"
                            className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className='Name'>{location}</span>
                                    </span>
                                    
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>

                                        <div className='price'>
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className='desc'>
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS 
                                        <HiOutlineClipboardCheck className='icon'/>
                                    </button>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </section>
    )
}

export default Main