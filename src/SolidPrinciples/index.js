import React from "react";

export default function SolidPrinciples() {
  return (
    <>
      <h1>Solid Principles</h1>
      SOLID principles are a set of software designs which guide developers in
      building robust, maintainable applications while minimizing the cost of
      changes.
      <ul>
        <li>
          <b>Single responsibility principle:</b> A class, a module, or a
          function should be only responsible for one actor. So, it should have
          one and only one reason to change.
        </li>
        <li>
          <b>Open-closed principle:</b> Functions, modules, and classes should
          be extensible but not modifiable.
        </li>
        <li>
          <b>Liskov substitution principle:</b> Liskov principle states that we
          should not replace a parent class with its subclasses if they create
          unexpected behaviors in the application.
        </li>
        <li>
          <b>Interface segregation principle:</b> Clients should not be pushed
          to depend on interfaces they will never use.
        </li>
        <li>
          <b>Dependency inversion principle:</b>Higher-level modules should use abstractions. However, they should not depend on low-level modules.
        </li>
      </ul>
    </>
  );
}
