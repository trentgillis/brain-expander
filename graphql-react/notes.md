# GraphQL with React: The Complete Developers Guide

This file contains all of the notes taken during the completion of the GraphQL with React: The Complete Developers Guide course by Stephen Grider on Udemy. The course can be found [here](https://www.udemy.com/course/graphql-with-react-course/).

## Section 1: Why GraphQL?

* This was just introduction, nothing helpful here.

## Section 2: A REST-ful Routing Primer

* REST-ful Routing: Given a collection of records on a server, there should be a uniform URL and HTTP request method used to utilize that collection of records

### Shortcomings of REST-ful Routing

* To get the required data for any screen, many HTTP request may need to be made
* With REST-ful APIs, it's easy to over-fetch data when getting data for a particular screen

## Section 3: On To GraphQL

* GraphQL allows us to associate our data in a graph and access individual pieces of information by passing our query to our API
* By convention, when import a GraphQL library, make sure capitalization follows the convention of `GraphQL`. 

#### GraphQL Schemas
* We have to inform GraphQL on how all of our data is arranged in our database. We do this via schemas
  * The schema tells GraphQL the type of data we are working with and all of the relations between the various types of data we are using.
  * Schemas contain all of the knowledge pertaining to how our GraphQL API looks. The properties various object have and how those objects relate to other objects
  * An example schema file could be as follows:
  ```javascript
  const graphql = require('graphql');
  const _ = require('lodash');

  const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
  } = graphql;

  // Test set of users due to absence of a database
  const users = [
    { id: '1', firstName: 'Trent', age: 24 },
    { id: '2', firstName: 'Chris', age: 26 },
  ];

  const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: GraphQLString },
      firstName: { type: GraphQLString },
      age: { type: GraphQLInt },
    }
  });

  const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      user: {
        type: UserType,
        args: { id: { type: GraphQLString } }
        resolve(parentValue, args) {
          return _.find(users, { id: args.id });
        },
      }
    },
  });

  module.exports = new GraphQLSchema({
    query: RootQuery
  });
  ```
  * The `GraphQLObjectType` allows us to specify the structure of an object in our database
  * GraphQL schema objects require a `name` field which is always a String that describes the type that we are defining
  * GraphQL schemas also require a `field` property that defines all of the properties that a GraphQL type has
    * Each field should have a key which is the name of the property and a value which an object containing the type of data that the property represents
  * We also need to provide a `Root Query` to our schema
    * A root query is a property that allows us to jump into our graph of data. You can think of the root query as the entry point into the graph of data
    * The syntax of a root query essentially says if your looking for type x and you provide a type from the arguments, then GraphQL can retrieve that object from the graph of data
    * The `resolve` function is where GraphQL actually goes into the data base and finds the data that the request is looking for. While the rest of the schemas data is to inform about what the data looks like while the purpose of the `resolve` function is to actually go into the database and retrieve the data
      * At this point in the course, we can ignore the `parentValue` argument
      * The second argument is an object containing the types we want from our root query (the `args` object specified in our root query)
    * The `GraphQLSchema` object takes in a `RootQuery` and returns a GraphQL schema instance that we can pass to our GraphQL middleware

#### Writing Queries
* An example query to get data from the above code is as follows:
```javascript
{
  user(id: "1") {
    id,
    firstName,
    age
  }
}
```
* It's important to note that queries are NOT JavaScript. We can write queries in JavaScript, but queries are no actually JavaScript

#### A More Realistic Architecture

* It is not common to have a single monolithic data source. It is more common to have multiple services where GraphQL acts as a proxy between other services and the the client asking for data.
* The resolve function can work either synchronously by immediately returning data or asynchronously by returning a promise allowing us to retrieve data from other servers
* When using Axios with GraphQL we have to be careful with the way Axios nests data return from Axios requests. For example, when making a request we can solve the nested data issue using the following:
```javascript
return axios.get(`http:localhost:3000/users/${args.id}`)
  .then(resp => resp.data);
```