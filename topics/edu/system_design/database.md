# Databases
Persistence.  Structured, unstructured, semi-structured, and user state data.

## Introduction & Types of Data
### Structured Data
> Structured data is the type of data which conforms to a certain structure, typically stored in a database in a normalized fashion.

- data preparation logic doesn't need to happen before processing
- direct interaction can be done because we know the type of data we're dealing with

Examples:
- personal details of a customer stored in a database row
    - id would be int
    - name would be string with a char limit

### Unstructured Data
No definite structure.  Tends to be heterogeneous data comprised of
    - text
    - images
    - video
    - multimedia
    - pdf
    - blobs
    - word docs
    - machine-generated data

- often encountered in analytics
    - data streams in from many sources like IoT, social networks, portals, sensors, etc
- can not be directly processed because the initial data is raw
    - must flow through a data prep pipeline to organize it and then run analytics on it

### Semi-structured Data
- mix of structured and unstructred
- tends to be stored in data transfer formats like XML or JSON

### User State
> The data containing the user state is the information of activity which the user performs on the website.

Possibly comprised of:
    - shopping cart
    - preferences
    - status
    - progression (book or course)

## Relational Database
> A relational database saves data containing relationships. One to One, One to Many, Many to Many, Many to One etc. It has a relational data model. SQL is the primary data query language used to interact with relational databases.

- Most common type of db
- Most widely used type of db
- deals with data relationships
    - 1:1
    - 1:n
    - n:n
    - n:1
- MySQL is the most popular example of a relational db

### What are Relationships?
Customer creates an account and buys 5 books, now that 1 user account is linked to 5 books -- 1:n (1:5).

- 1 table contains details of the customers
- 1 table contains details of the products (books)
- 1 row of the customer table will correspond to multiple rows in the product intentory table
- pulling the user object with id C1 from the db will yield books C1 has purchased via the relationship model

### Data Consistency
- relational dbs ensure data is stored in a normalized fashion
    - a unique entity occurs in only one place/table, in its simplest and atomic form and is not spread throughout the database
- if data needs updating, it only needs to be updated in a single place and then every operation gets the updated data
- had the data been spread out into different tables, the updated value would need to be propagated, which leads to inconsistencies

### ACID Transations
> ACID – Atomicity, Consistency, Isolation, Durability.

Besides normalization & consistency, relational databases also ensure ACID transactions.

- if a transaction in a system occurs:
    - it will be executed with perfection without affecting any other processes or transactions
    - the system state will be updated after the transaction
    - if anything amiss occurs, the state can be rolled back to the previous state
    - if nothing goes wrong, the state is updated to its new state

## When Should You Pick a Relational Database?
App types:
    - trading
    - finance-based
    - generally need lots of relationships, like a social network

### Transactions & Data Consistency
- Once money is involved, ACID transactions are very important because they offer highly consistent data

### Large Community
- Tons of seasoned engineers are familiar with relational DBs

### Storing Relationships
- Relational dbs excel at storing relationships 1:1, 1:n, n:n, n:1

### Popular Relational Databases
- MySQL
- Microsoft SQL Server
- PostgreSQL
- MariaDB
- Amazon Aurora
- Google Cloud SQL

## NoSQL Databases
- no SQL
- JSON-based, built for web 2.0
- High frequency read/write

Used in:
- Twitter
- LIVE real-time sports apps
- MMOs

### How Is A NoSQL Database Different From A Relational Database?
#### Scalability
- SQL-based relational databases have scalability problems
- Scaling relational DBs is not trivial
- Have to be sharded or replicated to run smoothly on a cluster
    - high human intervention

- NoSQL dbs can add new nodes on the fly
- NoSQL dbs sacrifice strong consistency, ACID transactions in order to easily scale horizontally over a cluster/across data centers
- eventually consistent instead of strongly consistent

#### Clustering
- NoSQL run on clusters
- minimal human intervention

## Features of NoSQL databases
### Pros
- Developer-friendly
    - gentle learning curve
        - SQL databases require lots of time learning how to design well-normalized tables, setting up relationships, and trying to minimize joins
    - Schema-less
        - Designing a schema of a relational db is tough because change is difficult
        - NoSQL dbs don't have strictly enforced schemas, so things can be changed/spread around easily
        - no relationships (pro/con)
- O(1) lookups
    - fetching data with its key, usually an id, is constant time which makes the Dbs fast

### Cons
- Because of the eventually consistent nature, they are inconsistent until all clusters have been updated
- No support for ACID transactions

### Popular NoSQL Dbs
- MongoDB
- Redis
- Neo4J
- Cassandra

## When to Pick a NoSQL Database
- handling a large number of read/writes
    - offers fast scaling
- more design flexibility since NoSQL models, design, etc are easier to change
- eventual consistency
    - values are inconsistent until distributed servers catch up
- data analytics
    - time-series databases, document oriented, wide-column all lend themselves well to data

## Is NoSQL More Performant Than SQL?
No.

- NoSQL & SQL are equally performant when used for their strengths
- Both can be used in a single application for different purposes

