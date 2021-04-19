Enterprise Architecture Patterns by Lukas Ruebbelke on Frontend Masters
https://github.com/onehungrymind/fem-enterprise-patterns
https://stackblitz.com/edit/micro-refactor-example

Note: solutions.md contains solutions from this talk

Topics:
    - Managing Complexity
    - Local complexity
    - "The Axis of Evil"
    - Feature Complexity
    - The Four Elements of Programming
    - Application Complexity
    - The Fifth Element of Programming
    - Distributed Complexity

Notes:
- Framework agnostic
- Patterns exist to eliminate complexity
- Most of these patterns don't need to be complex -- they're so simple that they seem childish in a way
- Embrace first principles

Primary job of programmer is managing complexity in code
- The biggest problem in the dev and maintenance of large-scale software systems is complexity - large systems are hard to understand (Out of the Tarpit - Ben Mosely Peter Marks)
    - We believe that the major contributor to this complexity in many systems is the handling of state and the burden that this adds when trying to anaylse and reason about tye system.  Other closely related contributors are code volume, and explicity concern with the flow of control through the system.

"Iron Triangle"
- handling of state, code volume, and flow of control
    - Complexity leads to code purgatory
        - the more complex the system, the greater chance and level of purgatory

- Reduce side effects
    - sharing mutable state is dangerous

- How do you communicate state across a single application and then across multiple connected applications (a system)

Complexity
- micro
    - function/component level
    - can I know the result of this code at all times?
    - can I reuse it?
    - can I test it?
- mezzo
    - components/libraries/intracomponent communication
- macro
    - app/apps level complexity

The Axis of Evil
- 80% of the code out in the wild exist because someone has violated/made a deal with the devil
    - it is impossible to write good tests for bad code
        - barrier to entry can be high to writing good tests, because the code isn't testable
            - COMMIT to writing testable code
- Axis of Evil consists of:
    - Hidden state
    - Violating the SRP
    - Nested logic
        - logic nested underneath different code paths
        - much harder to test
        - very hard to reuse given that it's coupled to a particular data structure
            - note on this -- reusability IMO isn't always the most important outcome when it comes to domain logic
- fixable using DI or extract to method/parameter
    - Break nested logic into methods, similar to how we handle reducers using domain-specific update functions
    - move hidden dependencies, aka internal state, to params
- once nested code that hinges on hidden internal state is refactored, methods become much easier to test
    - "air traffic control" style method that delegates work to a sequence of methods can just make sure certain functions are called with the expected params
    - low level methods can be unit tested as input/outputs
    - This leads to fine-grained code vs. coarse-grained code

Coarse grained example:
```typescript
updateCoursesAndRecalculateCost(course: Course) { // "And" is a smell -- SRP
    switch (this.mode) { // relying on hidden state of this.mode, should be passed in as a dep
        case 'create':
        // all of this nested logic should be broken out -- it's less maintainable as is
            const newCourse = Object.assign({}, course, { id: uuidv4() });

            this.courses = [...this.courses, newCourse]; // relying on hidden state of courses, should be a dep
            break;
        case 'update':
            this.courses = this.course.map(_course => course.id === _course.id ? Object.assign({}, course) : _course);
            break;
        case 'delete':
            this.courses = this.courses.filter(_course => course.id !== _course.id);
            break;
        default:
            break;
    }

    return this.course.reduce((acc, curr) => acc + curr.price, 0); // should be a separate func
}
```

Fine-grained example:
```typescript
class HomeComponent {
  price;
  mode;
  widgets: Widget[];

  // sequencing function that helps guide updates via params
  // can easily tested that inner functions are called with the right methods
  // rather than forcing a tester to test for all outcomes of this func
  refactoredCalculateTotal(mode, widgets, widget) {
    this.widgets = this.updateWidgets(mode, widgets, widget);
    this.price = this.getTotalPrice(widgets);
  }

  updateWidgets(mode, widgets, widget) { // all args are now injected rather than accessed via encapsulation
    switch (mode) {
      case 'create':
        return this.addWidget(widgets, widget); // nested logic has been broken out
      case 'update':
        return this.updateWidget(widgets, widget);
      case 'delete':
        return this.deleteWidget(widgets, widget);
      default:
        break;
    }
  }

  addWidget(widgets, widget) {
    const newWidget = Object.assign({}, widget, { id: uuidv4() });
    return [...widgets, newWidget];
  }

  updateWidget(widgets, widget) {
    return widgets.map((wdgt) =>
      widget.id === wdgt.id ? Object.assign({}, widget) : wdgt
    );
  }

  deleteWidget(widgets, widget) {
    return widgets.filter((wdgt) => widget.id !== wdgt.id);
  }

  getTotalPrice(widgets) {
    return widgets.reduce((acc, curr) => acc + curr.price, 0);
  }
}
```

This is much easier to test, manage, and make sense of.  This is much more maintable as an app and also more easily mentally parsed

Generally, especially if not business logic, methods should be kept to 3-8 lines.  Any more could be considered a code smell.


Object Oriented Programming
- TS vs JS
    - TS communicates intention
        - reduces complexity through meaningful signaling of intention
        - helps solve the communication problem
        - but it's just JS at the end of the day

Feature Complexity

4 elements of programming
- Describing things (nouns)
- Performing actions (verbs)
- Making (decisions)
- Repeating via iteration

  Translates to =>
    - Data Structures
    - Functions
    - Conditions
    - Iterators

Code should reflect human parseable language
"Find all of the donuts with sprinkles on the green tray"

const selectedTray = trays.find(tray => tray.color === 'green');
const sprinkleDonuts = selectedTray.donuts.filter(donut => donut.sprinkles);

child.fetch(spinkeDonuts);

Objects as Nouns
```javascript
const client = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  company: 'Acme, Inc'
};
```

Properly model the domain you're in
Get domain model correct

Modeling the domain of a physical therapist
- Model a physical therapist
- Model a patient
  - naively one may think that the therapist and the patient may have a direct relationship
  - in reality, patients may have many therapists and therapists many patients
  - ends up being 1:many, 1:many, with a relationship dependent on the treatment

If you understand the domain, there's a lot you can infer about the application

An interface is a way for us to describe what something is -- a contract
```TypeScript
interface Client {
  id?: string;
  firstName: string;
  lastName: string;
  company: string;
}

const clients: Client[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    company: 'Acme, Inc'
  }
  ...
]
```

Now the client object and collection can be strongly typed.

if an object is an instance of something
interface is a contract
A class is simply a blueprint to create object

A blueprint is not a house -- a class is not an instance of an object -- a blueprint defines the behavior and parameters that are goign to exist for an object when created

interface is like regulations -- an object must exist within the bounds of the interface

Class is
- a blueprint for defining how an obj will be created
  - props
  - behavior

```typescript
class VIPClient implements Client {
  firstName;
  lastName;
  company;

  constructor(firstName, lastName, company) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.company = company;
  }
}
```

Defining and Typing Objects
