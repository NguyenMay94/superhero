import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Spin, Row, Col } from "antd";

import { getSuperHeroDetail } from "../../redux/actions/action";
import "../../asset/sass/components/super-hero-detail.scss";

const SuperHeroDetail = (props) => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  console.log(history);

  const isLoading = useSelector((state) => state.isLoading);
  const superDetail = useSelector((state) => state.superDetail);
  const superHeroListAll = useSelector((state) => state.superHeroListAll);

  useEffect(() => {
    console.log(params.id);
    dispatch(getSuperHeroDetail(superHeroListAll, +params.id));
    return () => {
      //dispatch(resetSuperDetail());
    };
  }, [dispatch, params, superHeroListAll]);

  const onClickPrevious = () => {
    history.goBack();
  };

  return (
    <Spin spinning={isLoading}>
      <div className="super-hero-detail row">
        <span className="previous-link" onClick={onClickPrevious}>
          <i className="icon-arrow-left icon" />
          previous page
        </span>
        {superDetail && (
          <Row className="super-hero-detail-section">
            <Col xs={24} md={8} className="super-hero--image">
              <img src={superDetail.images.md} alt={superDetail.name} />
            </Col>
            <Col xs={24} md={12} className="super-hero--content">
              <h1 className="title">{superDetail.name}</h1>
              <div>
                <p>Detail Description:</p>
                <Row>
                  <Col xs={8} className="col-title">
                    full name:{" "}
                  </Col>
                  <Col>{superDetail.biography.fullName}</Col>
                </Row>
                <Row>
                  <Col xs={8} className="col-title">
                    height:{" "}
                  </Col>
                  <Col>{superDetail.appearance["height"][1]}</Col>
                </Row>
                <Row>
                  <Col xs={8} className="col-title">
                    weight:{" "}
                  </Col>
                  <Col>{superDetail.appearance["weight"][1]}</Col>
                </Row>
                <Row>
                  <Col xs={8} className="col-title">
                    gender:{" "}
                  </Col>
                  <Col>{superDetail.appearance["gender"]}</Col>
                </Row>
                <Row>
                  <Col xs={8} className="col-title">
                    hair color:{" "}
                  </Col>
                  <Col>{superDetail.appearance["hairColor"]}</Col>
                </Row>
                <Row>
                  <Col xs={8} className="col-title">
                    eye color:{" "}
                  </Col>
                  <Col>{superDetail.appearance["eyeColor"]}</Col>
                </Row>
                <Row>
                  <Col xs={8} className="col-title">
                    place of birth:{" "}
                  </Col>
                  <Col>{superDetail.biography["placeOfBirth"]}</Col>
                </Row>
                <Row>
                  <Col xs={8} className="col-title">
                    first appearance:{" "}
                  </Col>
                  <Col>{superDetail.biography["firstAppearance"]}</Col>
                </Row>
                <Row>
                  <Col xs={8} className="col-title">
                    aliases:{" "}
                  </Col>
                  <Col>{superDetail.biography["aliases"][0]}</Col>
                </Row>
              </div>
            </Col>
          </Row>
        )}
      </div>
    </Spin>
  );
};

export default SuperHeroDetail;
