# Journey to Software Architect
This is meant to be a blueprint for growing into the software architect role.  This has been curated from a number of sources and is meant to be for personal documentation rather than as a public endeavor.  

I'm using Khalil Stemmler's _["How to Learn Software Design and Architecture | The Full-stack Software Design & Architecture Map"](https://khalilstemmler.com/articles/software-design-architecture/full-stack-software-design/)_ as the building blocks for this documentation.  If you happen to be reading this README, I highly recommend you detour and read Khalil's work instead as he consistently puts out excellent content.

Ordered overview of categories:
- [Clean Code](#clean-code)
- [Programming Paradigms](#programming-paradigms)
- [Object-Oriented Programming](#object-oriented-programming)
- [Design Principles](#design-principles)
- [Design Patterns](#design-patterns)
- [Architectural Principles](#architectural-principles)
- [Architectural Styles](#architectural-styles)
- [Archcitectural Patterns](#architectural-patterns)
- [Enterprise Patterns](#enterprise-patterns)

This starts simply, maybe from a newer professional's view, and gradually increases in scope.  Low level to high level.

## Clean Code
Coding basics.  Style, naming, testing.

> Code that is easy to understand and change

The definition of clean code.  Clean code manifests itself in the below subcategories. 

Subcategories:
- Consistenccy
- Self-documenting code
  - Meaningful naming
  - Thorough typing
  - Testing
- Consistent indentation and style
- Small files, functions, methods, classes
- Pure functions
- Refactor switch statements to classes
- [Work around booleans as function parameters](https://medium.com/@amlcurran/clean-code-the-curse-of-a-boolean-parameter-c237a830b7a3https://medium.com/@amlcurran/clean-code-the-curse-of-a-boolean-parameter-c237a830b7a3)
- Use the correct constructs
- Don't pass null
- [Command Query Separation](https://martinfowler.com/bliki/CommandQuerySeparation.html)
- Organize code by the actor it belongs to
- Keep framework code distant
- Tests should be fast, independent, and repeatable
- Refactor often

The gist is to consider all of these small pieces as cogs in the machine.  The consistency and conventions all payoff as the codebase grows.  

Code with empathy, care, craftsmanship, and kaizen.  Write self-documenting code.  Know pattern and principles.  Recognize smells and anti-patterns.

Learn the domain you're coding within.

### Suggested Resources
- Clean Code, by Robert C. Martin
- Refactoring, by Martin Fowler (2nd edition)
- The Pragmatic Programmer, by Andy Hunt and Dave Thomas
- The Design of Everyday Things, by Don Norman

## Programming Paradigms
The beginning of the journey -- understanding various programming paradigms.

- Structured Programming
- Functional Programming
- Object-Oriented Programming

From Uncle Bob in _"Clean Architecture"_
> Object-Oriented Programming is the tool best suited for defining how we cross architectural boundaries with polymorphism and plugins.  Functional programming is the tool we use to push data to the boundaries of our applications.  Structured programming is the tool we use to write algorithms.

All three programming paradigms have their place.  Algorithms are written as performantly as possible, and are relegated into their own utility, parallel to the domain layer.  Functional concepts are used for day-to-day data stream management.  Object-oriented concepts exist as the communication barrier between layers as well as a domain model.  Advanced functional concepts can work similarly (HOF for example).

### Suggested  Resources
Clean Architecture, by Robert C. Martin
Domain Modeling Made Functional, by Scott Wlaschin
Concepts of Programming Languages, by Robert W. Sebesta

## Object-Oriented Programming
- Principles
  - Inheritance
  - Polymorphism
  - Abstraction
  - Encapsulation
- Paradigm Features
  - Abstract classes
  - Concrete classes
  - Scope / visibility
  - Interfaces
- Model-Driven Design
  - Understand domain models
  - Undertand anemic models
  - Layered architectures
  - Domain language
  - Class invariants

Object-oriented programming is structured for architecture.  It lends itself especially well to creating domain models given its principles -- encapsulation, inheritance, polymorphism, and abstraction.  This helps create a software implementation of a business's mental model.

https://khalilstemmler.com/articles/domain-driven-design-intro/

### Suggested Resources
Clean Architecture, by Robert C. Martin
Object-Design Style Guide, by Matthias Noback
Domain-Driven Design, by Eric Evans

## Design Principles
When should composition be used over inheritence?  When should an abstract class be used?

Helpful principles:
- Composition over inheritance
- Encapsulate what varies
- Program against abstractions, not concretions
- The hollywood principle: "Don't call us, we'll call you"
- The [SOLID principles](https://khalilstemmler.com/articles/solid-principles/solid-typescript/), especially the [Single responsibility principle](https://khalilstemmler.com/articles/solid-principles/single-responsibility/)
- DRY (Do Not Repeat Yourself)
- [YAGNI (You Aren't Gonna Need It)](https://khalilstemmler.com/wiki/yagni/)

### Suggested Resources
- Head First Design Patterns
- Design Patterns, by the GoF

## Design Patterns
Categorized solutions to software problems.  These come in several categories -- creational, structural, and behavior.

### Creational
Creational patterns control how objects are created.

- Singleton, ensuring only a single instance of a class can exist
- Abstract Factory pattern, for creating an instance of several families of classes
- Prototype, for starting out with an instance that is cloned from an existing one

### Structural
Structural patterns simplify how relationships between components are defined.

- Adapter, for creating an interface enabling disparate interfaces to work together
- Bridge, for splitting a class that should be one or more into a set of classes belonging to a hierarchy, enabling implementations to be developed independently of each other
- Decorator, for adding responsibilities to objects dynamically

### Behavioral
Common patterns for facilitating elegant communication between objects.

- Template, for deferring the exact steps of an algorithm to a subclass
- Mediator, for defining available communication channels between classes
- Observer, for enabling classes to subscribe to something of interest and be notified of changes

### Notes
Keep YAGNI in mind and keep things as simple as possible.  Know when and when not to bother with design patterns.

### Suggested Resources
Head First Design Patterns, by various authors

## Architectural Principles
These principles help to design application structure.

### Component Design Princinples
- [The Stable Abstraction Principle](https://khalilstemmler.com/wiki/stable-abstraction-principle/)
- [The Stable Dependency Principle](https://khalilstemmler.com/wiki/stable-dependency-principle/)
- The Acyclic Dependency Principle

### Rules vs. Implementation Details
- [Policy vs. Detail](https://khalilstemmler.com/articles/enterprise-typescript-nodejs/clean-nodejs-architecture/)

### Subdomains
- [Subdomains](https://khalilstemmler.com/articles/software-design-architecture/full-stack-software-design/#:~:text=to%20identify%20the-,subdomains,-that%20the%20features) and how to identify the subdomains that the features of your application belongs within

### Suggested Resources
Clean Architecture, by Robert C. Martin

## Architectural Styles
> Architecture is about the stuff that matters

Architecture identifies what a system needs in order to be successful through iterations, and then stacking the odds of success by choosing the architecture that best fits the requirements.

A layered architecture may work best for a system with a lot of business logic complexity.

An application requiring lots of real-time events may benefit from a pub-sub architecture.

Similar to design patterns, Architectual styles have 3 high level categories.

### Structural
Projects with varying levels of components and wide-ranging functionality will either benefit or suffer from adopting a structural architecture.

- Component-based architectures emphasize separation of concerns between the individual components within a system. Think Google for a sec. Consider how many applications they have within their enterprise (Google Docs, Google Drive, Google Maps, etc). For platforms with lots of functionality, component-based architectures divide the concerns into loosely coupled independent components. This is a horizontal separation.
- Monolithic means that the application is combined into a single platform or program, deployed altogether. Note: You can have a component-based AND monolithic architecture if you separate your applications properly, yet deploy it all as one piece.
- Layered architectures separate the concerns vertically by cutting software into infrastructure, application, and domain layers.
  - Infrastructure Details
    - Controllers
    - Routes
    - Databases
    - Caches
    - ORMs
  - Adapter Logic
    - Access to infra and external APIs
  - Application Layer
    - Use Cases
    - Features
    - Services
  - Domain
    - Entities
    - Value Objects
    - Domain Events

### Messaging
Behavioral design + functional programming principles.

- Event-Driven architectures view all signficant changes to state as events. For example, within a [vinyl-trading app](https://github.com/stemmlerjs/white-label), a offer's state might change from "pending" to "accepted" when both parties agreee on the trade.
- Publish-subscribe architectures build on top of the Observer design pattern by making it the primary communication method between the system itself, end-users / clients, and others systems and components.

### Distributed
Components of the system are deployed separately and operate by communicating over a network protocol.  Effective for scaling and delegating responsibility to other components.

- Client-server architecture. One of the most common architectures, where we divide the work to be done between the client (presentation) and the server (business logic).
- Peer-to-peer architectures distribute application-layer tasks between equally-privileged participants, forming a peer-to-peer network.

**Note:** Distributed systems can also benefit from messaging architecture as well.

### Suggested Resources
Clean Architecture, by Robert C. Martin
Software Architect's Handbook, by Joseph Ingeno

## Architectural Patterns
Architectural patterns describe in detail how to implement architectural styles.  

- Domain-Driven Design is an approach to software development against really complex problem domains. For DDD to be most successful, we need to implement a layered architecture in order to separate the concerns of a domain model from the infrastrural details that makes the application actually run, like databases, webservers, caches, etc.
- Model-View Controller is probably the most well-known architectural pattern for developing user interface-based applications. It works by dividing the app into 3 components: model, view, and controller. MVC is incredibly useful when you're first starting out, and it helps you piggyback towards other architectures, but there hit's a point when we realize [MVC isn't enough](https://khalilstemmler.com/articles/enterprise-typescript-nodejs/when-crud-mvc-isnt-enough/) for problems with lots of business logic.
- Event sourcing is a functional approach where we store only the transactions, and never the state. If we ever need the state, we can apply all the transactions from the beginning of time.

### Suggested Resources
Domain-Driven Design, by Eric Evans
Implementing Domain-Driven Design, by Vaughn Vernon
___

## Sources
Khalil Stemmler's _"How to Learn Software Design and Architecture | The Full-stack Software Design & Architecture Map"_
https://khalilstemmler.com/articles/software-design-architecture/full-stack-software-design/

