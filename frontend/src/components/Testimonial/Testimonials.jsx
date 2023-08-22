import React from "react";
import Slider from "react-slick";
import ava04 from "../../assets/images/avt-4.jpg";
import ava02 from "../../assets/images/avt-1.jpg";
import ava06 from "../../assets/images/avt-6.jpg";
import ava01 from "../../assets/images/ava-1.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Du lịch với chúng tôi đã thực sự là một trải nghiệm đáng nhớ. Từ cách
          họ tận tâm tỉ mỉ trong việc lên kế hoạch đến việc dẫn đường chi tiết,
          chúng tôi cảm nhận được sự tận tâm và chuyên nghiệp. Hành trình đã
          vượt xa mong đợi của chúng tôi và để lại những kỷ niệm không thể nào
          quên.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> Tuấn Khanh</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Travel World thực sự hiểu nguyện vọng của khách hàng. Chúng tôi đã
          được tận hưởng những trải nghiệm độc đáo và tận hưởng những vùng đất
          mới mẻ. Họ biết cách tạo ra một chuyến đi cá nhân hóa đúng với sở
          thích của chúng tôi, từ cách chọn lựa điểm đến đến việc tạo nên những
          trải nghiệm đầy ý nghĩa.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> kim Ngân</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Tôi đã đi nhiều nơi, nhưng chưa bao giờ gặp một đội ngũ hướng dẫn viên
          đẳng cấp như ở Travel World. Họ không chỉ chia sẻ kiến thức sâu rộng
          về các điểm đến mà còn biết cách tạo nên môi trường thân thiện và vui
          vẻ. Mọi hành trình với họ đều trở thành những chuyến đi thú vị và bổ
          ích.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava06} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Quốc Long</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Travel World thực sự đã làm cho hành trình của chúng tôi trở nên dễ
          dàng và đáng nhớ. Từ việc chọn lựa các hoạt động thú vị đến việc tìm
          ra những ngọn núi đẹp nhất, họ đã tạo ra một chuyến đi không thể nào
          quên. Đội ngũ hướng dẫn viên tận tâm và kiến thức sâu rộng thực sự là
          điểm nhấn cho mỗi hành trình của chúng tôi.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> Phú Phát</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
