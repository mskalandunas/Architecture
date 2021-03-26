# Defining the architect
At a high level, an architect is many things.  In a technical sense, an architect's role encompasses the structure, characteristics, decisions, and design principles of a system(1). They may also need to understand the culture of their organization and have strong interpersonal skills in order to create

Here are the core responsibilities of an architect(3):

- System implementation
    - Structure
    - Characteristics
    - Decisions
    - Principles
- Maintenance
    - Continuous analysis of the state of the system in the given context
    - Compliance
- Technical experience
    - Exposure to a variety of patterns, styles, and languages
    - Up-to-date on emergent technologies
- Soft skills
    - Domain knowledge
    - Interpersonal skills
    - Organization culture

## Table of Contents
1. [Implementation](#implementation)
    1. [Structure](#sub-topic-1)
    2. [Characteristics](#sub-topic-2)
    3. [Decisions]()
        1. [Variances]()
    4. [Principles]()
2. [Maintenance]()
    1. [Continuous analysis]()
    2. [Compliance]()
3. [Experience]()
    1. [Exposure]()
    2. [Emergent technologies]()
4. [Soft Skills]()
    1. [Mentorship]()
    2. [Domain understanding]()
    3. [Interpersonal Skills]()
    4. [Organization understanding]()

### Implementation

#### Characteristics
"fitness functions" testing characteristics of the architecture, like page load // pg 17 <sup>1</sup>
#### Decisions
> An architect is expected to define the architecture decisions and design principles used to guide technology decisions within the team, department, or across the enterprise (4)

- Architectural decisions (_create a microservice that can adequately handle high volumes of requests_), not technical decisions (_use express.js_)
- Most of the time, an architect should describe the way they want to solve a problem without prescribing how exactly they'd solve it -- help the development team make choices
    - this also leaves room for a team member to solve a problem in an unexpected way, and for the architect to yield to that solution rather than force their own implementation
- It's helpful to ask oneself if a decision is guiding the team vs making the decision for the team
    - an architect may occasionally need to be prescriptive but it should only happen in order to preserve a characteristic such as scalability, elasticity, etc

#### Continuous Analysis
> Architectural vitality -- how viable the architecture defined 3-4 years ago is today

- Architects should comb the system frequently and look for places where pattern improvements are possible
- Depending on the context, an architect may decide to upend the current implementation because something better has come along
- Not spending time revisiting the codebase can lead to structural decay
- Testing/release environment agility

### Experience

#### Emergent Technologies

**How can an architect make moving application logic to a different framework easier?**
- loose coupling
- separation of concerns
- inversion of control






___
1. Richards & Ford, "Fundamentals of Software Architecture", 4 // definition
2. Richards & Ford, "Fundamentals of Software Architecture", 7 // variances
3. Richards & Ford, "Fundamentals of Software Architecture", 8 // core expectations
4. Richards & Ford, "Fundamentals of Software Architecture", 9 // core expectations