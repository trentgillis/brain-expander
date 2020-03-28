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

## Section 4: Fetching Data with Queries

#### Nested Queries

* We treat associations between types exactly as though it were another field. So if a user has a company type we add a company field where we specify the type and resolve function ourselves.
* When associating types, we specify a `resolve`  function such  that the type knows where to get the information for that associated type.
  * We need the  `resolve` function because we are using an object key that is different than the one being returned by the service used to fetch the data. Therefore to teach GraphQL how to define the different data, we give the field a `resolve` function.
* When using the resolve function on a type, the `parentValue` will be the properties of the user that was just fetched. We can use this information to populate a field on a type with the correct information from another type.
* Below is an example of associating types:
```javascript
const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: {
    id: { type: GraphQLString },
    name:  { type: GraphQLString },
    description: { type: GraphQLString }
  }
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
          .then(res => res.data);
      }
    }
  })
});
```

#### Multiple RootQuery Entry Points

* To allow access to multiple types of data from GraphQL queries, we can add multiple types to our `RootQuery` object.
* For example:
```javascript
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:  () => ({
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/users/${args.id}`)
          .then(res => res.data);
      }
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${args.id}`)
          .then(res => res.data);
      }
    },
  })
});
```

#### Bidirectional Relations

* When specifying a field that will return multiple of some GraphQL type, we need to pass the type to the GraphQLList constructor, ie `new GraphQLList(OurType)`.
* To resolve circular references between our GraphQL types, we must wrap  the `fields` object in our types with an arrow function.

#### Query Fragments

* Another format for GraphQL queries (that does not change the behavior of the query at all) is as follows:

```javascript
query {
  company(id: "1") {
    id,
    name,
    description
  }
}
```

* In addition to adding the query token before the first opening brace, we can also name our query by adding a name after the `query` token.
  * This can be useful for frontends that are making many different queries. An example of naming a query can be seen below

```javascript
query findCompany {
  company(id: "1") {
    id,
    name,
    description
  }
}
```

* We can name the result of a queries result. This allows us to get around issues requesting data of the same type multiple times. An example of this is below

```javascript
query findCompany {
  apple: company(id: "1") {
    id,
    name,
    description
  }
  google: company(id: "1") {
    id,
    name,
    description
  }
}
```

* Query fragments are essentially list of properties that we want to get off of a type during a query.
  * The purpose of fragments is to reduce the amount of copy / paste of properties being retrieved during a query.
  * An example of a query fragment and its use can be seen below:

```javascript
query findCompany {
  apple: company(id: "1") {
    ...companyDetails
  }
  google: company(id: "2") {
    ...companyDetails
  }

  fragment companyDetails on Company {
    id,
    name,
    description
  }
}
```

#### Mutations

* We can use GraphQL to modify the data in our data store using mutations. They can be used to create, update or delete records from our data store. Essentially, we need mutations for CRUD.
* The process of creating a mutation look very similar to the process of creating a new type.
  * It's important to note that the fields on our mutation type should describe the action that the mutation is going to perform.
  * The type on our mutations fields is the type of data we are going to eventually return from our resolve function.
  * To add validation to our args, we can wrap the args type with the `GraphQLNonNull` helper. This helper is a low level piece of validation that makes sure that a value is actually passed in. For example, in the following `args` object, `firstName` and `age` cannot be null:

  ```javascript
  args: {
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) },
    companyId: { type: GraphQLString }
  }
  ```

  * Queries for sending mutations follow a slightly different syntax than 'normal' queries. An example of one can be found below.

  ```javascript
  mutation {
    addUser(firstName: "Trentin", age: 26) {
      id,
      firstName,
      age
    }
  }
  ```

* A quick not on HTTP requests. A `PUT`request is used when we want to completely replace a record in our data store with a new record. A `PATCH` request is used when we want to update a the properties on a record in our data store.

 ## Section 5: The GraphQL Ecosystem

 * No matter what frontend and backend client is used, they all speak the same 'language' and thus can communicate with eachother. It's really just unformatted data being passed between the client and the server.
 * The GraphQL client used on the frontend will be used to write queries and pass them to our GraphQL server to get data back and display the data on the screen.
 * The big GraphQL clients currently being used in the real world:
   * Lokka - As simple as possible. Basic queries and mutations. Some simple caching.
   * Apollo Client - Produced by the same guys as MeteorJS. Good balance between features and complexity.
   * Relay - Amazing performance for mobile. By far the most complex. This is what is being used by the FaceBook team.
* In addition to there being multiple GraphQL client libraries, there are also multiple GraphQL server libraries, specifically Apollo Server and GraphQL express in the JavaScript ecosystem.
  * GraphQL Express is refered to as the reference implementation of GraphQL. It is the official implementation of GraphQL that FaceBook maintains. It is the spec of how a server can be implemented using GraphQL.
  * Apollo Server is a different implementation of how to implement a server using GraphQL.
  * It is important to note that not one of these libraries is better than the other, but the GraphQL Express implementation is far less likely to receive API changes in the future.