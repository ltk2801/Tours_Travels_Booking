import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";

import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tour/FeaturedTourList";

import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Chúng tôi biết nơi bạn sẽ đến"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Du lịch là cánh cửa để tạo ra những{" "}
                  <span className="highlight"> kỷ niệm đáng nhớ</span>
                </h1>
                <p>
                  {" "}
                  Du lịch là một cuộc hành trình kỳ diệu mở ra cánh cửa cho việc
                  tạo ra những kỷ niệm đáng nhớ. Với mỗi điểm đến mới, thế giới
                  các trải nghiệm đang chờ đợi, sẵn sàng để khắc sâu vào tâm trí
                  và trái tim chúng ta. Những cảnh quan xa lạ, những nền văn hóa
                  đa dạng và những cuộc gặp gỡ với người địa phương đều góp phần
                  tạo nên một bức tranh những khoảnh khắc mà chúng ta mang theo
                  sau mỗi chuyến đi.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* HERO SECTION */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">Chúng tôi cung cấp</h5>
              <h2 className="services__title">
                Chúng tôi đem đến những dịch vụ tốt nhất của mình
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* FEATURED TOUR SECTION */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Khám phá"} />
              <h2 className="featured__tour-title">
                Các tour nổi bật của chúng tôi
              </h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* EXPERIENCE SECTION */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Kinh nghiệm"} />
                <h3>
                  Với tất cả kinh nghiệm của chúng tôi <br /> chúng tôi sẽ phục
                  vụ bạn 1 cách tốt nhất
                </h3>
                <p>
                  Khi bạn bước chân vào thế giới du lịch với chúng tôi, bạn đang
                  mở cánh cửa đến những trải nghiệm không giới hạn. Với nhiều
                  năm hoạt động trong ngành và niềm đam mê , chúng tôi tự hào là
                  người bạn đồng hành đáng tin cậy.
                  <br /> <br />
                  Từ việc lập kế hoạch tỉ mỉ đến việc thăm thú các điểm đến thú
                  vị, chúng tôi sẽ tập trung vào mọi chi tiết nhằm mang đến cho
                  bạn một hành trình không chỉ là đi du lịch, mà còn là một
                  chuyến phiêu lưu đáng nhớ.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Chuyến đi thành công</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Khách hàng thân thiết</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Năm kinh nghiệm</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="experience_img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* GALLERY SECTION */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                {" "}
                Một số hình ảnh tour du lịch của khách hàng của chúng tôi{" "}
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Tình cảm của khách hàng"} />
              <h2 className="testimonial__title">
                {" "}
                Khách hàng nói gì về chúng tôi{" "}
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter SECTION */}
      <Newsletter />
    </>
  );
};

export default Home;
