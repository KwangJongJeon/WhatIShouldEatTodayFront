import {useSelector} from "react-redux";
import Recommendation from "../components/Recommendation";
import { postRecommendation } from '../modules/recommendation';
import connect from 'react-redux/lib/connect/connect';
import { useState } from 'react';

const { useEffect } = React
const RecommendationContainer = ({
    postRecommendation,
    result,
    loadingResult
}) => {
  const { latitude, setLatitude } = useState(0);
  const { longitude, setLongitude } = useState(0);
    const { distance, categories } =
        useSelector(({categories, distanceSelector, coordinates}) => ({
        categories: categories.categories,
        distance: distanceSelector.distance,
    }));

    useEffect(() => {

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude.toString());
          setLongitude(position.coords.longitude.toString());
        },
        (error) => {
          /** 에러 처리 로직이 들어가야함 */
          console.error("Error code: " + error.code + " - " + error.message);
        }
      )
      postRecommendation(latitude, longitude, distance, categories);
        postRecommendation(latitude, longitude, distance, categories);
    }, postRecommendation);

    return (
        <Recommendation
          result={result}
          loadingResult={loadingResult}
        />
    );
};

export default connect(
  ({ recommendation }) => ({
      result: recommendation.result,
      loadingResult: recommendation.loadingResult
  }),
  {
      postRecommendation,
  }
)(RecommendationContainer);