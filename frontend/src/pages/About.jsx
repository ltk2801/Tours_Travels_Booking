import React from "react";
import AboutSection from "../shared/AboutSection";
import { Container, Row, Col, Button } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import travel from "../assets/images/travel.jpg";
import "../styles/about.css";
import Testimonials from "../components/Testimonial/Testimonials";
const About = () => {
  return (
    <>
      <AboutSection title="Những điều về chúng tôi" />

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Về chúng tôi"} />
                <h2 className="mb-4">Chào mừng đến với Travel World</h2>
                <p>
                  Chúng tôi là Travel World, nơi bạn khám phá mọi góc cạnh của
                  thế giới thông qua những hành trình đáng nhớ. Với niềm đam mê
                  không giới hạn về việc khám phá, chúng tôi đã tạo ra một môi
                  trường nơi những kỷ niệm đáng nhớ được tạo ra và chia sẻ. Từ
                  những cảnh quan tuyệt đẹp đến văn hóa đa dạng, chúng tôi cam
                  kết đưa bạn đến những trải nghiệm mới mẻ và khám phá những
                  điều bạn chưa từng biết.
                  <br />
                  <br />
                  Tại Travel World, chúng tôi hiểu rằng mỗi hành trình là một
                  câu chuyện riêng, và chúng tôi luôn cố gắng tạo ra những
                  chuyến đi cá nhân hóa dựa trên sở thích và mong muốn của bạn.
                  Với đội ngũ hướng dẫn viên chuyên nghiệp và kiến thức sâu rộng
                  về các điểm đến, chúng tôi tự tin mang đến cho bạn những trải
                  nghiệm thú vị và khó quên.
                  <br />
                  <br />
                  Hãy cùng chúng tôi bước chân ra khỏi vùng an toàn và khám phá
                  thế giới đầy màu sắc. Travel World sẵn sàng đồng hành cùng bạn
                  trên mọi hành trình, để mỗi khoảnh khắc trở thành một kỷ niệm
                  đáng trân trọng.
                </p>
              </div>

              <Button className="btn primary__btn btn__about mt-5">
                Đọc thêm
              </Button>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={travel} alt="experience_img" />
              </div>
            </Col>
            <section>
              <Container className="mt-5">
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
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
