import React, {useEffect} from 'react';
import { useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Spin, Row, Col } from 'antd';

import { getSuperDetail, resetSuperDetail } from '../../redux/actions/action';
import '../../asset/sass/components/super-hero-detail.scss';

const SuperHeroDetail = (props) => {
    const params = useParams();
    const dispatch = useDispatch();
    
    const isLoading = useSelector(state => state.isLoading);
    const superDetail = useSelector(state => state.superDetail);

    useEffect(() => {
        dispatch(getSuperDetail(params.id));
        return () => {
            dispatch(resetSuperDetail());
        }
    }, [dispatch, params]);

    return (
        <Spin spinning={isLoading}>
            <div className="super-hero-detail">
                <span className='previous-link'><i className="icon-arrow-left icon" />previous page</span>
                {superDetail && (
                <Row className="super-hero-detail-section">
                    <Col xs={24} md={12} className="super-hero--image">
                        <img src={superDetail.image.url} alt={superDetail.name}/>
                    </Col>
                    <Col xs={24} md={12} className="super-hero--content">
                        <h1 className="title">{superDetail.name}</h1>
                        <div>
                            <p>Detail Description:</p>
                            <Row>
                                <Col xs={8} className="col-title">full name: </Col>
                                <Col>{superDetail.biography["full-name"]}</Col>
                            </Row>
                            <Row>
                                <Col xs={8} className="col-title">height: </Col>
                                <Col>{superDetail.appearance["height"][1]}</Col>
                            </Row>
                            <Row>
                                <Col xs={8} className="col-title">gender: </Col>
                                <Col>{superDetail.appearance["gender"]}</Col>
                            </Row>
                            <Row>
                                <Col xs={8} className="col-title">hair color: </Col>
                                <Col>{superDetail.appearance["hair-color"]}</Col>
                            </Row>
                            <Row>
                                <Col xs={8} className="col-title">eye color: </Col>
                                <Col>{superDetail.appearance["eye-color"]}</Col>
                            </Row>
                            <Row>
                                <Col xs={8} className="col-title">place of birth: </Col>
                                <Col>{superDetail.biography["place-of-birth"]}</Col>
                            </Row>
                            <Row>
                                <Col xs={8} className="col-title">first appearance: </Col>
                                <Col>{superDetail.biography["first-appearance"]}</Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                )}
            </div>
        </Spin>
        
    )
}

export default SuperHeroDetail;