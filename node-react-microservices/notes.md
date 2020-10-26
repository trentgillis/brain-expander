# Microservices with NodeJS and React

This file contains all of the notes taken during the completion of the **Microservices with NodeJS and React** course by Stephen Grider on Udemy.

## Section 1: Fundamental Ideas Around Microservices
* A monolith contains the routing, middleware, business logic and database access to implement **all features** of our app
* A *single microservice* contains the routing middleware, business logic, and database access to implement **one feature** of our app
* One of the big challenges faced when implementing microservices is data management between services
* With microservices, we story and access data in sort of a strong way. Lets look at the following:
  1. How we store data
    * Each service gets its own database
  2. How we access data
     * Services will never, ever reach into another services database
* Why use the database-per-service pattern?
  * We want each service to run independently of other services
  * Database schema/structure might change unexpectedly
  * Some services might function more efficiently with different types of DBs (SQL vs NoSQL)
* Communication Strategies Between Services:
  1. Synchronous
    * Services communicate with each other using direct requests
    * **Pros**:
      * Conceptually easy to understand
      * Service D won't need a DB
    * **Cons*:
      * Introduces a dependency between services
      * In any inter-service request fails, the overall request fails
      * The entire request is only as fast as the slowest request
      * Can easily introduce webs of requests
  2. Asynchronous
    * Services connect with each other using events
    * An event bus can be used, which creates a single point of failure, so some extra effort will need to go into making sure the even bus service is resilient
    * The asynchronous strategy using and event bus has the same pros and cons as the synchronous strategy
    * Another way of using asynchronous communication to communicate between services would be to still use the event bus, but communicated DB modification events to the bus that can then be used to maintain a db with the appropriate data for our new service
      * **Pros*:
        * Service D has zero dependencies on other services
        * Service D is going to be super fast as it is using it's own db
      * **Cons**:
        * Data is now being duplicated across services
        * Harder to understand compared to the other approaches