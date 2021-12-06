import React, { useEffect } from 'react';
import './KakaoMap.css';
import { BiWebcam } from 'react-icons/all';

const { kakao } = window;

/**
 *
 * @param latitude 유저의 위치정보
 * @param longitude 유저의 위치정보
 * @param range 식품 추천시에 검색하는 상점의 위치 범위
 * @param zoomLevel 맵의 줌 정도, 값이 크면 클 수록 줌이 작게 땡겨집니다.
 * @param useCircle range만큼의 원을 그릴지 안그릴지 설정합니다.
 * @param storeLat 상점의 Latitude, 유저의 위치를 나타내는 latitude, longitude와 반드시 같이 와야합니다.
 * @param storeLng 상점의 Longitude, 유저의 위치를 나타내는 latitude, longitude와 반드시 같이 와야합니다.
 * @returns {JSX.Element}
 * @constructor
 */
const KakaoMap = ({ latitude, longitude, range, zoomLevel, useCircle, storeLat, storeLng}) => {
  useEffect(() => {
    // 맵 생성
    const container = document.getElementById('kakaoMap');

    // 해당 위치로 맵의 중심 좌표를 정해야 하기 때문에
    // 현재 주가되는(유저가 주인지 스토어가 주인지) 확인해야함
    // 이를 위해 cur... 사용
    let curLat = latitude;
    let curLng = longitude;

    // 스토어의 좌표 정보가 들어왔다면 현재 좌표를 스토어의 좌표라고 표기
    if(storeLat && storeLng) {
      curLat = storeLat;
      curLng = storeLng;
    }


    // 맵의 옵션 설정
    const options = {
      center: new kakao.maps.LatLng(curLat, curLng),
      level: zoomLevel,
    };
    const map = new kakao.maps.Map(container, options);







    // 마커와 인포윈도우에 대한 정보들을 집어넣음
    // 들어가있는값: id, marker, InfoWindow
    const Infos = []

    // 마커 적용
    createMakerThenPushInInfos('home', latitude, longitude, Infos)
    if(storeLat && storeLng) {
      createMakerThenPushInInfos('store', storeLat, storeLng, Infos)
    }
    for (const info of Infos) {
      info.marker.setMap(map);
    }

    // Circle 사용
    if(useCircle) {
      const circle = new kakao.maps.Circle({
        center: new kakao.maps.LatLng(curLat, curLng), // 원의 중심 좌표
        radius: range, // 탐지하는 원의 반지름
        strokeWeight: 5, // 선의 두께
        strokeColor: '#75B8FA', // 선의 색깔
        strokeOpacity: 0.5, // 선의 불투명도 0~1
        strokeStyle: 'dashed', // 선의 스타일
        fillColor: '#CFE7FF', // 채우기 색깔
        fillOpacity: 0.5 // 채우기 불투명도
      });


      circle.setMap(map);
    }

    // 인포윈도우 컨텐츠 생성
    const storeInfoWindowContent = '<div>추천 상점</div>'
    const homeInfoWindowContent = '<div>현재 위치</div>'

    // 인포윈도우 적용
    createInfoWindowOnMarkerInInfos('home', homeInfoWindowContent, map, Infos);
    if(storeLat, storeLng) {
      createInfoWindowOnMarkerInInfos('store', storeInfoWindowContent, map, Infos);
    }


    // 로드뷰 생성

  })



  const createMakerThenPushInInfos = (id, lat, lng, Infos) => {
    const markerPosition = new kakao.maps.LatLng(lat, lng);
    const marker = new kakao.maps.Marker({
      position: markerPosition
    })

    return Infos.push({
      id: id,
      marker: marker,
      infoWindow: null,
    })

  }



  /**
   * 이 메소드를 실행하기 전에 반드시 인포윈도우를 적용할 marker를 설정해야합니다. (createMarkerThenPushInInfos() 메소드 활용)
   * @param id 마커의 아이디 (home, store등)
   * @param content 인포윈도우의 컨텐츠
   * @param map 인포윈도우를 적용할 맵
   * @param Infos 마커의 정보가 담겨있는 Infos 배열
   */
  const createInfoWindowOnMarkerInInfos = (id, content, map, Infos) => {
    const infoWindow = new kakao.maps.InfoWindow({
      content: content
    });

    for (const info of Infos) {
      if(info.id === id) {
        info.infoWindow = infoWindow;

        // 객체에 마우스 오버 이벤트가 발생하면 인포윈도우를 마커위에 표기합니다.
        kakao.maps.event.addListener(info.marker, 'mouseover', () => {
          infoWindow.open(map, info.marker);
        })

        // 마커에 마우스아웃 이벤트가 발생하면 인포 윈도우를 제거합니다.
        kakao.maps.event.addListener(info.marker, 'mouseout', () =>{
          infoWindow.close();
        })

      }
    }
  }




  return (
    <div
      id={'kakaoMap'}
      className={'mb-5'}
      style={{
      width: '100%',
      height: '500px',
    }}><button>{BiWebcam()} 로드뷰 보기</button></div>
  )
}

export default KakaoMap;

