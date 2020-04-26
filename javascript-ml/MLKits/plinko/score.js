// Stores all data retrieved from performing ball drops from within the application
const outputs = [];

/**
 * Updates the outputs array with data from performing test drops in the application.
 * @param {*} dropPosition Pixel position in which the ball was dropped
 * @param {*} bounciness The amount of bounciness the ball dropped has
 * @param {*} size The size of the dropped ball
 * @param {*} bucketLabel The label of the bucket that the ball went into
 */
function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  outputs.push([dropPosition, bounciness, size, bucketLabel]);
}

/**
 * Performs an analysis of the results of the KNN algorithm and outputs the feature value used along 
 * with the accuracy of the prediction. This is run using the Analyze button in the application.
 */
function runAnalysis() {
  const testSetSize = 50;
  const k = 9;

  _.range(0, 3).forEach(feature => {
    const data =  _.map(outputs, row => [
      row[feature],
      _.last(row)
    ]);
    const [testSet, trainingSet] = splitDataset(minMax(data, 1), testSetSize);
    const accuracy = _.chain(testSet)
    .filter(
      testPoint => knn(trainingSet, _.initial(testPoint), k) === _.last(testPoint)
    )
    .size()
    .divide(testSetSize)
    .value();

  console.log('Feature: ', feature, ' Accuracy: ', accuracy);
  });
};

/**
 * Implementation of the K-Nearest Neighbor algorithm to predict which bucket the ball will land in.
 * @param {[Number[]]} data 
 * @param {Number[]} testPoint Array containing the features of the test point to perform the
 * prediction on
 * @param {Number} k The number of nearest neighbors to be used in performing the prediction
 */
function knn(data, testPoint, k) {
  return _.chain(data)
    .map(row => {
      return [
        distance(_.initial(row), testPoint),
        _.last(row)
      ]
    })
    .sortBy(row => row[0])
    .slice(0, k)
    .countBy(row => row[1])
    .toPairs()
    .sortBy(row => row[1])
    .last()
    .first()
    .parseInt()
    .value();
};

/**
 * Calculates the distance between any number of points in n-dimensions.
 * @param {Number[]} pointA Array of features representing the first point in the distance calculation
 * @param {Number[]} pointB Array of features representing the second point in the distance calculation
 */
function distance(pointA, pointB) {
  return _.chain(pointA)
    .zip(pointB)
    .map(([a, b]) => (a - b) ** 2)
    .sum()
    .value() ** 0.5;
}

/**
 * Function to split a dataset into two separate sets of data. Performing this split allows us
 * to calculate the level of accuracy being achieved by our KNN implementation.
 * @param {[Number[]]} data The data to be split into the training and test data sets
 * @param {Number} testCount The number of entries to use in our test set
 */
function splitDataset(data, testCount) {
  const shuffled = _.shuffle(data);
  const testSet = _.slice(shuffled, 0, testCount);
  const trainingSet = _.slice(shuffled, testCount);

  return [testSet, trainingSet];
};

/**
 * Function used to perform feature normalization.
 * @param {[Number[]]} data The set of data that we want to perform feature normalization on
 * @param {Number} featureCount The number of features that we want to normalize
 */
function minMax(data, featureCount) {
  const clonedData = _.cloneDeep(data);

  for (let i = 0; i < featureCount; i++) {
    const column = clonedData.map(row => row[i]);
    const max = _.max(column);
    const min = _.min(column);

    for (let j = 0; j < clonedData.length; j++) {
      clonedData[j][i] = (clonedData[j][i] - min) / (max - min);
    }
  }

  return clonedData;
}