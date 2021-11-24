import {useSelector} from "react-redux";
import Recommendation from "../components/Recommendation";
import { postRecommendation } from '../modules/recommendation';
import connect from 'react-redux/lib/connect/connect';

const { useEffect } = React
const RecommendationContainer = ({
    postRecommendation,
    result,
    loadingResult
}) => {
    const { latitude, longitude, distance, categories } =
        useSelector(({categories, distanceSelector, coordinates}) => ({
        categories: categories.categories,
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        distance: distanceSelector.distance,
    }));

    useEffect(() => {
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