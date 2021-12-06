import KakaoMap from './KakaoMap';

const RecommendationResult = ({ recommendationResult, coordinate, loadingRecommendation }) => {
  return (
    <div>
      {!loadingRecommendation && recommendationResult && (
        <div>
          <h1>추천 결과</h1>
          <p>
          상호명: {recommendationResult.place_name}
          </p>
            {recommendationResult.phone && <p>전화번호: {recommendationResult.phone}</p>}
          <p>
          지번 주소: {recommendationResult.address_name}
          </p>
          <p>
          도로명 주소: {recommendationResult.road_address_name}
          </p>
          <p>
          자세한 정보: {recommendationResult.place_url}
          </p>
          <p>
          현재 지역으로부터의 거리: {recommendationResult.distance}
          </p>
          <h2>위치</h2>
          <KakaoMap latitude={coordinate.latitude} longitude={coordinate.longitude}
                    storeLat={recommendationResult.y} storeLng={recommendationResult.x} zoomLevel={3}/>
        </div>
      )}

    </div>
  )
}

export default RecommendationResult