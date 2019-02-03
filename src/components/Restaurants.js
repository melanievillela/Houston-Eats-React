const APIkey = `meP7_EKLifhMSzFibob9ZXuag5yhbTVz5C8pWlozlexT_AVeJdZMyC6r0uKS3jyedbcDxXwqZve__pMlgWWLgGALypHauT_FfpmZ7exJEITIrrzbT0QIKZYArWVKXHYx`;

export const getRestaurants = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Houston&categories=afghani&categories=brazilian&categories=ethiopian&categories=german&categories=honduran&categories=indian&categories=thai&sort_by=review_count`, {
    method: 'GET',
    //body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${APIkey}`
    }
  }).then(resp => resp.json())
    .then(result => result.businesses)
};

//.then(result => console.log('Results:', result.businesses))
//.catch(error => console.error('Error:', error))




