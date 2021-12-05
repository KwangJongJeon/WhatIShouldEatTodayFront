import React, { useEffect } from 'react';
import './KakaoMap.css';

const { kakao } = window;

const KakaoMap = ({ latitude, longitude, range }) => {
  useEffect(() => {
    // 맵 생성
    const container = document.getElementById('kakaoMap');
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 6
    };
    const map = new kakao.maps.Map(container, options);

    // 마커 생성
    const markerPosition = new kakao.maps.LatLng(latitude, longitude);
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });

    marker.setMap(map);

    const circle = new kakao.maps.Circle({
      center: new kakao.maps.LatLng(latitude, longitude), // 원의 중심 좌표
      radius: range, // 탐지하는 원의 반지름
      strokeWeight: 5, // 선의 두께
      strokeColor: '#75B8FA', // 선의 색깔
      strokeOpacity: 0.5, // 선의 불투명도 0~1
      strokeStyle: 'dashed', // 선의 스타일
      fillColor: '#CFE7FF', // 채우기 색깔
      fillOpacity: 0.5 // 채우기 불투명도
    });

    circle.setMap(map);
  })




  return (
    <div
      id={'kakaoMap'}
      className={'mb-5'}
      style={{
      width: '500px',
      height: '500px',
    }}></div>
  )
}

export default KakaoMap;

