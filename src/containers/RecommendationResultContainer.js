import { useSelector } from 'react-redux';
import MainHero from '../components/page/MainHero';
import RecommendationResult from '../components/RecommendationResult';

const RecommendationResultContainer = () => {

  const {recommendation, coordinate, loadingRecommendation} = useSelector(({userDataSubmitForm, loading}) => ({
    recommendation: userDataSubmitForm.recommendation,
    coordinate: userDataSubmitForm.coordinate,
    loadingRecommendation: loading['userDataSubmitForm/RECOMMENDATION']
  }))

  return(
    <div>
      <RecommendationResult
        loadingRecommendation={loadingRecommendation}
        coordinate={coordinate}
        recommendationResult={recommendation}
      />
    </div>
  )
}

export default RecommendationResultContainer;