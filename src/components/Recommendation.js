const Recommendation = ({result , loadingResult}) => {
    return (
        <div>
            <section>
                <h1>추천 결과</h1>
                {loadingResult && '로딩 중...'}
                {!loadingResult && result && (
                    <div>
                        <h3>result.place_name</h3>
                        <h3>result.category_name</h3>
                        <h3>result.address_name</h3>
                        <h3>result.road_address_name</h3>
                        <h3>result.x</h3>
                        <h3>result.y</h3>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Recommendation;