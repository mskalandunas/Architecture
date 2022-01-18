# Stable Dependency Principle (SDP)

> Components dependencies should be in the direction of stability

What does this mean?

Types of components:

Stable components have either:
- High-level policy
- Have stood  the tested of time and has more or less found its role within the architecture
  - use cases influencing change have been identified and addressed

Volatile components:
- low-level details
- fairly new and will probably change often

This means we often write code depending on stable components.  Volatile components are important and are ever present in every system -- they're essentially components in development.  It's important that no currently stable component depends on a volatile component.

Revisiting the principle, we can rewrite it as:

> The lowest level dependencies should be the most stable