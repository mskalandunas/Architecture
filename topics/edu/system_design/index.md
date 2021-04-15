## Intro:

Importance of getting the application architecture right
- base needs to be carefully considered in order to avoid major design changes or refactors later

### Process
- Requirement gathering & analysis
    - the study and discussion of business requirements
- High level design
    - brainstorming usecase implementation
- Technology research
- PoC
    - helps get a closer, hands-on view on the tech and basic use case impl
        - pros and cons of tech, perf, and other limitations
    - helps with the learning curve of the tech
    - non-technical contributors have something concrete to play with
    - stakeholders get an idea of the implementation


## Tiers of software architecture:

What is a tier?
A logical separation of components in an app/service. Physical separation at the component level, not code.

### Why tiers?
- Assigning specific tasks to individual components facilitates a loosely coupled architecture. Modifications or updates made on a specific component does not impact the other components
- Different tiers having designated roles facilitate easy management & maintenance of the system as a whole. It’s easier to add new features in the application as the components are loosely coupled & code change made in one component does not affect the other components

### What is a component?
- Database
- Backend application server
- User interface
- Messaging
- Caching

![high level architecture diagram](./images/tiers_1.jpeg)

### Single tier applications
A single-tier application is an application where the user interface, backend business logic & the database all reside in the same machine.

![high level tier 1 architecture diagram](./images/tiers_2.jpeg)

#### What are some tier 1 apps?
- MS Office
- PC Games
- Photo editing software

#### Advantages
- No network latency because there's no network to deal with since all components are on one machine
- No data requests to the server -- data is quick and easily available since it's all one a single machine

#### Disadvantages
- No control over the application in terms of updates or feature changes
- Can be tweaked/reverse engineered
- Depends on the system capabilities


### Two Tier Applications
A Two-tier application involves a client and a server. The client would contain the user interface & the business logic in one machine. And the backend server would be the database running on a different machine. The database server is hosted by the business & has control over it.

![high level tier 2 architecture diagram](./images/tiers_3.jpeg)

#### What are some tier 2 apps?
- Todo list
- Planner
- Productivity app

#### Advantages
- Fewer network calls to BE because most code and all of the UI reside on the user's device (minimizes network latency)
- Data control is out of the user's hands
- Single app download with occasional updates available
- less money on servers

#### Disadvantages
- Architectural severely limits app scope
- Business logic still could be reverse engineered


### Three Tier Applications
In a three-tier application, the user interface, application logic & the database all lie on different machines & thus have different tiers. They are physically separated.

![high level tier 3 architecture diagram](./images/tiers_4.jpeg)

#### What are some tier 3 apps?
- Blog
- News website

#### Advantages
- Business logic is no longer stored on the user's device
- Data control

#### Disadvantages
- More infrastructure to manage


### N Tier Applications
AKA distributed systems. An N-tier application is an application which has more than three components involved.

- Cache
- Message queues
- Load balancer
- Search servers
- Large process components
- Web services

![high level n tier architecture diagram](./images/tiers_5.jpeg)

#### What are some n tier apps?
- Facebok
- Instagram
- Airbnb
- World of Warcraft

#### Why so many tiers?
- SRP
- SoC

#### Advantages
- a single component should not be able to take down the system

##### Notes
- SRP won't work if implementers tightly couple code or business logic across multiple layers
    - stored procedures being a good example -- what if a team wants to use a new db?  Now all of that business logic will need a new home
- on layers: in the industry layers of an application typically means the user interface layer, business layer, service layer, or the data access layer.
    - layers represent the organization of code and how it's broken into components
    - tiers represet the physical separation of components

